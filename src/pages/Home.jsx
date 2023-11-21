import { BsDot } from 'react-icons/bs'
import { PAGE_SERVICES } from '../utils/constants'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 px-5 pb-3 w-11/12 mx-auto">
      <div className='grid grid-cols-2 my-12 gap-x-6'>
        <section className='flex items-center'>
          <div className="h-1/2">
            <header>
              <h1 className="text-center text-3xl font-bold">Revoluciona tu forma de comprar y vender en línea</h1>
            </header>
            <p className="py-6 font-semibold text-center text-xl">
              Sumérgete en un universo digital donde la variedad es infinita.
            </p>
          </div>
        </section>
        <section className='h-96'>
          <img className='rounded-xl h-full w-full' src="https://www.ecommerceefectivo.com/wp-content/uploads/2015/12/Acciones-para-mejorar-las-ventas-online.png" alt="Imagen que muestra a un doctor que genera confianza y calidez." />
        </section>
      </div>
      <div className="bg-gradient-principal h-[1px] rounded-sm" />
      <div className='grid grid-cols-2 gap-x-6 my-12'>
        <section className='h-96'>
          <img className='h-full rounded-xl w-full' src="https://marketingfarmaceutico.bsm.upf.edu/wp-content/uploads/2016/03/El-impacto-en-la-farmacia-de-la-venta-de-productos-OTC-por-Internet-.jpg" alt="Imagen con medicamentos." />
        </section>
        <section>
          <h2 className="text-center text-2xl font-bold">Servicios que ofrecemos</h2>
          <ul className='mt-4'>
            {
              PAGE_SERVICES.map((service, index) => (
                <li key={index} className='flex mb-2 last:mb flex-wrap'>
                  <span className='pt-1'>
                    <BsDot />
                  </span>
                  <strong className='inline-block font-semibold'>{service.title}</strong>
                  <p>
                    {service.description}
                  </p>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </div>
  )
}
