import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Header from './components/header/Header';
import { fetcher } from './utils/fetcher';
import useSWR from 'swr';
import axios from 'axios';
import { API_URL } from './utils/API';
import PodcastGrid from './components/grid/PodcastGrid';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [podcasts, setPodcasts] = useState([]);
  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // useEffect(() => {
  //   axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setPodcasts(res.data);
  //   });
  // }, []);
  console.log(data);
  return (
    <>
      <Layout>
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <PodcastGrid podcasts={data} />
      </Layout>
    </>
  );
}

export default App;
