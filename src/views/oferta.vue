<template>
  <div>
      <Navbar />
      <div class="oferta">
    <div class="oferta-container">
        <b-row>
            <b-col>
                <h1>
                   <i class="mdi mdi-file-eye"></i> {{ $t('oferta') }}
                </h1>
                <h5 style="text-transform:uppercase"> {{ $t('usercontract') }} </h5>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col>
                <div v-if="lang == 'ru'" class="oferta-card" style="padding-left:20px;padding-right:20px">
                    <!-- <h6> I. Lorem Ipsum </h6> -->
                   <p>1. Условия использования веб-сайта, включая регистрацию, связанные с этим вопросы изложены в настоящих правилах. Каждый пользователь Сайта обязан ознакомиться с содержанием правил.
</p><p>2. Для полноценного использования веб-сайта  необходимо устройство, подключенное к Интернету и должно соответствовать следующим требованиям:
</p> - a. Непрерывное подключение к Интернету, которое обеспечивает двустороннюю связь по протоколу HTTPS;
<br> - б. Правильно установленный и настроенный веб-браузер последней версии, способный использовать стандарт HTML5 и каскадные таблицы стилей (CSS3), например, Google Chrome, Mozilla Firefox, Opera, Microsoft Edge, Internet Explorer.
<br> - d. В приложении включены JavaScript и файлы cookie (обычно в браузерах они включаются автоматически). <br><br>
<p>3. Совершеннолетние граждане мужского или женского пола могут быть пользователями в качестве усыновителей.</p>
 - за исключением следующих лиц:
<br> - лица, лишенные родительских прав или ограниченные в родительских правах;
<br> - лица, признанные недееспособные  или ограниченные к обращению  по состоянию здоровья  в установленном законом порядке;
<br> - Лица состоящие на учете в психоневрологическом и нарко диспансере;
<br><br>бывшие усыновители  которые не добросовестно исполняли свой родительский долг подвергали жестокому  обращению детей, а также зафиксированные случаи   хронического пьянства , наркомании, по данным причинам усыновление было отменено.;
<br><br>тех, кто был  ранее судим за умышленное преступление.
<br><br>Пользователю  будет отказано в регистрации как потенциального усыновителя, автоматически на принятие атомарным способом в случае одной из следующих ситуаций.
<br><br>В данном случаи, информация  в третьем, четвертом и шестом, абзацах этого пункта, будет взята  из базы данных Верховного Суда Республики;
<br><br>дела в пятом абзаце взяты из базы данных Министерства внутренних дел;
<br><br>информация, описанная в седьмом абзаце, будет  получена путем интеграции из базы данных Министерства здравоохранения.<br><br>
<p>4. Усыновление детей, являющихся гражданами Республики Узбекистан, осуществляется гражданами стран, имеющих собственное дипломатическое представительство в Республике Узбекистан.
</p>Иностранные граждане или лица без гражданства воспитывающие детей, обязаны ежегодно предоставлять Министерству народного образования РУЗ информацию о психологическом и физическом состоянии ребенка, условиях его жизни и воспитания через соответствующие дипломатические представительства иностранных государств до совершеннолетия усыновленных детей.
<br><br><p>5. У пользователя может быть только один аккаунт (учетная запись).
</p><p>6. Для регистрации учетной записи (аккаунта) необходимо следующее: </p>
a. Заполнить необходимую информацию для усыновления ребенка в форме, доступной на веб-сайте, включая ваш номер телефона и уникальный пароль;
<br>б. Ознакомьтесь с правилами и их приложениями и примите условия.<br><br>
<p>7. Для регистрации пользователя используется номер мобильного телефона, на указанный номер отправляется SMS-сообщение с паролем для  постановки на очередь в качестве кандидата на усыновление.
</p><p>8. Пользователь гарантирует, что информация, предоставленная при регистрации и использовании Веб-сайта, является точной, правильной и актуальной, и что он / она имеет право использовать эту информацию. Если данные пользователя изменяются, он обязуется их обновить.
</p><p>9. Пользователь обязуется сохранять конфиденциальность данных доступа к учетной записи (учетной записи) и защищать их от доступа третьих лиц, не имеющих несанкционированных полномочий. Помимо пользователя, другим юридическим и физическим лицам не разрешается осуществлять операции по усыновлению детей (посредством использования веб-сайта).
</p>Лица, раскрывшие тайну усыновления ребенка  вопреки предписаниям  органа опеки и попечительства в соответствии с законом, несут установленную законом ответственность.
<br><br> <p>10. Когда пользователь вводит данные о месте постоянного или временного проживания, система размещает комбинацию на основе введенных пользователем данных о месте жительства. Система имеет право запросить у пользователя дополнительную информацию для подтверждения и проверки информации о месте жительства.
</p>Пользователь может отозвать свое заявление (заявку) в соответствии со своими пожеланиями.
<br><br><p>11. Пользователь может быть поставлен в очередь в качестве кандидата на усыновление ребенка до 5 детей  одновременно из всех регионов.
</p><p>12. Администрация (администрация) сайта оставляет за собой право изменять настоящие правила.
</p><p>13. Положения действующей редакции правил применяются до вступления в силу новых правил.
</p><p>14. Дополнения к настоящим правилам считаются их неотъемлемой частью.
</p><b> СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ </b>
<br><br>Предоставляя информацию о человеке, пользователь соглашается на обработку, хранение и использование его персональных данных в следующих целях на основании закона Республики Узбекистан "Об информации о человеке" № 547 АРК:
<br><br>- Регистрация пользователя в очереди на усыновление ребенка;
<br><br>- Пользователь настоящим соглашается на обработку данных, относящихся к физическому лицу, только в категориях, перечисленных ниже, данных, относящихся к пользователю и его несовершеннолетнему ребенку (опекуну):
<br><br>- Пароль пользователя;
<br><br>- Паспортные данные, гражданство;
<br><br>- Адрес проживания;
<br><br>Данное согласие предоставляется органами опеки и попечительства для осуществления следующих действий в отношении данных о лице, выразившем желание усыновить ребенка:
<br><br>сбор, систематизация, хранение, уточнение (обновление, модификация), использование (только для вышеуказанных целей), экспроприация, блокирование, а также другие действия, предусмотренные действующим законодательством Республики Узбекистан.
<br><br>Обработка персональных данных должна осуществляться в соответствии с требованиями, установленными законодательством Республики Узбекистан, и только для вышеуказанных целей. Система защищает данные лица, выразившего желание усыновить ребенка, принимает необходимые организационные и технические меры для защиты этого лица от незаконного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также других незаконных действий в отношении этих данных.
<br><br>Защита введенной информации осуществляется в соответствии с требованиями, установленными законодательством Республики Узбекистан. Хранение и обработка информации, а также обмен информацией осуществляются после принятия необходимых мер по защите этой информации. В случае нарушения требований закона "Об информации о человеке" Министерство народного образования принимает на себя ответственность, предусмотренную действующим законодательством Республики Узбекистан.

<br><br>Статья 1412. Нарушение административного законодательства об информации о человеке наказывается штрафом в размере до пятидесяти кратного размера базового расчета, либо лишением определенного права на срок до трех лет, либо исправительными работами на срок до двух лет, если незаконный сбор, систематизация, хранение, пополнение, использование, распоряжение, распространение, передача, распоряжение и уничтожение этих действий: а) когда совершается при сговоре группой лиц , либо в случае, если; б) совершенное повторно или опасным рецидивистом; В) совершенное с преднамеренными или иными низкими намерениями; г) совершенное с использованием служебного положения; Г) повлекшее тяжкие последствия — наказывается штрафом в размере от пятидесяти до ста базовых величин,  либо исправительными работами на срок от двух до трех лет, либо ограничением свободы на срок до трех лет.
<br><br>Статья 462. Нарушение законодательства об информации о человеке влечет за собой незаконный сбор, систематизацию, хранение, изменение, пополнение, передачу, распоряжение и уничтожение информации о человеке, — от трех до пятикратного размера базового расчета гражданам и от пяти до десяти раз размера штрафа должностным лицам.

                </div>
                <div v-if="lang == 'uz_cyrl'" class="oferta-card" style="padding-left:20px;padding-right:20px">
                  	Мазкур ҳужжат Ўзбекистон Республикаси Олий ва ўрта махсус таълим вазирлигининг расмий веб-сайтидан фуқароларнинг рўйхатдан ўтиши, шахсий кабинет очиши ва ундан фойдаланиш бўйича Ўзбекистон Республикаси Фуқаролик кодексининг 367-моддаси ва 369-моддаси иккинчи қисмига мувофиқ хизмат кўрсатиш шартномасини (кейинги ўринларда – Шартнома) тузиш юзасидан лаёқатли бўлган фуқароларга (кейинги ўринларда – Фойдаланувчи) расмий таклиф ҳисобланади.
	<br><br>Фойдаланувчи томонидан мазкур офертада белгиланган ҳаракатларнинг бажарилиши, у томонидан қуйидаги шартлар сўзсиз қабул қилинганлигини англатади (Офертанинг акцепти). Офертани акцепт қилган пайтдан шартнома тузилган ҳисобланади. Мазкур шартномада тўғридан-тўғри назарда тутилмаган барча ҳоллар, томонлар Ўзбекистон Республикаси қонун ҳужжатлари ва иш муомаласи одатларига риоя қиладилар.
<h5 class="text-center mt-3"> 1. АТАМА ВА ТАЪРИФЛАР. </h5>
	<span class="ml-5">1.1. Мазкур шартномада қуйидаги атама ва таърифлар қўлланилади:</span>
	<br><b class="ml-5">Шахсга доир маълумотларни қайта ишлаш</b> – шахсга доир маълумотларни йиғиш, тизимлаштириш, сақлаш, ўзгартириш, тўлдириш, улардан фойдаланиш, уларни бериш, тарқатиш, узатиш, эгасизлантириш ва йўқ қилиш бўйича битта ёки бир нечта ҳаракатларни амалга ошириш;
	<br> <b class="ml-5"> Шахсга доир маълумотлар </b> – Сервисдан фойдаланиш учун фойдаланувчи томонидан тақдим этилган муайян жисмоний шахсга тааллуқли бўлган ёки уни идентификация қилиш имконини берадиган ахборот;
	<br>  <b class="ml-5"> Хизмат кўрсатувчи </b> - Ўзбекистон Республикаси Олий ва ўрта махсус таълим вазирлиги;
	<br> <b class="ml-5">Фойдаланувчи</b>  – мазкур оферта шартларини қабул қилган ва kontrakt.edu.uz сайти орақли хизматларни олувчи лаёқатли жисмоний шахс.
<h5 class="text-center mt-3">2. АКЦЕПТ ТАРТИБИ </h5>
	 <span class="ml-5"></span> 2.1. Мазкур Офертанинг акцепти «kontrakt.edu.uz» сайти орқали авторизациядан ўтиб, хизмат кўратувчи томонидан кўрсатиладиган хизматларни олиш орқали амалга оширилади.
	<br> <span class="ml-5"></span> 2.2. Мазкур Шартномани тузиш орқали фойдаланувчи хизмат курсатувчига амалдаги шахсга доир маълумотлар тўғрисидаги қонун ҳужжатлари талабларига мувофиқ ўзининг шахсга доир маълумотларига (шу жумладан, мобиль телефон рақами, банк карталарининг рақамлари, Ф.И.Ш., рўйхатдан ўтиш билан боғлиқ маълумотлар, шунингдек, бошқа ҳар ҳил шахсга доир маълумотлар) ишлов беришга муддатсиз розилигини беради, шу жумладан, уларни йиғиш, тизимлаштириш, сақлаш, аниқлаштириш (янгилаш, ўзгартириш), кўчириш, фойдаланиш, уларни бериш (тарқатиш, тақдим этиш, доступ бериш) уларни эгасизлантириш, уларни тақиқлаш, уларни ўчириш ва уларни йўқ қилиш, автоматизация воситаларидан фойдаланган ёки улардан фойдаланмаган ҳолда, ушбу шартномани бажариш мақсадида. Шунингдек, ушбу орқали фойдаланувчи мазкур шартнома бўйича хизмат кўрсатувчига тақдим этилган шахсга доир маълумотларни ушбу шартномани бажариш мақсадида учинчи шахсларга тақдим этишга розилик беради.
	<br> <span class="ml-5"></span> 2.3. Хизмат кўрсатувчи Фойдаланувчининг шахсга доир маълумотларнинг махфийлиги бўйича Ўзбекистон Республикаси амалдаги қонун ҳужжатлари талабларига мувофиқ барча зарур бўлган чораларни кўришини Фойдаланувчига кафолатлайди.Фойдаланувчи унинг шахсга доир маълумотларига ишлов беришга розилиги (шу жумладан учуинчи шахсларга ҳам) муддатсиз ҳисобланиб, истаган пайтда шахсга доир маълумотларига ишлов беришга розилигини қайтариб олиши мумкин.
	<br> <span class="ml-5"></span> 2.4. Сервисдан фойдаланишдан аввал Фойдаланувчи мазкур Офертанинг матни билан тўлиқ танишиб чиқиши зарур. Офертанинг шартлари билан тўлиқ ёки қисман норози бўлсангиз, сервисдан фойдаланишдан бош тортишингиз зарур.
<h5 class="text-center mt-3">3. ШАРТНОМА ПРЕДМЕТИ </h5>
	<span class="ml-5"></span>3.1. Фойдаланувчи хизмат кўрсатувчининг «kontrakt.edu.uz» манзилида руйхатдан ўтади. Руйхатдан ўтиш жараёнида шахсий малумотлар тўлдирилади. Фойдаланувчи Рўйхатдан ўтиш ва тизимдан фойдаланиш пайтида берилган маълумотларнинг аниқ, тўғри ва долзарб эканлигига ва ушбу маълумотлардан фойдаланиш ҳуқуқига эга эканлигига кафолат беради. 	Фойдаланувчи маълумотлари ўзгарса, уларни янгилаш мажбуриятини олади
	<br><span class="ml-5"></span>3.2. Рўйхатдан ўтгандан кейин фуқарога шахсий кабинет очилади. 
	
 
<h5 class="text-center mt-3">4. ТАРАФЛАР МАЖБУРИЯТЛАРИ </h5>
	<span class="ml-5"></span>4.1. Хизмат кўрсатувчи қуйидагиларга мажбур: 
	« kontrakt.edu.uz » тизимининг узлуксиз ишини таъминлаши, сервислар ишидаги узилишлар учинчи шахсларнинг айби бўйича ҳоллатлар бундан мустасно; шахсга доир маълумотларнинг махфийлигига риоя қилиниши, уларга ноқонуний ишлов беришнинг олдини олиниши, уларнинг яхлитлиги ва сақланишини таъминлайдиган ҳимоя қилиш бўйича ҳуқуқий, ташкилий ва техник чораларни кўради. 
	<br><span class="ml-5"></span>4.2. Фойдаланувчи қуйидагиларга мажбур: 
	мазкур офертанинг талабларини бажаради; Сервисга уланувчи воситанинг ахборот хавфсизлигини мустақил равишда таъминлайди; ўзининг лаёқатлиги, шунингдек тизимдан фирибгарлик ва бошқа ғайриқонуний мақсадларда фойдаланмаслигини тасдиқлайди ва кафолатлайди; Хизмат кўрсатувчининг розилигини олдиндан олмасдан шартнома бўйича ҳуқуқ ва мажбуриятларини учинчи шахсларга беришга ҳақли эмас. Шунга ўхшаш ҳар қандай бошқа ўриниш ҳақиқий эмас деб топилади.
	<br><span class="ml-5"></span>4.3. Хизмат кўрсатувчи бир томонлама мазкур Офертага ўзгартириш киритиш ҳақли, бунда Фойдаланувчини бу ҳақда тегишли ўзгартиришлар тўғрисида ахборот мазмундаги хабарлар, ёки СМС-хабар орқали огоҳлантиради.
<h5 class="text-center mt-3">5. ТОМОНЛАРНИНГ ЖАВОБГАРЛИГИ </h5>
	<span class="ml-5"></span>5.1. Томонлар мазкур шартноманинг талабларини бажармаганлиги ёки лозим даражада бажармаганлиги учун Ўзбекистон Республикаси қонун ҳужжатларига мувофиқ жавоб берадилар.
	<br><span class="ml-5"></span>5.2. Фойдаланувчи мазкур шартнома бўйича ўз мажбуриятларини бажармаганлиги ёки лозим даражада бажармаганлиги натижасида вужудга келган ҳар қандай зарар ёки салбий оқибатларга ўзи жавоб беради.
	<br><span class="ml-5"></span>5.4. Фойдаланувчи хавфсиз бўлмаган уланишлардан фойдаланган ҳолда, ёхуд зарарли дастур ва иловалар таҳдиди остида ўзининг шахсга доир маълумотларини қурилмага киритишида уларнинг хавфсизлигига тўлиқ жавоб беради.
	<br><span class="ml-5"></span>5.5. Хизмат кўрсатувчи мазкур шартнома шартларини бажармаганлиги ёки лозим даражада бажармаганлиги учун жавоб бермайди, агар ушбу ҳаракатлар Фойдаланувчи томонидан шартнома шартларини бажарилмаганлиги оқибатида содир бўлган бўлса.
	<br><span class="ml-5"></span>5.6. Хизмат кўрсатувчи Фойдаланувчида вужудга келган ҳар қандай зарар учун жавоб бермайди, агар Фойдаланувчи мазкур Офертанинг шартлари, шунингдек пуллик сервиснинг пуллик сервисларини активация қилинишида уларнинг оферталари ўз вақтида танишмаганлиги ёки танишмагалиги сабаби бўлса.
	<br><span class="ml-5"></span>5.7. Хизмат кўрсатувчи мазкур шартнома шартларини лозим даражада бажармаганлиги учун жавоб бермайди, агар ушбу ҳаракатлар Хизмат кўрсатувчининг назорат доирасига кирмайдиган сабабларга асосан содир бўлган бўлса. 
	Хизмат кўрсатувчининг назорат доираси фақат ушбу тизим сервисларининг ишлаши билан чекланиб, учинчи шахсларнинг айби билан вужудга келган узилишларга ёхуд давлат органлари ёки суд томонидан қуйилган чеклов ва тақиқларни ўз ичига олмайди.
	<br><span class="ml-5"></span>5.8. Ҳар бир Томон ушбу шартномада белгиланган жавобгарлик чекланганлигини тан олган ҳолда, бошқа Томон мазкур шартномани тузишни ва ушбу чекловлар тарафлар ўртасидаги келишувлар учун зарур асос эканлигини тан олади. Бунда, Томонларнинг ҳеч бири талабларини бажармаганлиги ёки кечикганлиги учун жавоб бермайди, агар уларнинг назоратидан ташқаридаги ҳар қандай шароитлар оқибатида, шу жумладан, ҳуқумат фаолияти ёки террористик ҳаракатлар, зилзилалар, ёнғинлар, тошқинлар ёки бошқа табиий офатлар, иш шароитлари билан боғлиқ вазиятлар , электр таъминотидаги узилишлар ва Интернетга уланишидаги бузилишлар каби ҳолатлар бўлса, бироқ улар билан чекланиб қолмасдан.
<h5 class="text-center mt-3">6. ШАРТНОМАНИ БЕКОР ҚИЛИШ </h5>

	<span class="ml-5"></span>6.1. Фойдаланувчи ушбу тизимдаги <b>аккаунтини ўчириб, шахсий кабинетдан чиқиб кетган ҳолда</b> мазкур шартномани ҳар қандай вақтда бажармасликка ҳақли.
	<br><span class="ml-5"></span>6.2. Мазкур шартнома аккаунт ўчирилган вақтдан бошлаб бекор қилинган деб ҳисобланади.
<h5 class="text-center mt-3">7. КЕЛИШМОВЧИЛИКЛАРНИ КЎРИБ ЧИҚИШ ТАРТИБИ </h5>

	<span class="ml-5"></span>7.1. Мазкур шартномадан келиб чиқувчи ҳар қандай низо, музокаралар орқали, ёхуд Фойдаланувчининг ёзма мурожаати асосида эътироз тартибида кўриб чиқилиши зарур. Мурожаатни кўриб чиқиш ва ва унинг мазмунига қуйиладиган талаблар амалдаги Ўзбекистон Республикаси қонун ҳужжатлари билан белгиланади.
	<br><span class="ml-5"></span>7.2. Агар вужудга келган низо эътироз тартибида ҳал этилмаса, Ўзбекистон Республикаси амалдаги қонун ҳужжатлари белгиланган тартибга мувофиқ жавобгарнинг жойлашган ердаги тааллуқлиги бўйича судда кўриб чиқилиши керак.
	<br><span class="ml-5"></span>7.3. Фойдаланувчилар билан эътирозлар билан боғлиқ ишлар ва техник кўллаб-қувватлаш хизматлари Фойдаланувчиларга фақат сўровларни қабул қилиш, уларга ишлов бериш ва тегишли сўровларга жавобларни юбориш орқали амалга оширилади. 
<h5 class="text-center mt-3">8. БОШҚА ШАРТЛАР </h5>
	<span class="ml-5"></span>8.1. Тўғридан-тўғри шартномада назарда тутилмаган ҳар бир нарсада томонлар Ўзбекистон Республикасининг амалдаги қонунчилигини ва бизнес айланмаларини бошқарадилар.
	<br><span class="ml-5"></span>8.2. Ушбу таклифни қабул қилиб, фойдаланувчи ушбу шартноманинг барча шартларини сўзсиз қабул қилганлигини тасдиқлайди ва уни бажаришни ўз зиммасига олади.

                </div>
                <div v-if="lang == 'uz_latn'" class="oferta-card" style="padding-left:20px;padding-right:20px">
                    <!-- <h6> I. Lorem Ipsum </h6> -->
                   <p>Veb-saytdan foydalanish shartlari, shu jumladan Roʼyxatdan oʼtish, bilan bogʼliq masalalar ushbu Qoidalarda belgilab qoʼyilgan. Veb-saytning har bir foydalanuvchisi Qoidalarning mazmuni bilan tanishishi shart.</p>
<p>2. Veb-saytdan toʼliq foydalanish uchun Internetga ulangan qurilma quyidagi talablarga javob berishi kerak:</p>
<p>a. HTTPS protokoli orqali ikki tomonlama aloqani taʼminlaydigan uzluksiz Internet ulanish;</p>
<p>b. HTML5 standarti va kaskadli uslublar jadvallarini (CSS3) ishlata oladigan toʼgʼri oʼrnatilgan va sozlangan soʼnggi versiyadagi veb-brauzer, masalan, Google Chrome, Mozilla Firefox, Opera, Microsoft Edge, Internet Explorer.</p>
<p>d. JavaScript va cookie fayllarni qoʼllash yoqib qoʼyilgan (odatda brauzerlarda avtomatik ravishda yoqilgan boʼladi).</p>
<p>3. Voyaga yetgan erkak yoki ayol fuqarolar farzandlikka oluvchilar sifatida Foydalanuvchi boʼlishi mumkin.</p>
<b>quyidagi shaxslar bundan mustasno:</b>
<br> - ota-onalik huquqidan mahrum qilingan yoki ota-onalik huquqi cheklanganlar;
<br> - qonun bilan belgilangan tartibda muomalaga layoqatsiz yoki muomala layoqati cheklangan deb topilganlar;
<br> - asab kasalliklari yoki narkologiya muassasalarida roʼyxatda turuvchilar;
<br> - sobiq farzandlikka oluvchilar, agar ular farzandlikka olish boʼyicha zimmalariga yuklangan majburiyatlarni bajarishdan boʼyin tovlaganliklari yoki ularni lozim darajada bajarmaganliklari, ota-onalik huquqini suiisteʼmol qilganliklari, farzandlikka olinuvchilarga nisbatan shafqatsizlik bilan muomalada boʼlganliklari, shuningdek, surunkali ichkilikbozlik yoki giyohvandlikka mubtalo boʼlganliklari munosabati bilan farzandlikka olish bekor qilingan boʼlsa;
<br> - qasddan sodir qilgan jinoyati uchun ilgari hukm qilinganlar.  
<br> - Foydalanuvchida quyidagi holatlardan biri boʼlgan taqdirda tizim avtomatik tarzda bola asrab olish uchun nomzod sifatida qoʼyilishi rad etiladi.
<br> - Bunda, ushbu bandning uchinchi, toʼrtinchi va oltinchi xatbidagi holatlar respublika Oliy sudining maʼlumotlar bazasidan;
<br> - beshinchi xat boshidagi holatlar Ichki ishlar vazirligining maʼlumotlar bazasidan;
<br> - yettinchi xatboshidagi holatlar Sogʼliqni saqlash vazirligining maʼlumotlar bazasidan integratsiya qilish orqali olinadi.
<p>4. Oʼzbekiston Respublikasi fuqarosi boʼlgan bolalarni asrab olish Oʼzbekiston Respublikasida oʼz diplomatik vakolatxonasi mavjud boʼlgan davlatlarning fuqarolari tomonidan amalga oshiriladi.</p>
<p>Bola asrab oluvchi chet el fuqarosi yoki fuqaroligi boʼlmagan shaxslar asrab olingan bolalar balogʼatga yetgunlariga qadar har yili xorijiy davlatlarning tegishli diplomatik vakolatxonalari orqali Xalq taʼlimi vazirligiga bolaning psixik va jismoniy holati, uning yashash va tarbiyalanish sharoitlari toʼgʼrisida axborot taqdim etish majburiyatini oladi.</p>
<p>5. Foydalanuvchi faqat bitta hisobga olish yozuvi (akkaunt) ega boʼlishi mumkin.</p>
<p>6. Hisobga olish yozuvi (akkaunt) roʼyxatga olish uchun quyidagilar talab yetiladi:</p>
a. Veb-saytda mavjud boʼlgan shaklda bola asrab olish uchun kerakli maʼlumotlarni toʼldirish, shu jumladan telefon raqamingizni va noyob parolni;
<br>b. Qoidalar va ularning ilovalari bilan tanishib, shartlarni qabul qilish.
<p>7. Foydalanuvchini roʼyxatdan oʼtkazish uchun mobil telefon raqamidan foydalaniladi, bola asrab olish uchun nomzod sifatida navbatga qoʼyish uchun uchun koʼrsatilgan raqamga parol bilan SMS-xabar yuboriladi.
</p><p>8. Foydalanuvchi Roʼyxatdan oʼtish va Veb-saytdan foydalanish paytida berilgan maʼlumotlarning aniq, toʼgʼri va dolzarb ekanligiga va ushbu maʼlumotlardan foydalanish huquqiga ega ekanligiga kafolat beradi. Foydalanuvchi maʼlumotlari oʼzgarsa, ularni yangilash majburiyatini oladi.
</p><p>9. Foydalanuvchi Hisobga olish yozuviga (akkauntga) kirish maʼlumotlarini maxfiy saqlash va ularni ruxsatsiz vakolatga ega boʼlmagan uchinchi shaxslar kirishidan himoya qilish majburiyatini oladi. Foydalanuvchidan tashqari boshqa yuridik va jismoniy shaxslarning bola asrab olish (Veb-saytdan foydalanish orqali) boʼyicha faoliyat yuritishiga yoʼl qoʼyilmaydi.
Farzandlikka oluvchining yoki vasiylik va homiylik organining erkiga xilof ravishda farzandlikka olish sirini oshkor qilgan shaxslar qonun bilan belgilangan javobgarlikka tortiladilar.
</p><p>10. Foydalanuvchi tomonidan doimiy yoki vaqtinchalik yashash joyi toʼgʼrisidagi maʼlumotlar kiritilganda, tizim foydalanuvchi tomonidan kiritilgan yashash joyi toʼgʼrisidagi maʼlumotlar asosida biriktirib qoʼyadi. Tizim foydalanuvchi tomonidan yashash joyi toʼgʼrisidagi maʼlumotni tasdiqlash va verifikatsiya qilish uchun qoʼshimcha maʼlumotlarni talab qilish huquqiga ega.
Foydalanuvchi oʼz xohishiga koʼra murojaatini (ariza) qaytarib olishi mumkin.
</p><p>11. Foydalanuvchi nomzod sifatida bir vaqtning oʼzida birdagina barcha hududlardan 5 nafargacha bolani asrab olish uchun navbatga qoʼyilishi mumkin.
</p><p>12. Veb-sayt maʼmuriyati (administratsiyasi) mazkur Qoidalarga oʼzgartirish huquqini oʼz zimmasida qoldiradi.
</p><p>13. Qoidalarning amaldagi tahrirdagi nizomlari yangi Qoidalar kuchga kirgunga qadar qoʼllaniladi.
</p><p>14. Ushbu Qoidalarga qoʼshimchalar ularning ajralmas qismi sanaladi.</p>
<b>SHАXSGА DOIR MA'LUMOTLARGA ISHLOV BERISh UCHUN ROZILIK</b>
<br>Oʼzining shaxsga doir maʼlumotlarini taqdim yetish orqali Foydalanuvchi OʼRQ-547-son Oʼzbekiston Respublikasi “Shaxsga doir maʼlumotlar toʼgʼrisida”gi Qonuni asosida quyidagi maqsadlarda shaxsiy maʼlumotlarini qayta ishlash, saqlash va ulardan foydalanishga rozilik beradi:
<br><br>- Foydalanuvchini bola asrab olish uchun navbatga qoʼyish uchun roʼyxatdan oʼtkazish;
<br>- Shu bilan Foydalanuvchi shaxsga doir maʼlumotlarni faqat quyida keltirilgan toifalarga Foydalanuvchi va uning voyaga yetmagan bolasiga (vasiylikdagi shaxsga) taalluqli shaxsga doir maʼlumotlarga ishlov berishga rozilik beradi:
<br>- Foydalanuvchining JShShIR;
<br>- Pasport maʼlumotlari, fuqaroligi;
<br>- Yashash manzili;
<br><br>Ushbu rozilik vasiylik va homiylik organlari tomonidan bola asrab olish istagini bildirgan shaxsga doir maʼlumotlariga nisbatan quyidagi harakatlarni amalga oshirish uchun taqdim etiladi:
<br> - yigʼish, tizimlashtirish, toʼplash, saqlash, aniqlashtirish (yangilash, oʼzgartirish), foydalanish (faqat yuqorida koʼrsatilgan maqsadlar uchun), egasizlantirish, blokirovkalash shuningdek, Oʼzbekiston Respublikasining amaldagi qonun hujjatlarida nazarda tutilgan boshqa harakatlarni amalga oshirish.
<br><br>Shaxsga doir maʼlumotlarga ishlov berish Oʼzbekiston Respublikasi qonun hujjatlarida belgilangan talablarga rioya etilgan holda va faqat yuqorida koʼrsatilgan maqsadlar uchun amalga oshirilishi kerak. Tizim bola asrab olish istagini bildirgan shaxsga doir maʼlumotlarini himoya qiladi, shaxsga doir maʼlumotlarga noqonuniy yoki tasodifiy kirishdan himoya qilish, yoʼq qilish, oʼzgartirish, blokirovka qilish, nusxalash, tarqatishdan, shuningdek, ushbu maʼlumotlarga nisbatan boshqa noqonuniy xatti-harakatlardan himoya qilish uchun zarur tashkiliy va texnik choralarni koʼradi.
<br><br>Kiritilgan axborotni himoya qilish Oʼzbekiston Respublikasi qonun hujjatlarida belgilangan talablarga rioya etilgan holda amalga oshiriladi. Axborotni saqlash va qayta ishlash, shuningdek axborot almashinish ushbu axborotni himoya qilish boʼyicha zarur choralar koʼrilganidan keyin amalga oshiriladi. “Shaxsga doir maʼlumotlar toʼgʼrisida”gi qonun talablari buzilgan taqdirda xalq taʼlimi vazirligi Oʼzbekiston Respublikasining amaldagi qonunchiligida nazarda tutilgan javobgarlik majburiyatini oladi.
<br><br>1412-modda. Shaxsga doir maʼlumotlar toʼgʼrisidagi qonunchilikni buzish Shaxsga doir maʼlumotlarni qonunga xilof ravishda yigʼish, tizimlashtirish, saqlash, oʼzgartirish, toʼldirish, ulardan foydalanish, ularni berish, tarqatish, uzatish, egasizlantirish va yoʼq qilish oʼsha harakatlar uchun maʼmuriy jazo qoʼllanilganidan keyin sodir etilgan boʼlsa, — bazaviy hisoblash miqdorining ellik baravarigacha miqdorda jarima yoki uch yilgacha muayyan huquqdan mahrum qilish yoxud ikki yilgacha axloq tuzatish ishlari bilan jazolanadi. Oʼsha harakatlar: a) bir guruh shaxslar tomonidan oldindan til biriktirib sodir etilgan boʼlsa; b) takroran yoki xavfli retsidivist tomonidan sodir etilgan boʼlsa; v) gʼarazli yoki boshqacha past niyatlarda sodir etilgan boʼlsa; g) xizmat mavqeidan foydalangan holda sodir etilgan boʼlsa; d) ogʼir oqibatlarga sabab boʼlsa, — bazaviy hisoblash miqdorining ellik baravaridan yuz baravarigacha miqdorda jarima yoki ikki yildan uch yilgacha axloq tuzatish ishlari yoki bir yildan uch yilgacha ozodlikni cheklash yoxud uch yilgacha ozodlikdan mahrum qilish bilan jazolanadi.
<br><br>462-modda. Shaxsga doir maʼlumotlar toʼgʼrisidagi qonun hujjatlarini buzish Shaxsga doir maʼlumotlarni qonunga xilof ravishda yigʼish, tizimlashtirish, saqlash, oʼzgartirish, toʼldirish, ulardan foydalanish, ularni berish, tarqatish, uzatish, egasizlantirish va yoʼq qilish, — fuqarolarga bazaviy hisoblash miqdorining uch baravaridan besh baravarigacha, mansabdor shaxslarga esa — besh baravaridan oʼn baravarigacha miqdorda jarima solishga sabab boʼladi.
                </div>
                <div class="soglasen" >
                    <!-- <custom-button @click.native="ReturnRegister">  <span style="margin-left:48px;margin-right:48px"> {{ $t('agree') }} </span> </custom-button> -->
                    <button  @click="ReturnRegister" class="btn anim-opacity  btn-primary"> {{ $t('agree') }} </button>
                </div>
            </b-col>
        </b-row>
    </div>
  </div>
  </div>
</template>

<script>
import { BRow,BCol } from 'bootstrap-vue'
import Navbar from '../layouts/components/navbar.vue'
export default {
    components : { BRow,BCol,Navbar },
    data(){
        return{
            lang : localStorage.getItem('locale') || 'uz_latn'
        }
    },
    created(){
        this.$store.state.isOpenSidebar = false
    },
    methods:{
        ReturnRegister(){
                this.$router.push({ name : 'Register'})
        }
    }
}
</script>

<style lang="scss">
    
</style>