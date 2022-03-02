import React from 'react'
import styled from 'styled-components' // Components
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';

// This is a component (we use this instead of using CSS to add properties to divs)
const Container = styled.div` 
    border: 1px solid black;
    height: 60px;
`;
const Wrapper = styled.div`
    padding 10px 20px;
    border: 1px solid black;
    display: flex; 
    justify-content: space-between;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14; 
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Logo = styled.h1` 
    font-weight: bold; 
    text-align: center;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    border: 1px solid black;
`
const Center = styled.div`
    flex: 1;
    border: 1px solid black;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    border: 1px solid black;
    align-items: center;
    justify-content: flex-end;
`

const Navbar = () => { 
    return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"grey", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Store Name</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <Badge badgeContent={0} color="primary">
                <ShoppingCartOutlined />
                </Badge>
            </Right>
        </Wrapper>
    </Container>
    )
}

export default Navbar