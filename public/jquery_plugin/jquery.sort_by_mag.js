(function($) {
var table_sort;
	$.fn.sort_by_mag = function() {	
				// put events to header (first tr)
                var table_sort = this;
				var LAST_SORTED_COLUMN = -1;
				var SORT_ASCENDING = true;
				table_sort.find('tr:first th').each(function(i){
					$(this).bind('click',function(event){
						
						// add decsending sort when twice click was
						if(LAST_SORTED_COLUMN == i)
							if(SORT_ASCENDING == true) 
								SORT_ASCENDING = false;
							else
								SORT_ASCENDING = true;
						else
						{
							LAST_SORTED_COLUMN = i;
							SORT_ASCENDING = true;
						}
					
						// compare jQuery objects by column i ascending 
						function cmp_asc(a, b) {
							a = jQuery(a).find('td:eq('+i+')').text();
							b = jQuery(b).find('td:eq('+i+')').text();
							if (a < b) return -1;
							if (a > b) return 1;
						  return 0;
						};						
					
						// compare jQuery objects by column i descending 
						function cmp_desc(a, b) {
							a = jQuery(a).find('td:eq('+i+')').text();
							b = jQuery(b).find('td:eq('+i+')').text();
							if (a > b) return -1;
							if (a < b) return 1;
						  return 0;
						};				
						
						var fields = new Array();
						
						// take array of rows (without first row)
						var fields = table_sort.find('tr:gt(0)');
						
						// sort this array
						if(SORT_ASCENDING == true)
							fields.sort(cmp_asc);
						else
							fields.sort(cmp_desc);						
						
						// append rows
						var ROW_COUNT = fields.length;
						for(var j = 0; j < ROW_COUNT; j++)
						{				
							if (j % 2 == 0) $(fields[j]).addClass('odd');
							else $(fields[j]).removeClass('odd');
							table_sort.append(fields[j]);
						}
					});
				});
				
				// use first column for sorting by default 
				table_sort.find('tr:first th:first').click();
				return this;
            }
})(jQuery);

