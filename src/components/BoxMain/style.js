import styled from "styled-components";

export const Container = styled.main`
    width: 50%;
    height: auto;
    background-color: black;
    margin: 5% auto 0px;
    padding: 1.5rem;
`;

export const Card = styled.div`
    width: 90%;
    height: 50px;
    background-color: white;
    margin: 1rem auto;
    padding: 2%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
`;

export const CardText = styled.p`
    font-size: 2rem;
    font-weight: bolder;
    color: red;
`;