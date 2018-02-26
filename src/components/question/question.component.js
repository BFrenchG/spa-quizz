// @flow

import React from 'react';

import Card from 'material-ui/Card';
import Question from '../../types/question.type'

/*class QuestionItem extends React.Component<{question: Question}> {
    render() {
        return (
            <Card>
                <h3>{this.props.question.qTitle}</h3>
                <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
            </Card>
        );
    }
}*/

export const QuestionItem = (props: {question:Question, handleChange: function}) => (
    <Card>
        <h1>{props.question.title}</h1>
        <select value={props.question.selected} onChange={props.handleChange}>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
        </select>
    </Card>
);