(function($) {
var table_sort;
	$.fn.sort_by_mag = function(id) {	
        var table_sort = this;
			table_sort.find('tr:first th').each(function(i){
				$(this).bind('click',function(event){
					alert("You click at column with number " + i);
				});
		});		
    }
})(jQuery);