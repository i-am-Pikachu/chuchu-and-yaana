let data = {
  "17 October, 2024 &ndash; New Beginnings":"<p>After displacing her elbow during volleyball practice, Caitlin put a note on instagram about it. Who knew this was the opportunity Nahiyaan had been looking for to slide into his crush's DMs? It all started with an innocent gesture of worry which turned into daily small talk. A new chapter was being written into The Book of Life. How will it end?</p>",
  "5 December, 2024 &ndash; Friends to Lovers":"<p>Within the next 49 days, the two lovebirds started getting to know each other. Watching films together and listening to songs together couldn't possibly be coined as 'just friends'. Well, spoiler alert, it wasn't. Caitlin <em>technically</em> asked Nahiyaan out and little did she know, he had been plotting for this girl for the past 6 months. Will it last? How long?</p>",
  "11 December, 2024 &ndash; Hand in Hand":"<p>With Science Club meeting as an excuse, the stage for the first date ever had been set. After a long session of trauma dumping and talking about past, Nahiyaan finally gathered the courage to ask for Caitlin's hand.<br>Did she accept it? Yup.<br>Was it awkward? Definitely.</p>",
  "13 December, 2024 &ndash; Ferris Wheel":"<p>Nahiyaan bunked his lab class and went on a cute date with Caitlin. Well, what made it cute was the result of a teeny tiny bit of winging by Fahim. To be fair, none of them expected to ride a ferris wheel together. But i guess fate is unpredictable after all, huh?</p>",
  "8 February, 2025 &ndash; Hard Launch":"<p>Phew. Took them long enough. With nothing but innocent interest, Caitlin wanted to watch Tangled with Nahiyaan. However, the innocence eventually transformed into the cutest moment ever. No one expected it, but this day marked the true beginning of Chuchu and Yaana, on papers.</p>",
  "15 February, 2025 &ndash; Stolen Spark":"<p>Sheesh. Who knew this little girl would be so brave as to steal someone's first kiss so casually? Caitlin Lysandra Quiah. Looking all red and puffy, the two lovebirds finally met with their beaks.</p>",
  "28 May, 2025 &ndash; Teenage Love":"<p>Although the relationship was as perfect as it could be, life just isn't fair. The lovebirds eventually had to part ways and seeing each other in school uniform would lie dormant deep within their memories. Forever.</p>",
  "Till death do us part?":"<p>The feelings? Emotions? Commitment? Love? Just a bit too much to fit within the margins of this website. But one thing for sure, they will make it. No matter what.</p>" 
};

function set() {
  document.getElementById("timeline-title").innerHTML = keys[index];
  document.getElementById("timeline-content").innerHTML = data[keys[index]];
}

let index = 0;
let keys = Object.keys(data);
set()

function next() {
  let keys = Object.keys(data);
  index = (index + 1) % keys.length;
  set()
}

function prev() {
  let keys = Object.keys(data);
  index = (index - 1 + keys.length) % keys.length;
  set()
}
