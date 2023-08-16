import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { Button, styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'

type Props = {
  error?: any
  formData?: any
  handleInputData?: any
}

function FormInput({ handleInputData, error, formData }: Props) {
  const [text, setText] = useState('')

  const submitForm = (event: any) => {
    event.preventDefault()
    const val = event?.nativeEvent?.target[0]?.value
    handleInputData(val)
    setText(event.target.reset())
  }

  return (
    <>
      <FormWrapper>
        <Paper
          component='form'
          onSubmit={submitForm}
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            minHeight: 50,
            height: 50,
            margin: 'auto'
          }}
        >
          {/* <TrashWrapper onClick={resetInput}>🗑</TrashWrapper> */}

          {/* <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' /> */}
          <InputBase
            sx={{ ml: 1, flex: 1, borderRadius: 8, padding: ' 8px' }}
            placeholder='כתיבת תשובה לפנייה'
            inputProps={{ 'aria-label': 'כתיבת תשובה לפנייה' }}
            value={formData}
            // onChange={onChange}
          />
          <Button
            variant='contained'
            style={{
              borderRadius: 20,
              padding: '3px 24px',
              background: Colors.blue
            }}
            type='submit'
          >
            שליחה
          </Button>

          <IconButton color='primary' sx={{ p: '10px' }} aria-label='directions'></IconButton>
        </Paper>
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      </FormWrapper>
    </>
  )
}

export default FormInput
const TrashWrapper = styled('div')({
  padding: '0 10px',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {}
})

const FormWrapper = styled('div')({
  display: 'block',
  width: '90%',
  margin: '16px auto'
})
