import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SearchBox from "./SearchBox"


describe('SearchBox', () => {
  it('renders input', async () => {
    const props = {
      term: '',
      onSearch: jest.fn()
    }

    render(<SearchBox {...props} />)
    const input = screen.getByRole('searchbox')
    input.focus()
    userEvent.type(input, 'domain')

    await screen.getByRole('searchbox')

    expect(props.onSearch).toHaveBeenCalled()
  })

  it('trim empty strings', () => {
    const props = {
      term: '',
      onSearch: jest.fn(),
    }

    render(<SearchBox {...props} />)
    const input = screen.getByRole('searchbox')

    userEvent.type(input, '   ')

    expect(props.onSearch).not.toHaveBeenCalled()

  })
})
