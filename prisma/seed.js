const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const newsData = [
  {
    title: "Współpraca z ZF Group",
    short_description:
      "Wraz z zakończeniem sezonu RT13e, nasza uwaga skupia się teraz na tym…",
    long_description:
      "Wraz z zakończeniem sezonu RT13e, nasza uwaga skupia się teraz na tym, co było kluczowe dla sukcesu naszego Zespołu. Chcielibyśmy się podzielić nie tylko wynikami, ale także kulisami tego, co sprawiło, że nasz bolid był tak konkurencyjny, czyli na naszych partnerach.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news24.png",
    content: [
      "Jednym z nich, jest ZF Group. Firma odegrała istotną rolę w osiągnięciu dobrych wyników, posiada 7 lokalizacji w Polsce i aż 168 na świecie, jest czołowym dostawcą produktów i oprogramowania między innymi dla samochodów osobowych. Ich codzienne działania nie tylko wpływają na poprawę bezpieczeństwa na drogach, lecz również przyczyniają się do redukcji zanieczyszczeń. ZF Group intensywnie rozwija innowacyjne rozwiązania z obszaru elektromobilności oraz jazdy autonomicznej, które stanowią przyszłość branży motoryzacyjnej. W naszym Zespole konsekwentnie przyjęliśmy podejście do rozwoju we wskazujcie obszarach, skupiając się na zdobywaniu umiejętności niezbędnych do pracy z pojazdami przyszłości.",
      "Przez ostatnie dwa lata intensywnie pracowaliśmy nad innowacyjnymi rozwiązaniami, mając na celu zdefiniowanie nowych standardów w dziedzinie automotive . ZF Group, wspierając nasz projekt, odegrał istotną rolę w umożliwieniu nam rozwijania zaawansowanych technologii na naszym bolidzie.",
      "Więcej informacji o firmie można znaleźć na ich stronie internetowej: https://www.zf.com/poland/pl/home/home.html",
    ],
  },
  {
    title: "Współpraca z Chem-Trend",
    short_description:
      "Do budowy bolidu potrzeba więcej niż tylko materiałów do wykonania elementów…",
    long_description:
      "Do budowy bolidu potrzeba więcej niż tylko materiałów do wykonania elementów. Tworząc zarówno pakiet aerodynamiczny, jak i główną strukturę nośną RT13e, korzystaliśmy ze specjalistycznych środków chemicznych. Mają one działanie między innymi czyszczące, wypełniające i rozdzielające. Są one niezbędne do poprawnego przygotowania powierzchni formy, na której następnie ułożone zostaną kolejne warstwy laminatu.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news23.png",
    content: [
      "Podczas tego procesu od lat korzystamy z niezawodnych materiałów od firmy Chem-Trend. Rozpoczyna się on od oczyszczenia ich powierzchni za pomocą środka czyszczącego Chemlease Mold Cleaner. Następnie przy użyciu preparatu przygotowujących i uszczelniających, między innymi Chemlease 15 Sealer, wypełniamy mikroszczeliny w formach i minimalizujemy ich porowatość. Ten etap ma za zadanie zabezpieczenie przed uszkodzeniami nie tylko fizycznymi, ale i chemicznymi. Jest on kluczowy dla jakości i wyglądu gotowego elementu. Na koniec, aby móc wyciągnąć laminat z formy, stosujemy środki antyadhezyjne, w tym Chemlease 41-90, tworzące warstwę rozdzielającą.",
      "Już po zakończeniu tego procesu, na gotową formę kładzione są warstwy włókna węglowego. Następnie trafiają one do autoklawu na wypał albo zostają przesycone żywicą w procesie infuzji.",
      "PWR Racing Team z bolidem RT13e startowało w międzynarodowych zawodach we Włoszech, na Węgrzech i w Niemczech. Dodatkowo wygrał polską edycję Formuły Student i tym samym potwierdził swoją pozycję najlepszego Zespołu w Polsce.",
    ],
  },
  {
    title: "Premiera RT13E",
    short_description:
      "Drugiego czerwca 2023 roku odbyła się Premiera naszego najnowszego projektu…",
    long_description:
      "Drugiego czerwca 2023 roku odbyła się Premiera naszego najnowszego projektu – bolidu elektrycznego z systemami jazdy autonomiczenej RT13e. Jest to dla naszego Zespołu bardzo ważne wydarzenie, które niezmienne od wielu lat jest przez nas organizowane. Bardzo cieszymy się, że zaproszeni goście pojawili się tak licznie.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news22.png",
    content: [
      "Oprócz prezentacji bolidu RT13e, Liderzy podsumowali pracę swoich Działów, a Lider Techniczny przedstawił całościowy koncept na nasz projekt. Lider Zespołu oraz Liderka Marketingu opowiedzieli o celach na ten sezon. Po oficjalnej części nasi goście mogli obejrzeć samochód z bliska i porozmawiać o jego szczegółach z konstruktorami.",
      "RT13e posiada innowacyjny pakiet aerodynamiczny z przednim skrzydłem o zmiennej geometrii i zmienionymi sekcjami bocznymi, co pozwala na lepszy balans auta oraz większą kontrolę przepływu powietrza, a także odpowiednie chłodzenie baterii i silników. Autorski projekt przekładni kierowniczej zwiększył zakres skrętu i poprawił zdolność bolidu do pokonywania ciasnych nawrotów. Ponadto udało się zredukować masę kolumny kierowniczej. Znacząco obniżono również masę pakietu baterii, który względem zeszłego sezonu jest aż o 15 kilogramów lżejszy. Pojazd posiada autorskie silniki elektryczne zamontowane bezpośrednio w kołach i wykonane przez członków Zespołu wiązki elektryczne wysokiego i niskiego napięcia.",
      "Tegoroczna Premiera była dla nas wyjątkowa, ponieważ dla wielu członków było to pierwsze takie wydarzenie. Jednym z większych wyzwań tego sezonu było zbudowanie Zespołu oraz zrekrutowanie studentów, którzy w bardzo krótkim czasie staną się konstruktorkami i konstruktorami bolidu klasy Formuła Student. Wyszkolenie ponad połowy naszej aktualnej drużyny było nie lada wyzwaniem.",
      "Już nie możemy doczekać się wyjazdu na zawody, które zbliżają się wielkimi krokami. W tym sezonie elektrycznie wystartujemy we Włoszech, Czechach oraz pierwszy raz w historii Formuły Student – Polsce. Natomiast na Hungaroringu wystartujemy w kategorii Driverless. Razem daje nam to dwa miesiące intensywnej pracy, która będzie idealnym zwieńczeniem sezonu. Trzymacie kciuki za nas i za RT13e, które już niedługo wyjedzie na zagraniczne tory!",
      "Zachęcamy do sprawdzenia fotorelacji z premiery w naszych mediach społecznościowych, jak również do obejrzenia transmisji dostępnej pod poniższym linkiem: https://www.youtube.com/live/QGfwrF2RVNg?feature=share&t=541",
    ],
  },
  {
    title: "Współpraca z Kaufland",
    short_description:
      "Bycie częścią Zespołu wyścigowego oznacza długie godziny spędzane w warsztacie…",
    long_description:
      "Bycie częścią Zespołu wyścigowego oznacza długie godziny spędzane w warsztacie bądź na pracy przed komputerem. W ciągu ostatniego roku w tych działaniach wspierała nas firma Kaufland, dzięki której nie zabrakło nam produktów niezbędnych do podtrzymania zespołowej energii.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news21.png",
    content: [
      "Kaufland towarzyszył nam w czasie najbardziej zaawansowanych międzynarodowych zawodów Formuły Student. Podczas 3 tygodniowego tournée po Europie, rywalizowaliśmy z innymi konstruktorami. W przerwach gotowaliśmy wspólne posiłki korzystając z produktów dostarczonych przez firmę. Razem byliśmy na zawodach w Niemczech, Chorwacji, jak również na Węgrzech uczestnicząc w zawodach: Formula Student Germany, Formula Student Alpe Adria oraz Formula Student EAST.",
      "Podczas najważniejszej części roku, jaką jest etap wykonawstwa, spędzaliśmy godziny na warsztacie wytwarzając części naszego bolidu. W trakcie przerw z chęcią sięgaliśmy po przekąski dostarczone przez firmę, a po całym dniu razem siadaliśmy do wspólnego grilla lub przygotowywaliśmy zespołowo nasze ulubione tosty.",
      "Kaufland wspiera nas również merytorycznie. Dzięki nim możemy odbywać szkolenia pogłębiające naszą wiedzę z zakresu managementu i komunikacji marketingowej, które implementujemy w naszych działaniach.",
    ],
  },
  {
    title: "Mitutoyo",
    short_description:
      "Nasz bolid składa się z wielu współpracujących ze sobą elementów…",
    long_description:
      "Nasz bolid składa się z wielu współpracujących ze sobą elementów. Aby było to możliwe niezbędna jest duża dokładność wykonania oraz odpowiednia kontrola jakości gotowych elementów. Zapewnia to trwałość i bezawaryjność stosowanych rozwiązań. Dzięki wsparciu firmy Mitutoyo mamy możliwość pracować z aparaturą metrologiczną na najwyższym poziomie.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news20.png",
    content: [
      "Przy pomocy takich urządzeń jak suwmiarki, śruby mikrometryczne, czujniki zegarowe czy też średnicówki. Pozwala to dokonywać bardzo dokładnych pomiarów wszelkich cech geometrycznych, jak i badać niezbędne tolerancje elementów. Dzięki zaawansowanym urządzeniom pomiarowym, które pozwalają na osiągnięcie dokładności pomiarowej na poziomie 0,001mm. Z tego powodu mamy pewność, że wszystkie elementy składowe naszego bolidu spełniają wymagania w zakresie wymiarów geometrycznych, tolerancji kształtu, kierunku czy położenia. Wypełnienie powyższych wymagań i tolerancji gwarantuje trwałą funkcjonalność współpracujących ze sobą elementów, dużą bezawaryjność naszych rozwiązań konstrukcyjnych. Firma Mitutoyo poza wsparciem w postaci przekazanych narzędzi pomiarowych, wspiera nasz projekt również merytorycznie. Jako specjaliści w swojej dziedzinie dzielą się z nami wiedzą i umiejętnościami z zakresu poprawnego wykonywania pomiarów oraz kalibracji urządzeń. Dzięki firmie Mitutoyo zdajemy sobie sprawę jak istotna w konstrukcji bolidów wyścigowych jest metrologia oraz szczegółowa kontrola jakości każdego z komponentów, co pozwala na tworzenie z roku na rok coraz lepszych i bardziej niezawodnych pojazdów.",
    ],
  },
  {
    title: "Nowy bolid RT12E",
    short_description:
      "Jesteśmy niesamowicie szczęśliwi, że w piątek 10 czerwca, dokładnie rok po premierze RT11…",
    long_description:
      "Jesteśmy niesamowicie szczęśliwi, że w piątek 10 czerwca, dokładnie rok po premierze RT11, mogliśmy zaprezentować przed Wami nasz kolejny bolid. Premiera to zawsze ogromne wydarzenie dla naszego Zespołu, dlatego niezmiernie się cieszymy, że zaproszeni goście i nasi bliscy przybyli tak licznie na to wydarzenie.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news19.png",
    content: [
      "Oprócz odsłonięcia RT12e nie zabrakło podsumowania pracy całego Zespołu, a także przemówień zaproszonych gości. Podziękowaliśmy firmom i instytucjom wspierającym nasz projekt. Po oficjalnej części była okazja do obejrzenia pojazdu z bliska i porozmawiania z naszymi konstruktorami oraz dopytania się o szczegóły najnowszego projektu.",
      "Tegoroczna premiera była wyjątkowa, zaprezentowaliśmy pierwszy w historii Zespołu bolid elektryczny, wyposażony w system jazdy autonomicznej. Konstrukcja RT12e była dla nas nie lada wyzwaniem. Podczas gdy większość Zespołów decyduje się najpierw na przejście na napęd elektryczny lub na systemy jazdy autonomicznej, my postanowiliśmy zrobić to podczas jednego sezonu. Po 11 latach budowania pojazdów spalinowych otwieramy nowy rozdział w historii PWR Racing Team. Przejście na bolid elektryczny i autonomiczny, wiąże się nie tylko ze zmianami w konstrukcji i wyglądzie samochodu, ale również z reorganizacją całej struktury i sposobu pracy Zespołu.",
      "Nie możemy się doczekać, kiedy wystartujemy na zawodach RT12e. W tym roku będziemy rywalizować w 4 edycjach zawodów Formula Student m.in. na słynnym Hungaroringu czy Hockenheimringu. Zaczynamy już za miesiąc od zawodów w Czechach gdzie wystartujemy w klasie electric. Sierpień będzie dla nas bardzo pracowitym miesiącem, bo pojawimy się aż na 3 edycjach zawodów w Niemczech, Chorwacji i Węgrzech. Oprócz klasy electric weźmiemy też udział w konkurencjach driverless.",
    ],
  },
  {
    title: "Laminowanie RT12E",
    short_description:
      "W tym okresie w naszym warsztacie jest bardzo tłoczno, ciężko pracujemy…",
    long_description:
      "W tym okresie w naszym warsztacie jest bardzo tłoczno, ciężko pracujemy, aby na czas przygotować bolid RT12e. Nasze konstruktorki i konstruktorzy dbają, aby wykonywane przez nich części były na jak najwyższym poziomie, by podczas zawodów sprostały bardzo rozbudowanym wymagania regulaminowym.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news18.png",
    content: [
      "W procesie laminacji elementów korzystamy z wysokiej jakości preparatów, które zapewnia nam firma Chem-Trend Polska. Stosujemy je podczas naszej codziennej pracy przy czyszczeniu form, ich przygotowania, a później rozformowywaniu. W tym sezonie używamy:",
      "Chemlease® Mold Cleaner EZ – do oczyszczenia i przygotowania powierzchni form",
      "Chemlease® Sealer 15 EZ – do przygotowania form przed nałożeniem rozdzielacza i zmniejszenia porowatości formy",
      "Chemlease® 41-90 EZ – jako rozdzielacza pozwalającego na wykonanie wielu odformowań.",
    ],
  },
  {
    title: "11 Zespół na Świecie",
    short_description:
      "Kilka dni temu został zaktualizowany światowy ranking wszystkich drużyn…",
    long_description:
      "Kilka dni temu został zaktualizowany światowy ranking wszystkich drużyn, biorących udział w rywalizacji w ramach Formuły Student. Czekaliśmy na niego z niecierpliwością, ponieważ po świetnym sezonie liczyliśmy na zajęcie dobrego miejsca. Co wynika z najnowszego zestawienia?",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news17.png",
    content: [
      "W ogólnym rankingu dla klasy Combustion zajmujemy 30. miejsce na 612 sklasyfikowanych zespołów i 1. wśród polskich drużyn. Zestawienie to obejmuje nie tylko obecne sukcesy, ale także te z poprzednich sezonów.",
      "W 2021 w zawodach rozegranych na całym świecie wzięło udział 135 zespołów. W tym zestawieniu zajęliśmy 11. miejsce! Jest to dla nas niesamowity wynik. Nasz bolid RT11 jest 11. najlepszym bolidem na świecie w tym roku! To ogromne osiągnięcie, z którego jesteśmy niezwykle dumni. Nasza wielogodzinna praca, setki godzin spędzonych w warsztacie i na torze przełożyły się na międzynarodowy sukces, którego częścią są także nasi Sponsorzy i Politechnika Wrocławska. Bez ich wsparcia nie moglibyśmy zbudować tak zaawansowanego bolidu, który nie tylko rywalizuje ze światową czołówką, ale zalicza się do tego grona. Dziękujemy.",
    ],
  },
  {
    title: "Wolften - Lider branży stopów specjalnych",
    short_description:
      "Układ wydechowy to jeden z najważniejszych elementów naszego bolidu RT11…",
    long_description:
      "Układ wydechowy to jeden z najważniejszych elementów naszego bolidu RT11. Musi być wytrzymały, lekki, a przy tym spełniać rygorystyczne wymagania stawiane przez organizatorów zawodów Formula Student. Dlatego zdecydowaliśmy się wykonać go z tytanu, dostarczanego przez firmę Wolften – lidera w branży stopów specjalnych.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news16.png",
    content: [
      "Prace rozpoczęły się od zaprojektowania kolektora wydechowego o odpowiednich parametrach, a następnie jego wykonania. Otrzymane rury tytanowe o średnicach 38, 42 i 51 mm i grubościach ścianek 1,2 – 1,65 mm zostały pocięte na 350 małych elementów, których masę dodatkowo zredukowaliśmy staczając na tokarce ich średnicę zewnętrzną. Dzięki temu otrzymaliśmy jeszcze cieńszą (i lżejszą) ściankę.",
      "Spawanie poszczególnych elementów odbyło się metodą TIG w atmosferze ochronnej argonu, co było niezbędne, by uniknąć utleniania się tytanu. Początkowo, z 10-cio stopniowych pierścieni, zespawaliśmy kolanka, a następnie przyłączaliśmy do nich kolejne małe elementy w odpowiednim kształcie. Finalnie, nasz kolektor wydechowy powstał z około 220 małych elementów! Cały proces spawania zajął nam aż 730 godzin, ponieważ był bardzo szczegółowy i wymagał ogromnej precyzji.",
      "Kolektor zamocowaliśmy do bloku silnika za pomocą flanszy, która także została wykonana z tytanu. Podobnie jak elementy tłumika.",
      "Ze wsparcia Wolftenu skorzystał także dział Suspension, który wykorzystał materiał do wytworzenia autorskich szpilek i nakrętek, które łączą koło z piastą. Takie rozwiązanie pozwoliło na uzyskanie odpowiednich właściwości mechanicznych, a przy tym prezentuje się niezwykle efektownie.",
    ],
  },
  {
    title: "Współpraca z Radiotechnika Marketing",
    short_description:
      "Elektronika odgrywa kluczową rolę w bolidzie RT11. Sieć ponad 100 czujników…",
    long_description:
      "Elektronika odgrywa kluczową rolę w bolidzie RT11. Sieć ponad 100 czujników pozwala na bieżąco sprawdzać parametry jazdy bolidu, a także kontrolować stan poszczególnych części. Dzięki zdalnej telemetrii informacje trafiają prosto do naszych inżynierów, a my możemy od razu reagować na zmiany, jeszcze zanim bolid zjedzie z toru.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news15.png",
    content: [
      "Bezprzewodowe połączenie z kierownicą pozwala nam także na komunikację z kierowcą poprzez wyświetlanie komunikatów na jej ekranie. Dzięki temu możemy w pełni wykorzystać potencjał bolidu i przystosować sposób jazdy do warunków panujących na torze w danej chwili.",
      "Wszystkie te rozwiązania musiały jednak zostać sprawdzone pod kątem niezawodności. Dlatego zanim wyruszyliśmy na pierwsze zawody, wykonaliśmy szereg badań w komorze bezodbiciowej, znajdującej się w firmie Radiotechnika Marketing. Pracujący tam eksperci z dziedziny analizy sygnałów wraz z konstruktorami przeprowadzili szereg badań z zakresu wytrzymałości mechanicznej kierownicy oraz kompatybilności elektromagnetycznej bolidu. Szczególnie te ostatnie były dla nas kluczowe, ponieważ stanowią bazę pod nasz pierwszy elektryczny bolid, a weryfikacja działania poszczególnych elementów to podstawa dobrze działającego pojazdu.",
      "Jeszcze raz dziękujemy Radiotechnice Marketing za pomoc i ogromne wsparcie, które dostajemy od firmy.",
    ],
  },
  {
    title: "Centrum przyczep",
    short_description:
      "Mijający sezon był rekordowym pod względem testowania naszego bolidu RT11…",
    long_description:
      "Mijający sezon był rekordowym pod względem testowania naszego bolidu RT11. Odbyliśmy kilkanaście sesji treningowych na torze wyścigowym Krzywa. Żadne z nich nie mogłyby się jednak odbyć, gdyby nie przyczepka, którą otrzymaliśmy od Centrum Przyczep Wrocław Psary.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news14.png",
    content: [
      "Idealnie dopasowana do naszego pojazdu, pozwala na bezpieczne przetransportowanie go na tor. Upraszcza nam to logistykę takich wyjazdów, a nasi członkowie mogą skupić się na odpowiednim ustawieniu bolidu.",
      "Przyczepa jest już z nami od kilku sezonów i nie wyobrażamy sobie bez niej naszego zespołu. Mamy nadzieję, że już wkrótce ponownie pojedzie z nami na kolejne testy lub wydarzenia, w których aktywnie bierzemy udział.",
    ],
  },
  {
    title: "Testy otwarte",
    short_description:
      "We wtorek, 28. września, na torze wyścigowym Krzywa odbyły się pierwsze w historii zespołu Testy Otwarte…",
    long_description:
      "We wtorek, 28. września, na torze wyścigowym Krzywa odbyły się pierwsze w historii zespołu Testy Otwarte. Była to okazja do zaprezentowania szerszej publiczności tego, co potrafi nasz bolid. Wśród zaproszonych gości byli przedstawiciele Politechniki Wrocławskiej, Sponsorzy, media oraz wszyscy Ci, którzy tak jak my, interesują się motoryzacją.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news13.png",
    content: [
      "Główną atrakcją była oczywiście pokazowa jazda RT11 na torze. Chcieliśmy przybliżyć Wam, jak wyglądają zawody, dlatego nasi kierowcy przejechali trzy z czterech konkurencji dynamicznych – Skid Pad, Acceleration oraz Autocrossa. Zaprezentowaliśmy także, jak wygląda serwis auta oraz przygotowanie go do każdej z konkurencji. Była to także świetna okazja do rozmowy z naszymi kierowcami o odczuciach związanych z jazdą takim pojazdem.",
      "Mamy nadzieję, że już niedługo będziemy mogli powtórzyć testy, a teraz zapraszamy do obejrzenia relacji z tego wydarzenia.",
    ],
  },
  {
    title: "Formula Student East i Germany",
    short_description:
      "Po bardzo krótkim odpoczynku i szybkim serwisie bolidu znowu wyruszyliśmy na kolejne zawody…",
    long_description:
      "Po bardzo krótkim odpoczynku i szybkim serwisie bolidu znowu wyruszyliśmy na kolejne zawody. Tym razem były to Formula Student EAST na legendarnym Hungaroringu na Węgrzech, a zaraz po nich Formula Student Germany na torze Hockenheimring. Obie edycje należały do zdecydowanie najtrudniejszych w sezonie, a udział w nich brała sama europejska czołówka.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news12.png",
    content: [
      "Zawody na Węgrzech były dla nas szczególnie wyjątkowe, ponieważ jako jedyne w tym sezonie, odbywały się całkowicie stacjonarnie, a my mogliśmy zabrać ze sobą ponad 30 członków drużyny. Dzięki temu mniej doświadczeni koledzy z zespołu mogli nabrać cennego doświadczenia, a nowi kierowcy wystartować po raz pierwszy w rywalizacji. Dlatego tym bardziej cieszy nas 5. miejsce w klasyfikacji generalnej podczas tych zawodów! Kolejny raz udowodniliśmy, że należymy do grona najlepszych.",
      "Prosto z Węgier, zahaczając jedynie o Wrocław, udaliśmy się na FS Germany. Kolejne zawody i kolejne potwierdzenie tego, jak dobrze zbudowany jest tegoroczny bolid. Świadczy o tym zdobyte 3. miejsce w Skid Padzie. Przy tak wyrównanym poziomie o miejscach w poszczególnych konkurencjach decydowały niuanse. Nie sposób także wyeliminować drobnych problemów, głównie technicznych. Ostatecznie zajęliśmy bardzo wysokie, 10. miejsce, tym samym powtarzając swój sukces sprzed lat. W porównaniu do innych edycji pozycja może wydawać się odległa, jednak na tak wymagających zawodach, jest to świetny wynik.",
      "A tutaj szczegółowa klasyfikacja:",
      "FS EAST",
      "OVERALL – 5.miejsce",
      "Skid Pad – 4.miejsce",
      "Endurance – 5.miejsce",
      "Acceleration – 7.miejsce",
      "Efficiency – 7.miejsce",
      "Design Engineering – 7.miejsce",
      "Autocross – 9.miejsce",
      "Cost and Manufacturing – 14.miejsce",
      "Business Presentation – 22.miejsce",
      "FS Germany",
      "10. miejsce – klasyfikacja generalna",
      "3. miejsce – Skid Pad",
      "10.miejsce – Acceleration",
      "10. miejsce – Endurance and Efficiency",
      "10. miejsce – Engineering Design",
      "12. miejsce – Business Plan Presentation",
      "15. miejsce – Cost and Manufacturing",
      "15. miejsce – Autocross",
    ],
  },
  {
    title: "Podium na Formula Student Czech Republic",
    short_description:
      "To były nasze zawody! Zdobyliśmy 5 miejsc na podium, w tym to najważniejsze…",
    long_description:
      "To były nasze zawody! Zdobyliśmy 5 miejsc na podium, w tym to najważniejsze – 3. miejsce w klasyfikacji generalnej tegorocznej edycji. Do czeskiego Mostu jechaliśmy zdeterminowani, by podtrzymać szczęśliwą passę, bo to właśnie na tej edycji zdobywamy podia nieprzerwanie od 2017 roku.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news11.png",
    content: [
      "Tym razem, w odróżnieniu od zawodów w Niderlandach, mogliśmy także zabrać aż 20 osób, dzięki czemu praca przy bolidzie szła nam dużo sprawniej, a sukces mogliśmy świętować w większym gronie. A ich było sporo, bo już pierwszego dnia konkurencji dynamicznych zdobyliśmy dwa podia – brąz w Skid Padzie oraz Acceleration. W Autocrossie czas przejazdu uplasował nas na podium, ale nasi kierowcy zgarnęli po drodze kilka pachołków, co ostatecznie zdecydowało o obniżeniu pozycji. Mimo to warto było zaryzykować, ponieważ dzięki tak szybkiej jeździe zameldowaliśmy się w finale Endurance – najbardziej wymagającej konkurencji na zawodach. Przejechaliśmy ją rewelacyjnie i zajęliśmy 2. miejsce. Dorzucając jeszcze srebro w konkurencji statycznej – Design Engineering, ostatecznie zajęliśmy 3. miejsce w klasyfikacji generalnej.",
      "3 miejsce w klasyfikacji generalnej",
      "2 miejsce w Engineering Design",
      "2 miejsce w Endurance",
      "3 miejsce w Acceleration",
      "3 miejsce w Skid Padzie",
      "4 miejsce w Efficiency",
      "6 miejsce w Autocrossie (patrząc na sam czas przejazdów, byliśmy w pierwszej trójce, ale po drodzę zgarnęliśmy parę pachołków)",
      "8 miejsce w Business Plan Presentation",
      "9 miejsce w Cost and Manufacturing",
    ],
  },
  {
    title: "Formula Student Netherlands",
    short_description:
      "Pierwsze zawody po ponad rocznej przerwie i pierwsze w historii zespołu w Niderlandach…",
    long_description:
      "Pierwsze zawody po ponad rocznej przerwie i pierwsze w historii zespołu w Niderlandach! Pomimo wielu obostrzeń (ograniczenie liczby członków zespołu do kilkunastu osób, konkurencje statyczne rozgrywane online) nie mogliśmy się ich już doczekać. Mieliśmy 5 dni na udowodnienie, ile wart jest nasz bolid.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news10.png",
    content: [
      "Na początku inspekcja techniczna, podczas której sprawdzana była m.in. skuteczność układu hamulcowego czy głośność pojazdu. Ta poszła nam bez większych problemów i gdy inne zespoły wciąż się z nią zmagały, my przygotowywaliśmy się już do pierwszej konkurencji dynamicznej – Skid Pada, czyli jeździe po “ósemce”. W międzyczasie odbyły się finały Business Plan Presentation, gdzie nasi menedżerowie bronili przed sędziami pomysłu biznesowego.",
      "Kolejne dni były już przeznaczone tylko na jazdę po torze – ponownie podeszliśmy do konkurencji Skid Pad, poprawiając nasz i tak już bardzo dobry czas przejazdu. Potem Acceleration, czyli konkurencja, w której sprawdzane jest przyspieszenie samochodu.",
      "Następnie Autocross – jazda po torze z elementami slalomu i zakrętami. Jednocześnie wyniki z tej konkurencji wpływają kolejność na przejazdu w Endurance and Efficiency – nieprzerwanej jeździe przez 22 km, z przerwą na zmianę kierowcy.",
      "Właśnie ta ostatnia konkurencja mocno wpływa na wyniki – stanowi prawie połowę punktów w rywalizacji. Czasy poszczególnych okrążeń plasowały nas w czołówce. Niestety, w czasie jazdy pachołek zahaczył o urządzenie do mierzenia czasu, co spowodowało jego odczepienie się od bolidu. Decyzją sędziów zostaliśmy zdyskwalifikowani w tej konkurencji.",
      "Nieukończenie przejazdu kosztowało nas utratę prawie połowy punktów. Wszystkie pozostałe konkurencje poszły nam jednak na tyle dobrze, że zawody zakończyliśmy na 10. miejscu. Przede wszystkim te zawody pokazały nam, że nasze auto jest gotowe do rywalizacji z najlepszymi drużynami.",
      "Potwierdzają to zdobyte nagrody i pozycje:",
      "1. miejsce w Skid Padzie",
      "3. miejsce w Business Plan Presentation",
      "4. miejsce w Acceleration",
      "4. miejsce w Autocrossie",
      "6. miejsce w Cost and Manufacturing",
      "8. miejsce w Engineering Design",
      "Teraz chwila odpoczynku, przygotowanie bolidu i 26. lipca rozpoczynamy rywalizację w Formula Student Czech Republic.",
    ],
  },

  {
    title: "Premiera bolidu RT11",
    short_description:
      "10. czerwca w Centrum TMT Moto Group w Świdnicy odbyła się oficjalna premiera bolidu RT11…",
    long_description:
      "10. czerwca w Centrum TMT Moto Group w Świdnicy odbyła się oficjalna premiera bolidu RT11. Na ten moment czekaliśmy prawie dwa lata! Ze względu na obostrzenia pandemiczne, wydarzenie przybrało formę hybrydową – o 12:00 odbyła się premiera stacjonarna z udziałem zaproszonych gości.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news9.png",
    content: [
      "W części oficjalnej przedstawiliśmy, jak wyglądała nasza praca podczas pandemii. Nie zabrakło także miejsca na przemówienia zaproszonych osób. Kiedy nadszedł ten najważniejszy moment – odsłonięcie naszego bolidu – sami byliśmy pod wrażeniem. Nieskromnie musimy przyznać, że RT11 prezentuje się przepięknie! Po wspólnym zdjęciu nadszedł czas na bardziej nieoficjalną część – dokładne obejrzenie pojazdu, pytania techniczne o poszczególne części, a także o nasze plany na ten sezon. Cieszymy się, że po długiej przerwie mogliśmy znowu spotkać się na żywo z naszymi Gośćmi i zaprezentować owoc pracy całego zespołu.",
      "Kilka godzin później za pośrednictwem naszych mediów społecznościowych udostępniliśmy nagranie, przygotowane specjalnie na tę okazję. Dzięki temu z naszą premierą dotarliśmy do szerokiego grona odbiorców.",
    ],
  },
  {
    title: "Laminowanie",
    short_description:
      "Elementy kompozytowe stanowią ważną część każdego bolidu…",
    long_description:
      "Elementy kompozytowe stanowią ważną część każdego bolidu. Są one od podstaw projektowane przez naszych konstruktorów, a następnie laminowane przy użyciu specjalnych form. Dzięki temu posiadają odpowiednie parametry, spełniające rygorystyczne wymagania regulaminu zawodów.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news8.png",
    content: [
      "W osiągnięciu najlepszej jakości powierzchni laminatów wspiera nas firma Chem-Trend Polska – lider w produkcji środków rozdzielających i preparatów czyszczących do pracy z kompozytami.",
      "W naszym warsztacie produkty tej firmy znajdują szereg zastosowań. Pozwalają na dokładnie wyczyszczenie powierzchni form, zmniejszenie chropowatości oraz utworzenie powłoki, która zapobiega przywieraniu wytwarzanych elementów. Dzięki nim możemy perfekcyjnie przygotować formy do laminowania elementów kompozytowych, zapewniając świetną jakość powierzchni oraz wysoką trwałość. Jest to dla nas szczególnie ważne, zwłaszcza w fazie wykonawstwa, ponieważ przy napiętym grafiku podczas budowy bolidu nie możemy pozwolić sobie na niepotrzebne problemy lub opóźnienia.",
      "Te produkty dają nam pewność, że nasze części zawsze zostaną wytworzone zgodnie z przyjętymi założeniami i będą idealnie prezentować się w bolidzie.",
      "W procesie laminowania wykorzystujemy 3 produkty firmy Chem-Trend Polska:",
      "1. Chemlease® Mold Cleaner EZ – do oczyszczenia i przygotowania powierzchni form",
      "2. Chemlease® Sealer 15 EZ – do przygotowania form przed nałożeniem rozdzielacza i zmniejszenia porowatości formy",
      "3. Chemlease® 41-90 EZ – jako rozdzielacza pozwalającego na wykonanie wielu odformowań.",
    ],
  },
  {
    title: "Projekt Nanofix",
    short_description:
      "Kilkukrotnie wspominaliśmy już, że jesteśmy partnerem testowym projektu NANOFIX…",
    long_description:
      "Kilkukrotnie wspominaliśmy już, że jesteśmy partnerem testowym projektu NANOFIX, będącego owocem współpracy UNIPRESS – Instytut Wysokich Ciśnień PAN oraz INTER-METAL RADOM, w ramach którego realizowane są prace rozwojowe związane z nowatorskim procesem wyciskania hydrostatycznego.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news7.png",
    content: [
      "Dzięki specjalnej, prototypowej konstrukcji pras z komorą z cieczą o dużej gęstości, odpowiednio dobrany pręt metalowy jest umacniany poprzez deformację plastyczną na skutek wyciskania go dzięki równomiernie rozłożonemu ciśnieniu przez matrycę i kanał kątowy. Efektem tego działania jest podniesienie własności mechanicznych materiału wyjściowego o ponad 150%!",
    ],
  },
  {
    title: "Szkolenie w Cognifide",
    short_description:
      "Firma Cognifide to zespół 400 osób, tworzących zaawansowane technologicznie platformy internetowe…",
    long_description:
      "Jak efektywnie zarządzać projektem? Jak skutecznie eliminować problemy? Jak zoptymalizować pracę w zespole? Wszelkie nasze wątpliwości zostały rozwiane!",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news6.png",
    content: [
      "Firma Cognifide to zespół 400 osób, tworzących zaawansowane technologicznie platformy internetowe, dla marek takich jak Ford, czy Shell. Kilka tygodni temu, w Poznaniu zostało zorganizowane specjalne szkolenie, dedykowane dla liderów PWR Racing Team. To wydarzenie wzbogaciło nas o dodatkową wiedzę, na temat skutecznych i oryginalnie opracowanych technik zarządzania projektami. Zorganizowana komunikacja, kreatywne rozwiązania oraz skuteczne metody zarządzania, to podstawy działania każdego zespołu. Wiedzę w zakresie właśnie tych tematów, udało nam się zdobyć 13. grudnia.",
      "Profesjonalne podejście, wsparcie oraz szeroko pojęta wiedza ekspertów z Cognifide, pozwoliła usprawnić strukturę działania naszego zespołu. Dziękujemy za wsparcie oraz inicjatywę wydarzenia. Ogromnie zmotywowało na to do jeszcze większej pracy.",
      "Jesteśmy po to, by wygrywać. Dzięki Wam jest to możliwe!",
    ],
  },
  {
    title: "Sponsor Event 2019",
    short_description:
      "Sponsor Event to szczególne wydarzenie dla całego zespołu PWR Racing Team…",
    long_description:
      "Sponsor Event to szczególne wydarzenie dla całego zespołu PWR Racing Team. Jest to okazja do okazania wdzięczności każdemu, kto pomógł nam, młodym inżynierom w spełnianiu marzeń.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news5.png",
    content: [
      "W tym roku program wydarzenia był jeszcze bardziej rozbudowany. Poza naszymi wspaniałymi bolidami RT09 i RTX przygotowaliśmy stanowiska odpowiadające dwóm konkurencjom Formuły Student: Cost and Manufacturing i Engineering Design.",
      "Na każdego z przybyłych czekało personalne podziękowanie, wręczane po zakończeniu profesjonalnej prezentacji. Ta zawierała premierę naszego najnowszego filmu. Kiedy część oficjalna dobiegła końca, cały zespół był do dyspozycji gości. Wszyscy chętnie, z uśmiechem na twarzy opowiadali o szczegółach naszej działalności, swojej roli w zespole i planach na przyszłość.",
      "Jesteśmy szczęśliwi, że udało nam się sprostać oczekiwaniom gości, co potwierdza ogrom dobrych słów, jakie dostaliśmy następnego dnia.",
    ],
  },
  {
    title: "Finał Konkursu 3MIND",
    short_description:
      "Wciąż nie możemy ochłonąć po tym, co wydarzyło się w piątek, 29 października…",
    long_description:
      "Wciąż nie możemy ochłonąć po tym, co wydarzyło się w piątek, 29 października. Był to dzień, w którym odbył się finał konkursu 3Mind. Pełni nadziei i z uśmiechem na twarzy dojechaliśmy na miejsce. W krótkim czasie rozłożyliśmy nasze stoisko.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news4.png",
    content: [
      "Kiedy nadeszła nasza kolej, wzięliśmy głęboki wdech i rozpoczęliśmy prezentację naszego zespołu. Mimo lekkiego stresu wszystko przebiegło po naszej myśli. Następną konkurencją był speed dating z sędziami. Dopiero teraz mogli zobaczyć, jak bardzo jesteśmy oddani ideom PWR Racing Team. Każdy z nas odpowiadał pewnie i rzeczowo. Opowiadanie o projekcie, nad którym pracowaliśmy cały rok, jest dla nas rzeczą prostą i przyjemną. Po zakończeniu tego etapu czekał nas pyszny obiad, seria inspirujących wykładów oraz panel dyskusyjny.",
      "Wreszcie nastał moment ogłoszenia wyników. Serca biły nam jak oszalałe. Nagle do naszych uszu dotarły słowa “PWR Racing Team…”. Tak, udało się! Cudowne trzecie miejsce stało się rzeczywistością. Ciężka praca włożona w przygotowania, oszałamiająca współpraca z naszymi fanami, w poprzednim etapie konkursu i wreszcie miłość do motorsportu zagwarantowały nam miejsce na podium.",
      "KN Robocik, także z Politechniki Wrocławskiej, zajął pierwsze miejsce. Nasza wspaniała uczelnia udowodniła, że jest miejscem, które kształtuje najznamienitsze młode umysły.",
    ],
  },
  {
    title: "FS Symposium 2019",
    short_description:
      "Mieliśmy okazję uczestniczyć w Formula Student Symposium, które odbyło się w dniach…",
    long_description:
      "Mieliśmy okazję uczestniczyć w Formula Student Symposium, które odbyło się w dniach 22-24 listopada 2019 roku w miejscowości Győr na Węgrzech. Rzadko kiedy mamy okazję uczestniczyć w wydarzeniach niosących za sobą tak wiele merytorycznych treści. Praktyki i seminaria były prowadzone przez największe sławy świata Formuły Student.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news3.png",
    content: [
      "Zostaliśmy obdarowani niesamowitą ilością wiedzy, umiejętności oraz nasze spojrzenie na wiele problemów uległo znacznej zmianie. Dzięki temu wiemy, jak udoskonalić nasz najnowszy projekt, czyli RT11. Już teraz możemy powiedzieć, iż nie zostawimy konkurencji nawet cienia wątpliwości, kto w tym sezonie będzie królował na podium.",
      "Każdą wolną chwilę poświęcaliśmy na rozmowę z członkami innych drużyn. Mimo zaciętej walki na światowych torach, prywatnie dalej jesteśmy pogodnymi studentami. Żartujemy, bawimy się i pragniemy zawierać nowe znajomości. Nasze dyskusje często schodziły na tematy projektów, rozwiązań technicznych i tym podobnych. Świetnie jest wykorzystać sposobność, kiedy otaczają nas ludzie bezgranicznie oddani tej samej pasji, co my.",
      "Jesteśmy zachwyceni, że w świecie Formuły Student powstają tak wspaniałe inicjatywy. Pomimo ogromnej intensywności całego wydarzenia, wyjechaliśmy z Győr uśmiechnięci i pełni zapału do dalszej pracy.",
    ],
  },
  {
    title: "Warsaw Motor Show 2019",
    short_description:
      "Warsaw Motor Show na długo utkwi nam w pamięci. Jak go zapamiętamy?",
    long_description:
      "Warsaw Motor Show na długo utkwi nam w pamięci. Jak go zapamiętamy? Na pewno jako świetnie zorganizowane wydarzenie pełne ludzi, którzy swoją pasję traktują bardzo poważnie i są dla niej poświęcić bardzo wiele.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news2.png",
    content: [
      "Kiedy dwie osoby mające podobne spojrzenie na świat spotykają się w jednym miejscu, to mogą oni rozmawiać godzinami, nie czując upływu czasu. Tak właśnie czuliśmy się dyskutując z kolejnymi gośćmi naszego stoiska, a było ich bardzo wiele. To wspaniałe, gdy nasz projekt zdobywa uznanie w środowisku motoryzacyjnym. Usłyszeliśmy ogrom miłych i życzliwych słów, za które serdecznie dziękujemy.",
      "Oczywiście wielką stratą byłoby, gdybyśmy sami nie pozwiedzali, chociażby części targów. Odwiedziliśmy Śniadanie&Gablota, gdzie mieliśmy okazję podziwiać genialną premierę, nasze oczy nie mogły nacieszyć się widokiem, które zobaczyły. Udało nam się znaleźć chwilę na rozmowę z osobami odpowiedzialnymi za Projekt 86 Drift Team. Moi drodzy, robicie świetną robotę, trzymamy kciuki za wasz dalszy rozwój.",
      "Pragniemy pozdrowić naszych współtowarzyszy: PRz Racing Team / Formuła Student Politechniki Rzeszowskiej, Proton Dynamic, WUT Racing, PUT Motorsport. Przyczepności na torze. Do zobaczenia!",
    ],
  },
  {
    title: "Rekrutacja 2019",
    short_description:
      "14 października 2019 roku rozpoczęliśmy werbunek do jednego z najlepszych kół naukowych w Polsce…",
    long_description:
      "14 października 2019 roku rozpoczęliśmy werbunek do jednego z najlepszych kół naukowych w Polsce. Przed studentami wrocławskich uczelni otworzyła się niepowtarzalna okazja dołączenia jednego z siedmiu działów PWR Racing Team. Wpierw, około dwustu śmiałków musiało sprostać czterem etapom rekrutacji.",
    length_time: 5,
    logo: "/images/logo-czarne.svg",
    main_image: "/images/news/news1.png",
    content: [
      "Pierwszym było wypełnienie formularza, gdzie musieli pokazać, jak bardzo zależy im, żeby zasilić nasze szeregi. Dla tych, którzy dostali się dalej czekało zadanie, mające zweryfikować ich podstawowe zdolności potrzebne do sprawnego rozpoczęcia przygody w poszczególnych działach. Jeśli kandydat wykazał odpowiednie kompetencje, dostał zaproszenie na zadanie grupowe. Podczas trwania trzeciego etapu chcieliśmy sprawdzić, jak przyszły członek drużyny poradzi sobie z pokonywaniem problemów, będąc pod presją czasową oraz musząc współpracować z nowo poznanymi osobami. Na koniec chętny musiał pomyślnie przejść rozmowę kwalifikacyjną.",
      "Brzmi bardzo ciężko i męcząco? Nie dla tych, którzy naprawdę pragną zostać członkiem PWR Racing Team. Dzięki tej rekrutacji ponad trzydzieści nowych członków zasiliło nasze szeregi. Jest to bardzo duża liczba, a tym samym wiele wiedzy do przekazania. Na szczęście młodzi adepci chłoną wiedzę bardzo szybko i przekonaliśmy się, że można na nich polegać.",
    ],
  },
];

async function main() {
  for (const news of newsData.reverse()) {
    await prisma.news.create({
      data: {
        title: news.title,
        short_description: news.short_description,
        long_description: news.long_description,
        length_time: news.length_time,
        logo: news.logo,
        main_image: news.main_image,
        content: news.content.map((text) => ({ text })),
      },
    });
  }

  console.log(`Added news.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
