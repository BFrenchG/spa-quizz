import React from 'react';
import ReactDOM from 'react-dom';
import Quizz from '../components/question-page.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MuiThemeProvider><Quizz /></MuiThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
