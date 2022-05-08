import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SearchBox from "./SearchBox"


describe('SearchBox', () => {
  // TODO: Make to work (false negative)
  it('renders input', () => {
    const props = {
      term: '',
      onSearch: jest.fn()
    }

    render(<SearchBox {...props} />)
    const input = screen.getByRole('searchbox')
    input.focus()
    userEvent.type(input, 'domain')

    screen.getByRole('searchbox')

    // to have been called
    expect(props.onSearch).not.toHaveBeenCalled()
  })

  // TODO: Make to work (false positive)
  it('trim empty strings', () => {
    const props = {
      term: '',
      onSearch: jest.fn(),
    }

    render(<SearchBox {...props} />)
    const input = screen.getByRole('searchbox')

    userEvent.type(input, '   ')

    // not to have been called
    expect(props.onSearch).not.toHaveBeenCalled()

  })
})
