import { expect, test } from '@playwright/test';

test('home page has expected input', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('input')).toBeDefined();
});
