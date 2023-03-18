import Button from "./Button";
import userPic from "../assets/user.png"

export default function Community(props) {
    return (
        <div className="flex flex-col gap-5 mb-10">
            <div className="flex justify-center">
                <img className="w-12 rounded-full border-[1px] border-black self-start mt-5 mr-2" src={userPic}></img>
                <div className="flex flex-col w-[55%] text-center">
                    <div className="flex flex-col items-end gap-0">
                        <textarea className="mt-5 h-48 w-full border-[1px] border-grey-800"></textarea>
                        <Button className='w-24' content='Postar'></Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 my-1">
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
        </div>

    )
}

function Comment() {
    return (
        <div className="flex justify-center">
            <div className="self-start mt-5 mr-2">
            <img className="w-12 rounded-full border-[1px] border-black" src={userPic}></img>
            <p>12 km</p>
            </div>
            <div className="flex flex-col w-[55%] text-center">
                <div className="flex flex-col items-end gap-0">
                    <p className="mt-5 h-fit w-full border-[1px] border-grey-800 text-left px-2 py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iste dignissimos necessitatibus ipsum temporibus facere molestiae eligendi expedita nemo a earum repellendus, molestias quam! Nihil voluptatibus nemo voluptatum delectus ut!</p>
                    <div className="flex gap-3">
                    <button>👍</button>
                    <button>👎</button>
                    <button>💬</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}