import React from "react";
import { IChildren } from "../interfaces/IChildren";
import { ILink } from "../interfaces/ILinks";
import { Menu } from "../components/commons/Menu";


export default function AdminLayout({children}: IChildren){
    const enlaces:ILink[] = [
        { name: 'Pasteles', href: '/admin/pasteles' },
        { name: 'Categorias', href: '/admin/categorias' },
        { name: 'Blog', href: '/admin/blog' },
        { name: 'Ventas', href: '/admin/ventas' },
        { name: 'Compras', href: '/admin/Compras' },
        { name: 'Clientes', href: '/admin/Clientes' },
        
    ]
    return (
        <>
            <header>
                <Menu links = {enlaces} />
            </header>
            <main>
                { children }
            </main>   
        </>
    );
  }
