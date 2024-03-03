import React from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

const Tabla1 = () => {
  return (
    <Table aria-label="Example static collection table">
      <tableHeader>
        <tableColumn>NOMBRE</tableColumn>
        <tableColumn>ROL</tableColumn>
        <tableColumn>ESTADO</tableColumn>
      </tableHeader>
      <tableBody>
        <tableRow key="1">
          <tableCell>Tony Reichert</tableCell>
          <tableCell>CEO</tableCell>
          <tableCell>Active</tableCell>
        </tableRow>
        <tableRow key="2">
          <tableCell>Zoey Lang</tableCell>
          <tableCell>Technical Lead</tableCell>
          <tableCell>Paused</tableCell>
        </tableRow>
        <tableRow key="3">
          <tableCell>Jane Fisher</tableCell>
          <tableCell>Senior Developer</tableCell>
          <tableCell>Active</tableCell>
        </tableRow>
        <tableRow key="4">
          <tableCell>William Howard</tableCell>
          <tableCell>Community Manager</tableCell>
          <tableCell>Vacation</tableCell>
        </tableRow>
        <tableRow key="5">
          <tableCell>Maria</tableCell>
          <tableCell>Community Manager</tableCell>
          <tableCell>Active</tableCell>
        </tableRow>
      </tableBody>
    </Table>
  );
}

export default Tabla1
