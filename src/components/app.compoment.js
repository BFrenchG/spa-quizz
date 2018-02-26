// @flow
import React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Questions from '../containers/questions.container';

const theme = createMuiTheme();


const App = () => (
    <MuiThemeProvider  theme={theme}>
        <Questions/>
    </MuiThemeProvider>
);

export default App;