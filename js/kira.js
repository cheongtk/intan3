
	$(document).bind("pageshow",function(){
	
		//insert text
		$("#cl").focus();
		
		$("#cl").keydown(taip_nombor);
		
		//script drop down
		var cable_length;
		var jenis;
		$("#cl").focusout(function(){
			if($("#cl").val()=='' || $("#cl").val()=='0'){
					$('#popupDialog2').html("<h3>Please Insert Cable Length</h3>");	
					$("#popupDialog2" ).popup("open");
					//$("#cl").focus();
					//$('input[name=cl]').focus();
				}
		});

		$('#ft').change(function (){
			
			//alert('OK');
			cable_length = $('#cl').val();		
			jenis = $('#ft').val();
			if(jenis=='mm'){
				$('#jmm').show();
				$('#jsm').hide();
			}
			if(jenis=='sm'){
				$('#jmm').hide();
				$('#jsm').show();
			}
			
			
		});
		
		//tukar nilai
		
		$('#tukar').click(function (){
			$("#cl").val('0');
			$("#cl").focus();
		});
		//Mula Kira
	
		var r1;
		
		//Multimode
		
		$('input:radio[name="mmwl"]').change(function(){
			cable_length = $('#cl').val();		
			if ($('#mm850').is(':checked') && $(this).val() == '3.5') {
				r1 = cable_length * $('#mm850').val();
			}
			if ($('#mm1300').is(':checked') && $(this).val() == '1.5') {
				r1 = cable_length * $('#mm1300').val();
			}
			
			$('#p1').text(r1);	
			$( "#popupDialog1" ).popup( "open" );
		});
		
		//Singlemode
		
		$('input:radio[name="smwl"]').change(function(){
			cable_length = $('#cl').val();		
			if ($('#sm1310i').is(':checked') && $(this).val() == '1') {
				r1 = cable_length * $('#sm1310i').val();
			}
			if ($('#sm1310o').is(':checked') && $(this).val() == '0.5') {
				r1 = cable_length * $('#sm1310o').val();
			}
			if ($('#sm1550i').is(':checked') && $(this).val() == '1') {
				r1 = cable_length * $('#sm1550i').val();
			}
			if ($('#sm1550o').is(':checked') && $(this).val() == '0.5') {
				r1 = cable_length * $('#sm1550o').val();
			}
			$('#p1').text(r1);	
			$( "#popupDialog1" ).popup( "open" );
		});
		
		$('#b1').click(function(){
			alert(r1);
			
		});
	});
