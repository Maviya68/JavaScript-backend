const express = require('express')
const app = express()
const PORT = 3000
const url = 'https://organic-space-funicular-gxq749gjvrq39vjv-3000.app.github.dev'
app.use(express.json())

let items = [
        { id: 1 , name:'Shirt',Price:299},
        { id: 2 , name:'Pant',Price:359},
        { id: 3 , name:'Tshirt',Price:199},
        { id: 4 , name:'Jeans',Price:499},
        { id: 5, name:'Jacket',Price:799}
]

app.get('/users',(req,res)=>{
  
   
    res.send(`Working`)
})
// app.get('/',(req,res)=>{
//     // res.send(`Welcome to my Api, Make yourself comfortable by visiting /users`)
//     res.send('<h1>Welcome to my Api, Make yourself comfortable by visiting <a href = >/users</><h1/>')
// })
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to my API</h1>
        <p>Make yourself comfortable by visiting 
       </p>
       <a href = ${url + '/users'}>Click here</a>
    `);
});


app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})
