import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';



/* -----STYLED CSS START----- */
const Container = styled.div`
    height:60px;
`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items: center;
    
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border:none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`;
const Rigth = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer; 
    margin-left: 25px;
`;
/* -----STYLED CSS START----- */





/* -----NAVBAR COMPONENT START----- */
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{fontSize: 16 , color: "gray"}}/>
                    </SearchContainer>
                </Left>

                <Center><Logo>YAVUZ.</Logo></Center>

                <Rigth>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                           <ShoppingCartOutlinedIcon/>
                        </Badge>
                    </MenuItem>
                </Rigth>
            </Wrapper>
        </Container>
    )
}
/* -----NAVBAR COMPONENT END----- */
export default Navbar
