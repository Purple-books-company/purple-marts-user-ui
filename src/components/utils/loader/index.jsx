import BeatLoader from "react-spinners/BeatLoader";
import { DarkShade } from "../../../styles/themes/color-theme";

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
      <BeatLoader color={DarkShade} size={10} />
    </div>
  );
};

export default Loading;
