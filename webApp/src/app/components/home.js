import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    block: {
      // marginRight: 0
    }
};
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div className="row" style={styles.block}>
                <div className="col-md-6">
                    <Card>
                        <CardHeader title="Lawn Lights Brightness" />
                        <CardText>
                         
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

module.exports = Home;