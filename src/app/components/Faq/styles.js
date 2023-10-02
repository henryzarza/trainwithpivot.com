import { makeStyles } from '@material-ui/core/styles';

import { border, black } from '~utils/colors';
import { getDesktopSize, getMediumSize, getMaxSize } from '~utils/style';

/* eslint-disable no-magic-numbers */
export const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&::before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 0,
      fontFamily: 'Good Sans'
    }
  },
  expanded: {},
  summary: {
    borderBottom: `1px solid ${border}`,
    padding: 0
  },
  question: {
    color: black,
    fontFamily: 'Good Sans',
    fontWeight: 500,
    fontSize: getMaxSize(25),
    '@media (max-width: 1440px)': {
      fontSize: getDesktopSize(20)
    },
    '@media (max-width: 810px)': {
      fontSize: getMediumSize(20)
    },
    '@media (max-width: 550px)': {
      fontSize: '20px'
    }
  },
  typography: {
    padding: `${getMaxSize(20)} 0`,
    fontFamily: 'Good Sans',
    fontSize: getMaxSize(16),
    '@media (max-width: 1440px)': {
      padding: `${getDesktopSize(20)} 0`,
      fontSize: getDesktopSize(16)
    },
    '@media (max-width: 810px)': {
      padding: `${getMediumSize(20)} 0`,
      fontSize: getMediumSize(16)
    },
    '@media (max-width: 550px)': {
      padding: '20px 0',
      fontSize: '16px'
    }
  },
  expansionPanelDetails: {
    padding: 0
  }
});
/* eslint-enable no-magic-numbers */
