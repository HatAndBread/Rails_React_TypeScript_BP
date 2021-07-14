import React from "react";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input";
import { useAppContext } from "../../Context";

const New = () => {
  const ctx = useAppContext().controllerData;
  console.log(ctx);
  return (
    <div className='New'>
      this is new page!
      <Form method='POST' action={`/tests`}>
        <Input
          type='text'
          tableColumn='name'
          defaultValue='asdlkfjalkfjdkaf'
          onChange={(e) => {
            console.log(e.target);
          }}
        />
        <Input type='number' tableColumn='age' min={0} max={3} step={2} />
        <input type='submit' />
      </Form>
    </div>
  );
};

export default New;
