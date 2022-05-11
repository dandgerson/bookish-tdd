import { TextField } from "@mui/material"
import { ChangeEventHandler } from "react"
import { isEmpty, clone } from 'lodash'
const SearchBox = ({ term, onSearch }: { term: string, onSearch: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> }) => {
  const protectSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = clone(event.target.value)

    if (value === '' || !isEmpty(value.trim())) {
      return onSearch(event)
    }
  }

  return (
    <TextField
      inputProps={{
        role: 'searchbox',
      }}
      label='Search'
      value={term}
      data-test='search'
      onChange={protectSearch}
      margin='normal'
      variant='outlined'
    />
  )
}

export default SearchBox
