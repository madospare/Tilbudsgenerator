// Henter inn form og tekstområdet
var form = document.getElementById("form");
var output = document.getElementById("output");

form.addEventListener("submit", function(event) 
{

    var data = form.elements;
    var kunde = data.kunde.value;
    var support = data.support.value;
    var internett = data.internett;
    var ekstra = data.ekstra;
    var pris = [399.00, 599.00, 799.00, 999.00];
    var ekstraPris = [399.00, 499.00];

    var alleTilbud = [];
    var allePriser = [];
    var total1;
    var total2;
    var rabatt = 0;

    function LeggTilPris() 
    {

        // Legger til verdier og priser i arrays og viser kun verdien som er sjekket av
        for (var i = 0; i < internett.length; i++) 
        {
            if (internett[i].checked) 
            {
                alleTilbud.push(internett[i].value)
                allePriser.push(pris[i]);
                total1 += pris[i];
            }
        }

        // Legger til verdier og priser i arrays og viser kun tilbehør som er sjekket av
        for (var i = 0; i < ekstra.length; i++) 
        {
            if (ekstra[i].checked) 
            {
                alleTilbud.push(ekstra[i].value);
                allePriser.push(ekstraPris[i]);
                total2 = ekstraPris[i];
            }
        }

    }

    LeggTilPris();

    console.log(ekstra.value);

    output.innerHTML = "Hei " + kunde + " og takk for en hyggelig telefonsamtale." + '\n' + '\n'
    + "Bestilling: " + alleTilbud + " " + allePriser + " kr" + '\n'
    + "Rabatt: " + rabatt + '\n'
    + "Total: " + total1 + " kr" + total2 + " kr" + '\n' + '\n'
    + "Det er bare å svare på denne eposten hvis du har noen spørsmål." + '\n' + '\n'
    + "MVH " + support;

    // Stanser formen fra å refreshe siden
    event.preventDefault();

});