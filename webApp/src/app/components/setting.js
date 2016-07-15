import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    card: {
        marginTop: 10,
        backgroundColor: "#D9E4E4",
    }
};

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div >
                <List>
                    <Subheader>General Setings</Subheader>
                    <Divider />
                    <ListItem primaryText="Notifications" rightToggle={<Toggle />} />
                    <Divider />
                    <ListItem primaryText="Location Services" rightToggle={<Toggle />} />
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

            </div>
        );
    }
}

module.exports = Settings;