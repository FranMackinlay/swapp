import { Starship, Starships } from '@/interfaces/starships.interface';
import axios from 'axios';
import PATHS from '../config/core.constants';

const StarshipsSrv = {
  getStarships: async (page: number): Promise<Starships> => {
    const { data } = await axios({
      method: 'get',
      url: `${PATHS.STARSHIPS}?page=${page}`,
    });
    return data;
  },
  getPerson: async (id: number): Promise<Starship> => {
    const { data } = await axios({
      method: 'get',
      url: `${PATHS.STARSHIPS}/${id}`,
    });
    return data;
  },
};

export default StarshipsSrv;
