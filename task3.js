let bahasaIndonesia = 70;
let bahasaInggris = 90;
let mtk = 50;
let ipa = 90;
let rataRataNilai = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

if (!bahasaIndonesia || !bahasaInggris || !mtk || !ipa) {
    console.log('Semua nilai harus terisi !')
}else {
    if (rataRataNilai <= 100 && rataRataNilai >= 90) {
        console.log("Rata-rata = " + rataRataNilai);
        console.log("Grade = A");
    } else if (rataRataNilai < 90 && rataRataNilai >= 80) {
        console.log("Rata-rata = " + rataRataNilai);
        console.log("Grade = B");
    } else if (rataRataNilai < 80 && rataRataNilai >= 70) {
        console.log("Rata-rata = " + rataRataNilai);
        console.log("Grade = C");
    } else if (rataRataNilai < 70 && rataRataNilai >= 60) {
        console.log("Rata-rata = " + rataRataNilai);
        console.log("Grade = D");
    } else if (rataRataNilai < 60 && rataRataNilai > 0) {
        console.log("Rata-rata = " + rataRataNilai);
        console.log("Grade = E");
    } else {
        console.log("Nilai tidak valid !");
    }
}


