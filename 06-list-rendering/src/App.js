import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SurveyForm from "./SurveyForm";
import RestaurantBookingForm from "./RestaurantBookingForm";

function App() {
  return (
   <React.Fragment>
      <h1>List Rendering</h1>
      <SurveyForm/>
      <RestaurantBookingForm/>
   </React.Fragment>
  );
}

export default App;
