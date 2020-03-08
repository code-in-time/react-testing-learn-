import React from 'react'
import CommentBox from 'components/CommentBox'
import {mount} from 'enzyme'


let wrapper

beforeEach(() => {
  wrapper = mount(<CommentBox />);
})

it('has a text area and a button', () => {
  expect(wrapper.find("textarea").length).toEqual(1)
  expect(wrapper.find("button").length).toEqual(1)
})

it('can type in the text area', () => {
  wrapper.find("textarea").simulate('change', { target: { value: 'new comment' } });
  wrapper.update()
  expect(wrapper.find("textarea").prop('value')).toEqual('new comment')
})

it('click button and the text area is clear', () => {
  wrapper.find("textarea").simulate('change', { target: { value: 'new comment' } });
  wrapper.update()
  wrapper.find("form").simulate('submit');
  wrapper.update()
  expect(wrapper.find("textarea").prop('value')).toEqual('')
})

afterEach(() => {
  wrapper.unmount()
})
