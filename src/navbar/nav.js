import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TemporaryDrawer from './drawer/drawer';
import './nav.css'

class ButtonAppBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            drawerOpen: false
        }
        this.openDrawer = this.openDrawer.bind(this);
    }
    openDrawer(){
      this.setState({drawerOpen: !this.state.drawerOpen})
    }
    render() {
      return (
        <div className="root">
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={this.openDrawer} edge="start" className="menu-button" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className="title">
                NOAID
              </Typography>
            </Toolbar>
          </AppBar>
        <TemporaryDrawer   
        open={this.state.drawerOpen}
        toggleDrawer={this.openDrawer}
        />
        </div>
      );
  }
}
export default ButtonAppBar