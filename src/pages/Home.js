import React ,{useState}from 'react';
import { Grid } from '@mui/material';
import Header from '../components/Header';
import TopBody from '../components/TopBody';
import MainSection from '../components/Main';
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
       <Header onSearch={handleSearch} />
       <TopBody/>
       <MainSection searchQuery={searchQuery} />
    </>
  );
};

export default HomePage;
