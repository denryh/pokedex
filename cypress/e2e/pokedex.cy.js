describe('Pokedex', {
  pageLoadTimeout: 120000
}, function() {
  beforeEach(() => {
    cy.visit('http://localhost:5001')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('a pokemon page can be navigated to', function() {
    cy.get('a[href="/pokemon/ivysaur"]').click()
    cy.contains('chlorophyll')
  })
}
)