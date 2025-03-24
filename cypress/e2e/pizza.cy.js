describe("Home Page", () => {
  beforeEach(() => {
    // Visit the order pizza page (assuming it's running on localhost:3000)
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
    // Visit the order pizza page (assuming it's running on localhost:3000)
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
  /*it("Belirli sayıda checkbox işaretleme", () => {
    const checkCount = 3; // Kaç tane checkbox işaretlenecek

    cy.get('input[type="checkbox"]').then((checkboxes) => {
      const checkboxArray = [...checkboxes];
      Cypress._.shuffle(checkboxArray) // Checkboxları karıştır
        .slice(0, checkCount) // Belirtilen sayıda checkbox seç
        .forEach((checkbox) => {
          cy.wrap(checkbox).check(); // Seçilen checkboxları işaretle
        });
    });
  }); */

  describe("Form Submit Button Test", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/OrderPizza"); // Test edilecek form sayfasını ziyaret et
    });

    it("Submit butonu, tüm olasılıklarda doğru şekilde çalışmalı", () => {
      const checkSubmitDisabled = () => {
        cy.get('button[type="submit"]').should("be.disabled");
      };
      const checkSubmitEnabled = () => {
        cy.get('button[type="submit"]').should("not.be.disabled");
      };

      // Başlangıçta buton disabled olmalı
      checkSubmitDisabled();

      // Tüm kombinasyonları test et
      const cases = [
        { boyut: "", hamur: "", isim: "" },
        { boyut: "", hamur: "", isim: "Ahmet" },
        { boyut: "", hamur: "normal", isim: "" },
        { boyut: "", hamur: "normal", isim: "Ahmet" },
        { boyut: "orta", hamur: "", isim: "" },
        { boyut: "buyuk", hamur: "", isim: "Ahmet" },
        { boyut: "kucuk", hamur: "normal", isim: "" },
        { boyut: "kucuk", hamur: "normal", isim: "ab" },
        { boyut: "buyuk", hamur: "normal", isim: "a".repeat(41) },
        { boyut: "orta", hamur: "normal", isim: "Test123" },
      ];

      cases.forEach(({ boyut, hamur, isim }) => {
        cy.get("#hamur-sec").select(boyut);
        cy.get("#hamur-sec").select(hamur);
        cy.get("#isim").clear().type(isim);

        checkSubmitDisabled();
      });

      // Geçerli kombinasyonu test et
      cy.get("#boyut-sec").check();
      cy.get("#hamur-sec").select("normal");
      cy.get("#isim").clear().type("Ahmet");
      checkSubmitEnabled();
    });
  });
});
