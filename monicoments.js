const axios = require("axios")
const express = require("express")
let users = []

const api = axios.create({
        baseURL: "https://api.github.com/"
    })

api.get("repos/seita-ifce/hello-js-v3/issues/2/comments").then(ret => {
    users = (ret.data)
    //verifica se tem algum comentario
    if (users.length == 0){
        console.log("Nenhum comentário na issue!")
    }
    //percorre o array de usuarios, verifica se o login é sombriks e se a data é menor que 2017-09-15, utilizando template string.
    for( let i = 0; i < users.length; i++){ 
        let dataComentario = new Date(users[i].created_at)
        if (users[i].user.login != "sombriks" && dataComentario < (new Date("2017-09-15"))) {
                console.log(`---\nNome: ${users[i].user.login} \nComentário: ${users[i].body.trim()} \nData : ${dataComentario.getDate()+"/"+dataComentario.getMonth()+"/"+dataComentario.getFullYear()} \n---`)
            }
    }
})


