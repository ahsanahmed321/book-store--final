import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Card, CardBody } from "reactstrap";
import styles from "./Book.module.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    color: "white",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  // console.log(props);
  const buttonId = {
    class: props.class,
    books: props.books
  };

  var bookks = props.books;

  delete bookks._id;
  delete bookks.class;

  var books = Object.keys(bookks).map(key => {
    return [key, bookks[key]];
  });

  var booksDisplay = books.map(res => {
    return (
      <CardBody key={res[0]}>
        {res[0]} : {res[1]}
      </CardBody>
    );
  });

  return (
    <div className={classes.root}>
      <ExpansionPanel className={styles.backBlackBoard}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.class}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Card className={styles.backBlackBoard}>{booksDisplay}</Card>

          <button id={JSON.stringify(buttonId)} onClick={props.clicked}>
            Order
          </button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
