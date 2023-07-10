import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './router/mainRoute'
import { GlobalState } from './global/GlobalState'
import { Provider } from "react-redux"
import { store } from './global/store'

const App = () => {
  return (
    <div>
      <Provider store={store} >
      <GlobalState>
        <RouterProvider router={mainRoute} />
      </GlobalState>
      </Provider>
    </div>
  )
}

export default App