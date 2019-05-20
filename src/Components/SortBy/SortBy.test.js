import React from "react";
import { shallow } from "enzyme";
import SortBy from "./SortBy";

describe("<SortBy/>", () => {
  it("should call onChange when change in select", () => {
    const spy = jest.fn();
    const wrapper = shallow(<SortBy onSort={spy} />);
    const select = wrapper.find("select");
    select.simulate("change", { target: { value: "dateAsc" } });
    expect(spy).toHaveBeenCalledWith("dateAsc");
  });
});
