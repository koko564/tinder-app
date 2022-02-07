import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople]=useState([
        {
            name:'Dora Jones',
            url:'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg',

        },
        {
            name:'Tina Ray',
            url:'https://www.simplemost.com/wp-content/uploads/2017/04/532017720_priyanka-chopra.jpg',

        }
    ]);
    const swiped=(direction,nameToDelete)=>{
        console.log("removing: "+nameToDelete);
        //setLastDirection(direction);
    };
    const outOfFrame=(name)=>{
        console.log(name + " left the screen!");
    };
  return (
  <div className='tinderCards'>
      <div className='tinderCards_cardContainer'>
      {people.map(person=>(
        <TinderCard 
        className='swipe'
        key={person.name}
        preventSwipe={['up','down']}
        onSwipe={(dir)=>swiped(dir,person.name)}
        onCardLeftScreen={()=>outOfFrame(person.name)}>
            <div
            style={{backgroundImage: `url(${person.url})`}}
            className='card'
            >
                <h3>{person.name}</h3>
            </div>
        </TinderCard>
      ))}

      </div>
    </div>
    )
}
 
export default TinderCards;
