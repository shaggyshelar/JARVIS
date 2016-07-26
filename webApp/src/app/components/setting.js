import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Actions from '../actions';
import {onSubscribtionChange} from '../actions/firebaseActions';
import Paper from 'material-ui/Paper';

const styles = {
    card: {
        marginTop: 10,
        backgroundColor: "#D9E4E4",
    },
};

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onLocationToggle = this.onLocationToggle.bind(this);
    }

    onLocationToggle(event, status) {
        this.props.onSubscribtionChange(status);
    }

    onNotificationToggle(event, status) {
        Actions.subscribe();
        // propelClient.subscribe();
        // if(status){
        //     propelClient.subscribe();
        // }else{
        //     propelClient.unsubscribe();
        // }       
    }
    render() {
        return (
              <Paper >
                <List>
                    <Subheader>General Setings</Subheader>
                    <Divider />
                    <ListItem primaryText="Notifications" rightToggle={
                        <Toggle onToggle={this.onNotificationToggle} defaultToggled={this.props.isSubscribed}/>
                    } />
                    <Divider />
                    <ListItem primaryText="Location Services" rightToggle={<Toggle onToggle={this.onLocationToggle}/>} />
                    <Divider />
                    <ListItem primaryText="Use Google Maps" rightToggle={<Toggle />} />
                    <Divider />
                    <TextField
                        hintText="Google Maps API key"
                        fullWidth={true}
                        />
                    <Divider />
                    <Subheader>General Setings</Subheader>
                    <Divider />
                    <ListItem primaryText="XML" leftCheckbox={<Checkbox />} />
                    <Divider />
                    <ListItem primaryText="JSON" leftCheckbox={<Checkbox />} />
                    <Divider />
                    <SelectField floatingLabelText="Web API">
                        <MenuItem value={1} primaryText="REST" />
                        <MenuItem value={2} primaryText="SOAP" />
                    </SelectField>
                    <Divider />
                    <Subheader>Notification Setings</Subheader>
                    <Divider />
                    <ListItem primaryText="Urgent Alerts" leftCheckbox={<Checkbox />} />
                    <Divider />
                    <ListItem primaryText="Device Notifications" leftCheckbox={<Checkbox />} />
                    <Divider />
                    <ListItem primaryText="Users Notifications" leftCheckbox={<Checkbox />} />
                    <Divider />
                    <ListItem primaryText="Device Not Responding" leftCheckbox={<Checkbox />} />
                    <Divider />
                    <ListItem primaryText="Connection Lost" leftCheckbox={<Checkbox />} />
                    <Divider />
                </List>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSubscribed: state.isSubscribed
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubscribtionChange: (status) => {
            dispatch(onSubscribtionChange(status));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);