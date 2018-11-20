"use strict";

const http = require("http");
const express = require("express");
const app = express();
const User = require("./controllers/user.js");

// Home Page Route
app.get("/", function (request, response) {
  response.send("Aqui é a home page");
});

//#region Área de Login
app.route('/Login/:email/:password')
  .get(function (request, response) {
    response.send(Login(request.params.email, request.params.password));
  });

function Login(email, password) {
  return new User().Login(email, password);
}
//#endregion

//#region  Área de Cadastro de Usuários
app.route('/Login/:email/:password')
  .post(function(request, response) {
    response.send(NewUser(request.params.email, request.params.password));
  })
  .put(function(req, res) {
    res.send(UpdateUser(request.params.email, request.params.password));
  })
  .delete(function(request, response){
    res.send(DeleteUser(request.params.email, request.params.password));
  });

function NewUser() {
  return new User().New(email, password);
}

function UpdateUser() {
  return new User().Update(email, password);
}

function DeleteUser() {
  return new User().Delete(email, password);
}
//
//#endregion

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
