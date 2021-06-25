import axios from 'axios';
import People from '../interfaces/people.interface';
import PATHS from '../config/core.constants';

const PeopleSrv = {
  getPeople: async (): Promise<People> => {
    const { data } = await axios({
      method: 'get',
      url: `${PATHS.PEOPLE}`,
    });
    return data;
  },
};

export default PeopleSrv;
