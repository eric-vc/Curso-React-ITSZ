import { useState } from "react";
import ProductCard from "./ProductCard";
import laptopImage from "../images/laptop-pro.jpg";
import mouseImage from "../images/mouse.jpg";
import monitorImage from "../images/monitor-4k.jpg";
import tecladoMecanicoImage from "../images/teclado-mecanico.jpg";
import webcamImage from "../images/webcam-hd.jpg";
import hubUsbImage from "../images/hub-usb.jpg";
import mochilaImage from "../images/mochila-laptop.jpg";
import cableHdmiImage from "../images/cable-hdmi.jpg";
import soporteMonitorImage from "../images/soporte-monitor.jpg";
import lamparaLedImage from "../images/lampara-usb.jpg";
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
  },
  {
    id: 4,
    nombre: "Teclado Mecánico",
    precio: 189,
    descripcion: "Teclado RGB con switches mecánicos",
    imagen: tecladoMecanicoImage,
    disponible: true
  },
  {
    id: 5,
    nombre: "Webcam HD",
    precio: 129,
    descripcion: "Cámara web 1080p con micrófono",
    imagen: webcamImage,
    disponible: true
  },
  {
    id: 6,
    nombre: "Hub USB-C",
    precio: 79,
    descripcion: "Concentrador con 7 puertos USB 3.0",
    imagen: hubUsbImage,
    disponible: true
  },
  {
    id: 7,
    nombre: "Mochila para Laptop",
    precio: 69,
    descripcion: "Mochila resistente para laptops hasta 15.6 pulgadas",
    imagen: mochilaImage,
    disponible: false
  },
  {
    id: 8,
    nombre: "Cable HDMI 2.1",
    precio: 29,
    descripcion: "Cable 8K @ 60Hz de 2 metros",
    imagen: cableHdmiImage,
    disponible: true
  },
  {
    id: 9,
    nombre: "Soporte para Monitor",
    precio: 99,
    descripcion: "Soporte ajustable con almacenamiento",
    imagen: soporteMonitorImage,
    disponible: true
  },
  {
    id: 10,
    nombre: "Lámpara LED de Escritorio",
    precio: 89,
    descripcion: "Lámpara LED con control de brillo",
    imagen: lamparaLedImage,
    disponible: true
  }
];
function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  // Filtrar productos por búsqueda
  const productosFiltrados = productos.filter((producto) =>
    
producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
  // Calcular estadísticas
  const totalProductos = productos.length;
  const productosDisponibles = productos.filter(
    (p) => p.disponible
  ).length;
  const precioPromedio =
    productos.reduce((suma, p) => suma + p.precio, 0) / 
totalProductos;
  return (
    <section className="catalogo">
      <h1>Catálogo de Productos</h1>
      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="search-input"
        />
      </div>
      {/* Estadísticas */}
      <div className="statistics">
        <div className="stat">
          <h4>Total Productos</h4>
          <p>{totalProductos}</p>
        </div>
        <div className="stat">
          <h4>Disponibles</h4>
          <p>{productosDisponibles}</p>
        </div>
        <div className="stat">
          <h4>Precio Promedio</h4>
          <p>${precioPromedio.toFixed(2)}</p>
        </div>
        <div className="stat">
          <h4>Resultados Búsqueda</h4>
          <p>{productosFiltrados.length}</p>
        </div>
      </div>
      {/* Grid de productos */}
      <div className="productos-grid">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              descripcion={producto.descripcion}
              imagen={producto.imagen}
              disponible={producto.disponible}
            />
          ))
        ) : (
          <p className="no-results">
            No se encontraron productos que coincidan con "
{busqueda}"
</p>
)}
</div>
</section>
);
}
export default Catalogo;