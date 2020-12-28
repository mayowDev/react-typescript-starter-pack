import React from 'react';
import ReactDom from 'react-dom';
import img from './images/sample-profile.png';
import './styles.scss';

const App: React.FC = () => {
    return (
        <div>
            <h1> webpack react</h1>
            <img src={img} />
        </div>
    );
};

ReactDom.render(<App />, document.getElementById('root'));
