import React, {useState} from "react"
import styled, {keyframes} from "styled-components"
import SectionSideBySide from "../Sections/SectionSideBySide"
import { XperiencifyImage } from "../BlockElements/BlockElements"
import SubscribeSection from "../SubscribeSection/SubscribeSection"
import { Container } from "../layoutComponents"
import { device } from "../../styles/constants"
import Modal from 'react-modal';




const HeroSection = ({
  width,
  headline,
  summary,
  productName,
  callTa,
  heroImage,
  reversed,
  small,
  ...otherProps
}) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  
  return (
    <Container>
      <SectionSideBySide
        contentSide={
          <SubscribeSection 
            title={otherProps.title}
            text={otherProps.text}
            ctaText={otherProps.ctaText}
            ctaInfo={otherProps.ctaInfo}
            type="big"
          />
        }
        imageSide={
          <HeroImageSide>
            <ScreenshotVideo>
              <XperiencifyImage
                src={heroImage?.localFile?.childImageSharp || heroImage?.source_url || heroImage}
                alt="hero image"
              />
              <ButtonPlay>
                <ButtonInner onClick={openModal}>
                  <img src="/icon-play-white.svg" alt="icon-play" />
                </ButtonInner>
              </ButtonPlay>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                
                contentLabel="Example Modal"
                style={{
                overlay: {
                    zIndex:100000,
                    position: 'fixed',
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.9)'
                  },
                  content: {
                    position: 'relative',
                    background: 'transparent',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    outline: 'none',
                    width:'100%',
                    padding:'0',
                    border:'none',
                    inset:'0'
                  }
                }}
              >
                <ModalContent>
                    <ButtonClose onClick={closeModal}></ButtonClose>
                    <WrapperIframe>
                    <ContainerIframe>
                        <StyledIframe className="responsive-iframe" src="https://fast.wistia.com/embed/medias/labgrajjl6"></StyledIframe>
                    </ContainerIframe>
                    </WrapperIframe>
                </ModalContent>
              </Modal>
            </ScreenshotVideo>
            
          </HeroImageSide>
        }
        reversed={reversed}
        small={small}
      />
    </Container>
  )
}

export default HeroSection

const HeroImageSide = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  @media (max-width: 991px) {
    margin-bottom: 16px;
  }
  @media (max-width: 576px) {
    margin-bottom: 0;
  }
`

const ScreenshotVideo = styled.div`
  position: absolute;
  left:15%;
  top: 80px;
  width: 1030px;
  box-shadow: 0 16px 72px #9ba2bd;
  display: block;
  border-radius: 16px;
  margin: 0 auto;
  overflow: hidden;
  img {
    border-top: 1px solid #fff;
    display: block;
  }
  @media ${device.tablet} {
    position: relative;
    margin-bottom:32px;
    left:0;
    top:0;
    width:auto;
  }
`

const Bounce = keyframes`
    to { transform: scale(1.1); } 
`;

const ButtonPlay = styled.a`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  z-index: 0;
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  margin: auto;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
`

const ButtonInner = styled.div`
  width: 96px;
  height: 96px;
  background-color: #4CBB83;
  box-shadow: 0 8px 24px #9ba2bd;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation:${Bounce} 1.5s infinite alternate;
  img {
    border-top:none;
    width: 28px;
    margin-left: 5px;
    margin-bottom:0;
  }
  @media ${device.mobileL} {
    width: 48px;
    height: 48px;
    img {
      width: 16px;
      margin-left: 3px;
    }
  }
  
`

const ButtonClose = styled.a`
    padding:16px 32px;
    position: fixed;
    right: 0;
    top: 0;
    color: gray;
    font-family: "Open Sans",sans-serif;
    font-weight: 100;
    outline:none;
    border:none;
    cursor:pointer;
    :hover {
      color:white;
    }
    ::before {
      display: inline-block;
      content: "\\00d7"; /* This will render the 'X' */
      font-size:40px;
    }
`
const ContainerIframe = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  top:50%;
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none !important;
`

const WrapperIframe = styled.div`
  width:70%;
  height:70%;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  position:relative;
`


