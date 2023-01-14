import styled from 'styled-components'
import { pageText } from '../helpers/pageText'
import { itemWrapper } from '../helpers/itemWrapper'


export const container = styled.div`
    display: flex;
    padding: 1rem;

    @media(max-width: 560px) {
        padding: 0;
    }
`

export const leftContainer = styled.aside`
    height: 80vh;
    width: 18vw;
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

    @media(max-width: 560px) {
        margin: 0;
        width: 100%;
    }
`

export const image = styled.img`
    width: 100%;
    height: 11rem;
    aspect-ratio: 2/2;

    @media(max-width: 375px) {
        width: 100%;
        height: 9rem;
    }
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

    @media(max-width: 560px) {
        margin: 0 auto;
    }
`

export const productContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 15rem);
    margin-top: 2rem;

    .products {
        border: 2px solid #dddddd35;
        margin-bottom: 1.5rem;
        padding: .5rem;

        @media(max-width: 650px) {
            flex: 1 1;
            max-width: 11rem;
        }
    }
    
    @media(max-width: 915px) {
        grid-template-columns: repeat(auto-fit, 15rem);
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 650px) {
        display: flex;
        flex-wrap: wrap;
    }
`

export const imageContainer = styled.div`
    height: max-content;
    display: flex;
    align-items: center;
    margin-bottom: .5rem;
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