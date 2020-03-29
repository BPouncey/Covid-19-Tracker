import { makeStyles, withStyles } from '@material-ui/styles/'

export const useStyles = makeStyles({

    root: {
        width: '65vw',
        height: '85vh',
        paddingTop: '6%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(0,0,0,.7)',
        position: 'fixed',
        zIndex: 9,
        overflowY: 'scroll',
    },

    linkText: {
        color: 'cyan',
        textDecoration: 'none',
        width: 90,
        textTransform: 'none',
    },

    newsCard: {
        backgroundColor: '#363636',
        width: '32%',
        height: '65%',
        margin: '0.5%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        zIndex: 99,
    },

    media: {
        height: '100%'
    },

    icon: { 
        width: 35, 
        height: 35,  
        position: 'fixed', 
        zIndex: 999, 
        marginLeft: '-60%' 
    },

    heading: { 
        color: 'white', 
        padding: 5, 
        fontSize: 21 
    },

    paragraphText: { 
        color: 'white', 
        fontSize: 17, 
        fontWeight: 'lighter', 
        fontStyle: "italic" 
    },
   
    adsContainer: {
        
    },

    '@media (max-width: 414px)': {
        root: {
            width: '100vw',
            height: '85vh',
            backgroundColor: 'rgba(0,0,0,.7)',
            zIndex: 999,
            position: 'fixed',
            marginTop: '0vh'
        },

        newsCard: {
            width: '90%',
            height: '70%',
            marginTop: 20,
        },
        heading: {
            fontSize: 22,
            color: 'white',
            // fontWeight: 'lighter'
        },

        paragraphText: {
            color: 'white',
            padding: 10,
            fontSize: '1.1em'
        },
        icon: {
           marginTop: '20%',
           marginLeft: '-70%',
           zIndex: 9999
        },

    },
   
});
