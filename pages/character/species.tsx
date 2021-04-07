import React from "react";
//third party
import { Grid } from "@material-ui/core";
//api
import { useQuery } from "react-query";
import { getPersonDetails } from "../api/api";
//styled
import CachedIcon from "@material-ui/icons/Cached";
import styles from "../../styles/Home.module.css";

// species interface
interface SpeciesProps {
  id: string;
  light: boolean;
}

const Species = ({ id, light }: SpeciesProps) => {
  // get species query
  const { data, status, error } = useQuery(`species-${id}`, () =>
    getPersonDetails("species", id, error)
  );

  return (
    <>
      {/* return loading or species info */}
      {status === "loading" ? (
        <Grid
          container
          direction="row"
          xs={12}
          justify="center"
          alignItems="center"
        >
          <CachedIcon
            className={styles?.rotate}
            style={{ color: light ? "blue" : "red" }}
          />
        </Grid>
      ) : (
        <Grid container direction="row" xs={12} key={data?.id}>
          <span style={{ fontWeight: "bold" }}>Species:&nbsp;</span>{" "}
          {data?.name ? data?.name : "Human"}
        </Grid>
      )}
    </>
  );
};

export default Species;