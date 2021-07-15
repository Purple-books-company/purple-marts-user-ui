import BeatLoader from "react-spinners/BeatLoader";
import { LightShade } from "../../../styles/themes/color-theme";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BeatLoader color={LightShade} size={10} />
    </div>
  );
};

export default Loading;
