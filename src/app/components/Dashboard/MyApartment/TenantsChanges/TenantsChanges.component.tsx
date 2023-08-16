import React from 'react'
/*comopnents*/
import AccordionTenantsChangesContent from './AccordionTenantsChangesContent'
/*styles*/
import { Button, IconButton, styled, Tooltip } from '@mui/material'
import { Info } from '../../../../constants/icons.constants'
import { useAppSelector } from '../../../../hooks/redux.hooks'
import { Colors } from '../../../../constants/styles.constants'
import {
  FlexWrapperTop,
  SectionTitle,
  Plus,
  ButtonText,
  ItemText,
  DimanicText,
  WrapperList
} from '../../../../constants/styled.components.constants'
import { theme } from '../../../../constants/theme.constants'

function TenantsChanges() {
  const tyenantsData = useAppSelector((state) => state.finishingMaterials?.changes?.changes)

  return (
    <MainWrapper>
      <FlexWrapperTop className='mobile-view'>
        <SectionTitle>שינויי דיירים</SectionTitle>
      </FlexWrapperTop>
      <NextMeetingWrapper>
        <NextMeetingInner>
          <Tooltip title='בלחיצה תועבר לאתר הבית לעמוד צור קשר'>
            <IconButton style={{ padding: '0' }} className='icon-button'>
              <Info />
            </IconButton>
          </Tooltip>
          <InnerContianer>
            <LinkTo href='https://www.dimri.co.il/%d7%a6%d7%95%d7%a8-%d7%a7%d7%a9%d7%a8/' target='_blank'>
              <> לקביעת פגישה</>
            </LinkTo>
            {/* <DimanicText>משרדי דימרי בתאריך 31.12.22 בשעה 15:45</DimanicText> */}
          </InnerContianer>
        </NextMeetingInner>
      </NextMeetingWrapper>
      <WrapperList className='srcoll'>
        {tyenantsData &&
          tyenantsData.map((data: any, index: React.Key | number) => (
            <AccordionTenantsChangesContent
              key={index}
              Date={data?.changesPreview?.Date}
              ChangeEstimateID={data?.changesPreview?.ChangeEstimateID}
              Price={data?.changesPreview?.Price}
              TotalWorkingDays={data?.changesPreview?.TotalWorkingDays}
              changesDetails={data?.changesPreview?.changesDetails}
            />
          ))}
      </WrapperList>
    </MainWrapper>
  )
}

export default TenantsChanges

const MainWrapper = styled('div')({
  padding: '0 1rem 0 0',
  [theme.breakpoints.down('md')]: {
    padding: '0'
  },
  '& .sc-hhOBVt.iyUMUM': {
    padding: '0'
  }
})
const NextMeetingWrapper = styled('div')({
  background: Colors.grayBg,
  border: `1px solid ${Colors.grayBg}`,
  width: '60%',
  padding: '1rem',
  borderRadius: '8px',
  margin: '0 0 10px 0',
  '&:hover': {
    background: Colors.white
  },
  '& .icon-button:hover': {
    backgroundColor: 'none'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
})
const InnerContianer = styled('div')({
  padding: '0 2rem'
})

const NextMeetingInner = styled('div')({
  display: 'flex',
  alignItems: 'center'
})
const LinkTo = styled('a')({
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '30px',
  textDecoration: 'none',
  cursor: 'pointer',
  color: Colors.black
})
