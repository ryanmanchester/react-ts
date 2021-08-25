interface ChildProps {
  color: string;
  onClick: () => void;
}


export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div>
  {color}
  <button onClick={onClick}>Click ME!</button>
  </div>
}
