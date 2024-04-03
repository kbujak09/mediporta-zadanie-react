import Button from '../components/search/button/Button';
import { Context } from '../context/context';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'button clicked'},
    variant: {
      options: ['contained', 'standard', 'outlined'],
      control: { type: 'radio' }
    }
  }
}

const Template = ({variant, text, onClick}) => {
  return (
    <Context.Provider value={{handleButtonClick: onClick}}>
      <Button 
        variant={variant}
        text={text}
        onClick={onClick}
        />
      </Context.Provider>
  );
};

export const ButtonTest = Template.bind({});
ButtonTest.args = {
  variant: 'standard',
  text: 'SZUKAJ'
};