import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme): any => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "480px",
  },
  containerInfo: {
    width: "1100px",
    padding: "2% 15% 0 15%",
  },
}));
export default useStyles;
