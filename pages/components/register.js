import React, {useState} from "react";
import { useRouter } from 'next/router';
import axios from "axios";
const RegisterPage = () => {

    const router = useRouter()

    const [errorMessage, setErrorMessage] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

const register = ()=>{
    axios({
        method:'post',
        data : {
            nom: nom,
            prenom: prenom,
            email: email,
            password: password,
        },
        withCredentials: true,
        url:"http://localhost:3001/register"
    }).then((res) => console.log(res));
}


    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="w-full p-4 bg-white rounded-md shadow-md lg:max-w-xl">
                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Welcome
                </h2>


            <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={register} >
                    <div className=" mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block font-semibold">
                                First Name
                            </label>
                            <div className="relative">
                                <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    autoComplete="given-name"
                                    value={prenom} onChange={(e) => setPrenom(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block font-semibold">
                                Last Name
                            </label>
                            <div className="relative" >
                                < div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    value={nom} onChange={(e) => setNom(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
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
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="mt-8 w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create an account
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

export default RegisterPage;
