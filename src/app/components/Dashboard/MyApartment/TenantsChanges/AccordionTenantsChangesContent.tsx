import React, { useState } from 'react'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
/*styles*/
import { styled } from '@mui/material/styles'
import { Colors } from '../../../../constants/styles.constants'
import {
  AccordionWrapper,
  AccordionWrapperContent,
  DimanicText,
  ItemText
} from '../../../../constants/styled.components.constants'
import { theme } from '../../../../constants/theme.constants'

interface ITyenantsDataProps {
  Date: string
  ChangeEstimateID: string
  Price: string
  TotalWorkingDays: string
  changesDetails: [
    {
      subject: string
      date: string
      room: string
      quantityChanges: string
      description: string
    }
  ]
}

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

function AccordionTenantsChangesContent({
  changesDetails,
  Date,
  ChangeEstimateID,
  Price,
  TotalWorkingDays
}: ITyenantsDataProps) {
  const [expanded, setExpanded] = useState<string | false>('')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <AccordionWrapper>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <AccordionWrapperInner>
            <DimanicText> הצעה מס’ {ChangeEstimateID} </DimanicText>
            <Datawrapper>
              <DatawrapperInner>
                <ItemText>תאריך הצעת מחיר</ItemText>
                <DimanicText>{Date}</DimanicText>
              </DatawrapperInner>
              <DatawrapperInner>
                <ItemText>עלות השינוי</ItemText>
                <DimanicText> ₪{parseFloat(Price).toLocaleString()}</DimanicText>
              </DatawrapperInner>
              <DatawrapperInner>
                <ItemText>זמן לביצוע</ItemText>
                <DimanicText> {TotalWorkingDays} ימי עבודה </DimanicText>
              </DatawrapperInner>
            </Datawrapper>
          </AccordionWrapperInner>
        </AccordionSummary>
        <AccordionDetails>
          <React.Fragment>
            {changesDetails.map((item, index) => (
              <React.Fragment key={index}>
                <AccordionWrapperContent>
                  <HeaderAccordion>
                    <AccordionInnerContent>
                      <ItemText>חדר</ItemText>
                      <DimanicText>{item.room}</DimanicText>
                    </AccordionInnerContent>
                    <AccordionInnerContent>
                      <ItemText>נושא</ItemText>
                      <DimanicText>{item.subject}</DimanicText>
                    </AccordionInnerContent>
                  </HeaderAccordion>
                  <Description>
                    <ItemText>תאור</ItemText>
                    <DimanicText>{item.description}</DimanicText>
                  </Description>
                  <FooterAccordion>
                    <AccordionInnerContent>
                      <ItemText>תאריך תוספות</ItemText>
                      <DimanicText>{item.date}</DimanicText>
                    </AccordionInnerContent>
                    <AccordionInnerContent>
                      <ItemText>כמות</ItemText>
                      <DimanicText>{item.quantityChanges}</DimanicText>
                    </AccordionInnerContent>
                  </FooterAccordion>
                </AccordionWrapperContent>
              </React.Fragment>
            ))}
          </React.Fragment>
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
  )
}

export default AccordionTenantsChangesContent

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

const AccordionWrapperInner = styled('div')({
  width: '65%',
  [theme.breakpoints.down('md')]: {
    width: '100%'
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
const HeaderAccordion = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-start',
  padding: '0 0 1.5rem 0',
  direction: 'rtl'
})
const AccordionInnerContent = styled('div')({
  width: '25%'
})
const FooterAccordion = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-start',
  direction: 'rtl'
})
const Description = styled('div')({
  padding: '0 0 1.5rem 0',
  textAlign: 'right'
})
