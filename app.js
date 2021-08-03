let son1 = prompt("sum kiriting");

let d = son1 / 10654;
let e = son1 / 12674;

if (e < 1 || d < 1) {
  alert(`Do'llar kursi ${e}
EURO kursi ${d}`);
} else if (e >= 1 || d >= 1) {
  alert(`Do'llar kursi ${Math.ceil(e)}
EURO ${Math.ceil(d)}`);
}

