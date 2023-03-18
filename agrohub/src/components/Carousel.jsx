import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Modal from './Modal'
import truck from '../assets/truck.jpg'
import femaleUser from '../assets/femaleUser.png'
import DistanceFilter from './DistanceFilter'
import TypeFilter from './TypeFilter'
import ReputationFilter from './ReputationFilter'
import maleFarmer from '../assets/maleFarmer.png'
import femaleFarmer2 from '../assets/femaleFarmer2.png'
import land from '../assets/land.jpg'
import vitamina from   '../assets/vitamina.webp'
import agroen from '../assets/agroen.jpg'
import vet from '../assets/vet.webp'
import nutrition from '../assets/nutrition.jpg'

function Carousel() {

    return (
        <div>
            <div className='flex gap-3 mt-2'>
                <DistanceFilter />
                <TypeFilter />
                <ReputationFilter />
            </div>


            <div className="py-10 px-12 gap-2 flex justify-center items-center">
                <BsArrowLeft className="text-4xl text-gray-400" />
                <div className="flex w-[95%] gap-1 justify-center flex-stretch">
                    <Modal image={truck} title="Trator" distance="12" price="500" type='ALUGUEL' userPic={femaleUser} user="Marta" rating="⭐⭐⭐⭐⭐"  nft={true} description="Oi, pessoal! Se vocês estão procurando um trator para alugar, eu posso ajudar! Tenho um trator pessoal que está disponível para aluguel e estou animado para oferecer a minha ajuda em suas atividades rurais.

Meu trator é bem cuidado e está sempre em ótimas condições de uso, garantindo um trabalho seguro e eficiente em suas lavouras. E o melhor de tudo, como estou disponibilizando o meu próprio trator, consigo oferecer preços mais competitivos e negociáveis.

Também posso oferecer o aluguel por meio de NFTs."/>
                    <Modal image={land} title="Terras para soja" distance="40" price="10.000,00" type='ARRENDAMENTO' userPic={maleFarmer} user="Rogério" rating="⭐⭐⭐⭐" nft={true} description="Temos uma excelente oportunidade de arrendamento de terras para cultivo de soja, com a possibilidade de aquisição por meio de NFTs. Essa é uma opção inovadora que permite que investidores comprem a propriedade fracionada, garantindo sua participação nos lucros da safra.

Aproveite essa chance única de investir em um dos mercados mais promissores da agricultura, com a segurança e transparência das tecnologias blockchain e dos contratos inteligentes. Entre em contato conosco para saber mais sobre como adquirir sua participação nas terras de cultivo de soja."/>
                    <Modal image={nutrition} title="Nutrição animal" distance="107" price="400" type='SERVIÇO' userPic={vet} user="Dr. Felipe" rating="⭐⭐⭐" nft={false} description="Oi, meu nome é Felipe e sou veterinário equino. Trabalho há anos com cavalos e ofereço uma ampla gama de serviços para garantir que esses animais recebam o melhor cuidado possível. Aqui estão alguns dos serviços que ofereço:

Consultas regulares de saúde: Faço exames físicos completos para garantir que seus cavalos estejam saudáveis e livres de doenças.

Vacinação: Ofereço uma variedade de vacinas para prevenir doenças comuns em cavalos, como a gripe equina e a encefalomielite.

Cuidados dentários: Realizo exames dentários regulares e limpezas para garantir que os dentes dos seus cavalos estejam saudáveis e funcionando corretamente."/>
                    <Modal image={vitamina} title="Rubralan" distance="27" price="24,90" type='INSUMOS' userPic={agroen} user="Agroen" rating="⭐⭐⭐⭐" nft={false} description="Rubralan 5000 é indicado no tratamento das anemias perniciosas das moléstias que causam anemia (piroplasmose, anaplasmose e verminose). Nos estados carências das vitaminas B1 e B12. Indicado principalmente após hemorragias e cirurgias. No tratamento das nevralgias, algias em geral, perturbações neuromusculares inespecíficas, anorexias e polineurites. No tratamento das miopatias, paraplegias e fadigas musculares. Estimulante leucocitário. Em todos os desequilíbrios hepáticos, manutenção do tônus neuromuscular, para um bom desempenho físico e orgânico, normalmente em animais de competição."/>
                </div>
                <BsArrowRight className="text-4xl text-gray-400" />
            </div>
        </div>

    )
}

export default Carousel