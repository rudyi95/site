import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme): any => ({
  root: {
    width: "1024px!important",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1%",

    "& a": {
      color: "black",
    },
  },
}));
export default useStyles;
