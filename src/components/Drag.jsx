import React, { useState } from 'react'
import '../App.css'


const Drag = () => {
const [cards, setCards] = useState([
    { id: 1, order: 3, text: 'КАРТОЧКА 3' },
    { id: 2, order: 1, text: 'КАРТОЧКА 1' },
    { id: 3, order: 2, text: 'КАРТОЧКА 2' },
    { id: 4, order: 4, text: 'КАРТОЧКА 4' }
])


    return (
        <div>
            { cards.map( card => (
                <div className="card">
                    { card }
                </div>
            ))}
        </div>
    )
}



export default Drag
