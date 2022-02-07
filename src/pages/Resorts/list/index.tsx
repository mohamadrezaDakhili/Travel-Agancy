import React from "react";
import {
  Button,
  Container,
  Grid,
  Pagination,
  TablePagination,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CardTravel from "../../../components/Card";
import useDevice from "../../../hooks/useDevice";
import { ICard } from "../../../types/Card";
import { useDispatch, useSelector } from "react-redux";
import { getList, getPaginationList } from "../../../redux/reducer";
import SortBox from "./SortBox";
import FilterBox from "./FilterBox";
import { makeStyles } from "@mui/styles";
import {
  highestPriceListAction,
  lowestPriceListAction,
  paginationListAction,
} from "../../../redux/action";
import { highestListCompare, lowestListCompare } from "../../../utils/Compare";

const useStyles = makeStyles({
  sortButton: {
    width: "100px",
    fontSize: "10px",
  },
});

const Resorts = () => {
  const classes = useStyles();
  const { isMobile } = useDevice();
  const [travelData, setTravelData] = useState<ICard[]>();
  const allData = useSelector(getList);
  const dispatch = useDispatch();
  const paginationRedux = useSelector(getPaginationList);

  useEffect(() => {
    dispatch(
      paginationListAction({
        page: paginationRedux.page,
        totalPage: Math.ceil(allData.length / 20),
      })
    );

    setTravelData(allData.slice(0, 20));
  }, [allData]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const preItemsIndex = (value - 1) * 20;
    dispatch(
      paginationListAction({
        page: value,
        totalPage: paginationRedux.totalPage,
      })
    );
    setTravelData(allData.slice(preItemsIndex, preItemsIndex + 20));
    window.scrollTo(0, 0);
  };

  const handleClickHighest = () => {
    dispatch(
      paginationListAction({ page: 1, totalPage: paginationRedux.totalPage })
    );
    dispatch(highestPriceListAction({ arr: allData.sort(highestListCompare) }));
    setTravelData(allData.sort(highestListCompare).slice(0, 20));
  };
  const handleClicklowest = () => {
    dispatch(lowestPriceListAction({ arr: allData.sort(lowestListCompare) }));
    setTravelData(allData.sort(lowestListCompare).slice(0, 20));
    paginationListAction({ page: 1, totalPage: paginationRedux.totalPage });
  };

  return (
    <Container disableGutters maxWidth={"xl"} style={{ padding: "1rem" }}>
      <Box display={"flex"} flexDirection={isMobile ? "column" : "row"}>
        <Box
          position={isMobile ? "inherit" : "sticky"}
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
          <Box
            width="100%"
            display="flex"
            justifyContent={"space-between"}
            mt="1rem"
          >
            <Button
              className={classes.sortButton}
              color="success"
              variant="contained"
              onClick={handleClicklowest}
            >
              Lowest price
            </Button>
            <Button
              className={classes.sortButton}
              color="success"
              variant="contained"
              onClick={handleClickHighest}
            >
              Highest price
            </Button>
          </Box>
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
          count={paginationRedux.totalPage}
          page={paginationRedux.page}
          onChange={handleChange}
          boundaryCount={2}
        />
      </Grid>
    </Container>
  );
};

export default Resorts;
