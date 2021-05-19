import React, { Component } from "react"
import "./App.css"
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import { Container, Typography } from "@material-ui/core"
import "fontsource-roboto"
import { validarCPF, validarSenha } from "./models/cadastro"
import validacoesCadastro from "./contexts/validacoes"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <validacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </validacoesCadastro.Provider>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default App
