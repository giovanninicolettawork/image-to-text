# Image To Text

Questo sito consente di estrarre il testo contenuto all'interno di immagini caricate dall'utente.
# Demo
Una demo del sito è stata rilasciata tramite *Git Hub Pages* ed è disponibile al link:
[image-to-text-demo](https://giovanninicolettawork.github.io/image-to-text/)

# Specifiche

Il codice è stato scritto in *TypeScript* utilizzando il framework *Angular (12)* e *Bootstrap (5)*.
Per quanto riguarda l'estrazione del testo è stata utilizzata una versione JavaScript di *Tesseract OCR engine* e, nello specifico, [tesseract.js](https://tesseract.projectnaptha.com/)

Il sito consente di:
- caricare un file immagine
- visualizzare l'immagine nel browser
- selezionare la lingua in cui è scritto il testo che si vuole estrarre
- procedere all'estrazione del testo
- visualizzare e copiare il testo estratto
- resettare e procedere a nuova estrazione

## Installazione e utilizzo
Prima di utilizzare il codice è necessario installare le dipendenze tramite il comando:

    npm install

Per lanciare il sito in locale è possibile utilizzare il comando:

    ng serve
Utilizzare il comando seguente per generare i file necessari al rilascio su altro ambiente nella cartella "*dist*":

    ng build
È stato configurato *Git Hub Pages* tramite il comando:

    ng add angular-cli-ghpages
e per rilasciare il sito su *Git Hub Pages*:

    ng deploy --base-href=/image-to-text/

## Stato del progetto
Si tratta di un software implementato al solo scopo di acquisire confidenza con la tecnologia *Angular*