document.addEventListener('DOMContentLoaded', function () {
    
    // 1. FITUR OTOMATIS: Menandai menu aktif di sidebar berdasarkan halaman yang sedang dibuka
    const currentLocation = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Jika nama file sama dengan URL saat ini (atau kosong saat di root index.html)
        if (linkHref === currentLocation || (currentLocation === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. FITUR FORM: Menangani aksi simpan saat berada di halaman tambah.html
    const kasForm = document.getElementById('kasForm');
    if (kasForm) {
        kasForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const keterangan = document.getElementById('keterangan').value;
            const jenis = document.getElementById('jenis').value;
            const nominal = document.getElementById('nominal').value;

            alert(`Berhasil!\nTransaksi "${keterangan}" (${jenis}) senilai Rp ${nominal} berhasil disimpan.`);
            this.reset();
        });
    }

});