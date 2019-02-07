var express =require('express');
var app = express();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended : false});
var nodemailer = require('nodemailer');

var email;


app.set('view engine', 'ejs');
app.use('/assets/', express.static('./assets'));
app.use(express.static('public'));
app.get('/', (req,res) =>{
    res.render( 'index');
});


app.get('/contact', (req,res) =>{
    
    res.render('contact',{qs : req.query});
});
    

 
app.post('/contact', urlencodedParser, (req,res) =>{
    console.log(req.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'hashmatibrahimi0711@gmail.com',
               pass: 'Hibrahi00!@#'
           }
       });

       const mailOptions = {
        from: 'TESTEMAIL', // sender address
        to: 'hibrahi000@icloud.com', // list of receivers
        subject: 'test', // Subject line
        html: '<p>this is a test</p>'// plain text body
      };






    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
    res.render('contact-sucess',{data: req.body},)
    });   




   







app.get('/profile/:name', (req, res)=>{
    var data = {age: 29, job: 'ninja', hobbie: ['eating', 'fighting','fishing']}
    res.render('profile', {person: req.params.name,data: data});
});


app.listen(3000);