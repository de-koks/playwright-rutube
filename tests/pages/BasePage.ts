import { expect, Locator, Page } from '@playwright/test';
import { HeaderComponent } from '../components/HeaderComponent';

export class BasePage {
    protected readonly page: Page;
    private readonly cookieMessage: Locator;
    private readonly acceptCookiesButton: Locator;
    protected readonly header: HeaderComponent;
    private readonly loginModal: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookieMessage = this.page.locator('.cookie-message-module__cookie-consent-wrapper');
        this.acceptCookiesButton = this.cookieMessage.locator('button');
        this.header = new HeaderComponent(this.page.locator('header'));
        this.loginModal = this.page
            .frameLocator('iframe[title="Multipass"]')
            .locator('[role="form"]');
    }

    // actions
    async closeCookieMessage() {
        await this.acceptCookiesButton.click();
        await expect(this.cookieMessage).not.toBeVisible();
    }

    async openAddButtonPopup() {
        await this.header.clickAddButton();
        await expect(this.header.addButtonPopup).toBeVisible();
    }

    async openNotificationsButtonPopup() {
        await this.header.clickNotificationsButton();
        await expect(this.header.notificationsButtonPopup).toBeVisible();
    }

    async openLoginModal() {
        await this.header.clickLoginButton();
        await expect(this.loginModal).toBeVisible();
    }

    protected async hideHeader() {
        await this.page.evaluate(() => {
            const header = document.querySelector('header');
            if (header) {
                header.style.display = 'none';
            }
        });
        await expect(this.header.rootEl).not.toBeVisible();
    }

    // assertions
    protected async verifyAriaSnapshot(locator: Locator, snapshotName: string) {
        await expect(locator).toMatchAriaSnapshot({ name: snapshotName });
    }

    async verifyHeaderAriaSnapshot() {
        await this.verifyAriaSnapshot(this.header.rootEl, 'headerAriaSnapshot.yml');
    }

    async verifyAddButtonPopupAriaSnapshot() {
        await this.verifyAriaSnapshot(this.header.addButtonPopup, 'addButtonPopup.yml');
    }

    async verifyNotificationsButtonPopupAriaSnapshot() {
        await this.verifyAriaSnapshot(
            this.header.notificationsButtonPopup,
            'notificationsButtonPopup.yml',
        );
    }

    async verifyLoginModalAriaSnapshot() {
        await this.verifyAriaSnapshot(this.loginModal, 'loginModal.yml');
    }

    protected async verifyScreenshot(locator: Locator, screenshotName: string) {
        await this.hideHeader();
        await expect(locator).toHaveScreenshot(screenshotName);
    }
}
