import test, { expect } from "@playwright/test";
import { SettingsCategory } from "../../page objects/Settings/SettingsCategory";

test.describe('Settings certificate page', () => {
    let settingsCategory: SettingsCategory;
  
    test.beforeEach(async ({ page }) => {
      settingsCategory = new SettingsCategory(page);
      await settingsCategory.navigateToBaseURL();
      await settingsCategory.fillCredentials('suleyman.atmaca@emm-it.de', 'T%633642945806oc');
      await expect(page).toHaveTitle('EMM-IT | Course Manager');
      const welcomeText = await settingsCategory.getHomePageWelcomeText();
      console.log(welcomeText);
      await settingsCategory.navigateToSettingsCategoryTab();
    });

    test('US-45 All certificate input box labels should listed', async ({}) => {
      await settingsCategory.verifySearchModuleInput();
      await settingsCategory.verifyAllModulesList();
      await settingsCategory.verifyDeleteButtonIconVisible();
      await settingsCategory.verifAddButtonIconVisible();

      const firstCategory = await settingsCategory.getFirstCategoryText();
      console.log(firstCategory);

      const firstModuleName = await settingsCategory.getFirstModuleNameText();
      console.log(firstModuleName);

      const firstModuleNo = await settingsCategory.getFirstModuleNoText();
      console.log(firstModuleNo);

    });
});