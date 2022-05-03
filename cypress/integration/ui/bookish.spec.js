const { default: axios } = require("axios")

const c = {
  clientBaseUrl: 'http://localhost:3000',
  serverBaseUrl: 'http://localhost:8080',
}

describe('Bookish application', () => {
  let booksData = null

  before(() => {
    return axios
      .delete(`${c.serverBaseUrl}/books?_cleanup=true`)
      .catch((err) => err)
  })

  afterEach(() => {
    return axios
      .delete(`${c.serverBaseUrl}/books?_cleanup=true`)
      .catch((err) => err)
  })

  beforeEach(() => {
    booksData = [
      { 'name': 'Building Microservices', 'id': 3 },
      { 'name': 'Domain-driven design', 'id': 2 },
      { 'name': 'Refactoring', 'id': 1 },
    ]

    return booksData.map(book => axios.post(`${c.serverBaseUrl}/books`, book, {
      headers: { 'Content-Type': 'application/json' },
    }))
  })


  it('Visits the bookish', () => {
    cy.visit(c.clientBaseUrl)
    cy.get('h2[data-test="heading"]').contains('Bookish')
  })

  it('Shows a book list', () => {
    cy.visit(c.clientBaseUrl)
    cy.get('div[data-test="book-list"]').should('exist')
    cy.get('div.book-item').should(books => {
      expect(books).to.have.length(3)

      const titles = [...books].map(book => book.querySelector('h2').innerHTML).sort()
      expect(titles).to.deep.equal(booksData.map(x => x.name).sort())
    })
  })

  it('Goes to the detail page', () => {
    cy.visit(c.clientBaseUrl)
    cy.get('div.book-item').contains('View Details').eq(0).click()
    cy.url().should('include', '/books/1')
    cy.get('h2.book-title').contains('Refactoring')
  })
})
