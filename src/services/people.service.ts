import axios from 'axios';
import People, { Person } from '../interfaces/people.interface';
import PATHS from '../config/core.constants';

const PeopleSrv = {
  getPeople: async (page: number): Promise<People> => {
    const { data } = await axios({
      method: 'get',
      url: `${PATHS.PEOPLE}?page=${page}`,
    });
    return data;
  },
  getPerson: async (id: number): Promise<Person> => {
    const { data } = await axios({
      method: 'get',
      url: `${PATHS.PEOPLE}/${id}`,
    });
    return data;
  },
};

export default PeopleSrv;
