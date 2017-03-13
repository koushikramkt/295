var counter=1;
$("#submit1").click(function(){
  var a=document.getElementById("comment").value;
    $.ajax({
      url: "/commentserver",
      type:"PUT",
      json: true,
      data:{ author:authorname,comment : a},
      success: function(result){
        console.log(result);
        $("#div3").html("Comment Submitted successfully!");
    }});

    $.ajax({
      url: "/commentserver",
      type:"GET",
      json:true,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
      },
      success: function(result){
        console.log(result);
      }});
    });
    $(document).ready(function(){
      $.ajax({
        url: "/commentserver",
        type:"GET",
        json:true,
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/json',
        },
        success: function(result){
          console.log(result);

      }});

    });
