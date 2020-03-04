import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('shows a comment block', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  console.log(div.innerHTML)
  expect(div.innerHTML).toContain('Comment box')
  ReactDOM.unmountComponentAtNode(div)
  // expect
})
