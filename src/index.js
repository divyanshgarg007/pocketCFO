import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import App from './views/App/App'
import reportWebVitals from './reportWebVitals'
import configureStore from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = configureStore()
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
)

reportWebVitals()
