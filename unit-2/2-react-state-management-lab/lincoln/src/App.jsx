import React, { useState } from "react";
import survivorImg from "./images/survivor.jpg";
import scavengerImg from "./images/scavenger.jpg";
import shadowImg from "./images/shadow.jpg";
import trackerImg from "./images/tracker.jpg";
import sharpshooterImg from "./images/sharpshooter.jpg";
import medicImg from "./images/medic.jpg";
import engineerImg from "./images/engineer.jpg";
import brawlerImg from "./images/brawler.jpg";
import infiltratorImg from "./images/infiltrator.jpg";
import leaderImg from "./images/leader.jpg";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: survivorImg,
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: scavengerImg,
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: shadowImg,
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: trackerImg,
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: sharpshooterImg,
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: medicImg,
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: engineerImg,
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: brawlerImg,
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: infiltratorImg,
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: leaderImg,
    },
  ]);

  const [message, setMessage] = useState("Message Display");
  let totalStrength = 0;
  let totalAgility = 0;

  for (const fighter of team) {
    totalStrength += fighter.strength;
    totalAgility += fighter.agility;
  }

  const handleAddFighter = (fighter, idx) => {
    if (money < fighter.price) {
      setMessage(`You have not enough money to hire ${fighter.name}!!`);
      console.log("Not enough money");
      return;
    } else {
      setMessage(`You have hired ${fighter.name} for $${fighter.price}`);
      setTeam((prevState) => [...prevState, fighter]);

      setZombieFighters((prevState) => [...prevState].toSpliced(idx, 1));
    }
  };

  const handleRemoveFighter = (fighter, idx) => {
    setMessage(
      `You have fired ${fighter.name}, you got back $${fighter.price}`,
    );
    setZombieFighters((prevState) => [...prevState, fighter]);
    setTeam((prevState) => [...prevState].toSpliced(idx, 1));
  };

  const arrayZombieFighters = zombieFighters.map((fighter, idx) => {
    return (
      <ul key={fighter.id}>
        <li>
          <img src={fighter.img} alt={fighter.name}></img>
          <p>ID: {fighter.id}</p>
          <p className="name">Name: {fighter.name}</p>
          <p>Hiring Price: {fighter.price}</p>
          <p>
            STR: {fighter.strength} AGI: {fighter.agility}
          </p>
        </li>
        <button
          key={fighter.id}
          onClick={() => {
            handleAddFighter(fighter, idx);
            deductMoney(fighter.price);
          }}
        >
          Hire Me!!!
        </button>
      </ul>
    );
  });

  const arrayTeam = team.map((fighter, idx) => {
    return (
      <ul key={fighter.id}>
        <li>
          <img src={fighter.img} alt={fighter.name}></img>
          <p>ID: {fighter.id}</p>
          <p className="name">Name: {fighter.name}</p>
          <p>Hiring Price: {fighter.price}</p>
          <p>
            STR: {fighter.strength} AGI: {fighter.agility}
          </p>
        </li>
        <button
          key={fighter.id}
          onClick={() => {
            handleRemoveFighter(fighter, idx);
            addMoney(fighter.price);
          }}
        >
          Remove
        </button>
      </ul>
    );
  });

  const deductMoney = (price) => {
    if (money < price) {
      console.log("Not Enough Money");
      return;
    } else {
      return setMoney((prevState) => prevState - price);
    }
  };

  const addMoney = (price) => {
    setMoney((prevState) => prevState + price);
  };

  return (
    <div>
      <h3>Unit 2 React State Management Lab Exercise</h3>
      <h4>{message}</h4>
      <h4>You have: ${money}</h4>
      <h4>Your current Team Total Strength: {totalStrength}</h4>
      <h4>Your current Team Total Agility: {totalAgility}</h4>
      <h4>Here are my Team Zombie Fighters</h4>
      <div className="myTeam">
        {arrayTeam.length !== 0 ? arrayTeam : "Pick some team members!"}
      </div>
      <h4>Here are the available Zombie Fighters</h4>
      <div className="zombieFighters">{arrayZombieFighters}</div>
    </div>
  );
}

export default App;
