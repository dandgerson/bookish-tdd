import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles'
import { Link } from "react-router-dom"

export type BookType = {
  name: string
  id: number
  description?: string
}

const BookList = ({ books, isLoading, isError }: {
  books: BookType[]
  isLoading?: boolean
  isError?: boolean
}) => {
  const classes = useStyles()
  console.log(classes)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error...</p>
  }

  return (
    <div data-test='book-list' className={classes.root}>
      <Grid container spacing={3}>
        {books.map(book => (
          <Grid item xs={4} sm={4} key={book.id} className='book-item'>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    className={classes.name}
                    gutterBottom
                    variant="h5"
                    component='h2'
                  >
                    {book.name}
                  </Typography>
                  <Typography
                    className={classes.description}
                    gutterBottom
                    variant='body2'
                    component='p'
                  >
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                >
                  <Link to={`/books/${book.id}`}>View Details</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  name: {
    maxHeight: 30,
    overflow: 'hidden',
    textOverflow: 'elipsis',
  },
  description: {
    maxHeight: 40,
    overflow: 'hidden',
    textOverflow: 'elipsis',
  }

}))

export default BookList
