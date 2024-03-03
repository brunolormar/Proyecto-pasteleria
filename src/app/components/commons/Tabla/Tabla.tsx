'use client';
import React, {FC} from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { IColumn, IPastel } from "src/app/interfaces/IPasteles";


interface Props {
    rows: IPastel[],
    columns: IColumn[]
}

export const Tabla:FC<Props> = ({rows, columns, key}) => {
    return (
  
      <Table aria-label="Example table with dynamic content">
        <tableHeader columns={columns}>
          {(column) => <tableColumn key={column.key}>{column.label}</tableColumn>}
        </tableHeader>
        <tableBody items={rows}>
          {(item) => (
            <tableRow key={`item.${key}` }>
              {(columnKey) => <tableCell>{getKeyValue(item, columnKey)}</tableCell>}
            </tableRow>
          )}
        </tableBody>
      </Table>
    );
  }
  
