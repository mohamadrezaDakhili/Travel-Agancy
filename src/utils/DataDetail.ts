import data from "./data.json";

export const DataDetail = (id: number) => {
  return data.find((item) => item.id == id)
};
