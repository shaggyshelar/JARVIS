import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import firebase from 'firebase';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    header: {
        fontSize: 18
    },
    container: {
        margin: "0 auto",
        padding: "10px",
        width: "90%"
    },
    loader: {
        marginLeft: "40%"
    }
};
class Room extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            rooms: [],
        };
        this.setButton = this.setButton.bind(this);
    }

    componentDidMount() {
        this.firebaseRef = firebase.database().ref('rooms');
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

    setButton(rooms) {
        this.setState({ rooms: rooms });
    }

    render() {

        return (
            <Paper zDepth={1}>
                <List >
                    {this.state.rooms.length === 0 ? <CircularProgress style={styles.loader}/> : <div></div>}
                    {this.state.rooms.map(function (item, i) {
                        return (
                            <ListItem key={i}
                                primaryText={item.Name}
                                leftIcon={<FontIcon className="material-icons">brightness_low</FontIcon>}
                                />
                        );
                    }, this) }
                </List >
            </Paper>
        );
    }
}

module.exports = Room;
