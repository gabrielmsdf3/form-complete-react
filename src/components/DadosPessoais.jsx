import React, { useState, useContext } from "react"
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core"
import validacoesCadastro from "../contexts/validacoes"

// eslint-disable-next-line react/prop-types
function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })

  const validacoes = useContext(validacoesCadastro)
  function validarCampos(event) {
    const { name, value } = event.target
    const novoEstado = { ...erros }
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
  }

  function possoEnviar() {
    for(let campo in erros){
      if(!erros[campo].valido){
        return false
      }
    }
    return true
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if(possoEnviar()){
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
        }
        
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)
        }}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promo????es"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked)
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Pr??ximo
      </Button>
    </form>
  )
}

export default DadosPessoais

/*
Ao utilizamos o hook de useState indicamos para o React 
que aquele componente quer guardar estado. Para isso s??o 
devolvidas duas informa????es, a primeira ?? a refer??ncia 
para o valor do estado atual e a segunda ?? a fun????o que altera 
esse estado.
*/
