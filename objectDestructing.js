const fakultas = { nama: "Komputer", dekan: "Stenly", PT: "UNKLAB"
};

const { nama, dekan } = fakultas;
console.log(nama);
console.log(dekan);

const fakultasBaru = { ...fakultas, nama: "Kedokteran", dekan:
    "Monica"};
    console.log(fakultasBaru);
    console.log(fakultas); // tetap PT = UNKLAB
