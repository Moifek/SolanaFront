import { makeStyles } from "@material-ui/core/styles";
import { SecondaryColor } from "../../config";

export default makeStyles(() => ({
  MainBlock: {
    height: "800px",
    width: "1600px",
    alignSelf: "center",
    verticalAlign: "middle",
    backgroundColor: "white",
    position: "relative",
    top: "10%",
    left: "10%",
  },
  LeftContainer: {
    position: "relative",
    height: "700px",
    left:'10%',
    backgroundColor: "red",
  },
  RightContainer: {
    position: "relative",
    height: "700px",
    left:'15%',
    backgroundColor: "blue",
  },
  RightBlock1: {
    position:'relative',
    height:'275px',
    backgroundColor:'white',
  },
  RightBlock2: {
    position:'relative',
    height:'275px',
    backgroundColor:'grey',
  }
}));
