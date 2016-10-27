$.getJSON( "data/data.json", function(data) {
    var rank_one = _.where(data,{"Rank":1})

    // console.log("Number of all songs is "+ data.length)
    // console.log("Number of rank one songs is "+ rank_one.length)

    // var years = _.chain(data)
    //             .pluck('topper_year')
    //             .uniq()
    //             .value()

    // console.log(years)

    var template_html = $('#template').html()
    var template_factory = _.template(template_html)

    rank_one.forEach(function(song){
        $('.container').append(template_factory(song))
    })

})