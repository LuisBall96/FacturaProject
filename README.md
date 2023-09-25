# Sistema de Facturación con Node, TypeORM, Nest y MySQL

Este proyecto implementa un sistema de facturación utilizando Node.js, TypeORM, Nest.js y MySQL.

## Configuración

Antes de comenzar, asegúrate de instalar todas las dependencias necesarias ejecutando: 
npm install

## Iniciar el Servidor

Puedes iniciar el servidor de varias maneras, pero te recomendamos utilizar el siguiente comando:
npm run start:dev


El servidor estará disponible en:
http://localhost:3000/


## Endpoints

### Usuarios

#### Crear un Usuario (POST)

POST localhost:3000/user

{
"name": "Luis",
"address": "Calle 1",
"telephone": "2121212"
}

#### Lista de Usuarios (GET)
GET localhost:3000/user


#### Ver un Usuario (GET PARAM)
GET localhost:3000/user/1


#### Actualizar un Usuario (PATCH PARAM)

PATCH localhost:3000/user/1

{
"address": "Carrera 2"
}


#### Eliminar un Usuario (DELETE PARAM)

DELETE localhost:3000/user/1


### Facturas

#### Crear una Factura (POST)


POST localhost:3000/factura

{
"numero": "1",
"total": 23,
"userId": 2
}


#### Lista de Facturas (GET)
GET localhost:3000/factura


#### Ver una Factura (GET PARAM)
GET localhost:3000/factura/1


### Conceptos de Factura

#### Crear un Concepto (POST)

POST localhost:3000/concepto

{
"descripcion": "Esto es una descripción",
"precioUnitario": 23,
"cantidad": 2,
"facturaId": 1
}


#### Lista de Conceptos de una Factura (GET)

GET localhost:3000/concepto


### Detalles de Factura

#### Crear un Detalle de Factura (POST)

POST localhost:3000/detalle

{
"cantidad": 23,
"conceptoId": 1,
"facturaId": 1
}


#### Ver los Detalles de una Factura (GET)
GET localhost:3000/detalle


## Pruebas

Puedes ejecutar las pruebas del proyecto con el siguiente comando:
npm run test


¡Diviértete explorando este sistema de facturación!






