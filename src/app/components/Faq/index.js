import React, { useState } from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { black } from '~utils/colors';

import { useStyles } from './styles';

function Faq({ items }) {
  const [expanded, setExpanded] = useState(items[0].id);
  const classes = useStyles();

  const handleChange = panel => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {items &&
        items.map(item => (
          <ExpansionPanel
            key={item.id}
            className={classes.root}
            classes={{ expanded: classes.expanded }}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            square
          >
            <ExpansionPanelSummary
              className={classes.summary}
              classes={{ content: classes.summaryContent }}
              expandIcon={
                expanded === item.id ? <RemoveIcon htmlColor={black} /> : <AddIcon htmlColor={black} />
              }
            >
              <Typography className={classes.question}>{item.question}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
              <Typography className={classes.typography}>{item.answer}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </>
  );
}

Faq.propTypes = {
  items: arrayOf(
    shape({
      answer: string.isRequired,
      id: string.isRequired,
      question: string.isRequired
    })
  )
};

Faq.displayName = 'Faq';

export default Faq;
