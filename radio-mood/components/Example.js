import {useState} from "react";
import { Button } from 'antd';

export const Example = () => {
  const [test, setTest] = useState(false);
  return (
    <div>
      this is example
      test
      test
      <Button type="primary">Primary Button</Button>

    </div>
  )
}
