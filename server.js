const express = require('express');
const app = express();
const path = require('path');

// 8080 에서 5000 포트 ->버셀
app.listen(5000, function(){
  console.log("서버 정상 열림 8080")
})

app.use(express.static(path.join(__dirname,'quiz/dist')));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'quiz/dist/index.html'))
})
/*
app.get('/',function(req, res){
  res.send("메인화면")
})

app.get('/about',function(req, res){
  res.send("어바웃화면임");
})

app.get('/about/list',function(req, res){
  res.send("어바웃리스트");
})

app.get('/skills',function(req, res){
  res.send("스킬")
}) */


//nodemon 설치 후 코드 
/*
app.get('/',function(req, res){
  res.sendFile(__dirname + '/index.html')
  // sendFile - 파일을 보낼 수 있는 함수 
  // __dirname - 현재 파일 경로
})

app.get('/about',function(req, res){
  res.sendFile(__dirname + '/about.html');
})

app.get('/about/list',function(req, res){
  res.sendFile(__dirname + '/aboutlist.html');
})

app.get('/skills',function(req, res){
  res.sendFile(__dirname + '/skills.html');
})*/

// 반드시 맨 밑에 써야함.
// * 전체를 말하는 거임. 
// 라우터가 있으면 
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'quiz/dist/index.html'))
})


module.exports = app;