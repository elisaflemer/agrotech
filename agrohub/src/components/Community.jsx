import Button from "./Button";
import userPic from "../assets/user.png"
import agroen from '../assets/agroen.jpg'
import femaleUser from '../assets/femaleUser.png'
import femaleFarmer2 from '../assets/femaleFarmer2.png'
import maleFarmer from '../assets/maleFarmer.png'
import vet from '../assets/vet.webp'

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
                <Comment userPic={femaleFarmer2} description="Olá, pessoal. Sou uma produtora rural aqui em SP e estou passando por uma situação difícil. Minha plantação foi afetada por uma praga e estou tendo dificuldades em controlá-la. Já tentei várias soluções, mas nada parece estar funcionando. Alguém já passou por algo semelhante e pode me dar alguma dica? Agradeço qualquer ajuda que puderem me oferecer." distance={19} />
                <Comment userPic={agroen} distance={84} description="Bem-vindo à nossa loja agropecuária, onde temos tudo o que você precisa para cuidar de seus animais e plantações!

Há mais de 20 anos, temos orgulho de fornecer os melhores produtos e serviços para nossos clientes, desde rações, medicamentos e acessórios para animais de todos os portes, até sementes, fertilizantes e equipamentos para a produção agrícola.

Trabalhamos com marcas de renome no mercado, que garantem a qualidade e eficácia de nossos produtos. Nossa equipe é formada por profissionais experientes e capacitados para oferecer orientações e soluções para suas necessidades agropecuárias."/>
                <Comment userPic={femaleUser} description="Boa tarde, pessoal! Se você está procurando ovos frescos e saudáveis, acaba de encontrar o lugar certo. Meus ovos são produzidos por galinhas felizes e saudáveis, criadas soltas e alimentadas de forma natural. São ovos de primeira qualidade que vão fazer toda a diferença em suas receitas. Entre em contato comigo agora mesmo para fazer seu pedido. Você não vai se arrepender!" distance={30} />
                <Comment description="Olá, eu sou o Dr. João, veterinário especializado em nutrição equina. Com mais de 15 anos de experiência no cuidado de cavalos, posso garantir que a nutrição é um dos pilares mais importantes para a saúde e o bem-estar desses animais. Minha expertise em nutrição equina me permite ajudar os proprietários de cavalos a escolherem os melhores alimentos para seus animais, levando em consideração sua idade, raça, peso e atividade física. Também ofereço orientações sobre o armazenamento e a preparação dos alimentos, bem como a suplementação adequada para evitar deficiências nutricionais." distance={55} userPic={vet} />
            </div>
        </div>

    )
}

function Comment(props) {
    return (
        <div className="flex justify-center">
            <div className="self-start mt-5 mr-2">
                <img className="w-12 rounded-full border-[1px] border-black" src={props.userPic}></img>
                <p>{props.distance} km</p>
            </div>
            <div className="flex flex-col w-[55%] text-center">
                <div className="flex flex-col items-end gap-0">
                    <p className="mt-5 h-fit w-full border-[1px] border-grey-800 text-left px-4 py-2">{props.description}</p>
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