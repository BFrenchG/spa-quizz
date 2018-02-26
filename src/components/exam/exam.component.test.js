import React from 'react';
import ReactDOM from 'react-dom';
import Exam from './exam.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MuiThemeProvider><Exam /></MuiThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
