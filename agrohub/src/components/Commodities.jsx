import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

function Commodities() {
    const [selectedCommodity, setSelectedCommodity] = useState('Açúcar')
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    return (
        <div>
            <div className="flex items-center pl-12">
                <a className="border-b-[1px] border-black flex items-center text-md" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                    {selectedCommodity}
                    <IoIosArrowDown />
                </a>
                <p>Price</p>
            </div>
            {dropdownIsOpen && <Dropdown setSelectedCommodity={setSelectedCommodity} selectedCommodity={selectedCommodity}/>}
        </div>
    )
}

function Dropdown(props) {
    let commodities = ['Cacau', 'Café', 'Milho', 'Algodão', 'Soja', 'Açúcar', 'Trigo', 'Arroz']
    function changeCommodity(commodity) {
        props.setSelectedCommodity(commodity)
        props.setDropdownIsOpen(false)
    }
    return (
        <div className="pl-12 flex flex-col justify-start items-start ">
            {commodities.map((commodity) => {
                return (
                    <button onClick={() => props.setSelectedCommodity(commodity)}>{commodity}</button>
                )
            })}
        </div>
    )
}

export default Commodities