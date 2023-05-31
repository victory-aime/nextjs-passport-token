import React, { useState } from 'react';

const RentalTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rentalsPerPage] = useState(1); // Nombre de locations affichées par page

    // Exemple de données de locations de véhicules
    const rentals = [
        {
            nom: 'Doe',
            prenom: 'John',
            email: 'johndoe@example.com',
            telephone: '123-456-7890',
            marque: 'Toyota',
            model: 'Camry',
            couleur: 'Noir',
            prix: '$50 / jour',
        },
        {
            nom: 'Smith',
            prenom: 'Jane',
            email: 'janesmith@example.com',
            telephone: '987-654-3210',
            marque: 'Honda',
            model: 'Accord',
            couleur: 'Blanc',
            prix: '$60 / jour',
        },
        // Ajoute d'autres objets de location ici
    ];

    // Index du dernier véhicule de la page
    const lastRentalIndex = currentPage * rentalsPerPage;
    // Index du premier véhicule de la page
    const firstRentalIndex = lastRentalIndex - rentalsPerPage;
    // Locations à afficher sur la page courante
    const currentRentals = rentals.slice(firstRentalIndex, lastRentalIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(rentals.length / rentalsPerPage);
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
                    <th className="px-4 py-2">Téléphone</th>
                    <th className="px-4 py-2">Marque</th>
                    <th className="px-4 py-2">Modèle</th>
                    <th className="px-4 py-2">Couleur</th>
                    <th className="px-4 py-2">Prix</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {currentRentals.map((rental, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">{rental.nom}</td>
                        <td className="border px-4 py-2">{rental.prenom}</td>
                        <td className="border px-4 py-2">{rental.email}</td>
                        <td className="border px-4 py-2">{rental.telephone}</td>
                        <td className="border px-4 py-2">{rental.marque}</td>
                        <td className="border px-4 py-2">{rental.model}</td>
                        <td className="border px-4 py-2">{rental.couleur}</td>
                        <td className="border px-4 py-2">{rental.prix}</td>
                        <td className="border px-4 py-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <a href="/admin/dashboard/reservations/details">
                                Voir les détails
                                </a>
                            </button>
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

export default RentalTable;
