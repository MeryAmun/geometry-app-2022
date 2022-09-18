describe('get home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
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

    context("Tab Buttons", () => {
      it("contains four buttons", () => {
        cy.getByData("tab-container").find("button")
      })
      it("contains  the correct text", () => {
        cy.getByData("tab-container").find("button").eq(0).contains("Rectangles")
        cy.getByData("tab-container").find("button").eq(0).click()
    cy.location("pathname").should("eq", "/")
      })
      it("contains  the correct text", () => {
        cy.getByData("tab-container").find("button").eq(1).contains("Triangles")
        cy.getByData("tab-container").find("button").eq(1).click()
    cy.location("pathname").should("eq", "/")
      })
      it("contains  the correct text", () => {
        cy.getByData("tab-container").find("button").eq(2).contains("Circles")
        cy.getByData("tab-container").find("button").eq(2).click()
    cy.location("pathname").should("eq", "/")
      })
      it("contains  the correct text", () => {
        cy.getByData("tab-container").find("button").eq(3).contains("Square")
        cy.getByData("tab-container").find("button").eq(3).click()
    cy.location("pathname").should("eq", "/")
      })
    })
  })
})