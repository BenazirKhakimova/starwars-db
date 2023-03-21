import React, { PureComponent } from "react";
//import { Test } from './ErrorButton.styles';

class ErrorButton extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    componentWillMount = () => {
        console.log("ErrorButton will mount");
    };

    render() {
        if (this.state.hasError) {
            this.foo.bar = 0;
        }
        return (
            <dutton
                className="btn btn-danger btn-lg"
                onClick={() => this.setState({ hasError: true })}
            >
                Error btn
            </dutton>
        );
    }
}

ErrorButton.propTypes = {
    // bla: PropTypes.string,
};

ErrorButton.defaultProps = {
    // bla: 'test',
};

export default ErrorButton;
