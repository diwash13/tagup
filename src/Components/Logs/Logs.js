import React from "react";
import Log from "../Log/Log";

const Logs = props => props.logs.map(log => <Log key={log.id} log={log} />);

export default Logs;
