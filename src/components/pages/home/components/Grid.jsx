import React from "react";
import { useHistory } from "react-router";
import { DarkShade } from "../../../../styles/themes/color-theme";
import { Text } from "../../../../styles/widgets/widgets";
import { Block } from "../../../../styles/pages/home-page";

const Grid = ({ data, text }) => {
  let history = useHistory();
  const gridImg = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTugCX5kSC9m1XFVcK7BWoZY9HiycolFcoTQ&usqp=CAU",
    "https://m.media-amazon.com/images/I/61R4wTQfJdL._AC_SX425_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5mYIH9y9ovhGwpiqquVjk2g6ivCHrnSO1g&usqp=CAU",
  ];

  function handleClick(category, slug) {
    history.push("/category/" + category + "/" + slug);
  }

  return (
    <>
      <Text primary className="mt-1" align="center">
        {text}
      </Text>
      <div className="container-fluid my-4">
        <div className="row">
          {gridImg.map((img, index) => (
            <div className="col-md-3 mt-4" key={index}>
              <Block
                style={{
                  backgroundImage: `url(${img})`,
                }}
                onClick={() =>
                  handleClick(data[index].category, data[index].slug)
                }
              >
                <Text tags color="white" align="center">
                  Shop {data[index].name}
                </Text>
              </Block>
            </div>
          ))}

          <div className="col-md-3 my-4">
            <Block
              style={{ background: DarkShade }}
              onClick={() => handleClick(data[3].category, data[3].slug)}
            >
              {data && (
                <Text tags color="white" align="center">
                  SHOP {data[3].name}
                </Text>
              )}
            </Block>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
