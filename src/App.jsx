import React from "react";
import colors from "./data";
import copo from './assets/copo.png'
import "./App.css";

// 1. Listar as cores ✅
// 2. Renderizar o copo do suco com a cor ✅
// 3. Mudar a cor do copo. ✅
// 4. Criar o input de texto ✅
// 5. Armazenar as informações do input no estado ✅
// 6. Atualizar essas informações ✅
// 7. Filtrar os sucos pelas cores ✅

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     colorFilter: '',
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // PUBLIC CLASS FIELD
  state = {
    colorFilter: '',
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      colorFilter: value,
    });

    // this.setState((prev) => ({
    //     colorFilter: value,
    // }));
  }

  render() {
    const { colorFilter } = this.state;

    return (
      <>
        <h1>🍹 Que Suco Foi Esse? 🍹</h1>

        <input type="text" onChange={ this.handleChange } />

        <ul className="juice-container" >
          {
            colors
            .filter(({suco}) => (
              suco.toLowerCase().includes(colorFilter.toLowerCase())
            ))
            .map(({ suco, hex, name }) => (
              <li key={ hex } >
                <img
                  style={ { backgroundColor: hex } }
                  className="glass"
                  src={ copo }
                  alt={ name }
                />
                <p className="text-juice" >{`suco de ${suco}`}</p>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}

export default App;
