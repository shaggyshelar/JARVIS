import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import firebase from 'firebase';
import {zIndex} from 'material-ui/styles';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import {Card, CardHeader} from 'material-ui/Card';

const styles = {
    app: {
        display: "none"
    },
    card: {
        backgroundColor: 'rgb(0, 151, 167)'
    },
    cardHeader: {
        paddingRight: '1px'
    }
};

let SelectableList = MakeSelectable(List);

class Sidebar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onRequestChange = this.onRequestChange.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.state = {
            open: false,
            selectedMenu: 'dashboard'
        };
        this.onChangeList = this.onChangeList.bind(this);
    }

    onChangeList(event, index) {
        this.setState({
            selectedMenu: index
        });
        this.props.closeDrawer();
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
                <Card style={styles.card}>
                    <CardHeader textStyle={styles.cardHeader}
                        title="Salauddin"
                        subtitle="sal@gmail.com"
                        avatar="../../assets/images/nature1.png" />
                </Card>
                <SelectableList value={this.state.selectedMenu}
                    onChange={this.onChangeList}>
                    <ListItem
                        containerElement={<Link to="/dashboard"/>}
                        leftIcon={<FontIcon className="material-icons">settings</FontIcon>}
                        primaryText="Dashboard"
                        value="dashboard"
                        > </ListItem>
                    <Divider />
                    <ListItem
                        containerElement={<Link to="/login" />}
                        leftIcon={<FontIcon className="material-icons">pie_chart</FontIcon>}
                        primaryText="Charts"
                        value="login"
                        > </ListItem>
                    <Divider />
                    <ListItem
                        containerElement={<Link to="/actions" />}
                        leftIcon={<FontIcon className="material-icons">location_on</FontIcon>}
                        rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}
                        primaryText="Actions"
                        value="actions"> </ListItem>
                    <Divider />
                    <ListItem
                        containerElement={<Link to="/devices" />}
                        leftIcon={<FontIcon className="material-icons">devices</FontIcon>}
                        rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}
                        primaryText="Devices"
                        value="devices"> </ListItem>
                    <Divider />
                    <ListItem
                        containerElement={<Link to="/locations" />}
                        leftIcon={<FontIcon className="material-icons">add_alert</FontIcon>}
                        rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}
                        primaryText="Locations"
                        value="locations"> </ListItem>
                    <Divider />
                    <ListItem
                        containerElement={<Link to="/users" />}
                        leftIcon={<FontIcon className="material-icons">people</FontIcon>}
                        rightIcon={<FontIcon className="material-icons">add_alert</FontIcon>}
                        primaryText="Users"
                        value="users"> </ListItem>
                    <Divider />
                    <Subheader>Quick Actions</Subheader>
                    <Divider />
                    <ListItem
                        containerElement={<Link to="/addDevice" />}
                        leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}
                        primaryText="Add Device"
                        value="addDevice"> </ListItem>
                    <Divider />
                    <ListItem
                        containerElement={<Link to="/addAction" />}
                        leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}
                        primaryText="Add Action"
                        value="addAction"> </ListItem>
                    <Divider />
                    <ListItem
                        containerElement={<Link to="/addLocation" />}
                        leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}
                        primaryText="Add Location"
                        value="addLocation"> </ListItem>
                    <Divider />
                    <ListItem
                        containerElement={<Link to="/addUser" />}
                        leftIcon={<FontIcon className="material-icons">note_add</FontIcon>}
                        primaryText="Add User"
                        value="addUser"> </ListItem>
                    <Divider />
                </SelectableList>
                <MenuItem onTouchTap={this.onLogout}>Logout</MenuItem>
            </Drawer>
        );
    }
}

const mapStateToProps = (state) => {
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
