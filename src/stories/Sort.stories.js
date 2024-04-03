import Sort from '../components/search/sort/Sort';
import { Context } from '../context/context';

export default {
  title: 'Sort',
  component: Sort,
  argTypes: { 
    onChange: { action: 'sort' },
    defaultValue: {
      options: ['populardesc', 'activitydesc', 'activityasc', 'namedesc', 'nameasc'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['filled', 'standard', 'outlined'],
      control: { type: 'radio' }
    } 
  }
}

const Template = ({ variant, defaultValue, onChange, size, label }) => (
  <Context.Provider  value={{ handleSortChange: onChange }}>
      <Sort
        variant={variant} 
        size={size}
        label={label}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}/>
  </Context.Provider>
)

export const SortTest = Template.bind({});
SortTest.args = {
  variant: 'outlined',
  size: 'small',
  label: 'Sortowanie',
  defaultValue: 'populardesc',
}