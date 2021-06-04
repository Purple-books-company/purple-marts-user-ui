import { DarkShade } from "../../../../styles/color-theme";
import { Block, Caption } from "../../../../styles/home-page";

const Grid = () => {
  const gridImg = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTugCX5kSC9m1XFVcK7BWoZY9HiycolFcoTQ&usqp=CAU",
    "https://m.media-amazon.com/images/I/61R4wTQfJdL._AC_SX425_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5mYIH9y9ovhGwpiqquVjk2g6ivCHrnSO1g&usqp=CAU",
  ];

  const gridText = ["PHONE ACCESSORIES", "SHOP ESSENTIALS", "SHOP HEAD PHONES"];
  return (
    <>
      <div className="container">
        <div className="row">
          {gridImg.map((img, index) => (
            <div className="col-md-3 mt-4" key={index}>
              <Block
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <Caption>{gridText[index]}</Caption>
              </Block>
            </div>
          ))}

          <div className="col-md-3 mt-4">
            <Block style={{ background: DarkShade }}>
              <Caption>SHOP AIR PODS</Caption>
            </Block>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
