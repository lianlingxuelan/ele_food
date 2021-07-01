const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

/**
 * router
 */

//index router
const indexRouter = require('./routers/api/index') ;

const app = express();
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/',indexRouter)
mongoose.connect('mongodb://localhost:27017/ele_food',{useNewUrlParser: true},(err,db)=>{
    if (err) {
        console.log('数据库链接失败');
        throw err;
        return;
    }
   
    app.listen(8080,()=>{
        console.log('8081端口成功监听')
    })
    console.log('数据库链接成功,监听在27017端口')
})
module.exports = app;