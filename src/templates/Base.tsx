import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Hero } from './Hero';
import Search from './Search';

const Base = () => (
  <div className="antialiased text-gray-600 h-screen bg-gray-100">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Search />
  </div>
);

export { Base };
