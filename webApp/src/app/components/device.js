import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import firebase from 'firebase';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

const styles = {
    header: {
        fontSize: 18
    },
    container: {
        margin: "0 auto",
        padding: "10px",
        width: "90%"
    }
};
class Device extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            buttons: [],
        };
        this.setButton = this.setButton.bind(this);
        this.onButtonStateToggle = this.onButtonStateToggle.bind(this);
    }

    componentDidMount() {
        this.firebaseRef = firebase.database().ref('buttons');
        var setButton = this.setButton;
        this.firebaseRef.on('value', function (snapshot) {
            var items = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            setButton(items);
        });
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    setButton(buttons) {
        this.setState({ buttons: buttons });
    }

    onButtonStateToggle(param, event, status) {
        firebase.database().ref('buttons/' + param.key).update({
            IsOn: status,
            Name: param.Name,
            Type: param.Type
        });
    }

    render() {

        return (
            <Paper zDepth={1}>
                <List >
                    {this.state.buttons.map(function (item, i) {
                        return (
                            <ListItem key={i}
                                primaryText={ item.Name}
                                rightToggle={
                                    <Toggle onToggle={this.onButtonStateToggle.bind(null, item) } defaultToggled={item.IsOn}/>
                                }
                                leftIcon={<FontIcon className="material-icons">brightness_low</FontIcon>}
                                />
                        );
                    }, this) }
                </List >
            </Paper>
        );
    }
}

module.exports = Device;
