// @flow

import React, {Component} from 'react';

import type {Answer, Id, Question, Quiz} from "../types/qizz.type";
import QuestionCard from "./question.component";
import Button from "material-ui/es/Button/Button";
import Score from "./score.component";


export type Props = {
    quiz: Quiz,
    getQuestions: () => void,
    onOptionSelect: (questionId: Id, optionId: Id) => void,
    onSubmit: (questions: Array<Question>) => void,
};

class QuestionPage extends Component<Props> {

    componentWillMount = () => {
        this.props.getQuestions();
    };

    componentWillUpdate = () => {

        let answers: ?Array<Answer> = this.props.quiz.answers;

        if (typeof this.props.quiz.score === "undefined" && answers) {

        }
    };

    displayScore = () => {
        if (this.props.quiz.score) {
            return <Score score={this.props.quiz.score}/>
        } else {
            return (
                <div>
                    <Button onClick={this.props.onSubmit.bind(this, this.props.quiz.questions)}
                            variant="raised"
                            color="secondary"
                            style={{marginLeft: "2px"}}
                    >
                        Submit
                    </Button>
                    <hr/>
                </div>
            )
        }
    };

    render() {
        return (
            <div>
                <h1 style={{color: "white", paddingLeft: "2px"}}>{this.props.quiz.title}</h1>
                <hr/>
                {
                    this.props.quiz.questions.map(question => (
                        <QuestionCard key={question.id}
                                      question={question}
                                      handleChange={this.props.onOptionSelect}
                                      error={question.error}/>

                    ))
                }
                {this.displayScore()}

            </div>
        )
    };
}

export default QuestionPage;
