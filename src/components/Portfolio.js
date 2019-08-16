import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Profile from "../assets/profile.png";
import Flight from "../assets/airplane.png";
import Xv6 from "../assets/os.png";
import "typeface-roboto";

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© 2019, Ryan Dailey "}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
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
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CodeIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Ryan Dailey
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Projects
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item>
                  <Button href="/about" variant="contained" color="primary">
                    About me
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    target="_blank"
                    href="https://www.linkedin.com/in/dailey-ryan/"
                    variant="outlined"
                    color="secondary"
                  >
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    target="_blank"
                    href="https://github.com/rdailey98"
                    variant="outlined"
                    color="secondary"
                  >
                    Github
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="false">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Profile}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    This Website
                  </Typography>
                  <Typography variant="overline">Overview:</Typography>
                  <Typography>
                    This website is a React application built with the Gatsby.js
                    framework to house some of the projects I've completed. It
                    contains an about me section and links to both my LinkedIn
                    and Github accounts. The UI was designed with the
                    Material-UI framework.
                  </Typography>
                  <Typography variant="overline">Experience Gained:</Typography>
                  <Typography>
                    - React <br />
                    - Material-UI <br />
                    - HTML <br />
                    - Networking and site hosting <br />
                    - UI Design <br />
                    - NPM (Node package manager) <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    target="_blank"
                    href="https://github.com/rdailey98/portfolio/tree/public"
                    size="large"
                    color="primary"
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Flight}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Flight Booker
                  </Typography>
                  <Typography variant="overline">Overview:</Typography>
                  <Typography gutterBottom>
                    A simple flight booking system built with Java and housed on
                    a Microsoft Azure database. The application is meant to be a
                    play tool. It supports user account creation, fund deposit
                    and withdrawl, itinerary searching, and flight
                    booking/cancellation. The application is fully supportive of
                    concurrent transactions, and can be run on a localhost.
                  </Typography>
                  <Typography variant="overline">Experience Gained:</Typography>
                  <Typography>
                    - Database deployment <br />
                    - Microsoft Azure <br />
                    - SQL <br />
                    - Distrubted system design <br />
                    - Java <br />
                    - Schema design <br />
                    - Transactions <br />
                    - Unit and integration testing <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    target="_blank"
                    href="https://github.com/rdailey98/flight-booker"
                    size="large"
                    color="primary"
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Xv6}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Xv6 Operating System
                  </Typography>
                  <Typography variant="overline">Overview:</Typography>
                  <Typography>
                    Xv6 is an operating system developed by MIT that is stubbed
                    out and meant to be used as a learning tool. It is largely
                    skeleton code and has been left for the developer implement.
                    After completing the project, I took Xv6 from a
                    non-functioning OS to one that supports a file system,
                    system calls such as exec, fork, read, write, and open,
                    multi-processing capabilities, disk reads and writes,
                    paging, a crash safety boot mechanism, and per process
                    priority tables.
                  </Typography>
                  <Typography variant="overline">Experience Gained:</Typography>
                  <Typography>
                    - Debugging techniques <br />
                    - C <br />
                    - System design <br />
                    - Unit and integration testing <br />
                    - Concurrency <br />
                    - Deadlock and race condition handling <br />
                    - Multi-processing development <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    target="_blank"
                    href="https://github.com/rdailey98/xv6-operating-system"
                    size="large"
                    color="primary"
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
