import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const styles = {
    avatar: {
        width:'100%',
        marginLeft: '-10px'
    },
};

class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepIndex: 0,
        };
    }
    render() {
    const {stepIndex} = this.state;
    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
             <Avatar src="../../assets/images/userImage.png" /> &nbsp;&nbsp; 1st July
            </StepButton>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
            </StepContent>
          </Step>
          <Step>
            <StepButton  onTouchTap={() => this.setState({stepIndex: 1})}>
             <Avatar src="../../assets/images/jarvis72.png" /> &nbsp;&nbsp;2nd July
            </StepButton>
            <StepContent >
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
            </StepContent>
          </Step>
          <Step>
            <StepButton  onTouchTap={() => this.setState({stepIndex: 2})}>
              <Avatar src="../../assets/images/userImage.png" /> &nbsp;&nbsp; 3rd July
            </StepButton>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 3})}>
              <Avatar src="../../assets/images/jarvis72.png" /> &nbsp;&nbsp; 4th July
            </StepButton>
            <StepContent >
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 4})}>
              <Avatar src="../../assets/images/userImage.png" /> &nbsp;&nbsp; 5th July
            </StepButton>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 5})}>
              <Avatar src="../../assets/images/jarvis72.png" /> &nbsp;&nbsp; 6th July
            </StepButton>
            <StepContent >
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={() => this.setState({stepIndex: 6})}>
              <Avatar src="../../assets/images/userImage.png" /> &nbsp;&nbsp; 7th July
            </StepButton>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

module.exports = TimeLine;
