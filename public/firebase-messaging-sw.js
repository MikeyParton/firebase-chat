importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

const firebaseConfig = {
  messagingSenderId: "171073444580"
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const title = payload.title
  const options = {
    body: payload.body,
    icon: '/firebase-logo.png'
  }

  return self.registration.showNotification(title, options);
})
