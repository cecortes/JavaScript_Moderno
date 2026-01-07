const MiModulo = (() => {
  "use strict";
  let e = document.querySelector("#btnNew"),
    t = document.querySelector("#btnAsk"),
    r = document.querySelector("#btnStop"),
    a = document.querySelectorAll("small"),
    l = document.querySelectorAll(".divCartas"),
    s = [],
    n = ["C", "H", "D", "S"],
    d = ["A", "J", "Q", "K"],
    i = [],
    c = (e = 2) => {
      s = o(n, d);
      for (let c = 0; c < e; c++) i.push(0);
      l.forEach((e) => (e.innerText = "")),
        a.forEach((e) => (e.innerText = 0)),
        f("red_back", 0),
        f("grey_back", 1),
        (i[0] = 0),
        (i[1] = 0),
        (t.disabled = !1),
        (r.disabled = !1);
    },
    o = (e, t) => {
      let r = [],
        a = ["2", "3", "4", "5", "6", "7", "8", "9", "10", ...t];
      for (let l of e) for (let s of a) r.push(`${s}${l}`);
      return _.shuffle(r);
    },
    $ = (e) => {
      if (0 === e.length) throw "No hay m\xe1s cartas";
      return e.pop();
    },
    u = (e) => {
      let t = e.substring(0, e.length - 1);
      return "A" === t ? 11 : isNaN(t) ? 10 : 1 * t;
    },
    b = (e, t) => ((i[t] += u(e)), (a[t].innerText = i[t]), i[t]),
    f = (e, t) => {
      let r = document.createElement("img");
      r.classList.add("carta"),
        (r.src = `./assets/cartas/${e}.png`),
        l[t].append(r);
    },
    h = () => {
      let [e, t] = i;
      setTimeout(() => {
        t === e
          ? alert("Empate!!!")
          : (t < 21 && e > 21) || (t < 21 && t > e)
          ? alert("CPU ha ganado!!!")
          : alert("Has ganado!!!");
      }, 500);
    },
    p = (e) => {
      do {
        let t = $(s);
        if ((b(t, 1), f(t, 1), e > 21)) break;
      } while (i[1] < 21 && i[1] < e);
      h();
    };
  return (
    c(),
    e.addEventListener("click", () => {
      c();
    }),
    t.addEventListener("click", () => {
      let e = $(s),
        r = b(e, 0);
      f(e, 0),
        r > 21
          ? ((t.disabled = !0), p(r))
          : 21 === r && ((t.disabled = !0), p(r));
    }),
    r.addEventListener("click", () => {
      (t.disabled = !0), r.disabled, p(i[0]);
    }),
    { newGame: c }
  );
})();
