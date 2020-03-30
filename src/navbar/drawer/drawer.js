import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Link, NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Work, Kitchen, AttachMoney, ThumbUp, Info, Home, Contacts} from '@material-ui/icons';
// import KitchenIcon

const useStyles = makeStyles({
  list: {
    width: '50vw',
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
    'margin-top': '10vh'
  }
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: true
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
  const icons ={
    Jobs: <Work/>,
    Food: <Kitchen/>,
    Financial: <AttachMoney/>,
    'Requests - Offers': <ThumbUp/>,
    Unemployment: <Info/>,
  }
  const list = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <ListItem button>
            <ListItemIcon><Home/></ListItemIcon>
            <Link to="/">Home</Link>
    </ListItem>
        {Object.keys(icons).map((text, index) => (
          <ListItem onClick={props.toggleDrawer}  button key={text}>
            <ListItemIcon>{icons[text]}</ListItemIcon>
            <Link to={text}>{text}</Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Contact'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><Contacts/></ListItemIcon>
            <a href="mailto:elbadry.d@gmail.com">Contact</a>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div >
          <Drawer  open={props.open}
            ModalProps={{ onBackdropClick: props.toggleDrawer }}
          >
            {list('left')}

          </Drawer>

    </div>
  );
}