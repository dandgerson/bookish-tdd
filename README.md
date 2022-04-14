# Getting Started with Create React App

## Application Requirement

We will call it Bookish; it’s a simple application about books – as the name implies. In the application, a user could have a book list and can search books by keywords, and users are allowed to navigate to a book detail page and review the description, review, and ranking of the book. We will complete some of the features in an iterative manner, applying ATDD along the way.
In the application, we will develop several typical features including the book list and book detail pages, as well as the searching and reviewing functionalities.

### Feature 1 – Booklist

In the real world, the granularity of a feature would be much bigger than the ones we’re describing in this book. Typically, there would be many user stories within a feature, such as book list, pagination, the styling of the book list, and so on. Let’s assume there is only one story per feature here.

- Show the booklist.

We can describe the user story in this form:
As a `user` I want to `see a list of books` So that `I can learn something new`

This is a very popular format to describe a user story, and there are good reasons for that. By describing As a `<role>`, it stresses who would benefit from this feature, and by saying I want to `<do something>`, you’re explaining how the user would interact with the system. Finally, So that `<value>` sentence describes the business value behind this feature.

This format forces us to think from the stakeholder’s perspective and hopefully tell both business analysts and developers what the most important (valuable) point is of the user story they are working on.

The acceptance criteria are:

- Given there are ten books in the system, a user should see ten items on the page.
- In each item, the following information should be displayed: book name, author, price, and rating.

Acceptance criteria can sometimes be written in the following manner:

- `Given` there are `10` books in the library
- `When` a user visits the homepage
- `Then` he/she would see `10` books on the page
- And each book would contain at least `name`, `author`, `price` and `rating`

The `given` clause explains the current status of the application, `when` it means the user triggers some action, for example, clicks a button or navigates to a page, and `then` is an assertion that states the expected performance of the application.


### Feature 2 – Book Detail

-  Show book detail.

As a `user`, I want to `see the details of a book` So that `I can quickly get an understanding of what it’s about`.

And the acceptance criteria are:

- User clicks an item in the book list and is redirected to the details page.
- The details page displays the book name, author, price, description, and any reviews.

### Feature 3 – Searching

- Searching by book name

As a `user`, I want to `search for a book by its name` So that `I can quickly find what I’m interested in`.

And the acceptance criteria are:

- The user types Refactoring as a search word.
- Only books with Refactoring in their name are displayed in the booklist.

### Feature 4 – Reviews

- Besides the other information on the detail page

As a `user`, I want to `be able to add a review to a book I have read previously` So that `people who have the same interests could decide if it is worthwhile to read`.

And the corresponding acceptance criteria are:

- A user can read the reviews on the detail page.
- A user can post a review to a particular book.
- A user can edit the review they have posted.


***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
