import React, {useState} from "react";

const ForgetPage = () => {

    const [email, setEmail] = useState('');


 /*   const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nom, prenom, email,password }),
        });

        if (response.ok) {
            alert('Utilisateur ajouté avec succès !');
            setNom('');
            setPrenom('');
            setEmail('');
        } else {
            alert('Erreur lors de l\'ajout de l\'utilisateur.');
        }
    };*/

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="w-full p-4 bg-white rounded-md shadow-md lg:max-w-xl">
                <p className="mt-1 text-center text-xl font-normal leading-9 tracking-tight text-gray-900">
                    Indiquez ci-dessous l'adresse email que vous utilisez pour vous connecter à votre compte https://www.automobelite.tn.
                    Vous recevrez un email vous indiquant la marche à suivre afin de réinitialiser votre mot de passe.
                </p>
                <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>

                            <div>
                                <button
                                    type="submit"
                                    className="mt-8 w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="/authentification/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgetPage;
