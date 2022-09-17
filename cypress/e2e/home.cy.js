describe('get home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  it('passes', () => {
    cy.visit('http://localhost:3000/geometry/all')
  })
  it("contains  text", () => {
    cy.getByData("header")
  })
})

// describe('get all figures', () => {
//   beforeEach(() => {
//     it('passes', () => {
//       cy.visit('http://localhost:7000/app-v1/geometry/all')
//     })
//   })
// })