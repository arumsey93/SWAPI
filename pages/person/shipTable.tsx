import React from "react";
//third party
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
//components
import Ship from "../components/ship";

// data type
type DataObject = {
  starships: Array<any>;
};

// ship interface
interface ShipTableProps {
  data: DataObject;
  light: boolean;
  dataView: string;
}

const ShipTable = ({ data, light, dataView }: ShipTableProps) => {
  // return ship table
  return (
    <Grid
      item
      direction="row"
      xs={12}
      style={{
        border: light ? "2px solid blue" : "2px solid red",
        borderRadius: "6px",
        backgroundColor: "white",
      }}
    >
      <TableContainer>
        <Table stickyHeader>
          {/* table header */}
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Hyperdrive Rating</TableCell>
              <TableCell>Max Speed</TableCell>
              <TableCell>Length</TableCell>
              <TableCell>Passengers</TableCell>
              <TableCell>Crew</TableCell>
              <TableCell>Manufacturer</TableCell>
            </TableRow>
          </TableHead>

          {/* map over data / return table body */}
          {data?.starships.map((ship: string) => {
            const shipUrlSections = ship.split("/").filter(Boolean);
            const shipId = shipUrlSections[shipUrlSections.length - 1];
            return (
              <Ship
                id={shipId}
                light={light}
                key={`Ship-${shipId}`}
                dataView={dataView}
              />
            );
          })}
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ShipTable;
