// import React, { useReducer } from 'react';

// // Étape 1 : Créez un réducteur
// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

//  export function Counter() {
//   // Étape 2 : Utilisez useReducer avec le réducteur initial et l'état initial
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });

//   return (
//     <div>
//       <p className='c'>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrémenter</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Décrémenter</button>
//     </div>
//   );
// }

// export default Counter;
import React, { useReducer } from 'react';

// Étape 1 : Créez un réducteur
const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_GREEN':
      return 'Vert';
    case 'TOGGLE_FLASHING_ORANGE':
      return 'Orange clignotant';
    case 'TURN_ON_SOLID_ORANGE':
      return 'Orange fixe';
    case 'TOGGLE_RED':
      return 'Rouge';
    case 'TURN_OFF':
      return 'Éteint';
    default:
      return state;
  }
};

export function TrafficLight() {
  // Étape 2 : Utilisez useReducer avec le réducteur initial et l'état initial
  const [state, dispatch] = useReducer(trafficLightReducer, 'Éteint');

  return (
    <div>
      <div className={`light ${state === 'Vert' ? 'green' : ''}`}></div>
      <div className={`light ${state === 'Orange clignotant' ? 'orange-flashing' : ''}`}></div>
      <div className={`light ${state === 'Orange fixe' ? 'orange-solid' : ''}`}></div>
      <div className={`light ${state === 'Rouge' ? 'red' : ''}`}></div>
      <div className={`light ${state === 'Éteint' ? 'yellow' : ''}`}></div>

      <button onClick={() => dispatch({ type: 'TOGGLE_GREEN' })}>Vert</button>
      <button onClick={() => dispatch({ type: 'TOGGLE_FLASHING_ORANGE' })}>Orange clignotant</button>
      <button onClick={() => dispatch({ type: 'TURN_ON_SOLID_ORANGE' })}>Orange fixe</button>
      <button onClick={() => dispatch({ type: 'TOGGLE_RED' })}>Rouge</button>
      <button onClick={() => dispatch({ type: 'TURN_OFF' })}>Éteindre</button>
    </div>
  );
}


