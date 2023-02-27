
class Site_Controller{
    home_(req,res){
        res.render('home')
    }
    contact_(req,res){
        res.render('contact')
    }
    search(req,res){
        res.render('search')
    }
    slug(req,res){
        res.send('Detail !!!!')
    }
}

module.exports = new Site_Controller ; 
