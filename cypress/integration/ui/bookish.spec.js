const { default: axios } = require("axios")

describe('Bookish application', () => {
  before(() => {
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch((err) => err)
  })

  afterEach(() => {
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch((err) => err)
  })

  beforeEach(() => {
    const books = [
      { 'name': 'Refactoring', 'id': 1 },
      { 'name': 'Domain-driven design', 'id': 2 },
      { 'name': 'Building Microservices', 'id': 3 },
    ].sort((a, b) => a.name > b.name ? 1 : -1)

    return books.map(book => axios.post('http://localhost:8080/books', book, {
      headers: { 'Content-Type': 'application/json' },
    }))
  })


  it('Visits the bookish', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('Bookish')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('div[data-test="book-list"]').should('exist')
    cy.get('div.book-item').should(books => {
      expect(books).to.have.length(3)

      const titles = [...books].map(book => book.querySelector('h2').innerHTML)
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design', 'Building Microservices'])
    })
  })
})
