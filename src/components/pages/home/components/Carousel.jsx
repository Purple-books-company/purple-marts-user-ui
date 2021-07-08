import { useHistory } from "react-router-dom";
import { HoverImage } from "../../../../styles/widgets/widgets";
import { TitleBox, Main } from "../../../../styles/pages/home-page";

const Carousels = ({ data }) => {
  let history = useHistory();
  let promote = [
    "We have Sale that Brings joy",
    "Its Sale! you can’t Resist",
    "Your favorite products made affordable for you",
  ];
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide mt-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {data.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 && " active"}`}
              key={item.id}
              onClick={() => history.push("/offers")}
            >
              <HoverImage
                src={item.image}
                className="d-block w-100"
                alt="SALE IS LIVE"
                height="90%"
              />
              <TitleBox className="carousel-caption d-none d-md-block">
                <Main>{item.description}</Main>
                <p style={{ color: "white" }}>{promote[index]} !!!</p>
              </TitleBox>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousels;
