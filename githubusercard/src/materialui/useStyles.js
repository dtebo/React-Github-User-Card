import { makeStyles, createMuiTheme, withStyles } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    bio: {
        fontStyle: 'italic',
        fontSize: '1.4rem'
    },
    sectiontitle: {
        display: 'flex'
    },
    smallAvatar: {
        width: theme.spacing(2),
        height: theme.spacing(2)
    },
    largeAvatar: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}));

export default useStyles;