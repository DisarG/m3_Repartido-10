const Mascotas = require("./models/mascotasSchema")
const mongoose = require("mongoose");


const pruebas = async () => {
    await Mascotas.deleteMany()
    await Mascotas.create([
        {
            nombre: 'Salem',
            edad: 9,
            tipo: 'Gato',
            Caracteristicas: 'Muy tranquilo y ama dormir.'
        },
        {
            nombre: "Mateo",
            edad: 5,
            tipo: "Gato",
            Caracteristicas: "Le gusta comer budín"
        },
        {
            nombre: "Chuchi",
            edad: 4,
            tipo: "Gata",
            Caracteristicas: "Es muy peluda y tiene problemas sociales."
        },
        {
            nombre: "Neko",
            edad: 3,
            tipo: "Gato",
            Caracteristicas: "Te ama solo si le das de comer"
        },
        {
            nombre: "Mía",
            edad: 2,
            tipo: "Perra",
            Caracteristicas: "No le gustan los extraños"
        },
        {
            nombre: "Memi",
            edad: 1,
            tipo: "Gata",
            Caracteristicas: "Es muy chiquita y le gusta cantar"
        },
        {
            nombre: "Keyko",
            tipo: "Perra",
            edad: 0.6,
            Caracteristicas: "Le roba la comida a quién pueda"
        },
    ])
}
