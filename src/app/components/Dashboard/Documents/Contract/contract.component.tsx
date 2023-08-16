import React from 'react'
import { useAppSelector } from '../../../../hooks/redux.hooks'
/*components*/
import InnerWrapperCard from '../../../UI/InnerWrapperCard/InnerWrapperCard'
import CardInfo from '../../../UI/CardInfo/cardInfo'
import ContractSummary from './contractSummary'
import { CardInnerFlex, CardInfoInnerWrapper, SectionTitle } from '../../../../constants/styled.components.constants'
import Loader from '../../../UI/Loader/Loader'

const Contract = () => {
  const { contractInfoData: contractDataSlice, loading } = useAppSelector((state) => state.contract)

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <SectionTitle className='mobile-view'>חוזה </SectionTitle>

      {contractDataSlice ? (
        <>
          <CardInfo title={'תקציר החוזה'}>
            <ContractSummary
              signDate={contractDataSlice?.purchaseOverview?.signDate}
              estimatedDate={contractDataSlice?.purchaseOverview?.estimatedDate}
              priceWithTax={contractDataSlice?.purchaseOverview?.priceWithTax}
              lotNumber={contractDataSlice?.purchaseOverview?.lotNumber}
            />
          </CardInfo>
          <CardInfo title={'הדירה'}>
            {contractDataSlice?.apartment && (
              <React.Fragment>
                <InnerWrapperCard title='כתובת' statisubTitle={contractDataSlice?.apartment?.address} />
                <InnerWrapperCard title='שם מבנה' statisubTitle={contractDataSlice?.apartment?.building} />
                <InnerWrapperCard title='נכס' statisubTitle={contractDataSlice?.apartment?.building} />
              </React.Fragment>
            )}
          </CardInfo>

          <CardInfo title={'מחסן'}>
            {contractDataSlice?.storeRoom && (
              <React.Fragment>
                <InnerWrapperCard title=' שם הנכס ' statisubTitle={contractDataSlice?.storeRoom?.propertyName} />
                <InnerWrapperCard title='קומה' statisubTitle={contractDataSlice?.storeRoom?.floor} />
              </React.Fragment>
            )}
          </CardInfo>

          <CardInfo title={'חניה'}>
            <CardInfoInnerWrapper style={{ width: '100%' }}>
              {contractDataSlice?.parking &&
                contractDataSlice?.parking?.map((data, index) => (
                  <CardInnerFlex className='lol123' key={index}>
                    <InnerWrapperCard title=' שם מבנה' statisubTitle={data.name} />
                    <InnerWrapperCard title='קומה' statisubTitle={data.floor} />
                  </CardInnerFlex>
                ))}
            </CardInfoInnerWrapper>
          </CardInfo>
        </>
      ) : (
        <p>אין מידע נוסף</p>
      )}
    </>
  )
}

export default Contract
