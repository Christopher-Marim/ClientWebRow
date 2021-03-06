// @ts-ignore
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './hooks/auth'
import { StateProvider } from './hooks/state'
import { CamScreen } from './screens/CamScreen'
import { HomeScreen } from './screens/HomeScreen'
import { QrCodeScreen } from './screens/QrCodeScreen'
import { UserScreen } from './screens/UserScreen'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StateProvider>
          <Routes>
            <Route element={<HomeScreen />} path="/" />
            <Route element={<UserScreen />} path="/user" />
            <Route element={<QrCodeScreen />} path="/qr" />
            <Route element={<CamScreen />} path="/cam" />
          </Routes>
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
