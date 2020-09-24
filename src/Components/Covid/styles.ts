import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        maxWidth: '70vw',
    }
})

export default useStyles;
