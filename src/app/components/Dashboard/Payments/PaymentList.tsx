import React, { useState } from 'react'
/*components*/
import Info from '../../../assets/icons/info.icons'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'
import { IPaymentData } from '../../../constants/interfaces.constant'
import { PaymentsText, PaymentsTextNumber } from '../../../constants/styled.components.constants'
import { useAppSelector } from '../../../hooks/redux.hooks'
import _ from 'lodash'
import {
  AmountLeftToPayBubble,
  AmountPaidBubble,
  ModalBubbleAmountPaid,
  ModalBubblePayments,
  UpcomingPaymentsBubble
} from '../../../constants/icons.constants'
import UiModal from '../../UI/Modal/UiModal'
import ModalInnerCard from './ModalInnerCard'
import Loader from '../../UI/Loader/Loader'

const PaymentList: React.FC<{ paymentsInfoData: IPaymentData }> = ({ paymentsInfoData }) => {
  const [showModal, setShowModal] = useState({
    amountPaid: false,
    upcomingPayments: false
  })
  const setModalByKey = (key: any, show: boolean) => {
    const prev: any = { ...showModal }
    prev[key] = show
    setShowModal(prev)
  }

  const { balanceData, amountPaidData, loading } = useAppSelector((state) => state.payments)
  const balanceDataList = balanceData?.balanceList[0]
  const amountPaidDataList = amountPaidData?.amountPaidList

  const totalPayment = amountPaidDataList?.reduce(
    (acc: number, obj: { totalPayment: any }) => acc + Number(obj.totalPayment),
    0
  )
  const interest = amountPaidDataList?.reduce((acc: number, obj: { interest: any }) => acc + Number(obj.interest), 0)
  const linkage = amountPaidDataList?.reduce((acc: number, obj: { linkage: any }) => acc + Number(obj.linkage), 0)
  const vat = amountPaidDataList?.reduce((acc: number, obj: { vat: any }) => acc + Number(obj.vat), 0)
  const fund = amountPaidDataList?.reduce((acc: number, obj: { fund: any }) => acc + Number(obj.fund), 0)

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {paymentsInfoData.amountPaid && (
        <React.Fragment>
          <ItemIconsWrapper>
            <AmountPaidBubble />
            <InnerContentWrapper>
              <PaymentsText> הסכום ששולם </PaymentsText>
              <PaymentsTextNumber>{parseFloat(paymentsInfoData?.amountPaid).toLocaleString()} ₪</PaymentsTextNumber>

              <TextDetail onClick={() => setModalByKey('amountPaid', true)}>פירוט</TextDetail>
            </InnerContentWrapper>

            <ModalWrapper>
              <UiModal
                handleClose={() => setModalByKey('amountPaid', false)}
                open={showModal.amountPaid}
                icon={<ModalBubbleAmountPaid />}
                BubbleText={'הסכום ששולם'}
                className='amount-pay-modal'
              >
                <>
                  <ModalInnerCard
                    linkage={linkage?.toFixed(2) || ''}
                    totalPayment={totalPayment?.toFixed(2) || ''}
                    fund={fund?.toFixed(2) || ''}
                    interest={interest?.toFixed(2) || ''}
                    vat={vat?.toFixed(2) || ''}
                  />
                </>
              </UiModal>
            </ModalWrapper>
          </ItemIconsWrapper>
        </React.Fragment>
      )}

      {paymentsInfoData.amountLeftToPay && (
        <ItemIconsWrapper>
          <AmountLeftToPayBubble />
          <InnerContentWrapper className='adding-top'>
            <PaymentsText> יתרה לסיום חוזה </PaymentsText>
            <PaymentsTextNumber>
              {' '}
              {parseFloat(paymentsInfoData?.amountLeftToPay).toLocaleString()} ₪{' '}
            </PaymentsTextNumber>
          </InnerContentWrapper>
        </ItemIconsWrapper>
      )}

      {paymentsInfoData.upcomingPayments && (
        <React.Fragment>
          <ItemIconsWrapper>
            <UpcomingPaymentsBubble />
            <InnerContentWrapper>
              <PaymentsText> תשלומים בפיגור</PaymentsText>
              <PaymentsTextNumber className='orange-color'>
                {parseFloat(paymentsInfoData?.upcomingPayments).toLocaleString()} ₪
              </PaymentsTextNumber>

              <TextDetail onClick={() => setModalByKey('upcomingPayments', true)}>פירוט</TextDetail>
            </InnerContentWrapper>

            <ModalWrapper>
              <UiModal
                handleClose={() => setModalByKey('upcomingPayments', false)}
                open={showModal.upcomingPayments}
                icon={<ModalBubblePayments />}
                BubbleText={'תשלומים בפיגור'}
              >
                <ModalInnerCard
                  fund={balanceDataList?.fund || ''}
                  linkage={balanceDataList?.linkage || ''}
                  interest={balanceDataList?.interest || ''}
                  vat={balanceDataList?.vat || ''}
                  debtFor={balanceDataList?.debtFor || ''}
                  totalPayment={balanceDataList?.totalPayment || ''}
                />
              </UiModal>
            </ModalWrapper>
          </ItemIconsWrapper>
        </React.Fragment>
      )}
    </>
  )
}

export default PaymentList

const ItemIconsWrapper = styled('li')({
  position: 'relative',
  width: '208px',
  height: '180px',
  [theme.breakpoints.down('xl')]: {
    margin: 'auto',
    height: 'auto'
  }
})
const InnerContentWrapper = styled('div')({
  position: 'absolute',
  top: '-10px',
  left: '-2rem',
  right: '0',
  margin: 'auto',
  textAlign: 'right',
  transform: 'translate(0%, 50%)',
  width: '70%',
  height: 'auto',
  '&.adding-top': {
    top: '3px',
    [theme.breakpoints.down('md')]: {
      top: '20px'
    }
  },
  [theme.breakpoints.down('md')]: {
    top: '5px',
    left: '0',
    right: '60px'
  }
})
export const TextDetail = styled('p')({
  fontSize: '18px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.blue,
  borderBottom: `1px solid ${Colors.blue}`,
  width: '30%',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'none'
  }
})

const ModalWrapper = styled('div')({
  '& .boQUZm': {
    border: 'none',
    width: '300px',
    minHeight: '229px',
    [theme.breakpoints.down('md')]: {
      left: '65%'
    }
  }
})
