var mongoose = require('mongoose')
var Schema =mongoose.Schema
var userSchema = new Schema({
    id:String,
    username:String,
    password:String,
    tickets:[{
        sTime:String,
        tTime:String,
        eTime:String,
        wuzuo:String,
        scSeat:String,
        yingzuo:String,
        fcSeat:String,
        yingwo:String,
        bcSeat:String,
        beginCity:Object,
        endCity:Object,
        seat:String,
        tId:String
    }]
})
module.exports = mongoose.model('User',userSchema)