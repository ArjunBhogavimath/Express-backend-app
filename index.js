const express = require('express')
const app = express()
const port = 3000
//this details is copied directly from expressjs page
//express is having lot of built in methods we can use to run http server

//this is a get api
app.get('/signup', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Hello World!')
})

app.get('/submission', (req, res) => {
  res.send('Hello World!')
})

app.get('/questions', (req, res) => {
  res.send('Hello World!')
})



//THIS API CAN RETURN A HTML RESPONSE AS WELL
/*app.get('/route2', (req, res) => {
  res.send(
  `<html>
    <body>
      <h1 style="color:orange;">
        This is html response
      </h1>
    </body>
  </html>`
  )
})
*/


//unitl this method nothing happens
//when this app.listen happens it will listen to the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 