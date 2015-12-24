$(document).ready(function() {
	$('#checkListForm').on('submit', function(event){
  		event.preventDefault();
  		var toAdd = $('input[name=checkListItem]').val();
        $(".list").append('<div class="item">' + '<div class="xbox">' + 'X' + '</div>' + '	' + toAdd + '</div>');
        $(".list").sortable();
        $(this)[0].reset();
	}); 
    $(document).on('click', '.xbox', function() {
        $(this).parent().remove();
    });
});