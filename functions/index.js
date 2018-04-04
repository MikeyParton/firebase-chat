const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.newMessageAlert = functions.database.ref('/conversations/{conversationId}/messages/{message}')
.onWrite((change, context) => {
  try {

    // Fetch a user based on id
    const getUser = (id) => admin.database().ref(`/users/${id}`).once('value').then((snapshot) => {
      return snapshot.val()
    })

    // Fetch a list of users ids that could be notified by a message
    const getUserIds = messageRef => new Promise((resolve, reject) => {
      const usersRef = messageRef.parent.parent.child('users')

      usersRef.once('value').then((snapshot) => {
        let userIds = []
        snapshot.forEach((user) => {
          const id = user.key
          userIds.push(id)
        })
        return resolve(userIds)
      })
    })

    // Fetch the tokens for a list of userIds
    const getTokens = (messageRef) => new Promise((resolve, reject) => {
      getUserIds(messageRef).then((userIds) => {
        const tokens = []

        const promises = userIds.map((id) => admin.database().ref(`/users/${id}/tokens`).once('value').then((snapshot) => {
          snapshot.forEach((snap) => {
            const token = snap.key
            tokens.push(token)
          })
        }))

        Promise.all(promises).then(() => {
          resolve(tokens)
        })
      })
    })

    const message = change.after.val()
    const messageRef = change.after.ref

    Promise.all([
      getTokens(messageRef),
      getUser(message.userId)
    ]).then((results) => {
      const tokens = results[0]
      const user = results[1]

      console.log('sending notifications to tokens: ', tokens)

      const payload = {
        notification: {
          title: `New Message from ${user.name}`,
          body: message.text,
          icon: user.avatar
        }
      }

      console.log('message payload: ', payload)

      admin.messaging().sendToDevice(tokens, payload)
        .then((response) => {
          response.results.forEach((result, index) => {
            const error = result.error;

            if (error) {
              console.error('Failure sending notification to', tokens[index], error)
            }
          })
        })
        .catch((error) => {
          console.log(error)
        })
    })

  } catch(error) {
    console.log(error)
  }
})
