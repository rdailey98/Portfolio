import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Surfing from '../assets/surfing.jpeg';
import Race from '../assets/race.jpeg';
import Skiing from '../assets/skiing.jpeg';
import 'typeface-roboto';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© 2019, Ryan Dailey "}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16),
    backgroundColor: theme.palette.background.secondary, 
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  photoSize: {
    height: 200,
    width: 200,
  },
}));


export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Button
            href="/"
            variant="contained" 
            color="primary">
            <ArrowBackIcon className={classes.leftIcon} />
            Back
          </Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.cardGrid} maxWidth="false">
        {/* End hero unit */}
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Race}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Skiing}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Surfing}
                />
              </Card>
            </Grid>
        </Grid>
      </Container>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" color="primary">About Me</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            I'm currently a senior at the University of Washington studying Computer Science.
            I grew up in Spokane, Washington, and love to spend time outdoors when I'm not stuck 
            on campus with a book in my nose. At home, I really enjoy cooking for myself. To me, the cooking process is
            a lot like the engineering process: it requires, creativity, execution, and the ability to adapt.
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography>
            After graduation, I hope to see myself in a role that allows me to reach a wide set of
            audiences. After two summers as an intern at HBO, I've grown fond of working on services which
            directly touch users. Even more so, I've learned that the logical and critical thinking which
            comes with backend development is an area that I excel in. Video streaming and geolocation based service
            work are two areas that I have substantial experience in. Nonetheless, I'm very familiar with React and
            find myself retreating to web development when I need to exercise some creativity.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" color="primary">Contact Info</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            dailey.ryan@outlook.com
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6" color="primary">Technical Proficiencies</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Programming languages & frameworks: Java, Javascript, HTML, C, C++, SQL, React, Node.js
          </Typography>
          <Typography>
            Databases: PostgreSQL, MySQL
          </Typography>
          <Typography>
            Servers: Azure, AWS, Apache
          </Typography>
          <Typography>
            Tools: Git, JIRA, Jenkins, Docker, JUnit, Kubernetes, Jasmine
          </Typography>
          <Typography>
            Methodologies: SAFe (Scaled Agile Framework), Scrum
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <footer className={classes.footer}>
        <MadeWithLove />
      </footer>
    </div>
  );
}






