var features_theme = function () {

    var theme = function (board, div) {

        // Axis track
    	  var axis_track = tnt.board.track()
    	      .height(0)
    	      .color("white")
    	      .display(tnt.board.track.feature.axis()
    		             .orientation("top")
    		);


        var line_track_red = tnt.board.track().height(40)
            .label("red")
            .color("white")
            .display(
                tnt.board.track.feature.line().color('red').index(
                    function(d){return d.pos;})
            )
            .data(
                tnt.board.track.data.sync()
                    .retriever(function () { return data1; })
            );

        var line_track_blue = tnt.board.track().height(40)
            .label("blue")
            .color("white")
            .display(
                tnt.board.track.feature.line().color('blue').index(
                    function(d){return d.pos;})
            )
            .data(
                tnt.board.track.data.sync()
                    .retriever(function () { return data2; })
            );

        var composite_red_blue = tnt.board.track().height(40)
            .label("red and blue")
            .color("white")
            .display(
                tnt.board.track.feature.composite()
                    .add("red", tnt.board.track.feature.line().color('red').index(
                        function(d){return d.pos;}))
                    .add("blue", tnt.board.track.feature.line().color('blue').index(
                        function(d){return d.pos;}))
            )
            .data(tnt.board.track.data.sync()
                  .retriever(function() {
                      return {
                          "red": data1,
                          "blue": data2
                      };
                  }));

        var composite_blue_red = tnt.board.track().height(40)
            .label("blue and red")
            .color("white")
            .display(
                tnt.board.track.feature.composite()
                    .add("blue", tnt.board.track.feature.line().color('blue').index(
                        function(d){return d.pos;}))
                    .add("red", tnt.board.track.feature.line().color('red').index(
                        function(d){return d.pos;}))
            )
            .data(tnt.board.track.data.sync()
                  .retriever(function() {
                      return {
                          "red": data1,
                          "blue": data2
                      };
                  }));

    	  board
            .add_track([axis_track, line_track_red, line_track_blue,
                        composite_red_blue, composite_blue_red]);

        board(div);
        board.start();
    };

    return theme;
};


var data1 = [
    { pos: 1, val: 0 },
    { pos: 2, val: 0 },
    { pos: 3, val: 0 },
    { pos: 4, val: 0 },
    { pos: 5, val: 0 },
    { pos: 6, val: 0 },
    { pos: 7, val: 0 },
    { pos: 8, val: 0 },
    { pos: 9, val: 0 },
    { pos: 10, val: 0 },
    { pos: 11, val: 0 },
    { pos: 12, val: 0 },
    { pos: 13, val: 0 },
    { pos: 14, val: 0 },
    { pos: 15, val: 0 },
    { pos: 16, val: 0 },
    { pos: 17, val: 0 },
    { pos: 18, val: 0 },
    { pos: 19, val: 0 },
    { pos: 20, val: 0 },
    { pos: 21, val: 0 },
    { pos: 22, val: 0 },
    { pos: 23, val: 0 },
    { pos: 24, val: 0 },
    { pos: 25, val: 0 },
    { pos: 26, val: 0 },
    { pos: 27, val: 0 },
    { pos: 28, val: 0 },
    { pos: 29, val: 0 },
    { pos: 30, val: 0 },
    { pos: 31, val: 0 },
    { pos: 32, val: 0 },
    { pos: 33, val: 0 },
    { pos: 34, val: 0 },
    { pos: 35, val: 0 },
    { pos: 36, val: 0.025 },
    { pos: 37, val: 0.275 },
    { pos: 38, val: 0.975 },
    { pos: 39, val: 0.95 },
    { pos: 40, val: 1 },
    { pos: 41, val: 0.7 },
    { pos: 42, val: 0.525 },
    { pos: 43, val: 0.35 },
    { pos: 44, val: 0.1 },
    { pos: 45, val: 0.1 },
    { pos: 46, val: 0 },
    { pos: 47, val: 0 },
    { pos: 48, val: 0 },
    { pos: 49, val: 0 },
    { pos: 50, val: 0 },
    { pos: 51, val: 0 },
    { pos: 52, val: 0 },
    { pos: 53, val: 0 },
    { pos: 54, val: 0 },
    { pos: 55, val: 0 },
    { pos: 56, val: 0 },
    { pos: 57, val: 0 },
    { pos: 58, val: 0 },
    { pos: 59, val: 0 },
    { pos: 60, val: 0 },
    { pos: 61, val: 0 },
    { pos: 62, val: 0 },
    { pos: 63, val: 0 },
    { pos: 64, val: 0 },
    { pos: 65, val: 0 },
    { pos: 66, val: 0 },
    { pos: 67, val: 0 },
    { pos: 68, val: 0 },
    { pos: 69, val: 0 },
    { pos: 70, val: 0 },
    { pos: 71, val: 0 },
    { pos: 72, val: 0 },
    { pos: 73, val: 0 },
    { pos: 74, val: 0 },
    { pos: 75, val: 0 },
    { pos: 76, val: 0 },
    { pos: 77, val: 0 },
    { pos: 78, val: 0 },
    { pos: 79, val: 0 },
    { pos: 80, val: 0 },
    { pos: 81, val: 0 },
    { pos: 82, val: 0 },
    { pos: 83, val: 0 },
    { pos: 84, val: 0 },
    { pos: 85, val: 0 },
    { pos: 86, val: 0 },
    { pos: 87, val: 0 },
    { pos: 88, val: 0 },
    { pos: 89, val: 0 },
    { pos: 90, val: 0 },
    { pos: 91, val: 0 },
    { pos: 92, val: 0 },
    { pos: 93, val: 0 },
    { pos: 94, val: 0 },
    { pos: 95, val: 0 },
    { pos: 96, val: 0 },
    { pos: 97, val: 0 },
    { pos: 98, val: 0 },
    { pos: 99, val: 0 },
    { pos: 100, val: 0 }
];

var data2 = [
    { pos: 1, val: 0 },
    { pos: 2, val: 0 },
    { pos: 3, val: 0 },
    { pos: 4, val: 0 },
    { pos: 5, val: 0 },
    { pos: 6, val: 0 },
    { pos: 7, val: 0 },
    { pos: 8, val: 0 },
    { pos: 9, val: 0 },
    { pos: 10, val: 0 },
    { pos: 11, val: 0 },
    { pos: 12, val: 0 },
    { pos: 13, val: 0 },
    { pos: 14, val: 0 },
    { pos: 15, val: 0 },
    { pos: 16, val: 0 },
    { pos: 17, val: 0 },
    { pos: 18, val: 0 },
    { pos: 19, val: 0 },
    { pos: 20, val: 0 },
    { pos: 21, val: 0 },
    { pos: 22, val: 0 },
    { pos: 23, val: 0 },
    { pos: 24, val: 0 },
    { pos: 25, val: 0 },
    { pos: 26, val: 0 },
    { pos: 27, val: 0 },
    { pos: 28, val: 0 },
    { pos: 29, val: 0 },
    { pos: 30, val: 0 },
    { pos: 31, val: 0 },
    { pos: 32, val: 0 },
    { pos: 33, val: 0 },
    { pos: 34, val: 0 },
    { pos: 35, val: 0 },
    { pos: 36, val: 0 },
    { pos: 37, val: 0 },
    { pos: 38, val: 0 },
    { pos: 39, val: 0 },
    { pos: 40, val: 0 },
    { pos: 41, val: 0 },
    { pos: 42, val: 0 },
    { pos: 43, val: 0 },
    { pos: 44, val: 0 },
    { pos: 45, val: 0 },
    { pos: 46, val: 0 },
    { pos: 47, val: 0 },
    { pos: 48, val: 0 },
    { pos: 49, val: 0 },
    { pos: 50, val: 0 },
    { pos: 51, val: 0 },
    { pos: 52, val: 0 },
    { pos: 53, val: 0 },
    { pos: 54, val: 0.025 },
    { pos: 55, val: 0.05 },
    { pos: 56, val: 0.275 },
    { pos: 57, val: 0.3 },
    { pos: 58, val: 0.6 },
    { pos: 59, val: 0.925 },
    { pos: 60, val: 0.925 },
    { pos: 61, val: 0.775 },
    { pos: 62, val: 0.5 },
    { pos: 63, val: 0.425 },
    { pos: 64, val: 0.15 },
    { pos: 65, val: 0.05 },
    { pos: 66, val: 0 },
    { pos: 67, val: 0 },
    { pos: 68, val: 0 },
    { pos: 69, val: 0 },
    { pos: 70, val: 0 },
    { pos: 71, val: 0 },
    { pos: 72, val: 0 },
    { pos: 73, val: 0 },
    { pos: 74, val: 0 },
    { pos: 75, val: 0 },
    { pos: 76, val: 0 },
    { pos: 77, val: 0 },
    { pos: 78, val: 0 },
    { pos: 79, val: 0 },
    { pos: 80, val: 0 },
    { pos: 81, val: 0 },
    { pos: 82, val: 0 },
    { pos: 83, val: 0 },
    { pos: 84, val: 0 },
    { pos: 85, val: 0 },
    { pos: 86, val: 0 },
    { pos: 87, val: 0 },
    { pos: 88, val: 0 },
    { pos: 89, val: 0 },
    { pos: 90, val: 0 },
    { pos: 91, val: 0 },
    { pos: 92, val: 0 },
    { pos: 93, val: 0 },
    { pos: 94, val: 0 },
    { pos: 95, val: 0 },
    { pos: 96, val: 0 },
    { pos: 97, val: 0 },
    { pos: 98, val: 0 },
    { pos: 99, val: 0 },
    { pos: 100, val: 0 }
];

