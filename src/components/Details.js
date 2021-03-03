import React, { useState } from 'react';
import Explanation from './Explanation';


const Details = (props) =>{
    const [show, setShow] = useState(false)
    const onClick = () => show ? setShow(false) : setShow(true);
    const { details } = props;
    
    return (
        <div className = 'details'>
            <h3>{details.title}</h3>
            <p className='date'>{details.date}</p>
            { show ? <Explanation excerpt = {details} /> : null }
            <button className = 'button' onClick = {onClick} >{show ?  'Hide' : 'Learn More about this Image' }</button>
        </div>
    );
}

export default Details;