import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const links = [
    { name: 'Pasteles', href: '/public/pasteles' },
    { name: 'Categorias', href: '/public/categorias' },
    { name: 'Blog', href: '/public/blog' },
    { name: 'Nuestras Tiendas', href: '/public/tiendas' },
    { name: 'Quienes somos', href: '/public/qSomos' },
    { name: 'Servicios', href: '/public/servicios' },
]

export const MenuLink = () => {

  return (
    <Navbar>
      <NavbarBrand>
        { /*<AcmeLogo />*/ }
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map ( (link) => ( //return
            <NavbarItem>
              <Link color="foreground" href={ link.href }>
                { link.name}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
