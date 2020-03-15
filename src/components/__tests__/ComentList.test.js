import React from 'react'
import CommentList from '../../components/CommentList'
import {saveComment} from '../../actions/index'
import { mount } from 'enzyme'
import Root, { store } from '../../Root'

let wrapper

beforeEach(() => {
  wrapper = mount(<Root initialState={{comments: ['comment1','test']}}><CommentList /></Root>);
  wrapper.update()
})

it('creates one li per comment', () => {
  expect(wrapper.find('li').length).toEqual(2)
})


it('test text in lis', () => {
  const found = wrapper.render() // returns a cheerio wrapper
  // console.log(found)
  // console.log(found.html())
  expect(found.find('li:nth-child(1)').text()).toEqual('comment1')
  expect(found.find('li:nth-child(2)').text()).toEqual('test')
})

afterEach(() => {
  wrapper.unmount()
})
