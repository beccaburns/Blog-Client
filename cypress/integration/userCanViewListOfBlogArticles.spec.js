describe('User can view a list of blog articles', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/blogs',
      response: 'fixture:blogs.json'
    })
    cy.visit('http://localhost:3001')
  })

  it('contains blog content', () => {
    cy.get('[name="blog-1"]').within(() => {
      cy.get('[name="blog-title"]').should('contain', 'Trip to France')
    })
  })
})

describe('User cannot view blogs if there are none', () => {

  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/blogs',
      response: '{"blogs":[]}'
    })
    cy.visit('http://localhost:3001')
  })

  it('views message for no blogs', () => {
    cy.get("#message").should('contain', 'Oops! No blogs today.')
  })
})