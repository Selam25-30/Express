// import express from 'express';
// import bodyParser from 'body-parser';

// const app = express();
// const PORT = 5001;

// app.use(bodyParser.json());


// app.get('/',(req,res) => {
//     console.log('[GET ROUTE]');
//     res.send('HELLO FROM HOMEPAGE');
// })

// app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

import express from "express";

const app = express();

const PORT =process.env.PORT || 30;
// app.listen(PORT, () =>
//      console.log(`Running on Port ${PORT}'));

// we can also write it like this 👇

// app.get("/",(request,response) => {
//     response.send("wow");//text format
//     // res.send({msg:"hello"}); //json format
// })





// ********11:01 Get Requests***********

// app.get("/",(req,res) => {
//     res.send("hi");//text format
//     // res.send({msg:"hello"}); //json format
//     res.status(201).send({msg:'How u dowin'});
// })

// app.get('/api/users',(req,res) =>{
//     res.send([{id:1,username:'anson',displayName:'Anson'},
//         {id:1,username:'enana',displayName:'Enana'},
//         {id:1,username:'redet',displayName:'Redet'}

//     ]);
// });

// app.get('/api/products', (req,res) => {
//     res.send([{id:123,name:"chicken breast"}])
// })
// app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


// ****************20:40 Route Params**************


// app.get("/",(req,res) => {
//     res.send("hi");//text format
//     // res.send({msg:"hello"}); //json format
//     res.status(201).send({msg:'How u dowin'});
// })

// app.get('/api/users',(req,res) =>{
//     res.send([{id:1,username:'anson',displayName:'Anson'},
//         {id:1,username:'enana',displayName:'Enana'},
//         {id:1,username:'redet',displayName:'Redet'}

//     ]);
// });

// app.get("/api/users/:id" ,(req,res) => {
//     console.log(req.params);
//     const parsedId = parseInt(req.params.id);// route parameter ID
//     // console.log(parsedId);
//     if (isNaN(parsedId)) 
//         return res.status(400).send({ msg: "BadRequest. Invalid Id."});
    
//     const findUser = mockUsers.find(user) => user.id === parsedId);
//     if(!findUser) return response.sendStatus(404);
//     return  response.send(findUser);
// });

// app.get('/api/products', (req,res) => {
//     res.send([{id:123,name:"chicken breast"}])
// })
// app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

// **********Route Params 20:40******
// Mock user data
const mockUsers = [
    {id: 1, username: 'anson', displayName: 'Anson'},
    {id: 2, username: 'enana', displayName: 'Enana'},
    {id: 3, username: 'redet', displayName: 'Redet'}
];
////*******88 */
// app.get("/", (req, res) => {
//     // *** correction one
//     // Only one res.send or res.status().send can be used
//     res.status(200).send({msg: 'How u doin'});
// });

// app.get('/api/users', (req, res) => {
//     res.send(mockUsers);
// });

// //*******the same as the code before*********/ 
// app.get("/api/users/:id", (req, res) => {
//     console.log(req.params);
//     const parsedId = parseInt(req.params.id); // route parameter ID
//     // console.log(parsedId);
//     if (isNaN(parsedId)) 
//         return res.status(400).send({ msg: "Bad Request. Invalid Id." });
    
//     const findUser = mockUsers.find(user => user.id === parsedId);
//     if (!findUser) return res.sendStatus(404);
//     return res.send(findUser);
// });

// app.get('/api/products', (req, res) => {
//     res.send([{ id: 123, name: "chicken breast" }]);
// });

// app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


// **********************Query Params 30:08**************
//localhost:30
// localhost:30/users
// loscalhost:30/products?key=value&key2=value2 we can add as much as we want by using & 
app.get("/api/users/:id", (req, res) => {
    console.log(req.params);
    const parsedId = parseInt(req.params.id); // route parameter ID
    // console.log(parsedId);
    if (isNaN(parsedId)) 
        return res.status(400).send({ msg: "Bad Request. Invalid Id." });
    
    const findUser = mockUsers.find(user => user.id === parsedId);
    if (!findUser) return res.sendStatus(404);
    return res.send(findUser);
});

app.get('/api/products', (req, res) => {
    res.send([{ id: 123, name: "chicken breast" }]);
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


 