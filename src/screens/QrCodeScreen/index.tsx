import { Container } from './styles'
import QrReader from 'react-qr-scanner'
import { useState } from 'react'
import { Logo } from '../../components/LogoComponent'
import { useNavigate } from 'react-router-dom';

export function QrCodeScreen() {
  const navigate = useNavigate();
  const [result, setResult] = useState({})
  const [scanned, setScanned] = useState(false)

  return (
    <Container>
        <Logo width={350} height={150}></Logo>
      {scanned == false && (
        <QrReader
          delay={1000}
          style={{
            height: 1000,
            width: '100%',
            maxWidth:800,
            borderRadius:20
          }}
          onError={(e: any) => {
            alert(e)
          }}
          onScan={(data: any) => {
            if (data !== null) {
              console.log(data)
              setResult(data)
              navigate('/cam')
            }
          }}
        />
      )}
      <h3>Escaneie o QRCODE do totem da clinica</h3>
    </Container>
  )
}
