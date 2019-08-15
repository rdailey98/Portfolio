import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Profile from '../assets/profile.png';
import Flight from '../assets/airplane.png';
import Xv6 from '../assets/os.png';
import Resume from '../assets/Dailey, Ryan - Resume.pdf'
import 'typeface-roboto';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© 2019, Ryan Dailey "}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),    
    backgroundColor: theme.palette.background.secondary
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
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
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Projects
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item>
                  <Button
                    href="/about"
                    variant="contained" 
                    color="primary">
                    About me
                  </Button>
                </Grid>
                <Grid item>
                  <Button 
                    target="_blank" 
                    href="https://www.linkedin.com/in/dailey-ryan/"
                    variant="outlined" 
                    color="secondary">
                    LinkedIn
                  </Button>
                </Grid>
                <Grid item>
                  <Button 
                    target="_blank"
                    href="https://github.com/rdailey98" 
                    variant="outlined" color="secondary">
                    Github
                  </Button>
                </Grid>
                <Grid item>
                  <Button 
                    target="_blank"
                    href={Resume} 
                    variant="outlined" color="secondary">
                    Resume
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="false">
          {/* End hero unit */}
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
                  <Typography variant="overline">
                    Overview:
                  </Typography>
                  <Typography>
                    This website is a simple React application built with the Gatsby.js framework
                    to house my projects and let people learn a little more about me. I haven't
                    had the time to add all my work yet, but overall it has been a great
                    experience and I've had a fun time exercising my creative side in the UI design.
                  </Typography>
                  <Typography variant="overline">
                    Experience Gained:
                  </Typography>
                  <Typography>
                    I've gained a lot of experience in React and realized that it's a super powerful tool in web development due
                    to its dynamic rendering and componenet re-usability. I'm exicited to continue iterating on the site, and have
                    grown fond of using frameworks like Google's Material-UI.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="large" 
                    color="primary">
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
                  <Typography variant="overline">
                    Overview:
                  </Typography>
                  <Typography gutterBottom>
                    A simple flight booking system built with Java and housed behind a Microsoft Azure database. The application
                    is solely meant as a play tool, and supports user account creation, fund deposit and withdrawl,
                    itinerary searching, and flight booking/cancellation. The application is fully supportive of concurrent 
                    transactions, and can be run on a localhost.
                  </Typography>
                  <Typography variant="overline">
                    Experience Gained:
                  </Typography>
                  <Typography>
                    This project provided me experience with deploying a database, writing complex SQL queries, and
                    designing database schemas in a manner that allowed for clean and efficient synchronization with
                    Java transactions. On top of that, I became much more experienced in writing unit tests, integration
                    tests, and tests that deal with concurrency issues.                
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    target="_blank" 
                    href="https://github.com/rdailey98/flight-booker" 
                    size="large" 
                    color="primary">
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
                  <Typography variant="overline">
                    Overview:
                  </Typography>
                  <Typography>
                    Xv6 is an operating system developed by MIT and is meant to serve as a
                    learning tool. It is largely skeleton code and has been left for the 
                    developer to fill out. After completing the project, I took Xv6 from a
                    non-functioning OS to one that supports a file system, system calls such as
                    exec, fork, read, write, and open, multi-processing capabilities, disk 
                    reads and writes, a crash safety boot mechanism, and per process priority tables.
                  </Typography>
                  <Typography variant="overline">
                    Experience Gained:
                  </Typography>
                  <Typography>
                    I gained substantial experience writing in C, along with hours on top of hours
                    of debugging practice. Writing a functioning OS requires careful thought
                    as you iterate and add new features due to the heavy reliance on existing pieces.
                    Out of any project I've ever worked on, this one required me to adhere to proper
                    engineering practices the most and really think before I wrote any lines of code.
                    It also gave me great experience working in a distributed and concurrent environment,
                    and forced me to take steps to prevent deadlocks, race conditions, and other issues
                    which come with any multi-processing system.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="large" 
                    color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <MadeWithLove />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}