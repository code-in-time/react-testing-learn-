import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import CommentBox from '../CommentBox'
import {shallow} from 'enzyme'



it('shows a comment block no enzyme but t est for text', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  console.log(div.innerHTML)
  expect(div.innerHTML).toContain('Comment box')
  ReactDOM.unmountComponentAtNode(div)
  // expect
})

it('shows a comment block using enzyme', () => {
  const wrapper = shallow(<App />);
  console.log('wrapper.find(CommentBox).length', wrapper.find(CommentBox).length)
  expect(wrapper.find(CommentBox).length).toBe(1)
  // expect
})
