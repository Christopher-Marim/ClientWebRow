import { Container } from './styles'
import QrReader from 'react-qr-scanner'
import { useState } from 'react'
import { Logo } from '../../components/LogoComponent'

export function QrCodeScreen() {
  const [result, setResult] = useState({})
  const [scanned, setScanned] = useState(false)

  return (
    <Container>
        <Logo></Logo>
      {scanned == false && (
        <QrReader
          delay={1000}
          style={{
            height: 1000,
            width: '100%',
          }}
          onError={(e: any) => {
            alert(e)
          }}
          onScan={(data: any) => {
            if (data !== null) {
              console.log(data)
              setResult(data)
              setScanned(true)
            }
          }}
        />
      )}
      <h3>Escaneie o QRCODE do totem da clinica</h3>
    </Container>
  )
}
