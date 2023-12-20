import { Route, Routes } from 'react-router-dom';
import { SessionContextProvider } from './hooks/session-context';
import { NotFound } from './NotFound';
import { Home } from './components/Home';
import './App.css';
import { Nav } from './Nav';
import { MemoHello } from './components/Hello';
import { useCallback, useMemo } from 'react';
import { useCounter } from './hooks/counter-context';
import My from './components/My';
import Login from './components/Login';
import { Items } from './components/Items';
import { Item } from './components/Item';
import { ItemLayout } from './components/ItemLayout';

function App() {
  const { count } = useCounter();
  // const fn = () => 'FN!';
  const fn = useCallback(() => 'FN!', []);
  // const age = count + 1;
  const age = useMemo(() => count + 1, [count]);

  return (
    <SessionContextProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ttt' element={<h1>TTTxxx</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/my' element={<My />} />
        {/* <Route path='/items' element={<Items />} />
        <Route path='/items/:id' element={<Item />} /> */}
        <Route path='/items' element={<ItemLayout />}>
          <Route index element={<Items />} />
          <Route path=':id' element={<Item />} />
        </Route>
        <Route path='/hello' element={<MemoHello age={age} fn={fn} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </SessionContextProvider>
  );
}

export default App;
