/// <reference types="cypress" />
import { mount } from 'cypress/react18';
import React from 'react';

import CustomButton from './CustomButton';

describe('CustomButton Component', () => {
    it('renders children and applies text style', () => {
        mount(
            <CustomButton style_variant="text">
                <span>Click me</span>
            </CustomButton>,
        );

        cy.get('.custom__button').contains('Click me');
        cy.get('.custom__button').should('have.css', 'color', 'rgb(46, 64, 73)');
    });
});
