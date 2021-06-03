import { Promotion, Box, Text } from "../../../styles/home-page";
import Sale1 from "../../../assets/images/Sale1.png";
import Sale2 from "../../../assets/images/Sale2.png";
import Sale3 from "../../../assets/images/Sale3.png";
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
            <img src={Sale3} className="d-block w-100" alt="..." />

            <Box>
              <Text>
                FLAT 80% OFF ON PHONE <br /> ACCESORIES
              </Text>
            </Box>
          </Promotion>
          <Promotion className="carousel-item">
            <img src={Sale2} className="d-block w-100" alt="..." />
            <Box>
              <Text>
                FREE SHIPPING ON FIRST <br /> ORDER
              </Text>
            </Box>
          </Promotion>
          <Promotion className="carousel-item">
            <img src={Sale1} className="d-block w-100" alt="..." />
            <Box>
              <Text>
                FLAT 80% OFF ON <br />
                AIRPODS
              </Text>
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
