import Results from '../components/results/Results';
import { Context } from '../context/context';

export default {
  title: 'Results',
  component: Results
}

const mockData = {items: [
  { name: 'mock_Javascript', count: 1234 },
  { name: 'mock_React', count: 123 },
  { name: 'mock_HTML', count: 456 },
  { name: 'mock_CSS', count: 789 },
  { name: 'mock_Node.js', count: 567 },
  { name: 'mock_Express.js', count: 890 },
  { name: 'mock_MongoDB', count: 432 },
  { name: 'mock_SQL', count: 765 },
  { name: 'mock_Angular', count: 321 },
  { name: 'mock_Vue.js', count: 654 }
]}

const Template = ({data, error, isLoading, pageSize, currentPage}) => {
  return (
    <Context.Provider value={{pageSize: pageSize, currentPage: currentPage}}>
      <Results 
        data={data}
        error={error}
        isLoading={isLoading}
        pageSize={pageSize}
        currentPage={currentPage}/>
    </Context.Provider>
  )
};

export const ResultsTest = Template.bind({});
ResultsTest.args = {
  data: mockData,
  isLoading: false,
  pageSize: 10,
  currentPage: 1,
  error: ''
}

export const ResultsLoading = Template.bind({});
ResultsLoading.args = {
  data: mockData,
  isLoading: true,
  pageSize: 10,
  currentPage: 1,
  error: ''
}

export const ResultsNoData = Template.bind({});
ResultsNoData.args = {
  data: [],
  isLoading: false,
  pageSize: 10,
  currentPage: 1,
  error: ''
}

export const ResultsError = Template.bind({});
ResultsError.args = {
  data: [],
  isLoading: false,
  pageSize: 10,
  currentPage: 1,
  error: 'Brak połączenia z internetem. Spróbuj odświeżyć.'
}