const { text } = require('express')
const express = require('express')
const app = express()
const port = 3000

// app.get('', (req, resp) => {
//   resp.send('<h1> Hello World!  This is homepage </h1>')
// })
// app.get('/about', (req, resp) => {
//   resp.send('<h1> This is About </h1>')
// })
// app.get('/contact', (req, resp) => {
//   resp.send('<h1> This is Contact </h1>')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// ==========================================================================

app.get('',(req, resp)=>{
  resp.send("<h1>This is home page</h1><a href='/about'>About</a>")
})


app.get('/about', (req, resp) => {
  resp.send(`<input type='text' placeholder='Enter your name' value="${req.query.name}"/><button>send</button></br><a href='/contact'>Go to contact page</a>`)
  })
app.get('/Contact', (req, resp) => {
  resp.send([
    {
      name:'Parag',
      Email:'parag.shinde407@gmail.com'
    },
    {
      name:'ABC',
      Email:'abc@gmail.com'
    },
    {
      name:'XYZ',
      Email:'xyz@gmail.com'
    }
  ])
  })
  app.listen(3400)