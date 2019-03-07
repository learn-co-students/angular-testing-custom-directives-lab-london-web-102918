describe('UserProfile Directive Test', () => {

  browser.get('http://localhost:8080')

  let userProfile = element.all(by.css('user-profile'))

  it('should have correctly labelled elements', () => {
    expect(userProfile.get(0).getText()).toContain('Name')
    expect(userProfile.get(1).getText()).toContain('Name')
    expect(userProfile.get(1).getText()).toContain('Position')
    expect(userProfile.get(0).getText()).toContain('Description')
    expect(userProfile.get(1).getText()).toContain('Tim Cook')
    expect(userProfile.get(0).getAttribute('innerHTML')).toContain('Chairman, Microsoft')
  })
  //
  // it('should have Bill Gates first', () => {
  //   let gatesUserProfile = userProfile.get(0)
  //   let gatesNameElement = gatesUserProfile(by.css('h4'))
  //   expect(gatesNameElement.getText()).toEqual('Bill Gates')
  // })

})
