import { expect, Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class HeaderComponent extends BaseComponent {
    private readonly addButton: Locator;
    readonly addButtonPopup: Locator;
    private readonly notificationsButton: Locator;
    readonly notificationsButtonPopup: Locator;
    private readonly loginButton: Locator;

    constructor(rootElement: Locator) {
        super(rootElement);
        this.addButton = this.rootEl.getByRole('button', { name: 'Добавить' });
        this.addButtonPopup = this.rootEl.locator('ul[class*="header-video-menu"]');
        this.notificationsButton = this.rootEl.getByRole('button', { name: 'Уведомления' });
        this.notificationsButtonPopup = this.rootEl.locator(
            '[class*="notifications-popup-module"]',
        );
        this.loginButton = this.rootEl.getByRole('button', { name: 'Вход и регистрация' });
    }

    async clickAddButton() {
        await this.addButton.click();
    }

    async clickNotificationsButton() {
        await this.notificationsButton.click();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}
