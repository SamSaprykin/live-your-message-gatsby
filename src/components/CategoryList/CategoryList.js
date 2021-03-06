import React from "react"
import styled from "styled-components"
import { device, colors } from "../../styles/constants"
import { Link } from "gatsby"

const CategoryList = ({
  categories,
  listingType,
}) => {
  return (
    
    <CategoryContent>
      <ScrollWrapper>
        <CategoryItem
          to={`${listingType}`}
          activeClassName="active"
        >
          Show all
        </CategoryItem>
        {categories.map(category => {
          const slug = `${(category).replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()}`
          return (
            category.toLowerCase() != "uncategorized" && (
              <CategoryItem
                key={category.toLowerCase()}
                partiallyActive={true}
                to={`${listingType}/${slug}`}
                activeClassName="active"
              >
                {category}
              </CategoryItem>
            )
          )
        })}
      </ScrollWrapper>
    </CategoryContent>
  )
}

export default CategoryList

CategoryList.propTypes = {
 
}

CategoryList.defaultProps = {

}


export const CategoryContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top:16px;
  @media ${device.laptop} {
    padding: 24px 30px;
    justify-content: space-between;
  }
  @media ${device.tablet} {
    padding: 16px 30px 0;
  }
  .active {
    color: #4364af;
  }
  @media ${device.mobileL} {
    width: 100%;
    height: 100%;
    padding: 0;
    justify-content: flex-start;
  }
`

export const CategoryItem = styled(Link)`
  font-family:Inter,system-ui,sans-serif;
  color:#7b85a0;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 60px;
  margin: 0 20px;
  :hover {
    color: #4364af;
  }
  @media ${device.tablet} {
    margin: 0;
  }
  @media ${device.mobileL} {
    line-height: 32px;
  }
`

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media ${device.laptop} {
    padding: 24px 0;
    justify-content: space-between;
  }
  @media ${device.tablet} {
    margin: 0;
    padding-bottom: 0;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  @media ${device.mobileL} {
    margin-top:30px;
    padding: 0 12px;
    flex-direction:column;
    align-items:flex-start;
  }
`






    

    

    