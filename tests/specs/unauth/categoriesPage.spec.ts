import { test } from '../../fixtures/fixtures';

test.describe('Categories page', () => {
    test('Should match content section screenshot', async ({ categoriesPage }) => {
        await categoriesPage.verifyContentSectionScreenshot();
    });
});
