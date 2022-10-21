import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from "../responsive";
const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}

`

/* ---- LEFT SIDE START ---- */
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    ${mobile({textAlign:"center"})}
`

const Description = styled.p`
   margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
    ${mobile({justifyContent:"center"})}
    
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color === "3B5999" ? "3B5999" : props.color === "E4405F" ? "E4405F" : props.color === "55ACEE" ? "55ACEE" : "0e76a8"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
/* ---- LEFT SIDE END ---- */




/* ---- CENTER SIDE START ---- */
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
/* ---- CENTER SIDE END ---- */

/* ---- RIGHT SIDE START ---- */
const Right = styled.div`
    flex:1;
    padding: 20px; 
    ${mobile({backgroundColor:"#f7f5f5"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
    height: 50px;
    object-fit: cover;
`
/* ---- RIGHT SIDE END ---- */
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>YAVUZ.</Logo>
            <Description>
                There are many variations of passages of Lorem ipsum available, but the 
                majority have suffered alteration in some from, by injected humour,
                or randomised words which don't look even slightly believable.
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="0e76a8">
                    <LinkedInIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
            
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/>622 Dixie Path, South Tobinchester 98366
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/>+1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight:"10px"}}/>contact@yavuz.com
            </ContactItem>
            <Payment src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </Right>
    </Container>
  )
}

export default Footer
