export default function BorderedImageFrame2(props){
    return <img style={{
      "border": "4px solid red",
      "width": "100%"
    }} src={props.imageUrl} alt="custom"/>
  }