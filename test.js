
/*describe ('emag.ro', () => {

    it('should load', async () => {

        await browser.url ('https://www.emag.ro/');

    });

});*/

describe ('makeup.ro', () => {

    it ('should have correct page title', async () => {

        await browser.url ('https://makeup.ro/');
        await expect(browser).toHaveTitle('Cosmetice si parfumerie – produse cosmetice online pe Makeup');
    
    });

    it ('should have a clickable cart button', async () => {
        
        const cartBtn = await $('.header-basket');
        await expect(cartBtn).toBeDisplayed();
        await expect (cartBtn).toBeClickable();
    
    });

    it ('search field should work propperly', async () => {

        const srcField = await $('#search-input');
        const srcBtn = await $('.search-button');

        await srcField.setValue('mascara');
        await srcBtn.click();
        await expect(browser).toHaveTitle('Rezultatele cautarii - MAKEUP');

    });

});

