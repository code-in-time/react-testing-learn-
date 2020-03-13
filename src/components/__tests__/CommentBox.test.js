import React from 'react'
import CommentBox from '../../components/CommentBox'
import { mount } from 'enzyme'
import Root from '../../Root'


let wrapper

beforeEach(() => {
  wrapper = mount(<Root><CommentBox /></Root>);
})

it('has a text area and a button', () => {
  expect(wrapper.find("textarea").length).toEqual(1)
  expect(wrapper.find("button").length).toEqual(1)
})


describe(' the text area', () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate('change', { target: { value: 'new comment' } });
    wrapper.update()
  })

  it('can type in the text area', () => {
    expect(wrapper.find("textarea").prop('value')).toEqual('new comment')
  })

  it('click button and the text area is clear', () => {
    expect(wrapper.find("textarea").prop('value')).toEqual('new comment')
    wrapper.find("form").simulate('submit');
    wrapper.update()
    expect(wrapper.find("textarea").prop('value')).toEqual('')
  })

})

afterEach(() => {
  wrapper.unmount()
})
