import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { CategoriesPage } from '../pages/CategoriesPage';

type MyFixtures = {
    mainPage: MainPage;
    categoriesPage: CategoriesPage;
};

export const test = base.extend<MyFixtures>({
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await mainPage.goto();
        await mainPage.closeCookieMessage();
        if (await mainPage.isVpnMessageVisible()) {
            await mainPage.closeVpnMessage();
        }
        await use(mainPage);
    },

    categoriesPage: async ({ page }, use) => {
        const categoriesPage = new CategoriesPage(page);
        await categoriesPage.goto();
        await categoriesPage.closeCookieMessage();
        await categoriesPage.closePromoModal();
        if (await categoriesPage.isVpnMessageVisible()) {
            await categoriesPage.closeVpnMessage();
        }
        await use(categoriesPage);
    },
});
