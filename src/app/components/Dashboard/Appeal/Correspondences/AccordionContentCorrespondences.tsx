import * as React from 'react'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
/*styles*/
import { styled } from '@mui/material/styles'
import { AccordionWrapper, DimanicText, ItemText } from '../../../../constants/styled.components.constants'
import { theme } from '../../../../constants/theme.constants'

interface IAppealProps {
  callID: number
  createDate: string
  descrption: string
  subject: string
  statusID: number
}

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    }
  })
)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

function AccordionContentCorrespondences({ statusID, callID, createDate, descrption, subject }: IAppealProps) {
  const [expanded, setExpanded] = React.useState<string | false>('')
  console.log('statusID', statusID)

  let message
  if (statusID === -3) {
    message = 'פתוח'
  } else if (statusID === -2) {
    message = 'סגור'
  } else if (statusID === -1) {
    message = 'בטיפול'
  } else {
    message = ''
  }

  return (
    <AccordionWrapper className='appeal'>
      <Accordion expanded={expanded === 'panel1'}>
        <AccordionSummary aria-controls='panel1d-content' id='appeal-panel1d-header'>
          <AccordionSummaryInner>
            <DimanicText> חוזים ומפרטים</DimanicText>

            <Datawrapper>
              <DatawrapperInner>
                <ItemText className='mobile-view'> תאריך פנייה</ItemText>
                <DimanicText>{new Date(createDate).toLocaleDateString()}</DimanicText>
              </DatawrapperInner>
              <DatawrapperInner>
                <ItemText className='mobile-view'>מספר פנייה</ItemText>
                <DimanicText className='mobile-view'>{callID}</DimanicText>
              </DatawrapperInner>
              <DatawrapperInner>
                <ItemText className='mobile-view'> סטטוס פנייה</ItemText>
                <DimanicText className='mobile-view'> {message}</DimanicText>
              </DatawrapperInner>
            </Datawrapper>
          </AccordionSummaryInner>
        </AccordionSummary>
      </Accordion>
    </AccordionWrapper>
  )
}

export default AccordionContentCorrespondences

const AccordionSummaryInner = styled('div')({
  width: '35%',
  '& : .MuiAccordionSummary-content-llwNjj.iUqYxi.MuiAccordionSummary-content': {
    display: 'block'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    '& .mobile-view': {
      display: 'none'
    }
  }
})
const Datawrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
})
const DatawrapperInner = styled('div')({
  justifyContent: 'flex-start',
  flexDirection: 'column',
  padding: 0
})
