import React, { useState, useRef } from 'react';
import './header.css'
import {Rectangle,Triangle,Square,Circle} from './index'

const Header = () => {
    const [activeTab, setActiveTab] = useState('rectangle');
    const refTarget = useRef()




  return (
    <div className='geometry-container'>
        <div className="geometry-main">
            <div className="geometry-header">
                <h3>Geometry Application, Find areas and Perimeters</h3>
                <span>Your Number one Learning Aid <br /> For geometric figures like <br /> Rectangles, Squares, Circles, and Triangles.</span>
            </div>

<div className="geometric-figures">
   <button className="rec-btn" ref={refTarget} onClick={() => setActiveTab('rectangle')}>Rectangles</button>
   <button className="tri-btn" ref={refTarget} onClick={() => setActiveTab('triangle')}>Triangles</button>
   <button className="circ-btn" ref={refTarget} onClick={() => setActiveTab('circle')}>Circles</button>
   <button className="squ-btn" ref={refTarget} onClick={() => setActiveTab('square')}>Squares</button>
</div>
        </div>
        {
          activeTab === 'rectangle' ? <Rectangle/> : activeTab === 'triangle' ?   <Triangle/> :  activeTab === 'square' ?   <Square/> : <Circle/>
        }
       
    </div>
  )
}

export default Header