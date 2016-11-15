var express=require("express");//add the express module to serve static files
var app=express();//calling the express function
var useragent=require("useragent");//add the useragent module. a library that contains all regEx and uses parsing for OS and device information
var port=process.env.PORT||3000;//listen to provided port or default 3000

app.listen(port, function(){
  console.log("Listening on Port: "+port);
}),//set the listening port

app.get("/", function(req,res){
  var agent=useragent.parse(req.headers["user-agent"]);//returns a agent instance and allows to output information in diff predefined formats
  var ip=req.headers["x-forwarded-for"];//store the ip address from the header
  if(ip){//when
    var list=ip.split(",");
    ip=list[list.length-1];//when there the ip is stored store the second last "string"
  } else {
    ip=req.connection.remoteAddress;//accessmthe ip address though the socket address
  }
  res.json({
    IP: ip,
    "Language": req.headers["accept-language"].split(",")[0],
    "Operating System": agent.os.family
  });//respond json data according to the challenge
});//get header data for the home route
