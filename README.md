#Underscore

Underscore is a library that we use for manipulating arrays.

[You can read the documentation here](http://underscorejs.org/).

Here are some underscore functions that we will look at today:

1. findWhere

    `_.findWhere(list, properties)`

    Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.

    If no match is found, or if list is empty, undefined will be returned.

    `_.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});`
    => {year: 1918, newsroom: "The New York Times",
      reason: "For its public service in publishing in full so many official reports,
      documents and speeches by European statesmen relating to the progress and
      conduct of the war."}

2. where

    `_.where(list, properties)`

    Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.

    `_.where(listOfPlays, {author: "Shakespeare", year: 1611});`
    => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
        {title: "The Tempest", author: "Shakespeare", year: 1611}]

3. template

    `template_.template(templateString, [settings])`

    Compiles JavaScript templates into functions that can be evaluated for rendering. Useful for rendering complicated bits of HTML from JSON data sources. Template functions can both interpolate values, using <%= … %>, as well as execute arbitrary JavaScript code, with <% … %>. If you wish to interpolate a value, and have it be HTML-escaped, use <%- … %>. When you evaluate a template function, pass in a data object that has properties corresponding to the template's free variables. The settings argument should be a hash containing any _.templateSettings that should be overridden.

    ```
    var compiled = _.template("hello: <%= name %>");
    compiled({name: 'moe'});
    ```
    => "hello: moe"

    ```
    var template = _.template("<b><%- value %></b>");
    template({value: "<script>"});
    ```

    => "<b>&lt;script&gt;</b>"
    You can also use print from within JavaScript code. This is sometimes more convenient than using <%= ... %>.

    var compiled = _.template("<% print('Hello ' + epithet); %>");
    compiled({epithet: "stooge"});
    => "Hello stooge"

4. sortBy

    `_.sortBy(list, iteratee, [context])`

    Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length).

    `_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });`
    => [5, 4, 6, 3, 1, 2]

    ```
    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    _.sortBy(stooges, 'name');
    ```
    => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];