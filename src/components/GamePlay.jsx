import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import { useState } from "react";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] =useState(0);
  const [error, setError] =useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () =>{
    if(!selectedNumber){
        setError("You have not selected any number!");
        return;
    }

    const randomNumber = generateRandomNumber(1,7);
    console.log(randomNumber);
    setCurrentDice((prev)=> randomNumber);

    if(selectedNumber==randomNumber){
        setScore(prev=> prev+5);
    }else{
        setScore(prev=> prev-2);
    }

    setSelectedNumber(undefined);
  }
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score}/>
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice
      currentDice={currentDice}
      rollDice={rollDice}
      />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 30px;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
