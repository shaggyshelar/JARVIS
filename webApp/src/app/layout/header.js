import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Header extends React.Component {
    render() {
        return (
            <AppBar style={this.props.style}
                title="Smart Home"
                onLeftIconButtonTouchTap={this.props.openDrawer}
                iconElementRight={
                    <div>
                        <IconButton tooltip="Alerts">
                            <Link to="/notification"><FontIcon color="white" className="material-icons">add_alert</FontIcon></Link>
                        </IconButton>
                        <IconMenu
                            iconButtonElement={
                                <IconButton><MoreVertIcon  color="white"/></IconButton>
                            }
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                            <MenuItem primaryText="Dark Theme" onTouchTap={this.props.changeTheme.bind(null,"darkTheme")}/>
                            <MenuItem primaryText="Light Theme" onTouchTap={this.props.changeTheme.bind(null,"lightTheme")}/>
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                    </div>
                }
                showMenuIconButton={this.props.showMenuIconButton}
                />
        );
    }
}

module.exports = Header;
