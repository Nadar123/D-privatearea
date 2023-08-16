import * as React from 'react'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { useAppSelector } from '../../../../hooks/redux.hooks'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../../constants/styles.constants'
import {
  AccordionWrapper,
  AccordionWrapperInner,
  DateWrapper,
  DimanicText,
  InnerContent,
  InnerItem,
  ItemText
} from '../../../../constants/styled.components.constants'
import { theme } from '../../../../constants/theme.constants'
import InnerAccordion from '../../../UI/InnerAccordion/InnerAccordion'

interface IFinishListProps {
  title?: string
  subjectId?: number
  room?: string
  lastDateToChoose?: any
  chosen_date?: string
  invite_date?: string
  model?: string
  subjectName?: string
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

function AccordionChosenMaterials({ chosen_date, subjectName, room, invite_date, model }: IFinishListProps) {
  const [expanded, setExpanded] = React.useState<string | false>('')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <AccordionWrapper>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <AccordionWrapperInner>
            <InnerItem>
              <InnerAccordion title='פריט' subTitle={subjectName} />
              <InnerAccordion title='חדר' subTitle={room} />
            </InnerItem>
            <DateWrapper>
              <ItemText> מועד אחרון לבחירה</ItemText>
              <DimanicText>{chosen_date}</DimanicText>
            </DateWrapper>
          </AccordionWrapperInner>
        </AccordionSummary>
        <AccordionDetails className='suppliersData'>
          <React.Fragment>
            <InnerContent>
              <Content>
                <InnerAccordion title=' תאריך הזמנה' subTitle={invite_date} />
                <InnerAccordion title='שם הספק' subTitle={subjectName} />
                <InnerAccordion title='דגם' subTitle={model} />
              </Content>
              <ExtraContent>
                <p>הנחיות נוספות לבציוע</p>
                <p>-</p>
              </ExtraContent>
            </InnerContent>
          </React.Fragment>
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
  )
}

export default AccordionChosenMaterials

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

const Content = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
})
const ExtraContent = styled('div')({
  padding: '2rem 0 1rem 0'
})
