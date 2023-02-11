import React from 'react';
import { useState } from 'react';

// const ItemCount = ({ onAdd, initial = 0, stock }) => {
//     const [qty, setQty] = useState(initial);
//     const addProduct = (num) => {
//         setQty(qty + num);
//         console.log(qty)

function ItemCount ({ stock,index, precio,arrayCountl ,arrayMultl, arrayCountp, arrayMultp} )  {

    const [qty, setQty] = useState(0);

    function addProduct (index, precio) {
        const duplicadoCount=arrayCountl;
        const duplicadoMult=arrayMultl;
       
        duplicadoCount[index-1]= duplicadoCount[index-1]+1;
        setQty(duplicadoCount[index-1])
        duplicadoMult[index-1]=precio*duplicadoCount[index-1];
        arrayCountp(duplicadoCount);
        arrayMultp(duplicadoMult)
        console.log("arrayCount >>>>>", arrayCountl)
        console.log("arraymult >>>>>", arrayMultl)
    }

    function    quitarProduct (index, precio) {
        const duplicadoCount=arrayCountl;
        const duplicadoMult=arrayMultl;
       
        duplicadoCount[index-1]= duplicadoCount[index-1]-1;
        setQty(duplicadoCount[index-1])
        duplicadoMult[index-1]=precio*duplicadoCount[index-1];
        arrayCountp(duplicadoCount);
        arrayMultp(duplicadoMult)
        console.log("arrayCount >>>>>", arrayCountl)
        console.log("arraymult >>>>>", arrayMultl)
    }
    return (
        <>
            <div className='w-32 h-6'>
                <div className='flex justify-center w-full '>
                        <button  onClick = {() => quitarProduct(index,precio) }   className='border-2 w-8 h-6 bg-gray-300 hover:bg-gray-400 text-center rounded-tl-md rounded-bl-md'>
                            -
                        </button>
                    
                    <div className='w-16 h-6 border-2  flex justify-center'>{qty} </div>
                        <button  onClick = {() => addProduct(index, precio )} className='border-2 w-8 h-6 bg-gray-300 hover:bg-gray-400 text-center rounded-tr-md rounded-br-md'>
                            +
                        </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;

