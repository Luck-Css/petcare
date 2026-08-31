import { MdOutlinePets } from "react-icons/md";

export default function Hero() {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="flex gap-2.5 items-center mt-20 md:mt-30 bg-leaf-light p-2.5 rounded-full">
        <MdOutlinePets size={25} color="#3f9271" />
        <p className="text-lg font-bold font-display md:text-ms text-forest">Feito para tutores</p>
      </div>
      <div className="flex justify-center items-center flex-col mt-10">
        <h1 className="text-4xl font-black text-forest">Toda a rotina do seu pet,</h1>
        <h1 className="text-4xl font-black text-coral">numa coleira só.</h1>
        <p className="flex justify-center items-center wrap max-w-2xl mt-8 text-lg font-display text-forest">Agende consultas, acompanhe vacinas e fale com veterinários sem sair do app.</p> 
        <p className="flex justify-center items-center wrap max-w-2xl text-lg font-display text-forest">o PetCare organiza o que seu pet precisa, antes de voce precisar lembrar</p>
      </div>
      <div className="flex mt-8 items-center gap-8">
        <h1 className="bg-coral rounded-full p-2.5 text-leaf-light shadow-2xl">Ver Funcionalidades</h1>
        <h1 className="outline-solid outline-forest-soft rounded-full p-2 text-forest shadow-2xl">Falar com um Veterinário</h1>
      </div>

    </section>
  )
}


