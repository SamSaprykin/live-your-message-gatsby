import React, {useState} from "react"
import { navigate } from 'gatsby'
import axios from "axios"
import styled, { keyframes }  from "styled-components"
import { device } from "../../styles/constants"



const SubscribeSection = ({data}) => {
  
  const [inputs, setInputs] = useState({
    email: "",
  })
  const [errors, setErrors] = useState({
    emailError: "",
  })
  const handleOnChange = event => {
    event.persist()
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
    
  }
  const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmailInput = event => {
    event.persist()
    if(inputs.email.length === 0) {
      setErrors(prev => ({
        ...prev,
        emailError: "E-mail is required "
      }))
    } else if(inputs.email.length < 2 || re.test(inputs.email) === false){
      setErrors(prev => ({
        ...prev,
        emailError: "Please provide a valid e-mail address."
      }))
    } else {
      setTimeout(() => {
        setErrors(prev => ({
          ...prev,
          emailError: ""
        }))
      }, 500)
     
    }
  }
  const handleOnSubmit = event => {
    event.preventDefault();
    setServerState({ submitting: true });
    
    axios({
      method: "POST",
      url: `https://formspree.io/f/${process.env.GATSBY_FORMSPREE_SUBSCRIBE_FORM_ID}`,
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Thanks!");
        navigate('/thank-you');
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
      });
  };
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      setInputs({
        email: "",
      })
    }
  }
  return (
    <SubscribeWrapper>
        <FormInfo>
          <SubscribeSubHead>
            WEEKLY SALES NEWSLETTER
          </SubscribeSubHead>
          <SubscribeTitle>
            Actionable sales advice
          </SubscribeTitle>
          <SubscribeFormText>
            Get actionable sales advice read by over 200,000 sales professionals every week.  
          </SubscribeFormText>
        </FormInfo>
        
        <SubscribeForm 
          onSubmit={handleOnSubmit}
          method="post"
        >
          <InputContainer>
            <StyledInput 
              placeholder="email@website.com" 
              onChange={handleOnChange}
              onBlur={checkEmailInput}
              type="email" 
              id="email" 
            />
            <button type="submit" >
              Subscribe
            </button>
          </InputContainer>
          <FormTextError error={errors.emailError}><span>{errors.emailError}</span></FormTextError>
          <AgreeText>
            <input type="checkbox" />
            <p>I agree to receive communications from Close. I can unsubscribe at any time.</p>
          </AgreeText>
        </SubscribeForm>
    </SubscribeWrapper>
    
    
  )
}
  




export default SubscribeSection




const SubscribeWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:80px 0 240px;
`

const FormInfo = styled.div`
    width:100%;
    max-width:680px;
    margin-bottom:32px;
    text-align:center;
    font-family:Inter,system-ui,sans-serif;
` 

const SubscribeSubHead = styled.h5`
    color: #4364af;
    margin-bottom:16px;
    font-size:16px;
    font-family:Inter,system-ui,sans-serif;
    font-weight:600;
`

const SubscribeTitle = styled.h2`
    font-size:48px;
    line-height: 64px;
    margin-bottom:24px;
    font-weight: 600;
    color: #3e444e;
    font-family:Inter,system-ui,sans-serif;
    @media ${device.tablet} {
      font-size:24px;
      line-height: 32px;
    }
`
const SubscribeFormText = styled.p`
    font-size:24px;
    line-height:32px;
    margin-bottom:16px;
    color: #7b85a0;
    font-weight:400;
    font-family:Inter,system-ui,sans-serif;
    @media ${device.tablet} {
      font-size:16px;
      line-height:24px;
    }
    @media ${device.mobileL} {
      font-size:15px;
      line-height:20px;
    }
`





const SubscribeForm = styled.form`
    margin:0 auto;
    width:100%;
    max-width:500px;
    display:flex;
    flex-direction:column;
    position:relative;
    z-index:2;
    @media ${device.mobileL} {

    }
`





const InputContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
    height:auto;
    position:relative;
    height:46px;
    
    button {
        height:46px;
        font-family: sans-serif;
        line-height: 1.3em;
        letter-spacing:0.1px;
        font-size:16px;
        background: rgb(67, 100, 175);
        color: rgb(255, 255, 255);
        border: 0px solid rgb(67, 100, 175);
        width: 100%;
        max-width:101px;
        position:relative;
        right:0px;
        outline:none;
        cursor:pointer;
        padding-left: 10px !important;
        padding-right: 10px !important;
        padding-top: 8px !important;
        padding-bottom: 8px !important;
        border-radius: 0px 3px 3px 0px !important;
    }
    @media ${device.mobileL} {
        height:70px;
    }
`


const StyledInput = styled.input`
    width:100%;
    background-color:#1A6AFF;
    color: #2F2F2F !important;
    background: #FFF;
    font-weight: 400 !important;
    border: 1px solid #DBDBDB !important;
    border-radius: 3px 0px 0px 3px !important;
    border-right: 0px !important;
    outline:none;
    padding: 12px 0px 10px 10px !important;
    font-size:17px;
    line-height:36px;
    height:46px;
    font-family:Inter,system-ui,sans-serif;
    color:#E8ECF3;
    font-weight:400;
    padding-bottom:4px;
    box-sizing:border-box;
    @media ${device.mobileL} {
     
    }
    
`



const FormTextError = styled.div`
  height:24px;
  position:relative;
  overflow:hidden;
  margin-top:12px;
  span {
      color:#FA4E4E;
      font-family:Inter,system-ui,sans-serif;
      bottom: ${({ error }) => {
        if (error === "") return "24px"
        if (error !== "") return "4px"
      }};
      opacity: ${({ error }) => {
        if (error === "") return "0"
        if (error !== "") return "1"
      }};
      display:block;
      position:absolute;
      transition: all 1s ease-in-out;
      font-size:14px;
      width:100%;
  }
`

const AgreeText = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-start;
  max-width:500px;
  align-items:center;
  p {
    font-size:13px;
    font-family: sans-serif;
    margin-bottom:0;
    line-height:13px;
  }
  input {
    margin-right:6px;
  }
`