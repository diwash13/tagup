import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

describe("<Search/>", () => {
  it("should call onChange when change in input", () => {
    const spy = jest.fn();
    const wrapper = shallow(<Search onChange={spy} />);
    const input = wrapper.find("input");
    input.simulate("change", "test");
    expect(spy).toHaveBeenCalledWith("test");
  });
});
