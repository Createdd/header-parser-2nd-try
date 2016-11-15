var express=require("express");
var app=express();
var useragent=require("useragent");
var port=process.env.PORT||3000;

app.listen(port, function(){
  console.log("Listening on Port: "+port);
}),

app.get("/", function(req,res){
  var agent=useragent.parse(req.headers["user-agent"]);
  var ip=req.headers["x-forwarded-for"];
  if(ip){
    var list=ip.split(",");
    ip=list[list.length-1];
    console.log("log: "+ip+" and "+ip.split(","));
  } else {
    ip=req.connection.remoteAddress;
  }
  res.json({
    IP: ip,
    "Language": req.headers["accept-language"].split(",")[0],
    "Operating System": agent.os.family
  });
});
