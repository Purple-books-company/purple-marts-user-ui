import { Promotion, Box, Text } from "../../../styles/carousels";
const Carousel = () => {
  return (
    <div>
      <Promotion
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <Promotion className="carousel-inner">
          <Promotion className="carousel-item active">
            <img
              src="https://cdn.shopify.com/s/files/1/0437/0454/9536/files/slider-2-bg_2000x.png?v=1597041044"
              className="d-block w-100"
              alt="..."
            />

            <Box>
              <Text>FLAT 80% OFF ON PHONE ACCESORIES</Text>
            </Box>
          </Promotion>
          <Promotion className="carousel-item">
            <img
              src="https://cdn.shopify.com/s/files/1/0437/0454/9536/files/slider-3-bg_2000x.png?v=1597041084"
              className="d-block w-100"
              alt="..."
            />
            <Box>
              <Text>FREE SHIPPING ON FIRST ORDER</Text>
            </Box>
          </Promotion>
          <Promotion className="carousel-item">
            <img
              src="https://cdn.shopify.com/s/files/1/0437/0454/9536/files/slider-3-bg_2000x.png?v=1597041084"
              className="d-block w-100"
              alt="..."
            />
            <Box>
              <Text>FLAT 80% OFF ON AIRPODS</Text>
            </Box>
          </Promotion>
        </Promotion>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </Promotion>
    </div>
  );
};

export default Carousel;
