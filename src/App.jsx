import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import {api} from"./api"
const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    valor:""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Nome",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Aniversario",
      label: "Aniversario",
    },
    {
      id: 4,
      name: "valor",
      type: "text",
      placeholder: "Valor",
      label: "Valor",
      required: true,
    },
   
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  var data = {
    email: values.email,
    nome: values.username,
    valor: values.valor
  };
  async function login() {
    console.log(values.valor)
      var { headers } = await api.post("",data);

      alert("Credito Solicitado")
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>        <br></br>

        <h1>MagPay</h1>
        <br></br>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
           value={values[input.name]}
            onChange={onChange}
          />
        ))}
      <button type="submit" onClick={login}>Solicitar Credito</button>
      </form>

    </div>

  );
};

export default App;
