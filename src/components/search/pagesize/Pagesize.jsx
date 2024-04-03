import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Pagesize = ({size, label, variant, defaultValue, onChange, items}) => {

  const calculateCenterItem = (items) => {
    const sorted = items.sort((a,b) => a-b);
    return sorted[Math.floor(items.length / 2)];
  }

  return (
    <FormControl variant={variant} size={size}>
      <InputLabel id='pagesize'>{label}</InputLabel>
      <Select
        labelId='pagesize'
        label={label}
        defaultValue={items.includes(defaultValue) ? defaultValue : calculateCenterItem(items)}
        onChange={onChange}>
        {items.sort((a,b) => a-b).map(item => {
          return <MenuItem key={item} value={item}>{item}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
}

export default Pagesize;