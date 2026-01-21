import { memo } from "react";
// Contador para debugging
let renderCount = 0;
const ProductCard = memo(
  function ProductCard({ nombre, precio, descripcion, imagen, 
disponible }) {
    // Incrementar contador en cada render
    renderCount++;
    // Log para debugging
    console.log(
      `%c[ProductCard] Renderizado #${renderCount}: ${nombre}`,
      "color: green; font-weight: bold;"
    );
    return (
      <div className="product-card">
        <img src={imagen} alt={nombre} className="product-image" 
/>
        <div className="product-content">
          <h3>{nombre}</h3>
          <p className="descripcion">{descripcion}</p>
          <div className="product-footer">
Catalogo.jsx (con logging mejorado):
            <span className="precio">${precio}</span>
            {disponible ? (
              <span className="badge disponible">✓ En 
stock</span>
            ) : (
              <span className="badge agotado">✗ Agotado</span>
            )}
          </div>
          {/* Indicador visual de renders */}
          <div className="render-count" style={{ fontSize: 
"0.7rem", color: "#999", marginTop: "0.5rem" }}>
            Renders: {renderCount}
          </div>
        </div>
      </div>
    );
  },
  // Comparación personalizada (opcional)
  (prevProps, nextProps) => {
    return (
      prevProps.nombre === nextProps.nombre &&
      prevProps.precio === nextProps.precio &&
      prevProps.descripcion === nextProps.descripcion &&
      prevProps.imagen === nextProps.imagen &&
      prevProps.disponible === nextProps.disponible
    );
  }
);
ProductCard.displayName = "ProductCard";
export default ProductCard;