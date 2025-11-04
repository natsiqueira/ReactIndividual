import React from 'react';
import Card from '../../components/Card';

const Home = () => {
  const produtos = [
    {
      title: "Curso React Básico: O 'Hello World' Que Você Finalmente Vai Entender",
      description: "Cansado de ver seu currículo ser ignorado porque você só sabe HTML e CSS? Este curso é o seu primeiro passo para parecer que entende o que faz! Vamos começar do ZERO (sim, do zero, se você confundir setState com setHour, eu te dou um abraço e continuamos). Você vai aprender a criar componentes, entender o que é o 'tal' do JSX e, o mais importante, finalmente saber como realmente o React funciona. No final, você será capaz de criar uma lista de tarefas que não desaparece quando você atualiza a página. Milagre? Não, é React!",
      price: "10.99,90",
      imageUrl: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
    },
    {
      title: "Curso React Avançado",
      description: "Achou que já era sênior porque usou um useEffect uma vez? Pense de novo. Este é o curso onde a diversão (e a dor de cabeça) realmente começa. Mergulharemos fundo em Hooks personalizados, Gerenciamento de Estado Global (adeus, props drilling infernal!), performance com memo e useCallback, e o pavoroso mundo do Server-Side Rendering (SSR). Se você sair daqui sem ter chorado pelo menos uma vez com a performance do seu bundle, você não prestou atenção. Prepare-se para otimizar como se sua vida dependesse disso!",
      price: "15.999,90",
      imageUrl: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
    },
    {
      title: "Workshop React Native: Codifique Uma Vez, Depure em Dois Lugares",
      description: "O sonho de criar um app que roda em Android e iOS... com JavaScript! O Workshop React Native é para quem já sofre com React Web e quer levar essa experiência de sofrimento para o mundo mobile. Você vai aprender a transformar seus componentes Web em algo que funciona em um smartphone (quase sempre). Vamos cobrir desde a configuração do ambiente (sim, vai quebrar, mas vamos consertar) até a navegação e a integração de recursos nativos. No final, você terá um app de portfólio e a certeza de que a vida de desenvolvedor mobile nunca é fácil. Traga seu carregador e muita paciência!",
      price: "20.999,90",
      imageUrl: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg"
    }
  ];

  return (
    <div>
      {/* Header */}
      <header style={{
        backgroundColor: '#1a73e8',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginBottom: '50px'
      }}>
        <h1>React da Serra</h1>
        <p>Os melhores cursos de React do Brasil</p>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <section style={{
          textAlign: 'center',
          marginBottom: '10px'
        }}>
          <h2>Nossos Cursos</h2>
          <p>Escolha o curso ideal para sua jornada no desenvolvimento React</p>
        </section>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center'
        }}>
          {produtos.map((produto, index) => (
            <Card
              key={index}
              title={produto.title}
              description={produto.description}
              price={produto.price}
              imageUrl={produto.imageUrl}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px',
        borderTop: '1px solid #ddd'
      }}>
        <p>React da Serra © 2025 - Todos os direitos reservados</p>
        <p>Região Serrana, RJ</p>
      </footer>
    </div>
  );
};

export default Home;