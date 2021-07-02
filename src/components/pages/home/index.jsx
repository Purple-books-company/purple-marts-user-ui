import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Carousel from "./components/Carousel";
import Sliders from "./components/Sliders";
import Loading from "../../utils/loader";
import { getApi, fetchResult } from "../../../services/api/loaded-services";

export default function Home() {
  const [home, setHome] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getApi();
    let values;
    values = await fetchResult("home");
    setHome({ ...values });
    // console.log(values);
  };

  return (
    <>
      {home ? (
        <div>
          <Carousel data={home.carousel} />
          <Grid data={home["Test Sale"]} />
          <Sliders data={home.subCategory} text="EXPLORE TRENDING ITEMS" />
          <Sliders data={home.category} text="CATEGORIES TO BAG" />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
