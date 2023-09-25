<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Hola! en este proyecto realizo un sistema de facturas usando node, typeorm, nest y msql

Para empezar ejecuta npm install para traer las dependencias para poder levantar el proyecto.

Ya después de la instalación puedes levantar el servidor de varias maneras. No obstante te sugiero la que encuentras abajo de este enunciado

$ npm run start:dev

--------------Endpoint--------------------
localhost:3000/
----------------User----------------------
Crea un user (POST)
localhost:3000/user 
{
  "name": "Luis",
  "address": "Calle 1",
  "telephone": "2121212"
}
Mira una lista de users (GET)
localhost:3000/user 

Mira un solo user (GET PARAM)
localhost:3000/user/1

Actualiza un user (PATH PARAM)
localhost:3000/user/1
{
  "address": "carrera 2"
}

Elimina un user (DELETE PARAM)
localhost:3000/user/1

----------------Factura----------------------
Crea un user (POST)
localhost:3000/user 
{
  "name": "Luis",
  "address": "Calle 1",
  "telephone": "2121212"
}

Crea una factura (POST)
localhost:3000/factura 
{
  "numero": "1",
  "total": 23,
  "userId": 2
}

Mira las facturas (GET)
localhost:3000/factura

Mira una factura (GET PARAM)
localhost:3000/factura/1

----------------Concepto de factura----------------------
Crea un concepto (POST)
localhost:3000/concepto
{
  "descripcion": "Esto es una descripcion",
  "precioUnitario": 23,
  "cantidad": 2,
  "facturaId": 1
}
Mira todos los conceptos de una factura (GET)
localhost:3000/concepto

----------------Detalle de factura----------------------
Crea un detalle en la factura de un user (POST)
localhost:3000/detalle
{
  "cantidad": 23,
  "conceptoId": 1,
  "facturaId": 1
}
Mira el detalle de una factura (GET)
localhost:3000/detalle

----------------Test----------------
Ejecuta el comando de abajo y verás un test dentro del proyecto
$ npm run test




