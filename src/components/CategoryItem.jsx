import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh; 
`

const Title = styled.div`
    display: flex;
    padding: 20px;
    border: 1px solid black;
    justify-content: center;
    align-text: center; 
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Button = styled.button`
    flex: 1;
    width: 20;
    align-text: center;
`


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src = {item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem;
