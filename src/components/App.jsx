import React from 'react';

import Greet from './1/Greething';

import Card from "./1/Card"
import contacts from "./1/contacts"

import Emoji from './2/Emoji'
import emojipedia from './2/emojis'

import Form from "./3/From"
import Form2 from "./3/From2"

import Cars from './4/Cars'

import MouseOV from './5/MouseOV';
import ToDo from './6/To-Do';

export default function App() {

    // mapping Card comp and giving props
    const cards = contacts.map(x => 
        <Card key={x.id} name={x.name} img={x.imgURL} phone={x.phone} email={x.email}/>)

        //var for if the user is registred
        let userIsRegistered = false;

        // state for rendering time
        let time1 = new Date().toLocaleTimeString(('it-IT'));

        const [time, setTime] = React.useState(time1)
      
        function redTime() {
          const time2 = new Date().toLocaleTimeString(('it-IT'));
          setTime(time2)
        }
          setInterval(redTime, 1000);



    return(
        <div>
            
        <h1 className="heading">My Contacts</h1>
           {cards}

        <h1><span>emojipedia</span></h1>
        <dl className="dictionary">
          {emojipedia.map(x => (
            <Emoji key={x.id} name={x.name} img={x.emoji} desc={x.meaning}/>))}
        </dl>
        
        <Form isRegistered={userIsRegistered}/>
        <Form2 />

        
        <Greet />
        <h1>{time}</h1>
      <button onClick={() => redTime()}>Get Time</button>

      <Cars />

      <MouseOV />


      <ToDo />

    </div>
    )
}