
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { WebcamComponent } from "../../components/WebcamComponent";
import { Logo } from "../../components/LogoComponent";
import { Container,WrapperCam } from "./styles";

export function CamScreen() {
    const navigate = useNavigate();
  return (
    <Container>
      <Logo width={175} height={75}></Logo>
      <WrapperCam>
        <WebcamComponent></WebcamComponent>
      </WrapperCam>
      <Button onClick={()=>navigate('/user')}><label>FINALIZAR</label></Button>
    </Container>
  );
}
