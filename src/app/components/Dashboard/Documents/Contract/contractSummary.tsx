import React from 'react'
/*components*/
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
/*styles*/
import { styled } from '@mui/material'
import { DimanicText, ItemText } from '../../../../constants/styled.components.constants'
import { Info } from '../../../../constants/icons.constants'
import { useAppSelector } from '../../../../hooks/redux.hooks'
import { theme } from '../../../../constants/theme.constants'

interface IContractSummary {
  estimatedDate: string | undefined
  lotNumber: string | undefined
  priceWithTax: string | undefined | any
  signDate: string | undefined
}
function ContractSummary({ estimatedDate, lotNumber, priceWithTax, signDate }: IContractSummary) {
  const tooltips = useAppSelector((state) => state.global?.tooltipsList?.tooltipsList)
  const financesTotalPrice = tooltips?.find((item: { key: string }) => item.key === 'finances_total_price')
  const overviewUpcomingPayment = tooltips?.find((item: { key: string }) => item.key === 'overview_upcoming_payment')

  return (
    <>
      <WrapperInner className='space-between children-cardBody'>
        <ItemText> תאריך חתימה</ItemText>
        <DimanicText>{signDate}</DimanicText>
      </WrapperInner>
      <WrapperInner>
        <ItemText> תאריך מסירה משוער</ItemText>
        <Tooltip title={financesTotalPrice?.value || ''}>
          <IconButton style={{ padding: '0' }}>
            <DimanicText className='small-gap'>{estimatedDate}</DimanicText> <Info />
          </IconButton>
        </Tooltip>
      </WrapperInner>
      <WrapperInner>
        <ItemText> מחיר דירה כולל מע״מ</ItemText>

        <Tooltip title={overviewUpcomingPayment?.value || ''}>
          <IconButton style={{ padding: '0' }}>
            <DimanicText className='small-gap'>{parseFloat(priceWithTax).toLocaleString()} ₪</DimanicText> <Info />
          </IconButton>
        </Tooltip>
      </WrapperInner>
      <WrapperInner>
        <ItemText> ממגרש</ItemText>
        <DimanicText>{lotNumber}</DimanicText>
      </WrapperInner>
    </>
  )
}

export default ContractSummary
const WrapperInner = styled('div')({
  width: '25%',
  padding: '10px 0rem 0 0',
  '& .small-gap': {
    padding: '0 0 0 6px'
  },
  '& .space-between': {
    padding: '0 8px'
  },
  '& .space-between .MuiButtonBase-root-JvZdr.lcfWbe:hover': {
    backgroundColor: 'none'
  },
  [theme.breakpoints.down('md')]: {
    width: '50%'
  }
})
