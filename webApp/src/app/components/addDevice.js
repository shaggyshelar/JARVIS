import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const styles = {
    addDevicePage: {
        paddingLeft: 14,
        paddingRight: 14
    },
    subHeader: {
        fontSize: "16px",
        fontWeight: "bold"
    },
    customWidth: {
        width: "95%"
    },
    customMargin: {
        marginTop: "23px"
    },
    toggle: {
        marginBottom: 16,
    }
}
class AddDevice extends React.Component {
    render() {
        return (
           <Paper  zDepth={1}>
                <Subheader style={styles.subHeader}>Device Info</Subheader>
                <Divider />
                <div style={styles.addDevicePage}>
                    <div>Name</div>
                    <TextField
                        hintText="Name" underlineShow={false}
                        /><br />
                </div>
                <Divider />
                <div style={styles.addDevicePage}>
                    <div>Icon</div>
                    <TextField
                        hintText="Icon" underlineShow={false}
                        /><br />
                </div>
                <Divider />
                <Subheader style={styles.subHeader}>Admin</Subheader>
                <Divider />
                <div className="row" style={styles.addDevicePage}>
                    <div className="col-xs-6" style={styles.customMargin}>
                        <label>Select a User</label>
                    </div>
                    <div className="col-xs-6">
                        <SelectField  style={styles.customWidth}>
                            <MenuItem value={1} primaryText="Admin" />
                            <MenuItem value={2} primaryText="Stacy S" />
                            <MenuItem value={3} primaryText="Mom" />
                        </SelectField>
                    </div>
                </div>
                <span></span>
                <Divider />
                <Subheader style={styles.subHeader}>Location</Subheader>
                <Divider />
                <div className="row" style={styles.addDevicePage}>
                    <div className="col-xs-6" style={styles.customMargin}>
                        <label>Select a Location</label>
                    </div>
                    <div className="col-xs-6">
                        <SelectField  style={styles.customWidth}>
                            <MenuItem value={1} primaryText="Kitchen" />
                            <MenuItem value={2} primaryText="WC" />
                        </SelectField>
                    </div>
                </div>
                <span></span>
                <Divider />
                <Subheader style={styles.subHeader}>Select Action</Subheader>
                <Divider />
                <div className="row" style={styles.addDevicePage}>
                    <div className="col-xs-6" style={styles.customMargin}>
                        <label>Select a Action</label>
                    </div>
                    <div className="col-xs-6">
                        <SelectField  style={styles.customWidth}>
                            <MenuItem value={1} primaryText="Lawn Lights Brightness" />
                            <MenuItem value={2} primaryText="Smart Grid Power" />
                            <MenuItem value={2} primaryText="Temperature" />
                            <MenuItem value={2} primaryText="Popcorn Time" />
                            <MenuItem value={2} primaryText="Good Night" />
                            <MenuItem value={2} primaryText="Open Garage Doors" />
                            <MenuItem value={2} primaryText="Arm Securuty" />
                        </SelectField>
                    </div>
                </div>
                <span></span>
                <Divider />
                <Subheader style={styles.subHeader}>Featured</Subheader>
                <Divider />
                <div style={styles.addDevicePage}>
                    <div style={styles.customMargin}>
                        <Toggle
                            label="Featured"
                            defaultToggled={true}
                            style={styles.toggle}
                            />
                    </div>
                </div>
                <Divider />
                <div style={styles.addDevicePage}>
                    <div style={styles.customMargin}>
                        <RaisedButton label="Add Device"  backgroundColor="#66CC33" />
                    </div>
                </div>
            </Paper>
        );
    }
}

module.exports = AddDevice;
