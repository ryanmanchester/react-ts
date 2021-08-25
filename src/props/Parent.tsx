import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log("Button was clicked")}/>;
};

export default Parent
