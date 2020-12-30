import React from 'react';
import ReactDom from 'react-dom';
import img from './images/sample.webp';
import './styles.scss';

const App: React.FC = () => {
    return (
        <div>
            <h1>  works from linux </h1>
            <img src={img} />
        </div>
    );
};

ReactDom.render(<App />, document.getElementById('root'));
