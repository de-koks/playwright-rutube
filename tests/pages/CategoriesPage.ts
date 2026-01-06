import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoriesPage extends BasePage {
    private readonly promoModal: Locator;
    private readonly promoModalCloseButton: Locator;
    private readonly contentSection: Locator;

    constructor(page: Page) {
        super(page);
        this.promoModal = page.locator('[class*="popup-module__popup"]');
        this.promoModalCloseButton = this.promoModal.getByRole('button', { name: 'Закрыть' });
        this.contentSection = page.locator('[class="application-module__content"]');
    }

    // actions
    async goto() {
        await this.page.goto('/categories');
    }

    async closePromoModal() {
        await this.promoModalCloseButton.click();
        await expect(this.promoModal).not.toBeVisible();
    }

    // assertions
    async verifyContentSectionScreenshot() {
        await this.verifyScreenshot(this.contentSection, 'categoriesPageContentSection.png');
    }
}
