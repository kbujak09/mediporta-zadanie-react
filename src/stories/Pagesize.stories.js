import Pagesize from '../components/search/pagesize/Pagesize';
import { Context } from '../context/context';

export default {
  title: 'Pagesize',
  component: Pagesize,
  argTypes: { 
    onChange: { action: 'pageSize' },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['filled', 'standard', 'outlined'],
      control: { type: 'radio' }
    } 
  },
}

const Template = ({size, label, variant, defaultValue, onChange, items}) => {
  return (
    <Context.Provider  value={{ handlePageSizeChange: onChange }}>
        <Pagesize 
          size={size}
          label={label}
          variant={variant}
          defaultValue={defaultValue}
          items={items}
          onChange={(e) => onChange(e.target.value)}
          />
    </Context.Provider>
  )
}

export const PagesizeTest = Template.bind({});
PagesizeTest.args = {
  size: 'small',
  label: 'Ilość',
  variant: 'outlined',
  defaultValue: 20,
  items: [10, 20, 25]
}