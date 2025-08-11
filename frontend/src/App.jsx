import { BrowserRouter } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'
import LoginForm from './Pages/Login'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AppLayout/>
      </BrowserRouter>
    </div>
  )
}

export default App
