const express  = require('express') 
const handle = require('express-handlebars')

const route = require('./routers')

const port = 3000 
const app = express()

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static('./src/public'))

app.engine('hbs' , handle.engine({
    extname : '.hbs'
}))
app.set('view engine' , 'hbs')
app.set('views' , './src/resource/views')


//Route init
route(app) ;

// app.get('/news',(req,res)=>{
//     res.render('news')
// })



app.listen(port , ()=>{
    console.log('Succeed !!!');
})

