// @flow

import React, {Component} from 'react';

import type {Id, Question, Quiz} from '../types/qizz.type';
import QuestionCard from './question.component';
import Button from 'material-ui/Button/Button';
import Score from './score.component';


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

    displayScore = () => {
        if (this.props.quiz.score || this.props.quiz.score === 0) {
            return (
                <div>
                    <Score
                        score={this.props.quiz.score}
                        retry={this.props.getQuestions}
                    />
                </div>
            );
        } else {
            return (
                <Button onClick={this.props.onSubmit.bind(this, this.props.quiz.questions)}
                        variant="raised"
                        color="secondary"
                        style={{marginLeft: '2px'}}
                >
                    Submit
                </Button>
            );
        }
    };

    render() {
        // console.log(this.props);
        if (!this.props.quiz && this.props.quiz.error) {
            return (
                <div>
                    <h1 style={{color: 'white', paddingLeft: '2px'}}>Error loading quiz - please retry</h1>
                    <hr/>
                </div>
            );
        }

        if (this.props.quiz.isLoading) {
            return (
                <div>
                    <h1 style={{color: 'white', paddingLeft: '2px'}}>Quizz is loading...</h1>
                    <hr/>
                </div>
            );
        }

        return (
            <div>
                <h1 style={{color: 'white', paddingLeft: '2px'}}>{this.props.quiz.title}</h1>
                <hr/>
                {
                    this.props.quiz.questions.map(question => (
                        <QuestionCard key={question.id}
                                      question={question}
                                      quizSubmitted={!!(this.props.quiz.score || this.props.quiz.score === 0)}
                                      handleChange={this.props.onOptionSelect}
                        />

                    ))
                }
                {this.displayScore()}
                {
                    (this.props.quiz.error) ?
                        <p style={{color: 'red', paddingLeft: '2px'}}>{this.props.quiz.error} - please retry
                            submission</p>
                        :
                        ''
                }
            </div>
        );
    };
}

export default QuestionPage;
