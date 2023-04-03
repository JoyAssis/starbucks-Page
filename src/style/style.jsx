import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family:"Poppins", sans-serif;
}
`

export const Header = styled.header`
height: 15vh;
display:flex;
 justify-content:space-between;
 align-items:center;
transition:all 0.5s ease-in-out;
 @media (max-width: 768px) {
  width: 30%;
  border: 1px solid black;
 }
`
export const Logo = styled.div`
width:15vw;
display:flex;
 justify-content:center;
 align-items:center;
 img{
  height:10vh;
 }
 
`

export const Nav = styled.nav`
display:flex;
 align-items:center;
color:#00704a;
width:40vw;
ul{
  display:flex;
   justify-content:space-between;
  width:80%;
  @media (max-width: 768px) {
    display:none;
   }
}
li{
  font-size:1.2rem;
  cursor:pointer;
  &:hover{
    transform:scale(1.2);
    color:#362415
  }
}
`
export const Darkmode = styled.img`
  transition:ease-in-out 0.5s;
  width: 3vw;
  cursor:pointer; 
`


export const Main = styled.main`
  height:80vh;
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  @media (max-width: 768px) {
    flex-direction:column;
    align-items:flex-start;
    height:90vh;
    border: 1px solid black;
  }
  
`
export const Texts = styled.section`
width:50vw;
height:50vh;
display:flex;
flex-direction:column;
line-height:2;
margin-left:50px;
  h2{
    font-size:2.5rem;
    width:30vw;
    line-height:1.5;
  }
  span{
    color:#00704a;
  }
  @media (max-width: 768px) {
   height:80vh;
   }
`
export const Button = styled.button`
  background-color: #00704a;
  border-radius: 20px;
  border: none;
  color: #ffff;
  margin-top: 1vh;
  cursor: pointer;
  width: 10vw;
  height: 6vh;
  font-size: 1em;
  &:hover {
    opacity: 0.8;
    background-color:#362415;
  }
  @media (max-width: 768px){
    width: 20vw;
    height: 6vh;
  }
`

export const Social = styled.section`
  height: 15vh;
  width: 85%;
  column-gap: 1.17vw;
  display:flex;
  align-items: center;
  justify-content: flex-start;
  margin-left:50px;
  @media (max-width: 768px){
  display:none;
  }
`;
export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 5vw;
  border-radius: 50%;
  background-color: #00704a;
  &:hover {
    background-color: #362415;
  }
  img {
    height: 5vh;
  }
  @media (max-width: 768px){
    width: 10vw;
    height: 10vh
  }
`;
export const CoffeeBox = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 85vh;
  @media (max-width: 768px){
    margin-top: 50px;
    border: 1px solid black;
  }
`;
export const CoffeeCircle = styled.figure`
  width: 25vw;
  height: 50vh;
  background-color: #00704a;
  border-radius: 50%;
  @media (max-width: 768px){
    width: 32vw;
    height: 30vh;
  }
`;
export const Coffee = styled.img`
  position: absolute;
  width: 25vw;
`;
