# Shopify---Trigger-Product-Variant-Change
Trigger a product variant change outside of the default select input in Shopify e.g. via a color swatch or thumbnail image.

A few simple lines of code to trigger a change in a product variant on product pages in Shopify. Many projects in the Shopify App Store are a) expensive or b) do not work with the default Shopify Theme in 2021 (Debut) or c) do not work at all. I found it difficult to find a single article on Stack Overflow or other developer community websites that explained how to do this to maximise cross-browser support.

This is very simple to implement:

Login to Shopify, Go to Themes -> Actions -> Edit Code
Put the JS into the theme.js file in the Assets folder, make any changes you want.
Put the CSS into the theme.scss.liquid file in the Assets folder, make any changes you want.
Adjust your triggering objects in the product-template.liquid file in the Snippets folder from the example provided. These are the color swatches or thumbnail images that you want the user to be able to click on to change the active product variant.

Error handling if there are not more than 1 images per product
Dynamic sizing of the swap image to match the image sizing setup in the theme, currently its hardcoded e.g. 450x450 but you can change to what you want in the meantime
Use more obscure class names so as to not conflict with other Shopify plugins.
Observations:

Many of the guides on Stack Overflow, etc do not work because they're trying to hook into very busy DOM elements that have a lot of javascript from Shopify or they simply do not understand the interaction of jQuery events.
