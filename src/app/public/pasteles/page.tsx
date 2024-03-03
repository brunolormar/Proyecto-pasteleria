import React from "react";
import ColumPastel, { IPastel } from '../../interfaces/IPasteles';
import { Tabla } from "src/app/components/commons/Tabla/Tabla";
import { getPasteles } from "src/model/pasteles/datapastel";
import DataGrid from "src/app/components/public/pasteles/DataGrid/Datagrid";
import { PastelesCardList } from "src/app/components/public/pasteles/PastelesCardList";

const PastelesPage = async () => {

  const pasteles: IPastel[] = await getPasteles()
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-4xl m-8'>Sección de Pasteles</h2>
      {/*<Tabla
        rows={pasteles}
        columns={ColumPastel}
        key='Pastelid' />*/}

      <PastelesCardList pasteles={pasteles} />
      {/*<DataGrid rows={pasteles} columns={ColumPastel} />*/}
    </section>
  )
}

export default PastelesPage