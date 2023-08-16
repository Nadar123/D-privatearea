import React from 'react'
/*components*/
import { List, ListItem, ListItemText, styled } from '@mui/material'

type Props = {
  categoryList?: [] | any
  selectedSubCategory?: any
  onSubCategoryClick?: any
  selectedCategory?: any
  onCategoryClick?: any
}
function Category({ categoryList, onCategoryClick, selectedCategory, onSubCategoryClick, selectedSubCategory }: Props) {
  return (
    <>
      {categoryList && (
        <React.Fragment>
          <MainWrapper className={selectedSubCategory ? 'chatstep' : ''}>
            <List sx={style} component='nav' aria-label='mailbox folders'>
              {!selectedCategory &&
                categoryList.map((item: any, index: number) => (
                  <ListItem button key={index}>
                    <ListItemText onClick={() => onCategoryClick(item)} primary={item.text} />
                  </ListItem>
                ))}
              {selectedCategory &&
                !selectedSubCategory &&
                categoryList
                  .find(({ id }: any) => id === selectedCategory)
                  .items.map((item: any, index: number) => (
                    <ListItem button key={index}>
                      <ListItemText onClick={() => onSubCategoryClick(item)} primary={item.text} />
                    </ListItem>
                  ))}
            </List>
          </MainWrapper>
        </React.Fragment>
      )}
    </>
  )
}

export default Category

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper'
}
const MainWrapper = styled('div')({
  '&.chatstep': {
    bottom: '6rem'
  },
  '& nav': {
    background: 'none',
    padding: '0',
    '& .MuiButtonBase-root.MuiListItem-gutters': {
      direction: 'rtl',
      textAlign: 'right',
      background: '#fff',
      borderRadius: '10px',
      margin: '4px 0'
    },
    '& hr': {
      display: 'none'
    },
    '& .MuiListItem-root': {
      paddingTop: '3px',
      paddingBottom: '3px'
    }
  }
})
