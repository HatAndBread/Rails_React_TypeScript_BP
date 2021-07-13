import { camelize } from "./camelize";
export const getInstanceVars = () => {
  const data: any = document.getElementsByName("react-data");
  return camelize(JSON.parse(data[0].content));
};
