import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';
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
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                    >
                    <Tab
                        icon={<FontIcon className="material-icons">home</FontIcon>}
                        label="Home"
                        value={0} />
                    <Tab
                        icon={<FontIcon className="material-icons">star_border</FontIcon>}
                        label="Favorites"
                        value={1} />
                    <Tab
                        icon={<FontIcon className="material-icons">settings</FontIcon>}
                        label="Favorites"
                        value={2} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                    >
                    <div>
                    <div >
                        <Home/>
                    </div>
                    </div>
                    <div style={styles.slide}>
                        slide n°2
                    </div>
                    <div style={styles.slide}>
                        slide n°3
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}

module.exports = Dashboard;
