import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
    private readonly categoriesTabs: Locator;
    private readonly leftSideMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.categoriesTabs = this.page.locator('section[class*="tabs-module"]');
        this.leftSideMenu = this.page.getByRole('navigation', {
            name: 'Облегченная панель навигации',
        });
    }

    // actions
    async goto() {
        await this.page.goto('/');
    }

    // assertions
    async verifyCategoriesTabsAriaSnapshot() {
        await this.verifyAriaSnapshot(this.categoriesTabs, 'categoriesTabs.yml');
    }

    async verifyLeftSideMenuAriaSnapshot() {
        await this.verifyAriaSnapshot(this.leftSideMenu, 'leftSideMenu.yml');
    }
}
