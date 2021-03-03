import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
import HeroSection from "../components/HeroSections/HeroSection"
import TrustBar from "../components/TrusBar/TrustBar"

const heroIndexData = {
  contentData:{
    title:"Turn more leads into revenue",
    text:"High adoption, high performance. <br /> Get the all-in-one CRM built just for sales teams.",
    ctaText:"Start Your Free Trial",
    ctaInfo:"14-day free trial. No credit card required.",
    textTrial:""
  },
  imageData:{
    imageSrc:"/close-crm-screenshot.svg"
  }
}

const trustBarData = {
  headline:"The world’s most ambitious startup and SMB sales teams accelerate their growth with Close",
  logoImages:[
    "./500startups-logo-mono.svg","/zapier-logo-mono.svg","/customerio-logo-mono.svg","/toggl-logo-mono.svg","/naturebox-logo-mono.svg","/domo-logo-mono.svg"
  ]
}

const IndexPage = () => {
    
  return (
  <Layout>
    
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HeroSection 
        heroImage={heroIndexData.imageData.imageSrc}
        title={heroIndexData.contentData.title}
        text={heroIndexData.contentData.text}
        ctaText={heroIndexData.contentData.ctaText}
        ctaInfo={heroIndexData.contentData.ctaInfo}
      />
      <TrustBar 
        headline={trustBarData.headline}
        logoImages={trustBarData.logoImages}
      />
    
  </Layout>
  )
}


export default IndexPage
