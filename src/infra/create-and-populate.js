/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq);

//==== Usuários
const EDITORA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "EDITORA" (
    "ID_EDITORA"  int,
    "CNPJ" varchar(14),
    "NOME" varchar,
    "ENDEREÇO" varchar,
    "EMAIL" varchar


  );`;

const ADD_EDITORA_DATA = `
INSERT INTO EDITORA (ID_EDITORA, CNPJ , NOME, ENDEREÇO, EMAIL)
VALUES 
    (1, '0232149500110','MODELO', RUA 9 DE DEZEMBRO, 'MODELO2021@GMAIL.COM'),
    (2, '0560222465200', 'MODERNA', 'RUA PORTO SECO'), 'MODERNA2021@GMAIL.COM'),
    (3, '4230809924321', 'LEITURA', 'RUA ALAMEDA 24'), 'LEITURA@2021@GMAIL.COM')
`        

function criaTabelaEditora() {
    db.run(EDITORA_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de Editora");
    });
}


function populaTabelaEditora() {
    db.run(ADD_EDITORA_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Editora");
    });
}


db.serialize( ()=> {
    criaTabelaEditora();
    populaTabelaEditora();
   
});