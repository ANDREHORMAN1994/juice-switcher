import React from "react";
import colors from "./data";
import copo from './assets/copo.png'
import "./App.css";

// 1. listar as cores ✅
// 2. aparecer o suco com a cor ✅
// 3. Fazer o input
// 4. Armazenar as informações do Input
// 5. Atualizar essas informações
// 6. filtrar as cores
// 7. adicionar o copo e mudar de cor.

class App extends React.Component {

  handleChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <>
        <h1>🍹 Que Suco Foi Esse? 🍹</h1>

        <input type="text" onChange={ this.handleChange } />

        <ul className="juice-container" >
          {
            colors.map(({ suco, hex }) => (
              <li key={ hex } >
                <img className="glass" src={copo} alt="" />
                {/* <div className="color" style={{ backgroundColor: hex }}  /> */}
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
