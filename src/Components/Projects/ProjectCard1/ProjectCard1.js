import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ProjectImg from '../../../images/Project2.jpeg';

import './ProjectCard1.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function ProjectCard1() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={ProjectImg}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              Car Repair
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">

                <ul className="uiLi">
                    <li>Individual Admin Panel and User Panel.</li>
                    <li>Firebase sign-up and the custom sign-up form are available.</li>
                    <li>Users can order any services and buy products and see their all order list and their order current status.</li>
                    <li>Admin can see users order's detailed information and they have access to cancel, accept, or pending the order status.</li>
                    <li>Technologies are used here: ReactJs, Firebase, MongoDB, NodeJs, Javascript, bootstrap.</li>
                </ul>

            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="p-3">
          <Button size="small" color="primary">
            ReactJs
          </Button>
          <Button size="small" color="primary">
            MONGODB
          </Button>
          <Button size="small" color="primary">
            FIREBASE
          </Button>
          <Button size="small" color="primary">
            NODEJS
          </Button>
        </CardActions>
      </Card>
    );
  }