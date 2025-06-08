# Moment 4 - Programmering i TypeScript

Detta är en Angular-applikation som hämtar, visar, sorterar och filtrerar kursdata från ett externt API.

## Applikationens struktur

Applikationen är byggd med Angular och är uppdelad i ett antal nyckelkomponenter och tjänster för att hantera visning och manipulation av ett ramschema för kurser.

-   **`src/`**: Innehåller all källkod för applikationen.
    -   **`app/`**: Kärnan i Angular-applikationen.
        -   **`ramschema/`**: Innehåller den primära komponenten för att visa ramschemat.
            -   `ramschema.component.ts`: Logiken för att hämta, filtrera och sortera kursdata. Den innehåller metoder för att hantera användarinteraktioner som sökning och sortering.
            -   `ramschema.component.html`: Mallen som definierar strukturen för ramschemat, inklusive sökfält och tabellen där kurserna visas. Använder Angular-direktiv som `*ngFor` för att rendera listan.
            -   `ramschema.component.css`: Stilmallar specifika för `RamschemaComponent`.
        -   `app.component.ts`: Applikationens rotkomponent.
        -   `app.component.html`: Huvudmallen som i huvudsak agerar som en behållare för andra komponenter. I denna applikation renderas `RamschemaComponent` här.
        -   `app.routes.ts`: Definierar applikationens routing. Den är konfigurerad så att `RamschemaComponent` är standardvyn som visas när applikationen startar.
        -   `ramschema.service.ts`: En Angular-tjänst som ansvarar för att hämta kursdata. Den använder `HttpClient` för att göra en GET-förfrågan till ett externt JSON-API och returnerar en `Observable` med en array av `Kurs`-objekt.
        -   `kurs.ts`: En TypeScript-interface som definierar datastrukturen för ett `Kurs`-objekt (code, coursename, progression, syllabus).
    -   **`assets/`**: Avsedd för statiska tillgångar som bilder och ikoner (används för närvarande inte).
    -   **`environments/`**: Miljöspecifika konfigurationsfiler (används för närvarande inte).
-   **`angular.json`**: Konfigurationsfil för Angular CLI, som definierar hur applikationen byggs, testas och körs.
-   **`package.json`**: Innehåller projektets metadata och en lista över beroenden (dependencies) som krävs för projektet.

## Hur lösningen fungerar

1.  **Initiering**: När applikationen startas, laddas `AppComponent`.
2.  **Routing**: Routern, enligt konfigurationen i `app.routes.ts`, ser till att `RamschemaComponent` omedelbart visas.
3.  **Datahämtning**: I `RamschemaComponent` anropas `RamschemaService` under `ngOnInit`-livscykelhooken. Tjänsten skickar en HTTP GET-förfrågan till `https://webbutveckling.miun.se/files/ramschema_ht23.json`.
4.  **Datavisning**: När datan tas emot från tjänsten (som en `Observable`), prenumererar komponenten på den och lagrar kurslistan i en lokal variabel. HTML-mallen renderar sedan denna data i en tabell med hjälp av `*ngFor`.
5.  **Användarinteraktion**:
    -   **Filtrering**: Användaren kan skriva i ett sökfält. För varje tangenttryckning anropas en funktion som filtrerar kurslistan baserat på om söktermen matchar kurskoden eller kursnamnet. Endast matchande kurser visas i tabellen.
    -   **Sortering**: Användaren kan klicka på tabellrubrikerna (`Kurskod`, `Kursnamn`, `Progression`). Detta utlöser en sorteringsfunktion som sorterar listan baserat på den valda kolumnen. Ett klick sorterar i stigande ordning, och ett andra klick på samma rubrik sorterar i fallande ordning.

## Eventuell förbättring

I filen `app.component.html` inkluderas `<app-ramschema>`-komponenten direkt via sin tagg, samtidigt som `app.routes.ts` konfigurerar `<router-outlet>` att visa samma komponent. Detta leder till att komponenten renderas två gånger på sidan. För att åtgärda detta kan man ta bort `<app-ramschema>` från `app.component.html` och enbart förlita sig på `<router-outlet>`.

## Hur man kör applikationen

1.  Klona detta repository till din lokala maskin.
2.  Se till att du har [Node.js](https://nodejs.org/) och [Angular CLI](https://angular.io/cli) installerat.
3.  Öppna en terminal i projektets rotmapp och kör `npm install` för att installera alla beroenden.
4.  Kör `ng serve` för att starta utvecklingsservern.
5.  Öppna din webbläsare och navigera till `http://localhost:4200/`.
