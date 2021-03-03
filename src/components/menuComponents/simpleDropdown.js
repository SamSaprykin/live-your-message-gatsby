import React from 'react';
import styled from "styled-components"

import { device } from "../../styles/constants"
import { Link } from "gatsby"


const SimpleDropdown = ({data}) => {
    
    const itemLink = data
    return (
      <>
        <DropDownLi>
            <Dropbtn>
                <StyledLink 
                  className="active"
                  activeStyle={{ color: "#0023EB" }}
                  partiallyActive={true}
                >
                    <span>{itemLink.title}</span>
                    
                </StyledLink>
            </Dropbtn>
            <DropDownWrapper>
                <DropDownContent bigMenu={itemLink.bigMenu}>
                    {" "}
                    <LinksContainer>
                    {
                        itemLink.submenuItems.map((subItem,index) => {
                            let redirectLink
                            if (subItem.altLinkTo  === "firefox")  {
                              redirectLink = subItem.altLinkTo
                            } else {
                              redirectLink = subItem.linkTo
                            }
                            return (
                                <SubA 
                                    to={redirectLink} 
                                    key={index}
                                    target={subItem.target}
                                >
                                    <span>
                                        
                                        {subItem.titleSubmenu}
                                    </span>
                                    
                                </SubA>
                            )
                        })
                    }
                    </LinksContainer>
                </DropDownContent>
            </DropDownWrapper>
        </DropDownLi>
      </>
    )
  }




  const StyledLink = styled(Link)`
  display: flex;
  align-items:center;
  justify-content:space-between;
  color: #0D0D0D;
  font-family: DM Sans;
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
    font-weight:700;
    padding-top:12px;
  }
  svg {
      margin:0 8px;
      transition:all .2s ease-in-out;
  }
  &:hover {
    cursor:pointer;
    svg {
        transform:rotate(-180deg);
        path {
            fill:#0023EB;
        }
    }
    span {
        color:#0023EB;        
    }
  }
`;


const SubA = styled(Link)`
  color: #0d0d0d;
  font-weight:700;
  text-decoration: none;
  display: flex;
  align-items:center;
  text-align: left;
  font-family: DM Sans;
  font-size:14px;
  line-height:21px;
  padding:14px 20px 14px 40px;
  justify-content:space-between;
  width:100%;
  max-width:260px;
  cursor:pointer;
  span {
    display: flex;
    align-items:center;
  }
  svg {
    opacity:1;
    width:20px;
    height:20px;
    margin-right:12px;
  }
  .arrow-link {
      width:10px;
      height:10px;
      margin-left:10px;
      transition:all .2s ease-in-out;
      opacity:.3;
      position:relative;
      right:0;
  }
  :hover {
    cursor:pointer;
    background-color:white;
    .arrow-link {
        transform:rotate(-90deg);
        opacity:1;
        path {
            stroke:#0023EB;
            fill:none !important;
        }
    }
    svg {
      path {
        fill:#0023EB;
      }
    }
    color:#0023EB;
  }
  @media ${device.tablet} {
    padding-left:0;
    max-width:600px;
  }
`;



const DropDownContent = styled.div` 
  min-width: 160px;
  z-index: 1;
  margin-top:36px;
  display:flex;
  width:100%;
  max-width:775px;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  :after {
    content:"";
    position:absolute;
    width:100%;
    bottom:1px;
    z-index:-1;
    transform:scale(.8);
    box-shadow: 0px .5px 20px .8px #060E3F;
  }
  @media ${device.laptop} {
    padding:24px 18px;
    max-width: ${props => (props.bigMenu ? "500px" : "250px")};
  }
  @media ${device.tablet} {
    margin:0;
    max-width:100%;
    flex-direction:column;
    padding:0;
    box-shadow:none;
    align-items:flex-start;
  }
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: #0D0D0D;
  font-family: DM Sans;
  text-align: center;
  text-decoration: none;
  font-size:16px;
  line-height:26px;
  @media ${device.tablet} {
    width:100%;
  }
  @media ${device.mobileL} {
    svg {
      width:16px;
      height:12px;
    }
  }
  a {
      transition:all .2s ease-in-out;
      
  }
  :hover {
      a {
          color:#0023EB;
      }
      
   }
`;

const StyledLi = styled.li`
  float: left;
  margin-bottom:0;
  @media ${device.tablet} {
      width:100%;
      padding-bottom:12px;
      border-bottom:1px solid #E4E5F1;
  }
`;



const DropDownWrapper = styled.div`
  display:none;
  position:absolute;
  justify-content:flex-start;
  top:45px;
  transition:all .2s ease-in-out;
  width:100%;
  max-width:300px;
  @media ${device.tablet} {
    position: relative;
    top:0px;
    width:100%;
    justify-content:flex-start;
    padding-left:8px;
    left:0;
    padding:0;
  }
`

const DropDownLi = styled(StyledLi)`
  display: flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  height:26px;
  transition:all .2s ease-in-out;
  &:hover ${DropDownWrapper} {
    display: flex;
  }
  &:hover {
    .active {
      cursor:pointer;
      svg {
          
          path {
              fill:#0023EB;
          }
      }
      span {
          color:#0023EB;
          
      }
    }
  }
  @media ${device.tablet} {
    width:100%;
    justify-content:flex-start;
    height:auto;
    flex-direction:column;
    align-items:flex-start;
  }
`;

const LinksContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  max-width:260px;
  height:100%;
  padding:40px 0 ;
  background-color:#F7F8FC;
  border-bottom-left-radius:4px;
  .active {
    background-color:white;
    .arrow-link {
        transform:rotate(-90deg);
        opacity:1;
        path {
            stroke:#0023EB;
            fill:none !important;
        }
    }
    svg {
      path {
        fill:#0023EB;
      }
    }
    color:#0023EB;
  }
  @media ${device.tablet} {
    background-color:white;
    max-width:800px;
  }
`






export default SimpleDropdown


