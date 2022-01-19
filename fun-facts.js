const currentDay= document.querySelector('.current-day')
const funFact=document.querySelector('.fun-fact')


const facts = [
'Pustynie Błędowska to jedyna, naturalna pustynia w Europie', 'Najmłodszy uczestnik programu Mam Talent miał zaledwie 3 lata, wystąpił w 7 polskiej edycji', 'Szczecińskie kino Pioner funkcjonujące od 1909 roku i jest tym samym drugim najdłużej działającym kinem na świecie' , 'Na cześć Józefa Stalina w latach 1953 – 1956 Katowice nosiły nazwę Stalinogród', 'Kamizelkę kuloodporną wymyślili Polacy – Kazimierz Żegleń i Jan Szczepanik', 'Najwyższą temperaturę odnotowano 29 lipca 1921 roku w Prószkowie koło Opola – 40,2 stopnie C ', 'Góry Świętokrzyskie są najstarszymi górami w Europie', 'Od 1600 do 1945 roku Polska była okupowana bądź w jakiś inny sposób walczyła o wolność skromne… 43 razy. Bez względu na to, co faktycznie i w jaki sposób policzono, jest to niemała liczba, dobrze obrazująca polskie dzieje', '13,74 promila - tyle alkoholu we krwii miał 40-letni mieszkaniec okolic Nowej Dęby na Podkarpaciu. Mężczyzna nieprzytomny leżał w rowie przy drodze krajowej nr 9. Choć to niewiarygodne, to 40-latek przeżył', 'We wsi Piątek, 33 km od Łodzi znajduje się dokładny środek Polski', 'Na terenie Polski znajduje się 419 zamków pozostawionych w różnym stanie. Do najważniejszych i najbardziej popularnych z nich należy na pewno zamek krzyżacki w Malborku, na budowę którego zużyto ponad 4, 5 mln cegieł. Współcześnie zamek cieszy się ogromną popularnością wśród najmłodszych zafascynowanych zbiorami zbroi i broni, a także popularnymi widowiskami typu światło dźwięk pozwalającymi przenieść się na chwilę w dawne czasy', 'We Wrocławiu do 1998 roku działała nielegalna produkcja banknotów 100 $. Amerykańscy eksperci po ich analizie uznali, że są lepiej zrobione niż oryginalne','Józef Piłsudski maskował wąsami braki w uzębieniu. W 1887 Piłsudski, przebywający w tym czasie w więzieniu w Irkucku, został uderzony kolbą karabinu przez strażnika i stracił dwa przednie zęby. Mimo że zarówno w latach 20., jak i 30. duże sumiaste wąsy były zdecydowanie passé, marszałek nosił je do końca życia.' ,'Firmę Max Factor założył Polak, Maksymilian Faktorowicz.' , 'Kanał Fashion TV stworzył Polak, Michel Adam Lisowski.', 'Polska jest największym eksporterem bursztynu na świecie.']


const day = new Date()
currentDay.textContent=day.toLocaleString('pl', {weekday:"long"})

const showFact = () => {
    const number = Math.floor(Math.random()*facts.length)
    funFact.textContent=facts[number]
    
}
showFact()