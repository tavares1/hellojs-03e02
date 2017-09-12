const axios = require("axios")
const express = require("express")
let users = []

const api = axios.create({
        baseURL: "https://api.github.com/"
    })

api.get("repos/seita-ifce/hello-js-v3/issues/2/comments").then(ret => {
    users = (ret.data)
    if (users.length == 0){
        console.log("Nenhum comentário na issue!")
    }
    for( let i = 0; i < users.length; i++){
        if (users[i].user.login != "sombriks") {         
            console.log(`Nome: ${users[i].user.login} - Comentário: ${users[i].body}`)
        }
    }
})
