import React, { useState } from 'react';
import Explanation from './Explanation';
import styled from 'styled-components'
import { Button } from 'reactstrap';



const Details = (props) =>{
    const [show, setShow] = useState(false)
    const onClick = () => show ? setShow(false) : setShow(true);
    const { details } = props;
    
    return (
        <Container className = 'details'>
            <h3>{details.title}</h3>
            <p className='date'>{details.date}</p>
            { show ? <Explanation excerpt = {details} /> : null }
            <Button color = "primary" className = 'button' onClick = {onClick} >{show ?  'Hide' : 'Learn More' }</Button>{' '}
        </Container>
    );
}


const Container = styled.div`
min-height: 10em;
width:50%;
background-color: white;
margin: 16px;
padding: 2em;
border: 1px solid rgb(210, 210, 210);
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
border-radius: 16px;
`

export default Details;