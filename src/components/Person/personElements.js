import styled from "vue3-styled-components";

export const Container = styled.div`
    width: calc(30% - 40px);
    padding: 20px;
    border: 2px solid purple;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleName = styled.h2`
    color: purple;
    font-family: sans-serif;
    border-bottom: 2px solid grey;
    padding-bottom: 10px;
    text-align: center;
`

export const DetailsBtn = styled.button`
    padding: 10px;
    width: 30%;
    background: purple;
    color: white;
    border-radius: 5px;
    border: 2px solid purple;
    cursor: pointer;

    &:hover {
        background: white;
        color: purple;
    }
`

export const DetailsContainer = styled.div`
    width: 100%;
    border: 2px solid purple;
    border-radius: 5px;
    padding: 10px;
    margin-top: 15px;
    font-family: sans-serif;
`
export const MoreInfoContainer = styled.div`
    width: calc(90% - 20px);
    display: flex;
    flex-direction: column;
`

export const Info = styled.span`
    font-weight: bold;
    padding-right: 10px;
`

export const DeleteBtn = styled.button`
    padding: 10px;
    width: 50%;
    background: red;
    color: white;
    border-radius: 5px;
    border: 2px solid red;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background: white;
        color: red;
    }
`