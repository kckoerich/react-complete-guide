import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render(){

        let value;

        if(this.state.hasError){
            value = <h1>Something went wrong</h1>
        }else{
            value = this.props.children;
        }

        return value;
    }

}

export default ErrorBoundary