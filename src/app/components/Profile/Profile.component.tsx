import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks'
import { ROUTES } from '../../constants/routes.constants'
import { Link, useNavigate } from 'react-router-dom'
/*component*/
import IconButton from '@mui/material/IconButton'
import Loader from '../../components/UI/Loader/Loader'
import { Grid, styled, Tooltip } from '@mui/material'
import { DimanicText, LightTitle, SectionTitle, TextDimri } from '../../constants/styled.components.constants'
import { Help } from '../../constants/icons.constants'
/*style*/
import { theme } from '../../constants/theme.constants'
import { Colors } from '../../constants/styles.constants'
import InnerContent from '../UI/InnerContent/InnerContent'

const Profile = () => {
  const tooltips = useAppSelector((state) => state.global?.tooltipsList?.tooltipsList)
  const { personalInfo, loading } = useAppSelector((state) => state?.user)

  const profileClientDetails = tooltips?.find((item: { key: string }) => item.key === 'profile_client_details')
  const profileaddresses = tooltips?.find((item: { key: string }) => item.key === 'profile_addresses')
  const profileContacts = tooltips?.find((item: { key: string }) => item.key === 'profile_contacts')

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Grid
        item
        sx={{
          display: 'block',
          width: '100%',
          margin: '6rem 0 0 0',
          padding: '0 2rem',
          '& .customHeight': {
            minHeight: '222px'
          },
          [theme.breakpoints.down('md')]: {
            padding: '1rem 0 0 0',
            display: 'block',
            margin: '7rem 12px 0 13px !important'
          },
          [theme.breakpoints.down('xl')]: {
            margin: '5rem 0 0 0'
          }
        }}
        container
        spacing={3}
      >
        <Link to={`${ROUTES.DASHBOARD}`}>
          <TextDimri> חזרה לאיזור אישי</TextDimri>
        </Link>
        <TitleWrapper
          style={{
            padding: '2rem 0px 0 0px',
            [theme.breakpoints.down('md')]: {
              padding: '1rem 0px 0 0px'
            }
          }}
        >
          <SectionTitle style={{ padding: '0rem 0px 0 10px' }}> פרטים אישיים </SectionTitle>
          <Tooltip title={profileClientDetails?.value || ''}>
            <IconButton style={{ padding: '0' }}>
              <Help />
            </IconButton>
          </Tooltip>
        </TitleWrapper>

        <CardWrap>
          <>
            {personalInfo?.personalInfo && (
              <MainWrapper>
                <div className='profile-wrapper'>
                  <LightTitle className='profile'>פרטי המשתמש</LightTitle>
                </div>
                <FlexWrapper>
                  <InnerContent title='שם' subTitle={personalInfo?.personalInfo?.fullName} />
                  <InnerContent title='דוא״ל' subTitle={personalInfo?.personalInfo?.email} />
                  <InnerContent title='ת.ז.' subTitle={personalInfo?.personalInfo?.id} />
                  <InnerContent title='טלפון' subTitle={personalInfo?.personalInfo?.id} />
                </FlexWrapper>
              </MainWrapper>
            )}
          </>
        </CardWrap>
        <TitleWrapper style={{ padding: '2rem 0px 0 0px', borderTop: `1px solid ${Colors.softBrown}` }}>
          <SectionTitle style={{ padding: '0rem 0px 0 10px' }}> אנשי קשר</SectionTitle>
          <Tooltip title={profileaddresses?.value || ''}>
            <IconButton style={{ padding: '0' }}>
              <Help />
            </IconButton>
          </Tooltip>
        </TitleWrapper>

        <>
          <React.Fragment>
            {personalInfo?.contactList &&
              personalInfo.contactList?.map((item: string | any, index: number) => (
                <CardWrap className='contact-list'>
                  <CardWrapInner>
                    <InnerContent title='שם' subTitle={item.fullName} />
                    <InnerContent title='דוא״ל' subTitle={item.email} />
                    <InnerContent title='ת.ז.' subTitle={item.id} />
                    <InnerContent title='טלפון' subTitle={item.phoneNumber} />
                  </CardWrapInner>
                </CardWrap>
              ))}
          </React.Fragment>
          <React.Fragment>
            <TitleWrapper style={{ padding: '2rem 0px 0 0px', borderTop: `1px solid ${Colors.softBrown}` }}>
              <SectionTitle style={{ padding: '0rem 0px 0 10px' }}> כתובת </SectionTitle>
              <Tooltip title={profileContacts?.value || ''}>
                <IconButton style={{ padding: '0' }}>
                  <Help />
                </IconButton>
              </Tooltip>
            </TitleWrapper>

            <CardWrap className='flex'>
              <InnerContent title='רחוב' subTitle={personalInfo?.billing?.street} />
              <InnerContent title='עיר' subTitle={personalInfo?.addressData?.city} />
            </CardWrap>
          </React.Fragment>
        </>
      </Grid>
    </>
  )
}

export default Profile
const MainWrapper = styled('div')({
  width: '100%'
})
const FlexWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '60%',

  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
})
const CardWrap = styled('div')({
  background: '#eeece7',
  padding: '1rem',
  width: '100%',
  borderRadius: '10px',
  margin: '0 0 3rem 0 ',
  '&.flex': {
    display: 'flex'
  },
  '&.contact-list': {
    margin: '0 0 1rem 0 '
  },
  [theme.breakpoints.down('md')]: {}
})
const CardWrapInner = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '60%',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    width: '100%'
  },
  '&.address': {
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      flexWrap: 'wrap'
    }
  }
})
const TitleWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center'
})
