import * as React from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import './App.css';

import FindByPincode from './components/FindByPincode';
import Table from './components/Table';
import { makeData } from './utils';

const BASE_URL = 'https://cdn-api.co-vin.in/api';
const PINCODE_ENDPOINT = '/v2/appointment/sessions/public/findByPin';
// const  DISTRICT_ENDPOINT = "/v2/appointment/sessions/public/findByDistrict";

const columns = [
  {
    Header: 'SR.NO',
    accessor: 'index',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Dose',
    accessor: 'dose',
  },
  {
    Header: 'Slots',
    accessor: 'slots',
  },
  {
    Header: 'Fees',
    accessor: 'fees',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
];

const App = () => {
  const [results, setResults] = React.useState([]);
  const handleSubmit = (event, type) => {
    event.preventDefault();
    const { target } = event;
    const { pincode } = target;
    const date = format(new Date(), 'dd-MM-yyyy');

    if (type === 'pincode') {
      axios
        .get(
          BASE_URL +
            PINCODE_ENDPOINT +
            '?pincode=' +
            pincode.value +
            '&date=' +
            date,
          {
            headers: {
              'accept-language': 'en-IN',
            },
          },
        )
        .then((response) => {
          const {
            data: { sessions },
          } = response;

          setResults(sessions);
        });
    }
  };

  return (
    <main>
      <h1 className='text-2xl font-bold leading-7 text-grey-900 sm:text-3xl sm:truncate'>
        Find Vaccination Center Near You
      </h1>
      <FindByPincode handleSubmit={handleSubmit} />
      <Table columns={columns} data={makeData(results)} />
    </main>
  );
};

export default App;
