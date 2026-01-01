import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

export const test = base.extend<{
    mainPage: MainPage;
}>({
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.goto();
        await mainPage.closeCookieMessage();
        await use(mainPage);
    },
});
