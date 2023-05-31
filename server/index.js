const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("./db");

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {

    const { nom, prenom, email, password } = req.body;
    const query = await prisma.user.create({
        data: {nom, prenom, email, password},
    });
    const query2 = await prisma.user.findUnique({where: { email: email} });

    db.query(query2, [email], (error, result) => {
        if (error) {
            throw error;
        }
        if (result.rows.length > 0) {
            res.send({message: "User already exists"});
        } else {
            const hashedPassword = bcrypt.hashSync(password, 10);
            db.query(query, [nom, prenom, email, hashedPassword], (error, result) => {
                if (error) {
                    throw error;
                }
                res.send({message: "User created"});
            });
        }
    });
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
});
