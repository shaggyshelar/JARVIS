import React from 'react';
import Actions from '../actions';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    onClick() {
        Actions.login({ email: this.state.email, password: this.state.password});
    }

    handleEmailChange(event) {
        //this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        //this.setState({ password: event.target.value });
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
                        onChange={this.handleEmailChange}
                        />
                </CardText>
                <CardText style={{
                    'textAlign': 'center'
                }}>
                    <TextField
                        hintText=""
                        floatingLabelText="Password"
                        type="password"
                        onChange={this.handlePasswordChange}
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
