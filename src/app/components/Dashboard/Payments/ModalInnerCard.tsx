import React from 'react'

import { Info } from '@mui/icons-material'
import { Tooltip, IconButton } from '@mui/material'
import styled from 'styled-components'
import { Colors } from '../../../constants/styles.constants'

import { useAppSelector } from '../../../hooks/redux.hooks'
import { theme } from '../../../constants/theme.constants'

interface IBalanceProps {
  fund?: string | null
  linkage?: string | null | any
  interest?: string | null
  vat?: string | null
  totalPayment?: string | null | any
  debtFor?: string | null
}

function ModalInnerCard({ fund, linkage, interest, vat, totalPayment }: IBalanceProps) {
  const tooltips = useAppSelector((state) => state.global?.tooltipsList?.tooltipsList)

  const paymentTotalPrice = tooltips?.find((item: { key: string }) => item.key === 'finances_total_price')
  const upcomingPayments = tooltips?.find((item: { key: string }) => item.key === 'finances_upcoming_payments')
  const nextPaymentInterest = tooltips?.find((item: { key: string }) => item.key === 'next_payment_interest')
  const nextPaymentLinkage = tooltips?.find((item: { key: string }) => item.key === 'next_payment_linkage')
  const financesCurrentBalance = tooltips?.find((item: { key: string }) => item.key === 'finances_current_balance')

  return (
    <PaymentCard>
      <InnerCard>
        <ToolTipContent>
          <CardText>סכום קרן</CardText>
          <Tooltip title={paymentTotalPrice?.value || ''}>
            <IconButton style={{ width: '31px', padding: '5px' }}>{totalPayment && <Info />}</IconButton>
          </Tooltip>
        </ToolTipContent>

        <CardText>₪{parseFloat(totalPayment).toLocaleString()}</CardText>
      </InnerCard>
      <InnerCard>
        <ToolTipContent>
          <CardText>ריבית</CardText>
          <Tooltip title={nextPaymentInterest?.value || ''}>
            <IconButton style={{ width: '31px', padding: '5px' }}>{interest && <Info />}</IconButton>
          </Tooltip>
        </ToolTipContent>

        <CardText>₪{parseFloat(interest).toLocaleString()}</CardText>
      </InnerCard>
      <InnerCard>
        <ToolTipContent>
          <CardText>הצמדה</CardText>
          <Tooltip title={nextPaymentLinkage?.value || ''}>
            <IconButton style={{ width: '31px', padding: '5px' }}>{linkage && <Info />}</IconButton>
          </Tooltip>
        </ToolTipContent>
        <CardText>₪{parseFloat(linkage).toLocaleString()}</CardText>
      </InnerCard>
      <InnerCard>
        <CardText>מע”מ</CardText>

        <CardText> ₪{vat && parseFloat(vat).toLocaleString()} </CardText>
      </InnerCard>
      <InnerCard>
        <CardText>סה”כ</CardText>
        <CardText className='total-upcomingPayments'>₪{fund && parseFloat(fund).toLocaleString()}</CardText>
      </InnerCard>
    </PaymentCard>
  )
}

export default ModalInnerCard

const PaymentCard = styled('div')({
  padding: '1rem 0 0 0'
})
const ToolTipContent = styled('div')({
  display: 'flex',
  alignItems: 'flex-start'
})
const InnerCard = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ':nth-child(3)': {
    borderBottom: `2px solid ${Colors.softBrown}`,
    padding: '0px 0 10px 0'
  },
  ':nth-child(4)': {
    padding: '10px 0 0px 0'
  }
})
const CardText = styled('p')({
  fontSize: '25px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.darkBrown,
  padding: ' 0 0 4px 0',
  '&.total-upcomingPayments': {
    color: Colors.oragne
  },
  '&.bold-section': {
    fontWeight: 'bold'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px'
  }
})
