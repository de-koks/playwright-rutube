import { test } from '../../fixtures/mainPage';

test.describe('Should match aria snapshots of Main page navigation elements', () => {
    test('Header', async ({ mainPage }) => {
        await mainPage.verifyHeaderAriaSnapshot();
    });

    test('Categories tabs', async ({ mainPage }) => {
        await mainPage.verifyCategoriesTabsAriaSnapshot();
    });

    test('Left side menu', async ({ mainPage }) => {
        await mainPage.verifyLeftSideMenuAriaSnapshot();
    });
});
