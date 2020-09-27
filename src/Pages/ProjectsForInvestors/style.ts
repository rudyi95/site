import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme): any => ({
 root: {
     '&:first-child > img': {
         width: '100%',
     },
     
    '&::-webkit-scrollbar': {
        display: 'none',
      },
 }}));
export default useStyles;
