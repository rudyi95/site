import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme): any => ({
 root: {
     position: 'relative',
     height: '350px',
     overflow: 'hidden',
     '& img': {
         position: 'absolute',
         width: '100%',
     },
     '& span': {
         width: '100%',
         textAlign: 'center',
         top: '25%',
         position: 'absolute',
         fontSize: '3vw',
         margin: '6% 0 0 29%',
        //  fontFamily: `'Roboto', sans-serif`,
         fontFamily: 'Caveat',
     },
 },
}));
export default useStyles;
