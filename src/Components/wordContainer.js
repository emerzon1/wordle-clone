import React from 'react'

import "./wordContainer.css"

const WordContainer = ({wordState}) => {
    return <div className="container">
        { wordState.map(row => {

            return <div className="row">
                {row.map(e => {
                    return <div className={`letter ${e.color}`}>
                        {e.letter}
                    </div>
                })}
            </div>
        })
        }
    </div>
}

export default WordContainer;