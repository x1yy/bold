import { render } from '@testing-library/react'
import React from 'react'

import { VFlow } from './VFlow'

it('should render correctly', () => {
  const { container } = render(
    <VFlow>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      456
    </VFlow>
  )
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(
    <VFlow style={{ color: 'red' }}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </VFlow>
  )
  expect(container).toMatchSnapshot()
})
