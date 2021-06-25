import { Planet, Planets } from '@/interfaces/planets.interface';
import axios from 'axios';
import PATHS from '../config/core.constants';

const PlanetsSrv = {
  getPlanets: async (page: number): Promise<Planets> => {
    const { data } = await axios({
      method: 'get',
      url: `${PATHS.PLANETS}?page=${page}`,
    });
    return data;
  },
  getPlanet: async (id: number): Promise<Planet> => {
    const { data } = await axios({
      method: 'get',
      url: `${PATHS.PLANETS}/${id}`,
    });
    return data;
  },
};

export default PlanetsSrv;
