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
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16),
    backgroundColor: theme.palette.background.secondary
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  photoSize: {
    height: 200,
    width: 200
  }
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
      <Container className={classes.cardGrid} maxWidth="false">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <ExpansionPanel>
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
                  I'm currently a senior at the University of Washington
                  studying Computer Science. I grew up in Spokane, Washington,{" "}
                  <br /> and like to spend time outdoors when I'm not stuck on
                  campus with a book in my nose. At home, I enjoy cooking for{" "}
                  <br /> myself and reading or watching Netflix. I love to
                  travel and work in new places, but will find myself coming 
                  back to the pacific <br /> northwest my home.
                </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography>
                  After graduation, I hope to see myself in a role that is
                  consumer facing. With two summers of experience as an intern{" "}
                  <br /> at HBO, I've realized I get great satisfaction from
                  working on products that directly interface with users. More
                  so, I've <br /> grown fond of the logical and critical
                  thinking which comes with backend development. Video
                  streaming, UI, and user <br /> account based work are areas
                  that I have substantial experience in. In my free time, I
                  enjoy web development and the <br /> creative side that comes
                  with designing and using frameworks like React.
                </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography>
                  Please see my LinkedIn if you'd like to know more.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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
          <Grid item xs={12} sm={6} md={4}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography variant="h6" color="primary">
                  Technical Proficiencies
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Programming languages & frameworks: Java, Javascript, HTML, C,
                  C++, SQL, React, Node.js <br />
                  Databases: PostgreSQL, MySQL <br />
                  Servers: Azure, AWS, Apache <br />
                  Tools: Git, JIRA, Jenkins, Docker, JUnit, Kubernetes, Jasmine{" "}
                  <br />
                  Methodologies: SAFe (Scaled Agile Framework), Scrum <br />
                </Typography>
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
