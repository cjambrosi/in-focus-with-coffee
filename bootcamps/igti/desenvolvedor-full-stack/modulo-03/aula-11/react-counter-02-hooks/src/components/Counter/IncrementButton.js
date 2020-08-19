import React from 'react'

export default function IncrementButton(props) {
  const { onIncriment } = props;
  
  const handleButtonClick = () => {
    onIncriment('+');
  };

  // Props, o que é passado para o componente
  console.log(props);

  return (
    <button
      onClick={handleButtonClick}
      className="waves-effect waves-light btn green darken-4"
    >
    +
    </button>
  );
}
