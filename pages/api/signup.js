import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } else if (req.method === 'POST') {
        const { nom, prenom, email, password } = req.body;
        try {
            const user = await prisma.user.create({
                data: {
                    nom,
                    prenom,
                    email,
                    password
                },
            });
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to create user' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
