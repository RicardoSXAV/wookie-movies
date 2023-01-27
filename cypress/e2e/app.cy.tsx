describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the home page with genres and movies", () => {
    cy.get("button")
      .contains("Family", { timeout: 500 })
      .click({ waitForAnimations: true });

    cy.get("button[id='family-movie-0']");
  });

  it("should be able navigate to the movie details page", () => {
    cy.get("button[id='action-movie-0']").click();

    cy.url({ timeout: 10000 }).should("include", "/movie/details");

    cy.get("img[id='movie-poster']");

    cy.get("h1[id='movie-title']")
      .invoke("text")
      .then((text) => expect(text.length).to.be.at.least(5));

    cy.get("p[id='movie-information']");
    cy.get("p[id='movie-description']");
  });

  it("should be able to search a movie by text", () => {
    cy.get("button")
      .contains("Adventure", { timeout: 500 })
      .click({ waitForAnimations: true });

    cy.get("input[id='movie-search-input']").type("avengers");

    cy.get("img[id^='avengers']");
  });

  it("should show the empty component if there are no movies", () => {
    cy.get("button")
      .contains("Animation", { timeout: 500 })
      .click({ waitForAnimations: true });

    cy.get("input[id='movie-search-input']").type("random-movie-name");

    cy.get("p[id='not-found-text']");
  });
});

export {};
