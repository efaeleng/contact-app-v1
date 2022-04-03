import { useEffect, useState } from 'react';

import ContactCards from './ContactCards';

import useFetch from 'react-fetch-hook';
import createTrigger from 'react-use-trigger';
import useTrigger from 'react-use-trigger/useTrigger';

const requestTrigger = createTrigger();

const App = () => {
  const requestTriggerValue = useTrigger(requestTrigger);

  const url = 'https://random-data-api.com/api/users/random_user?size=10';

  const [contactList, setContactList] = useState();

  // console.log( data )
  const { data } = useFetch(url, {
    depends: [requestTriggerValue],
  });

  useEffect(() => {
    setContactList(data);
  }, [data]);

  return (
    <div className={'bg-gray-300'}>
      <section className={'py-5 px-24'}>
        <button
          className={
            'mt-7 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          }
          onClick={() => {
            requestTrigger();
          }}
        >
          Fetch Random Users
        </button>
      </section>

      <section className={'grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20'}>
        <ContactCards contactList={contactList} />
      </section>
    </div>
  );
};

export default App;
