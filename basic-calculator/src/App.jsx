'use client'

import React, { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState('')
    const buttons = [
        ['C', 'sqrt', '%', '/'],
        ['9', '6', '7', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '⌫', '=', '.'],
     
    ]

    const symbols = ['+', '-', '*', '/','.','%']

    const handleCalculation = (value) => {
         const lastItem = result.toString().slice(-1)
        if(( symbols.includes(lastItem)  && symbols.includes(value) ) ) {
            const excludedLast = result.slice(0, -1)
            setResult(excludedLast+ value)
            return;
        }
        if(symbols.includes(value) && value == lastItem) {
            return;
        }
        
        
        switch(value){
            case 'C':
                setResult('')
                break;
            case 'sqrt':
            setResult(Math.sqrt(Number(result)).toString())

            break;

            case '=':
                if(symbols.includes(lastItem)) return;
               setResult(eval(result).toString())
                break;

            case '%':
                setResult((Number(result) / 100).toString())
                break;
            case '⌫':
                const output = result.toString().slice(0,-1)
                setResult(output)
                break;


            default:
                setResult(result+ value)
                break;
        }
       
    }
    
    return (
        <div className='flex items-center justify-center min-h-screen max-w-auto bg-[#d2cfcd]'>
           
            <div className=' p-4 rounded-lg shadow-lg max-w-sm mx-auto  bg-black '> 

            <div className='text-white text-4xl font-semibold border-2 h-16 text-right mb-2 mr-5 border-black '>{result}</div> 
            {buttons.map((item,id)=>{
                return (
                    <div key={id} className='flex'>
                        {item.map((val, idx)=>{
                            return (
                                
                                <button 
                                    key={idx}
                                    onClick={()=> handleCalculation(val)}

                                    className={`text-white text-lg border-0 font-semibold  m-3 items-end ${symbols.includes(val) ? 'bg-[#ed9923] h-16 w-16 rounded-full hover:bg-[#fbbb61]' : 'bg-[#2C2C2E] rounded-full h-16  font-semibold w-16 hover:bg-[#363535]'}`}
                                >
                                    {val}
                                </button>
                            )
                        })}
                    </div>
                )
            })}
            </div>
         </div>
    )
}

export default Calculator
 