import { ResizableBox } from "react-resizable";

interface ResixableProps {
  direction: 'horizontal' | 'vertical';
  children?: React.ReactNode;
  
}

const Resizable: React.FC<ResixableProps> = ({direction, children}) => {
  return <div>{children}</div>;
};

export default Resizable;