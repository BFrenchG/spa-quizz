// @flow

import React from 'react';

import Card from 'material-ui/Card';

class ExamPage extends React.Component<{ qTitle: string, qOptions: Array<{}>, qAnswers: Array<{}>}> {
    render() {
        return (
            <Card>
                <h1>About</h1>
                <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
            </Card>
        );
    }
}

export default ExamPage;
