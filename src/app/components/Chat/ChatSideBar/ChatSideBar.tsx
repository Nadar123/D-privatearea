import _ from 'lodash'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Sort, Filter, Confirmation, HoverFilter, HoverSort } from '../../../constants/icons.constants'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'

type Props = {
  allQuestionsData?: any
  handleNewMessages?: any
  handleOldMessages?: any
  sortOrder?: any
  setSortOrder?: any
  selectedStatus?: any
  setSelectedStatus?: any
  sortedByStatus?: any
}

function ChatSideBar({
  selectedStatus,
  sortedByStatus,
  setSelectedStatus,
  setSortOrder,
  sortOrder,
  allQuestionsData
}: Props) {
  const [active, setActive] = useState(false)
  const [hover, setHover] = useState(false)
  const [hoverSort, setHoverSort] = useState(false)

  function handleSortClick() {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    setActive(!active)
  }

  return (
    <FlexIconWrapper>
      <ItemText className='length-text'>{allQuestionsData?.length} פניות</ItemText>
      <IconWrapper>
        <InnerIconWrapper
          //className={hover ? 'icon-hover' : 'icon'}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover ? <HoverFilter /> : <Filter />}
          <FilterList className='list'>
            <FilterItem onClick={handleSortClick}>
              <ItemText>
                ישן יותר
                {active && <Confirmation />}
              </ItemText>
            </FilterItem>
            <FilterItem onClick={handleSortClick}>
              <ItemText>
                חדש יותר
                {!active && <Confirmation />}
              </ItemText>
            </FilterItem>
          </FilterList>
        </InnerIconWrapper>

        <InnerIconWrapper onMouseEnter={() => setHoverSort(true)} onMouseLeave={() => setHoverSort(false)}>
          {hoverSort ? <HoverSort /> : <Sort />}
          <FilterList className='list'>
            <FilterItem
              onClick={() => {
                setSelectedStatus(-3)
              }}
            >
              <ItemText>
                פתוח
                {selectedStatus === -3 && <Confirmation />}
              </ItemText>
            </FilterItem>
            <FilterItem
              onClick={() => {
                setSelectedStatus(-1)
              }}
            >
              <ItemText>
                סגור
                {selectedStatus === -1 && <Confirmation />}
              </ItemText>
            </FilterItem>
            <FilterItem>
              <ItemText
                onClick={() => {
                  setSelectedStatus(-2)
                }}
              >
                בטיפול
                {selectedStatus === -2 && <Confirmation />}
              </ItemText>
            </FilterItem>
          </FilterList>
        </InnerIconWrapper>
      </IconWrapper>
    </FlexIconWrapper>
  )
}

export default ChatSideBar
const FlexIconWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  border: `1px solid ${Colors.lightBrownSecond}`,
  padding: '6px 10px 0 6px',
  margin: '0 0 10px 0'
})
const IconWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  cursor: 'pointer'
})
const InnerIconWrapper = styled('div')({
  position: 'relative',
  padding: '0 3px',
  '&:hover': {
    '& .list': {
      display: 'block'
    }
  },
  '& .sorticon': {
    border: `2px solid ${Colors.white}`,
    borderRadius: '50%',
    '&:hover': {
      border: `2px solid ${Colors.lightBrownSecond}`
    }
  },
  '& .filtericon': {
    border: `2px solid ${Colors.white}`,
    borderRadius: '50%',
    '&:hover': {
      border: `2px solid ${Colors.lightBrownSecond}`
    }
  }
})
const FilterList = styled('ul')({
  display: 'none',
  listStyle: 'none',
  background: Colors.white,
  position: 'absolute',
  width: '104px',
  margin: 'auto',
  top: '28px',
  right: '-67px',
  cursor: 'pointer'
})
const FilterItem = styled('li')({
  borderBottom: `1px solid ${Colors.lightBrownSecond}`,
  padding: '10px',
  '&:hover': {
    background: Colors.lightBlueTwo
  }
})
export const ItemText = styled('p')({
  fontSize: '14px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.darkBrown,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&.timemsg': {
    direction: 'ltr',
    padding: '5px 0'
  },
  '& svg': {
    borderRadius: '50%'
  },
  '&.length-text': {
    padding: '4px 0 0 0'
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'right'
  }
})
const Dot = styled('span')({
  height: '25px',
  width: '25px',
  backgroundColor: Colors.lightBrownSecond,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
