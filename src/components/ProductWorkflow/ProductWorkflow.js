import React from "react"
import styled from "styled-components"
import { device } from "../../styles/constants"
import ProductBlock from "../ProductBlock/ProductBlock"
import { Container } from "../layoutComponents"
const ProductWorkflow = ({
  stepsData,
  titleWorkflow,
  descriptionWorkflow
}) => {
  return (
    <>
      <WorkflowWrapper>
        <Container>
            <IntroSection>
                {titleWorkflow && (
                    <h2>{titleWorkflow}</h2>
                )}
                {descriptionWorkflow && (
                    <p>{descriptionWorkflow}</p>
                )}
            </IntroSection>
            {
                stepsData?.map((stepItem,index) => {
                    return (
                        <div key={index}>
                            {stepItem && (
                                <ProductBlock
                                    key={index} 
                                    stepName={stepItem.stepName}
                                    stepText={stepItem.stepText}
                                    stepTitle={stepItem.stepTitle}
                                    testimonialAuthorIcon={stepItem.testimonialAuthorIcon}
                                    testimonialStepAuthorName={stepItem.testimonialStepAuthorName}
                                    testimonialStepAutorPosition={stepItem.testimonialStepAutorPosition}
                                    testimonialStepText={stepItem.testimonialStepText}
                                    stepReverse={stepItem.stepReverse}
                                    stepVisualType={stepItem.stepVisualType}
                                    stepVisual={stepItem.stepVisual}
                                />
                            )}
                        </div>
                    )
                })
            }
        </Container>
       
      </WorkflowWrapper> 
      
    </>
  )
}

export default ProductWorkflow

ProductWorkflow.propTypes = {
 
}

ProductWorkflow.defaultProps = {

}

const WorkflowWrapper = styled.div`
    padding: 128px 0;
    @media ${device.tablet} {
        padding: 72px 0;
    }
`


const IntroSection = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width:100%;
    max-width:1008px;
    h2 {
        font-size:48px;
        margin-bottom:24px;
        color:#3E444E;
        font-family:Inter,system-ui,sans-serif;
        @media ${device.tablet} {
            font-size:24px;
            margin-bottom:16px;
        }
    }
    p {
        font-size:20px;
        margin-bottom:16px;
        color:#7B85A0;
        font-family:Inter,system-ui,sans-serif;
    }
`







    

    

    