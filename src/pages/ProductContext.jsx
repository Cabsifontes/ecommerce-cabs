import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productoLs = JSON.parse(localStorage.getItem("productos"));

    if (productoLs && Array.isArray(productoLs)) {
      setProductos(productoLs);
    } else {
      const defaulProductos = [
        {
          id: 1,
          title: "Pantalones Palazzo de pierna ancha",
          description:
            "Canaliza un glamour relajado con estos pantalones palazzo que se extienden hasta el suelo, confeccionados en faya de mezcla de algodón con piernas ultra anchas.",
          price: 300,
          image: "1.avif",
          codigo: "ABC123",
          categoria: "Moda",
          stock: 3,
        },
        {
          id: 2,
          title: "Suéter de corazón tejido en intarsia",
          description:
            "Un gran corazón tejido en intarsia aporta un toque de fantasía a este suéter de cuello redondo, tejido en lana merino extrafina.",
          price: 200,
          image: "2.avif",
          codigo: "SDF134",
          categoria: "Moda",
          stock: 3,
        },
        {
          id: 3,
          title: "Vestido de fiesta circular sin tirantes",
          description:
            "Este vestido de gala en tonos atardecer muestra la impecable artesanía del taller con un motivo circular con bloques de color dibujados a mano, logrado con paneles cosidos de faille de seda.",
          price: 1200,
          image: "3.avif",
          codigo: "GHY133",
          categoria: "Moda",
          stock: 1,
        },
        {
          id: 4,
          title: "Vestido sin tirantes con volantes plegados",
          description:
            "Vestido sin tirantes con volantes plegadosEste espectacular vestido sin tirantes presenta capas de volantes de gazar de seda estructurados, adornados con un ribete blanco gráfico. Los volantes de crin cosidos en la parte inferior le dan más cuerpo y volumen.",
          price: 1000,
          image: "4.avif",
          codigo: "GYK567",
          categoria: "Moda",
          stock: 1,
        },
        {
          id: 5,
          title: "Vestido midi completo sin tirantes",
          description:
            "Este impresionante vestido midi azul ultramar sin duda llamará la atención. Confeccionado en faya de seda brillante, presenta un corpiño tipo corsé interno y una falda con estructura de rejilla.",
          price: 700,
          image: "5.avif",
          codigo: "QWE123",
          categoria: "Moda",
          stock: 2,
        },
        {
          id: 6,
          title: "Vestido asimétrico con estampado floral",
          description:
            "Este espectacular vestido combina un minivestido entallado con una voluminosa sobrefalda, con bajo asimétrico y cola. Flores negras contrastan con un fondo blanco por encima de la cintura, mientras que flores blancas contrastan con el negro por debajo.",
          price: 1000,
          image: "6.avif",
          codigo: "HJK893",
          categoria: "Moda",
          stock: 1,
        },
        {
          id: 7,
          title: "Minivestido con rosetas sin tirantes",
          description:
            "Una magnífica roseta adorna este divertido minivestido rosa, confeccionado en faille de seda con un corpiño sin tirantes y una falda amplia.",
          price: 500,
          image: "7.avif",
          codigo: "DCV223",
          categoria: "Moda",
          stock: 3,
        },
        {
          id: 8,
          title: "Vestido estilo gabardina sin cuello con estampado floral",
          description:
            "Nuestro icónico vestido trench luce un look contemporáneo y fresco para la colección Resort 2025, con un corpiño de corte limpio y sin cuello, y un llamativo estampado floral. Confeccionado en gazar de seda, presenta mangas tres cuartos y una falda larga hasta el suelo con un fajín anudado.",
          price: 600,
          image: "8.avif",
          codigo: "TGV143",
          categoria: "Moda",
          stock: 3,
        },
        {
          id: 9,
          title: "Capa con roseta de lunares",
          description:
            "Esta impresionante capa está cubierta de flores de lunares, elaboradas en gazar de seda, con centros de cuentas finas. Un lazo extragrande le añade un toque extra de fantasía primaveral.",
          price: 900,
          image: "9.avif",
          codigo: "MNB121",
          categoria: "Moda",
          stock: 2,
        },
        {
          id: 10,
          title: "Vestido con bordado floral",
          description:
            "Este vestido de organza rosa deslumbra con una cascada de amapolas bordadas, adornadas con brillantes cristales y cuentas. La espalda abierta le da un acabado seductor.",
          price: 1600,
          image: "10.avif",
          codigo: "QWA523",
          categoria: "Moda",
          stock: 1,
        },
        {
          id: 11,
          title: "Vestido de sirena con lunares",
          description:
            "Este alegre vestido de lunares está confeccionado en gazar de seda con un corpiño fruncido sin tirantes que se abre hasta un dramático dobladillo de trompeta. Flores bordadas a mano con detalles de cuentas completan este impactante look.",
          price: 1100,
          image: "11.avif",
          codigo: "TFC902",
          categoria: "Moda",
          stock: 1,
        },
        {
          id: 12,
          title: "Vestido con cuello halter y cintura en V",
          description:
            "Una espectacular cintura en forma de V y un escote halter pronunciado definen este llamativo vestido bicolor, confeccionado en faille de seda amarilla con un corpiño de jersey negro.",
          price: 1200,
          image: "12.avif",
          codigo: "ZXS683",
          categoria: "Moda",
          stock: 1,
        },
        {
          id: 13,
          title: "Vestido de fiesta con estampado floral",
          description:
            "Un atrevido estampado floral en blanco y negro define este vestido de fiesta de faille, expresando la elegancia gráfica de la temporada.",
          price: 800,
          image: "13.avif",
          codigo: "UYT653",
          categoria: "Moda",
          stock: 3,
        },
        {
          id: 14,
          title: "Vestido de columna con corte en la cintura",
          description:
            "Con impactantes aberturas en los laterales y la espalda, este vestido de crepé de corte columna combina elegancia y encanto. Un lazo negro recorre la espalda, dándole un toque de fantasía.",
          price: 950,
          image: "14.avif",
          codigo: "VCX123",
          categoria: "Moda",
          stock: 2,
        },
        {
          id: 15,
          title: "Vestido midi de lunares con roseta",
          description:
            "Una atrevida flor bordada centra este vestido midi de gazar de seda, que ofrece una versión divertida del blanco y negro con estampados de lunares contrastantes en el corpiño y la falda amplia y plisada.",
          price: 1500,
          image: "15.avif",
          codigo: "MPD923",
          categoria: "Moda",
          stock: 1,
        },
        {
          id: 16,
          title: "Vestido de sirena sin mangas",
          description:
            "Las costuras princesa enfatizan las líneas largas y limpias de este llamativo vestido de faille de seda azul, que se ensancha en un dobladillo de sirena flotante.",
          price: 1600,
          image: "16.avif",
          codigo: "CMP883",
          categoria: "Moda",
          stock: 1,
        },
        {
          id: 17,
          title: "Vestido de trompeta alto-bajo bordado",
          description:
            "En este vestido de tul sin tirantes, las amapolas de hilo realzan los brillantes lunares con cuentas y los bordados florales, uniendo los motivos de la temporada. El voluminoso bajo asimétrico le aporta un toque dramático.",
          price: 1300,
          image: "17.avif",
          codigo: "EMF087",
          categoria: "Moda",
          stock: 1,
        },
        {
          id: 18,
          title: "Vestido de cuello redondo",
          description:
            "Este impresionante vestido de escote redondo está confeccionado en gazar de seda con una falda voluminosa pero liviana, cubierta debajo con una enagua completa y una capa de volantes de tul.",
          price: 800,
          image: "18.avif",
          codigo: "MRF973",
          categoria: "Moda",
          stock: 1,
        },
      ];

      setProductos(defaulProductos);
      localStorage.setItem("productos", JSON.stringify(defaulProductos));
    }
  }, []);

  const actualizarProductos = (productosActualizados) => {
    setProductos(productosActualizados);
    localStorage.setItem("productos", JSON.stringify(productosActualizados));
  };

  return (
    <ProductContext.Provider value={{ productos, setProductos, actualizarProductos }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
