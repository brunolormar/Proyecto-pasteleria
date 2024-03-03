import React from "react";
import { IChildren } from "../interfaces/IChildren";

export default function AuthLayout({children}: IChildren){

    return (
        <>
            <header style="bg-orange-300">
                <h2>Zona de Autenticacion</h2>
            </header>
            <main className='container mx-auto'>
                { children }
            </main> 
        </>
    );
}
