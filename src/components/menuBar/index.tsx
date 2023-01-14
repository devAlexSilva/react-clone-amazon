import { Menu } from '@mui/icons-material'
import * as S from './style'

export const MenuBar = () => {
    return(
        <S.container>
            <S.wrapper>
                <S.wrapper>
                    <Menu />
                    <S.Text>Todos</S.Text>
                </S.wrapper>

                <S.wrapper>
                    <S.Text>Oferta do dia</S.Text>
                    <S.Text>Atendimento ao Cliente</S.Text>
                    <S.Text>Registro</S.Text>
                    <S.Text>Cartões de presente</S.Text>
                    <S.Text>Vender</S.Text>
                </S.wrapper>
            </S.wrapper>

            <S.wrapper>
                <S.leftText>Cópia para fins de Estudos 👨🏾‍💻</S.leftText>
            </S.wrapper>
        </S.container>
    )
}