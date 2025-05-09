import React from 'react';

import Button from './Button';

const QuoteMachine=(props)=>(
    <>
    {props.selectedQuote ? `${props.selectedQuote.quote} - ${props.selectedQuote.author}` : ''}
    <Button buttonDisplayName="New Quote" clickHandler={props.assignNewQuoteIndex} />
    </>
)

export default QuoteMachine;