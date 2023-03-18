import { useState } from "react";

export default function Modal(props) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                className=" text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <img src={props.image}></img>
                <div className="bg-green-800 text-white bottom-0">
                    <p>[{props.type}] {props.title}</p>
                </div>
                <div className="text-gray-500 text-left">
                    <span className="flex gap-2 items-center font-Montserrat justify-between">
                        <img className="w-8 rounded-full border-grey-800 border-[1px]" src={props.userPic}></img>
                        <p>{props.user}</p>
                        <p>{props.rating}</p>
                    </span>
                    <div className="text-right">
                        <p>{props.distance} km</p>
                        <p className="text-green-900">R$ {props.price}</p>
                    </div>

                </div>
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {props.title} para {props.type}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex flex-col items-center">
                                    <img className="h-56" src={props.image}></img>
                                    <div className="my-4 text-slate-500 text-lg leading-relaxed">
                                        <span className="flex items-center justify-between">
                                            <img className="w-8 rounded-full mr-2" src={props.userPic}></img>

                                            <p className="font-bold pr-5">{props.user}</p>
                                            <p>{props.rating}</p>
                                            <p className="text-sm bg-green-600 ml-10 text-white px-2 py-2">{props.user} é um usuário 5 estrelas, com ótima reputação na plataforma!</p>

                                        </span>
                                        <p className="mt-3"><b>Descrição:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel dolor quibusdam quis perspiciatis debitis, ullam, commodi nulla amet incidunt, distinctio minus quia sint nostrum ipsa reiciendis aperiam ipsam voluptatibus.</p>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Sair
                                    </button>
                                    <button
                                        className="bg-white text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        PIX
                                    </button>
                                    <button
                                        className="bg-white text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        CRIPTO
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        SICOOB
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}