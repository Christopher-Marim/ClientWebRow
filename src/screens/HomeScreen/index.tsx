import React, { useState, ChangeEvent, EventHandler } from 'react'
import { Logo } from '../../components/LogoComponent'
import { maskCpf } from '../../utils/mask'
import { Container, WrapperLogin } from './styles'
import { useNavigate } from 'react-router-dom'
export function HomeScreen() {
  const [valueCpf, setValueCpf] = useState('')
  const [valueAuxCpf, setValueAxuCpf] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  function HandleValueChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    var v = value.replace(/\./g, '')
    setValueAxuCpf(v.replace(/\-/g, ''))
    setValueCpf(maskCpf(value))
    setError(false)
  }
  function HandleClickButton() {
    if (valueCpf.length == 14) {
      //Fazer requisição api e trazer usuario
      //por enquanto sendo feito redirecionamento direto
      navigate('/user')
    }
    else{
        setError(true);
        alert('CPF Inválido')
    }
  }
  return (
    <Container>
      <Logo width={350} height={150}></Logo>
      <WrapperLogin>
        <h5>Digite seu CPF</h5>
        <input
          inputMode="numeric"
          value={valueCpf}
          maxLength={14}
          placeholder={'123.456.789-10'}
          onChange={HandleValueChange}
          style={error?{borderStyle:'solid', borderWidth:2, borderColor:'red'}:{}}
        ></input>
        <button
          type="button"
          onClick={() => {
            HandleClickButton()
          }}
        >
          Confirmar
        </button>
      </WrapperLogin>
      <div></div>
      <span>Politicas de privacidade</span>
    </Container>
  )
}
