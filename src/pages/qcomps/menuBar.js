export default function MenuBar() {
  return (
    <div>
      <AButton id="btn1" color="red" size="50px">
        Button 1
      </AButton>
      <AButton id="btn2" color="green" size="30px">
        Button 2
      </AButton>
    </div>
  );
}

function AButton(props) {
  const handleClick = (id, color, size) => {
    document.getElementById(`${id}`).style.backgroundColor = color;
    document.getElementById(`${id}`).style.fontSize = size;
  }
  return (
    <button id={props.id} onClick={() => handleClick(props.id, props.color, props.size)}>
      {props.children}
    </button>
  );
}
