function ProductCard({ nombre, precio, descripcion, imagen, 
disponible }) {
  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} className="product-image" />
      <div className="product-content">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <div className="product-footer">
          <span className="precio">${precio}</span>
          {disponible ? (
            <span className="badge disponible">✓ En stock</span>
          ) : (
            <span className="badge agotado">✗ Agotado</span>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductCard;