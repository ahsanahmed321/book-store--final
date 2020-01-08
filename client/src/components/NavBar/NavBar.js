import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BookWorms.com
          </Typography>

          <Button><Link style = {{color:'white'}} to='/addSchool'>Add School</Link></Button>
          <Button color="inherit"><Link to='/'>Home</Link></Button>
          <Button color="inherit"><Link to='/Schools'>Schools</Link></Button>
          <Button color="inherit"><Link to='/Cart'>Cart</Link></Button>
          <Button color="inherit"><Link to='/Login'>Login/Signup</Link></Button>
          <Button color="inherit"><Link to='/AboutUs'>About Us</Link></Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}