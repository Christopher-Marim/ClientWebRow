import logo from "../../assets/LOGO.svg";

interface Props {
    width:number;
    height:number;

}

export function Logo({width, height}:Props){
    return(
        <img src={logo} style={{ marginBottom:50, objectFit:"contain"}} width={width} height={height}></img>
    )
}