import { itemsFooter } from "../utils/constants";

export default function Footer() {
  return (
    <div className="text-black mt-32">
      <div className="pb-4 grid grid-rows-[1fr,_1fr,_20px] gap-y-10">
        <div className="w-full rounded-lg -mt-20 relative z-50 h-64 lg:w-full lg:min-w-full md:mx-auto">
          <div className="relative h-full">
            <div
              className="bg-gradient-principal w-full h-full"
            />
            <div className="absolute inset-8 text-white grid gap-y-4 font-bold">
              <div className="flex justify-center items-center relative">
                <h3 className="uppercase inline-block text-4xl font-extrabold bg-gradient-to-r from-blue-900 via-white-950 to-fuchsia-900 text-transparent bg-clip-text ">
                  Protegemos tus compras y ventas
                  <br />
                  con la mayor seguridad y eficacia
                  <div className="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-fubluefrom-blue-900 via-white-950 to-fuchsia-900 animate-pulse" />
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-x-0  text-sm lg:flex lg:justify-evenly">
          {
            itemsFooter.map((item, index) => (
              <div
                className="grid grid-rows-[repeat(5,_30px)] md:place-items-center"
                key={index}
              >
                <span>{item.title}</span>
                {
                  item.items.map((subItem, indexB) => (
                    <span
                      className="font-thin"
                      key={index + indexB + 17}
                    >
                      {subItem}
                    </span>
                  ))
                }
              </div>
            ))
          }
        </div>

        <div className="flex justify-around text-sm font-bold relative before:absolute before:bg-gray-600 before:-top-3 before:h-[1px] before:w-full">
          <span>© 2023</span>
          <span>Todos los derechos reservados</span>
        </div>
      </div>
    </div>
  );
}
