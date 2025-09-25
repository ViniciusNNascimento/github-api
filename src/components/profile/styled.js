import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`
export const WrapperInfoUser = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-left: 8px; 
    h1 {
        font-size: 32px;
        font-weight: bold;
    }
`

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }
`

export const WrapperUserName = styled.div`
    display: flex;
    align-items: center;
    h3 {
        margin-right: 8px;
    }
`

export const WrapperImg = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`