import styled from "styled-components";

const Home = ({toggle}) => {
    return (
        <Container>
            <div>
                <img src="/images/dices.png" alt="dices-image" />
            </div>
            <div className="contents">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .contents h1{
        font-size: 96px;
        white-space: nowrap;
    }
`;

const Button = styled.button`
    padding: 10px 18px;
    color: white;
    background-color: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`;