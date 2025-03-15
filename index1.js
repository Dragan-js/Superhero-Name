import express from "express";
import superheroes, { randomSuperhero } from "superheroes";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    let superheroName = randomSuperhero();
    res.send(`<h1>Behold, I am ${superheroName}!</h1>`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});