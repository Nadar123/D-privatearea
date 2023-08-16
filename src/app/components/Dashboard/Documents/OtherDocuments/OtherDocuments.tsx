import React from 'react'
import styled from 'styled-components'
import { Download } from '../../../../constants/icons.constants'
import { ItemText, DimanicText, SectionTitle, IconWrapper } from '../../../../constants/styled.components.constants'
import { useAppSelector } from '../../../../hooks/redux.hooks'
import CardInfo from '../../../UI/CardInfo/cardInfo'
import Loader from '../../../UI/Loader/Loader'

function OtherDocuments() {
  const { filesData, loading } = useAppSelector((state) => state.global)

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <MainContianer>
        <SectionTitle className='mobile-view'>מסמכים נוספים</SectionTitle>

        {filesData?.length ? (
          <React.Fragment>
            <SrcollContianer className='srcoll'>
              {filesData &&
                filesData.map((item, index) => (
                  <CardInfo key={index}>
                    <React.Fragment>
                      <div className='inner-card-info'>
                        <DimanicText>{item.name}</DimanicText>
                        <ItemText>{new Date(item.created).toLocaleDateString()}</ItemText>
                      </div>
                      <IconWrapper>
                        <a className='pdf-download' href={item.url} target='_blank'>
                          <Download />{' '}
                        </a>
                      </IconWrapper>
                    </React.Fragment>
                  </CardInfo>
                ))}
            </SrcollContianer>
          </React.Fragment>
        ) : (
          <p>אין מידע נוסף</p>
        )}
      </MainContianer>
    </>
  )
}

export default OtherDocuments

const MainContianer = styled('div')({
  padding: '1rem 0 0 0'
})

const SrcollContianer = styled('div')({
  height: '200px',
  overflowY: 'auto',
  direction: 'ltr',
  padding: '0 10px 0 0'
})
