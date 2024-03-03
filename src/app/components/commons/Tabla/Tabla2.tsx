'use client';
import React from "react";
import {Table, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Morgado",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
  {
    key: "5",
    name: "Maria",
    role: "Community Manager",
    status: "Active",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

export const Tabla2 = () => {
  return (

    <Table aria-label="Example table with dynamic content">
      <tableHeader columns={columns}>
        {(column) => <tableColumn key={column.key}>{column.label}</tableColumn>}
      </tableHeader>
      <tableBody items={rows}>
        {(item) => (
          <tableRow key={item.key}>
            {(columnKey) => <tableCell>{getKeyValue(item, columnKey)}</tableCell>}
          </tableRow>
        )}
      </tableBody>
    </Table>
  );
}
