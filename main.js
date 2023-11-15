const prompt = require('prompt-sync')();

let soal = [
    //1
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    //2
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    // Tambahkan 3 soal lainnya
    // Tambahan Soal Icha 
    
    //3
    {
        "q": "Makanan yang asin di bawah ini yaitu....",
        "o": [
            'Lolipop',
            'Bubur Ketan Hitam',
            'Ayam Goreng',
            'Stikcy Rice',
        ],
        "a": 2 
    },
    
    //4
    {
        "q": "Bersusah-susah dahulu, bersenang-senang kemudian. Apakah pernyataan ini benar?",
        "o": [
            'Benar',
            'Salah',
        ],
        "a": 1
    },

    //5
    {
        "q": "Apa yang harus dilakukan saat tidak bisa menjawab soal UTS?",
        "o": [
            'Bengong',
            'Nanya jawaban ke pengawas',
            'Membuka HP',
            'Menjawab sebisanya',
        ],
        "a": 3 
    },
]

console.log()
let nama = prompt('Input nama: ')
console.log()

//membuat fucntion untuk memanggil salah satu soal

    function tampilkanSoal(nomorSoal) {
    console.log(soal[nomorSoal].q);
    for (let i = 0; i < soal[nomorSoal].o.length; i++) {
        console.log(i + ". " + soal[nomorSoal].o[i]);
    }
}

// pemanggilan soal 1
tampilkanSoal(0);
console.log()

let ans1 = prompt('Pilihan Jawaban : (0,1,2,3)  =>  ')
console.log()

// pemanggilan soal 2
tampilkanSoal(1);
console.log()

let ans2 = prompt('Pilihan Jawaban : (0,1,2,3)  =>  ')
console.log()

// pemanggilan soal 3
tampilkanSoal(2);
console.log()

let ans3 = prompt('Pilihan Jawaban : (0,1,2,3)  =>  ')
console.log()

// pemanggilan soal 4
tampilkanSoal(3);
console.log()

let ans4 = prompt('Pilihan Jawaban : (0,1)  =>  ')
console.log()

// pemanggilan soal 5
tampilkanSoal(4);
console.log()

let ans5 = prompt('Pilihan Jawaban : (0,1,2,3)  =>  ')
console.log()

//membuat function penilaian
    function evaluasiJawabanSemua(soal, jawaban) {
    let skor = 0;
    let jawabanBenar = 0;
    let jawabanSalah = 0;

    for (let i = 0; i < soal.length; i++) {
        if (jawaban[i] != undefined) {
            if (jawaban[i] == soal[i].a) {
                skor += 1;
                jawabanBenar += 1;
            } else {
                jawabanSalah += 1;
            }
        } else {
            console.log("Anda tidak menjawab soal ini.");
        }
    }

    console.log("Kuis selesai")
    console.log("Statistic Kuis")
    console.log("=== Hasil Evaluasi ===");
    console.log('Nama\t\t:',nama)
    console.log("Score: " + skor);
    console.log("Jawaban Benar: " + jawabanBenar);
    console.log("Jawaban Salah: " + jawabanSalah);
}

// Jawaban yang diinputkan oleh pengguna
let jawabanPengguna = [ans1, ans2, ans3, ans4, ans5];

// Panggil fungsi evaluasiJawabanSemua dengan soal dan jawaban pengguna
evaluasiJawabanSemua(soal, jawabanPengguna);