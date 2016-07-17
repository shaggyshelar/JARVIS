import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';
import {List} from 'material-ui/List';
import {Card, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends React.Component {

    onClick() {
        Actions.login(this.context.router);
    }

    render() {

        return (
            <Card style={{
                'maxWidth': '800px',
                'margin': '30px auto',
                'padding': '50px'
            }}>
                <CardText style={{
                    'textAlign': 'center'
                }}>
                    <TextField
                        hintText=""
                        floatingLabelText="Email"
                        />
                </CardText>
                <CardText style={{
                    'textAlign': 'center'
                }}>
                    <TextField
                        hintText=""
                        floatingLabelText="Password"
                        />
                </CardText>

                <RaisedButton style={{
                    display: 'block',
                }} onClick={this.onClick.bind(this) }
                    label="Log in" primary={true} />
            </Card>

        );
    }
}


module.exports = Login;
