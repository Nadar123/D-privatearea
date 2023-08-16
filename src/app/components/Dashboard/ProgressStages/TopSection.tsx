import React from 'react'
import styled from 'styled-components'
import { SectionTitle, UserText } from '../../../constants/styled.components.constants'
import { theme } from '../../../constants/theme.constants'
import { useAppSelector } from '../../../hooks/redux.hooks'
import { useGetTimeMessage } from '../../../hooks/useGetTimeMessage/useGetTimeMessage'

type Props = {
  contractInfoData?: any
}

function TopSection({ contractInfoData }: Props) {
  const timeStatement = useGetTimeMessage()
  const { user, loading } = useAppSelector((state) => state.user)

  const ShowUser = () =>
    user && !loading ? (
      <UserText>
        {timeStatement} {user?.info?.username}
      </UserText>
    ) : (
      <></>
    )

  return (
    <>
      <ShowUser />
      <FlexAlignItems>
        <SectionTitle> התקדמות הפרוייקט</SectionTitle>
        <KeyReceiving>תאריך משוער לקבלת מפתח {contractInfoData?.purchaseOverview?.estimatedDate}</KeyReceiving>
      </FlexAlignItems>
    </>
  )
}

export default TopSection

const FlexAlignItems = styled('div')({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
})
const KeyReceiving = styled('p')({
  background: '#eee',
  padding: '7px',
  marginRight: '1rem',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
