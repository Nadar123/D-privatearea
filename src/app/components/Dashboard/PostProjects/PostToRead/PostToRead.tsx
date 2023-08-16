import React from 'react'
import Post from '../../../../../json/post.json'
import { useParams } from 'react-router-dom'

import { Button, styled } from '@mui/material'
import { Colors } from '../../../../constants/styles.constants'
import { theme } from '../../../../constants/theme.constants'
import {
  Arrow,
  FlexWrapperTop,
  ItemText,
  PostText,
  PostTitle,
  TextDimri
} from '../../../../constants/styled.components.constants'

function PostToRead() {
  const { id } = useParams() //get the URL parameters

  return (
    <>
      <MainWrapper>
        <InnerFlex>
          <TextDimri>איזור אישי</TextDimri>
          <Arrow> {'>'} </Arrow>
          <InnerText>{id}כותרת דינמית</InnerText>
        </InnerFlex>
        <FlexWrapperTop></FlexWrapperTop>
      </MainWrapper>
      <PageWrapper>
        {Post.post &&
          Post.post.map((item, index) => (
            <React.Fragment key={index}>
              <div className='wrapper'>
                <PostTitle>{item.title}</PostTitle>
                <TextDimri>{item.textTitle}</TextDimri>
                <InnerWrapper>
                  <ItemText>{item.author}</ItemText> <span style={{ padding: '0 3px' }}>{'/'} </span>{' '}
                  <ItemText>{item.date}</ItemText>
                </InnerWrapper>
                <ImageWrapper>
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px'
                    }}
                    src={item.image}
                    alt={item.title}
                  />
                </ImageWrapper>
                <SubTitle>{item.subTitle}</SubTitle>
                <TextDimri>{item.content}</TextDimri>
              </div>
            </React.Fragment>
          ))}
      </PageWrapper>
    </>
  )
}

export default PostToRead

const PageWrapper = styled('div')({
  padding: '7rem 7rem 0 7rem',
  width: '48%',
  margin: 'auto',
  [theme.breakpoints.down('md')]: {
    padding: '0 10px'
  }
})

const MainWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  width: '100%',
  padding: '5rem 2rem 0 2rem',
  [theme.breakpoints.down('md')]: {
    padding: '0 10px'
  }
})

const InnerFlex = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: ' 0 0 1.5rem 0',
  [theme.breakpoints.down('md')]: {
    padding: '0'
  }
})
const InnerWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '0 0 0 0',
  [theme.breakpoints.down('md')]: {
    padding: '0'
  }
})
const InnerText = styled('div')({
  fontSize: '18px',
  fontWeight: '600',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px'
  }
})

const ImageWrapper = styled('div')({
  width: '650px',
  height: '190px',
  margin: '2rem 0',
  [theme.breakpoints.down('md')]: {}
})

const PostImage = styled('div')({
  width: '100%',
  height: 'auto',
  borderRadius: '20px',

  [theme.breakpoints.down('md')]: {}
})
const SubTitle = styled('div')({
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.black,
  margin: '0',
  [theme.breakpoints.down('md')]: {}
})
