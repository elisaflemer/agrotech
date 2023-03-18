import { useState } from "react"
let ratings = ['⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐', '⭐⭐', '⭐']


export default function ReputationFilter(props) {


    const [selectedRating, setSelectedRating] = useState('Reputação')

    const [ratingDropdownIsOpen, setRatingDropdownIsOpen] = useState('false')

    return (
        <div>
            <button type="button" className=" w-28 inline-flex w-full mt-2  rounded-full justify-center gap-x-1.5 bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900   ring-inset hover:bg-gray-50 border-b-[1px] border-gray-300" onClick={() => setRatingDropdownIsOpen(!ratingDropdownIsOpen)}>
                {selectedRating}
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            {ratingDropdownIsOpen && <Dropdown setSelectedRating=
                {setSelectedRating} setTypeDropdownIsOpen={setRatingDropdownIsOpen} />}
        </div>

    )
}

function Dropdown(props) {

    function changeType(rating) {
        props.setSelectedRating(rating)
        props.setTypeDropdownIsOpen(false)
    }

    return (
        <div className=' fixed w-44  pt-3 flex items-start z-10'>

            <div className="z-10 fixed mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black text-sm ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                {ratings.map((type) => {
                    return (
                        <div>
                            <button className="p-1" onClick={() => changeType(type)}>{type}</button></div>
                    )
                })}
            </div>
        </div>
    )
}