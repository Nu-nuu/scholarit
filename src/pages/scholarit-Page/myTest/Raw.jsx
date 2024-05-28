import React, { useState } from "react";
import { Button, message, Progress, Radio, theme } from "antd";
import "./Test.css"

const steps = [
  {
    id: 1,
    title: "1",
    content: (
      <>
        <Radio.Group className="radio-group" onChange={(e) => console.log(`Selected value for step 1: ${e.target.value}`)}>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
          <Radio value={3}>Option 3</Radio>
          <Radio value={4}>Option 4</Radio>
        </Radio.Group>
      </>
    ),
  },
  {
    id: 2,
    title: "2",
    content: (
      <>
        <Radio.Group className="radio-group" onChange={(e) => console.log(`Selected value for step 2: ${e.target.value}`)}>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
          <Radio value={3}>Option 3</Radio>
          <Radio value={4}>Option 4</Radio>
        </Radio.Group>
      </>
    ),
  },
  {
    id: 3,
    title: "3",
    content: (
      <>
        <Radio.Group className="radio-group" onChange={(e) => console.log(`Selected value for step 3: ${e.target.value}`)}>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
          <Radio value={3}>Option 3</Radio>
          <Radio value={4}>Option 4</Radio>
        </Radio.Group>
      </>
    ),
  },
  {
    id: 4,
    title: "4",
    content: (
      <>
        <Radio.Group className="radio-group" onChange={(e) => console.log(`Selected value for step 4: ${e.target.value}`)}>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
          <Radio value={3}>Option 3</Radio>
          <Radio value={4}>Option 4</Radio>
        </Radio.Group>
      </>
    ),
  },
  {
    id: 5,
    title: "5",
    content: (
      <>
        <Radio.Group className="radio-group" onChange={(e) => console.log(`Selected value for step 5: ${e.target.value}`)}>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
          <Radio value={3}>Option 3</Radio>
          <Radio value={4}>Option 4</Radio>
        </Radio.Group>
      </>
    ),
  },
  {
    id: 6,
    title: "Last",
    content: (
      <>
        <Radio.Group className="radio-group" onChange={(e) => console.log(`Selected value for last step: ${e.target.value}`)}>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
          <Radio value={3}>Option 3</Radio>
          <Radio value={4}>Option 4</Radio>
        </Radio.Group>
      </>
    ),
  },
];

const App = () => {
  const handleSubmit = () => {
    const selectedValues = steps.map((step) => ({
      value: step.content.props.value,
      input: step.content.props.children.props.children[1].props.value,
    }));
    message.success(`Selected values: ${JSON.stringify(selectedValues)}`);
  };
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = () => {
    setCurrent(current + 1);
    setProgress(progress + 20);
  };

  const prev = () => {
    setCurrent(current - 1);
    setProgress(progress - 20);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Progress percent={progress} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}

        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
      </div>
    </>
  );
};

export default App;