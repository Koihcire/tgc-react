import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SurveyForm from "./SurveyForm";
import RestaurantBookingForm from "./RestaurantBookingForm";
import axios from "axios";

function App() {
  return (
    <React.Fragment>
      <h1>Lifecycle</h1>

      <SurveyForm/>
      <RestaurantBookingForm/>
    </React.Fragment>
  );
}

export default App;
