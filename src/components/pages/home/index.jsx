import { useEffect } from "react";
import Grid from "./components/Grid";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import { getApi } from "../../../services/api/loaded-services";

export default function Home() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getApi();
  };

  return (
    <>
      <div>
        <Carousel />
        <Grid />
        <Categories />
      </div>
    </>
  );
}
