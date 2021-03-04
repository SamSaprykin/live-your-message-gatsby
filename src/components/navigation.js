import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../styles/constants"
import SimpleDropdown from "./menuComponents/simpleDropdown"
import { Container } from "./layoutComponents"
import XperiencifyButton from "./XperiencifyButton/XperiencifyButton"

const tempNavLinks = [
  {
    linkTo:"/products",
    title:"Products",
    type:"simple", 
  },
  {
    linkTo:"/pricing",
    title:"Pricing",
    type:"simple", 
  },
  {
    linkTo:"/blog",
    title:"Blog",
    type:"simple",
      
  },
]

const Navigation = ({}) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    
    return (
        <StyledUl navbarOpen={navbarOpen} >
          <Container>
            <NavRow>
                <HeaderLogo>
                    <Link to="/">
                        <XperincifyLogo
                          src="/xperiencify-logo.svg" 
                        />
                    </Link> 
                </HeaderLogo>
                <NavItems navbarOpen={navbarOpen}>
                    <MenuItems>
                    {
                        tempNavLinks.map((itemLink,index) => {
                            return (
                                itemLink.type === 'simple' ? (
                                    <StyledLi key={index} >
                                        <StyledLink 
                                          to={itemLink.linkTo}
                                          activeStyle={{ color: "#4364af" }}
                                          partiallyActive={true}
                                        >
                                            <span>{itemLink.title}</span>
                                        </StyledLink>
                                    </StyledLi>
                                ) : itemLink.type === "simple-dropdown" && itemLink.submenuItems !== undefined ? (
                                    <SimpleDropdown data={itemLink} key={index}/>
                                ) : (
                                  <></>
                              )
                            )
                        })
                    }
                        
                    </MenuItems>
                    
                </NavItems>
                <RightSide>
                    <CtaWrapper>
                          <XperiencifyButton toRoute="/" type="secondary" sizeType="big">
                            Log in
                          </XperiencifyButton>
                          <XperiencifyButton type="tertiary" toRoute="/" sizeType="big">
                            Try close
                          </XperiencifyButton>
                    </CtaWrapper>
                    <Toggle
                        navbarOpen={navbarOpen}
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        {navbarOpen ? <Hamburger 
                            open 
                            
                        /> : <Hamburger /> }
                    </Toggle>
                </RightSide>     
              </NavRow>
          </Container>
      </StyledUl>
    )
}

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1.5rem 5vw;
  width:100%;
  background-color: white;
  position:fixed;
  top:0;
  z-index:100;
  height:auto;
  box-shadow:4px 14px 35px rgba(6,13, 54, 0.08);
  @media (max-width: 1280px) {
    padding:0 2.2vw;
  }
  @media ${device.tablet} {
    padding:1.5rem 0;
  }
  @media ${device.mobileL} {
    background-color: white; 
  }
`;


const NavRow = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  @media ${device.tablet} {
    margin-top:8px;
  }
`
const StyledLi = styled.li`
  float: left;
  margin-bottom:0;
  @media ${device.tablet} {
      width:100%;
      padding-bottom:12px;
      border-bottom:1px solid #E4E5F1;
  }
  a {
    display: flex;
    align-items:center;
    justify-content:space-between;
    color: #3e444e;
    font-family:Inter,system-ui,sans-serif;
    font-size:16px;
    line-height:24px;
    text-align: center;
    padding: 16px 24px;
    text-decoration: none;
    :hover {
      opacity:.8;
    }
  }
`;






const StyledLink = styled(Link)`
  display: flex;
  align-items:center;
  justify-content:space-between;
  color: #3e444e;
  font-family:Inter,system-ui,sans-serif;
  font-weight:500;
  font-size:16px;
  line-height:26px;
  text-align: center;
  padding: 0 16px;
  text-decoration: none;
  @media (max-width: 1280px) {
    padding:0 10px;
  }
  @media ${device.laptop} {
    padding:0 8px;
    font-size:13px;
  }
  @media ${device.tablet} {
    width:100%;
    font-size:18px;
    line-height:27px;
    font-weight:500;
    padding-top:12px;
  }
  svg {
      margin:0 8px;
      transition:all .2s ease-in-out;
  }
  &:hover {
    cursor:pointer;
    span {
        opacity:.8;
    }
  }
`;


const HeaderLogo = styled.div`
    width:100%;
    max-width:196px;
    svg {
        width:100%;
        max-width:196px;
    }
    a {
      height:100%;
    }
    @media (max-width: 1280px) {
        max-width:156px;
    }
    @media ${device.laptop} {
        max-width:120px;
    }
    @media ${device.mobileL} {
        a {
            height:40px;
            display:flex;
            align-items:center;
        }
        
    }
`

const XperincifyLogo= styled.img`
    margin-bottom:0;
`


const CtaWrapper = styled.div`
  display:flex;
  width:100%;
  max-width:220px;
  text-align:left;
  position:relative;
  justify-content:center;
  @media ${device.laptop} {
    max-width:220px;
  }
  @media ${device.mobileL} {
    display:none;
    z-index:-1;
  }
`


const NavItems = styled.div`
  margin-left: 4rem;
  @media ${device.tablet} {
    margin-left: 0;
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    background-color: #fff;
    transition: all 0.3s ease-in;
    left: 0;
    top: ${props => (props.navbarOpen ? "0" : "-100%")};
    height: 100%;
    overflow: auto;
  }
`


const Hamburger = styled.div`
  background-color: #3e444e;
  width: ${props => (props.open ? "24px" : "16px")};
  margin-left:${props => (props.open ? "0" : "8px")};
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  @media ${device.mobileL} {
    background-color: ${props => (props.open ? " #3e444e !important" : "white")};
  }
  ::before,
  ::after {
    width: 24px;
    height: 2px;
    background-color: #3e444e;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    right:0;
    @media ${device.mobileL} {
      width: 22px;
      height: 2px;
      background-color: ${props => (props.open ? " #3e444e !important" : "white")};
    }
  }

  ::before {
    right:0;
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-6px, 0px)" : "rotate(0deg)"};
    top: -6px;
    @media ${device.mobileL} {
      top: -6px;
      transform: ${props =>
        props.open ? "rotate(-90deg) translate(-6px, 0px)" : "rotate(0deg)"};
    }
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 6px;
    @media ${device.mobileL} {
      top: 6px;
      transform: ${props =>
        props.open ? "rotate(-90deg) translate(6px, 0px)" : "rotate(0deg)"};
    }
  }
  @media ${device.mobileL} {
    width: 22px;
    height: 2px;
    margin-right: 16px;
    margin-bottom: 8px;
  }
`

const Toggle = styled.div`
  display:none;
  height: 80px;
  cursor: pointer;
  padding: 0 24px;
  position: relative;
  z-index: 1001;
  
  @media ${device.tablet} {
    display: flex;
    padding: 0 0 0 24px;
    height:40px;
  }
  @media ${device.mobileL} {
    padding: 0;
    margin-right:-8px;
    height:33px;
    div {
      background-color:#3e444e;
      :after {
        background-color:#3e444e;
      }
      :before {
        background-color:#3e444e;
      }
    }
  }
`

const RightSide = styled.div`
  display:flex;
  width:100%;
  max-width:320px;
  justify-content:flex-end;
  @media ${device.laptop} {
    max-width:200px;
  }
  @media ${device.tablet} {
    max-width:260px;
  }
`

const MenuItems = styled.div`
  @media ${device.tablet} {
    padding:110px 40px 60px 40px;
    position:absolute;
    display: block;
    width:100%;
    max-height: 3000px !important;
  }
  @media ${device.mobileL} {
    padding:80px 24px 40px 24px;
  }
`



export default Navigation




