const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";  // Conexiunea la MongoDB
const client = new MongoClient(uri);

async function insertShows() {
  try {
    await client.connect();
    const database = client.db("theaterDB");  // Baza de date
    const shows = database.collection("shows");  // Colecția

    // Spectacolele de adăugat
    const newShows = [
      {
        title: 'Scufița roșie',
        description: 'Spectacolul „Scufița Roșie”, în regia lui Mihai Donțu, aduce pe scenă o reinterpretare captivantă a binecunoscutei povești a lui Charles Perrault. Această adaptare combină elemente clasice cu o perspectivă proaspătă, oferind o experiență teatrală plină de culoare și dinamism, destinată copiilor cu vârsta cuprinsă între 3 și 9 ani. Scenografia semnată de Mihai Pastramagiu creează un decor magic, în care pădurea și casa bunicii prind viață, oferind un fundal fermecător pentru aventurile Scufiței Roșii. Distribuția include actori talentați, precum Florin Iftode, Marius Rusu, Alin Gheorghiu, Adelina Cojocariu, Renata Voloșcu, Ana Apetrei și Andrei Bordianu, care reușesc să transpună personaje memorabile și pline de viață. Spectacolul reinterpretează povestea cu un umor fin și momente surprinzătoare, păstrând esența poveștii clasice despre curaj, înțelepciune și încredere.',
        image: 'public/scufita.jpg'
      },
      {
        title: 'Aventurile lui Chiț',
        description: '„Aventurile lui Chiț”, regizat de Valentin Dobrescu, este un spectacol plin de energie și muzică pop, destinat copiilor cu vârsta între 4 și 18 ani. Povestea urmărește un șoricel curios care explorează podul teatrului, unde descoperă decoruri uitate și întâlnește personaje fascinante: o balerină, cântăreți mexicani, instrumentiști și chiar fantome. Distribuția, care îi include pe Andrei Bordianu, Ana Apetrei și Cosmin Tanasă, aduce la viață o aventură amuzantă și plină de surprize, într-o atmosferă de poveste.',
        image: 'public/chit.jpg'
      },
      {
        title: 'Frumoasa și Bestia',
        description: '„Frumoasa și Bestia”, în regia lui Valentin Dobrescu, este o adaptare a poveștii clasice engleze, recomandată copiilor de peste 3 ani. Spectacolul aduce pe scenă o poveste despre curaj și dragoste, completată de scenografia lui Mihai Pastramagiu și muzica semnată de Alin Macovei-Moraru. Distribuția include actori talentați precum Adelina Cojocariu, Andrei Iurescu și Ioana Buta, care oferă o interpretare emoționantă a personajelor. Publicul este invitat într-o lume magică, unde iubirea adevărată depășește orice obstacol și transformă imposibilul în posibil.',
        image: 'public/frumoasa.jpg'
      },
      {
        title: 'Pinocchio',
        description: '„Pinocchio”, adaptat și regizat de Valentin Dobrescu, este o reinterpretare a poveștii clasice, adresată copiilor de peste 3 ani. Scenografia realizată de Mihai Pastramagiu și muzica lui Alin Macovei Moraru adaugă magie acestui spectacol despre transformare și învățare. Distribuția îi include pe Adelina Cojocariu, Pavel Petrași și Cosmin Tanasă, care dau viață personajelor binecunoscute. Spectacolul urmărește peripețiile păpușii de lemn în căutarea umanității, o poveste captivantă și plină de lecții despre curaj, greșeli și maturizare.',
        image: 'public/Pinocchio.jpg'
      },
      {
        title: 'Povestiri de buzunar',
        description: '„Povestiri de buzunar”, regizat de Valentin Dobrescu, este un spectacol plin de imaginație, destinat copiilor cu vârste între 3 și 10 ani. Scenografia creată de Mihai Pastramagiu și muzica compusă de Constantin Panaite completează atmosfera veselă și jucăușă a poveștilor. Distribuția reunește actori precum Florin Iftode și Anamaria Chelaru, care aduc la viață o serie de povestiri scurte și captivante, potrivite pentru micii spectatori. Spectacolul oferă momente amuzante și pline de farmec, încurajând copiii să își lase imaginația să zboare.',
        image: 'public/povestiridebuzunar.jpg'
      },
      {
        title: 'Muc cel mic',
        description: '„Muc cel mic”, regizat de Marius Rogojinschi, este un spectacol plin de aventuri, destinat copiilor între 5 și 10 ani. Scenografia realizată de Marius Rogojinschi și Mihai Pastramagiu, alături de muzica lui Constantin Panaite, contribuie la crearea unei atmosfere exotice și captivante. Distribuția include actori talentați precum Adelina Cojocariu, Florin Iftode și Pavel Petrași. Povestea urmărește peripețiile istețului Muc la curtea unui sultan arab, unde reușește să depășească capcanele slujitorilor invidioși. Spectacolul transmite lecții valoroase despre curaj, sinceritate și loialitate, atât pentru copii, cât și pentru părinți.',
        image: 'public/mcm.jpg'
      },
      {
        title: 'Rățușca cea urâtă',
        description: '„Rățușca cea urâtă”, regizat de Valentin Dobrescu, este o adaptare emoționantă a poveștii clasice, recomandată copiilor de peste 4 ani. Scenografia creată de Mihai Pastramagiu și muzica compusă de Cristian Lungu adaugă un plus de magie spectacolului. Distribuția, formată din Andrei Iurescu, Andrei Bordianu, Ana Apetrei și Ioana Buta, aduce la viață povestea rățuștei care, după multe provocări și momente de tristețe, descoperă că frumusețea interioară și acceptarea de sine sunt cele mai importante. O poveste plină de învățăminte despre curaj, speranță și iubire.',
        image: 'public/ratusca.jpg'
      },
      {
        title: 'Fram ursul polar',
        description: '„Fram, ursul polar” este un spectacol plin de aventură, destinat copiilor între 5 și 10 ani. Distribuția include actori talentați precum Oana Asofiei, Renata Voloșcu, Florin Iftode, Marius Rusu și Adelina Cojocariu, care dau viață personajelor din povestea despre călătoria unui urs polar. Spectacolul urmărește peripețiile lui Fram, un urs curajos care înfruntă provocările naturii, iar copiii vor învăța despre curaj, prietenie și importanța protejării mediului înconjurător.',
        image: 'public/fram.jpg'
      },
      {
        title: 'Luceafărul',
        description: '„Luceafărul”, o adaptare după celebrul poem de Mihai Eminescu, este regizat de Ion Sapdaru. Scenografia este realizată de Gelu Rîşca, video design-ul de Silviu Apostol, iar coregrafia este semnată de Victoria Bucun. În distribuția spectacolului sunt actori precum Oana Asofiei, Pavel Petraşi, Andrei Bordianu, Ana Apetrei, Anamaria Chelaru, Adelina Cojocariu, Renata Voloşcu, Andrei Iurescu și Cosmin Tanasă, iar vocea narativă este oferită de Ion Caramitru, înregistrată de Radio România. Spectacolul aduce în prim-plan „Luceafărul”, într-o interpretare coregrafică și muzicală, având la bază unul dintre cele mai importante poeme ale literaturii române. Prin aceasta, regizorul Ion Sapdaru îmbină teatrul, muzica și dansul într-o abordare artistică captivantă, însoțită de vocea legendară a lui Ion Caramitru. Recomandat copiilor cu vârsta peste 4 ani, acest spectacol oferă o oportunitate unică de a experimenta o capodoperă a literaturii române într-un format accesibil și emoționant.',
        image: 'public/luceafarul.jpg'
      },
      {
        title: 'Nelu GâscăNelu',
        description: '„Nelu Gâscănelu”, scris de Maria Gornic, este un spectacol regizat de Florin Iftode, cu muzica de Kevin MacLeod și scenografia semnată de Gelu Rîşca. Asistent regie este Alin Gheorghiu. Spectacolul povestește aventurile unui pui de gâscă lăudăros, Nelu Gâscănelu, care este adoptat de doi vecini nostimi. Din cauza atitudinii sale de laudă, Nelu Gâscănelu ajunge aproape să fie transformat într-o friptură de către doamna Vulpe. Totuși, Măriuca, o fetiță bună și prietenă a gâștei, reușește să-l salveze, învățându-l pe puiul de gâscă o lecție importantă despre modestie și prietenie. Spectacolul, cu un mix de păpuși și actori, este interactiv și destinat copiilor, oferind o lecție valoroasă despre cum „lauda de sine nu miroase-a bine.” Recomandat copiilor cu vârsta între 3 și 6 ani, acest spectacol promite nu doar distracție, ci și învățături importante pentru cei mici.',
        image: 'public/nelugascanelu.jpg'
      },
      {
        title: 'Miorița',
        description: '„Miorița”, adaptare după V. Alecsandri, este un spectacol semnat de regizoarea Silvia Răileanu, cu scenografia realizată tot de ea și coregrafia semnată de Victoria Bucun. Povestea, una dintre cele mai importante capodopere ale literaturii române, este interpretată de o distribuție talentată, incluzând pe Anamaria Chelaru, Adelina Cojocariu, Renata Voloșcu, și alții. Spectacolul aduce în fața publicului balada „Miorița”, care reflectă mitul fuziunii omului cu natura, și tratează teme precum invidia, trădarea și fatalitatea. Regizoarea Silvia Răileanu subliniază mesajul actual al piesei, legându-l de realitățile contemporane ale societății noastre. Este un spectacol profund, recomandat copiilor și tinerilor cu vârsta de peste 13 ani, care oferă o lecție despre alegerile noastre în viață și despre cum putem coexista armonios în societate.',
        image: 'public/miorita.jpg'
      },
      {
        title: 'Copiii stau în camera lor',
        description: '„Copiii stau în camera lor” este o adaptare după Natasa Tanská, realizată de Lenuş – Teodora Moraru. Regia artistică este semnată tot de Lenuş – Teodora Moraru, scenografia de Gelu Rîşca, iar muzica este compusă de Toma Rîşca. Spectacolul abordează teme profunde despre inocența și bunătatea copiilor, care pot fi ușor exploatate de către adulți în conflictele lor interne. În această poveste, copii sunt adesea prinși în războaiele absurde ale părinților și trebuie să fie cuminți pentru a nu deranja viața adultă. Însă, spectacolul pune în evidență și importanța rolului profesorilor, care sunt descriși ca „super-eroi” ce pot înțelege și vindeca copiii printr-o atenție discretă și prețuire sinceră a vieții. În distribuție îi găsim pe Irina Mititelu și Denisa Dutcovschi. Recomandat celor care sunt sensibili la temele de educație și înțelegere a copilăriei, acest spectacol își propune să ofere o lecție valoroasă despre importanța unei educații autentice și iubitoare.',
        image: 'public/copiii.jpg'
      },
      {
        title: 'Pupăza din tei',
        description: '„Pupăza din tei” este un spectacol adaptat după Ion Creangă, realizat în cadrul Studioului de teatru pentru tineret. Regia artistică îi aparține lui Ion Sapdaru, scenografia este semnată de Cătălin Târziu, iar coregrafia de Victoria Bucun. Coloana sonoră a fost realizată de Ion Sapdaru, iar fragmente muzicale au fost adăugate de Constantin Lupu.Spectacolul prezintă peripețiile personajului Nică, care are un plan de a fura pupăza din tei pentru a o vinde la iarmaroc. Conflictele dintre Nică și pupăză sunt povestite și jucate cu mult umor. Pavel Petraşi, Adelina Cojocariu, Oana Asofiei, Renata Voloşcu, Andrei Iurescu, Andrei Bordianu și Cosmin Tanasă fac parte din distribuție. Recomandat tinerilor cu vârsta de peste 13 ani, acest spectacol aduce în prim-plan un conflict amuzant, inspirat din „Amintiri din copilărie”, unul dintre cele mai iubite lucrări ale literaturii române.',
        image: 'public/pupaza.jpg'
      },
      {
        title: 'Elefănțelul curios',
        description: '„Elefănțelul Curios”, de Valentin Dobrescu, după o idee de Rudyard Kipling, este un spectacol plin de învățăminte, recomandat copiilor între 3 și 7 ani. Regia artistică este semnată de Valentin Dobrescu, iar muzica de Constantin Panaite și scenografia de Mihai Pastramagiu. Povestea îl are în centrul atenției pe Dodo, un pui de elefant curios care vrea să afle răspunsuri la întrebări neobișnuite, cum ar fi „ce mănâncă crocodilul la cină?”. Deși întrebarea sa îl pune în pericol, Dodo învață că este bine să fii curios, iar aventurile sale sunt o lecție despre curiozitate și învățătura din experiențele de viață. Distribuția include actori talentați precum Anamaria Chelaru, Oana Asofiei, și alții.',
        image: 'public/elefantul.jpg'
      },
      {
        title: 'Capra cu trei iezi',
        description: '„Capra cu trei iezi”, adaptare după Ion Creangă și dramatizare de Mihai Donțu, este un spectacol captivant pentru copii între 5 și 10 ani. Regia artistică și scenografia sunt semnate tot de Mihai Donțu și Mihai Pastramagiu, iar muzica este compusă de Cristian Lungu. În distribuție se află Anamaria Chelaru, Renata Voloșcu, Marius Rusu, și alții. Spectacolul reinterpretează clasicul povestirii „Capra cu trei iezi”, combinând elemente moderne și giumbușlucuri care vor atrage atenția celor mici. Regizorul Mihai Donțu propune o întoarcere în timp, aducând poveștile lui Ion Creangă într-o formă accesibilă și plăcută pentru copiii de astăzi.',
        image: 'public/capra.jpg'
      }

      
    ];

    
    const result = await shows.insertMany(newShows);
    console.log(`${result.insertedCount} spectacole adăugate cu succes!`);
  } catch (err) {
    console.error("Eroare la adăugarea spectacolelor:", err);
  } finally {
    await client.close();
  }
}

insertShows();