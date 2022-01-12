import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ButtonStyles } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}

export function Button({children, ...rest}:Props){
    return(
        <>
        <ButtonStyles {...rest}>{children}<BsArrowRight color="white" size={40}></BsArrowRight></ButtonStyles>
        </>
    )
}