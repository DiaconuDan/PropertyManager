import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'


const BidOptions = [
  { key: 'low', value: 'low', text: 'Maximum 99' },
  { key: 'medium', value: 'medium', text: 'Between 100 and 500' },
  { key: 'high', value: 'high', text: 'Between 500 and 1000' },
  { key: 'veryHigh', value: 'veryHigh', text: 'More than 1000' },
]

const BidButton = () => (
    <Menu compact style={{marginLeft:15}}>
      <Dropdown text='Bids' options={BidOptions} simple item />
    </Menu>
  )

export default BidButton;

