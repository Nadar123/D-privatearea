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
  InnerItem,
  ItemText
} from '../../../../constants/styled.components.constants'
import { theme } from '../../../../constants/theme.constants'
import Loader from '../../../UI/Loader/Loader'
import InnerAccordion from '../../../UI/InnerAccordion/InnerAccordion'

interface IFinishListProps {
  title?: string
  subjectId?: number
  room?: string
  lastDateToChoose?: any
  chosen_date?: any
  date?: string
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

function AccordionNotChosenMaterials({ title, date, room }: IFinishListProps) {
  const [expanded, setExpanded] = React.useState<string | false>('')

  const { suppliersData, loading } = useAppSelector((state) => state.finishingMaterials)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <AccordionWrapper>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <AccordionWrapperInner>
            <InnerItem>
              <InnerAccordion title='פריט' subTitle={title} />
              <InnerAccordion title='חדר' subTitle={room} />
            </InnerItem>
            <DateWrapper>
              <ItemText>תאריך בחירה</ItemText>
              <DimanicText>{date}</DimanicText>
            </DateWrapper>
          </AccordionWrapperInner>
        </AccordionSummary>
        <AccordionDetails className='suppliersData'>
          {suppliersData?.suppliersList &&
            suppliersData?.suppliersList
              .filter(({ specialization }) => specialization.includes(title))
              .map((item, index) => (
                <React.Fragment key={index}>
                  <InnerContent>
                    <InnerAccordion title={item.supplierName} subTitle={item.address} />
                    <InnerPhoneWrapper>
                      {item.phone && (
                        <React.Fragment>
                          <InnerAccordion title={'טלפון'} subTitle={item.phone} />
                        </React.Fragment>
                      )}
                      <LinkUrl href={item.siteUrl} className='link-to'>
                        אתר הספק
                      </LinkUrl>
                    </InnerPhoneWrapper>
                  </InnerContent>
                </React.Fragment>
              ))}
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
  )
}

export default AccordionNotChosenMaterials

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
export const InnerContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: Colors.softBlue,
  padding: '1rem',
  minHeight: '67px',
  margin: '3px 0',
  direction: 'rtl',
  [theme.breakpoints.down('md')]: {
    padding: '8px'
  }
})
const InnerPhoneWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

const LinkUrl = styled('a')({
  textDecoration: 'none',
  fontSize: '22px',
  fontWeight: '300',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: '#4295e5',
  backgroundColor: '#fff',
  padding: '5px 10px',
  borderRadius: '6px',
  margin: '0 10px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: Colors.softBrown,
    color: Colors.darkBrown
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    margin: 0
  }
})
