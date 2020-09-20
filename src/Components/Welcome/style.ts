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
         position: 'absolute',
         fontSize: '2em',
         margin: '5% 0 0 35%',
     },
 },
}));
export default useStyles;
