import React from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

const styles = {
    card: {
        marginTop: 20,
    },
    cardText: {
        padding: 4
    },
    header: {
        fontSize: 18
    }

};

class User extends React.Component {
    render() {

        return (
            <div>
                <div className="col-xs-12">
                    <Card style={styles.card}>
                        <CardHeader   title="Admin" subtitle="Online" avatar="../../assets/images/nature1.png">
                        </CardHeader>
                        <CardMedia>
                            <img src="../../assets/images/nature1.png" />
                        </CardMedia>
                        <CardActions>
                            <Toggle
                                label="User Enabled"
                                defaultToggled={true}
                                />
                        </CardActions>
                    </Card>
                </div>
                <div className="col-xs-12">
                    <Card style={styles.card}>
                        <CardHeader   title="Stacy S" subtitle="Last Login :01/09/2014" avatar="../../assets/images/nature1.png">
                        </CardHeader>
                        <CardMedia>
                            <img src="../../assets/images/nature1.png" />
                        </CardMedia>
                        <CardActions>
                            <Toggle
                                label="User Enabled"
                                defaultToggled={true}
                                />
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

module.exports = User;
