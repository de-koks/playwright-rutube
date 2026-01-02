import { test } from '../../fixtures/mainPage';

test.describe('Verify acessibility of Main page elements', () => {
    test('Header', async ({ mainPage }) => {
        await mainPage.verifyHeaderAriaSnapshot();
    });

    test('Categories tabs', async ({ mainPage }) => {
        await mainPage.verifyCategoriesTabsAriaSnapshot();
    });

    test('Left side menu', async ({ mainPage }) => {
        await mainPage.verifyLeftSideMenuAriaSnapshot();
    });

    test('"Add" button popup', async ({ mainPage }) => {
        await mainPage.openAddButtonPopup();
        await mainPage.verifyAddButtonPopupAriaSnapshot();
    });

    test('Notifications popup', async ({ mainPage }) => {
        await mainPage.openNotificationsButtonPopup();
        await mainPage.verifyNotificationsButtonPopupAriaSnapshot();
    });

    test('Login modal', async ({ mainPage }) => {
        await mainPage.openLoginModal();
        await mainPage.verifyLoginModalAriaSnapshot();
    });
});
