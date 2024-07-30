// const express = require('express')
// const app = express()
// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(3000, () => console.log('Server ready'))

// *********0:00 Intro & Setup********
import express from "express";

const app =express();

const PORT=process.env.PORT || 3000;

app.listen(PORT ,() => {
    console.log(`Running on port${PORT}`);
})
// app.liste(3000);