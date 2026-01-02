import { expect, Locator, Page } from '@playwright/test';
import { HeaderComponent } from '../components/HeaderComponent';

export class BasePage {
    protected readonly page: Page;
    private readonly cookieMessage: Locator;
    private readonly acceptCookiesButton: Locator;
    readonly header: HeaderComponent;
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

    async verifyHeaderAriaSnapshot() {
        await expect(this.header.rootEl).toMatchAriaSnapshot({ name: 'headerAriaSnapshot.yml' });
    }

    async verifyAddButtonPopupAriaSnapshot() {
        await expect(this.header.addButtonPopup).toMatchAriaSnapshot({
            name: 'addButtonPopup.yml',
        });
    }

    async verifyNotificationsButtonPopupAriaSnapshot() {
        await expect(this.header.notificationsButtonPopup).toMatchAriaSnapshot({
            name: 'notificationsButtonPopup.yml',
        });
    }

    async verifyLoginModalAriaSnapshot() {
        await expect(this.loginModal).toMatchAriaSnapshot({
            name: 'loginModal.yml',
        });
    }
}
