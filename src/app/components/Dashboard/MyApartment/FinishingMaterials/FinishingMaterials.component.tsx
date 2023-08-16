import React, { useState } from 'react'
import { useAppSelector } from '../../../../hooks/redux.hooks'
/*components*/
import Loader from '../../../UI/Loader/Loader'
import AccordionNotChosenMaterials from './AccordionNotChosenMaterials'
import AccordionChosenMaterials from './AccordionChosenMaterials'
import { Box, styled, Tab, Tabs } from '@mui/material'
/*styles*/
import { Colors } from '../../../../constants/styles.constants'
import { theme } from '../../../../constants/theme.constants'
import { SectionTitle } from '../../../../constants/styled.components.constants'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ margin: '16px 0 0 0' }} sx={{ p: 3 }}>
          <InnerAccordion>{children}</InnerAccordion>
        </Box>
      )}
    </div>
  )
}
function hadnleTabsEvent(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function FinishingMaterials() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const { FinishingMaterialsData: materialsDataSlice, loading } = useAppSelector((state) => state.finishingMaterials)

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {}
      <MainWrapper>
        {/* // TODO make it dynamic */}
        <SectionTitle className='mobile-view'> חומרי גמר </SectionTitle>

        <Box
          className='finish-box'
          sx={{
            width: '100%',
            [theme.breakpoints.down('md')]: {
              padding: '0'
            }
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='inner-box'>
            <Tabs
              indicatorColor={'transparent'}
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
              className='tabs-wrapper-box'
            >
              <Tab
                className='tab-moblie'
                label={
                  <div className='tab-wrapper'>
                    <p>נותר לבחור</p>
                    <span>{materialsDataSlice?.notChosenMaterials.length}</span>
                  </div>
                }
                {...hadnleTabsEvent(1)}
              />

              <Tab
                className='tab-moblie'
                label={
                  <div className='tab-wrapper'>
                    <p> חומרים שנבחרו</p>
                    <span>{materialsDataSlice?.ChosenMaterials.length}</span>
                  </div>
                }
                {...hadnleTabsEvent(0)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={1}>
            {materialsDataSlice?.ChosenMaterials &&
              materialsDataSlice.ChosenMaterials.map((material, index) => (
                <AccordionChosenMaterials
                  key={index}
                  chosen_date={material.chosen_date}
                  invite_date={material.invite_date}
                  model={material.model}
                  room={material?.room}
                  subjectId={material?.subjectId}
                  subjectName={material.subjectName}
                  lastDateToChoose={material?.lastDateToChoose}
                />
              ))}
          </TabPanel>
          <TabPanel value={value} index={0}>
            {materialsDataSlice?.notChosenMaterials &&
              materialsDataSlice.notChosenMaterials?.map((material, index) => (
                <AccordionNotChosenMaterials
                  subjectId={material?.subjectId}
                  key={index}
                  title={material?.name}
                  date={material?.lastDateToChoose}
                  room={material?.room}
                  chosen_date={material?.chosen_date}
                />
              ))}
          </TabPanel>
        </Box>
      </MainWrapper>
    </>
  )
}

export default FinishingMaterials

const MainWrapper = styled('div')({
  position: 'relative',

  '& .tabs-wrapper-box .MuiTabs-flexContainer': {
    display: 'inline-block',
    background: Colors.lightBlueBG,
    borderRadius: '30px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3px 16px'
    },
    '& .Mui-selected .tab-wrapper': {
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      padding: '7px 0px 7px 3px',
      borderRadius: '19px',

      [theme.breakpoints.down('md')]: {
        padding: '3px 16px'
      },
      '& span': {
        backgroundColor: Colors.blue,
        color: '#fff'
      }
    }
  },

  '& .tab-wrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& p': {
      padding: '3px 10px',
      color: Colors.blue
    },
    '& span': {
      backgroundColor: '#fff',
      padding: '3px 11px',
      borderRadius: '50%',
      color: Colors.blue
    }
  },
  '& .inner-box.MuiBox-root': {
    border: 'none'
  },
  '& #simple-tabpanel-0 .MuiBox-root': {
    minHeight: '240px',
    height: '240px',
    overflowY: 'auto',
    direction: 'ltr',
    padding: '0',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      overflowY: 'unset'
    }
  },
  '& #simple-tabpanel-0 .MuiBox-root::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5'
  },
  '& #simple-tabpanel-0 .MuiBox-root::-webkit-scrollbar': {
    width: '9px',
    backgroundColor: '#f5f5f5',
    margin: '0 8px'
  },
  '& #simple-tabpanel-0 .MuiBox-root::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    backgroundColor: '#555'
  },
  '& .tab-moblie': {
    [theme.breakpoints.down('md')]: {
      padding: '0',
      minHeight: '36px'
    }
  }
})

const InnerAccordion = styled('div')({
  padding: '0 8px 0 0',
  [theme.breakpoints.down('md')]: {
    padding: '0'
  }
})
