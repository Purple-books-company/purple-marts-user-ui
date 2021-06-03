import Carousel from "./Carousel";
import Grid from "./components/Grid";
import TrendingProducts from "./components/TrendingProducts";

export default function CarouselComponent() {
  return (
    <>
      <div>
        <Carousel />
        <Grid />
        <TrendingProducts />
      </div>
    </>
  );
}
