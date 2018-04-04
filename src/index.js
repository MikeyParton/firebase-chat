import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'app/store'
import { ThemeProvider } from 'styled-components'
import theme from 'app/theme'
import { messaging } from 'app/firebase'
import Page from 'features/Page/Page'
import './index.css'

class App extends React.Component {
  state = {
    currentUser: null,
  }

  render() {
    const { currentUser, loaded } = this.state

    return (
      <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
          <Page />
        </ThemeProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}

messaging.onMessage((payload) => {
  console.log('onMessage: ', payload)
})
