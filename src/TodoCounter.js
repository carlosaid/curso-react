import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    total === completed ?
      <h1 className="TodoCounter">Felicidades completaste todos los todos</h1>
      :
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
  );

}

export { TodoCounter };

