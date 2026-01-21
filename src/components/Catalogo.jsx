import ProductCard from "./ProductCard";
import laptopImage from "../images/laptop-pro.jpg";
import mouseImage from "../images/mouse.jpg";
import monitorImage from "../images/monitor-4k.jpg";
const productos = [
  {
    id: 1,
    nombre: "Laptop Pro",
    precio: 1499,
    descripcion: "Computadora portátil de alto rendimiento",
    imagen: laptopImage,
    disponible: true
  },
  {
    id: 2,
    nombre: "Mouse Inalámbrico",
    precio: 49,
    descripcion: "Mouse ergonómico con batería de larga duración",
    imagen: mouseImage,
    disponible: true
  },
  {
    id: 3,
    nombre: "Monitor 4K",
    precio: 899,
    descripcion: "Monitor ultra HD para desarrollo profesional",
    imagen: monitorImage,
    disponible: false
  }
];
function Catalogo() {
  return (
    <section className="catalogo">
      <h1>Catálogo de Productos</h1>
      <div className="productos-grid">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            descripcion={producto.descripcion}
            imagen={producto.imagen}
            disponible={producto.disponible}
          />
        ))}
      </div>
    </section>
  );
}
export default Catalogo;