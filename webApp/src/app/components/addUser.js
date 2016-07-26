import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class AddUser extends React.Component {
    render() {

        const styles = {
            subHeader: {
                fontSize: "16px",
                fontWeight: "bold"
            },
            userPage: {
                paddingLeft: 14,
                paddingRight: 14
            },
            customMargin: {
                marginTop: "15px",
                marginBottom: "15px"
            },
        };

        return (
             <Paper zDepth={1} >
                <Subheader style={styles.subHeader}>User Info</Subheader>
                <Divider />
                <Paper zDepth={2} >
                    <TextField hintText="Username" style={styles.userPage} underlineShow={false} />
                    <Divider />
                    <TextField hintText="Email" style={styles.userPage} underlineShow={false} />
                    <Divider />
                    <TextField hintText="Image" style={styles.userPage} underlineShow={false} />
                    <Divider />
                </Paper>
                <Divider />
                <Subheader style={styles.subHeader}>Tracking</Subheader>
                <Divider />
                <div style={styles.userPage}>
                    <div style={styles.customMargin}>
                        <Toggle
                            label="Show Location"
                            defaultToggled={true}
                            />
                    </div>
                </div>
                <Divider />
                <div style={styles.userPage}>
                    <div style={styles.customMargin}>
                        <RaisedButton label="Add User"  backgroundColor="#66CC33" />
                    </div>
                </div>
            </Paper>
        );
    }
}

module.exports = AddUser;
