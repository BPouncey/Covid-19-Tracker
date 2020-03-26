import { makeStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({
    root: {
        width: '48%',
        padding: 5,
        marginBottom: 5,
        marginLeft: 5,
        color: 'white',
        backgroundColor: '#363636',
    },


    '@media (max-width: 1024px)': {
        root: {
            width: "34vw",
            height: '21vh',
        }
    },
    '@media (max-width: 415px)': {
        root: {
            height: '17vh',
            width: '100%',
            zIndex: 99
        },
    },

});