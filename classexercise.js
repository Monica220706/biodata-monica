const fakultas = ["Teknik Elektro", "Teknik Mesin", "Teknik Informatika", "Teknik Kimia"]
console.log(fakultas); //"Teknik Elektro", "Teknik Mesin", "Teknik Informatika", "Teknik Kimia"
fakultas.splice(1,1);
fakultas.push("Teknik Industri");
console.log(fakultas); //"Teknik Elektro", "Teknik Informatika", "Teknik Kimia", "Teknik Industri"