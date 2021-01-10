/* 

You need jQuery in your Shopify theme, if you don't already have it, insert this into theme.liquid between the <head> </head> tags

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

*/

/* 

We need to hook into the change event for the input <select> which is Debut themes default way of change product variants. 

You can't use "standard" jQuery triggers reliably e.g. .change() or .trigger("change") as this will not trigger the change event on the <select>. There are deep reasons for this, some of it is covered here: https://stackoverflow.com/questions/25256173/can-i-use-jquery-trigger-with-event-listeners-added-with-addeventlistener

So we need to create an authentic change event, then dispatch that event on the <Select>

We're mixing native javascript and jQuery here which is always dangerous, but it is the shortest way to deliver the outcome reliably. 

See the comments in product-template.liquid to ensure that you have found the correct ID from the <select> tag. In this example, it is: #SingleOptionSelector-0.

Note that when we move to raw javascript, in getElementById("") we dot use the # in #SingleOptionSelector-0

*/ 

jQuery(".Variant_Black").click(function() {
  jQuery("#SingleOptionSelector-0").val("Black");
  jQuery(".Variant_White").css("border","0px");
  jQuery(".Variant_Black").css("border","2px solid #0a4683");
  const event = new Event("change", {
    view: window,
    bubbles: true,
    cancelable: true
  });
  
  document.getElementById("SingleOptionSelector-0").dispatchEvent(event);
});

jQuery(".Variant_White").click(function() {
  jQuery("#SingleOptionSelector-0").val("White");
  jQuery(".Variant_White").css("border","2px solid #0a4683");
  jQuery(".Variant_Black").css("border","0px");
  const event = new Event("change", {
    view: window,
    bubbles: true,
    cancelable: true
  });
  
  document.getElementById("SingleOptionSelector-0").dispatchEvent(event);
});

jQuery(".Variant_Black").click();
