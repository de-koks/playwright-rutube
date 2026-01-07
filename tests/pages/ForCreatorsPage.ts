import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ForCreatorsPage extends BasePage {
    private readonly forCreatorsPageEndpoint = '/for_creators';
    static readonly headerTabsTestData = [
        {
            tabName: 'Главная',
            tabEndpoint: '/#main',
            screenshotName: 'mainTab.png',
        },
        {
            tabName: 'Первые шаги',
            tabEndpoint: '/#steps',
            screenshotName: 'stepsTab.png',
        },
        {
            tabName: 'Как развивать канал',
            tabEndpoint: '/#faq',
            screenshotName: 'faqTab.png',
        },
        {
            tabName: 'Монетизация',
            tabEndpoint: '/#monetization',
            screenshotName: 'monetizationTab.png',
        },
        {
            tabName: 'Правила',
            tabEndpoint: '/#rules',
            screenshotName: 'rulesTab.png',
        },
        {
            tabName: 'Команда R',
            tabEndpoint: '/#team',
            screenshotName: 'teamTab.png',
        },
        {
            tabName: 'Академия Блогеров',
            tabEndpoint: '/#academy',
            screenshotName: 'academyTab.png',
        },
    ];
    private readonly pageContentSection: Locator;

    constructor(page: Page) {
        super(page);
        this.pageContentSection = this.page.locator('section[class*="Page-module"]');
    }

    // actions
    async goto(endpoint?: string) {
        const url = `${this.forCreatorsPageEndpoint}${endpoint ?? ''}`;
        await this.page.goto(url);
    }

    // assertions
    async verifyHeaderTabsContentScreenshot(screenshotName: string) {
        await this.verifyScreenshot(this.pageContentSection, screenshotName);
    }
}
