import { Typography } from "@mui/material";
import BookList from "./BookList";
import useRemoteService from "./hooks/useRemoteService";

const BookListContainer = () => {
  const { data, isLoading, isError } = useRemoteService([])

  return <BookList
    books={data}
    isLoading={isLoading}
    isError={isError}
  />
}


function App() {

  return (
    <div>
      <Typography
        variant='h2'
        component='h2'
        data-test='heading'
      >
        Bookish
      </Typography>

      <BookListContainer />
    </div>
  );
}

export default App;
