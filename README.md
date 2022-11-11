# Modulo 3 repartido 10 matea
 
#Autor: Maximiliano Correa 

Descargar los archivos del repositorio, Descomprimir el rar y abrirlo con VSC. Una vez hecho esto abra la 
terminal de VSC y introduzca "npm install" esto le instalará los paquetes necesarios para iniciar.
luego para poder iniciar escriba el siguiente comando en la terminal de VSC "npm start", esto le mostrara
el proyecto realizado en este caso con, Node.js mongoose, nodemon y express.

#De que trata el proyecto.
este proyecto trata de crear una base de datos con mongoose la cual se conecta a tu localhost y para crear 
dicha base de datos. En este caso la base de datos es de mascotas, simplemente tiene una creacion de mascotas 
con mongoose usando el metodo create de mongoose. Tiene un deleteMany tambien para poder eliminar 
la base de datos para que no se sature la misma y se agrege lo mismo varias veces.
luego tiene un updateOne para poder cambiar el nombre de uno de las mascotas. 
tiene un find para mostrar todo lo guardado en la DB, luego tenemos un find que filtra por la edad, 
con $gte: 0 en este caso para que filtre desde el 0 hacia arriba el cual nos renderizara solo el nombre de las mascotas.


#Materiales usados y materiales a instalar
Primero que nada debemos instalar mongoDB ya que sin eso no podremos crear nuestra DB, nos daria error y jamas se iniciaria,
luego de eso instalar mongoDBServer que es lo que nos hace tener nuestro server localhost en mongoDB.
Material usado: #VisualStudioCode, #mongoose, #mongodb, #nodemon, #express, #node.js
