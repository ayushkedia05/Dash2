import React from "react";
import { Divider } from "@mantine/core";
import { useState } from "react";
import "./table.css";
import Unexpandedrow from "../rows/rows";
import elements from "./../constants/constants.js";

const Tablecomponent = () => {
  function renderrow(element, ind) {
    return (
      <div>
        <Divider my="sm"></Divider>
        <Unexpandedrow
          keys={ind}
          element={element}
          chipColor={element.chipcolor}
        ></Unexpandedrow>
      </div>
    );
  }

  const row = elements.map((element, ind) => renderrow(element, ind));

  return (
    <div>
      <Unexpandedrow
        type="header"
        element={{
          RunType: "Run Type",
          status: "Status",
          Start: "Start Time",
          end: "End Time",
          exposed: "Item exposed",
          risk: "Risk",
          chipcolor: "green",
        }}
      ></Unexpandedrow>
      {row}
      <Divider my="sm"></Divider>
    </div>
  );
};

export default Tablecomponent;
