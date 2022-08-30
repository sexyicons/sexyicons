import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';

const About = lazy(() => import('./views/about/About'));
const Home = lazy(() => import('./views/home/Home'));

function App() {
  return (
    <div className={style.app}>
      <h1
        style={{
          textAlign: 'center',
          background: 'linear-gradient(to bottom right, #63F0FE, #384BDF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '4rem',
        }}
      >
        Sexy Icons v1
      </h1>
      <nav className={style.nav}>
        <a
          href='https://sexyicons-storybook.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Storybook
        </a>
        <a
          href='https://github.com/sexyicons/sexyicons'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
