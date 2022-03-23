import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('0');
 
  return (
    <>
        <h3>Añadir nuevo movimiento</h3>
        <form>
            <div className="form-control">
                <label htmlFor="text">Texto</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Cantidad <br />
                    (negativo - gasto, positivo - ingreso)
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Añadir</button>
        </form>
    </>
  )
}
