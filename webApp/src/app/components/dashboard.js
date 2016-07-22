import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardHeader} from 'material-ui/Card';
import Action from './action';
import Location from './location';
import Settings from './setting';

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
                            <Card style={styles.card}>
                                <CardHeader title="Featured Places"/>
                            </Card>
                            <Location />
                            <Card style={styles.card}>
                                <CardHeader title="Featured Devices"/>
                            </Card>
                        </div>
                    </Tab>
                    <Tab  icon={<FontIcon className="material-icons">star_border</FontIcon>}
                        label="Favorites">
                        <div>
                            <Card style={styles.card}>
                                <CardHeader title="Featured Actions"/>
                            </Card>
                            <Action />
                            <Card style={styles.card}>
                                <CardHeader title="Featured Places"/>
                            </Card>
                            <Location />
                        </div>
                    </Tab>
                    <Tab icon={<FontIcon className="material-icons">settings</FontIcon>}
                        label="Settings">
                        <Settings/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

module.exports = Dashboard;
