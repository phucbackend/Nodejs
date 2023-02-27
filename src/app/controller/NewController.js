
class NewController{
    index(req,res){
        res.render('news')
    }
    show(req,res){
        res.send('Detail now !')
    }
}

// module.exports = new NewController ; 
