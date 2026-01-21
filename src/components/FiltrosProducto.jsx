function FiltrosProducto({
  soloDisponibles,
  setSoloDisponibles,
  precioMin,
  setPrecioMin,
  precioMax,
  setPrecioMax,
  ordenamiento,
  setOrdenamiento
}) {
  return (
    <div className="filtros">
      <h3>Filtros</h3>
      {/* Filtro de disponibilidad */}
      <div className="filtro-grupo">
        <label>
          <input
            type="checkbox"
            checked={soloDisponibles}
            onChange={(e) => setSoloDisponibles(e.target.checked)}
          />
          Solo productos disponibles
        </label>
      </div>
      {/* Filtro de precio */}
      <div className="filtro-grupo">
        <label>
          Precio mínimo: ${precioMin}
          <input
            type="range"
            min="0"
            max="2000"
            value={precioMin}
            onChange={(e) => setPrecioMin(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="filtro-grupo">
        <label>
          Precio máximo: ${precioMax}
          <input
            type="range"
            min="0"
            max="2000"
            value={precioMax}
            onChange={(e) => setPrecioMax(Number(e.target.value))}
          />
        </label>
      </div>
      {/* Ordenamiento */}
      <div className="filtro-grupo">
        <label>
          Ordenar por:
          <select value={ordenamiento} onChange={(e) => setOrdenamiento(e.target.value)}>
            <option value="nombre">Nombre (A-Z)</option>
            <option value="nombre-desc">Nombre (Z-A)</option>
            <option value="precio-asc">Precio (menor a mayor)
</option>
            <option value="precio-desc">Precio (mayor a menor)
</option>
            <option 
value="disponibilidad">Disponibilidad</option>
          </select>
        </label>
</div>
</div>
);
}
export default FiltrosProducto;