import { test } from '@playwright/test';
import { ForCreatorsPage } from '../../pages/ForCreatorsPage';

test.describe('For Creators page - Verify header tabs content screenshots', () => {
    ForCreatorsPage.headerTabsTestData.forEach(({ tabName, tabEndpoint, screenshotName }) => {
        test(`${tabName} tab`, async ({ page }) => {
            const forCreatorsPage = new ForCreatorsPage(page);
            await forCreatorsPage.goto(tabEndpoint);
            await forCreatorsPage.verifyHeaderTabsContentScreenshot(screenshotName);
        });
    });
});
