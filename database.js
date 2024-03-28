import  { Sequelize }  from "sequelize";

const conexao = process.env.CONEXAO
const sequelize = new Sequelize (conexao)


// try{
// await sequelize.authenticate()
// console.log("sucesso database")
// }catch (erro){
//     console.log(erro)
// }


export default sequelize