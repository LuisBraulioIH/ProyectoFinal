import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";

const app = express();

app.get("/peliculas", (req, res)=>{
    res.send("estas son las peliculas disponibles")
});

app.get("/clientes", (req, res)=>{
    res.send("Clientes XD")
});

app.get("/ordenes", (req, res)=>{
    res.send("Estas son las ordenes")
});

app.get("/iniciar_sesion", (req, res)=>{
    res.send("inicie sesion")
});

app.listen(4000, ()=>{ console.log("escuchando al servidor correctamente")})



