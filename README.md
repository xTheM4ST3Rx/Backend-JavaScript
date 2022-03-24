# N.E.M.-Back-end
Nodejs + Express + MongoDB

#Testes de APis

#Visualizar todos os usuarios
http://localhost:4000/users/findall

#Criar novo usuario
body {name: "username"}
http://localhost:4000/users/create


#Atualizar nome do usuario
body {id:"iduser", name: "username"}
http://localhost:4000/users/update


#Deletar usuario
body {id:"iduser"} + "Acess-Token":"meegu"
http://localhost:4000/users/delete
