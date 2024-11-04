import express from 'express'
import cors from 'cors'


const app = express()
const port = 3000
app.use(express.json())
app.use(cors())





const funcionarios = []

let cont = 1
const id = () => cont++

const cadastroFuncionarios = (nome, matricula, dataNascimento, telefone,  cpf,  endereco, numero, bairro, cidade, estado,  localTrabalho, dataAdmissao) => {
    funcionarios.push({ id: id(), nome, matricula, dataNascimento, telefone,  cpf,  endereco, numero, bairro, cidade, estado,  localTrabalho, dataAdmissao})
}

app.get('/funcionarios', (req, res) => {
    res.send(funcionarios)
})

app.post('/funcionarios', (req, res) => {
    cadastroFuncionarios(req.body.nome, req.body.matricula, req.body.dataNascimento, req.body.telefone,  req.body.cpf,  req.body.endereco, req.body.numero, req.body.bairro, req.body.cidade, req.body.estado, req.body.localTrabalho, req.body.dataAdmissao)
    res.send('Funcionário cadastrado com sucesso!')
})




















app.listen(port, () => {
  console.log('Servidor Funcionando')
})

