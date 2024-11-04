import { format } from "date-fns"
import { addDays } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'
import parse from 'date-fns/parse'
import { differenceInDays } from "date-fns"
import { intervalToDuration } from "date-fns"

let cont = 1
const id = () => cont++

const funcionarios = []

const cadastroFunc = (nome, dataNascimento, CPF, telefone, cidade, CEP, logradouro, bairro, numero, matricula, localTrabalho, dataAdmissao) => {
    if (typeof nome !== "string") Error('error')
    if (typeof dataNascimento !== "string") Error('error')
    if (typeof CPF !== "number") Error('error')
    if (typeof telefone !== "string") Error('error')
    if (typeof cidade !== "string") Error('error')
    if (typeof CEP !== "number") Error('error')
    if (typeof logradouro !== "string") Error('error')
    if (typeof bairro !== "string") Error('error')
    if (typeof numero !== "number") Error('error')
    if (typeof matricula !== "string") Error('error')
    if (typeof localTrabalho !== "string") Error('error')
    if (typeof dataAdmissao !== "string") Error('error')

    funcionarios.push({ id: id(), nome, dataNascimento, CPF, telefone, cidade, CEP, logradouro, bairro, numero, matricula, localTrabalho, dataAdmissao })
}

const alterarCadastroFunc = (id, nome, dataNascimento, CPF, telefone, cidade, CEP, logradouro, bairro, numero, matricula, localTrabalho, dataAdmissao) => {
    if (typeof nome !== "string") Error('error')
    if (typeof dataNascimento !== "string") Error('error')
    if (typeof CPF !== "number") Error('error')
    if (typeof telefone !== "string") Error('error')
    if (typeof cidade !== "string") Error('error')
    if (typeof CEP !== "number") Error('error')
    if (typeof logradouro !== "string") Error('error')
    if (typeof bairro !== "string") Error('error')
    if (typeof numero !== "number") Error('error')
    if (typeof matricula !== "string") Error('error')
    if (typeof localTrabalho !== "string") Error('error')
    if (typeof dataAdmissao !== "string") Error('error')

    const encontrarFuncionario = funcionarios.find(funcionario => funcionario.id === id)
    if (nome) encontrarFuncionario.nome = nome
    if (dataNascimento) encontrarFuncionario.dataNascimento = dataNascimento
    if (CPF) encontrarFuncionario.CPF = CPF
    if (telefone) encontrarFuncionario.telefone = telefone
    if (cidade) encontrarFuncionario.cidade = cidade
    if (CEP) encontrarFuncionario.CEP = CEP
    if (logradouro) encontrarFuncionario.logradouro = logradouro
    if (bairro) encontrarFuncionario.bairro = bairro
    if (numero) encontrarFuncionario.numero = numero
    if (matricula) encontrarFuncionario.matricula = matricula
    if (localTrabalho) encontrarFuncionario.localTrabalho = localTrabalho
    if (dataAdmissao) encontrarFuncionario.dataAdmissao = dataAdmissao
}

const deletandoCadastrofunc = (id) => {
    const filtrandoFunc = funcionarios.filter(funcionario => funcionario.id !== id)
    console.log(filtrandoFunc)
}

cadastroFunc('Leandro dos Santos Cunha', "16/10/1984", 10945157797, '22991031962', 'Sumidouro-RJ', 28637000, 'Rua Vigário de Alexandre', 'Centro', 51, '21.06.4532', 'E.M. Carolina Nunes', '01/09/2022')
alterarCadastroFunc(1, 'Winni Borges', '', '', '', '', '', '', '', '', '', '', '')
// deletandoCadastrofunc(1)
console.log(funcionarios)


const dataLicenca = (id, dataUsuario, dias) => {
    const encontrarFuncionario = funcionarios.find(funcionario => funcionario.id === id)
    if (encontrarFuncionario) {
        let dataEntrada = parse(dataUsuario, 'dd/MM/yyyy', new Date(), { locale: ptBR })
        const calculo = addDays(dataEntrada, dias)
        const dataFormatada = format(new Date(calculo), "dd/MM/yyyy")
        console.log(`Funcionário ${encontrarFuncionario.nome} na matricula ${encontrarFuncionario.matricula}, sua licença começa em ${dataUsuario} com ${dias} dia(s) e termina em ${dataFormatada}`)
    }
}

const distanciaEntreDatas = (id, dataInicial, dataFinal) => {
    const encontrarFuncionario = funcionarios.find(funcionario => funcionario.id === id)
    if (encontrarFuncionario) {
        let dataEntrada = parse(dataInicial, 'dd/MM/yyyy', new Date(), { locale: ptBR })
        let dataSaida = parse(dataFinal, 'dd/MM/yyyy', new Date(), { locale: ptBR })
        const diasEntreDatas = differenceInDays(dataSaida, dataEntrada)
        console.log(`Entre a data ${dataInicial} e ${dataFinal} o servidor ${encontrarFuncionario.nome} na matricula ${encontrarFuncionario.matricula},  tem ${diasEntreDatas} dia(s).`)
    }
}

const intervaloDataAdmissao = (id, dataSaida) => {
    const encontrarFuncionario = funcionarios.find(funcionario => funcionario.id === id)
    if (encontrarFuncionario) {
        let dataEntrada = parse(encontrarFuncionario.dataAdmissao, 'dd/MM/yyyy', new Date(), { locale: ptBR })
        if (dataSaida) {
            let dataFinal = parse(dataSaida, 'dd/MM/yyyy', new Date(), { locale: ptBR })
            const intervalo = intervalToDuration({
                start: new Date(dataEntrada),
                end: new Date(dataFinal)
            })
            if (intervalo.days === undefined) intervalo.days = 0
            if (intervalo.months === undefined) intervalo.months = 0
            if (intervalo.years === undefined) intervalo.years = 0
            console.log(`Seu tempo de trabalho é de ${intervalo.days} dia(s) ${intervalo.months} mês(s) e ${intervalo.years} ano(s).`)
        } else {
            const intervalo = intervalToDuration({
                start: new Date(dataEntrada),
                end: new Date()
            })
            if (intervalo.days === undefined) intervalo.days = 0
            if (intervalo.months === undefined) intervalo.months = 0
            if (intervalo.years === undefined) intervalo.years = 0
            console.log(`Funcionário ${encontrarFuncionario.nome} na matricula ${encontrarFuncionario.matricula}. Seu tempo de trabalho é de ${intervalo.days} dia(s) ${intervalo.months} mês(s) e ${intervalo.years} ano(s).`)
        }
    }

}




// parametro primeiro é o ID para encontrar o funcionario
// parametro segundo é a data inicial da licença
// parametro terceiro são os dias a partir da data inicial da licença
dataLicenca(1, "26/10/2024", 30)
console.log('_________________________________')
// parametro primeiro é o ID para encontrar o funcionario
// parametro segundo é a data inicial da difernça entre datas
// parametro terceiro a data final para calcular os dias entre a data inicial e final
distanciaEntreDatas(1, "27/10/2024", "03/03/2025")
console.log('_________________________________')
// parametro primeiro é o ID para encontrar o funcionario
// parametro segundo caso queira colocar a data de inicio de Admissao que ja vem automatico pelo cadastro
intervaloDataAdmissao(1, "02/09/2022")