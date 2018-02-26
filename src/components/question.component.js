// @flow
import React from 'react';

import type {Id, Question} from '../types/qizz.type';
import Card from 'material-ui/Card';
import Radio from 'material-ui/Radio';
import FormControl from "material-ui/es/Form/FormControl";
import FormControlLabel from "material-ui/es/Form/FormControlLabel";

export type Props = {
    question: Question,
    error: string,
    handleChange: (questionId: Id, optionId: Id) => void
}

const QuestionCard = ({question, error, handleChange}: Props) => (
    <Card style={{padding: "10px 15px", margin: "15px 0"}}>
        <h3>{question.title}</h3>
        <hr/>
        <FormControl component="fieldset" required>
            {question.options.map(option => (
                <div key={option.id}>
                    <FormControlLabel value="female" control={
                        <Radio
                            key={option.id}
                            checked={question.selected === option.id.toString()}
                            onChange={(e) => handleChange(question.id, e.currentTarget.value)}
                            value={option.id.toString()}
                            label={option.option}
                        />
                    } label={option.option}/>
                </div>
            ))}
            <p style={{color: "red"}}>{error}</p>
        </FormControl>
    </Card>
);

export default QuestionCard;