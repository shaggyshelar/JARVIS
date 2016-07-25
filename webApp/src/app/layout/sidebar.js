import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import firebase from 'firebase';
import { zIndex} from 'material-ui/styles';

const styles = {
    app: {
        display: "none"
    }
};

class Sidebar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onRequestChange = this.onRequestChange.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.state = {
            open: false,
        };
    }

    onRequestChange(open) {
        if (open === false) {
            this.props.closeDrawer();
        }
    }

    onLogout() {
        this.props.closeDrawer();
        // firebase.auth().signOut().then(function () {
        //     browserHistory.replace('/login');
        // }, function (error) {
        //     // An error happened.
        // });
    }

    render() {
        return (
            <Drawer
                docked={this.props.docked}
                width={200}
                open={this.props.isOpen}
                onRequestChange={this.onRequestChange }
                containerStyle={{ zIndex: zIndex.drawer - 100 }}
                >
                <AppBar iconStyleLeft={styles.app} title={this.props.user != '' ? "User" : "Menu"}/>
                <MenuItem onTouchTap={this.props.closeDrawer}
                    leftIcon={<FontIcon className="material-icons">settings</FontIcon>} >
                    <Link to="/">Dashboard</Link>
                </MenuItem>
                <Divider />
                <Link to="/login"><MenuItem value="as" onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">pie_chart</FontIcon>}>Charts</MenuItem></Link>
                <Divider />
                <Link to="/actions"><MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">flash_on</FontIcon>} rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}>Actions</MenuItem></Link>
                <Divider />
                <Link to="/devices" ><MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">devices</FontIcon>} rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}>Devices</MenuItem></Link>
                <Divider />
                <Link to="/locations"><MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">location_on</FontIcon>} rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}>Locations</MenuItem></Link>
                <Divider />
                <Link to="/users"><MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">people</FontIcon>} rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}>Users</MenuItem></Link>
                <Divider />
                <Subheader>Quick Actions</Subheader>
                <Divider />
                <Link to="/addDevice"> <MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}>Add Device</MenuItem></Link>
                <Divider />
                <Link to="/addAction"><MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}>Add Action</MenuItem></Link>
                <Divider />
                <Link to="/addLocation"><MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}>Add Location</MenuItem></Link>
                <Divider />
                <Link to="/addUser"><MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}>Add User</MenuItem></Link>
                <Divider />
                <MenuItem onTouchTap={this.onLogout}>Logout</MenuItem>
            </Drawer>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('Email',state.user);
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
