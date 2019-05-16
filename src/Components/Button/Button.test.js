import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button/>', () => {
    it('should call onClick when clicked on button', () => {
        const spy = jest.fn()
        const wrapper = shallow(
            <Button onClick={spy} label={'testLabel'}/>
        )
        const button = wrapper.find('button')
        button.simulate('click')
        expect(spy).toHaveBeenCalledTimes(1)
    })
})