import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import React, { FC } from "react";
import { IPastel } from "src/app/interfaces/IPasteles";
// import Image from 'next/image'

interface Props {
    libro: IPastel
}

export const PastelDetail:FC<Props> = ({pastel}) => {
  return (
    <Card className="py-4 frex flex-row flex-nowrap" >
      <CardHeader className="pb-0 pt-2 px-4 basis-1/3">
        <Image 
          alt="Card background"
          className="object-cover rounded-xl"
          src={pastel.thumbnailUrl}
          width={270} 
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 basis-1/3">
        <h2>{ pastel.nombre }</h2>
        <h3> {pastel.categoria.name}</h3>
      </CardBody>
      <CardFooter>
        <h3>{pastel.precio}</h3>
      </CardFooter>
    </Card>
  );
}
