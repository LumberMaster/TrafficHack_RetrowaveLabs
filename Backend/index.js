

// ░██████╗███████╗██████╗░██╗░░░██╗███████╗██████╗░
// ██╔════╝██╔════╝██╔══██╗██║░░░██║██╔════╝██╔══██╗
// ╚█████╗░█████╗░░██████╔╝╚██╗░██╔╝█████╗░░██████╔╝
// ░╚═══██╗██╔══╝░░██╔══██╗░╚████╔╝░██╔══╝░░██╔══██╗
// ██████╔╝███████╗██║░░██║░░╚██╔╝░░███████╗██║░░██║
// ╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝


// подключение express

const fs = require('fs');
const express = require("express");
const bodyParser = require('body-parser');

// создаем объект приложения
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(request, response){
     

    html = fs.readFileSync('./Frontend/index.html', 'utf-8');

    response.status(200);
    response.send(html);
});


// начинаем прослушивать подключения на 4000 порту
app.listen(4200, "localhost",()=>{
  console.log('[log] Сервер работает!');
});