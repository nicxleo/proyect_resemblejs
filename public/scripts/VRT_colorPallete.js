describe('', function() {
    it('', function() {
      cy.visit('https://vrtcolorpallete.herokuapp.com/palette.html')
      cy.contains('Generar nueva paleta').click()
      cy.screenshot()
      cy.contains('Generar nueva paleta').click()
      cy.screenshot()
      cy.contains('Generar nueva paleta').click()
    })
})