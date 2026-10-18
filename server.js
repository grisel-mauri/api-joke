const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Base de datos
const joke = [
    "¿Cómo se dice disparo en árabe? Ahí-va-la-bala.", 
    "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
    "¿Por qué los pájaros vuelan hacia el sur en invierno? — Porque caminar es demasiado lejos.",
    "¡Mamá, mamá, en el colegio me dicen desobediente! ¡Hijo, ni se te ocurra ir!",
    "¿Qué hace un pez en el agua? Nada.",
    "¿Por qué el libro de matemáticas está tan triste? Porque tiene demasiados problemas.",
    "¿Qué le dice una pared a otra? Nos vemos en la esquina.",
    "¿Cuál es el colmo de un calvo? Perder la cabeza.",
    "¿Qué le dice un semáforo a otro? No me mires, ¡que me pongo rojo!",
    "¿Por qué los elefantes no usan computadora? Porque le tienen miedo al ratón.",
    "¿Qué hace un oso en el Polo Norte? Frío.",
    "¡Doctor, doctor! ¡Siento que nadie me hace caso! Que pase el siguiente, por favor.",
    "¿Por qué los esqueletos no pelean nunca entre ellos? Porque no tienen agallas.",
    "Cariño, dime la verdad, ¿tengo la nariz muy grande? No, amor, tienes una nariz común. ¿Ah, sí? Sí, común tucán.",
    "¿Qué pasa si tiras un pato al agua? Nada.",
    "Pepito, ¿cuánto es dos por dos? ¡Indignante, profesora! No, Pepito, cuatro.",
    "¿Cómo se despiden dos químicos? Ácido un placer.",
    "¿Qué le dice una aguja a un hilo? ¡Qué hilos tan largos te traes!",
    "¡Camarero, hay una mosca en mi sopa! Shissst, baje la voz, que todos van a querer una."
];

//Bienvenida
app.get('/', (req, res) => {
    res.json({
        mensaje: "Bienvenido a Joke!",
        rutas_disponibles: [
            "/joke - Devuelve un chiste aleatorio"
        ]
    });
});

//Obtener chiste
app.get('/joke', (req, res)=>{
    const indiceAleatorio = Math.floor(Math.random()*joke.length);
    res.json({
        tipo: "chiste",
        contenido: joke[indiceAleatorio]
    });
});

//Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor de chistes corriendo en el puerto ${PORT}`);
});