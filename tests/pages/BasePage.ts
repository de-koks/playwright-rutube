import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;
    private readonly cookieMessage: Locator;
    private readonly acceptCookiesButton: Locator;
    private readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookieMessage = this.page.locator('.cookie-message-module__cookie-consent-wrapper');
        this.acceptCookiesButton = this.cookieMessage.locator('button');
        this.header = this.page.locator('header');
    }

    async closeCookieMessage() {
        await this.acceptCookiesButton.click();
        await expect(this.cookieMessage).not.toBeVisible();
    }

    async verifyHeaderAriaSnapshot() {
        await expect(this.header).toMatchAriaSnapshot();
    }
}
