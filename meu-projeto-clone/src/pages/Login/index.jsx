import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormArea, Input, Button } from './style';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    try {
      // Simulação de autenticação
      if (formData.email === 'usuario@email.com' && formData.password === '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/home');
      } else {
        setError('Email ou senha incorretos');
      }
    } catch (error) {
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <Container>
      <FormArea>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
          {error && (
            <p style={{
              color: '#ff3333',
              marginBottom: '10px',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              {error}
            </p>
          )}
          <Button type="submit">
            Entrar
          </Button>
        </form>
      </FormArea>
    </Container>
  );
};

export default Login;