# Moment 4 – HTTP-anrop med Angular

En Angular-applikation som hämtar ramschemat för Webbutvecklingsprogrammet och visar kurserna i en tabell. Tabellen kan filtreras och sorteras utan att sidan laddas om.

## Funktioner

- Hämtar kursdata med Angulars HttpClient genom en service.
- Visar kurskod, kursnamn, progression och en länk till kursplanen.
- Filtrerar på kurskod och kursnamn direkt när söktexten ändras.
- Sorterar på kurskod, kursnamn och progression.
- Växlar mellan stigande och fallande ordning vid upprepade klick på samma kolumnrubrik.

## Tekniker

Projektet använder Angular 17, TypeScript, HTML och CSS. Datahämtningen returnerar en Observable från RxJS. Applikationen använder fristående komponenter och Angulars router.

## Projektstruktur

- `src/app/ramschema.service.ts` innehåller tjänsten för HTTP-anrop och interfacet `Kurs`.
- `src/app/ramschema/ramschema.component.ts` hanterar kurslistan, sökning och sortering.
- `src/app/ramschema/ramschema.component.html` innehåller sökfältet och tabellen.
- `src/app/ramschema/ramschema.component.css` innehåller komponentens stilmall.
- `src/app/app.routes.ts` kopplar startsidan till ramschemakomponenten.
- `src/app/app.config.ts` registrerar routern och HttpClient.
- `src/app/app.config.server.ts` kompletterar konfigurationen för serverrendering.
- `src/main.ts` startar applikationen med den gemensamma konfigurationen.
- `angular.json` anger inställningarna för utveckling och produktionsbygge.
- `netlify.toml` anger byggkommando, publiceringskatalog och omdirigeringar på Netlify.

## Så fungerar lösningen

När ramschemakomponenten startar anropas `getRamschema()` i `RamschemaService`. Tjänsten använder `HttpClient.get<Kurs[]>()` för att hämta JSON från `https://webbutveckling.miun.se/files/ramschema_ht23.json`.

Interfacet `Kurs` beskriver kurskod, kursnamn, progression och kursplan. Samma interface används av tjänsten och komponenten. När svaret kommer sparas kurserna i `kurser` och den synliga listan i `filtreradeKurser`. Tabellen byggs upp med `*ngFor` och Angulars databindning.

Sökfältet är bundet till `sokfras` med `ngModel`. Vid inmatning körs `filtreraKurser()`, som jämför söktexten med både kurskod och kursnamn. Jämförelsen görs med små bokstäver så att sökningen inte skiljer på stora och små bokstäver.

Klick på en kolumnrubrik anropar `sorteraKurser()` med kolumnens fältnamn. Om samma kolumn väljs igen växlas ordningen. Fältvärdena jämförs med `localeCompare()` och den synliga listan uppdateras direkt.

## Installation

Klona repot och gå till projektmappen:

```bash
git clone https://github.com/DT208G-Programmering-i-TypeScript/moment-4.git
cd moment-4
npm ci
```

Starta utvecklingsservern:

```bash
npm start
```

Öppna `http://localhost:4200/` i webbläsaren.

## Bygga och publicera

```bash
npm run build
```

De statiska filerna för publicering hamnar i `dist/ramschema-app/browser`. Netlify använder samma byggkommando och katalog enligt `netlify.toml`.

Planerad publiceringsadress: https://mom-4-http-client.netlify.app/
