import { expect, Locator, Page } from '@playwright/test';
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

    async goto() {
        await this.page.goto('/');
    }

    async verifyCategoriesTabsAriaSnapshot() {
        await expect(this.categoriesTabs).toMatchAriaSnapshot();
    }

    async verifyLeftSideMenuAriaSnapshot() {
        await expect(this.leftSideMenu).toMatchAriaSnapshot();
    }
}
