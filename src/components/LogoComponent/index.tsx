import logo from "../../assets/LOGO.svg";

export function Logo(){
    return(
        <img src={logo} style={{ marginBottom:50, objectFit:"contain"}} width={350} height={150}></img>
    )
}