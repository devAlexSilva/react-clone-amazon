import styled from "styled-components";
import { pageText } from "../helpers/pageText";
import { itemWrapper } from "../helpers/itemWrapper";


export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;
    background-color: #131a22;
`
export const Logo = styled.img`
    width: 6rem;
    border: 1px solid #121a22;
    padding: .2rem .1rem;
    cursor: pointer;

    &:hover {
        border: 1px #fff;
        border-radius: .2rem;
    }
`

export const Text = styled(pageText)`
    color: ${(props) => props.color ?? '#fff'};
    font-size : ${(props) => props.fontSize ?? '.8rem'};
`
export const toolbar = styled.div`
    display: flex;
    padding: .28rem 0;
`
export const toolbarDelivery = styled.div`
    display: flex;
    padding: .78rem 0;
    flex-flow: row nowrap;
    align-items: center;
    width: fit-content;
    height: auto;
`
export const Wrapper = styled(itemWrapper)`
    display: flex;
    flex-direction: ${(props) => props.flexDirection ?? 'column'};
    align-items: ${(props) => props.alignItems ?? 'flex-start'};
    justify-content: center;
    padding: .25rem .1rem;
    border: 1px solid #131a22;
    border-radius: .2rem;

    &:hover {
        border-color: ${(props) => props.notBorderHover ? '#131a22' : '#fff'};
    }

    @media(max-width: 850px) {
        display: none;
    }
`

export const Searchbox = styled.input`
    background-color: #fff;
    padding: .78rem;
    width: 47%;
    border: none;

    @media(max-width: 850px){
        border-radius: .2rem;
        margin: .3rem 0;
    }
`

export const Select = styled.select`
    background-color: #ddd;
    margin-right: -1.2rem;
    padding: .72rem .5rem;
    border-radius: .2rem 0rem 0rem .2rem;
    border: none;
    cursor: pointer;

    @media(max-width: 850px){
        display: none;
    }
`

export const searchIconWrapper = styled.span`
    background-color: #fabd60;
    color: #131a22;
    margin-left: -1rem;
    border-radius: 0rem .2rem .2rem 0rem;
    padding: .3rem .5rem;
    cursor: pointer;
    transition: all 250ms ease;

    &:hover {
        background-color: #ff9900;
    }

    @media(max-width: 850px){
        display: none;
    }
`