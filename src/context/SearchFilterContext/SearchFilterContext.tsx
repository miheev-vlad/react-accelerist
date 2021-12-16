import React from 'react';

type ContextProps = {
  filterName: string;
};

const SearchFilterContext = React.createContext<Partial<ContextProps>>({
  filterName: '',
});

export default SearchFilterContext;
