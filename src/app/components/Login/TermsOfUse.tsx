import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes.constants'
import API from '../../services/ajax.service'
/*components*/
import Button from '@mui/material/Button'
/*styles*/
import { Colors } from '../../constants/styles.constants'
import { ButtonWrapper } from '../../constants/styled.components.constants'
import styled from 'styled-components'
import { API_ENDPOINTS } from '../../constants/api.constant'
import { Box, CircularProgress } from '@mui/material'

function TermsOfUse() {
  const [content, setContent] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    API.getWordpress(API_ENDPOINTS.TERMS_OF_USE).then((res) => setContent(res.data[0]?.content?.rendered))
  }, [])

  const toDashboardPage = () => {
    navigate(`${ROUTES.DASHBOARD}`)
  }

  return (
    <>
      {!content ? (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        </>
      ) : (
        <>
          <TermsOfUseText dangerouslySetInnerHTML={{ __html: content }}></TermsOfUseText>

          <ButtonWrapper>
            <Button
              style={{
                background: Colors.secondary,
                color: Colors.white,
                fontSize: 25,
                fontWeight: 600,
                padding: '2px 14px'
              }}
              onClick={toDashboardPage}
              type='submit'
            >
              הבנתי, תודה{' '}
            </Button>
          </ButtonWrapper>
        </>
      )}
    </>
  )
}

export default TermsOfUse

const TermsOfUseText = styled('p')({
  height: '282px',
  overflow: 'overlay',
  direction: 'rtl'
})
