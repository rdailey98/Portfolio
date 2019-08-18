import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import "typeface-roboto";

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© 2019, Ryan Dailey "}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    backgroundColor: theme.palette.background.secondary
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Button href="/" variant="contained" color="primary">
            <ArrowBackIcon className={classes.leftIcon} />
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.cardGrid} maxWidth="true">
        <Grid container direction="column" spacing={4}>
          <Grid item xs={12} sm={12} md={12}>
            <ExpansionPanel width="100%">
              <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" color="primary">
                  About Me
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  I'm currently a senior at the University of Washington studying Computer Science. I grew up in Spokane, Washington, and like to spend time outdoors when I'm not stuck on campus with a book in my nose. At home, I enjoy cooking for myself and reading or watching Netflix. I love to travel and work in new places, but will always find myself drawn to the pacific northwest.
                </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography>
                  After graduation, I hope to see myself in a role that is consumer facing. With two summers of experience as an intern at HBO, I've realized I get great satisfaction from working on products that directly interface with users. More so, I've grown fond of the logical and critical thinking which comes with backend development. Video streaming, gelocation based services, and user account systems are areas that I have substantial experience in. In my free time, I enjoy web development and the creative side that comes with designing and using frameworks like React.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h6" color="primary">
                  Contact Info
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>dailey.ryan@outlook.com</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </Container>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </div>
  );
}
