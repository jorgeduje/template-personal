import { createTheme } from '@mui/material/styles';
import { deepPurple, pink } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: {
      main: deepPurple[100]
    }
  },
});