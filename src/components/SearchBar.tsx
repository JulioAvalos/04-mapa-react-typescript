import { ChangeEvent, useRef } from 'react';

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      //todo: buscar la consulta
      console.log('debounce value: ', event.target.value);
    }, 1000);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        className='form-control'
        placeholder='Buscar lugar...'
        onChange={onQueryChange}
      />
    </div>
  );
};
