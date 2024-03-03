import { IPastel } from "src/app/interfaces/IPasteles";
import React, { FC } from "react";

interface Props {
    pasteles:IPastel[];
}

export const PastelesCardList:FC<Props> = ({pasteles}) => {
    return (
      <section className="flex flex-row flex-wrap">
        {
          pasteles.map( (pastel) => (
            <article key={pastel.Pastelid} className="basis-1/4 p-2">
              {/* <Link key={restaurant.id} href={`/${restaurant.id}`}>
                {restaurant.name}
              </Link> */}
              <link key={ pastel.isbn } href ={`/public/pasteles/${pastel.Pastelid}`}>
                <libroCard key={pastel.Pastelid} pastel = {pastel }/>
              </link>  
            </article>
          ))
        }
      </section>
    )
  }
  
