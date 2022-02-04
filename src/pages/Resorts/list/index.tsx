import React from "react";
import { Container, Grid, Pagination, TablePagination } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CardTravel from "../../../components/Card";
import FilterBox from "../../../components/FilterBox";
import SortBox from "../../../components/SortBox";
import data from "../../../utils/data.json";
import useDevice from "../../../hooks/useDevice";
import { ICard } from "../../../types/Card";

const Resorts = () => {
  const { isMobile } = useDevice();
  const [travelData, setTravelData] = useState<ICard[]>();
  const [paginationData, setPaginationData] = useState({
    page: 1,
    limit: 20,
    totalPage: 1,
  });

  useEffect(() => {
    setPaginationData({
      ...paginationData,
      totalPage: Math.ceil(data.length / 20),
    });
    setTravelData(data.slice(0, 20));
  }, [data]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const preItemsIndex = (value - 1) * 20;
    setPaginationData({
      ...paginationData,
      page: value,
    });
    setTravelData(data.slice(preItemsIndex, preItemsIndex + 20));
    window.scrollTo(0, 0);
  };
  return (
    <Container disableGutters maxWidth={"xl"} style={{ padding: "1rem" }}>
      <Box display={"flex"} flexDirection={isMobile ? "column" : "row"}>
        <Box
          position={isMobile ? "relative" : "sticky"}
          alignSelf={"flex-start"}
          left={"1rem"}
          top={"1rem"}
          marginRight="1rem"
          marginBottom="2rem"
          width={isMobile ? "100%" : "auto"}
          display=" flex"
          flexDirection="column"
          alignItems="center"
        >
          <FilterBox />
          <SortBox />
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {travelData?.map((item, index) => (
            <Grid item key={index}>
              <CardTravel item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid container justifyContent={"center"} mt="2.5rem">
        <Pagination
          count={paginationData.totalPage}
          page={paginationData.page}
          onChange={handleChange}
          boundaryCount={2}
        />
      </Grid>
    </Container>
  );
};

export default Resorts;
