import { useState } from 'react'

import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

import { BsPlus, BsDash } from 'react-icons/bs'

let data = {
    'Boi gordo': {
        'valor': '162,32',
        'status': -1,
        'queda_bruta': '0,03',
        'queda_percentual': '0,02',

    },
    'Café': {
        'valor': 'R$ 1.000,00',
        'status': 1,
        'queda_bruta': 'R$ 1.000,00',
        'queda_percentual': 'R$ 1.000,00',
    },
    'Milho': {
        'valor': 'R$ 1.000,00',
        'status': 1,
        'queda_bruta': 'R$ 1.000,00',
        'queda_percentual': 'R$ 1.000,00',
    },
    'Algodão': {
        'valor': 'R$ 1.000,00',
        'status': 1,
        'queda_bruta': 'R$ 1.000,00',
        'queda_percentual': 'R$ 1.000,00',
    },
    'Soja': {
        'valor': 'R$ 1.000,00',
        'status': 1,
        'queda_bruta': 'R$ 1.000,00',
        'queda_percentual': 'R$ 1.000,00',
    },
    'Açúcar': {
        'valor': 'R$ 1.000,00',
        'status': 1,
        'queda_bruta': 'R$ 1.000,00',
        'queda_percentual': 'R$ 1.000,00',
    },
    'Trigo': {
        'valor': '709,40',
        'status': 1,
        'queda_bruta': '10,40',
        'queda_percentual': '1,49',
    },
}

let ptToEn = {
    'Cacau': 'COCOA',
    'Café': 'COFFEE',
    'Milho': 'CORN',
    'Algodão': 'COTTON',
    'Soja': 'SOYBEAN',
    'Açúcar': 'SUGAR',
    'Trigo': 'WHEAT',
    'Arroz': 'RICE',
}


function Commodities() {
    const [selectedCommodity, setSelectedCommodity] = useState('Açúcar')
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    return (
        <div className='w-36 pl-12 pt-3 flex items-start'>
            <div>
            <button type="button" className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900   ring-inset hover:bg-gray-50 border-b-[1px] border-gray-300" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                {selectedCommodity}
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            {dropdownIsOpen && <Dropdown setSelectedCommodity=
                {setSelectedCommodity} setDropdownIsOpen={setDropdownIsOpen} />}
            </div>
            
            <Data selectedCommodity={selectedCommodity} />
        </div>
    )
}

let commodities = ['Café', 'Milho', 'Algodão', 'Soja', 'Açúcar', 'Trigo', 'Arroz']

function Dropdown(props) {

    function changeCommodity(commodity) {
        props.setSelectedCommodity(commodity)
        props.setDropdownIsOpen(false)
    }
    return (
        <div className="z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black text-sm ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            {commodities.map((commodity) => {
                return (
                    <div>
                        <button className="p-1" onClick={() => changeCommodity(commodity)}>{commodity}</button></div>
                )
            })}
        </div>
    )
}

function Data(props) {
    return (
        <div className='flex w-fit'>
            <span className='flex w-32 ml-12 mr-8 items-center justify-center gap-1'>
                {data[props.selectedCommodity].status === 1 ? <FaArrowUp className='text-green-500' /> : <FaArrowDown className='text-red-500' />}
                <p className='font-bold text-lg'>{data[props.selectedCommodity].valor}</p>
            </span>
            <span className='flex w-32 mr-0 items-center justify-center gap-1' >
                {data[props.selectedCommodity].status === 1 ? <BsPlus className='text-green-500 text-2lg' /> : <BsDash className='text-red-500 text-2lg' />
                }
                <p className='font-bold text-lg'>{data[props.selectedCommodity].queda_bruta}</p>
            </span>
            <span className='flex w-96 items-center'>
                {data[props.selectedCommodity].status === 1 ? <p className='text-green-500 font-bold text-2lg'>({data[props.selectedCommodity].queda_percentual})</p> : <p className='text-red-500 font-bold text-2lg'>({data[props.selectedCommodity].queda_percentual})</p>}
            </span>


        </div>

    )
}

export default Commodities