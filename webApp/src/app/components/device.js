import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Slider from 'react-slick';
const styles = {
    card: {
        marginTop: 20,
    },
    cardText: {
        padding: 4
    },
    header: {
        fontSize: 18
    },
    container: {
        margin: "0 auto",
        padding :"10px",
        width: "90%"
    }
};
class Device extends React.Component {
    render() {
        var settings = {
            dots: true
        };

        return (
            <div>
                <div  style={styles.container}>
                    <Slider  {...settings}>
                        <div><img src='http://lorempixel.com/600/337/nature/' /></div>
                        <div><img src='http://lorempixel.com/600/337/nature/' /></div>
                        <div><img src='http://lorempixel.com/600/337/nature/' /></div>
                        <div><img src='http://lorempixel.com/600/337/nature/' /></div>
                    </Slider>
                </div>
                <Card>
                    <CardText style={styles.cardText}>
                        <p>
                            <FontIcon className="material-icons">star</FontIcon> &nbsp; &nbsp;
                            <span style={styles.header}>Thermostat</span>
                            <span className="pull-right">Away &nbsp; &nbsp; </span>
                        </p>
                    </CardText>
                </Card>
                <Card>
                    <CardText style={styles.cardText}>
                        <p>
                            <FontIcon className="material-icons">kitchen</FontIcon> &nbsp; &nbsp;
                            <span style={styles.header}>Coffee Machine</span>
                            <span className="pull-right">Finished &nbsp; &nbsp; </span>
                        </p>
                    </CardText>
                </Card>
                <Card >
                    <CardText style={styles.cardText}>
                        <p>
                            <FontIcon className="material-icons">share</FontIcon> &nbsp; &nbsp;
                            <span style={styles.header}>House Security</span>
                            <span className="pull-right">Unarmerd &nbsp; &nbsp; </span>
                        </p>
                    </CardText>
                </Card>
                <Card>
                    <CardText style={styles.cardText}>
                        <p>
                            <FontIcon className="material-icons">whatshot</FontIcon> &nbsp; &nbsp;
                            <span style={styles.header}>Fan</span>
                            <span className="pull-right">Working &nbsp; &nbsp; </span>
                        </p>
                    </CardText>
                </Card>

            </div>
        );
    }
}

module.exports = Device;
