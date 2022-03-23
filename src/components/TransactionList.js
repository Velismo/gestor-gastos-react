import React from 'react'

export const TransactionList = () => {
  return (
    <>
        <h3>Histórico</h3>
        <ul className="list">
            <li className="minus">
                Efectivo <span>-400€</span><button className="delete-btn">x</button>
            </li>
        </ul>    
    </>
  )
}
