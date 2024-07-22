/// <reference types="cypress" />
import 'cypress-file-upload';


describe('E2E Tests', () => {
    before(() => {
        Cypress.config('defaultCommandTimeout', 30000);
        cy.viewport(1920, 1080);
        cy.clearCookies();
        cy.clearAllSessionStorage();
        cy.visit('https://walkdog.vercel.app/');
    });

    context('Fomulário de Cadastro', () => {
        it('Fluxo de Cadastro', () => {

            // Clique para iniciar o cadastro
            cy.get('strong').click();
            cy.contains('Faça seu cadastro').should('be.visible');

            // Validação do formulário de cadastro
            cy.get('a').should('be.visible'); // Voltar para a home
            cy.get(':nth-child(3) > .form-header > h2').should('be.visible'); // Título do formulário
            cy.get(':nth-child(3) > :nth-child(1) > input').should('be.visible').type("fabianaAlves@gmail.com"); // Input e-mail Completo
            cy.get(':nth-child(3) > :nth-child(2) > input').should('be.visible').type("234274712385") // Input CPF

            // Validação da seção de Endereço
            cy.get(':nth-child(4) > .form-header > h2').should('be.visible')// Título da seção de Endereço
            cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > input').should('be.visible').type("18150000") // Input CEP
            cy.get(':nth-child(2) > :nth-child(2) > input').should('be.visible').click() // Botão buscar CEP
            cy.get(':nth-child(3) > input').should('be.visible'); // Input Rua
            cy.get(':nth-child(5) > :nth-child(1) > input').should('be.visible').type("79") // Input Número
            cy.get(':nth-child(4) > :nth-child(2) > input').should('be.visible').type("Casa Geminada") // Input Complemento
            cy.get(':nth-child(5) > :nth-child(1) > input').should('be.visible').type("centro")// Input Bairro
            cy.get(':nth-child(5) > :nth-child(2) > input').should('be.visible').type("Ibiúna") // Input Cidade/UF

            //Validação da seção de Atividades Extras
            cy.get(':nth-child(5) > .form-header').should('be.visible'); // Título da seção de Atividades Extras
            cy.get(':nth-child(5) > .form-header > span').should('be.visible'); //Texto "Ganhe mais cuidando e/ou adestrando"
            cy.get('.walker-service > :nth-child(1)').should('be.visible').click() //Cuidar
            cy.get('.walker-service > :nth-child(2)').should('be.visible'); //Adestrar
            cy.get('.dropzone > p').should('be.visible').click() //Upload de img
            cy.get('.button-register').click()// Botão Cadastrar



        });
    });
});
