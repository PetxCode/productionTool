import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './router/mainRoute'
import { GlobalState } from './global/GlobalState'

const App = () => {
  return (
    <div>
      <GlobalState>
        <RouterProvider router={mainRoute} />
      </GlobalState>
    </div>
  )
}

export default App