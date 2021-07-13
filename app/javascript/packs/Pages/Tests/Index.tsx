import React from "react";
import { useAppContext } from "../../Context";
const TestsIndex = () => {
  const data = useAppContext().controllerData;
  const tests: { tests: string } = JSON.parse(data.tests);
  console.log(tests);
  return (
    <div className='TestsIndex'>This is tests index!!!!!!!!!!!!!!!!!1</div>
  );
};
export default TestsIndex;
