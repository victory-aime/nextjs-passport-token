import React from 'react';

const ReservationDetails = () => {
    // Supposons que les détails de la réservation soient passés en tant que props
    const reservationDetails = {
        nom: 'John',
        prenom: 'Doe',
        email: 'john.doe@example.com',
        telephone: '123456789',
        marque: 'Toyota',
        model: 'Camry',
        couleur: 'Noir',
        prix: '$50',
    };

    const { nom, prenom, email, telephone, marque, model, couleur, prix } = reservationDetails;

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 mx-2 my-2">
                <h1 className="text-2xl font-bold mb-4">Détails de la réservation</h1>

                <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-700 font-bold mb-2">
                            Nom :
                        </label>
                        <span className="border border-gray-300 rounded-lg px-3 py-2">{nom}</span>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="firstname" className="text-gray-700 font-bold mb-2">
                            Prénom :
                        </label>
                        <span className="border border-gray-300 rounded-lg px-3 py-2">{prenom}</span>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 font-bold mb-2">
                            Email :
                        </label>
                        <span className="border border-gray-300 rounded-lg px-3 py-2">{email}</span>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-gray-700 font-bold mb-2">
                            Téléphone :
                        </label>
                        <span className="border border-gray-300 rounded-lg px-3 py-2">{telephone}</span>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="brand" className="text-gray-700 font-bold mb-2">
                            Marque :
                        </label>
                        <span className="border border-gray-300 rounded-lg px-3 py-2">{marque}</span>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="model" className="text-gray-700 font-bold mb-2">
                            Modèle :
                        </label>
                        <span className="border border-gray-300 rounded-lg px-3 py-2">{model}</span>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="color" className="text-gray-700 font-bold mb-2">
                            Couleur :
                        </label>
                        <span className="border border-gray-300 rounded-lg px-3 py-2">{couleur}</span>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="price" className="text-gray-700 font-bold mb-2">
                            Prix :
                        </label>
                        <span className="border border-gray-300 rounded-lg px-3 py-2">{prix}</span>
                    </div>
                </div>

                <a href="/admin/dashboard/reservations" className="mt-4 text-blue-500 hover:underline">
                    Retour
                </a>
            </div>
        </div>
    );
};

export default ReservationDetails;
