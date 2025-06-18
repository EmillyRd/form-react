import React, {useState} from 'react';

const MyForm = ({user}) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviando o form")
    console.log(name, email, bio, role)

    //limpar form
    setName("")
    setEmail("")
    setBio("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Formulário</h2>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>

        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder={`Digite seu e-mail@gmail.com`}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>

        <label>
          <span>Bio:</span>
        </label>
        <textarea
          name="bio"
          placeholder="Digite sua bio"
          onChange={(event) => setBio(event.target.value)}
          value={bio}
        />

        <label>
          <span>Função no sistema</span>
          <select
            name='role'
            onChange={(event) => setRole(event.target.value)}
            value={role}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input
          type='submit'
          value="ENVIAR"
        />
      </form>
    </div>
  );
};

export default MyForm;
