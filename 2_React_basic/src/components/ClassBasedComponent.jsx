import { Component } from "react";

class ClassBasedComponent extends Component {

    //define state
    state = {
        showText: false,
    }
    // OR
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showText: false,
    //     }
    // }
    // if you want to use normal function instead of arrow function then you have to bind the function in constructor like this
    // this.toggleText = this.toggleText.bind(this);
    // otherwise you can use arrow function which will automatically bind the function to the class

    handleClick = () => {
        this.setState((prevState) => ({
            showText: !prevState.showText
        }));
    }
    render(){
        return (
            <div>   
                <h2>Class-Based Component</h2>
                <button onClick={this.handleClick}>
                    {this.state.showText ? "Hide" : "Show"} Text
                </button>
                {this.state.showText && <p>This text is conditionally displayed.</p>}
            </div>
        )
    }
}

export default ClassBasedComponent;