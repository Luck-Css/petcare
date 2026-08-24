import { LuCalendar } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";

export default function Navbar() {
    return (
        <header className="md:px-20 px-5 py-6 flex justify-between items-center border-b border-b-line">
            <div className="flex gap-1.5 justify-between items-center">
                <MdOutlinePets size={25} color="#3f9271" />
                <p className="text-forest font-black text-xs md:text-base">Pet</p>
                <p className="text-coral font-black text-xs md:text-base">Care</p>
            </div>

            <nav className="flex items-center justify-between">
                <ul className="flex items-center justify-between gap-3 md:gap-8">
                    <li className="text-forest-soft text-xs md:text-base">
                        <a href="" className="relative transition-colors duration-300 group">
                            Inicío
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-coral transform scale-x-0 transition-transform duration-300 origin-middle group-hover:scale-x-100"></span>
                        </a>
                    </li>
                    <li className="text-forest-soft text-xs md:text-base">
                        <a href="" className="relative transition-colors duration-300 group">
                            Funcionalidades
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-coral transform scale-x-0 transition-transform duration-300 origin-middle group-hover:scale-x-100"></span>
                        </a>
                    </li>
                    <li className="text-forest-soft text-xs md:text-base">
                        <a href="" className="relative transition-colors duration-300 group">
                            Contato
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-coral transform scale-x-0 transition-transform duration-300 origin-middle group-hover:scale-x-100"></span>
                        </a>

                    </li>

                </ul>
            </nav>

            <a href="" className="hidden md:block bg-forest text-white p-3 items-center rounded-full font-black">
                Agendar Consulta
            </a>
            <div className="block md:hidden bg-forest p-2 rounded-b-full">
                <a href=""><LuCalendar size={14} color="#fff" /></a>
            </div>

        </header>
    )
}



