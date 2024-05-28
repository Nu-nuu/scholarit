import React, { useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { Progress, Button } from "antd";

const text = (
  <div className="content-inside-collapse">
    <p>Up Coming data</p>
    <div style={{ display: "flex" }}>
      <Progress
        percent={80}
        status="active"
        strokeColor={{ from: "#108ee9", to: "#87d068" }}
        size={[800, 10]}
      />
      <Button
        className="button-to-everything"
        type="primary"
        style={{ float: "right" }}
        onClick={() => {
          // Add the onclick event here
          window.location.href = "/course"; // Replace "/course" with your desired page URL
        }}
      >
        To Course
      </Button>
    </div>
  </div>
);

const getItems = (panelStyle) => [
  {
    key: "1",
    header: "Course name: Current chapter",
    content: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "2",
    header: "Course name: Current chapter",
    content: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    header: "Course name: Current chapter",
    content: <p>{text}</p>,
    style: panelStyle,
  },
];

const CoursesProgress = () => {
  const [activeKey, setActiveKey] = useState(["1"]);

  const panelStyle = {
    marginBottom: 24,
    background: "#f7f7f7",
    borderRadius: 4,
    border: "none",
  };

  return (
    <div>
      <Collapse
        bordered={false}
        activeKey={activeKey}
        onChange={setActiveKey}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        {getItems(panelStyle).map(({ key, header, content, style }) => (
          <Collapse.Panel
            key={key}
            header={header}
            style={style}
            className="flex-content"
          >
            {content}
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default CoursesProgress;