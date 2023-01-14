import * as S from './style'
import flag from '../../assets/goal.png'
import { ShoppingCartOutlined, SearchOutlined, RoomOutlined, ArrowDropDown } from '@mui/icons-material'

export const Navbar = () => {
    return (
        <S.Container>
                <S.Logo src={flag} />
                <S.Wrapper flexDirection='row' alignItems='center'>
                <S.toolbarDelivery>
                    <RoomOutlined />
                    <S.Wrapper notBorderHover='yes'>
                        <S.Text fontSize='.7em'>Entrega em</S.Text>
                        <S.Text>Brasil</S.Text>
                    </S.Wrapper>
                </S.toolbarDelivery>
                </S.Wrapper>

            <S.Select>
                <option value='All'>Todos</option>
            </S.Select>
            <S.Searchbox />
            <S.searchIconWrapper>
                <SearchOutlined />
            </S.searchIconWrapper>

            <S.toolbar>
                <S.Wrapper>
                    <S.Text fontSize='.7em'>Olá,</S.Text>
                    <S.Text color='#ff9900'> Entrar</S.Text>
                    <S.Wrapper flexDirection='row' notBorderHover='yes'>
                        <S.Text>Minha Conta</S.Text>
                        <ArrowDropDown />
                    </S.Wrapper>
                </S.Wrapper>

                <S.Wrapper>
                    <S.Text fontSize='.7em'>Retornos</S.Text>
                    <S.Text>& Pedidos</S.Text>
                </S.Wrapper>

                <S.Wrapper flexDirection='row' alignItems='center'>
                    <S.Wrapper alignItems='center' notBorderHover='yes'>
                        <S.Text color='#ff9900'>0</S.Text>
                        <ShoppingCartOutlined />
                    </S.Wrapper>
                    <S.Text>Carrinho</S.Text>
                </S.Wrapper>

            </S.toolbar>

        </S.Container>
    )
}