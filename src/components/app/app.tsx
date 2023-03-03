import {Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import BracketsBalancePage from '../../pages/bracketsBalance-page/bracketsBalance-page';
import MainPage from '../../pages/main-page/main-page';
import MazePage from '../../pages/maze-page/maze-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={AppRoute.Maze}
        element={<MazePage />}
      />
      <Route
        path={AppRoute.BracketsBalance}
        element={<BracketsBalancePage />}
      />
    </Routes>
  );
}

export default App;
