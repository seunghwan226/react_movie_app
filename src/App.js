import React from "react";
import PropTypes from "prop-types";

function Food({name, rating}) {
  console.log(name);
  return <div>
      <h1>i like {name}</h1>
      <h4>{rating}/ 5.0</h4>
    </div>
}

const foodILike = [{
  id:1,
  name: "kimchi",
  rating: 5
},
{
  id:2,
  name: "bibimbob",
  rating: 4.9
}];


Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function renderFood(dish) {
  console.log(dish);
  return <Food key={dish.id} name={dish.name} rating ={dish.rating}></Food>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(renderFood)}
    </div>
  )
}

export default App;
