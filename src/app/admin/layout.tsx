'use client'
import React from "react";
import { Header, Aside, Content } from "./component/site";
import { IChildren } from "../interfaces/IChildren";


export default function AdminLayout ({children}: IChildren) {
  return (
    <>
        <Header />
        <Aside />
        {/* <Content /> */}
        <div className="p-4 sm:ml-64">
            asdfasd
            {children }
        </div>

    </>
  )
}

