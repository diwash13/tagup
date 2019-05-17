import React from "react";
import Modal from "./Modal";
import Button from '../Button/Button'
import { shallow } from "enzyme";

describe("<Modal/>", () => {
  it("should return null when isOpen is undefined or false", () => {
    const wrapper = shallow(
      <Modal onOk={jest.fn()} onCancel={jest.fn()} isOpen={false} />
    );
    expect(wrapper.type()).toBeNull()
    wrapper.setProps({isOpen: undefined})
    expect(wrapper.type()).toBeNull()
  });

  it('should call onOk when clicked on Yes I am sure button', () => {
      const spy = jest.fn()
      const wrapper = shallow(
          <Modal onCancel={jest.fn()} isOpen={true} onOk={spy}/>
      )
      const okButton = wrapper.find(Button).first()
      okButton.simulate('click')
      expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should call onCancel when clicked on No, Go Back button', () => {
      const spy = jest.fn()
      const wrapper = shallow(
          <Modal onOk={jest.fn()} isOpen={true} onCancel={spy}/>
      )
      const cancelButton = wrapper.find(Button).last()
      cancelButton.simulate('click')
      expect(spy).toHaveBeenCalledTimes(1)
  })
});
