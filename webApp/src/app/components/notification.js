import React from 'react';
import {
    Step,
    Stepper,
    StepButton,
    StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import firebase from 'firebase';
import FontIcon from 'material-ui/FontIcon';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    avatar: {
        width: '100%',
        marginLeft: '-10px'
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepIndex: 0,
            notifications: undefined,
        };
        this.setNotifications = this.setNotifications.bind(this);
        this.renderNotifications = this.renderNotifications.bind(this);
        this.renderLoading = this.renderLoading.bind(this);
    }

    componentDidMount() {
        this.firebaseRef = firebase.database().ref('notifications');
        var setNotifications = this.setNotifications;
        this.firebaseRef.on('value', function (snapshot) {
            var items = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            setNotifications(items);
        });
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    setNotifications(notifications) {
        this.setState({ notifications: notifications });
    }

    renderLoading() {
        if (this.state.notifications === undefined) {
            return (
                <CircularProgress style={styles.loader}/>
            );
        }
    }

    renderNotifications() {
        if (this.state.notifications !== undefined && this.state.notifications.length > 0) {
            const {stepIndex} = this.state;
            return (
                <Stepper
                    activeStep={stepIndex}
                    linear={false}
                    orientation="vertical"
                    >
                    { this.state.notifications.map(function (item, i) {
                            return (
                                <Step key={i}>
                                    <StepButton onTouchTap={() => this.setState({ stepIndex: i }) }>
                                        <Avatar src="../../assets/images/userImage.png" /> &nbsp; &nbsp; {item.Title}
                                    </StepButton>
                                    <StepContent>
                                        <p>
                                            {item.Footer}
                                        </p>
                                    </StepContent>
                                </Step>
                            );
                        }, this)
                    }
                </Stepper>
            );
        }
    }


    render() {
        return (
            <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
                { this.renderLoading() }
                { this.renderNotifications() }
            </div>
        );
    }
}

module.exports = Notification;
