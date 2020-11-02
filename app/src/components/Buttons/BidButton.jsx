import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const BidOptions = [
  { key: 'low', value: 'low', text: 'Maximum 9999' },
  { key: 'medium', value: 'medium', text: 'Between 10K and 99k' },
  { key: 'high', value: 'high', text: 'Between 100k and 999k' },
  { key: 'veryHigh', value: 'veryHigh', text: 'More than 1000k' },
]

const BidButton = () => (
  <Menu compact style={{ marginLeft: 15 }}>
    <Dropdown text='Bids' options={BidOptions} simple item />
  </Menu>
)

export default BidButton;

