import Input from '../components/search/input/Input';
import { Context } from '../context/context';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    onChange: { action: 'input' },
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

const Template = ({size, label, variant, onChange, fullWidth}) => {
  return (
    <Context.Provider value={{ handleInputChange: onChange }}>
      <Input 
        size={size}
        label={label}
        variant={variant}
        fullWidth={fullWidth}
        onChange={(e) => onChange(e.target.value)}/>
    </Context.Provider>
  )
}

export const InputTest = Template.bind({});
InputTest.args = {
  size: 'large',
  label: 'Szukaj tagów',
  variant: 'outlined',
  fullWidth: true
}