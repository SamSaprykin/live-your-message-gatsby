import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"
import { Link } from "gatsby"
import XperiencifyIcons from "./xperiencifyIcons"
import { device } from "../styles/constants"

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
     <LinksFooter>
        <StyledLi>
          <FooterLogo>
            <Link 
              to="/"
            >
                <XperincifyLogo
                  src="/xperiencify-footer-logo.svg" 
                  width="148"
                  height="30"
                />
            </Link>
          </FooterLogo>
        </StyledLi>
        <StyledLi>
            <StyledLink 
              to=""
            >
                <span>Products</span>
            </StyledLink>
        </StyledLi>
        <StyledLi>
            <StyledLink 
              to=""
            >
                <span>Pricing</span>
            </StyledLink>
        </StyledLi>
        <StyledLi>
            <StyledLink 
              to=""
            >
                <span>Blog</span>
            </StyledLink>
        </StyledLi>
        
     </LinksFooter>
     <FooterFooter>
         <StyledSocLink href="https://www.facebook.com/">
           <XperiencifyIcons type="social-fb" />
         </StyledSocLink>
         <StyledSocLink href="https://www.youtube.com/">
           <XperiencifyIcons type="social-youtube" />
         </StyledSocLink>
         <StyledSocLink href="https://www.twitter.com/">
           <XperiencifyIcons type="social-twitter" />
         </StyledSocLink>
     </FooterFooter>
    </Container>
  </footer>
)

const StyledFooter = styled(Footer)`
  color: #fffaff;
  background-color: #1c1c1f;
  padding: 1rem 0;
`

const LinksFooter = styled.div`
  display:flex;
  justify-content:space-between;
  @media ${device.mobileL} {
    flex-wrap:wrap;
  }
`


const StyledLi = styled.li`
  float: left;
  margin-bottom:0;
  list-style-type: none;
  @media ${device.tablet} {
      width:100%;
      padding-bottom:12px;
  }
  @media ${device.mobileL} {
    width:50%;
  }
  a {
    display: flex;
    align-items:center;
    justify-content:center;
    color: white;
    font-family:Inter,system-ui,sans-serif;
    font-size:16px;
    line-height:24px;
    text-align: center;
    padding: 16px 24px;
    text-decoration: none;
    @media ${device.mobileL} {
      padding: 16px 0;
      justify-content:flex-start;
    }
    :hover {
      color: #4364af;
    }
  }
`;






const StyledLink = styled(Link)`
  
  padding: 0 16px;
  text-decoration: none;
  @media (max-width: 1280px) {
    padding:0 10px;
  }
  @media ${device.tablet} {
    padding:0 8px;
    font-size:13px;
  }
  &:hover {
    cursor:pointer;
  }
`;

const StyledSocLink = styled.a`
  display: flex;
  align-items:center;
  justify-content:center;
  text-align: center;
  padding: 0 12px;
  cursor:pointer;
  opacity: .75;
  :hover {
    opacity:1;
  }
`

const FooterLogo = styled.div`
    width:100%;
    max-width:196px;
    img {
        width:100%;
        max-width:160px;
    }
    a {
      height:100%;
    }
    @media (max-width: 1280px) {
        max-width:156px;
    }
    
    @media ${device.mobileL} {
       
    }
`

const XperincifyLogo= styled.img`
    margin-bottom:0;
`

const FooterFooter = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:32px 0 16px;
    position:relative;
    @media ${device.mobileL} {
      justify-content:flex-start;
    }
`

export default StyledFooter
