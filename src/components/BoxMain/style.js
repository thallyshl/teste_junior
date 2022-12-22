import styled from "styled-components";

export const Container = styled.main`
    width: 65%;
    height: auto;
    background-color: aliceblue;
    margin: 5% auto 0px;
    padding: 1.5rem;
    border-radius: 20px;
    border: 1px solid gray;
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
    elevation: 20;

    @media (max-width: 600px) {
        padding-left: 1.2rem;
  }
`;

export const CardText = styled.p`
    font-size: 1.5rem;
    font-weight: bolder;
    color: red;

    @media (max-width: 600px) {
        font-size: 1rem;
  }
`;