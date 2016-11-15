var express=require("express");
var app=express();
var useragent=require("useragent");
var port=process.env.PORT||3000;

app.listen(port, function(){
  console.log("Listening on Port: "+port);
}),

app.get("/", function(req,res){
  res.send("Test");
});
