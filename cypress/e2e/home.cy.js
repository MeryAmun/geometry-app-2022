describe('get home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  it('get API home page', () => {
    cy.visit('https://geomertry-2022-server.herokuapp.com/app-v1')
  })

  context("API Test", () => {
   it("Test GET Request by fetch API data", () => {
   cy.request("https://geomertry-2022-server.herokuapp.com/app-v1/geometry/all")
    .then((response) => {
      expect(response.body).to.be.a('array')
      })
}) 
  })
  context("Header", () => {
    it("contains  text", () => {
      cy.getByData("header")
    })
    it("contains  the correct text", () => {
      cy.getByData("header-main").contains("Geometry Application")
    })
    it("contains  the correct text", () => {
      cy.getByData("header-sub").contains("Your Number one Learning Aid For calculating dimensions of Geometric Figures.")
    })
  })
  context("Tab Buttons", () => {
    it("contains four buttons", () => {
      cy.getByData("tab-container").find("button")
    })
    it("contains  the correct text", () => {
      cy.getByData("tab-container").find("button").eq(0).contains("Rectangles")
    })
    it("contains  the correct text", () => {
      cy.getByData("tab-container").find("button").eq(1).contains("Triangles")
    })
    it("contains  the correct text", () => {
      cy.getByData("tab-container").find("button").eq(2).contains("Circles")
    })
    it("contains  the correct text", () => {
      cy.getByData("tab-container").find("button").eq(3).contains("Squares")
    })
  })
})

// describe('get all figures', () => {
//   beforeEach(() => {
//     it('passes', () => {
//       cy.visit('http://localhost:7000/app-v1/geometry/all')
//     })
//   })
// })