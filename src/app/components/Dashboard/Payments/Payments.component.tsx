import React, { useState } from 'react'
import { useAppSelector } from '../../../hooks/redux.hooks'
import { UseResizeWindow } from '../../../hooks/UseResizeWindow'
/*components*/
import CardInfo from '../../UI/CardInfo/cardInfo'
import CircularProgress from './CircularProgress'
import PaymentList from './PaymentList'

/*style*/
import { Button, styled } from '@mui/material'
import Loader from '../../UI/Loader/Loader'
import { theme } from '../../../constants/theme.constants'
import { PaymentsText, SectionTitle } from '../../../constants/styled.components.constants'
import { Colors } from '../../../constants/styles.constants'
import MobileAccordion from '../../UI/MobileAccordion/MobileAccordion'
import NextPayment from './NextPayments/NextPayment.component'
import UiModal from '../../UI/Modal/UiModal'

const Payments = () => {
  const [showElement, setShowElement] = useState(false)
  const { width, breakpoint } = UseResizeWindow()
  const { loading, paymentsInfoData } = useAppSelector((state) => state.payments)

  if (loading) {
    return <Loader />
  }

  const percentage = parseInt(paymentsInfoData?.percentage, 10)

  return (
    <>
      {' '}
      {width > breakpoint ? (
        <>
          <MainWrapper id='payments'>
            <div>
              {showElement && (
                <>
                  <NextPaymentModal>
                    <SpaceBetweenWrapper>
                      <PaymentsText>לוח תשלומים</PaymentsText>
                      <SpanArrow onClick={() => setShowElement(!showElement)}>&#9747;</SpanArrow>
                    </SpaceBetweenWrapper>
                    <NextPayment />
                  </NextPaymentModal>
                </>
              )}
            </div>
            <SectionTitle>תשלומים</SectionTitle>
            {!paymentsInfoData ? (
              <p> לא נמצא תוכן זמין לצפייה </p>
            ) : (
              <CardInfo className={'payments'}>
                <ListWrapper>
                  <ListPayment>
                    <CircularProgress amountPaid={paymentsInfoData.amountPaid} percentage={percentage} />
                    <PaymentList paymentsInfoData={paymentsInfoData} />

                    <NextpaymentWrapper style={{ zIndex: 0 }}>
                      <Button variant='contained' onClick={() => setShowElement(!showElement)}>
                        לוח תשלומים
                      </Button>
                    </NextpaymentWrapper>
                  </ListPayment>
                </ListWrapper>
              </CardInfo>
            )}
          </MainWrapper>
          <></>
        </>
      ) : (
        <MobileWrapper>
          {paymentsInfoData?.amountPaid && (
            <MobileAccordion
              title={'תשלומים'}
              extraData={paymentsInfoData?.amountPaid}
              className={'payment-moblie-view'}
              component={<CircularProgress percentage={percentage} />}
            >
              {!paymentsInfoData ? (
                <p> לא נמצא תוכן זמין לצפייה </p>
              ) : (
                <>
                  <div>
                    {showElement && (
                      <>
                        <NextPaymentModal>
                          <SpaceBetweenWrapper>
                            <SpanArrow onClick={() => setShowElement(!showElement)}>&#9747;</SpanArrow>
                          </SpaceBetweenWrapper>
                          <NextPayment />
                        </NextPaymentModal>
                      </>
                    )}
                  </div>
                  <CardInfo className={'payments'}>
                    <ListWrapper>
                      <ListPayment>
                        <CircularProgress amountPaid={paymentsInfoData.amountPaid} percentage={percentage} />
                        <PaymentList paymentsInfoData={paymentsInfoData} />

                        <NextpaymentWrapper>
                          <Button variant='contained' onClick={() => setShowElement(!showElement)}>
                            לוח תשלומים
                          </Button>
                        </NextpaymentWrapper>
                      </ListPayment>
                    </ListWrapper>
                  </CardInfo>
                </>
              )}
            </MobileAccordion>
          )}
        </MobileWrapper>
      )}
    </>
  )
}

export default Payments
const MainWrapper = styled('div')({
  position: 'relative',
  padding: '4rem 2rem 0 2rem',
  [theme.breakpoints.down('xl')]: {
    padding: '4rem 1rem 0 1rem'
  }
})
const ListWrapper = styled('div')({
  width: '100%',
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('md')]: {
    display: 'block',
    width: '100%'
  }
})
const ListPayment = styled('ul')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  listStyle: 'none',
  '& .amount-pay-modal .modal-main-wrap': {
    top: '66%',
    right: '-100%',
    [theme.breakpoints.down('md')]: {
      right: '-195px'
    }
  },
  [theme.breakpoints.down('xl')]: {
    padding: '0'
  },
  [theme.breakpoints.down('lg')]: {
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    width: '100%'
  }
})
const NextpaymentWrapper = styled('div')({
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  },
  '& .MuiButtonBase-root.MuiButton-root': {
    width: '170px',
    maxWidth: '170px',
    fontSize: 22,
    fontWeight: 'normal',
    lineHeight: 'normal',
    textAlign: 'center',
    color: Colors.white,
    padding: '6px 34px 6px 34px',
    borderRadius: '20px',
    backgroundColor: Colors.lightBlueButton,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      margin: '2rem'
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

const NextPaymentModal = styled('div')({
  background: '#e2eef8',
  position: 'absolute',
  width: '96%',
  margin: 'auto',
  bottom: '0px',
  left: '0',
  right: '0',
  minHeight: '400px',
  borderRadius: '8px',
  zIndex: '99',
  [theme.breakpoints.down('xl')]: {
    minHeight: '350px',
    width: '95%'
  },
  [theme.breakpoints.down('lg')]: {
    height: '329px',
    width: '94%'
  },
  [theme.breakpoints.down('md')]: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100vh',
    zIndex: '9999',
    borderRadius: '0px'
  }
})
const SpaceBetweenWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem'
})
const SpanArrow = styled('span')({
  fontSize: '22px',
  lineHeight: '26px',
  cursor: 'pointer'
})
