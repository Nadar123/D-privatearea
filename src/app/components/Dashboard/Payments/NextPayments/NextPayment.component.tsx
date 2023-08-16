import React from 'react'
import { useAppSelector } from '../../../../hooks/redux.hooks'
/*components*/
import Loader from '../../../UI/Loader/Loader'
import { GreenPaymentConfirmation, PaymentTarget } from '../../../../constants/icons.constants'
/*styles*/
import styled from 'styled-components'
import { Colors } from '../../../../constants/styles.constants'
import { ResultPayments, TextStyleOne, Text } from '../../../../constants/styled.components.constants'
import { theme } from '../../../../constants/theme.constants'

function NextPayment() {
  const { nextListPaymentData, loading } = useAppSelector((state) => state.payments)

  if (loading) {
    return <Loader />
  }

  const allPayments = [...nextListPaymentData?.paymentsList, { next: true, ...nextListPaymentData?.nextPayment }]

  return (
    <>
      <MainWrapper className='show-box'>
        <InnerWrapper>
          <ContentWrapper>
            {allPayments.map((item, index) => (
              <React.Fragment key={index}>
                <PaymentyWrapper>
                  <BorderLine className={!item.next ? 'current child' : 'child'}>
                    <BorderCircle>
                      {!item.next ? (
                        <>
                          <ConfirmationWrapper>
                            <GreenPaymentConfirmation />
                          </ConfirmationWrapper>
                        </>
                      ) : (
                        <ConfirmationWrapper>
                          <PaymentTarget />
                        </ConfirmationWrapper>
                      )}
                    </BorderCircle>
                  </BorderLine>
                  <ContentWrapperInner>
                    <Text>{item.date}</Text>
                    <TextStyleOne> תשלום {index + 1}</TextStyleOne>
                    <ResultPayments>{parseFloat(item.priceWithVat).toLocaleString()}</ResultPayments>
                  </ContentWrapperInner>
                </PaymentyWrapper>
              </React.Fragment>
            ))}
          </ContentWrapper>
        </InnerWrapper>
      </MainWrapper>
    </>
  )
}
export default NextPayment
const MainWrapper = styled('div')({
  borderRadius: '24px',
  padding: '1rem',
  width: '100%',
  margin: '1rem auto',
  transition: 'all 0.3s',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
})

const PaymentyWrapper = styled('div')({
  '&:last-child .child': {
    width: '75%',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  [theme.breakpoints.down('md')]: {}
})

const InnerWrapper = styled('div')({
  display: 'flex',
  position: 'absolute',
  bottom: '50px',
  left: 0,
  right: 0,
  margin: 0,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    position: 'unset',
    display: 'block'
  }
})
const ContentWrapper = styled('div')({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
})
const ContentWrapperInner = styled('div')({
  background: Colors.white,
  padding: '1rem 2rem',
  margin: '1rem',
  opacity: '0.8',
  borderRadius: '20px'
})
const BorderLine = styled('div')({
  backgroundColor: Colors.white,
  width: '100%',
  height: '16px',
  background: Colors.white,
  margin: 'auto 1.5rem',
  borderRadius: '10px',

  '&.current': {
    position: 'relative',
    backgroundColor: '#dfefca',
    height: '16px',
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'none',
      height: '0px'
    },
    '&:before': {
      content: '" "',
      position: 'absolute',
      top: 5,
      left: 0,
      transform: 'translate(0px, 0px)',
      height: 4,
      width: '100%',
      background: Colors.GreenBoderColor,
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    }
  }
})
const BorderCircle = styled('div')({
  width: 24,
  height: 24,
  display: 'block',
  background: Colors.white,
  borderRadius: '50%',
  padding: '12px 0px',
  transform: 'translate(10px, -5px)',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
const ConfirmationWrapper = styled('div')({
  transform: 'translate(0px, -12px)'
})
