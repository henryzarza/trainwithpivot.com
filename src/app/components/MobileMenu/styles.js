import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  burgerButton: {
    width: 75,
    height: 75,
    position: 'fixed'
  },
  mobileContainer: {
    marginTop: 70,
    '&>div': {
      '&>nav': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  },
  mobileBtn: {
    marginTop: theme.spacing(2),
    textTransform: 'none'
  },
  mobileBtnLabel: {
    color: props => theme.palette.text[`${props.variant}`],
    fontWeight: 500,
    fontSize: '1.2rem'
  }
}));
