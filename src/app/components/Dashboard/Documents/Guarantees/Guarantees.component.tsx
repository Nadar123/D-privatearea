import React from 'react'
/*components*/
import CardInfo from '../../../UI/CardInfo/cardInfo'
import { useAppSelector } from '../../../../hooks/redux.hooks'
import { SectionTitle } from '../../../../constants/styled.components.constants'
/*styles*/
import { styled } from '@mui/material'
import { theme } from '../../../../constants/theme.constants'
import { Colors } from '../../../../constants/styles.constants'
import InnerWrapperCard from '../../../UI/InnerWrapperCard/InnerWrapperCard'

function Guarantees() {
  const dataList = useAppSelector((state) => state.payments.guaranteesListData)

  return (
    <>
      <SectionTitle className='mobile-view'>ערבויות </SectionTitle>
      <ScrollWrapper className='srcoll'>
        {dataList?.guaranteesList &&
          dataList?.guaranteesList.map((item, index) => (
            <React.Fragment key={index}>
              <CardInfo title={item.id} staticText={'מספר ערבות:'}>
                <InnerWrapperCard title='תאריך התחלה' statisubTitle={item?.startDate} />
                <InnerWrapperCard
                  title='סכום כולל מע״מ'
                  statisubTitle={`${parseFloat(item.amount).toLocaleString()} ₪`}
                />
              </CardInfo>
            </React.Fragment>
          ))}
      </ScrollWrapper>
    </>
  )
}

export default Guarantees
const ScrollWrapper = styled('div')({
  height: '220px',
  overflowY: 'auto',
  direction: 'ltr',
  padding: '0 10px 0 0',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    overflowY: 'unset',
    padding: '0'
  },
  '& .sc-kImNAt': {
    direction: 'rtl'
  },
  '& .children-cardBody': {
    direction: 'rtl'
  },
  '&.srcoll::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5'
  },
  '&.srcoll::-webkit-scrollbar': {
    width: '9px',
    backgroundColor: '#f5f5f5',
    margin: '0 8px'
  },
  '&.srcoll::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    backgroundColor: Colors.primaryBrowncolor
  }
})
