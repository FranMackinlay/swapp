import { Starships } from '@/interfaces/starships.interface';
import axios from 'axios';
import PATHS from '../config/core.constants';

const StarshipsSrv = {
  getStarships: async (): Promise<Starships> => {
    const { data } = await axios({
      method: 'get',
      url: `${PATHS.STARSHIPS}`,
    });
    return data;
  },
};

export default StarshipsSrv;
