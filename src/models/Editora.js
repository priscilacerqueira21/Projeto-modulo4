//const editora = require("../controllers/editora")//

class Editora {
    
    constructor(id_editora, cnpj, nome, endereço, email) {
        this.id_editora = this.verificaId_editora(id_editora)
        this.cnpj= this.verificaCnpj(cnpj)
        this.nome = this.verificaNome(nome)
        this.endereço = this.verificaEndereço(endereço)
        this.email= this.verificaEmail(email)
    }

    verificaId_editora(id_editora){
        if(id_editora !== ""){
            return id_editora
        }else {
            return 0
          
        }
    }
    verificaCnpj(cnpj){
        if(cnpj !== ""){
            return cnpj
        }else {
            return 0  
          
        }
    }

    verificaNome(nome){
        if(nome !== ""){
            return nome
        }else {
            return 0  
          
        }
    }

    verificaEndereço(endereço){
        if(endereço !== "" ){
            return endereço
        }else {
          return 0
        }
    }
    verificaEmail(email){
        if(email >=0 || email !== ''){
            return email
        }else {
            return -1
          
        }
    }
}

module.exports = Editora