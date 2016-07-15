import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    subHeader: {
        backgroundColor: "whitesmoke",
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
}

class AddLocation extends React.Component {
    render() {

        return (
            <div>
                <TextField hintText="Name" style={styles.userPage} underlineShow={false} />
                <Divider />
                <TextField hintText="Icon" style={styles.userPage} underlineShow={false} />
                <Divider />
                <TextField hintText="Note" style={styles.userPage} underlineShow={false} />
                <Divider />
                <div style={styles.userPage}>
                    <Toggle style={styles.customMargin}
                        label="Featured"                      
                        />
                </div>
                <Divider />
                <div style={styles.userPage}>
                    <div style={styles.customMargin}>
                        <RaisedButton label="Add Location"  backgroundColor="#66CC33" />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = AddLocation;
