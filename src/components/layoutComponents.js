import styled from "styled-components"

export const MainWrapper = styled.div`
  margin-top: 128px;
  display: flex;
  position:relative;
  overflow:hidden;
  min-height: 100vh;
  flex-direction: column;
  @media (max-width: 425px) {
    margin-top: 96px;
  }
`

export const Container = styled.div`
    padding: 0 2rem;
    width: 100%;
    margin: 0 auto;
    max-width: 1170px;
    @media (max-width: 768px) {
      padding: 0 20px;
    }
`

export const GradientBackground = styled.div`
  position: absolute;
  width: 200%;
  height: 1600px;
  transform: skewY(
    -5deg
  );
  z-index: -1;
  top: 300px;
  background: #f2f3f9;
  background: linear-gradient(0deg, #fff 0, #f2f3f9 100%);
`
export const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : "initial")};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? props.wrap : "initial")};
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  @media screen and (max-width: 768px) {
    flex-direction: ${props => (props.mobile ? "column" : "row")};
  }
`
export const Column = styled.div`
  flex: ${props => (props.flex ? props.flex : "initial")};
  flex-direction: column;
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  margin: ${props => (props.margin ? props.margin : "0")};
  width: ${props => (props.width ? props.width : "auto")};
`
