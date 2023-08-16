import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks'
import {
  fetchPaymentData,
  getGuaranteesList,
  getPaymentScheduleData,
  getBalance,
  getAmountPaid
} from '../state/features/payment.features'
import { Outlet } from 'react-router-dom'
import { fetchContractData } from '../state/features/contract.features'
import {
  fetchFinishingMaterials,
  fetchPogressStatus,
  fetchsuppliersData
} from '../state/features/finishingMaterials.features'
import { getAllQuestions, getProfileData, getSilentLogin, getQuestion } from '../state/features/user.feature'
import { GetAllTooltip, getFilesData } from '../state/features/global.features'
/*components*/
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import VerticalLoader from '../components/UI/VerticalLoader/VerticalLoader'
/*styles*/
import { theme } from '../constants/theme.constants'

const DashboardPage = () => {
  const dispatch = useAppDispatch()
  const { contractId, loading, projectId } = useAppSelector((state) => state.user)

  useEffect(() => {
    dispatch(
      getSilentLogin({
        contractId: contractId || localStorage.getItem('contractId'),
        verification: undefined,
        otp: undefined
      })
    )
    if (!contractId) {
      return
    }
    dispatch(getFilesData(contractId))
    dispatch(getAllQuestions({ projectId, contractId }))
    dispatch(getQuestion({ projectId, contractId }))
    dispatch(fetchPogressStatus(contractId))
    dispatch(GetAllTooltip(contractId))
    dispatch(getAmountPaid(contractId))
    dispatch(getBalance(contractId))
    dispatch(fetchPaymentData(contractId))
    dispatch(fetchContractData(contractId))
    dispatch(fetchFinishingMaterials(contractId))
    dispatch(fetchsuppliersData(contractId))
    dispatch(getPaymentScheduleData(contractId))
    dispatch(getGuaranteesList(contractId))
    dispatch(
      getProfileData({
        contractId: contractId,
        verification: undefined,
        otp: undefined
      })
    )
  }, [contractId])

  if (loading) {
    return <VerticalLoader />
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: {
            width: '100%',
            margin: 'auto',
            padding: '0'
          },
          [theme.breakpoints.down('md')]: {
            padding: '0',
            width: '100%'
          }
        }}
      >
        <Grid container spacing={0}>
          <Outlet />
        </Grid>
      </Box>
    </>
  )
}
export default DashboardPage
