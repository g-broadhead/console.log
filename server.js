const express = require("express");
const path = require("path");

require("dotenv").config()

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, "client", "build")))
// app.use(routes)

app.listen(process.env.PORT || 3001, async () => {
    console.log(`Server running`)
})
