// wait until the page and jQuery have loaded before running the code below
jQuery(document).ready(function($){
	
	// alert("ADMIN JS - phpInfo.suwp_home = " + phpInfo.suwp_home);
	// alert("ADMIN JS - phpInfo.suwp_siteurl = " + phpInfo.suwp_siteurl);
	// alert("ADMIN JS - phpInfo.suwp_admin_siteurl = " + phpInfo.suwp_admin_siteurl);

	// alert("ADMIN JS - document.location.protocol = " + document.location.protocol);
	// alert("ADMIN JS - document.location.host = " + document.location.host);
	
	$("#suwp-spinner-top").css("visibility", "hidden");
	$("#suwp-spinner-bottom").css("visibility", "hidden");
	
    // var $home_dd = phpInfo.suwp_home;
   	// var $siteurl_dd = phpInfo.suwp_siteurl;
    var $siteurl_dd = phpInfo.suwp_admin_siteurl;
	// >>> var doc_pathname = '/wp-admin/admin-ajax.php';
	var doc_pathname = 'admin-ajax.php';
	
	// setup our wp ajax URL
	var wpajax_url =  $siteurl_dd + doc_pathname;
	
	// stop our admin menus from collapsing
	if( $('body[class*=" suwp_"]').length || $('body[class*=" post-type-suwp_"]').length ) {

		$suwp_menu_li = $('#toplevel_page_suwp_dashboard_admin_page');
		
		$suwp_menu_li
		.removeClass('wp-not-current-submenu')
		.addClass('wp-has-current-submenu')
		.addClass('wp-menu-open');
		
		$('a:first',$suwp_menu_li)
		.removeClass('wp-not-current-submenu')
		.addClass('wp-has-submenu')
		.addClass('wp-has-current-submenu')
		.addClass('wp-menu-open');
		
	}

	$('.suwp-importer').each(function(){
		$importer = $(this);
		
		$('.import-services-btn',$importer).click(function(e) {
			e.preventDefault();
			
			$import_form_1 = $('#import_form_1','#import_services');
			
			// get the form data and serialize it
			$form_1_data = $($import_form_1).serialize();
			
			var api_id = $('select[name=suwp_import_provider_list_id]').val(); // suwp_import_services ; suwp_import_provider_list_id
			
			// Let's assign the provider api value to the field
			$('.api-provider-id',$importer).val(api_id).trigger('change'); // suwp_import_api_provider_id
			// $('[name=suwp_import_api_provider_id]',$importer).val(api_id).trigger('change'); // alternative method
			
			// now need to xfr its value to form_2 when submitted
			// var api_chosen = $('[name=suwp_import_api_provider_id]').val(); // form_1 : hidden field to grab the api provider id, class="api-provider-id"
			$('[name=suwp_selected_api_provider_id]').val(api_id); // form_2 : hidden field to grab the xfrrd api provider id, class="api-provider-id-selected"
		
		});
		
	});
	
	// setup variables to store our import forms jQuery objects
	$import_form_1 = $('#import_form_1','#import_services');
	$import_form_2 = $('#import_form_2','#import_services');
	$suwp_list_table = $('#suwp-list-table');

    // create references to dropdown fields for later use.
	var $filter_orders_month = $('[name="m"]');
	var $filter_orders_status = $('[name="status-filter"]');
	var $filter_orders_service = $('[name="service-filter"]');
	var $filter_orders_provider = $('[name="provider-filter"]');
	
	// only work on suwp related orders
	if ($(".has-suwp-api").length > 0) {
		$($filter_orders_month).change(function() {
			var monthFilter = $(this).val();
			monthFilter = "&m" + "=" + monthFilter;
			$orderType = '&suwp-order-type=clear';
			if ( monthFilter == '&m=0') {
				$orderType = '';
			}
			// alert("ADMIN JS - filter_orders_month = " + monthFilter + ", orderType = " + $orderType);
			document.location.href = 'admin.php?page=suwp_orders_admin_page'+monthFilter+$orderType;
		});
	}
	
	// only work on suwp related orders
	if ($(".has-suwp-api").length > 0) {

		var allTableCells = document.getElementsByTagName("td");

		for(var i = 0, max = allTableCells.length; i < max; i++) {
			var node = allTableCells[i];

			//get the text from the first child node - which should be a text node
			var currentText = node.childNodes[0].nodeValue; 

			//check for 'Code unavailable' and assign this table cell's colors accordingly 
			if (currentText === "Code unavailable")
				node.style.backgroundColor = "#eba3a3";

			if (currentText === "Code unavailable")
				node.style.color = "761919";

			//check for 'Processing error' and assign this table cell's colors accordingly 
			if (currentText === "Processing error")
				node.style.backgroundColor = "#eba3a3";

			if (currentText === "Processing error")
				node.style.color = "761919";
		}
	}

	$($filter_orders_status).change(function() {
		var statusFilter = $(this).val();
		$orderType = '&suwp-order-type=clear';
		if ( statusFilter == '') {
			$orderType = '';
		}
		// alert("ADMIN JS - filter_orders_status = " + statusFilter);
		document.location.href = 'admin.php?page=suwp_orders_admin_page'+statusFilter+$orderType;
	});

	$($filter_orders_service).change(function() {
		var serviceFilter = $(this).val();
		$orderType = '&suwp-order-type=clear';
		if ( serviceFilter == '') {
			$orderType = '';
		}
		// alert("ADMIN JS - filter_orders_service = " + serviceFilter);
		document.location.href = 'admin.php?page=suwp_orders_admin_page'+serviceFilter+$orderType;
	});

	$($filter_orders_provider).change(function() {
		var providerFilter = $(this).val();
		$orderType = '&suwp-order-type=clear';
		if ( providerFilter == '') {
			$orderType = '';
		}
		// alert("ADMIN JS - filter_orders_provider = " + providerFilter);
		document.location.href = 'admin.php?page=suwp_orders_admin_page'+providerFilter+$orderType;
	});

	// this event triggered when import_form_1 file is selected
	$('.api-provider-id',$import_form_1).bind('change',function(){
		
		$("#suwp-spinner-top").css("visibility", "visible");
		$( "#import-services-btn" ).prop("disabled", true);
		
		$import_form_2 = $('#import_form_2','#import_services');
		
		// get the form data and serialize it
		var form_1_data = $import_form_1.serialize();
		
		// set up form_1 action url
		var form_1_action_url = wpajax_url + '?action=suwp_parse_import_api';
		
		// send the file to php for processing...
		$.ajax({
			url: form_1_action_url,
			type: 'post',
			dataType: 'json',
			data: form_1_data,
			success: function( response ) {
				
				$("#suwp-spinner-top").css("visibility", "hidden");
				$( "#import-services-btn" ).prop("disabled", false);
				
				if( response.status == 1 ) {
					
					$return_html = suwp_get_form_2_api_html( response.data1, response.data2 );

					$('.suwp-dynamic-content',$import_form_2).html($return_html);
					
					// show form 2
					$import_form_2.show();
						
				} else {
					
					// reset form 1's inputs
					$('.api-provider-id',$import_form_1).val(0);
					
					// hide form 2
					$import_form_2.hide();
					
					// error
					// begin building our error message text
					// var msg = response.message + '\r\n' + response.error + '\r\n';
					var msg = response.message + '<br>' + response.error + '<br>';
					// loop over the errors
					$.each(response.errors,function(key,value){
						// append each error on a new line
						msg += '<br>'; // '\r\n';
						msg += '- '+ value;
					});
					// return the bad news...
					// >>>>>>>>>> alert( msg );

					Swal.fire({
						title: 'Error!',
						html: msg,
						type: 'error',
						confirmButtonText: 'Ok'
					})
					
				}
			}
		});
		
	});
	
	
	$('.wp-uploader').each(function(){
		
		$uploader = $(this);

		$('.upload-btn',$uploader).click(function(e) {
	        e.preventDefault();
	        var file = wp.media({ 
	            title: 'Upload',
	            // mutiple: true if you want to upload multiple files at once
	            multiple: false
	        }).open()
	        .on('select', function(e){
	            // This will return the selected image from the Media Uploader, the result is an object
	            var uploaded_file = file.state().get('selection').first();
	            // We convert uploaded_image to a JSON object to make accessing it easier
	            // Output to the console uploaded_image
	            var file_url = uploaded_file.attributes.url;
	            var file_id = uploaded_file.id;
	            
				if( $('.file-url',$uploader).attr('accept') !== undefined ) {
					
					
					var filetype = $('.file-url',$uploader).attr('accept');
					
					if( filetype !== uploaded_file.attributes.subtype ) {
						
						
						$('.upload-text',$uploader).val('');
						
						alert('The file must be of type: '+ filetype);
						
						
					} else {
	            
			            // Let's assign the url value to the input field
			            $('.file-url',$uploader).val(file_url).trigger('change');
			            $('.file-id',$uploader).val(file_id).trigger('change');
						
					}
					
				}
	            
	        });
	    });
    });

	
	// this event triggered when import_form_1 file is selected
	$('.file-id',$import_form_1).bind('change',function(){

		// get the form data and serialize it
		var form_1_data = $import_form_1.serialize();
		
		// set up form_1 action url
		var form_1_action_url = wpajax_url + '?action=suwp_parse_import_csv';
		
		// send the file to php for processing...
		$.ajax({
			url: form_1_action_url,
			type: 'post',
			dataType: 'json',
			data: form_1_data,
			success: function( response ) {
				
				if( response.status == 1 ) {
					
					// get return html
					$return_html = suwp_get_form_2_html( response.data );
					
					// update .suwp-dynamic-content with the new return html
					$('.suwp-dynamic-content',$import_form_2).html($return_html);
					
					// show form 2
					$import_form_2.show();
					
				} else {
					
					// reset form 1's inputs
					$('.file-id',$import_form_1).val(0);
					$('.file-url',$import_form_1).val('');
					
					// hide form 2
					$import_form_2.hide();
					// >>>>>>>>>> alert( response.message ); 

					Swal.fire({
						title: 'Info',
						html: response.message,
						type: 'info',
						confirmButtonText: 'Ok'
					})
					
				}
			}
		});
		
	});
	
	
	// check if our form 2 validates on all change events
	// show and hide elements accordingly
	$(document).on('change','#import_services #import_form_2 .suwp-input',function(){
		
		setTimeout(function(){
			
	
			// if our form 2 validates
			if( suwp_form_2_is_valid() ) {
				
				// show .show-only-on-valid elements
				$('.show-only-on-valid',$import_form_2).show();
				
			} else {
				
				// hide .show-only-on-valid elements
				$('.show-only-on-valid',$import_form_2).hide();
				
			}
		
		},100);
		
	});
	
	// for toggling all subscriber data on and off
	$(document).on('click','#import_services #import_form_2 .check-all',function(){
		
		// $(".check-all").attr("checked", "true");
		
		// see if our toggle is checked
		var checked = $(this)[0].checked;
		
		// if our toggle is checked
		if( checked ) {
		
			// trigger click on all inputs not checked
			$('[name="suwp_import_rows[]"]:not(:checked)',$import_form_2).trigger('click');
		
		} else {
		
			// trigger click on all inputs checked
			$('[name="suwp_import_rows[]"]:checked',$import_form_2).trigger('click');
			
		}
		
	});
	
	// for toggling all subscriber data on and off
	$(document).on('click','#import_subscribers #import_form_2 .check-all',function(){
		
		// $(".check-all").attr("checked", "true");
		
		// see if our toggle is checked
		var checked = $(this)[0].checked;
		
		// if our toggle is checked
		if( checked ) {
		
			// trigger click on all inputs not checked
			$('[name="suwp_import_rows[]"]:not(:checked)',$import_form_2).trigger('click');
		
		} else {
		
			// trigger click on all inputs checked
			$('[name="suwp_import_rows[]"]:checked',$import_form_2).trigger('click');
			
		}
		
	});
	
	// this is our ajax form handler for our import services form #2
	// $(document).on will continue to add this function even if the form's html is changed/updated
	// adding it to the #import_services div and the form id is #import_form_2
	$(document).on('submit','#import_services #import_form_2',function() {
		
		$("#suwp-spinner-bottom").css("visibility", "visible");
		
		// remove non-checked services to reduce memory usage upon submission
		var suwp_checked = [];
		$.each($("input[name='suwp_import_rows[]']:checked"), function(){            
			suwp_checked.push($(this).val());
		});

		var suwp_not_checked = [];
		var the_id;
		$.each($("input[name='suwp_import_rows[]']:not(:checked)"), function(){
			the_id = $(this).val();
			if ( the_id != 'serviceid') {
				suwp_not_checked.push(the_id);
			}
		});
		
		// alert("My checked services are: " + suwp_checked.join(", "));
		// alert("My NOT checked services are: " + suwp_not_checked.join(", "));
		
		// hidden field to grab the selected service ids, class="api-service-ids-selected"
		$('[name=suwp_selected_service_ids]').val(suwp_checked.join(", "));
		
		var total_columns = 16;
		var i;
		var ii;
		var remove_id;
		var remove_col;
		for(i = 1; i <= total_columns; ++i) {
			remove_col = i;
			for(ii = 0; ii < suwp_not_checked.length; ++ii) {
				remove_id = suwp_not_checked[ii];
				$("input[type='hidden'][name='suwp_"+remove_id+'_'+remove_col+ "']").remove();
			}
		}
		
		// set up form 2 action url
		var form_2_action_url = wpajax_url + '?action=suwp_import_services';
		
		// temporarily disable all fields not interested in submitting: memory issue
		$( ".suwp-input" ).prop("disabled", true);
		
		// serialize form data
		var form_2_data = $import_form_2.serialize();
		
		// re-enable fields in order to dismiss them after submission
		$( ".suwp-input" ).prop("disabled", false);
		
		$( "#submit" ).prop("disabled", true);
		$( "#import-services-btn" ).prop("disabled", true);
		
		
		// post the form to our php action for processing...
		$.ajax({
			url: form_2_action_url,
			type: 'post',
			dataType: 'json',
			data: form_2_data,
			success: function( response ) {
			
			$( "#submit" ).prop("disabled", false);
			$( "#import-services-btn" ).prop("disabled", false);
			
			$("#suwp-spinner-bottom").css("visibility", "hidden");
			
			// alert( JSON.stringify(form_2_data) );
		
				if( response.status == 1 ) {
					
					// success!
					
					// reset our import form
					$('.suwp-dynamic-content').html('');
					$('.show-only-on-valid',$import_form_2).hide();
					$('.api-provider-id',$import_form_1).val(0);
					
					// return the good news...
					// >>>>>>>>>> alert(response.message);

					Swal.fire({
						title: 'Success',
						html: response.message,
						type: 'success',
						confirmButtonText: 'Ok'
					})
					
				} else {
					
					// error
					// begin building our error message text
					// var msg = response.message + '\r' + response.error + '\r';
					var msg = response.message + '<br>' + response.error + '<br>';

					// loop over the errors
					$.each(response.errors,function(key,value){
						// append each error on a new line
						msg += '<br>'; // '\r';
						msg += '- '+ value;
					});
					
					// return the bad news...
					// >>>>>>>>>> alert( msg );
					
					Swal.fire({
						title: 'Error',
						html: msg,
						type: 'error',
						confirmButtonText: 'Ok'
					})
				}
			}
		});
		
		// stop our form from submitting normally
		return false;
		
	});
	
	function countInObject(obj) {
    var count = 0;
    // iterate over properties, increment if a non-prototype property
    for(var key in obj) if(obj.hasOwnProperty(key)) count++;
    return count;
	}
	

	// this function returns custom html for import form #2
	function suwp_get_form_2_api_html( array_part, array_full ) {
		
		// setup our return variable
		var return_html = '';
		
		// count the number of columns we have in our subscribers data
		var columns;
		
		$.each(array_part, function(key, value) {
			
			  columns = countInObject(value);
			  
		});
		
		return_html += '<input type="hidden" name="suwp_api_column" value="1" /><input type="hidden" name="suwp_name_column" value="2" /><input type="hidden" name="suwp_time_column" value="3" /><input type="hidden" name="suwp_credit_column" value="4" />';
		return_html += '<input type="hidden" name="suwp_groupname_column" value="5" /><input type="hidden" name="suwp_info_column" value="6" /><input type="hidden" name="suwp_network_column" value="7" /><input type="hidden" name="suwp_mobile_column" value="8" /><input type="hidden" name="suwp_provider_column" value="9" />';
		return_html += '<input type="hidden" name="suwp_pin_column" value="10" /><input type="hidden" name="suwp_kbh_column" value="11" /><input type="hidden" name="suwp_mep_column" value="12" /><input type="hidden" name="suwp_prd_column" value="13" /><input type="hidden" name="suwp_type_column" value="14" />';
		return_html += '<input type="hidden" name="suwp_locks_column" value="15" /><input type="hidden" name="suwp_reference_column" value="16" />';
		
		// build our data table
		var table = '<table class="suwp-list-table fixed widefat striped"><thead>';
		
		var tr = '<tr>';
		// CHANGED TO WORK WITH "SELECT-ALL"
		var th = '<th scope="col" class="manage-column"><label><input type="checkbox" class="check-all"></label></th>';
		tr += th;
			
		var column_id = 0;
		
		$.each( array_part[0], function(key,value) {
			
			column_id++;
	
			var th = '<th scope="col" >'+ key +'</th>';
	
			tr += th;
			
		});
		
		tr += '</tr>';
		
		table += tr +'</thead>'+
		'<tbody id="the-list">';
		
		var row_id = 0;
		var api_id = 0;
		
		// loop over all the services
		$.each( array_part, function(index,array_part){
			
			// increment the row_id
			row_id++;
		
			// begin html for our table row
			var tr = '<tr>';
			
			// hide the first row, it's headers!
			if ( row_id == 1) {
				tr = '<tr style="display: none;">';
			} else {
				tr = '<tr>';
			}
			
			api_id = array_part.serviceid;
			
			// add our first table cell
			var th = '<th scope="row" class="check-column"><input type="checkbox" id="cb-select-'+ api_id +'" name="suwp_import_rows[]" class="suwp-input" value="'+ api_id +'" /></th>';
				
			tr += th;
		
			// set our column_id
			var column_id = 0;
			
			// loop over all the data columns in this service
			$.each( array_part, function(key,value){
			
				// increment our column_id
				column_id++;
				
				// setup a fieldname for our checkbox
				var field_name = 's_'+api_id+'_'+column_id;  // WAS : row_id
				
				// create the html for our table cell
				var td = '<td>'+ value +'</td>';
				// alert(td);
				// append our new td to tr
				tr += td;
					
			});
			
			// close our tr
			tr += '</tr>';
			
			// append our new tr to the table
			table += tr;
				
		});
		
		api_id = 0;
		
		// loop over all the full column services
		$.each( array_full, function(index,array_full){
			
			api_id = array_full.serviceid;
			// reset our column_id
			column_id = 0;
			
			// loop over all the data columns in this service
			// returns all columns for later retrieval
			$.each( array_full, function(key,value){
			
				// increment our column_id
				column_id++;
				
				// setup a fieldname for our checkbox
				var field_name = 'suwp_'+api_id+'_'+column_id;  // WAS : row_id
				
				// create the html for our table cell
				var td = '<input type="hidden" name="'+ field_name +'" class="suwp-input" value="'+ value +'">';
				// alert(td);
				// append our new td to tr
				return_html += td;
					
			});
			
		
		});
		
		// close our table html		
		table += '</tbody></table>';
		var total_services = String(row_id-1);
		// build row 2 html and append our new table to it
		var row_2 = suwp_get_form_table_row('Select Services: ' + total_services + ' total', table, '<p>Please select all the services you\'d like to import: ' + total_services + ' total</p>');
		
		// append row_2 to return_html
		return_html += row_2;
		
		// return the html as a jQuery object
		return $(return_html);
		
	}
	
	// returns an html tr formatted for wordpress admin forms
	function suwp_get_form_table_row(label, input, description){
		
		// build our tr html
		var html = '<tr>'+
			'<th scope="row"><label>'+label+'</label></th>'+
			'<td>'+input;
			
			if( description !== undefined ) {
				html += '<p class="description">'+description+'</p>';
			}
			
			html += '</td>'+
		'</tr>';
		
		// return the html
		return html;
	}
	
	// this function checks to see if import_form_2 is valid
	function suwp_form_2_is_valid() {
		
		// setup our return variable
		var is_valid = true;
		
		// check if no subscribers are selected
		if( $('[name="suwp_import_rows[]"]:checked',$import_form_2).length === 0 ) 
			is_valid = false;
			
		// return the result
		return is_valid;
		
	}

	function suwpAdminEditPopUpClosed() {
		alert('#2 suwpAdminEditPopUpClosed');
		window.location.reload();
	}
	
});
