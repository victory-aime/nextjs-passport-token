// pages/api/login.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {

    if (req.method === 'GET') {
        const { email} = req.body;
        const users = await prisma.user.findUnique({where: { email: email} });
        res.status(200).json(users);
    }
        else if (req.method === 'POST') {
        const { email, password } = req.body;

        // Vérifier si l'utilisateur existe dans la base de données
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        // Vérifier le mot de passe de l'utilisateur
        if (user.password !== password) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        // Authentification réussie, renvoyer une réponse appropriée
        return res.status(200).json({ message: 'Connexion réussie' });
    }

    return res.status(405).json({ message: 'Méthode non autorisée' });
}
