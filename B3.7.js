const giaoDich = [
    {id: 1, name: "Luong thang 8", soTien: 12000000},
    {id: 2, name: "Chi tieu an uong", soTien: -3500000},
    {id: 3, name: "Chi tieu vat dung ca nhan", soTien: -900000}
];

const cacKhoanChiObj = giaoDich.filter(g => g.soTien < 0);
console.log(cacKhoanChiObj) 

const cacKhoanChiString = JSON.stringify(cacKhoanChiObj)
console.log(cacKhoanChiString) 

const cacKhoanChiObjAgain = JSON.parse(cacKhoanChiString)
console.log(cacKhoanChiObjAgain)

localStorage.setItem("data", cacKhoanChiString)