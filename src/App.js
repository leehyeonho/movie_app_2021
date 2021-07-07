import React from "react";

function Food(props) {
  return (
    <div>
      <h1>I like {props.name}</h1>
      <img src={props.picture} />
    </div>
    
  );
}

const foodList = [
  {
    id: 1,
    name: "kimchi",
    image: "https://papago.naver.com/97ec80a681e94540414daf2fb855ba3b.svg"
  },
  {
    id: 2,
    name: "bulgogi",
    image: "https://papago.naver.com/97ec80a681e94540414daf2fb855ba3b.svg"
  },
  {
    id: 3,
    name: "ramen",
    image: "https://papago.naver.com/97ec80a681e94540414daf2fb855ba3b.svg"
  },
]

function App() {
  return (
  <div>
    {foodList.map(food => (
      <Food key={food.id} name={food.name} picture={food.image} />
    ))}
  </div>
  );
}

export default App;
