import React from 'react'
import { mount } from 'enzyme'
import Root from '../Root'
import App from '../components/App'
import moxios from 'moxios'


beforeEach(() => {
  // Stop all axios requests
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'fetched #1' }, { name: 'fetched #2' }
    ]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', (done) => {
  // Attempt to render app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  // Find fetch comments button and click it
  wrapped.find(".fetch-comments").simulate('click');
  // Expect a list of 500 comments
  setTimeout(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2)
    done();
    wrapped.unmount();
  }, 1000);
})