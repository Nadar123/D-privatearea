import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { SectionTitle, AccordionaLignItems, CircleSpan } from '../../../constants/styled.components.constants'

type Props = {
  title?: string
  extraData?: number | string | null | undefined
  children?: JSX.Element
  component?: JSX.Element
  className?: string | undefined
}

function MobileAccordion({ title, extraData, children, component, className }: Props) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
        <AccordionaLignItems>
          <SectionTitle>{title}</SectionTitle>

          <CircleSpan className={className}>
            {component}
            {extraData}
          </CircleSpan>
        </AccordionaLignItems>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}

export default MobileAccordion
