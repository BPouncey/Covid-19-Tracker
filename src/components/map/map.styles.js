import { makeStyles, withStyles } from '@material-ui/styles/'
import TextField from '@material-ui/core/TextField/'

export const useStyles = makeStyles(theme => ({
    map: {
        position: 'fixed',
        marginTop: '3.7%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    loader: { 
        marginLeft: '31vw', 
        marginTop: '33vh' 
    },

    navIconDiv: { 
        position: 'absolute', 
        marginTop: 45, 
        marginLeft: 10, 
        zIndex: 999 
    },

    navIcon: { 
        color: '#363636', 
        width: 40, 
        height: 40, 
    },

    textfieldInput: {
        color: 'white',
        fontSize: "1.7em",
        padding: 0
    },

    textField: {
        width: 300,
    },

})
)
