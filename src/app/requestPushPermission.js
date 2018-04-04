import { database, messaging } from './firebase'

export default (user) => {
  messaging.requestPermission()
    .then(() => {
      return messaging.getToken()
    })
    .then((token) => {
      console.log('token is :', token)
      database.ref(`users/${user.uid}/tokens/${token}`).set(true)
    })
    .catch((err) => {
      console.log('error', err)
    })
}
