import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Modal from './Modal'
import truck from '../assets/truck.jpg'
import femaleUser from '../assets/femaleUser.png'

function Carousel() {

    return (
        <div>
            <div className="py-10 px-12 gap-2 flex justify-center items-center">
                <BsArrowLeft className="text-4xl text-gray-400" />
                <div className="flex w-[95%] gap-1 justify-center items-center">
                    <Modal image={truck} title="Trator" distance="12" price="500" type='ALUGUEL' userPic={femaleUser} user="Marta" rating="⭐⭐⭐⭐⭐" />
                    <Modal image={truck} title="Trator" distance="12" price="500" type='ALUGUEL' userPic={femaleUser} user="Marta" rating="⭐⭐⭐⭐⭐"  />
                    <Modal image={truck} title="Trator" distance="12" price="500" type='ALUGUEL' userPic={femaleUser} user="Marta" rating="⭐⭐⭐⭐⭐"/>
                    <Modal image={truck} title="Trator" distance="12" price="500" type='ALUGUEL' userPic={femaleUser} user="Marta" rating="⭐⭐⭐⭐⭐" />
                </div>
                <BsArrowRight className="text-4xl text-gray-400" />
            </div>
        </div>

    )
}

export default Carousel