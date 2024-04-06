let desc = "We Make international calling simple, relible, and cheap basedon your unique calling behavior.";

$.ajax({
  url:"https://baconipsum.com/api/?type=lucky",
  dataType: 'jsonp',
  success:function(data){
    desc = data[4];
    document.getElementById('description').textContent = desc;

  },
  error:function(){
    alert("Error");
  }
});