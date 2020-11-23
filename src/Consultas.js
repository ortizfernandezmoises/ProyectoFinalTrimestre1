//Muestra todos los juegos donde el nombre no contenga una s o su stock sea menor de 40

db.videojuegos.find({$and: [{nombre: {$not: /s/}}, {stock: {$lte: 40}}]})

//Muestra todos los juegos que hayan salido durante 2020 o su plataforma sea PC y estén disponibles

db.videojuegos.find( {FechaSalida:{$gte :new Date("2020-01-01")}, $or: [{"datos.plataforma": "PC"}, {disponibilidad: true}]})

//Muestra los juegos donde la calificación sea menor o igual de 8, existan en ambas versiones, no estén disponibles y su precio sea mayor de 20

db.videojuegos.find({$and: [{"datos.calificacion":{$lte: 8}}, {"edicion":{$all: ["fisico", "digital"]}}, {disponibilidad: false}, {precio: {$gt: 20}}]})

//Muestra los juegos donde la plataforma no sea PS4, solo estén en físico, no estén disponibles y hayan salido en la última década

db.videojuegos.find({$and: [{"datos.plataforma":{$not:/PS4/}}, {"edicion":"fisico"}, {disponibilidad: false}, {FechaSalida: {$gt: new Date("2011:01:01")}}]})

//Muestra los juegos donde el nombre no contenga una "m" o no esté en físico y estén disponibles y su precio sea menor de 35

db.videojuegos.find({$or:[{Nombre: {$not: /m/}}, {edicion:"digital"}], $and: [{disponibilidad: true}, {precio: {$lt:35 }}]})

//Muestra los juegos lanzados antes de 2018, la plataforma no sea PC y estén disponibles

db.videojuegos.find({$and:[{FechaSalida:{$lt: new Date("2018-12-31")}}, {"datos.plataforma":{$not:/PC/}}, {disponibilidad: true}]})

//Muestra los juegos de 2020 que tengan mayor calificación, estén en PC y stock no sea 0

db.videojuegos.find({$and: [{FechaSalida:{$gt: new Date("2020-01-01")}}, {datos: {plataforma: "PC", calificacion: 9}}, {stock: {$ne: 0}}]})

//Muestra los juegos lanzados después de 2013, de PS4, que estén disponibles, y su precio no sea 60 o 35

db.videojuegos.find({$and: [{FechaSalida: {$gt: new Date("2013-01-01")}}, {"datos.plataforma": "PS4"}, {disponibilidad: true}, {precio: {$nin: [60, 35]}}]})

//Muestra los juegos de 2020, lanzados en Xbox con una calificación de 5, solo estén en digital, estén disponibles, el precio sea 25 y su stock sea mayor menor de 70

db.videojuegos.find({$and: [{FechaSalida: {$gt: new Date("2020-01-01")}}, {datos: {plataforma: "Xbox", calificacion: 5}}, {edicion: {$regex: /dig/i}}, {disponibilidad: true}, {precio: 25}, {stock:{$lt: 70}}]})