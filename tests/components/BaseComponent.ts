import { Locator } from '@playwright/test';

export class BaseComponent {
    private readonly rootElement: Locator;

    constructor(roootElement: Locator) {
        this.rootElement = roootElement;
    }

    get rootEl() {
        return this.rootElement;
    }
}
