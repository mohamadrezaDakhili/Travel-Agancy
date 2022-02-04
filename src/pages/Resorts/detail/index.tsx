import React from "react";
import { useParams } from "react-router";

const ResortsDetail = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default ResortsDetail;
