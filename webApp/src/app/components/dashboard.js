import React from 'react';

class Dashboard extends React.Component {

    onClick() {
        //Actions.login(this.context.router);
        alert('clicked');
    }

    render() {

        return (
            <div>
            Dashboard Page!!
            </div>
        );
    }
}

module.exports = Dashboard;
