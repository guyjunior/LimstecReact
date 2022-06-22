
import React, { useState, useEffect, response } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import logoCadastro from './assets/cadastro.png';


function App() {

  const baseUrl = "https://localhost:44315/api/samples";

  const [data, setData] = useState([]);

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    pedidoGet();
  })

  return (
    <div className="App">
      <br />
      <h1>Amostras</h1>
      <header>
        <img src={logoCadastro} alt='Cadastro' />
        <button className="btn btn-sucess">NewSample</button>
      </header>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>CodInterno</th>
            <th>DataCriacao</th>
          </tr>
        </thead>
        <tbody>
          {data.map(sample => (
            <tr key={sample.id}>
              <td>{sample.id}</td>
              <td>{sample.cod_Interno}</td>
              <td>{sample.data_Cadastro}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
