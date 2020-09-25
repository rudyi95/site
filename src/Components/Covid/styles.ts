import { makeStyles } from "@material-ui/core";
import CovidImage from "../../Img/covid.jpg";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    background: "#fff",
    maxWidth: "100vw",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${CovidImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  wrapperLeft: {
    width: "80%",
  },
  wrapperRight: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    paddingTop: "6vh",
    flexDirection: "column",
  },

  wrapperInfo: {
    top: "50%",
    left: "50%",
    width: "80%",
    height: "60%",
    display: "flex",
    padding: "30px",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    background: "#fff",
  },
  headerWrapperInfo: {
    fontSize: "2.44vh",
  },
  title: {
    margin: 0,
    fontSize: "4.5vh",
    lineHeight: 1.5,
    paddingTop: "10px",
    paddingBottom: "0px",
  },
  dateText: {
    color: "red",
    fontStyle: "italic",
    fontSize: "2.5vh",
  },
  description: {
    fontSize: "3.04vh",
  },
  buttonsGuide: {
    width: "21vw",
    border: 0,
    padding: "1.52vh",
    textAlign: "left",
    fontSize: "2vh",
    backgroundColor: "transparent",

    "& :hover": {
      border: "2px solid blue",
    },
  },
  guide: {
    color: "#fff",
    width: "21vw",
    padding: "1.5vh 0 1.5vh 1vh",
    textAlign: "start",
    fontSize: "1.6vw",
    backgroundColor: "blue",
  },
});

export default useStyles;
