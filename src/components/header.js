import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <Link to="/">
        <h1>
          Go Home
        </h1>
      </Link>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled(Header)`
  color: var(--white);
  background: var(--primary-color);
  padding: 1rem 0;
  margin-bottom: 1rem;
  h1 {
    margin: 0;
    font-family:Inter,system-ui,sans-serif;
    color: white;
    font-size: 16px;
    font-weight:400;
  }
`

export default StyledHeader
