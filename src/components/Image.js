import React from 'react';
import styled from 'styled-components'

const Image = (props) =>{
    const { imgData } = props;

    return (
        <div className ='img-container'>
            <IMG src = {imgData.url}/>
        </div>
    );

}

const IMG = styled.img`
border: 1px solid rgb(210, 210, 210);
border-radius: 16px;
`

export default Image;