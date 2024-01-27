console.log("Connected");
const express=require("express");
const articlerouter=require("./routes/articles")
const mongoose=require("mongoose");
const app=express();
const Article=require('./modules/article')
const mmethodoverride=require('method-override')
mongoose.connect('mongodb://localhost/bharatInternDatabase')

app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:false}))
app.use(mmethodoverride('_method'))
app.get('/' , async (req , res)=>{

const Article=await Article.find().sort({ createdAt:'desc'});
res.render('articles/index' , {articles:articles});

})

app.use('/articles' ,articlerouter);


app.listen(3000);