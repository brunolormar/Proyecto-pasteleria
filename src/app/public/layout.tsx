import React from "react";
import { IChildren } from "../interfaces/IChildren";
import { Menu } from "../components/commons/Menu";
import { ILink } from "../interfaces/ILinks";
import { MenuLink } from "../components/public/MenuLink";
  
export default function Publiclayout({children}: IChildren){
//peticion la BD <-- LINKS DEL FRONTEND
const enlaces:ILink[] = [
    { name: 'Pasteles', href: '/public/pasteles' },
    { name: 'Categorias', href: '/public/categorias' },
    { name: 'Blog', href: '/public/blog' },
    { name: 'Nuestras Tiendas', href: '/public/tiendas' },
    { name: 'Quienes somos', href: '/public/qSomos' },
]
return (
    <>
        <header>
            <Menu links = {enlaces} />
            {/* <MenuLinks /> */}

        </header>
        <main>
            { children }
        </main>   
    </>
);
}

