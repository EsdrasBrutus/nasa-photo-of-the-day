import React from 'react';

const Image = (props) =>{
    const { imgData } = props;

    return (
        <div className ='img-container'>
            <img src = {imgData.url}/>

        </div>
    );

}

export default Image;