import React from 'react';
import styled from 'styled-components'


const Header = (props) =>{

return (
    <Container>
        <nav>
            <IMG src ='https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg' />
            <List>
                <HoriList type = 'primary'><Item href=''><Span>Missions</Span></Item></HoriList>
                <HoriList type = 'primary'><Item href=''><Span>Galleries</Span></Item></HoriList>
                <HoriList type = 'primary'><Item href=''><Span>NASA TV</Span></Item></HoriList>
                <HoriList type = 'primary'><Item href=''><Span>Follow NASA</Span></Item></HoriList>
                <HoriList type = 'primary'><Item href=''><Span>Downloads</Span></Item></HoriList>
                <HoriList type = 'primary'><Item href=''><Span>About</Span></Item></HoriList>
                <HoriList ><Item href=''><Span>NASA Audiences</Span></Item></HoriList>
            </List>
        </nav>
    </Container>
)
}

const IMG = styled.img`
float:left; 
padding:1em;
`

const Span =styled.span`
margin-right: 1em;
`

const Item = styled.a`
text-decoration: none;
font-color: white;
`

const HoriList =styled.li`
display: inline;
font-size:1.5rem;
margin-right: 1em;
font-color: white;
${props => props.type === 'primary' && 'border-right: 1px solid white;'}
`

const List = styled.ul`
list-style-type: none;
padding-top: 3.5em;
`

const Container = styled.div`
background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hyades.jpg/1200px-Hyades.jpg); 
min-height: 10em;
width: 100%;
background-color: white;
border: 1px solid rgb(210, 210, 210);
border-radius: 16px;
`

export default Header;