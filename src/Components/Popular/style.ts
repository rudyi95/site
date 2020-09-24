import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme): any => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "480px",
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    width: '15%',

    '& img': {
      width: '100%',
      height: '250px',
      marginTop: '20px',

      '&:first-child': {
        marginTop: 0,
      },
    },
    
    
    '&:first-child': {
      marginTop: '35px',
    },
    '&:last-child': {
      marginTop: '35px',
    },
  },
  containerInfo: {
    width: "70%",
    padding: "2% 2% 0 2%",
    fontFamily: `'Roboto', sans-serif`,
  },
}));
export default useStyles;
