import { ChevronLeft } from '@sexyicons/react';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <ChevronLeft set='bulk' />
        <ChevronLeft set='lineal' />
        <ChevronLeft set='solid' />
        <ChevronLeft set='lines' />
      </div>
    </>
  );
};

export default Home;
