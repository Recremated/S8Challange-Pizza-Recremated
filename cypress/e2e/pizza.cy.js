describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Sayfa icerigi dogru yuklendi mi ?", () => {
    cy.contains("KOD ACIKTIRIR").should("exist");

    cy.contains("ACIKTIM").should("exist");
  });
  it("Buton dogru calisiyor mu ?", () => {
    cy.contains("ACIKTIM").should("exist").click();

    cy.url().should("include", "/OrderPizza");
  });
});

describe("Order Page ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/OrderPizza");
  });

  it("Sayfa icerigi dogru yuklendi mi ?", () => {
    cy.contains("Position Absolute Acı Pizza").should("exist");

    cy.contains("Boyut Seç").should("exist");

    cy.contains("Hamur Seç").should("exist");

    cy.contains("Ek Malzemeler").should("exist");

    cy.contains("İsim").should("exist");

    cy.contains("Sipariş Notu").should("exist");

    cy.contains("Sipariş Toplamı").should("exist");

    cy.contains("SİPARİŞ VER").should("exist");
  });

  describe("Form Elementleri", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/OrderPizza");
    });

    it("Submit butonu tüm olasılıklarda doğru şekilde disable oluyor mu ?", () => {
      const checkSubmitDisabled = () => {
        cy.get('button[type="submit"]').should("be.disabled");
      };
      const checkSubmitEnabled = () => {
        cy.get('button[type="submit"]').should("not.be.disabled");
      };

      checkSubmitDisabled();

      const cases = [
        { boyut: "#ingredient-Misir", hamur: "", isim: " " },
        { boyut: "#ingredient-Misir", hamur: "", isim: "Ahmet" },
        { boyut: "#ingredient-Misir", hamur: "ince", isim: " " },
        { boyut: "#ingredient-Misir", hamur: "incecik", isim: "Ahmet" },
        { boyut: "#orta", hamur: "", isim: " " },
        { boyut: "#buyuk", hamur: "", isim: "Ahmet" },
        { boyut: "#kucuk", hamur: "klasik", isim: " " },
        { boyut: "#kucuk", hamur: "ince", isim: "ab" },
        { boyut: "#buyuk", hamur: "incecik", isim: "a".repeat(41) },
        { boyut: "#orta", hamur: "klasik", isim: "Test123" },
      ];

      cases.forEach(({ boyut, hamur, isim }) => {
        cy.get(boyut).check();
        cy.get("#thickness").select(hamur);
        cy.get('input[name="name"]').clear().type(isim);
        checkSubmitDisabled();
      });

      cy.get("#kucuk").check();
      cy.get("#thickness").select("klasik");
      cy.get('input[name="name"]').clear().type("Ahmet");
      checkSubmitEnabled();
    });
    it("10 taneden fazla seçince alert veriyor mu?", () => {
      const checkCount = 11;
      cy.get('input[type="checkbox"]').then((checkboxes) => {
        const checkboxArray = [...checkboxes];
        Cypress._.shuffle(checkboxArray)
          .slice(0, checkCount)
          .forEach((checkbox) => {
            cy.wrap(checkbox).check();
          });
      });
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.contain("En fazla 10 malzeme seçebilirsiniz!");
      });
    });
    it("Ek malzeme sayisina ve adete gore fiyati dogru hesapliyor mu ?", () => {
      const ingredient = Math.floor(Math.random() * 10);
      const amount = Math.floor(Math.random() * 4) + 1;
      const checkCount = ingredient; // Kaç tane checkbox işaretlenecek
      cy.get('input[type="checkbox"]').then((checkboxes) => {
        const checkboxArray = [...checkboxes];
        Cypress._.shuffle(checkboxArray) // Checkboxları karıştır
          .slice(0, checkCount) // Belirtilen sayıda checkbox seç
          .forEach((checkbox) => {
            cy.wrap(checkbox).check(); // Seçilen checkboxları işaretle
          });
      });
      for (let i = 1; i < amount; i++) {
        cy.get("#increase").click();
      }
      cy.contains(`${(ingredient * 5 + 85.5) * amount}`).should("exist");
    });
  });
});
