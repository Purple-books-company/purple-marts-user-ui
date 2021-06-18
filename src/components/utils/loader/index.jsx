import PuffLoader from "react-spinners/PuffLoader";
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
      <PuffLoader color={DarkShade} size={65} />
    </div>
  );
};

export default Loading;
