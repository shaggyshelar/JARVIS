import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon';
import Toggle from 'material-ui/Toggle';

const styles = {
    lightBulb: {
        width: "85%",
        display: "inline-block"
    },
    sliderStyle: {
        marginTop: 0,
        marginBottom: 0,
        marginRight: 7,
    },
    card: {
        marginTop: 20
    },
    row: {
        marginRight: 0,
        marginLeft: 0,
    }
};

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstSlider: 1,
        };
    }

    render() {
        return (
            <div>
                <div  className="row" style={styles.row}>
                    <div className="col-md-6">
                        <Card style={styles.card}>
                            <CardHeader title="Lawn Lights Brightness"/>
                            <Divider />
                            <CardText>
                                <div>
                                    <FontIcon className="material-icons">lightbulb_outline</FontIcon>
                                    <Slider defaultValue={1} style={styles.lightBulb} sliderStyle={styles.sliderStyle}/>
                                    <FontIcon className="material-icons">lightbulb_outline</FontIcon>
                                </div>
                            </CardText>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card style={styles.card}>
                            <CardHeader title="Smart Frid Power"/>
                            <Divider />
                            <CardText>
                                <div>
                                    <FontIcon className="material-icons">hourglass_empty</FontIcon>
                                    <Slider defaultValue={0.5} style={styles.lightBulb} sliderStyle={styles.sliderStyle}/>
                                    <FontIcon className="material-icons">hourglass_full</FontIcon>
                                </div>
                            </CardText>
                        </Card>
                    </div>
                </div>
                <div  className="row" style={styles.row}>
                    <div className="col-md-6">
                        <Card style={styles.card}>
                            <CardHeader title="Temperature"/>
                            <Divider />
                            <CardText>
                                <div>
                                    <FontIcon className="material-icons">brightness_low</FontIcon>
                                    <Slider defaultValue={0} style={styles.lightBulb} sliderStyle={styles.sliderStyle}/>
                                    <FontIcon className="material-icons">brightness_high</FontIcon>
                                </div>
                            </CardText>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card style={styles.card}>
                            <CardText>
                                <Toggle label="Popcorn Time"/>
                            </CardText>
                        </Card>
                        <Card style={styles.card}>
                            <CardText>
                                <Toggle  defaultToggled={true} label="Good Night"/>
                            </CardText>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Action;
