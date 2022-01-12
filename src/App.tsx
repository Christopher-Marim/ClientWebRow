// @ts-ignore
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './hooks/auth'
import { StateProvider } from './hooks/state'
import { HomeScreen } from './screens/HomeScreen'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StateProvider>
          <Routes>
            <Route element={<HomeScreen />} path="/" />
          </Routes>
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
