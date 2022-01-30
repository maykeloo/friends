import styled from "vue3-styled-components";

export const Container = styled.div`
    width: calc(30% - 40px);
    padding: 20px;
    background: #cfbaf0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h2`
    color: white;
    font-family: sans-serif;
    text-align: center;
    font-size: 2em;
`

export const Label = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    display: flex;
    align-items: center;
`

export const Detail = styled.span`
    width: 20%;
    font-family: sans-serif;
    text-decoration: underline;
    font-size: 1.2em;
`

export const AddBtn = styled.button`
    margin-top: 20px;
    width: 40%;
    padding: 10px;
    background: purple;
    color: white;
    border: 2px solid purple;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background: white;
        color: purple;
    }
`