class EditoraDAO {
    constructor(bdEditora) {
        this._bdEditora = bdEditora

    }
    select_editora() {
        return new Promise((resolve, reject) => {
            this._bdEditora.all('SELECT * FROM EDITORA', (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "editora": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }
    select_editora_id(id) {
        return new Promise((resolve, reject) => {
            this._bdEditora.all(`SELECT * FROM EDITORA WHERE ID = ${id}`, (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "editora": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }
    insert_editora(novoEditora) {
        return new Promise((resolve, reject) => {
            this._bdEditora.run(`
           INSERT INTO Editora (ID-EDITORA, CNPJ, NOME , ENDEREÇO, EMAIL)
            VALUES 
           (?, ?, ?, ?, ?)
            `, [novoEditora.id-editora, novoEditora.cnpj, novoEditora.nome, novoEditora.endereço, novoEditora.email], (error) => {
                if (error) {
                    reject({
                        "editora": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "editora": novoEditora,
                        "erro": false
                    })
                }
            })
        })
    }
    update_editora(id, novoEditora) {
        return new Promise((resolve, reject) => {
            this._bdEditora.run(`
            UPDATE EDITORA SET (ID-EDITORA, CNPJ, NOME , ENDEREÇO, EMAIL) = 
           (?, ?, ?, ?, ?)
           where ID = ${id}
            `, [novoEditora.id-editora, novoEditora.cnpj, novoEditora.nome, novoEditora.endereço, novoEditora.email], (error) => {
                if (error) {
                    reject({
                        "editora": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "editora": novoEditora,
                        "erro": false
                    })
                }
            })
        })
    }
    delete_editora(id) {
        return new Promise((resolve, reject) => {
            this._bdEditora.run(`
            DELETE FROM EDITORA 
           where ID = ${id}
            `,  (error) => {
                if (error) {
                    reject({
                        "editora": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "mensage": "item removido com sucesso",
                        "erro": false
                    })
                }
            })
        })
    }
s

}

module.exports = EditoraDAO