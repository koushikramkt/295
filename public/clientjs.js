  $("#submit").click(function(){
    $.ajax({
      url: "/ajax",
      type:"POST",
      cache:false,
      data:{ score : $("input[name='score']").val() },
      success: function(result){
        $.each(result, function(key, value) {
          $("#div1").html(key+ ':' + value);
        });
    }});
    });

  $("#submit1").click(function(){
    var dbNames=$("input[name='getName']").val();
      $.ajax({
        url: "/ajax?dbNames="+dbNames,
        type:"GET",
        json:true,
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/json',
        },
        success: function(result){
          $.each(result, function(key, value) {
            $("#div2").html(key+ ':' + value);
          });
      }});
      });

    $("#submit2").click(function(){
        $.ajax({
          url: "/ajax",
          type:"PUT",
          json: true,
          data:{ scores : $("input[name='getPut']").val() },
          success: function(result){
            console.log(result);
            $("#div3").html(result.error);
        }});
        });


      $("#submit3").click(function(){
          $.ajax({
            url: "/ajax",
            type:"DELETE",
            data:{ scores : $("input[name='del']").val() },
            json: true,
            success: function(result){
              $.each(result, function(key, value) {
                $("#div4").html(key+ ':' + value);
              });
          }});
          });
