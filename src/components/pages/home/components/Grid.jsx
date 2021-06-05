import { DarkShade } from "../../../../styles/color-theme";
import { Block, Caption } from "../../../../styles/home-page";

const Grid = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <Block
              style={{
                backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTugCX5kSC9m1XFVcK7BWoZY9HiycolFcoTQ&usqp=CAU")`,
              }}
            >
              <Caption> PHONE ACCESSORIES</Caption>
            </Block>
          </div>
          <div className="col-md-3 mt-4">
            <Block
              style={{
                backgroundImage: `url("https://m.media-amazon.com/images/I/61R4wTQfJdL._AC_SX425_.jpg")`,
              }}
            >
              <Caption>HAPPY SHOP</Caption>
            </Block>
          </div>

          <div className="col-md-3 mt-4">
            <Block style={{ background: DarkShade }}>
              <Caption>SHOP HEAD PHONES</Caption>
            </Block>
          </div>

          <div className="col-md-3 mt-4">
            <Block
              style={{
                backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5mYIH9y9ovhGwpiqquVjk2g6ivCHrnSO1g&usqp=CAU")`,
              }}
            >
              <Caption>HAPPY SHOP</Caption>
            </Block>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;