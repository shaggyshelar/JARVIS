import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import firebase from 'firebase';

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
                docked={false}
                width={200}
                open={this.props.isOpen}
                onRequestChange={this.onRequestChange }
                >
                <AppBar iconStyleLeft={styles.app} title="Menu"/>
                <MenuItem onTouchTap={this.props.closeDrawer}
                    leftIcon={<FontIcon className="material-icons">settings</FontIcon>} >
                    <Link to="/">Dashboard</Link>
                </MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">pie_chart</FontIcon>}><Link to="/login">Charts</Link></MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">flash_on</FontIcon>} rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>} ><Link to="/actions">Actions</Link></MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">devices</FontIcon>} rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}><Link to="/devices">Devices</Link></MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">location_on</FontIcon>} rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}><Link to="/locations">Locations</Link></MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">people</FontIcon>} rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}><Link to="/users">Users</Link></MenuItem>
                <Divider />
                <Subheader>Quick Actions</Subheader>
                <Divider />
                <MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}><Link to="/addDevice">Add Device</Link></MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}><Link to="/addAction">Add Action</Link></MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}><Link to="/addLocation">Add Location</Link></MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.props.closeDrawer} leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}><Link to="/addUser">Add User</Link></MenuItem>
                <Divider />
                <MenuItem onTouchTap={this.onLogout}>Logout</MenuItem>
            </Drawer>
        );
    }
}

module.exports = Sidebar;
