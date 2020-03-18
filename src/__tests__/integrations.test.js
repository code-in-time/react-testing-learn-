import React from 'react'
import { mount } from 'enzyme'
import Root from '../Root'
import App from '../components/App'

it('can fetch a list of comments and display them', () => {
  // Attempt to render app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  // Find fetch comments button and click it

  // Expect a list of 500 comments
})