import { useEffect, useState } from "react";
import bgWaves from "../assets/bg-waves.png"; // Vetor de decoração na base da página
import Button from "../components/Button";
import userPic from "../assets/user.png"
import SectionHeader from "../components/SectionHeader";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
import Commodities from "../components/Commodities";

function Home() {

    return (
        <div className="h-screen w-screen">
            <Welcome/>
            <div className="mt-7">
                <SectionHeader text="Commodities agora" />
                <Commodities/>
                <SectionHeader text="Minha região" />
                <Banner/>
                <SectionHeader text="Comunidade" />
            </div>
            {/* <img className="fixed bottom-0 w-screen -z-10" src={bgWaves} /> */}
        </div>
    )
}

export default Home