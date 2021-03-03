import React from 'react';

const Details = (props) =>{
    const element = document.querySelector('explanation');
    const { details } = props;

    return (
        <div className = 'details'>
            <h3></h3>
            <p className='date'>{details.date}</p>
            <p className ='explanation'>{details.explanation}</p>
            <span className= 'button' onClick = {document.addEventListener('click', () =>{
                element.classList.toggle("active");
            }  )}>{(element.className === 'explanation active') ? 'Hide' : 'Learn More about this Image'}</span>
        </div>
    );
}

export default Details;