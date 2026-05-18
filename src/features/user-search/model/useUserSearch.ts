import { useState } from 'react';

export const useUserSearch = () => {
  const [search, setSearch] = useState('');
  return { search, setSearch };
};
