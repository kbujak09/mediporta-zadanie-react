import Pagination from '../components/pagination/Pagination';
import { Context } from '../context/context';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    onChange: { action: 'current page'}
  }
}

const Template = ({pageSize, onChange, currentPage}) => {
  return (
    <Context.Provider value={{pageSize: pageSize, handlePageChange: onChange, currentPage: currentPage}}>
      <Pagination 
        pageSize={pageSize}
        handlePageChange={(e) => onChange(e.target.value)}
        currentPage={currentPage}
        />
    </Context.Provider>
  )
}

export const PaginationTest = Template.bind({});
PaginationTest.args = {
  pageSize: 10,
}