import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router';

class Sidebar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onRequestChange = this.onRequestChange.bind(this);
        this.state = {
            open: false,
        };
    }

    onRequestChange(open) {
        if (open === false) {
            this.props.closeDrawer();
        }
    }

    render() {
        return (
            <Drawer
                docked={false}
                width={200}
                open={this.props.isOpen}
                onRequestChange={this.onRequestChange }
                >
                <MenuItem onTouchTap={this.props.closeDrawer}><Link to="/dashboard">Dashboard</Link></MenuItem>
                <MenuItem onTouchTap={this.props.closeDrawer}><Link to="/login">Charts</Link></MenuItem>
                <MenuItem onTouchTap={this.props.closeDrawer}>Actions</MenuItem>
                <MenuItem onTouchTap={this.props.closeDrawer}>Devices</MenuItem>
                <MenuItem onTouchTap={this.props.closeDrawer}>Locations</MenuItem>
                <MenuItem onTouchTap={this.props.closeDrawer}>Users</MenuItem>
                <MenuItem onTouchTap={this.props.closeDrawer}>Add Device</MenuItem>
                <MenuItem onTouchTap={this.props.closeDrawer}>Add Action</MenuItem>
                <MenuItem onTouchTap={this.props.closeDrawer}>Add Location</MenuItem>
                <MenuItem onTouchTap={this.props.closeDrawer}>Add User</MenuItem>
                <MenuItem onTouchTap={this.props.closeDrawer}>Logout</MenuItem>
            </Drawer>
        );
    }
}

module.exports = Sidebar;
