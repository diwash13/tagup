import React from "react";
import { shallow } from "enzyme";
import Logs from "./Logs";
import Log from '../Log/Log'

describe("<Logs/>", () => {
  it("should render as many Log as number of items in props.logs", () => {
    const logs = [
      {
        id: 1,
        title: "testTitle",
        message: "testMessage",
        timestamp: "testTimestamp"
      },
      {
        id: 2,
        title: "testTitle1",
        message: "testMessage1",
        timestamp: "testTimestamp1"
      },
      {
        id: 3,
        title: "testTitle2",
        message: "testMessage2",
        timestamp: "testTimestamp2"
      }
    ];
    const wrapper = shallow(<Logs deleteLog={jest.fn()} logs={logs} />);
    expect(wrapper.find(Log)).toHaveLength(logs.length)
  });
});
