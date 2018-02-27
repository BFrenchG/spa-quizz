// @flow

import React from 'react';

import Card from 'material-ui/Card';
import {Button} from 'material-ui';

export type Props = {
    score: number,
    retry: () => void
}

const Score = ({score, retry}: Props) => (
            <Card style={{padding: "5px 15px", margin: "5px 0"}}>
                <p>Your score is: <b>{ score }%</b></p>
                <Button onClick={retry.bind(this)}
                        variant="raised"
                        color="secondary"
                        style={{marginLeft: '2px'}}
                >
                    Retry
                </Button>
            </Card>
);

export default Score;
