import { test, expect } from '@playwright/test';
test.describe('Wikipedia', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.wikipedia.org/');
        await page.locator('strong:has-text("Français")').click();
    })

test('Trouve un raton laveur sur wikipedia', async ({ page }) => {
    await page.locator('[placeholder="Rechercher sur Wikipédia"]').click()
    await page.keyboard.type('raton laveur')
    await page.keyboard.press('Enter')
    await expect(page.locator('#searchform')).toBeVisible()
    await page.keyboard.press('Enter')
    await expect(page.locator('h1').first()).toHaveText('/Raton laveur/')
}); 

})