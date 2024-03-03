import apiPasteles from 'src/model/pasteles/apiPasteles';
import React from 'react'
import { PastelDetail } from 'src/app/components/public/pasteles/PastelDetail';


const PastelPage = async ({params: {id}}: {params: {id:string}}) => {
    
  const pastel = await apiPasteles.detalle(id);

    console.log("------------")
    console.log(pastel)
  return (
    <section className="container mx-auto px-4 mt-6 border min-h-screen">
      <PastelDetail pastel={pastel} />
    </section>
  )
}

export default PastelPage
