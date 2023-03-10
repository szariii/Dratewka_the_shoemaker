class Location {
    element;
    nazwa = 'Klasa'; // public
    #nazwa_prv = 'Klasa_prv'; // private

    constructor(title, photo, color) {
        this.title = title;
        this.photo = photo;
        this.color = color;

    }

    generowanie() {

        document.getElementById("wygenerowane").remove()
        let pole = document.createElement("div")
        let div = document.createElement("div")
        let divtitle = document.createElement("div")
        let tytul = document.createElement("p")
        tytul.innerHTML = this.title
        divtitle.appendChild(tytul)
        let fot = document.createElement("img")
        if (itemlocation[3][2].includes(30) == true && posx == 2 && posy == 3) {
            fot.src = "./img/smok.bmp"
        } else {
            fot.src = this.photo
        }

        fot.style.backgroundColor = this.color
        fot.id = "zdj"
        let kom = document.createElement("div")
        kom.id = "kompas"

        div.appendChild(divtitle)
        div.appendChild(fot)
        div.appendChild(kom)
        pole.appendChild(div)
        pole.id = 'wygenerowane'
        document.getElementById('main').appendChild(pole)

    }
}



let game = {

    stagrcikgry: function () {
        document.getElementById("inp").style.display = "none"
        let divek1 = document.createElement("h1")
        divek1.id = "h1"
        divek1.innerHTML = 'Press any key to start'
        flagwyjscia = 1
        document.getElementById("wyswietlacz").appendChild(divek1)
        document.body.addEventListener("keypress", function usuwka() {
            if (flagwyjscia == 1) {
                document.getElementById("inp").value = ""
                document.body.removeEventListener("keypress", usuwka)
                document.getElementById("inp").style.display = "inline"
                document.getElementById("inp").focus()
                document.getElementById("komunikat").innerHTML = " "

                flagwyjscia = 0
                game.start()
            } else {
                flagwyjscia = flagwyjscia + 1
            }

        });
    },

    start: function () {
        document.getElementById("h1").remove()
        const audio1 = new Audio("./audio/hejnal.m4a")
        audio1.play()
        document.getElementById("calosc").style.display = "none"

        divciowin = document.createElement("div")
        divciowin.id = "czolowka"
        document.getElementById("wyswietlacz").appendChild(divciowin)


        setTimeout(function () {
            document.getElementById("czolowka").remove()
            divciowin = document.createElement("div")
            divciowin.id = "opisA"
            document.getElementById("wyswietlacz").appendChild(divciowin)
        }, 6000)


        setTimeout(function () {
            document.getElementById("opisA").remove()
            divciowin = document.createElement("div")
            divciowin.id = "opisB"
            document.getElementById("wyswietlacz").appendChild(divciowin)
        }, 12000)



        setTimeout(function () {
            document.getElementById("opisB").remove()
            document.getElementById("calosc").style.display = "inline"
            game.pierwszy(6, 3)
            document.getElementById("inp").focus()
        }, 18000)


    },

    zaleznosc: [
        { idu: 10, lokalizacja: "4_5", idw: 11, ladowanie: "r", komunikat: "You opened a tool shed and took an axe" },
        { idu: 11, lokalizacja: "5_6", idw: 12, ladowanie: "r", komunikat: "You cut sticks for sheeplegs" },
        { idu: 12, lokalizacja: "3_2", idw: 13, ladowanie: "l", komunikat: "You prepared legs for your fake sheep" },
        { idu: 14, lokalizacja: "2_3", idw: 15, ladowanie: "r", komunikat: "The tavern owner paid you money" },
        { idu: 15, lokalizacja: "2_6", idw: 16, ladowanie: "r", komunikat: "The cooper sold you a new barrel" },
        { idu: 16, lokalizacja: "3_2", idw: 17, ladowanie: "l", komunikat: "You made a nice sheeptrunk" },
        { idu: 18, lokalizacja: "2_5", idw: 19, ladowanie: "r", komunikat: "The butcher gave you wool" },
        { idu: 19, lokalizacja: "3_2", idw: 20, ladowanie: "l", komunikat: "You prepared skin for your fake sheep" },
        { idu: 21, lokalizacja: "4_6", idw: 22, ladowanie: "r", komunikat: "You used your tools to make a rag" },
        { idu: 22, lokalizacja: "3_2", idw: 23, ladowanie: "l", komunikat: "You made a fake sheephead" },
        { idu: 24, lokalizacja: "0_0", idw: 25, ladowanie: "r", komunikat: this.kopanie },
        { idu: 25, lokalizacja: "3_2", idw: 26, ladowanie: "l", komunikat: "You prepared a solid poison" },
        { idu: 27, lokalizacja: "1_0", idw: 28, ladowanie: "r", komunikat: "You got a bucket full of tar" },
        { idu: 28, lokalizacja: "3_2", idw: 29, ladowanie: "l", komunikat: "You prepared a liquid poison" },
        { idu: "", lokalizacja: "3_2", idw: 37, ladowanie: "r", komunikat: "Your fake sheep is full of poison and ready to be eaten by the dragon" },
        { idu: 37, lokalizacja: "3_2", idw: 30, ladowanie: "l", komunikat: this.dead },
        { idu: 33, lokalizacja: "3_2", idw: 34, ladowanie: "r", komunikat: "You cut a piece of dragon's skin" },
        { idu: 34, lokalizacja: "4_6", idw: 35, ladowanie: "r", komunikat: "You used your tools to make shoes" },
        { idu: 35, lokalizacja: "3_0", idw: 36, ladowanie: "r", komunikat: "The King is impressed by your shoes" },
        { idu: 36, lokalizacja: "1_0", idw: 11, ladowanie: "r", komunikat: "Koniec gry" },
    ],
    items: [
        { id: 10, itemodmiana: "a KEY", flaga: 1, item: "KEY", },
        { id: 11, itemodmiana: "an AXE", flaga: 1, item: "AXE" },
        { id: 12, itemodmiana: "STICKS", flaga: 1, item: "STICKS" },
        { id: 13, itemodmiana: "sheeplegs", flaga: 0, item: "sheeplegs" },
        { id: 14, itemodmiana: "MUSHROOMS", flaga: 1, item: "MUSHROOMS" },
        { id: 15, itemodmiana: "MONEY", flaga: 1, item: "MONEY" },
        { id: 16, itemodmiana: "a BARREL", flaga: 1, item: "BARREL" },
        { id: 17, itemodmiana: "a sheeptrunk", flaga: 0, item: "sheeptrunk" },
        { id: 18, itemodmiana: "BERRIES", flaga: 1, item: "BERRIES" },
        { id: 19, itemodmiana: "WOOL", flaga: 1, item: "WOOL" },
        { id: 20, itemodmiana: "a sheepskin", flaga: 0, item: "sheepskin" },
        { id: 21, itemodmiana: "a BAG", flaga: 1, item: "BAG" },
        { id: 22, itemodmiana: "a RAG", flaga: 1, item: "RAG" },
        { id: 23, itemodmiana: "a sheephead", flaga: 0, item: "sheephead" },
        { id: 24, itemodmiana: "a SPADE", flaga: 1, item: "SPADE" },
        { id: 25, itemodmiana: "SULPHUR", flaga: 1, item: "SULPHUR" },
        { id: 26, itemodmiana: "a solid poison", flaga: 0, item: "solid poison" },
        { id: 27, itemodmiana: "a BUCKET", flaga: 1, item: "BUCKET" }, ////////////////////
        { id: 28, itemodmiana: "TAR", flaga: 1, item: "TAR" },
        { id: 29, itemodmiana: "a liquid poison", flaga: 0, item: "liquid poison" },
        { id: 30, itemodmiana: "a dead dragon", flaga: 0, item: "dead dragon" },
        { id: 31, itemodmiana: "a STONE", flaga: 1, item: "STONE" },
        { id: 32, itemodmiana: "a FISH", flaga: 1, item: "FISH" },
        { id: 33, itemodmiana: "a KNIFE", flaga: 1, item: "KNIFE" },
        { id: 34, itemodmiana: "a DRAGONSKIN", flaga: 1, item: "DRAGONSKIN" },
        { id: 35, itemodmiana: "a dragonskin SHOES", flaga: 1, item: "SHOES" },
        { id: 36, itemodmiana: "a PRIZE", flaga: 1, item: "PRIZE" },
        { id: 37, itemodmiana: "a SHEEP", flaga: 1, item: "SHEEP" },
    ],
    dead: function (posx, posy, itemlocation, reka) {
        document.getElementById("inp").style.display = "none"
        document.getElementById("komunikat").innerHTML = "The dragon noticed your gift..."
        setTimeout(function () {
            document.getElementById("komunikat").innerHTML = "The dragon noticed your gift... The dragon ate your sheep and died!"

        }, 3000)
        setTimeout(function () {
            document.getElementById("zdj").src = "./img/smok.bmp"

            let ruch = game.board[posy][posx]
            ruch.generowanie()
            let kompi = game.konekcje(posx, posy)
            game.mozliwekierunki(posx, posy)
            game.see(posx, posy, itemlocation)
            game.trzymanyelement(reka)
            document.getElementById("inp").style.display = "inline"
            document.getElementById("inp").focus()
            document.getElementById("komunikat").innerHTML = " "
        }, 6000)
    },

    kopanie: function (posx, posy, itemlocation, reka) {
        document.getElementById("inp").style.display = "none"
        document.getElementById("komunikat").innerHTML = "You are digging..."
        setTimeout(function () {
            document.getElementById("komunikat").innerHTML = "You are digging... and digging..."
        }, 3000)
        setTimeout(function () {
            document.getElementById("komunikat").innerHTML = "You are digging... and digging... That's enough sulphur for you"
        }, 5000)
        setTimeout(function () {
            let ruch = game.board[posy][posx]
            ruch.generowanie()
            let kompi = game.konekcje(posx, posy)
            game.mozliwekierunki(posx, posy)
            game.see(posx, posy, itemlocation)
            game.trzymanyelement(reka)
            document.getElementById("inp").style.display = "inline"
            document.getElementById("inp").focus()
            document.getElementById("komunikat").innerHTML = " "
        }, 8000)
    },

    klik: function () {
        setTimeout(function () {
            document.getElementById("inp").focus()
        }, 0)
    },
    board: [
        [new Location("You are inside a brimstone mine", "./img/11.gif", "rgb(235, 211, 64)"), new Location("You are at the entrance to the mine", "./img/12.gif", "rgb(89, 93, 87)"), new Location("A hill", "./img/13.gif", "rgb(117, 237, 243)"), new Location("Some bushes", "./img/14.gif", "rgb(202, 230, 51)"), new Location("An old deserted hut", "./img/15.gif", "rgb(220, 204, 61)"), new Location("The edge of a forest", "./img/16.gif", "rgb(167, 245, 63)"), new Location("A dark forest", "./img/17.gif", "rgb(140, 253, 99)")],
        [new Location("A man nearby making tar", "./img/21.gif", "rgb(255, 190, 99)"), new Location("A timber yard", "./img/22.gif", "rgb(255, 190, 99)"), new Location("You are by a roadside shrine", "./img/23.gif", "rgb(167, 245, 63)"), new Location("You are by a small chapel", "./img/24.gif", "rgb(212, 229, 36)"), new Location("You are on a road leading to a wood", "./img/25.gif", "rgb(167, 245, 63)"), new Location("You are in a forest", "./img/26_i_65.gif", "rgb(167, 245, 63)"), new Location("You are in a deep forest", "./img/27_i_67.gif", "rgb(140, 253, 99)")],
        [new Location("You are by the Vistula River", "./img/31.gif", "rgb(122, 232, 252)"), new Location("You are by the Vistula River", "./img/32.gif", "rgb(140, 214, 255)"), new Location("You are on a bridge over river", "./img/33.gif", "rgb(108, 181, 242)"), new Location("You are by the old tavern", "./img/34.gif", "rgb(255, 189, 117)"), new Location("You are at the town's end", "./img/35.gif", "rgb(255, 190, 99)"), new Location("You are in a butcher's shop", "./img/36.gif", "rgb(255, 188, 102)"), new Location("You are in a cooper's house", "./img/37.gif", "rgb(255, 188, 102)")],
        [new Location("You are in the Wawel Castle", "./img/41.gif", "rgb(255, 176, 141)"), new Location("You are inside a dragon's cave", "./img/42.gif", "rgb(198, 205, 193)"), new Location("A perfect place to set a trap", "./img/43.gif", "rgb(255, 176, 141)"), new Location("You are by the water mill", "./img/44.gif", "rgb(255, 190, 99)"), new Location("You are at a main crossroad", "./img/45.gif", "rgb(255, 190, 99)"), new Location("You are on a town street", "./img/46.gif", "rgb(255, 190, 99)"), new Location("You are in a frontyard of your house", "./img/47.gif", "rgb(255, 190, 99)")],
        [" ", " ", " ", new Location("You are by a swift stream", "./img/54.gif", "rgb(108, 181, 242)"), new Location("You are on a street leading forest", "./img/55.gif", "rgb(255, 190, 99)"), new Location("You are in a woodcutter's backyard", "./img/56.gif", "rgb(255, 190, 99)"), new Location("You are in a shoemaker's house", "./img/57.gif", "rgb(254, 194, 97)")],
        [" ", " ", " ", new Location("You are in a bleak funeral house", "./img/64.gif", "rgb(254, 194, 97)"), new Location("You are on a path leading to the wood", "./img/26_i_65.gif", "rgb(167, 245, 63)"), new Location("You are at the edge of a forest", "./img/66.gif", "rgb(167, 245, 63)"), new Location("You are in a deep forest", "./img/27_i_67.gif", "rgb(140, 253, 99)")]
    ],

    mozliwekierunki: function (posx, posy) {
        let mozna = this.konekcje(posx, posy)
        //console.log(mozna)
        let wypiskierunkow = ""

        if (mozna.includes("N") == true) {
            wypiskierunkow = " NORTH"
        }

        if (mozna.includes("E") == true) {
            if (wypiskierunkow != "") {
                wypiskierunkow = wypiskierunkow + ","
            }
            wypiskierunkow = wypiskierunkow + " EAST"
        }

        if (mozna.includes("S") == true) {
            if (wypiskierunkow != "") {
                wypiskierunkow = wypiskierunkow + ","
            }
            wypiskierunkow = wypiskierunkow + " SOUTH"
        }

        if (mozna.includes("W") == true) {
            if (wypiskierunkow != "") {
                wypiskierunkow = wypiskierunkow + ","
            }
            wypiskierunkow = wypiskierunkow + " WEST"
        }

        document.getElementById("kierunki").innerHTML = "You can go" + wypiskierunkow

    },


    pierwszy: function (posx, posy) {
        flagwyjscia = 0
        flagwin = false
        itemlocation = [
            [[], [], [31], [], [27], [], [14]],
            [[], [], [10], [], [], [], [18]],
            [[], [32], [], [], [], [], []],
            [[], [], [], [21], [], [], []],
            [[], [], [], [], [33], [], []],
            [[], [], [], [24], [], [], []],
        ]


        let miejsce = game.board[posy][posx]
        miejsce.generowanie(posx, posy)
        let b = game.konekcje(posx, posy)
        this.sprawdzenie(event, 0)
        game.mozliwekierunki(posx, posy)
        this.see(posx, posy, itemlocation)
        let reka = []
        game.trzymanyelement(reka)
    },

    trzymanyelement: function (raczka) {
        let tabtrzymanego = raczka
        //console.log(tabtrzymanego)
        let nazwatrzymanegoprzedmiotu = ""

        if (tabtrzymanego == "") {
            nazwatrzymanegoprzedmiotu = "nothing"
            //console.log("wlazi poteznie")
        } else {
            idtrzymanegoprzedmiotu = tabtrzymanego[0]
            let tabka = game.items
            for (let przeglad = 0; przeglad < tabka.length; przeglad++) {
                if (tabka[przeglad].id == idtrzymanegoprzedmiotu) {
                    nazwatrzymanegoprzedmiotu = tabka[przeglad].item
                }

            }

        }
        document.getElementById("reka").innerHTML = "You are carrying " + nazwatrzymanegoprzedmiotu
        //console.log(nazwatrzymanegoprzedmiotu)
    },

    sprawdzenie: function (e, flag) {
        if (flag == 0) {
            flagwin = false
            posx = 6
            posy = 3
            reka = []
            flagwyjscia = 1

            itemlocation = [
                [[], [], [31], [], [27], [], [14]],
                [[], [], [10], [], [], [], [18]],
                [[], [32], [], [], [], [], []],
                [[], [], [], [21], [], [], []],
                [[], [], [], [], [33], [], []],
                [[], [], [], [24], [], [], []],
            ]

            lki = 0
        }
        console.log(flagwyjscia)
        if (flagwyjscia == 1) {
            document.getElementById("inp").value = ""
            flagwyjscia = 0
        } else {




            if (e.key == "Enter") {
                let komenda1 = document.getElementById("inp").value
                let komenda2 = komenda1.toUpperCase()
                let mozliwosc = game.konekcje(posx, posy)

                let tabkaliterek = komenda2.trim().split(" ")
                //console.log(tabkaliterek)
                let komenda = tabkaliterek[0]
                console.log(komenda)



                //let komenda = nazwakomendy

                //let mozliwosc3litery = nazwakomendy


                if (komenda == "NORTH" || komenda == "N") {
                    let czymozna = mozliwosc.includes("N")
                    if (czymozna == true) {
                        posy = posy - 1
                        game.generka(posx, posy, itemlocation, reka, 500, "You are going north...")
                    } else {
                        game.generka(posx, posy, itemlocation, reka, 1000, "You can't go that way")
                    }
                } else if (komenda == "EAST" || komenda == "E") {
                    let czymozna = mozliwosc.includes("E")
                    if (czymozna == true) {

                        posx = posx + 1
                        game.generka(posx, posy, itemlocation, reka, 500, "You are going east...")


                    } else {
                        game.generka(posx, posy, itemlocation, reka, 1000, "You can't go that way")
                    }
                } else if (komenda == "SOUTH" || komenda == "S") {
                    let czymozna = mozliwosc.includes("S")
                    if (czymozna == true) {
                        posy = posy + 1
                        game.generka(posx, posy, itemlocation, reka, 500, "You are going south...")

                    } else {
                        game.generka(posx, posy, itemlocation, reka, 1000, "You can't go that way")
                    }
                } else if (komenda == "WEST" || komenda == "W") {
                    let czymozna = mozliwosc.includes("W")
                    if (czymozna == true) {

                        if (posy == 3 && posx == 1 && itemlocation[3][2].includes(30) == false) {
                            document.getElementById("inp").style.display = "none"
                            document.getElementById("komunikat").innerHTML = "You can't go that way..."
                            setTimeout(function () {
                                document.getElementById("komunikat").innerHTML = "You can't go that way... The dragon sleeps in a cave!"
                            }, 3000)
                            setTimeout(function () {
                                let ruch = game.board[posy][posx]
                                ruch.generowanie()
                                let kompi = game.konekcje(posx, posy)
                                game.mozliwekierunki(posx, posy)
                                game.see(posx, posy, itemlocation)
                                game.trzymanyelement(reka)
                                document.getElementById("inp").style.display = "inline"
                                document.getElementById("inp").focus()
                                document.getElementById("komunikat").innerHTML = " "
                            }, 6000)
                        } else {

                            posx = posx - 1
                            game.generka(posx, posy, itemlocation, reka, 500, "You are going west...")
                        }




                    } else {
                        game.generka(posx, posy, itemlocation, reka, 1000, "You can't go that way")
                    }
                } else if (komenda == "TAKE" || komenda == "T") {
                    //console.log("Mamy to")
                    let tabkaliterek = komenda2.trim().split(" ")
                    let nazwategoprzedmiotu = tabkaliterek[(tabkaliterek.length - 1)]
                    let tabka = game.items
                    let flagaogolna = true
                    //console.log(tabkategoprzedmiotu)
                    if (reka == "") {
                        flagaogolna = false
                        for (let przeglad = 0; przeglad < tabka.length; przeglad++) {
                            if (tabka[przeglad].item.toUpperCase() == nazwategoprzedmiotu) {
                                let flagaitemu = tabka[przeglad].flaga
                                let itemynalok = itemlocation[posy][posx]
                                let flagabycia = false
                                let numerdousuniecia = ""
                                console.log(itemynalok)
                                console.log("bablbab")
                                if (flagaitemu == 1) {
                                    for (let sprawdzeniemapy = 0; sprawdzeniemapy < itemynalok.length; sprawdzeniemapy++) {
                                        if (itemynalok[sprawdzeniemapy] == tabka[przeglad].id) {
                                            flagabycia = true
                                            flagaogolna = true
                                            numerdousuniecia = sprawdzeniemapy

                                        }
                                    }
                                } else {
                                    game.generka(posx, posy, itemlocation, reka, 1500, "You can't carry it")
                                    flagaogolna = true
                                    flagabycia = "nope"
                                }

                                if (flagabycia == true) {
                                    reka.push(tabka[przeglad].id)
                                    console.table(itemlocation[posy][posx])
                                    itemlocation[posy][posx].splice(numerdousuniecia, 1)
                                    console.table(itemlocation[posy][posx])
                                    let kom = "You are taking " + tabka[przeglad].itemodmiana
                                    game.generka(posx, posy, itemlocation, reka, 1500, kom)
                                } else if (flagabycia == false) {
                                    game.generka(posx, posy, itemlocation, reka, 1500, "There isn't anything like that here")
                                }
                            }

                        }
                    } else {
                        game.generka(posx, posy, itemlocation, reka, 1500, "You are carrying something")
                    }

                    if (flagaogolna == false) {
                        game.generka(posx, posy, itemlocation, reka, 1500, "There isn't anything like that here")

                    }



                } else if (komenda == "DROP" || komenda == "D") {
                    if (reka == "") {
                        game.generka(posx, posy, itemlocation, reka, 1500, "You are not carrying anything")

                    } else {
                        let przedmiotid = reka[0]
                        //console.log(przedmiotid)
                        let tabkaliterek = komenda2.trim().split(" ")
                        //console.log(tabkaliterek)
                        let nazwategoprzedmiotu = tabkaliterek[(tabkaliterek.length - 1)]
                        let tabka = game.items
                        let flaerson = false

                        for (let i = 0; i < tabka.length; i++) {
                            if (tabka[i].item == nazwategoprzedmiotu) {
                                let idwpisanego = tabka[i].id
                                if (idwpisanego == przedmiotid) {
                                    flaerson = true

                                }
                            }

                        }
                        if (flaerson == false) {
                            game.generka(posx, posy, itemlocation, reka, 1500, "You are not carrying it")

                        } else {
                            console.log("przeszo")
                            let przedmiotynalokalizacji = itemlocation[posy][posx]
                            console.log(przedmiotynalokalizacji)
                            let flagi1 = 0
                            for (let j = 0; j < przedmiotynalokalizacji.length; j++) {
                                for (let i = 0; i < game.items.length; i++) {
                                    if (przedmiotynalokalizacji[j] == game.items[i].id) {
                                        if (game.items[i].flaga == 1) {
                                            flagi1 = flagi1 + 1
                                        }
                                    }
                                }
                            }
                            if (flagi1 >= 3) {
                                game.generka(posx, posy, itemlocation, reka, 1500, "You can't store any more here")
                            } else {

                                itemlocation[posy][posx].push(przedmiotid)
                                for (let i = 0; i < game.items.length; i++) {
                                    if (game.items[i].id == przedmiotid) {
                                        reka = []
                                        let kom = "You are about to drop " + game.items[i].itemodmiana
                                        game.generka(posx, posy, itemlocation, reka, 1500, kom)


                                    }
                                }

                            }

                        }
                        //let nazwaprzedmiotuwlapie = 

                    }
                } else if (komenda == "USE" || komenda == "U") {
                    let nazwawpisana = tabkaliterek[tabkaliterek.length - 1]
                    let idwpisanego = 0
                    console.log(nazwawpisana)
                    idprzedmiotu = reka[0]
                    let flagers = false
                    for (let i = 0; i < game.items.length; i++) {
                        if (nazwawpisana == game.items[i].item) {
                            idwpisanego = game.items[i].id
                        }
                    }
                    if (idprzedmiotu == idwpisanego) {
                        flagers = true
                    }
                    console.log(flagers)
                    if (flagers == false) {
                        game.generka(posx, posy, itemlocation, reka, 1500, "You aren't carrying anything like that")
                    } else {
                        console.log("weszlo")
                        let lokal = posy + "_" + posx
                        for (let i = 0; i < game.zaleznosc.length; i++) {
                            if (idprzedmiotu == game.zaleznosc[i].idu) {
                                if (lokal == game.zaleznosc[i].lokalizacja) {
                                    if (game.zaleznosc[i].idu == 24) {
                                        reka = [game.zaleznosc[i].idw]
                                        game.kopanie(posx, posy, itemlocation, reka)
                                    } else if (game.zaleznosc[i].idu == 37) {
                                        itemlocation[3][2].push(game.zaleznosc[i].idw)
                                        reka = []
                                        game.dead(posx, posy, itemlocation, reka)
                                    } else if (game.zaleznosc[i].idu == 33) {
                                        if (itemlocation[3][2].includes(30)) {
                                            reka = [game.zaleznosc[i].idw]
                                            game.generka(posx, posy, itemlocation, reka, 1500, game.zaleznosc[i].komunikat)
                                        } else {
                                            game.generka(posx, posy, itemlocation, reka, 1500, "Nothing happened")
                                        }
                                    } else {
                                        console.log("SI SI")
                                        reka = []
                                        if (game.zaleznosc[i].ladowanie == "r") {
                                            reka = [game.zaleznosc[i].idw]
                                            game.generka(posx, posy, itemlocation, reka, 1500, game.zaleznosc[i].komunikat)
                                        } else if (game.zaleznosc[i].ladowanie == "l") {
                                            lki = lki + 1
                                            itemlocation[posy][posx].push(game.zaleznosc[i].idw)
                                            game.generka(posx, posy, itemlocation, reka, 1500, game.zaleznosc[i].komunikat)


                                            ///no tak jaby tu ale kto wie
                                            if (lki == 6) {
                                                setTimeout(function () {

                                                    reka = [37]
                                                    tabkaindexow = []
                                                    nokurczeile = itemlocation[3][2].length
                                                    for (let k = 0; k < nokurczeile; k++) {
                                                        if (itemlocation[3][2][k] == 13 || itemlocation[3][2][k] == 17 || itemlocation[3][2][k] == 20 || itemlocation[3][2][k] == 23 || itemlocation[3][2][k] == 26 || itemlocation[3][2][k] == 29) {
                                                            console.log(k)
                                                            //tabkaindexow.push(k)
                                                            itemlocation[3][2].splice(k, 1)
                                                            k = k - 1
                                                            nokurczeile = nokurczeile - 1
                                                        }
                                                    }

                                                    //itemlocation[3][2].push(30)
                                                    game.generka(posx, posy, itemlocation, reka, 1500, game.zaleznosc[14].komunikat)
                                                }, 1500)
                                            }
                                        }
                                    }

                                } else if (game.zaleznosc[i].idu == 36) {
                                    document.getElementById("calosc").remove()
                                    divciowin = document.createElement("div")
                                    divciowin.id = "winbedi"
                                    document.getElementById("wyswietlacz").appendChild(divciowin)
                                    flagwin = true
                                    const audio = new Audio("./audio/hejnal.m4a")
                                    audio.play()

                                    setTimeout(function () {
                                        alert("Wygra??e?? " + "link do hejna??u: https://www.youtube.com/watch?v=n5PYP2klyLA&ab_channel=V4NzI")
                                    }, 6000)



                                } else {
                                    game.generka(posx, posy, itemlocation, reka, 1500, "Nothing happened")
                                }
                            }
                        }
                    }
                } else if (komenda == "VOCABULARY" || komenda == "V") {
                    document.getElementById("inp").style.display = "none"
                    document.getElementById("komunikat").innerHTML = '"NORTH or N, SOUTH or S"</br>"WEST or W, EAST or E"</br>"TAKE (object) or T (object)"</br>"DROP (object) or D (object)"</br>"USE (object) or U (object)"</br>"GOSSIPS or G, VOCABULARY or V"</br>"Press any key"'
                    flagwyjscia = 0
                    document.body.addEventListener("keypress", function usuwka() {
                        if (flagwyjscia == 1) {
                            document.getElementById("inp").value = ""
                            document.body.removeEventListener("keypress", usuwka)
                            document.getElementById("inp").style.display = "inline"
                            document.getElementById("inp").focus()
                            document.getElementById("komunikat").innerHTML = " "


                        } else {
                            flagwyjscia = flagwyjscia + 1
                        }

                    });

                } else if (komenda == "GOSSIPS" || komenda == "G") {
                    document.getElementById("inp").style.display = "none"
                    document.getElementById("komunikat").innerHTML = '"The  woodcutter lost  his home key..."</br>"The butcher likes fruit... The cooper"</br>"is greedy... Dratewka plans to make a"</br>"poisoned  bait for the dragon...  The"</br>"tavern owner is buying food  from the"</br>"pickers... Making a rag from a bag..."</br>"Press any key"'
                    flagwyjscia = 0
                    document.body.addEventListener("keypress", function usuwka() {
                        if (flagwyjscia == 1) {
                            document.getElementById("inp").value = ""
                            document.body.removeEventListener("keypress", usuwka)
                            document.getElementById("inp").style.display = "inline"
                            document.getElementById("inp").focus()
                            document.getElementById("komunikat").innerHTML = " "


                        } else {
                            flagwyjscia = flagwyjscia + 1
                        }

                    });
                } else {
                    game.generka(posx, posy, itemlocation, reka, 1500, "Try another word or V for vocabulary")
                }
                if (flagwin == false) {
                    document.getElementById("inp").value = ""
                }

            }
        }
    },

    generka: function (posx, posy, itemlocation, reka, time, komunikat) {
        document.getElementById("inp").style.display = "none"
        document.getElementById("komunikat").innerHTML = komunikat
        setTimeout(function () {
            let ruch = game.board[posy][posx]
            ruch.generowanie()
            let kompi = game.konekcje(posx, posy)
            game.mozliwekierunki(posx, posy)
            game.see(posx, posy, itemlocation)
            game.trzymanyelement(reka)
            document.getElementById("inp").style.display = "inline"
            document.getElementById("inp").focus()
            document.getElementById("komunikat").innerHTML = " "
        }, time)
    },



    see: function (posx, posy, itemlocation) {
        let itemy = itemlocation[posy][posx]
        //console.log(itemy)
        let wypisane = ""
        let tabka = game.items
        //console.log(itemy.length)
        for (let itemki = 0; itemki < itemy.length; itemki++) {
            let pojedynczy = itemy[itemki]
            if (itemki > 0) {
                wypisane = wypisane + ", "
            }
            //console.log(tabka)
            for (let przeglad = 0; przeglad < tabka.length; przeglad++) {
                if (tabka[przeglad].id == pojedynczy) {
                    //console.log(tabka[przeglad].id)
                    //console.log(tabka[przeglad].item)
                    wypisane = wypisane + " " + tabka[przeglad].item
                }

            }
        }
        //console.log(wypisane)
        if (wypisane == "") {
            wypisane = " nothing"
        }
        document.getElementById("widok").innerHTML = "You see" + wypisane

    },

    konekcje: function (posx, posy) {
        if (posx == 0 && posy == 0) {
            document.getElementById("kompas").className = "kompas_E"
            return "E"
        } else if (posx == 1 && posy == 0) {
            document.getElementById("kompas").className = "kompas_EW"
            return "EW"
        } else if (posx == 2 && posy == 0) {
            document.getElementById("kompas").className = "kompas_ESW"
            return "ESW"
        } else if (posx == 3 && posy == 0) {
            document.getElementById("kompas").className = "kompas_EW"
            return "EW"
        } else if (posx == 4 && posy == 0) {
            document.getElementById("kompas").className = "kompas_EW"
            return "EW"
        } else if (posx == 5 && posy == 0) {
            document.getElementById("kompas").className = "kompas_EW"
            return "EW"
        } else if (posx == 6 && posy == 0) {
            document.getElementById("kompas").className = "kompas_SW"
            return "WS"
        } else if (posx == 0 && posy == 1) {
            document.getElementById("kompas").className = "kompas_ES"
            return "ES"
        } else if (posx == 1 && posy == 1) {
            document.getElementById("kompas").className = "kompas_EWS"
            return "EWS"
        } else if (posx == 2 && posy == 1) {
            document.getElementById("kompas").className = "kompas_NESW"
            return "ENWS"
        } else if (posx == 3 && posy == 1) {
            document.getElementById("kompas").className = "kompas_EW"
            return "EW"
        } else if (posx == 4 && posy == 1) {
            document.getElementById("kompas").className = "kompas_ESW"
            return "ESW"
        } else if (posx == 5 && posy == 1) {
            document.getElementById("kompas").className = "kompas_EW"
            return "EW"
        } else if (posx == 6 && posy == 1) {
            document.getElementById("kompas").className = "kompas_NW"
            return "NW"
        } else if (posx == 0 && posy == 2) {
            document.getElementById("kompas").className = "kompas_NE"
            return "NE"
        } else if (posx == 1 && posy == 2) {
            document.getElementById("kompas").className = "kompas_NW"
            return "NW"
        } else if (posx == 2 && posy == 2) {
            document.getElementById("kompas").className = "kompas_NS"
            return "NS"
        } else if (posx == 3 && posy == 2) {
            document.getElementById("kompas").className = "kompas_E"
            return "E"
        } else if (posx == 4 && posy == 2) {
            document.getElementById("kompas").className = "kompas_NSW"
            return "NSW"
        } else if (posx == 5 && posy == 2) {
            document.getElementById("kompas").className = "kompas_S"
            return "S"
        } else if (posx == 6 && posy == 2) {
            document.getElementById("kompas").className = "kompas_S"
            return "S"
        } else if (posx == 0 && posy == 3) {
            document.getElementById("kompas").className = "kompas_E"
            return "E"
        } else if (posx == 1 && posy == 3) {
            document.getElementById("kompas").className = "kompas_EW"
            return "EW"
        } else if (posx == 2 && posy == 3) {
            document.getElementById("kompas").className = "kompas_NW"
            return "NW"
        } else if (posx == 3 && posy == 3) {
            document.getElementById("kompas").className = "kompas_E"
            return "E"
        } else if (posx == 4 && posy == 3) {
            document.getElementById("kompas").className = "kompas_NESW"
            return "NESW"
        } else if (posx == 5 && posy == 3) {
            document.getElementById("kompas").className = "kompas_NEW"
            return "NEW"
        } else if (posx == 6 && posy == 3) {
            document.getElementById("kompas").className = "kompas_NSW"
            return "NSW"
        } else if (posx == 3 && posy == 4) {
            document.getElementById("kompas").className = "kompas_E"
            return "E"
        } else if (posx == 4 && posy == 4) {
            document.getElementById("kompas").className = "kompas_NSW"
            return "NSW"
        } else if (posx == 5 && posy == 4) {
            document.getElementById("kompas").className = "kompas_S"
            return "S"
        } else if (posx == 6 && posy == 4) {
            document.getElementById("kompas").className = "kompas_N"
            return "N"
        } else if (posx == 3 && posy == 5) {
            document.getElementById("kompas").className = "kompas_E"
            return "E"
        } else if (posx == 4 && posy == 5) {
            document.getElementById("kompas").className = "kompas_NEW"
            return "NEW"
        } else if (posx == 5 && posy == 5) {
            document.getElementById("kompas").className = "kompas_NEW"
            return "NEW"
        } else if (posx == 6 && posy == 5) {
            document.getElementById("kompas").className = "kompas_W"
            return "W"
        }
    },
}