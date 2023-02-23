describe('Home flows', () => {
  beforeEach(() => {
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EsSFQeaciPxPiQbvmElEbARGb59zSloF`, {
      method: 'GET',
      fixture: 'example.json'
    });
    cy.visit('http://localhost:3000/')
  });
  it('Should have a title', () => {
    cy.get('h1').should('have.text', 'Daily Dose')
    cy.get('.reset').should('have.text', 'Reset Search')
    cy.get('select').should('be.visible')
    cy.get('input').should('be.visible')
    cy.get('[href="/ive/883c467a-375c-5af0-8dee-e6d9cbbfe4b3"] > .card').should('have.text', "The West Tried to Isolate Russia. It Didn’t Work.By Josh Holder, Lauren Leatherby, Anton Troianovski and Weiyi Cai")
    cy.get('[href="/ive/883c467a-375c-5af0-8dee-e6d9cbbfe4b3"] > .card > .card-img').url('https://static01.nyt.com/images/2023/02/23/world/russia-ukraine-geopolitics-promo/russia-ukraine-geopolitics-promo-superJumbo-v5.png')
    cy.get('[href="/fecb4d5f-e32d-5b1b-9e5f-cc5732f0df49"] > .card').should('have.text','Bulgarian Factories and Secret Task Forces: How the West Hunts for Soviet ArmsBy Thomas Gibbons-Neff, Justin Scheck and Boryana Dzhambazova')
    cy.get('[href="/fecb4d5f-e32d-5b1b-9e5f-cc5732f0df49"] > .card > .card-img').url('https://static01.nyt.com/images/2023/02/23/multimedia/23weapons-factory1-pcbq/23weapons-factory1-pcbq-superJumbo.jpg')
  })
  it('Should be able to filter the news article category with a dropdown', () => {
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=EsSFQeaciPxPiQbvmElEbARGb59zSloF`, {
      method: 'GET',
      fixture: 'arts.json'
    });
    cy.get('select').select('Arts').should('have.value', 'arts')
    cy.get('.card').should('have.text', "Jessye Norman Rejected These Recordings. Should They Be Released?By Zachary Woolfe")
    cy.get('.card-img').url("https://static01.nyt.com/images/2023/02/26/arts/26jessye-norman1/26jessye-norman1-superJumbo.jpg")
    })
  it('Should be able to search for a news article by title', () => {
    cy.get('input').type('Russia').should('have.value', 'Russia')
    cy.get('.card').should('have.text', "The West Tried to Isolate Russia. It Didn’t Work.By Josh Holder, Lauren Leatherby, Anton Troianovski and Weiyi Cai")
    cy.get('.reset').click()
    cy.get('[href="/ive/883c467a-375c-5af0-8dee-e6d9cbbfe4b3"] > .card').should('have.text', "The West Tried to Isolate Russia. It Didn’t Work.By Josh Holder, Lauren Leatherby, Anton Troianovski and Weiyi Cai")
    cy.get('[href="/ive/883c467a-375c-5af0-8dee-e6d9cbbfe4b3"] > .card > .card-img').url('https://static01.nyt.com/images/2023/02/23/world/russia-ukraine-geopolitics-promo/russia-ukraine-geopolitics-promo-superJumbo-v5.png')
    cy.get('[href="/fecb4d5f-e32d-5b1b-9e5f-cc5732f0df49"] > .card').should('have.text','Bulgarian Factories and Secret Task Forces: How the West Hunts for Soviet ArmsBy Thomas Gibbons-Neff, Justin Scheck and Boryana Dzhambazova')
    cy.get('[href="/fecb4d5f-e32d-5b1b-9e5f-cc5732f0df49"] > .card > .card-img').url('https://static01.nyt.com/images/2023/02/23/multimedia/23weapons-factory1-pcbq/23weapons-factory1-pcbq-superJumbo.jpg')
  })
  it('Should be able to click on a card and should display article details', () => {
    cy.get('[href="/fecb4d5f-e32d-5b1b-9e5f-cc5732f0df49"] > .card').click()
    cy.get('.story-details')
    cy.get('.story-details > h2').should('have.text', 'Bulgarian Factories and Secret Task Forces: How the West Hunts for Soviet Arms')
    cy.get('h3').should('have.text',"By Thomas Gibbons-Neff, Justin Scheck and Boryana Dzhambazova")
    cy.get('h4').should('have.text', 'Published: 2023-02-23')
    cy.get('p').should('have.text', 'Ukraine has long relied on Russian weapons for its armed forces. Now it is scrambling to get Soviet-era ammunition for those weapons, with the help of manufacturers even in rural corners of Eastern Europe.')
    cy.get('a.link').should('have.text', 'Read More at NY Times')
    cy.get('[href="/"] > .link').should('have.text', 'Return to Homepage').click()
    cy.get('h1').should('have.text', 'Daily Dose')
    cy.get('.reset').should('have.text', 'Reset Search')
    cy.get('select').should('be.visible')
    cy.get('input').should('be.visible')
    cy.get('[href="/ive/883c467a-375c-5af0-8dee-e6d9cbbfe4b3"] > .card').should('have.text', "The West Tried to Isolate Russia. It Didn’t Work.By Josh Holder, Lauren Leatherby, Anton Troianovski and Weiyi Cai")
    cy.get('[href="/ive/883c467a-375c-5af0-8dee-e6d9cbbfe4b3"] > .card > .card-img').url('https://static01.nyt.com/images/2023/02/23/world/russia-ukraine-geopolitics-promo/russia-ukraine-geopolitics-promo-superJumbo-v5.png')
    cy.get('[href="/fecb4d5f-e32d-5b1b-9e5f-cc5732f0df49"] > .card').should('have.text','Bulgarian Factories and Secret Task Forces: How the West Hunts for Soviet ArmsBy Thomas Gibbons-Neff, Justin Scheck and Boryana Dzhambazova')
    cy.get('[href="/fecb4d5f-e32d-5b1b-9e5f-cc5732f0df49"] > .card > .card-img').url('https://static01.nyt.com/images/2023/02/23/multimedia/23weapons-factory1-pcbq/23weapons-factory1-pcbq-superJumbo.jpg')
  })
  it('Should give an error if url is incorrect', () => {
    it('Should give user an error if their search does not match', () => {
      cy.get('input').type('hello').should('have.value', 'hello')
      cy.get('.App > :nth-child(2)').should('have.text', 'Sorry your search did not match any of the articles. Please adjust your search.')
    })
    cy.visit('http://localhost:3000/sketchybananas')
    cy.get('.details-container > div > :nth-child(1)').should('have.text', '404: Page not found')
    cy.get('p').should('have.text', 'Sorry the page you requested could not be found. Please go back to the homepage.')
    cy.get('a > h2').should('have.text', 'Return Home').click()
    cy.get('h1').should('have.text', 'Daily Dose')
    cy.get('.reset').should('have.text', 'Reset Search')
    cy.get('select').should('be.visible')
    cy.get('input').should('be.visible')
    cy.get('[href="/ive/883c467a-375c-5af0-8dee-e6d9cbbfe4b3"] > .card').should('have.text', "The West Tried to Isolate Russia. It Didn’t Work.By Josh Holder, Lauren Leatherby, Anton Troianovski and Weiyi Cai")
    cy.get('[href="/ive/883c467a-375c-5af0-8dee-e6d9cbbfe4b3"] > .card > .card-img').url('https://static01.nyt.com/images/2023/02/23/world/russia-ukraine-geopolitics-promo/russia-ukraine-geopolitics-promo-superJumbo-v5.png')
    cy.get('[href="/fecb4d5f-e32d-5b1b-9e5f-cc5732f0df49"] > .card').should('have.text','Bulgarian Factories and Secret Task Forces: How the West Hunts for Soviet ArmsBy Thomas Gibbons-Neff, Justin Scheck and Boryana Dzhambazova')
    cy.get('[href="/fecb4d5f-e32d-5b1b-9e5f-cc5732f0df49"] > .card > .card-img').url('https://static01.nyt.com/images/2023/02/23/multimedia/23weapons-factory1-pcbq/23weapons-factory1-pcbq-superJumbo.jpg')
  })
});



      // it('Should confirm that true is equal to true', () => {
        //   expect(true).to.equal(true)
        // });