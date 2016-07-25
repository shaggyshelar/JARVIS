import React, { Component, PropTypes } from 'react';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Slider from 'react-slick';
import firebase from 'firebase';
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
        let firebaseRef = firebase.database().ref('buttons');
        var setButton = this.setButton;
        firebaseRef.on('value', function (snapshot) {
            var items = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            setButton(items);
        });
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
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <div  style={styles.container}>
                    <Slider {...settings}>
                        <div><img src='../../assets/images/nature1.png' width="100%"/></div>
                        <div><img src='../../assets/images/nature1.png' width="100%"/></div>
                        <div><img src='../../assets/images/nature1.png' width="100%"/></div>
                        <div><img src='../../assets/images/nature1.png' width="100%" /></div>
                    </Slider>
                </div>
                {this.state.buttons.map(function (item, i) {
                    return (
                        <Card key={i}>
                            <CardText style={styles.cardText}>
                                <FontIcon className="material-icons col-xs-2 col-md-1">brightness_low</FontIcon> &nbsp; &nbsp;
                                <span style={styles.header}> {item.Name} {item.key}</span>
                                <span className="pull-right"><Toggle onToggle={this.onButtonStateToggle.bind(null, item) }  defaultToggled={item.IsOn}/> </span>
                            </CardText>
                        </Card>
                    );
                }, this) }
            </div>
        );
    }
}

module.exports = Device;
