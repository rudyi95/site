import { makeStyles } from '@material-ui/core';
import { Height } from '@material-ui/icons';
import CovidImage from '../../Img/covid.jpg'

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        background: '#fff',
        maxWidth: '100vw',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${CovidImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
    },
    wrapperLeft: {
        maxWidth: '65%',
        width: '100%',
    },
    wrapperRight: {
        maxWidth: '35%',
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: '40px',
    },

    wrapperInfo: {
        background: '#fff',
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '70vw',
        width: '100%',
        padding: '30px',
    },
    headerWrapperInfo: {},
    title: {
        fontSize: '46px',
        margin: 0,
        lineHeight: 1.5,
        paddingTop: '10px',
        paddingBottom: '0px',
    },
    dateText: {
        color: 'red',
        fontStyle: 'italic'
    },
    description: {
        lineHeight: 1.2,
        fontSize: '20px'
    },
    buttonsGuide: {
        padding: '10px',
        margin: 0,
        border: 0,
        backgroundColor: 'transparent',
        '& :hover': {
            border: '2px solid blue',
        },
        display: 'block',
        width: '201px',
        textAlign: 'left', 
    },
    guide: {
        padding: '10px',
        backgroundColor: 'blue',
        textAlign: 'left',
        width: '200px',
        color: '#fff',
    }

})

export default useStyles;
