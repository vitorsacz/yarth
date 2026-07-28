import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import FurniturePage from './pages/FurniturePage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/esquadrias" element={<ServicePage slug="esquadrias" />} />
        <Route path="/vidracaria" element={<ServicePage slug="vidracaria" />} />
        <Route path="/serralheria" element={<ServicePage slug="serralheria" />} />
        <Route path="/mobiliario" element={<FurniturePage />} />
      </Route>
    </Routes>
  );
}
