$(document).ready(function() {
    // Inisialisasi tampilan awal
    $('#output').html('Pilih salah satu bidang di atas untuk melihat informasi.');

    // Event handler saat link "Profile" diklik
    $('#profile').click(function() {
        $('#output').html('Nama saya Angelina Yulfaningtyas.Mahasiswi Semester 7 Teknik Informatika Universitas Dian Nuswantoro Semarang.Aktif dalam sosial media dan dapat mudah beradaptasi, memiliki sikap pantang menyerah saat memiliki target atau hal yang akan dicapai dan memiliki rasa ingin tahu yang tinggi.');
    });

});

    // Event handler saat link "Moto Hidup" diklik
    $('#moto_hidup').click(function() {
        $('#output').html('Moto hidup saya adalah “Jika tak mulai dari sekarang, mau kapan?”. Saya memiliki alasan jika sesuatu yang akan dikerjakan harus segera untuk memulainya, jangan pernah menunda-nunda karena waktu terus berjalan semakin kita berusaha untuk melangkah maju semakin kita berdekatan dengan apa yang menjadi tujuan kita.');
    });

    // Event handler saat link "Keahlian" diklik
    $('#keahlian').click(function() {
        $('#output').html('Saya memiliki keahlian di bidang Multimedia sebagai Fotografer dan Videografer.Memiliki pengalaman sebagai IT Multimedia 2019 guna melaksanakan Praktik Kerja Lapangan,mengikuti pelatihan KMMI Network with R Udinus Semarang 2021,  mengikuti kelas Pembangunan Web Frontend dengan Bootstrap di Gamelab Salatiga 2023 .');
    });

