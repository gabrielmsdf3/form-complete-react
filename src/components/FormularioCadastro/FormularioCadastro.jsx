import { Step, StepLabel, Stepper, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import DadosEntrega from "../DadosEntrega"
import DadosPessoais from "../DadosPessoais"
import DadosUsuario from "../DadosUsuario"

function FormularioCadastro({ aoEnviar}) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})
  useEffect(() =>{
    if (etapaAtual === formularios.length-1) {
      aoEnviar(dadosColetados);
    }
    
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>

  ]

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados})
    proximo()
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  return <div>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Dados pesoais</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </div>
}

export default FormularioCadastro

/*
Ao utilizamos o hook de useState indicamos para o React 
que aquele componente quer guardar estado. Para isso são 
devolvidas duas informações, a primeira é a referência 
para o valor do estado atual e a segunda é a função que altera 
esse estado.
*/
