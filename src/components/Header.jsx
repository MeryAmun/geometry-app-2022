import React, { useState } from 'react';
import './header.css'

const Header = () => {
    const [tab, setTab] = useState(false);




  return (
    <div className='geometry-container'>
        <div className="geometry-main">
            <div className="geometry-header">
                <h3>Geometry Application, Find areas and Perimeters</h3>
                <span>Your Number one Learning Aid <br /> For geometric figures like <br /> Rectangles, Squares, Circles, and Triangles.</span>
            </div>

<div className="geometric-figures">
   <button className="rec-btn">Rectangles</button>
   <button className="tri-btn">Triangles</button>
   <button className="circ-btn">Circles</button>
   <button className="squ-btn">Squares</button>
</div>
        </div>
    </div>
  )
}

export default Header