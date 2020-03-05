import React from 'react'
import CommentBox from 'components/CommentBox'
import {shallow} from 'enzyme'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CommentBox />);
})

it('shows a comment block using enzyme', () => {
  expect(wrapper.find('h4').text()).toEqual('Add a comment');
})

