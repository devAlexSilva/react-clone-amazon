import styled from 'styled-components'
import { pageText } from '../helpers/pageText'
import { itemWrapper } from '../helpers/itemWrapper'


export const container = styled.div`
    display: flex;
    padding: 1rem;
`

export const leftContainer = styled.aside`
    height: 80vh;
    width: 18vw;
    border-right: 2px solid #ddd;

    @media(max-width: 650px) {
        display: none;
    }
`

export const rightContainer = styled.section`
    height: 80vh;
    width: 82vw;
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
`

export const image = styled.img`
    width: 13rem;
`

export const text = styled(pageText)`
    color: ${(props) => props.color ?? '#131a22'};
    font-size : ${(props) => props.fontSize ?? '.9rem'};
`

export const boldText = styled(text)`
    font-weight: bold;
    padding: .4rem;
`

export const paragraph = styled.p`
    font-size: .9rem;
    display: flex;
    align-items: center;
    padding-bottom: .1rem;
`

export const searchResultDiv = styled.div`
    border: 1px solid #ddd;
    padding: .6rem;
    width: 95%;
    border-radius: 4px;
`

export const productContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 22rem);
    margin-top: 2rem;

    @media(max-width: 915px) {
        grid-template-columns: repeat(auto-fit, 15rem);
        align-items: center;
        justify-content: center;
    }
`

export const imageContainer = styled.div`
    height: 14rem;
    display: flex;
    align-items: center;
`

export const wrapper = styled(itemWrapper)`
    display: flex;
    margin-right: 1rem;
    flex-direction: ${(props) => props.flexDirection ?? 'row'};
    align-items: ${(props) => props.alignItems ?? 'left'};
    margin: ${(props) => props.margin ?? ''};

`

export const iconWrapper = styled.div`
    color: #ff9900;
`