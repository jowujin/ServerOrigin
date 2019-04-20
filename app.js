import express from 'express'

let app = express()


app.get('/test', (req, res)=>{
    res.send('ㅁㄴㅇㅁㄴㅇ')
})

const PORT = 3000

app.listen(PORT, console.log('Server On Port', PORT))