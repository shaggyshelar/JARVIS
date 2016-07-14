import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
    card: {
        marginTop: 20,
    },
    cardText:{
        padding: 4
    },
    header:{
        fontSize: 18
    }
        
};
class Location extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-6">
                    <Card style={styles.card}>
                        <CardText style={styles.cardText}>
                            <p>
                                <FontIcon className="material-icons">kitchen</FontIcon> &nbsp;&nbsp;
                                <span style={styles.header}>Kitchen</span>
                                <span className="pull-right">For Mum &nbsp;&nbsp;</span>
                            </p>
                        </CardText>
                    </Card>
                </div>
                <div className="col-md-6">
                     <Card style={styles.card}>
                        <CardText style={styles.cardText}>
                            <p>
                                <FontIcon className="material-icons">add_location</FontIcon> &nbsp;&nbsp;
                                <span style={styles.header}>WC</span>
                                <span className="pull-right">Occupied &nbsp;&nbsp;</span>
                            </p>
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

module.exports = Location;



