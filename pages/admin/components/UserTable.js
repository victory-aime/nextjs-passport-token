import React, { useState } from 'react';

const UserTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(1); // Nombre d'utilisateurs affichés par page

    // Exemple de données d'utilisateurs
    const users = [
        {
            nom: 'Doe',
            prenom: 'John',
            email: 'john.doe@example.com',
            status: 'active',
        },
        {
            nom: 'Smith',
            prenom: 'Jane',
            email: 'jane.smith@example.com',
            status: 'inactive',
        },
        // Ajoute d'autres objets d'utilisateur ici
    ];

    // Index du dernier utilisateur de la page
    const lastUserIndex = currentPage * usersPerPage;
    // Index du premier utilisateur de la page
    const firstUserIndex = lastUserIndex - usersPerPage;
    // Utilisateurs à afficher sur la page courante
    const currentUsers = users.slice(firstUserIndex, lastUserIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(users.length / usersPerPage);
    // Tableau de numéros de pages
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div>
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="px-4 py-2">Nom</th>
                    <th className="px-4 py-2">Prénom</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Status</th>
                </tr>
                </thead>
                <tbody>
                {currentUsers.map((user, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2 text-center">{user.nom}</td>
                        <td className="border px-4 py-2 text-center">{user.prenom}</td>
                        <td className="border px-4 py-2 text-center">{user.email}</td>
                        <td className={`border px-4 py-2 text-center ${user.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                            {user.status === 'active' ? 'Active' : 'Inactive'}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4">
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`${
                            currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                        } font-bold py-2 px-4 rounded mr-2`}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UserTable;
