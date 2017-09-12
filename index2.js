const axios = require("axios")

const api = axios.create({
        baseURL: "http://api.github.com"
    })

api.get("/search/users?q=tavares1").then(ret => console.log(ret.data))
