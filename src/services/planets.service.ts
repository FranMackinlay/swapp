import { Planets } from '@/interfaces/planets.interface';
import axios from 'axios';
import PATHS from '../config/core.constants';

const PlanetsSrv = {
  getPlanets: async (): Promise<Planets> => {
    const { data } = await axios({
      method: 'get',
      url: `${PATHS.PLANETS}`,
    });
    return data;
  },
};

export default PlanetsSrv;
