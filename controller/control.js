import { Cervejas } from "../models/molds.js"

const getCerveja = async (req, res) => {
    try {
        const cerveja = await Cervejas.findAll()
        res.status(200).send({ cerveja })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: "erro ao buscar dados" })
    }
}



const postCerveja = async (req, res) => {

    try {
        const { nome, nacionalidade, abv, tipo } = req.body
        if (!nome || !nacionalidade || !abv || !tipo) return res.status(404).send({
            mensagem:
                "Informação incompletas"
        })
        const cervejaCriada = await Cervejas.create({ nome, nacionalidade, abv, tipo })
        res.status(201).send({ cervejaCriada })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: "Erro ao inserir produto" })
    }

}

const putCerveja = async (req, res) => {
    try {
        const { id } = req.params
        const { nome, nacionalidade, abv, tipo } = req.body
        const CervejaAtualizada = await Cervejas.update({ nome, nacionalidade, abv, tipo }, { where: { id } })
        res.status(200).send({ CervejaAtualizada })

    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: "Erro ao atualizar dado" })
    }
}
const deleteCerveja = async (req, res) => {
    try {
        const { id } = req.params
        await Cervejas.destroy({ where: { id } })
        res.status(200).send({ CervejaAtualizada })

    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: "Erro ao deletar dado" })
    }
}

const getId = async (req, res) => {
    try {
        const { id } = req.params
        const cerveja = await Cervejas.findOne({ where: { id: { id } } })
        res.status(200).send({ cerveja })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: "erro ao buscar dados" })
    }
}
const getNac = async (req, res) => {
    try {
        const { nacionalidade } = req.params
        const cerveja = await Cervejas.findOne({ where: { nacionalidade: nacionalidade } })
        res.status(200).send({ cerveja })

    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: "erro ao buscar dados" })
    }

}
const getTip = async (req,res) => {
    try{
        const {tipo} = req.params
        const cerveja = await Cervejas.findOne({where:{tipo:tipo}})
        res.status(200).send({cerveja})
    }catch(erro){
        console.log(erro)
        res.status(404).send({mensagem:"erro ao buscar dados"})
    }
}




export { getCerveja, postCerveja, putCerveja, deleteCerveja, getId,getNac,getTip }