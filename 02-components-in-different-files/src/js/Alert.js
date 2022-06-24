export default function Alert(props){
    return <div style={{"backgroundColor": props.bgColor}}>{props.message}</div>;
  }