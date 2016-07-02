$(window).ready(function(){
  var tree = d3.csv.parse(family_tree);
  console.log(tree);
});

var family_tree = 'id,gender,first_name,middle_nam1,middle_nam2,last_name,last_nam_b,blood_parents,legal_parents,blood_children,legal_children,notes\n1,m,Tobin,William,Griffin,McGilligan,,4|5,,,,\n2,f,Fiona,Rose,Griffin,McGilligan,,4|5,,,,\n3,m,Liam,James,Griffin,McGilligan,,4|5,,,,\n4,m,Dennis,Patrick,,McGilligan,,,,1|2|3,,\n5,f,Mary,Louise,,Griffin,,6|7,,1|2|3,,\n6,m,James,,,Griffin,,,,5|8,,\n7,f,Mary,Ruth,,Mason,Griffin,,,5|8,,\n8,m,Hank,,,Griffin,,6|7,,9|10,9|10|12|13,\n9,m,James,,,Griffin,,8|11,,,,\n10,f,Elizabeth,,,Griffin,,8|11,,,,\n11,f,Donna,,,Griffin,Thornton,14|15,,9|10|12,9|10|12|13,\n12,f,Carol,,,,,11,8|11,,,\n13,m,William,,,Griffin,,16,8|11,,,\n14,m,,,,,,,,11|16,,\n15,f,,,,,,,,11|16,,\n16,,,,,,,14|15,,13,,';