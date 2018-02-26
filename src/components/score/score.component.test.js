import React from 'react';
import ReactDOM from 'react-dom';
import Score from './score.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MuiThemeProvider><Score /></MuiThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
