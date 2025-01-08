import { Link } from "react-router-dom";

export default function Hero(){
  return(
    <section className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-[600px] px-3 md:px-12" style={{background: "url('/assets/hero.jpg')"}}>
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:justify-start md:items-start">
          <h1 className="lugrasimo-font text-2xl md:text-5xl text-white animate__animated animate__bounce">Estuaire BTP</h1>
          <span className="text-white mt-6 text-sm md:text-xl text-center md:text-start ">
          Nous prenons en charge tous vos besoins en matière de bâtiment. De la conception à la réalisation de vos projets, nous nous occupons de tout. Profitez de notre service personnalisé pour garantir la qualité et la sécurité de vos travaux.
          </span>

          <div className="flex flex-row justify-start items-center gap-8 mt-10">
            <Link to="/nos-offres" className="bg-blue py-4 px-8 text-white font-semibold rounded-md animate-pulse">
              En savoir plus
            </Link>
          </div>
        </div>
    </section>
  )
}