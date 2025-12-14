import React from "react";


    export default function App() {
    const name = "John Doe";


    return (
        <div className="flex items-center gap-8 p-6">
            {/* Colonne gauche : Photo de profil */}
        <div className="flex flex-col items-center">
        <img src="https://via.placeholder.com/120" alt="photo de profil" className="w-28 h-28 rounded-full shadow"/>
        </div>


            {/* Espace entre les deux colonnes déjà géré par gap-8 */}


            {/* Colonne droite : Texte de bienvenue + bulle de notification */}
        <div className="relative flex flex-col justify-center">
            <h1 className="text-2xl font-bold">Bonjour, {name} !</h1>
            <p className="text-base text-gray-600">Bienvenue [John Doe].</p>


            {/* Bulle de notification */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white flex items-center justify-center text-sm font-bold rounded-full shadow">
        </div>
        </div>
        </div>
        );
        }