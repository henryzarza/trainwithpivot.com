import { makeStyles } from '@material-ui/core/styles';

import { black } from '~utils/colors';
import { getDesktopSize, getMediumSize, getMaxSize } from '~utils/style';

/* eslint-disable no-magic-numbers */
export const useStyles = makeStyles({
  label: {
    fontSize: getMaxSize(13),
    fontFamily: 'Good Sans',
    color: black,
    '@media (max-width: 1440px)': {
      fontSize: getDesktopSize(13)
    },
    '@media (max-width: 810px)': {
      fontSize: getMediumSize(13)
    },
    '@media (max-width: 550px)': {
      fontSize: '13px'
    }
  }
});
