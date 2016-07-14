import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

class Sidebar extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    handleClose() {
        this.setState({ open: false })
    }

    render() {
        return (
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({ open }) }
                >
                <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
            </Drawer>
        );
    }
}

module.exports = Sidebar;
