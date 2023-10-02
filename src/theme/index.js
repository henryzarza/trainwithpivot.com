import { createMuiTheme } from '@material-ui/core/styles';

import { black, white } from '../utils/colors';

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: black
    },
    secondary: {
      main: white
    },
    text: {
      dark: black,
      light: white
    }
  },
  overrides: {
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color'
        }
      }
    },
    MuiInputLabel: {
      root: {
        color: '#979797',
        fontFamily: 'Helvetica',
        fontSize: 16
      }
    }
  }
});
