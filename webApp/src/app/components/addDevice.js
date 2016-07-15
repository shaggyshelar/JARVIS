import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const styles = {
    addDevicePage: {
        padding: 14
    }
}
class AddDevice extends React.Component {
    render() {
        return (
            <div style={styles.addDevicePage}>
                 <Divider />
                <Subheader>Device Info</Subheader>
                <Divider />
                <TextField
                    floatingLabelText="Name"
                    /><br />
                <Divider />
                <TextField
                    floatingLabelText="Icon"
                    /><br />
                <Divider />
            </div>
        );
    }
}

module.exports = AddDevice;
