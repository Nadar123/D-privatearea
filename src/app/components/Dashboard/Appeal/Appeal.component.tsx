import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UseResizeWindow } from '../../../hooks/UseResizeWindow'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks'
/*components*/
import { Button, styled } from '@mui/material'
import MobileAccordion from '../../UI/MobileAccordion/MobileAccordion'
import AccordionContentCorrespondences from './Correspondences/AccordionContentCorrespondences'
/*styles*/
import {
  ButtonText,
  DimanicText,
  FlexWrapperTop,
  Plus,
  SectionTitle
} from '../../../constants/styled.components.constants'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'
import { ROUTES } from '../../../constants/routes.constants'
import Loader from '../../UI/Loader/Loader'
import { setTimeStamp } from '../../../state/features/user.feature'

const Appeal = () => {
  const navigate = useNavigate()
  const { width, breakpoint } = UseResizeWindow()
  const { allQuestionsData, loading } = useAppSelector((state) => state.user)

  const toNewAppealChat = () => {
    navigate({
      pathname: ROUTES.NEWCHAT,
      search: '?new=1'
    })
  }

  if (loading) {
    return <Loader />
  }
  return (
    <>
      {width > breakpoint ? (
        <MainWrapper id='appeal'>
          <FlexContainerBetween>
            <FlexWrapperTop>
              <SectionTitle>פניות </SectionTitle>

              <Button variant='outlined'>
                <Plus>+</Plus>
                <a onClick={toNewAppealChat}> פנייה חדשה</a>
              </Button>
            </FlexWrapperTop>
            <Link to='onlinechat'>
              <DimanicText>הצגת כל הפניות</DimanicText>
            </Link>
          </FlexContainerBetween>

          {allQuestionsData ? (
            <WrapperList>
              {allQuestionsData &&
                allQuestionsData
                  ?.slice(0, 3)
                  ?.map((item: any, index: any) => (
                    <AccordionContentCorrespondences
                      statusID={item.statusID}
                      key={index}
                      callID={item.callID}
                      createDate={item.createDate}
                      descrption={item.descrption}
                      subject={item.subject}
                    />
                  ))}
            </WrapperList>
          ) : (
            <p>אין מידע רלוונטי</p>
          )}
        </MainWrapper>
      ) : (
        <MobileWrapper>
          <MobileAccordion title={'פניות'}>
            <FlexContainerBetween>
              <FlexWrapperTop>
                <Button variant='outlined'>
                  <Plus>+</Plus>
                  <ButtonText onClick={toNewAppealChat}>פנייה חדשה </ButtonText>
                </Button>
              </FlexWrapperTop>
              <Link to='onlinechat'>
                <DimanicText>הצגת כל הפניות</DimanicText>
              </Link>
            </FlexContainerBetween>
            {allQuestionsData ? (
              <WrapperList>
                {allQuestionsData &&
                  allQuestionsData
                    .slice(0, 3)
                    .map((item: any, index: any) => (
                      <AccordionContentCorrespondences
                        key={index}
                        callID={item.callID}
                        createDate={item.createDate}
                        descrption={item.descrption}
                        subject={item.subject}
                      />
                    ))}
              </WrapperList>
            ) : (
              <p>אין מידע רלוונטי</p>
            )}
          </MobileAccordion>
        </MobileWrapper>
      )}
    </>
  )
}

export default Appeal
const MainWrapper = styled('div')({
  padding: '4rem 2rem 0 2rem',
  [theme.breakpoints.down('xl')]: {
    padding: '4rem 1rem 0 1rem'
  }
})
export const WrapperList = styled('div')({
  height: '100%',
  padding: '0 0px',
  [theme.breakpoints.down('md')]: {
    padding: '0'
  }
})

const FlexContainerBetween = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '0 0 8px 0'
  },
  '& .appeal-event': {
    border: 'none',
    '& p': {
      fontSize: '22px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: Colors.black
    },
    '&:hover': {
      border: `1px solid ${Colors.lightBlue}`,
      '& p:hover': {
        color: Colors.lightBlue
      }
    }
  }
})

const MobileWrapper = styled('div')({
  [theme.breakpoints.down('md')]: {
    display: 'block',
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
    }
  }
})
