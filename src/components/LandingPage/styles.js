import { makeStyles } from "@material-ui/core/styles";
import { SecondaryColor, MainColor } from "../../config.js";

export default makeStyles(() => ({
  MainBlock: {
    position: 'relative',
    alignSelf: "center",
    verticalAlign: "middle",
    height: "800px",
    width: "1600px",
    top: "10%",
    left: "10%",
  },
  TableCell: {
    position: "relative",
    width: "75px",
    backgroundColor: "red",
    borderColor: "#F6EFE2",
  },
  ComingSoon: {
    backgroundColor: SecondaryColor,
    position: "absolute",
    left: "35.69%",
    right: "35.49%",
    top: "55.86%",
    bottom: "36.72%",
    width:'415px',
    height:'76px',
  },
  Title: {
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Merriweather Sans",
    fontSize: "34px",
    fontWeight: "800",
    lineHeight: "28px",
    letterSpacing: "0.04em",
    color: "#F6EFE2",
  },
  Table: {
    borderColor: "#F6EFE2",
  },
  ButtonSecondaryColor: {
    backgroundColor: SecondaryColor,
  },
}));
