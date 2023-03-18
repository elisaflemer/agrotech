
import logo from '../assets/logo.png'
import Button from './Button'
function Banner() {

    return(
        <div className="w-full h-56 bg-[#04343c] flex items-center justify-center gap-16">
            <img className="w-64" src={logo}></img>
            <div className='flex flex-col items-center gap-5'>
                <p className=' text-center text-md text-white'>Sua reputação no Agrohub<br></br> te dá vantagens exclusivas com a Sicoob</p>
                <Button content="Solicite já!"/>
            </div>
        </div>
    )
}

export default Banner