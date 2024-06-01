import styled from "styled-components";

export const Button = styled.button`
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

// Varient of above Button [will have all above properties]
export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
        color: white;
        background-color: #000000;
        border: 1px solid transparent;
    }
    // Overriding above properties
`;