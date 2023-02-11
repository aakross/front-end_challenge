import { useEffect, useState } from "react";
import bed from '../images/store/bed.svg'
import desk from '../images/store/desk.svg'
import dining from '../images/store/dining.svg'
import furniture from '../images/store/furniture.svg'
import oven from '../images/store/oven.svg'
import refridegator from '../images/store/refridegator.svg'
import sofa from '../images/store/sofa.svg'
import tv from '../images/store/tv.svg'
import wardrobe from '../images/store/wardrobe.svg'
import washerdryer from '../images/store/washerdryer.svg'
import Contador from '../components/contador'


function Seccion2() {
    var suma = 0;

    const elements = [
        {
            src: bed,
            title: "bed",
            id: 1,
            price: 1.2,
            total: 0
        },
        {
            src: desk,
            title: "desk",
            id: 2,
            price: 0.8,
            total: 0
        },
        {
            src: dining,
            title: "dining",
            id: 3,
            price: 0.5,
            total: 0
        },
        {
            src: furniture,
            title: "furniture",
            id: 4,
            price: 0.6
        },
        {
            src: oven,
            title: "oven",
            id: "5",
            price: 1.5
        },
        {
            src: refridegator,
            title: "refrigerator",
            id: "6",
            price: 0.25
        },
        {
            src: sofa,
            title: "sofa",
            id: "7",
            price: 0.5
        },
        {
            src: tv,
            title: "tv",
            id: "8",
            price: 2
        },
        {
            src: wardrobe,
            title: "wardrobe",
            id: "9",
            price: 0.75
        },
        {
            src: washerdryer,
            title: "washerdryer",
            id: "10",
            price: 3.2
        },
    ];
    console.log("array del count >>> " + elements.length)
    const [arrayCount, SetarrayCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [arraymult, Setarraymult] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [arrayrest, Setarrayrest] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [totalitem, SetTotalitem] = useState(0)
    const [impuetso, setImpuestos] = useState(0)
    const [subtotal, Setsubtotal] = useState(0)
    /* const [ban, Setban]=useState(0);
     const [count1, setCount1] = useState(0)
     const [count2, setCount2] = useState(0)
     const [count3, setCount3] = useState(0)
     const [count4, setCount4] = useState(0)
 
     const [mult1, Setmult1] = useState(1)
     const [mult2, Setmult2] = useState(1)
     const [mult3, Setmult3] = useState(1)
     const [mult4, Setmult4] = useState(1)*/


    const Clear = () => {
        SetTotalitem('0');
        Setsubtotal('0');
        SetarrayCount

    }

    const handleClick = (index, precio) => {

        const duplicadoCount = arrayCount;
        const duplicadoMult = arraymult;

        duplicadoCount[index - 1] = duplicadoCount[index - 1] + 1;
        duplicadoMult[index - 1] = precio * duplicadoCount[index - 1];
        SetarrayCount(duplicadoCount);
        SetMult(duplicadoMult)
        console.log("arrayCount >>>>>", arrayCount)
        console.log("arraymult >>>>>", arraymult)

    }

    function addProduct(num) {
        suma = suma + num
        console.log("suma " + (suma + num))
        setSum(suma)
    };

    function restProduct(num) {
        setSum(num)
    };

    function calcular() {
        var val = 0
        for (var i = 0; i < arrayCount.length; i++) {
            console.log(arrayCount[i]);
            val = val + arrayCount[i]
        }
        SetTotalitem(val)

        var val1 = 0
        for (var i = 0; i < arraymult.length; i++) {
            console.log(arraymult[i]);
            val1 = val1 + arraymult[i]
        }
        Setsubtotal(val1)


    }


    return (
        <>
            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 px-12 py-20 ">
                {elements.map((item, index) => (
                    <div key={index} className="flex justify-center items-center w-[14rem] relative h-[16rem] shadow-xl">
                        <img src={item.src}
                            className=" w-30 h-30" alt="" />
                        <div className="text-black absolute items-end h-16 text-center text-xl font-bold px-10 absolute bottom-0 uppercase">{item.title}</div>
                        <div className="absolute bottom-0" id="contador">
                            <Contador index={item.id} precio={item.price} arrayCountl={arrayCount} arrayMultl={arraymult} arrayCountp={SetarrayCount} arrayMultp={Setarraymult} />

                        </div>
                    </div>
                ))}



            </div>


            <div className="  ">
                <div className="flex justify-center md:justify-between w-full md:px-40">
                    <button onClick={() => Clear()} className="w-14 h-8 md:w-28 md:h-8 border-[#FD9255] border-2 rounded-md">Clear</button>
                    <button onClick={() => calcular()} className=" w-18 h-8 md:w-28 md:h-8 bg-[#FD9255] rounded-md">Calculate</button>
                </div>
            </div>
            <div className="text-center text-3xl font-bold mt-10">Summary</div>

            <div className="flex justify-center py-10 ">
                <div className="bg-[#F9F9F9] w-[20rem] h-[15rem] py-10 text-lg font-bold">
                    <div className="flex justify-between px-4 ">
                        <div>Total Items {""}</div>
                        <div>{totalitem}</div>

                    </div>

                    <div className="flex justify-between px-4">
                        <div>Total M²</div>
                        <div>{subtotal}</div>
                    </div>

                    <div className="flex justify-between px-4">
                        <div>Subtotal</div>
                        <div>{subtotal * 200}</div>
                    </div >

                    <div className="flex justify-between px-4">
                        <div>Tax</div>
                        <div>{(subtotal * 200) * .16}</div>
                    </div>

                    <div className="flex justify-between px-4">
                        <div>Total</div>
                        <div>{(subtotal * 200 * .16) + (subtotal * 200)}</div>
                    </div>

                    <div className="flex justify-between px-4">
                        <div>Due Today 50%</div>
                        <div>{(((subtotal * 200 * .16) + (subtotal * 200)) / 2)}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Seccion2;
