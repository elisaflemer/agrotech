import userPic from "../assets/user.png"
function Welcome() {
    let user = 'João'
    return (
        <div>
            <div className="pl-12 pt-5 flex items-center gap-4">
                <h1 className="text-3xl font-bold">Olá, {user}</h1>
                <img className="w-12 border-black border-2 rounded-full	" src={userPic}></img>
            </div>
            <div className="pl-12 flex gap-5">
                <p>☀️</p>
                <p>12:35</p>
                <p>17/03/2023</p>
            </div>
        </div>
    )
}

export default Welcome