const EventComponent: React.FC = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.clientX)
  }
  return <div>
    <input onChange={onChange} />
    <div draggable onDragStart={onDragStart}>Drag ME!</div>
  </div>
}


export default EventComponent
