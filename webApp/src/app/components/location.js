import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import Slider from 'react-slick';
import Paper from 'material-ui/Paper';

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
    row: {
        marginRight: 0,
        marginLeft: 0,
    },
    container: {
        margin: "0 auto",
        padding: "10px",
        width: "90%"
    }
};
class Location extends React.Component {
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
                <div style={styles.container}>
                    <Slider {...settings}>
                        <div><img src='../../assets/images/nature1.png' width="100%"/></div>
                        <div><img src='../../assets/images/nature1.png' width="100%"/></div>
                        <div><img src='../../assets/images/nature1.png' width="100%"/></div>
                        <div><img src='../../assets/images/nature1.png' width="100%" /></div>
                    </Slider>
                </div>
                <Paper>
                    <div className="row" style={styles.row}>
                        <div className="col-md-6">
                            <Card style={styles.card}>
                                <CardText style={styles.cardText}>
                                    <p>
                                        <FontIcon className="material-icons">kitchen</FontIcon> &nbsp; &nbsp;
                                        <span style={styles.header}>Kitchen</span>
                                        <span className="pull-right">For Mum &nbsp; &nbsp; </span>
                                    </p>
                                </CardText>
                            </Card>
                        </div>
                        <div className="col-md-6">
                            <Card style={styles.card}>
                                <CardText style={styles.cardText}>
                                    <p>
                                        <FontIcon className="material-icons">add_location</FontIcon> &nbsp; &nbsp;
                                        <span style={styles.header}>WC</span>
                                        <span className="pull-right">Occupied &nbsp; &nbsp; </span>
                                    </p>
                                </CardText>
                            </Card>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

module.exports = Location;



