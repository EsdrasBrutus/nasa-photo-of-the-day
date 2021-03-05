import React from 'react'



const Explanation = (props) => {
    const { excerpt } = props;
    
    return (
        <div className ='explanation'>
             <p className="Explanation">{excerpt.explanation}</p>
        </div>
  )
}
 
export default Explanation; 