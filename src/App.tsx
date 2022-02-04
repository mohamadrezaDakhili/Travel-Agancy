import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import CardTravel from "./components/Card";
import data from "./utils/data.json";

function App() {
  useEffect(() => {
    console.log(data, "data");
  }, []);

  return (
    <Container disableGutters maxWidth={"lg"} style={{ padding: "1rem" }}>
      <Grid container spacing={3} justifyContent="center">
        {data.map((item, index) => (
          <Grid item key={index}>
            <CardTravel item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
