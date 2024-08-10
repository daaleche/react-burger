import user from '../fixtures/user.json';

describe('ConstructorPage', () => {
    beforeEach('Запуск приложения', () => {
        cy.visit('');
    });

    it('Перетаскиваение ингредиентов', () => {
        cy.dragDrop('643d69a5c3f7b9001cfa093c');
        cy.dragDrop('643d69a5c3f7b9001cfa0944');
        cy.dragDrop('643d69a5c3f7b9001cfa0941');
        cy.dragDrop('643d69a5c3f7b9001cfa094a');
    });

    it('Открытие модального окна', () => {
        cy.get('[data-test-id="643d69a5c3f7b9001cfa0946"]').click();
        cy.get('div').contains('Хрустящие минеральные кольца');
        cy.closeModal();
    });

    it('Оформление заказа', () => {
        cy.dragDrop('643d69a5c3f7b9001cfa093c');
        cy.dragDrop('643d69a5c3f7b9001cfa0944');
        cy.dragDrop('643d69a5c3f7b9001cfa0941');
        cy.dragDrop('643d69a5c3f7b9001cfa094a');

        cy.buttonClick();
        cy.location().should((loc) => expect(loc.pathname).to.eq('/login'));

        cy.get('[data-test="email"]').type(user.email);
        cy.get('[data-test="password"]').type(user.password);
        cy.buttonClick();
        cy.wait(500);
        cy.location().should((loc) => expect(loc.pathname).to.eq('/'));

        cy.buttonClick();

        cy.wait(20000);
        cy.closeModal();
    });
});