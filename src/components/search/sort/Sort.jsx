import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Sort = ({size, label, variant, defaultValue, onChange }) => {
  return (
    <FormControl variant={variant} size={size}>
      <InputLabel id='sort'>{label}</InputLabel>
      <Select
        labelId='sort'
        label={label}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <MenuItem value={'populardesc'}>Najlepsze wyniki</MenuItem>
        <MenuItem value={'activitydesc'}>Aktywność: malejąco</MenuItem>
        <MenuItem value={'activityasc'}>Aktywność: rosnąco</MenuItem>
        <MenuItem value={'nameasc'}>Alfabetycznie: A do Z</MenuItem>
        <MenuItem value={'namedesc'}>Alfabetycznie: Z do A</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Sort;