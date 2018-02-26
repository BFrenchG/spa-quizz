// @flow

import React from 'react';

import Card from 'material-ui/Card';

export type Props = {
    score: number
}

const Score = ({score}: Props) => (
            <Card style={{padding: "5px 15px", margin: "5px 0"}}>
                <p>Your score is: <b>{ score }%</b></p>
            </Card>
);

export default Score;
