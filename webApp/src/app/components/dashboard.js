import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Action from './action';
import Location from './location';
import Home from './home';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
    card: {
        marginTop: 10,
        backgroundColor: "#D9E4E4",
    }
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
            slideIndex: value,
        });
    }

    render() {
        return (
            <div>
                <Tabs>
                    <Tab icon={<FontIcon className="material-icons">home</FontIcon>}
                        label="Home">
                        <div>
                        <Card style={styles.card}>
                            <CardHeader title="Featured Actions"/>
                        </Card>
                        <Action />
                       
                        </div>
                    </Tab>
                    <Tab  icon={<FontIcon className="material-icons">star_border</FontIcon>}
                        label="Favorites">
                         slide n°2
                    </Tab>
                    <Tab icon={<FontIcon className="material-icons">settings</FontIcon>}
                        label="Settings">
                        slide n°3
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

module.exports = Dashboard;
