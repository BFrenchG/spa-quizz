import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../components/question.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {

    const dummyQuestions = {

    };
    const div = document.createElement('div');
    ReactDOM.render(<MuiThemeProvider><Question /></MuiThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
});