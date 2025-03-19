let banCo = []
let doDaiCanhBanCo = 5;

for (let i = 0; i < 5; i++) {
    banCo[i] = [];
    for (let j = 0; j < doDaiCanhBanCo; j++) {
        banCo[i][j] = ".";
    }
}
console.log(banCo)

function hienThiBanCo() {
    let noiDungBanCo = "";
    for (let i = 0; i < doDaiCanhBanCo; i++) {
        noiDungBanCo = noiDungBanCo + "<tr>";
        for (let j = 0; j < doDaiCanhBanCo; j++) {
            noiDungBanCo = noiDungBanCo + `<td>${banCo[i][j]}</td>`;
        }
        noiDungBanCo = noiDungBanCo + "</tr>";
    }
    document.getElementById("ban-co").innerHTML = noiDungBanCo;
}

hienThiBanCo();


const btn = document.getElementById("btn-cap-nhat-gia-tri");
btn.addEventListener("click", function () {
    let toaDoHang = document.getElementById("toa-do-hang").value;
    let toaDoCot = document.getElementById("toa-do-cot").value;
    let giaTri = document.getElementById("gia-tri").value;

    if (toaDoHang >= doDaiCanhBanCo && toaDoCot >= doDaiCanhBanCo) {
        document.getElementById("ket-qua").innerText = "gia tri toa do khong hop le";
        return;
    }

    document.getElementById("ket-qua").innerText = "";
    if (banCo[toaDoHang][toaDoCot] !== ".") {
        document.getElementById("ket-qua").innerText = "o nay da co gia tri, hay nhap o khac";
        return;
    }

    banCo[toaDoHang][toaDoCot] = giaTri;
    console.log(banCo);
    hienThiBanCo();


    for (let i = 0; i < doDaiCanhBanCo; i++) {
        for (let j = 0; j < doDaiCanhBanCo; j++) {
            if (
                (j + 2 < doDaiCanhBanCo && banCo[i][j] == "X" && banCo[i][j + 1] == "X" && banCo[i][j + 2] == "X") ||
                (i + 2 < doDaiCanhBanCo && banCo[i][j] == "X" && banCo[i + 1][j] == "X" && banCo[i + 2][j] == "X") ||
                (i + 2 < doDaiCanhBanCo && j + 2 < doDaiCanhBanCo && banCo[i][j] == "X" && banCo[i + 1][j + 1] == "X" && banCo[i + 2][j + 2] == "X") ||
                (i - 2 >= 0 && j + 2 < doDaiCanhBanCo && banCo[i][j] == "X" && banCo[i - 1][j + 1] == "X" && banCo[i - 2][j + 2] == "X")
            ) {
                document.getElementById("ket-qua").innerText = "X đã giành chiến thắng";
                return;
            }

            if (
                (j + 2 < doDaiCanhBanCo && banCo[i][j] == "O" && banCo[i][j + 1] == "O" && banCo[i][j + 2] == "O") ||
                (i + 2 < doDaiCanhBanCo && banCo[i][j] == "O" && banCo[i + 1][j] == "O" && banCo[i + 2][j] == "O") ||
                (i + 2 < doDaiCanhBanCo && j + 2 < doDaiCanhBanCo && banCo[i][j] == "O" && banCo[i + 1][j + 1] == "O" && banCo[i + 2][j + 2] == "O") ||
                (i - 2 >= 0 && j + 2 < doDaiCanhBanCo && banCo[i][j] == "O" && banCo[i - 1][j + 1] == "O" && banCo[i - 2][j + 2] == "O")
            ) {
                document.getElementById("ket-qua").innerText = "O đã giành chiến thắng";
                return;
            }
        }
    }



})



