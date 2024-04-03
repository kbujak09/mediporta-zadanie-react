import './App.scss';
import Title from './components/title/Title';
import Search from './components/search/Search';
import Results from './components/results/Results';
import Pagination from './components/pagination/Pagination';
import { Context } from './context/context';

import { useEffect, useState } from 'react';

const App = () => {

  const [input, setInput] = useState('');
  const [sort, setSort] = useState('populardesc');
  const [pageSize, setPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  }

  const handleSortChange = (type) => {
    setSort(type);
  }

  const handleInputChange = (input) => {
    setInput(input);
    setCurrentPage(1);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const handleCurrentSearchChange = (input) => {
    setCurrentSearch(input);
  }

  const getFetchLink = (input) => {
    switch (sort) {
      case 'populardesc':
        return `https://api.stackexchange.com/2.3/tags?pagesize=100&order=desc&sort=popular&inname=${input}&site=stackoverflow`;
      case 'activityasc':
        return `https://api.stackexchange.com/2.3/tags?pagesize=100&order=asc&sort=activity&inname=${input}&site=stackoverflow`;
      case 'activitydesc':
        return `https://api.stackexchange.com/2.3/tags?pagesize=100&order=desc&sort=activity&inname=${input}&site=stackoverflow`;
      case 'nameasc':
        return `https://api.stackexchange.com/2.3/tags?pagesize=100&order=asc&sort=name&inname=${input}&site=stackoverflow`;
      case 'namedesc':
        return `https://api.stackexchange.com/2.3/tags?pagesize=100&order=desc&sort=name&inname=${input}&site=stackoverflow`;
      default:
        return `https://api.stackexchange.com/2.3/tags?pagesize=100&order=desc&sort=popular&inname=${input}&site=stackoverflow`;
    }
  }

  const initialFetch = () => {
    fetchData('https://api.stackexchange.com/2.3/tags?pagesize=100&order=desc&sort=popular&site=stackoverflow');
  };

  const fetchData = async (link) => {
    if (!navigator.onLine) {
      setError('Brak połączenia z internetem. Spróbuj odświeżyć.');
      return;
    }
    try {
      setIsLoading(true);
      const res = await fetch(link)

      if (!res.ok) {
        setIsLoading(false);
        setError(`Error ${res.status}. ${res.statusText}`)
      }

      const jsoned = await res.json();

      setIsLoading(false);
      setResults(jsoned);
    }
    catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    initialFetch();
  }, []);

  useEffect(() => {
    fetchData(getFetchLink(currentSearch));
  }, [sort]);
 
  return (
    <div className="App">
      <Title title={'Wyszukiwarka Tagów Stack Overflow'}/>
      <Context.Provider value={{ handlePageSizeChange, handleSortChange, handleInputChange, fetchData, handleCurrentSearchChange, input, getFetchLink, pageSize, currentPage, handlePageChange }}>
        <Search />
        <Results data={results} error={error} isLoading={isLoading}/>
        <Pagination />
      </Context.Provider>
    </div>
  );
}

export default App;
