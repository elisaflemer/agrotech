import { useEffect, useState } from "react";
import bgWaves from "../assets/bg-waves.png"; // Vetor de decoração na base da página
import Button from "../components/Button";
import userPic from "../assets/user.png"
import SectionHeader from "../components/SectionHeader";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import Commodities from "../components/Commodities";
import Carousel from "../components/Carousel";
import Modal from "../components/Modal";
import Community from "../components/Community";

function Home() {

    return (
        <div className="h-screen w-full mb-10">
            <Welcome/>
            <div className="mt-7">
                <SectionHeader text="Commodities agora" />
                <Commodities/>
                <SectionHeader text="Minha região" />
                <Carousel/>
                <Banner/>
                <SectionHeader text="Comunidade" />
                <Community/>
            </div>
            {/* <img className="fixed bottom-0 w-screen -z-10" src={bgWaves} /> */}
        </div>
    )
}

export default Home