import React from 'react'
import Title from '../../Components/Title/Title'
import './About.css'

const aboutText1:string="In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort."
const aboutText2:string="Deep in the land of Mordor, in the  \nFires of Mount Doom, the Dark Lord Sauron forged a master ring, and into this ring he poured his cruelty, his malice and his will to dominate all life. One ring to rule them all."



export default function About() {
  return (
    <>
    <Title name="About"/>

    <p className="AboutTest">{aboutText1}</p>
    
    <p className="AboutTest">{aboutText2}</p>


    </>
  )
}
