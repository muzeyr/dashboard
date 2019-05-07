const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

const SELECT_ALL_CUSTOMER_QUERY = 'SELECT * FROM musteriler '
const SELECT_ALL_PRODUCT_QUERY = 'SELECT * FROM urunler '

const connection = mysql.createConnection({
    host: '85.95.237.183',
    user: 'donerci',
    password: 'v!lu198H', 
    database:'muzeyrco_donerci'
})

connection.connect(err => {
    if(err) {
        return err;
    }
})

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Tenpmst')
})

app.get('/musteriler', (req, res) => {
    connection.query(SELECT_ALL_CUSTOMER_QUERY, (err, resultados) => {
        if(err) {
            return res.send(err+'SQL:'+SELECT_ALL_CUSTOMER_QUERY)
            console.log(err)
        } else {
            return res.json({
                data: resultados
            })
        }
    })
})

app.get('/musteri', (req, res) => {
    
    const{ id } = req.query
    connection.query(SELECT_ALL_CUSTOMER_QUERY+' where id = '+id, (err, resultados) => {
        if(err) {
            return res.send(err+'SQL:'+SELECT_ALL_CUSTOMER_QUERY)
        } else {
            return res.json({
                data: resultados
            })
        }
    })
})

app.get('/urunler', (req, res) => {
    
    const{ id } = req.query
    connection.query(SELECT_ALL_PRODUCT_QUERY , (err, resultados) => {
        if(err) {
            return res.send(err+'SQL:'+SELECT_ALL_PRODUCT_QUERY)
        } else {
            return res.json({
                data: resultados
            })
        }
    })
})

app.get('/user/add', (req, res) => {
    const{ name, user_name, mail } = req.query
    const INSERT_USER_QUERY = `INSERT INTO gym.users(user_name, name, mail) VALUES('${name}', '${user_name}', '${mail}')`
    connection.query(INSERT_USER_QUERY, (err, resultados) => {
        if(err) {
            return res.send(err+'SQL'+INSERT_USER_QUERY)
        } else {
            return res.send('Islem Basarili')
        }
    })
})


app.listen(8082, () => {
    console.log('8082 portu ile yayına başladı')
})