import React from 'react'
// import ReactDOM from 'react-dom'
import App from '../App'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'
import {shallow} from 'enzyme'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
})

// it('shows a comment block no enzyme but t est for text', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
//   // console.log(div.innerHTML)
//   expect(div.innerHTML).toContain('Add a comment')
//   ReactDOM.unmountComponentAtNode(div)
// })

it('shows a comment block using enzyme', () => {
  // const wrapper = shallow(<App />);
  expect(wrapper.find(CommentBox).length).toBe(1)
})

it('shows a comment list using enzyme', () => {
  // const wrapper = shallow(<App />);
  expect(wrapper.find(CommentList).length).toBe(1)
})
