import React from "react";
import { Aside } from './Aside';
import { Header } from './Header';
import { Content } from './Content';
import { IChildren } from "src/app/interfaces/IChildren";


export default function Layer ({children}: IChildren) {
  return (
    <>
        <Header />
        <Aside />
        {/* <Content /> */}
        <div className="p-4 sm:ml-64">
            {children }
        </div>

    </>
  )
}
