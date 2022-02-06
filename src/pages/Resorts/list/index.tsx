import React from "react";
import { Container, Grid, Pagination, TablePagination } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CardTravel from "../../../components/Card";
import useDevice from "../../../hooks/useDevice";
import { ICard } from "../../../types/Card";
import { useSelector } from "react-redux";
import { getList } from "../../../redux/reducer";
import SortBox from "./SortBox";
import FilterBox from "./FilterBox";

const Resorts = () => {
  const { isMobile } = useDevice();
  const [travelData, setTravelData] = useState<ICard[]>();
  const [paginationData, setPaginationData] = useState({
    page: 1,
    limit: 20,
    totalPage: 1,
  });
  const allData = useSelector(getList);

  useEffect(() => {
    setPaginationData({
      ...paginationData,
      totalPage: Math.ceil(allData.length / 20),
    });
    setTravelData(allData.slice(0, 20));
  }, [allData]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const preItemsIndex = (value - 1) * 20;
    setPaginationData({
      ...paginationData,
      page: value,
    });
    setTravelData(allData.slice(preItemsIndex, preItemsIndex + 20));
    window.scrollTo(0, 0);
  };
  return (
    <Container disableGutters maxWidth={"xl"} style={{ padding: "1rem" }}>
      <Box display={"flex"} flexDirection={isMobile ? "column" : "row"}>
        <Box
          position={isMobile ? "relative" : "sticky"}
          alignSelf={"flex-start"}
          left={"1rem"}
          top={"5rem"}
          marginRight="1rem"
          marginBottom="2rem"
          width={isMobile ? "100%" : "auto"}
          display=" flex"
          flexDirection="column"
          alignItems="center"
          padding="1rem"
          borderRadius={"1rem"}
          style={{ background: "white" }}
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
