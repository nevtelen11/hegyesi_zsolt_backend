'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('aruk', 
      [
        { 
          "nev": "Dália",
          "kategoriaId": 1,
          "leiras": "A dáliák gumós, fagyérzékeny évelők. Tápanyagdús talajban virágoznak a legszebben. Vízigényük közepes, virágzásuk idején rendszeres vízellátást igényelnek. Virágzási idejük júliustól októberig tart. Kiválóan alkalmasak vágott virágnak.",          
          "keszlet": 40,
          "ar": 356,
          "kepUrl": "/assets/img/dalia.jpg"
        },
        {      
          "nev": "Százszorszép",
          "kategoriaId": 1,
          "leiras": "A százszorszép meglehetősen gyakran fordul elő a pázsitokon, különösen a hűvös, nedves éghajlaton. Ma már számos színes, telt és dupla fajtája létezik, amelyek közül kedvükre válogathatnak nálunk. Ennek a kedves virágnak a változatai üde látványt nyújtanak mind kerti utak mentén, mind balkonládában.",          
          "keszlet": 170,
          "ar": 530,
          "kepUrl": "/assets/img/szazszorszep.jpg"
        },
        {          
          "nev": "Levendula",
          "kategoriaId": 1,
          "leiras": "A levendula - bár mindenki szereti - nem annyira elterjedt a hazai kertekben, mint például a rózsa vagy a leander, pedig tartása kifejezetten egyszerű, hasznossága pedig megkérdőjelezhetetlen, hiszen kerti díszként, gyógynövényként, molyűző alapanyagaként is tekinthet rá, de még egyéb jótéteményei is akadnak!",          
          "keszlet": 90,
          "ar": 660,
          "kepUrl": "/assets/img/levendula.jpg"
        },
        {        
          "nev": "Petúnia",
          "kategoriaId": 1,
          "leiras": "A petúnia csodálatos hangulatot teremt a teraszon és a kertben. Rengetegféle változatban kapható, zuhatagszerűen leomló színes virágai mindenkit elkápráztatnak. Ez a mesés virágözön gyakorlatilag bárhol megvalósítható, azt azonban tudni kell, hogy bár a petúnia strapabíró, de ahhoz, hogy folyamatosan virágozzon, minden nap foglalkozni kell vele.",
          "keszlet": 70,
          "ar": 470,
          "kepUrl": "/assets/img/petunia.jpg"
        },       
        {          
          "nev": "Bazsalikom",
          "kategoriaId": 3,
          "leiras": "A bazilika vetőmagjai, a mediterrán konyha egyik legnépszerűbb gyógynövénye. A bazsalikom ízesítő értékével együtt gyógyászati eszközöket is bemutat. A levelekből készült infúzió enyhíti a köhögést és segít a húgyúti gyulladások gyógyulásában. A friss és szárított levelek javítják az emésztési folyamatot. ",
          "keszlet": 20,
          "ar": 420,
          "kepUrl": "/assets/img/bazsalikom.jpg"
        },
        {          
          "nev": "Rozmaring",
          "kategoriaId": 3,
          "leiras": "A rozmaring (Rosmarinus) egy ismert fűszer- és gyógynövény, amelyet hazánkban is nagy előszeretettel használnak a konyhában. A rozmaring segít légzőszervi- és megfázásos megbetegedések esetén, amit köptető és enyhén gyulladáscsökkentő hatásának köszönhet. Nátha ellen is hatékony, vírus- és baktériumölő, illetve gyulladáscsökkentő hatása van.",
          "keszlet": 0,
          "ar": 790,
          "kepUrl": "/assets/img/rozmaring.jpg"
        },
        {          
          "nev": "Paradicsom",
          "kategoriaId": 2,
          "leiras": "A paradicsommag lehetővé teszi számunkra, hogy könnyen termeljünk palántákat, amelyekből egészséges, ízletes paradicsomot viselő növények fejlődnek. A magvakból származó paradicsom nem problémás, és nem igényel nagy figyelmet. Csak stabil, magas hőmérséklet és rendszeres vízellátás szükséges.",
          "keszlet": 250,
          "ar": 520,
          "kepUrl": "/assets/img/paradicsom.jpg"
        },
        {          
          "nev": "Sárgarépa",
          "kategoriaId": 2,
          "leiras": "A sárgarépa fontos zöldségnövény, jelentős vitaminforrás, régóta ismerjük és termesztjük. Igazi vitamin- és ásványianyag-bomba! Már napi 5 deka sárgarépa is fedezi a szervezetünk béta-karotin-szükségletét. Az egész évben beszerezhető sárgarépa fogyasztása ajánlott immunerősítő kúrákban.",
          "keszlet": 300,
          "ar": 590,
          "kepUrl": "/assets/img/sargarepa.jpg"
        },
        {          
          "nev": "Karalábé",
          "kategoriaId": 2,
          "leiras": "A karalábé a káposztafélék családjába tartozó zöldségnövény. Nagyon egészséges nyersen és főzve is. Alacsony a kalóriatartalma, koleszterint egyáltalán nem tartalmaz, viszont rostban gazdag és magas vitamintartalmú. Egész évben termeszthető.",
          "keszlet": 230,
          "ar": 720,
          "kepUrl": "/assets/img/karalabe.jpg"
        },
        {          
          "nev": "Szamóca",
          "kategoriaId": 4,
          "leiras": "Az eper (helyes nevén szamóca, vagy földieper) az egyik legkedveltebb bogyós gyümölcsű növény. A szamócagyümölcs finom íze, tetszetős külleme, kellemes illata páratlan, ezért nevezik a 'gyümölcsök királynőjének' is. Ha kertjébe szamócát telepít, Önnek is örömet okozhat a saját termésű, ízletes szamóca szüretelése és fogyasztása.",
          "keszlet": 200,
          "ar": 1200,
          "kepUrl": "/assets/img/szamoca.jpg"
        },
        {          
          "nev": "Málna",
          "kategoriaId": 4,
          "leiras": "A málna nagyon ízletes és egészséges gyümölcs, amelyet érdemes tartani a kertben. A fagytűrő növény remekül boldogul a mi éghajlatunkon, ezért a málna gond nélkül termeszthető az országunk egész területén. A málna a jó szerkezetű, vízzel, levegővel és tápanyagokkal egyidejűleg bőven ellátott talajok növénye.",
          "keszlet": 130,
          "ar": 1400,
          "kepUrl": "/assets/img/malna.jpg"
        },
        {          
          "nev": "Chili paprika",
          "kategoriaId": 2,
          "leiras": "A chili paprika a trópusi és szubtrópusi éghajlaton élő csípős paprikák gyűjtőneve. A chilik szeretik a meleget. Közel állnak a csemege paprikához és a paradicsomhoz (mindegyik ugyanabba a családba tartozik), de a chili paprikák jóval magasabb hőmérsékletet igényelnek.",
          "keszlet": 80,
          "ar": 920,
          "kepUrl": "/assets/img/chili-paprika.jpg"
        },
        
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('aruk', null, {});
  }
};
