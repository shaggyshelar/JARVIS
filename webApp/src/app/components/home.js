import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div >
                <div className="col-md-6">
                    <h1>Home</h1>
                </div>
            </div>
        );
    }
}

module.exports = Home;