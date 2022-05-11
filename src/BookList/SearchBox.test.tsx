import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SearchBox from "./SearchBox"


describe('SearchBox', () => {
  // TODO: Make to work (false negative)
  it('renders input', async () => {
    const props = {
      term: '',
      onSearch: jest.fn()
    }

    render(<SearchBox {...props} />)
    const input = screen.getByRole<HTMLInputElement>('searchbox')

    await userEvent.type(input, 'domain')

    // to have been called
    // await waitFor(() => {
    // expect(input.value).toEqual('domain')
    expect(props.onSearch).toHaveBeenCalled()
    // })
  })

  // TODO: Make to work (false positive)
  // it('trim empty strings', () => {
  //   const props = {
  //     term: '',
  //     onSearch: jest.fn(),
  //   }

  //   render(<SearchBox {...props} />)
  //   const input = screen.getByRole('searchbox')

  //   userEvent.type(input, '   ')

  //   // not to have been called
  //   expect(props.onSearch).not.toHaveBeenCalled()

  // })
})
