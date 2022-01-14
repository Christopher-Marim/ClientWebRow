import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Logo } from '../../components/LogoComponent'
import user from '../../assets/user.svg'
import { Container } from './styles'
import { useAuth } from '../../hooks/auth'

export function UserScreen() {
  const navigate = useNavigate()

  /* const {user} = useAuth(); */

  const userAux = {
    id: 1,
    nome: 'Christopher',
    sobrenome: 'Marim',
    img: user,
    queue: [
      {
        id: '3',
        step: 'Teste de olho',
        level: '1',
        position: '7',
        fila_number: '03'
      }
    ]
  }

  return (
    <Container>
      <Logo width={350} height={150}></Logo>
      <img
        className="imgUser"
        src={userAux.img}
        style={{ backgroundColor: 'whitesmoke' }}
      ></img>
      <h3>
              Olá{' '}
              <strong>
                {userAux.nome}
              </strong>
              , pedimos para que aguarde sua vez, logo mais você será atendido.
            </h3>
      {
        (userAux.queue.length == 0) && (
          <>
            <h3>
              Olá{' '}
              <strong>
                {userAux.nome} {userAux.sobrenome}
              </strong>
            </h3>
            <Button onClick={() => navigate('/qr')}>
              <label>ENTRAR NA FILA</label>
            </Button>
          </>
        )
      }
    </Container>
  )
}
