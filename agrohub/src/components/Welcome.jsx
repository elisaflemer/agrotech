import userPic from "../assets/user.png"
function Welcome() {
    let user = 'João'
    return (
        <div>
            <div className="flex justify-between flex-initial items-center mt-5 mx-12">
                
                <div className="flex gap-5">
                    <p>☀️</p>
                    <p>12:35</p>
                    <p>17/03/2023</p>
                </div>
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-bold">Olá, {user}</h1>
                    <img className="w-12 border-black border-2 rounded-full	" src={userPic}></img>
                </div>
                <div className=" mt-5 flex-initial flex gap-4 bg-green-700 text-white h-10 items-center p-5">
                    <p className="text-sm">R$ 4.354,23</p>
                    <p className="text-sm">ETH 0,52</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome