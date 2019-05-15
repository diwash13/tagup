import React from 'react'
import Card from '../Card/Card'

const Log = (props) => <Card> <span>{props.log.title} {props.log.message} {props.log.timestamp}</span> </Card>

export default Log