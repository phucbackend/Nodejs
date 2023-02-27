const newsrouter = require('./news')
const siterouter = require('./site')
function route(app){
        // app.use('/news',(req,res)=>{
        //     res.render('news')
        // })
    app.use('/news',newsrouter)

    app.use('/',siterouter ) ; 
}

module.exports = route ; 

