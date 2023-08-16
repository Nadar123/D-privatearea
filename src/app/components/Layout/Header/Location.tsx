import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks'
/*styles*/
import styled from 'styled-components'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'
import { updateClientAndProjectIDs } from '../../../state/features/user.feature'

function Location() {
  const user = useAppSelector((state) => state.user.user)
  const dispatch = useAppDispatch()

  const onSelectChange = ({ target: { value } }: any) => {
    const [contractId, projectId] = value.split('_')
    dispatch(updateClientAndProjectIDs({ contractId, projectId }))
  }

  return (
    <>
      {user && (
        <>
          <LocationWrap>
            <Select onChange={onSelectChange} name='lang' id='langs'>
              {user?.info?.data.map((data: any) => (
                <option key={data.contractId} value={`${data.contractId}_${data.projectId}`}>
                  {data.title}
                </option>
              ))}
            </Select>
            <TriangleInBefore />
          </LocationWrap>
        </>
      )}
    </>
  )
}

export default Location

const TriangleInBefore = styled('div')({
  position: 'absolute',
  top: '16px',
  left: '1.2rem',
  width: '5px',
  height: '5px',
  borderTop: `solid 5px ${Colors.white}`,
  borderLeft: `solid 5px ${Colors.transparent}`,
  borderRight: `solid 5px ${Colors.transparent}`
})
const Select = styled('select')({
  appearance: 'none',
  position: 'relative',
  borderRadius: '20px',
  background: Colors.blue,
  color: '#fff',
  margin: '0 10px',
  padding: '7px 16px 7px 50px',
  border: 'none',
  '& select:focus-visible': {
    outline: '0 !important'
  },
  [theme.breakpoints.down('md')]: {
    borderRadius: '0px',
    margin: '0',
    width: '100%'
  }
})

const LocationWrap = styled('div')({
  position: 'relative'
})
