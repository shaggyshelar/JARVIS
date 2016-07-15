import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon';
import Toggle from 'material-ui/Toggle';

const styles = {
    lightBulb: {
        width: "90%",
        display: "inline-block"
    },
    sliderStyle: {
        marginTop: 0,
        marginBottom: 0,
        marginRight: 7,
    },
    card: {
        marginTop: 20
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
                        <CardText>
                            <Toggle  label="Popcorn Time"/>
                        </CardText>
                    </Card>
                    <Card style={styles.card}>
                        <CardText>
                            <Toggle  defaultToggled={true} label="Good Night"/>
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

module.exports = Action;
