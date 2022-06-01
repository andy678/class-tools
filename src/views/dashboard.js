import GameDisplay from '../components/gameDisplay';
import React from 'react';
import Boxes from '../components/boxes';
import { Card } from "react-bootstrap";

export default function Dashboard() {
  
  return (
   <div>
      <Card style={{ height: '32rem' }}>
        <GameDisplay />
      </Card>
       <Boxes name="Hangman" description="Play this game in your class." img=""/>
       <Boxes name="Connect Four" description="Another Game."/>
   </div>
 )
  }