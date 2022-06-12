(function($) {
var table_sort;
	$.fn.sort_by_mag = function(id) {	
        var table_sort = this;
			table_sort.find('tr:first th').each(function(i){
				$(this).bind('click',function(event){
						// compare jQuery objects by column i ascending 
						function cmp_asc(a, b) {
							a = jQuery(a).find('td:eq('+i+')').text();
							b = jQuery(b).find('td:eq('+i+')').text();
							if (a < b) return -1;
							if (a > b) return 1;
						  return 0;
						};	
						
						// take an array of rows (without first row)
						var fields = table_sort.find('tr:gt(0)');
						
						// sort this array
						fields.sort(cmp_asc);
				
						// append rows
						var ROW_COUNT = fields.length;						
						for(var j = 0; j < ROW_COUNT; j++)
						{				
							table_sort.append(fields[j]);
						}
				});
		});		
    }
})(jQuery);