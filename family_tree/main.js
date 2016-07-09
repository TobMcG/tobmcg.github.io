$(window).ready(function(){

  var tree = d3.csv.parse(family_tree);
  console.log(tree);

  $('#container').on('mouseup', function(e) {

    $('#container').off('mousemove').children().each(function(index) {
      
      var splitString = $(this).css("transform")
        .substring(7,$(this).css("transform").length-1)
        .split(", ");

      var oldLeft = $(this).css("left").substring(0,$(this).css("left").length-2);
      var oldTop = $(this).css("top").substring(0,$(this).css("top").length-2);

      var newLeft = parseInt(oldLeft)+parseInt(splitString[4]);
      var newTop = parseInt(oldTop)+parseInt(splitString[5]);

      $(this).css("transform", "");
      $(this).css("left", newLeft+"px");
      $(this).css("top", newTop+"px");

    });

  });
  $('#container').on('mousedown', function(e) {
    $('#container').on('mousemove', {
      xStart: e.pageX,
      yStart: e.pageY,
    }, function(e) {

      var xTranslate = e.pageX-e.data.xStart;
      var yTranslate = e.pageY-e.data.yStart;

      $('#container').children().css("transform", "translate("+xTranslate+"px,"+yTranslate+"px)");

    });
  });

});

var family_tree = 'id,gender,first_name,middle_nam1,middle_nam2,last_name,last_nam_b,blood_parents,legal_parents,blood_children,legal_children,notes\n1,m,Tobin,William,Griffin,McGilligan,,4|5,,,,\n2,f,Fiona,Rose,Griffin,McGilligan,,4|5,,,,\n3,m,Liam,James,Griffin,McGilligan,,4|5,,,,\n4,m,Dennis,Patrick,,McGilligan,,,,1|2|3,,\n5,f,Mary,Louise,,Griffin,,6|7,,1|2|3,,\n6,m,James,,,Griffin,,,,5|8,,\n7,f,Mary,Ruth,,Mason,Griffin,,,5|8,,\n8,m,Hank,,,Griffin,,6|7,,9|10,9|10|12|13,\n9,m,James,,,Griffin,,8|11,,,,\n10,f,Elizabeth,,,Griffin,,8|11,,,,\n11,f,Donna,,,Griffin,Thornton,14|15,,9|10|12,9|10|12|13,\n12,f,Carol,,,,,11,8|11,,,\n13,m,William,,,Griffin,,16,8|11,,,\n14,m,,,,,,,,11|16,,\n15,f,,,,,,,,11|16,,\n16,,,,,,,14|15,,13,,';