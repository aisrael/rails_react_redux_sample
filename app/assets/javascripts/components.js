import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from 'components/App.js'
import todoApp from './reducers'

let store = createStore(todoApp)

global.Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
