import styled from "styled-components";
import { pageText } from "../helpers/pageText";
import { itemWrapper } from "../helpers/itemWrapper";


export const container = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: .3rem;
    background-color: #232f3e;
`

export const Text = styled(pageText)`
    color: ${(props) => props.color ?? '#fff'};
    font-size: ${(props) => props.fontSize ?? '.9rem'};
    margin-right: 1rem;
    border: 1px solid #232f3e;
    padding: .5rem .1rem;
    cursor: pointer;

    &:hover {
        border: 1px solid #fff;
        border-radius: .2rem;
    }

    @media(max-width: 850px) {
        display: none;
    }
`

export const leftText = styled(Text)`
    @media(max-width: 850px) {
        display: block;
    }
`

export const wrapper = styled(itemWrapper)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
`