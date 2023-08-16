import React from 'react'
import { Link } from 'react-router-dom'
/*components*/
import Button from '@mui/material/Button'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'
import { PostTitle, PostText } from '../../../constants/styled.components.constants'

interface IPostProjects {
  title: string
  postContent: string
  image: string
  id: number | string
}

function singlePost({ id, title, postContent, image }: IPostProjects) {
  return (
    <>
      <CardWrapper>
        <CardImageContainer style={{ backgroundImage: `url(${image})` }}></CardImageContainer>
        <Content>
          <PostTitle>{title}</PostTitle>
          <PostText>{postContent}</PostText>

          <Button disableRipple size='small' sx={{ padding: 0 }}>
            <ButtonText sx={{}}>
              <Link to={`/dashboard/singlepost/${id}`} className='link-to-post'>
                למאמר המלא
                <ArrowWrapper>&#8592;</ArrowWrapper>
              </Link>
            </ButtonText>
          </Button>
        </Content>
      </CardWrapper>
    </>
  )
}
export default singlePost

const CardWrapper = styled('div')({
  position: 'relative',
  boxShadow: '0 4px 8px -2px rgba(71, 59, 51, 0.24)',
  width: '30%',
  minHeight: '280px',
  margin: '0',
  '& .link-to-post': {
    color: Colors.white,
    textDecoration: 'none'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
  '& .MuiButton-textPrimary:hover': {
    backgroundColor: 'none',
    background: 'none'
  }
})

const CardImageContainer = styled('div')({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: '10px 10px 0 0',
  width: '100%',
  minHeight: '280px',
  height: '100%',
  filter: 'contrast(.9) brightness(1)',
  cursor: 'pointer',
  transition: 'filter 0.2s ease-in-out',
  '&:hover': {
    filter: 'contrast(.6) brightness(1)'
  },
  [theme.breakpoints.down('md')]: {
    borderRadius: '16px 16px 0 0',
    minHeight: '250px',
    height: '100%'
  }
})

const Content = styled('div')({
  padding: '1rem 1.5rem',
  background: Colors.white,
  zIndex: '9',
  color: Colors.white,
  [theme.breakpoints.down('md')]: {
    bottom: '-13.7rem',
    padding: '16px',
    textAlign: 'right',
    color: Colors.black
  }
})

const ButtonText = styled('p')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '22px',
  fontWeight: '400',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.white,
  background: Colors.black,
  border: `1px solid ${Colors.black}`,
  borderRadius: 24,
  margin: '1rem 0 8px 0',
  padding: '3px 10px',
  zIndex: '12',
  '&:hover': {
    color: Colors.black,
    background: Colors.white,
    [theme.breakpoints.down('md')]: {
      background: Colors.white,
      color: Colors.black
    },
    '& .link-to-post': {
      color: Colors.black
    }
  },
  '&:active': {
    background: Colors.transparent
  },
  [theme.breakpoints.down('md')]: {
    background: Colors.black,
    color: Colors.white,
    flexDirection: 'row-reverse',
    padding: '5px 18px',
    borderRadius: '24px'
  }
})

const ArrowWrapper = styled('span')({
  display: 'inline-block',
  padding: '0 5px'
})
