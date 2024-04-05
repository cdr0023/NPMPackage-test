import React from 'react';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={()=>{}}>
    {'Hello World'}
  </button>
  );
};

export default App;