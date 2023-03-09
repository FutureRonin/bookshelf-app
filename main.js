( function () {
    let yo = []; function awl(no) {
        no.preventDefault();
        const
            jdl = document.querySelector("#title"), athr = document.querySelector("#author"), yr = document.querySelector("#year"), cplt = document.querySelector("#inputBookIsComplete"), cmplt = {
                id: +new Date, title: jdl.value, author: athr.value, year: yr.value, isComplete: cplt.checked
            };
        console.log(cmplt),
            yo.push(cmplt),
            document.dispatchEvent(new Event("bookChanged"));
    }

    function cr(no) {
        no.preventDefault();
        const jdl = document.querySelector("#judulBuku");
        query = jdl.value, query ? jdle(yo.filter(
            (
                function (cri) { return cri.title.toLowerCase().includes(query.toLowerCase()); }
            ))) : jdle(yo);
    }

    function gr(tgt) {
        const ln = Number(tgt.target.id), ro = yo.findIndex((function (le) { return le.id === ln; })); -1 !== ro && (yo[ro] = {
            ...yo[ro], isComplete: !0
        },
            document.dispatchEvent(new Event("bookChanged")));
    }
    function kn(tgt) {
        const ln = Number(tgt.target.id), ro = yo.findIndex((function (le) { return le.id === ln; })); -1 !== ro && (yo[ro] = { ...yo[ro], isComplete: !1 },

            document.dispatchEvent(new Event("bookChanged")));
    }

    function dl(tgt) {
        const ln = Number(tgt.target.id), ro = yo.findIndex((function (le) { return le.id === ln; })); -1 !== ro && (yo.splice(ro, 1),

            document.dispatchEvent(new Event("bookChanged")));
    }

    function jdle(dua) {
        const blm = document.querySelector("#bukublmselesai"), sdh = document.querySelector("#bukuselesai");
        blm.innerHTML = "", sdh.innerHTML = "";
        for (const mcl of dua) {
            const acle = document.createElement("article");
            acle.classList.add("book_item");
            const awl = document.createElement("h2");
            awl.innerText = mcl.title;
            const sui = document.createElement("p");
            sui.innerText = "Penulis: " + mcl.author;
            const ar = document.createElement("p");
            if (ar.innerText = "Tahun: " + mcl.year, acle.appendChild(awl), acle.appendChild(sui), acle.appendChild(ar), mcl.isComplete) {
                const lt = document.createElement("div");
                lt.classList.add("action");
                const ro = document.createElement("button");
                ro.id = mcl.id, ro.innerText = "Belum Selesai", ro.classList.add("green"), ro.addEventListener("click", kn);
                const dal = document.createElement("button");
                dal.id = mcl.id, dal.innerText = "Hapus",
                    dal.classList.add("red"),
                    dal.addEventListener("click", dl),
                    lt.appendChild(ro),
                    lt.appendChild(dal),
                    acle.appendChild(lt),
                    sdh.appendChild(acle);
            }
            else {
                const ln = document.createElement("div");
                ln.classList.add("action");
                const dot = document.createElement("button");
                dot.id = mcl.id, dot.innerText = "Sudah Selesai",
                    dot.classList.add("green"),
                    dot.addEventListener("click", gr);
                const ra = document.createElement("button");
                ra.id = mcl.id,
                    ra.innerText = "Hapus",
                    ra.classList.add("red"),
                    ra.addEventListener("click", dl),
                    ln.appendChild(dot),
                    ln.appendChild(ra),
                    acle.appendChild(ln),
                    blm.appendChild(acle);
            }
        }
    }

    function la() {
        !function (enh) { localStorage.setItem("books", JSON.stringify(enh)); } (yo), jdle(yo);
    }
    window.addEventListener(
        "load",
        (function () {
            yo = JSON.parse(localStorage.getItem("books")) || [], jdle(yo);
            const
                ro = document.querySelector("#inputBook"), fnd = document.querySelector("#cariBuku");
            ro.addEventListener("submit", awl),
                fnd.addEventListener("submit", cr),
                document.addEventListener("bookChanged", la);
        }));
})();