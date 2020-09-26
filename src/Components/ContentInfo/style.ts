import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme): any => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  headerWrapperInfo: {
    width: "1024px!important",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: '1%',

    '& a': {
      color: 'black',
    },
  },
  image: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1024px!important",
    marginLeft: "auto",
    marginRight: "auto",

    "& img": {
      maxWidth: "100%",
      height: "auto",
      marginTop: "20px",

      "&:first-child": {
        marginTop: 0,
      },
    },

    "&:first-child": {
      marginTop: "35px",
    },
    "&:last-child": {
      marginTop: "1%",
    },
  },
  containerInfo: {
    width: "70%",
    padding: "2% 2% 0 2%",
    fontFamily: `'Roboto', sans-serif`,
  },
}));
export default useStyles;
