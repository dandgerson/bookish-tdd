import { c } from '../../../src/constants'

describe('Bookish application', () => {
  const expectationBooks = ['Refactoring', 'Domain-driven design', 'Building Microservices', 'Acceptance Test Driven Development with React']

  beforeEach(() => {
    goToApp()
  })

  it('Visits the bookish', () => {
    checkAppTitle()
  })

  it('Shows a book list', () => {
    checkBookListWith(expectationBooks)
  })

  it('Goes to the detail page', () => {
    gotoNthBookInTheList(0)
    checkBookDetail(0)
  })

  it('Searches for a title', () => {
    checkBookListWith(expectationBooks)
    performSearch('design')
    checkBookListWith(['Domain-driven design'])
  })
})

function goToApp() {
  cy.visit(c.clientBaseUrl)
}

function checkAppTitle() {
  cy.get('h2[data-test="heading"]').contains('Bookish')
}

function checkBookListWith(expectation = []) {
  cy.get('div[data-test="book-list"]').should('exist')
  cy.get('div.book-item').should(books => {
    expect(books).to.have.length(expectation.length)

    const titles = [...books].map(book => book.querySelector('h2').innerHTML)
    expect(titles).to.deep.equal(expectation)
  })
}

function gotoNthBookInTheList(index) {
  cy.get('div.book-item').contains('View Details').eq(index).click()
}

function checkBookDetail(index) {
  const bookDetail = {
    0: {
      uri: '/books/1',
      content: 'Refactoring',
    }
  }

  const book = bookDetail[index]

  cy.url().should('include', book.uri)
  cy.get('h2.book-title').contains(book.content)
}

function performSearch(term) {
  cy.get('[data-test="search"] input').type(term)
}

