import * as S from './style'
import { KeyboardArrowLeft, Star, StarHalf, KeyboardArrowDown } from '@mui/icons-material'
import { departmentList, productDetails } from './pageInfo'


export const PageBody = () => {
    return(
        <S.container>
            <S.leftContainer>
                <S.boldText>Departamento</S.boldText>
                {departmentList.map(item => (
                    <S.paragraph> <KeyboardArrowLeft />{item}</S.paragraph>
                ))}
            </S.leftContainer>

            <S.rightContainer>
                <S.searchResultDiv>
                    <S.boldText>
                        1-10 de 800 resultados para
                    </S.boldText>
                    <S.boldText color='#c45500'>
                        Todos os Departamentos
                    </S.boldText>
                </S.searchResultDiv>

                <S.productContainer>
                    {productDetails.map(item => (
                        <S.wrapper flexDirection='column'>
                            <S.imageContainer>
                                <S.image src={item.src}/>
                            </S.imageContainer>
                            <S.text>{item.name}</S.text>
                            <S.text fontSize='.7rem'>{item.by}</S.text>

                            <S.wrapper margin='.3rem 0 0 0' alignItems='center'>
                                <S.iconWrapper>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <StarHalf />
                                </S.iconWrapper>

                                <KeyboardArrowDown />
                                <S.text color='#000099'>{item.starcount}</S.text>
                            </S.wrapper>

                            <S.wrapper alignItems='center' margin='.3rem 0'>
                                <S.text fontSize='1.3rem'>{item.price}</S.text>
                                <S.text color='#808080'>{item.shipping}</S.text>
                            </S.wrapper>
                            <S.text>{item.available}</S.text>
                        </S.wrapper>
                    ))}
                </S.productContainer>
            </S.rightContainer>
        </S.container>
    )
}