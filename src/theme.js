import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#446794',
    },
    secondary: {
      main: '#607d8b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      secondary: '#fafafa',
    },
  },
});

export default theme;
