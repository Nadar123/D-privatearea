import React from 'react'
/*cmponnents*/
import CardInfo from '../../../UI/CardInfo/cardInfo'
import MsgItem from './MsgItem'
/*styles*/
import { styled } from '@mui/material'
/*icons*/
import { CorrespondencesIcon } from '../../../../constants/icons.constants'

const DUMMY_DATA = [
  { title: 'מבקש לדבר עם המהנדס לגבי שבירת קירות', date: '16.10.21' },
  { title: 'הזזת שקעים במטבח', date: '17.11.21' },
  { title: 'קרמיקה חדשה לפי העיצוב', date: '08.12.21' }
]

const Correspondences = () => {
  return (
    <CardInfo title={'תכתובות'} icon={<CorrespondencesIcon />}>
      <MainWrapper>
        <WrapperList>
          {DUMMY_DATA && DUMMY_DATA.map((data, index) => <MsgItem title={data.title} date={data.date} key={index} />)}
        </WrapperList>
      </MainWrapper>
    </CardInfo>
  )
}

export default Correspondences
const MainWrapper = styled('div')({
  listStyle: 'none',
  padding: '10px'
})
const WrapperList = styled('ul')({
  listStyle: 'none',
  padding: '10px'
})
