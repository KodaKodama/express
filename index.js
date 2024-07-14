const express = require('express');
const app = express();
const path = require('path')

app.get('/', (req, res)=> {
    res.send('Hello world')
});

app.get('/contact', (req, res)=> {
    res.send('contact world')
});

app.get('/files', (req, res)=> {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/json', (req, res)=> {
    res.json([
        {
            fn: 'kusum',
            ln: 'chow'
        },
        {
            fn: 'hi',
            ln: 'there'
        }
    ])
});



app.listen(3000, ()=> {
    console.log('server is running');
})