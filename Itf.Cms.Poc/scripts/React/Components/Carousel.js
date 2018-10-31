import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//ReactDOM.render(
//    <h1>Carousel</h1>,
//    document.getElementById('carousel')
//    );

class Carousel extends Component {
    render() {
        return (
            <div>Hello world - {this.props.worked}</div>
);
}
}

//var root = document.getElementById('carousel');
//ReactDOM.render(<Carousel worked = { window.myVar }/>, root)