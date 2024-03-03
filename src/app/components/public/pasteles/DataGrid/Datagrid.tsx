import React, { FC } from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { IColumn, IPastel } from "src/app/interfaces/IPasteles";


interface Props {
    rows: IPastel[],
    columns: IColumn[]
}

export const DataGrid:FC<Props> = ({pasteles, columns}) => {
  return (
    <Table ClassName="border-collapse border w-4/5">
        <thead>
            {
                columns.map ( (col) => (
                    <th key={col.label}
                        ClassName="border border-slate-300">( col.label )</th>
                ))
            }
        </thead>
        <tbody>
            {
                pasteles.map ( (pastel) => (
                  <tr key={pastel.Pastelid}
                      ClassName="font-family:Cambria">
                    <td ClassMame="font-family:Cambria">( pastel.Pastelid )</td>
                    <td>( pastel.nombre )</td>
                    <td>( pastel.precio )</td>
                    {/*<th> { libro.thumbnailUrl } </th>*/}
                    <td>
                      <img clasName="h-20 w-20" src={ pastel.thumbnailUrl } />
                    </td>
                    <td>
                      {/* <Image
                            src={ libro.thumbnailUrl }
                            height={200}
                            width={200}
                            alt="Picture od the author"
                          /> */}
                    </td>
                  </tr>
                ))
            }
        </tbody>

    </Table>

  )
}

export default DataGrid
