import { test, expect } from '@playwright/test';

test('Sign In Button is Disabled', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        const signInButton = page.locator("[type='submit']");
        await page.goto("http://52.170.147.30/auth/signin");
        console.log(await page.title());
        await expect(page).toHaveTitle("EMM-IT | Course Manager");
        await expect(signInButton).toBeDisabled();

    });
    
test('Invalid e-mail or password', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        const errorPopUPMessage = page.locator('div.swal2-container.swal2-top.toast.swal2-backdrop-show[style*="overflow-y: auto;"]');
        await page.goto("http://52.170.147.30/auth/signin");
        console.log(await page.title());
        await expect(page).toHaveTitle("EMM-IT | Course Manager");
        await page.locator('#email').fill("suleyma.atmaca@emm-it.de");
        await page.locator('#password').fill("T%633642945806oc");
        await page.locator("[type='submit']").click();
        console.log(await errorPopUPMessage.textContent());
        await expect(errorPopUPMessage).toContainText('!Invalid e-mail or password. Please check your credentials and try again!');
    
    });

test('Sign In With Correct Credentials', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        const userEmail = page.locator('#email');
        const userPassword = page.locator('#password');
        const signInButton = page.locator("[type='submit']");
        const homePage = page.locator('h2.text-xl.ng-tns-c17-2');
        const emailPlaceHolder = page.locator('input[placeholder="Type your email address"]');
        await page.goto("http://52.170.147.30/auth/signin");
        console.log(await page.title());
        await expect(page).toHaveTitle("EMM-IT | Course Manager");
        //await page.getByPlaceholder('Type your password').click();
        await userEmail.fill("suleyman.atmaca@emm-it.de");
        await userPassword.fill("T%633642945806oc");
        await signInButton.click();
        console.log(await homePage.textContent());
        
    });

//   test('test', async ({ page }) => {
//   await page.goto('http://52.170.147.30/auth/signin');
//   await page.getByPlaceholder('Type your password').click();
//   await page.getByPlaceholder('Type your password').fill('Ab123@Ab123@');
//   await page.locator('i').getByRole('img').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').fill('Abc123@123.com');
//   await page.getByPlaceholder('Type your password').dblclick();
//   await page.getByPlaceholder('Type your password').fill('');
//   await page.getByText('Not registered yet?').click();
//   await page.getByText('Already have an account?').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').fill('Abc123@123.com');
//   await page.getByText('Not registered yet?').click();
//   await page.getByText('Already have an account?').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').fill('123.com');
//   await page.getByPlaceholder('Type your password').click();
//   await page.getByText('Invalid format for Email!').click();
//   await page.getByPlaceholder('Type your password').click();
//   await page.getByPlaceholder('Type your password').fill('Ab123@Ab123@');
//   await page.getByText('Invalid format for Email!').click();
//   await page.getByPlaceholder('Type your password').dblclick();
//   await page.getByText('Not registered yet?').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').fill('Abc123@123.com');
//   await page.getByPlaceholder('Type your password', { exact: true }).click();
//   await page.getByPlaceholder('Type your password', { exact: true }).fill('Ab123@Ab123@');
//   await page.getByPlaceholder('Type your password again').click();
//   await page.getByPlaceholder('Type your password again').click();
//   await page.getByPlaceholder('Type your password again').fill('Ab123@Ab123');
//   await page.getByRole('button', { name: 'Sign Up' }).click();
//   await page.getByRole('heading', { name: 'Password and Confirm password' }).click();
//   await page.getByText('Already have an account?').click();
//   await page.getByText('Not registered yet?').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').fill('suleyman.atmaca@emm-it.de');
//   await page.getByPlaceholder('Type your password', { exact: true }).click();
//   await page.getByPlaceholder('Type your password', { exact: true }).fill('Ab123@Ab123@');
//   await page.getByPlaceholder('Type your password again').click();
//   await page.getByPlaceholder('Type your password', { exact: true }).dblclick();
//   await page.getByPlaceholder('Type your password', { exact: true }).fill('Ab123@Ab123@');
//   await page.getByPlaceholder('Type your password again').click();
//   await page.getByPlaceholder('Type your password again').fill('Ab123@Ab123@');
//   await page.getByRole('button', { name: 'Sign Up' }).click();
//   await page.getByRole('heading', { name: 'suleyman.atmaca@emm-it.de is' }).click();
//   await page.getByPlaceholder('Type your email address').dblclick();
//   await page.getByPlaceholder('Type your email address').dblclick();
//   await page.getByPlaceholder('Type your email address').dblclick();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').fill('e');
//   await page.getByPlaceholder('Type your email address').press('ArrowRight');
//   await page.getByPlaceholder('Type your email address').fill('Abc123@123.com');
//   await page.getByPlaceholder('Type your password', { exact: true }).click();
//   await page.getByPlaceholder('Type your password', { exact: true }).press('ControlOrMeta+a');
//   await page.getByPlaceholder('Type your password', { exact: true }).fill('Ab123@');
//   await page.getByText('Password must be between 8').click();
//   await page.getByPlaceholder('Type your password', { exact: true }).click();
//   await page.getByPlaceholder('Type your password', { exact: true }).press('ControlOrMeta+a');
//   await page.getByPlaceholder('Type your password', { exact: true }).fill('B123@B123@');
//   await page.getByText('Password must include at').click();
//   await page.getByPlaceholder('Type your password again').click();
//   await page.getByPlaceholder('Type your password again').press('ControlOrMeta+a');
//   await page.getByPlaceholder('Type your password again').fill('b123@b123@');
//   await page.getByPlaceholder('Type your password', { exact: true }).click();
//   await page.getByPlaceholder('Type your password', { exact: true }).press('ControlOrMeta+a');
//   await page.getByPlaceholder('Type your password', { exact: true }).fill('b123@b123@');
//   await page.getByText('Password must include at').click();
//   await page.getByText('Already have an account?').click();
//   await page.getByRole('heading', { name: 'Sign In' }).click();
//   await page.getByText('Not registered yet?').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your password', { exact: true }).click();
//   await page.getByPlaceholder('Type your password again').click();
//   await page.getByText('Already have an account?').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your password').click();
//   await page.getByPlaceholder('Type your password').fill('');
//   await page.getByPlaceholder('Type your password').click();
//   await page.getByPlaceholder('Type your password').fill('T%633642945806oc');
//   await page.getByText('Email is required!').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').fill('suleyman.atmaca@emm-it.de');
//   await page.getByPlaceholder('Type your password').click();
//   await page.getByPlaceholder('Type your password').click();
//   await page.getByPlaceholder('Type your password').fill('');
//   await page.getByText('Course ManagerSign').click();
//   await page.getByText('Password is required!').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').press('ArrowRight');
//   await page.getByPlaceholder('Type your email address').fill('suleyman.emm-it.de');
//   await page.getByText('Invalid format for Email!').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').press('ControlOrMeta+a');
//   await page.getByPlaceholder('Type your email address').fill('suleyman.atmaca@emm-it.de');
//   await page.getByPlaceholder('Type your password').click();
//   await page.getByPlaceholder('Type your password').fill('T%633642945806');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('heading', { name: 'Invalid e-mail or password.' }).click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').press('ControlOrMeta+a');
//   await page.getByPlaceholder('Type your email address').fill('');
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByText('EmailEmail is required!PasswordSign InNot registered yet?').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').press('ArrowRight');
//   await page.getByPlaceholder('Type your email address').fill('suleymanatmaca@gmail.com');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('heading', { name: 'Invalid e-mail or password.' }).click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').press('ControlOrMeta+a');
//   await page.getByPlaceholder('Type your email address').fill('suleyman.atmaca@emm-it.de');
//   await page.getByText('Course ManagerSign').click();
//   await page.getByText('Sign InEmailPasswordSign').click();
//   await page.getByText('Not registered yet?').click();
//   await page.getByRole('heading', { name: 'Sign Up' }).click();
//   await page.getByText('Already have an account?').click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your email address').fill('suleyman.atmaca@emm-it.de');
//   await page.getByPlaceholder('Type your email address').dblclick();
//   await page.getByPlaceholder('Type your email address').press('ControlOrMeta+a');
//   await page.getByPlaceholder('Type your email address').fill('ss.atm@emm-it.de');
//   await page.getByPlaceholder('Type your password').click();
//   await page.getByPlaceholder('Type your password').fill('123Abc2@');
//   await page.getByPlaceholder('Type your password').press('Enter');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('heading', { name: 'Companies' }).click();
//   await page.locator('#headlessui-menu-button-1').click();
//   await page.getByRole('menuitem', { name: 'Sign Out' }).click();
//   await page.getByPlaceholder('Type your email address').click();
//   await page.getByPlaceholder('Type your password').click();
// });