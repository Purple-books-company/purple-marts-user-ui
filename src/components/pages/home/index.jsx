import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import Grid from "./components/Grid";

export default function Home() {
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
