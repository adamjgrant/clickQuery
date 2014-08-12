# clickQuery
## jQuery's click in 342 characters
### [Demo](http://ajkochanowicz.github.io/clickQuery/)

Because why not?

Be warned, this is highly golfed and isn't nearly as robust as jQuery.click

## Get array of objects

    $(selector)

**Example**

    $('p')
    // Returns [<p>,<p>,...]

## Attach click handler

    $('p').click(function() {
      console.log('you clicked!');
    });

## Use

Add cQuery.js to your project or

    npm install clickquery
