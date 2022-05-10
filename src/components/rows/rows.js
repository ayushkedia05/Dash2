import React from "react";

import { Chip, Switch, Divider } from "@mantine/core";
import "./rows.css";
const Unexpandedrow = (props) => {
  return (
    <div id="unexpandedcomponent">
      {/* <Divider my="sm"></Divider> */}

      <div className="unexpandedrow">
        <div className="row-content">
          <div className="MAX">{props.element.RunType}</div>
          <div className="MAX">{props.element.status}</div>
          {props.type ? (
            <div className="MAX">{props.element.risk}</div>
          ) : (
            <div className="MAX">
              <Chip
                value="chip"
                checked={false}
                styles={{
                  label: { color: props.chipColor },
                  outline: { color: props.chipColor },
                  filled: { color: props.chipColor },
                  input: { color: props.chipColor },
                  disabled: { color: props.chipColor },
                }}
              >
                {props.element.risk}
              </Chip>
            </div>
          )}

          <div className="MAX">{props.element.Start}</div>
          {/* <div className="MAX">{props.element.end}</div> */}

          <div className="MAX">{props.element.end}</div>
          <div className="MAX">{props.element.exposed}</div>
        </div>

        {props.type ? (
          <></>
        ) : (
          <div className="switch">
            <Switch />
          </div>
        )}
      </div>
    </div>
  );
};

export default Unexpandedrow;
