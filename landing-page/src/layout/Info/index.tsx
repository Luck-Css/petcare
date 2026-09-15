import Button from "../../components/Button";

export default function Info() {
  return (
    <section className="py-10 px-10 bg-[var(--color-forest)] mx-20 my-40 rounded-3xl flex justify-between items-center">
       <div>
        <p className="text-white font-bold text-2xl mb-3.5 max-w-100">
            Seu pet merece cuidado sem correria 
        </p>
        <p className="text-white text-lg max-w-100">
            Baixe o PetCare e organize toda rotina em menos de 2 minutos.
        </p>
       </div>

       <Button 
        text="Baixar agora"
        text_color="text-white"
        background_color="var(--color-coral)"
        background="hover:bg-[var(--color-coral-dark)]"
        link="/"
       />
    </section>
  )
}

