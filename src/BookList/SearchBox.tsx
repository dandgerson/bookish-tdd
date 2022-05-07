import { TextField } from "@mui/material"
import { ChangeEventHandler } from "react"
import { isEmpty, clone } from 'lodash'
const SearchBox = ({ term, onSearch }: { term: string, onSearch: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> }) => {
  const withProtect = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = clone(event.target.value)
    if (!isEmpty(value.trim())) {
      return onSearch(event)
    }
  }

  return (<TextField
    role='searchbox'
    label='Search'
    value={term}
    data-test='search'
    onChange={withProtect}
    margin='normal'
    variant='outlined'
  />)
}

export default SearchBox
