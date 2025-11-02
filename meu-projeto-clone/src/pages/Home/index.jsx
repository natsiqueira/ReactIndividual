import React from 'react';
import Card from '../../components/Card';

const Home = () => {
  const produtos = [
    {
      title: "Produto React Incrível",
      description: "Este é um produto incrível feito com React",
      price: "199,99",
      imageUrl: "https://via.placeholder.com/280x200"
    },
    {
      title: "Produto Especial",
      description: "Um produto especial para você",
      price: "299,99",
      imageUrl: "https://via.placeholder.com/280x200"
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
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
  );
};

export default Home;