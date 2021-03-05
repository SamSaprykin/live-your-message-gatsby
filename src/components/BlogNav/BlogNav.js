import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { device } from "../../styles/constants"

const BlogNav = ({
  headings, 
  slug}) => {
  console.log(headings)
  
  return (
    <>
    { headings.length !==0  && (
        <NavWrapper>
            <HeaderNav>Table of Contents</HeaderNav>
            <ListNavs>
                {headings && headings.map((header,index) => {
                    const numberItem = index +1
                    return (
                        <ListItem key={index}>
                            <AnchorLink to={`/blog/${slug}/#${header.id}`}>{numberItem}. {header.value}</AnchorLink>
                        </ListItem>
                    )
                })}
            </ListNavs>
        </NavWrapper>
    )}
    </>
    
   )
}

const NavWrapper = styled.div`
  background-color:white;
  position:fixed;
  border-radius: 16px;
  padding: 2rem .5rem;
  margin-bottom: 4rem;
  top:160px;
  right:6rem;
  width: 100%;
  max-width: 370px;
  display:flex;
  flex-direction:column;
  z-index:50;
  @media ${device.tablet} {
    width:100%;
    left:0;
    padding-left:72px;
    top:64px;
  }
  @media ${device.mobileL} {
    padding-left:16px;
  }
  a {
      margin-bottom:16px;
      font-size:14px;
      line-height:16px;
      font-family:Inter,system-ui,sans-serif;
      color: #3e444e !important;
      transition:all .4s ease-in-out;
      cursor:pointer;
      ::before {
        content: "→";
        position: absolute;
        left: 0;
        color: #7b85a0;
        opacity: .5;
        transition: color .5s ease;
      }
      :hover {
        color: #4364af !important;
      }
      :focus {
        color: #4364af !important;
        transition:all .4s ease-in-out;
        ::before {
            content: "\\25CF";
            color: #4364af;
            opacity: 1;
            left: 0;
            position: absolute;
        }
      }
  }
`

const HeaderNav = styled.h5`
    font-size: .6875rem;
    line-height: 1rem;
    text-transform: uppercase;
    color: #9ca3b8;
    margin-bottom: 1rem;
`

const ListNavs =  styled.ul`
    margin-left:0;
`

const ListItem = styled.li`
    position: relative;
    font-size: .875rem;
    line-height: 1rem;
    font-weight: 600;
    margin-bottom: .5rem;
    padding-left: 1.5rem;
    list-style-type: none !important;
   
`


BlogNav.propTypes = {
  
}

BlogNav.defaultProps = {
  
}



export default BlogNav



