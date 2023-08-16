import React from 'react'
import { UseResizeWindow } from '../../../hooks/UseResizeWindow'
import Slider from 'react-slick'
/*components*/
import SinglePost from './singlePost'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
/*json*/
import posts from '../../../../json/posts.json'
import { theme } from '../../../constants/theme.constants'
import { SectionTitle } from '../../../constants/styled.components.constants'

function PostProjects() {
  const { width, breakpoint } = UseResizeWindow()
  const dataList = posts

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      {width > breakpoint ? (
        <MainWrapper id='posts'>
          <SectionTitle>במיוחד בשבילך</SectionTitle>
          <SubTitle>כתבות מובילות של משפיענים בתחום הבניה המשתפות בידע, תובנות והרעיונות מדהימים.</SubTitle>

          <CardsWrapper>
            {dataList.posts &&
              dataList?.posts
                ?.slice(0, 3)
                .map((post, index) => (
                  <SinglePost
                    key={index}
                    id={post.id}
                    title={post.title}
                    postContent={post.postContent}
                    image={post.image}
                  />
                ))}
          </CardsWrapper>
        </MainWrapper>
      ) : (
        <MobileWrapper>
          <>
            <SectionTitle style={{ paddingBottom: '10px' }}>במיוחד בשבילך</SectionTitle>
            <Slider {...settings}>
              {dataList.posts &&
                dataList?.posts?.map((post, index) => (
                  <SinglePost
                    key={index}
                    id={post.id}
                    title={post.title}
                    postContent={post.postContent}
                    image={post.image}
                  />
                ))}
            </Slider>
          </>
        </MobileWrapper>
      )}
    </>
  )
}

export default PostProjects
const MainWrapper = styled('div')({
  background: Colors.lightBrownSecond,
  padding: '2rem 2rem 4rem 2rem',
  margin: '4rem 0 0 0',

  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
const CardsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap'
  }
})
const SubTitle = styled('h2')({
  fontSize: '26px',
  fontWeight: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.cardText,
  padding: '0 0 2rem 0'
})
const MobileWrapper = styled('div')({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '4rem 10px',
    '& .MuiPaper-root-jrVkwW ': {
      margin: '0 7px'
    },
    '&.MuiAccordionDetails-root-iJwHzO': {
      padding: '0px 5px 16px'
    },
    '& h2.mobile-view': {
      display: 'none'
    },
    '& .MuiAccordionDetails-root-iJwHzO': {
      padding: '10px'
    },
    '& .slick-slider.slick-initialized': {
      boxShadow: '3px 4px 7px 2px rgba(0,0,0, 0.15)',
      borderRadius: '20px',
      '& .slick-dots li button:before': {
        fontSize: '20px',
        width: '20px',
        height: '20px'
      },
      '& .slick-dots': {
        bottom: '-6vh',
        direction: 'rtl'
      }
    },
    '& .MuiButtonBase-root-JvZdr ': {
      padding: '0 0 1rem 0'
    }
  }
})
