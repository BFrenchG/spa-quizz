// @flow
import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Question from './components/question/question.component';


class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className='App'>
                    <Question/>
                </div>
            </MuiThemeProvider>

        );
    }
}

export default App;