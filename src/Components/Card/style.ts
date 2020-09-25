import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme): any => ({
  root: {
    width: "100%",
    margin: '0px 0 12px 0',

    "& .MuiCardActionArea-root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "initial",
      textAlign: 'center',
    },
    '& .MuiCardMedia-img': {
      objectFit: 'fill',
    },
    '& .MuiTypography-gutterBottom': {
      margin: 0,
    },
  },
}));
export default useStyles;
