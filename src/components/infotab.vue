<template>
  <div class="container my-5">
    <h2 class="text-center mb-5">
      {{ $t("questionandanswer") }}
    </h2>
    <b-row class="accordion" role="tablist">
      <b-col sm="12" lg="12">
        <b-card class="accCard">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.collapse-1
              variant="outline-primary"
              class="text-left accordion_btn"
            >
              <div class="d-flex justify-content-between">
                <p class="text">Agar talaba shartnoma pulini to‘lashga qiynalsa, Oliy ta’lim muassasasi tomonidan <br> imtiyoz berish nazarda tutiladimi?</p>
                <img src="@/assets/images/new_design/add_circle.svg" alt="">
              </div>
            </b-button>
          </b-card-header>
          <b-collapse id="collapse-1" accordion="my-collapse" role="tabpanel">
            <b-card-body v-if="lang == 'ru'">
              <div class="accCard_body">
                Обучение на платно-контрактной основе является необязательным и целесообразным
                  выше обучающимся данной категории в нормативно-правовых документах
                  смягчение условий оплаты учебным заведением
                  не планируется предоставление льгот по
    
                <br />
                <br />
                Постановление Кабинета Министров Республики Узбекистан от 18.02.2021 г.
                  Август "ВЫСШЕЕ, СРЕДНЕЕ СПЕЦИАЛЬНОЕ И ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ
                  ОБУЧЕНИЕ ДЛЯ ОБУЧЕНИЯ НА ПЛАТНО-КОНТРАКТНОЙ ОСНОВЕ В СВОИХ ОРГАНИЗАЦИЯХ
                  МЕРЫ ПО РЕГУЛИРОВАНИЮ ВЫДЕЛЕНИЯ КРЕДИТОВ
                  Высшие учебные заведения на основании решения № 527
                  предусмотрено выделение образовательного кредита своим студентам.
    
                <br />
                <br />
                Кроме того, Министерство финансов Республики Узбекистан и
                № 24 от 2010 года Государственного налогового комитета Республики Узбекистан
                Марш «Обучение в высших учебных заведениях Республики Узбекистан
                от физических лиц к средствам, подлежащим получению
                порядок применения льготы по налогу на прибыль
                24, 15 - об утверждении положения о
                (27 от 2010 г. Министерство юстиции Республики Узбекистан
                № 2107 от мая 2010 г.) в основном в 2010 г.
                с 1 января налогооблагаемая заработная плата граждан и
                высшее образование Республики Узбекистан прочих доходов
                получить образование в своей стране (его учеба или до двадцати шести лет
                для обучения своих несовершеннолетних детей).
                подоходный налог с физических лиц
                не ставить.
    
                <br />
                <br />
              Кроме того, вы можете спонсировать
                  Вы также можете обратиться к предприятиям и организациям.
              </div>
            </b-card-body>
            <b-card-body v-if="lang == 'uz_cyrl'">
              <div class="accCard_body">
                Тўлов–контракт асосида ўқиш ихтиёрий бўлиб, тегишли меъёрий–ҳуқуқий
                ҳужжатларда мазкур тоифадаги талабаларга олий таълим муассасаси
                томонидан тўлов шартларини енгиллаштириш бўйича имтиёзлар бериш
                кўзда тутилмаган.
                <br />
                <br />Шунингдек, ҳозирги кунда талабаларни тўлов – контракт асосида
                ўқиши учун кенг имкониятлар мавжуд бўлиб, улардан бири бу “таълим
                кредити”дир. Ўзбекистон Республикаси Вазирлар Маҳкамасининг 2001 йил
                26 июлдаги “Олий ўқув юртларида тўлов-контракт асосида ўқиш учун
                таълим кредитлари бериш тўғрисида”ги 318-сонли қарорига асосан банк
                муассасалари томонидан тўлов-контракт асосида ўқиётган талабаларга
                берилаётган “таълим кредит”лари жуда ҳам қулай ва самарали
                ҳисобланади. <br />
                <br />Ушбу қарорнинг 3-бандига асосан: <br />- чин етимлар,
                “Меҳрибонлик уйлари”да тарбияланганлар ҳамда И ва ИИ гуруҳ
                ногиронлари учун – фоизсиз таълим кредитлари берилади; <br />- кам
                таъминланган оилалардан бўлган талабалар учун кредит бўйича қўшилган
                фоизларнинг 50 фоизи туман Бандликка кўмаклашиш ва аіолини ижтимоий
                муіофаза єилиш марказлари томонидан “Иш билан таъминлашга кўмаклашиш
                давлат жамғарма”си маблағлари ҳисобидан тўлаш белгиланган. <br />
                <br />Бундан ташқари, Ўзбекистон Республикаси Молия вазирлиги ва
                Ўзбекистон Республикаси Давлат солиқ қўмитасининг 2010 йил 24
                мартдаги “Ўзбекистон Республикаси олий ўқув юртларида таълим олиш
                учун йўналтириладиган маблағларга жисмоний шахслардан олинадиган
                даромад солиғи бўйича имтиёзни қўллаш тартиби тўғрисидаги низомни
                тасдиқлаш ҳақида”ги 24, 15 – сонли қарорига (Ўзбекистон Республикаси
                Aдлия вазирлиги томонидан 2010 йил 27 майда 2107-сон билан давлат
                рўйхатидан ўтказилган) асосан, 2010 йил 1 январдан бошлаб,
                фуқароларнинг солиқ солинадиган иш ҳақи ва бошқа даромадларининг
                Ўзбекистон Республикаси олий ўқув юртларида таълим олишга (ўзининг
                ўқиши ёки йигирма олти ёшга тўлмаган фарзандларининг таълим олиши
                учун) йўналтириладиган суммаларига жисмоний шахслардан олинадиган
                даромад солиғи солинмайди. <br />
                <br />Шу билан бир қаторда, Сиз ҳомийлик кўрсатиши мумкин бўлган
                корхона ва ташкилотларга ҳам мурожаат қилишингиз мумкин.
              </div>
            </b-card-body>
            <b-card-body v-if="lang == 'uz_latn'">
              <div class="accCard_body">
                To‘lov–kontrakt asosida o‘qish ixtiyoriy bo‘lib, tegishli
                me’yoriy–huquqiy hujjatlarda mazkur toifadagi talabalarga oliy
                ta’lim muassasasi tomonidan to‘lov shartlarini yengillashtirish
                bo‘yicha imtiyozlar berish ko‘zda tutilmagan.
                <br />
                <br />
                Oʼzbekiston Respublikasi Vazirlar Mahkamasining 2021 yil 18
                avgustdagi "OLIY, OʼRTА MАXSUS VА PROFESSIONАL TA’LIM
                TАSHKILOTLАRIDА TOʼLOV-KONTRАKT АSOSIDА OʼQISH UCHUN TA’LIM
                KREDITLАRI АJRАTISHNI TАRTIBGА SOLISH CHORА-TАDBIRLАRI
                TOʼGʼRISIDА"gi 527-son qarori asosida oliy ta‘lim muassasalari
                talabalariga ta‘lim kreditini ajratish nazarda tutilgan.<br />
                <br />Bundan tashqari, O‘zbekiston Respublikasi Moliya vazirligi va
                O‘zbekiston Respublikasi Davlat soliq qo‘mitasining 2010 yil 24
                martdagi “O‘zbekiston Respublikasi oliy o‘quv yurtlarida ta’lim
                olish uchun yo‘naltiriladigan mablag‘larga jismoniy shaxslardan
                olinadigan daromad solig‘i bo‘yicha imtiyozni qo‘llash tartibi
                to‘g‘risidagi nizomni tasdiqlash haqida”gi 24, 15 – sonli qaroriga
                (O‘zbekiston Respublikasi Adliya vazirligi tomonidan 2010 yil 27
                mayda 2107-son bilan davlat ro‘yxatidan o‘tkazilgan) asosan, 2010
                yil 1 yanvardan boshlab, fuqarolarning soliq solinadigan ish haqi va
                boshqa daromadlarining O‘zbekiston Respublikasi oliy o‘quv
                yurtlarida ta’lim olishga (o‘zining o‘qishi yoki yigirma olti yoshga
                to‘lmagan farzandlarining ta’lim olishi uchun) yo‘naltiriladigan
                mablag‘lariga jismoniy shaxslardan olinadigan daromad solig‘i
                solinmaydi. <br />
                <br />Shu bilan bir qatorda, Siz homiylik ko‘rsatishi mumkin bo‘lgan
                korxona va tashkilotlarga ham murojaat qilishingiz mumkin.
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>

      <b-col sm="12" lg="12">
        <b-card class="accCard">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.collapse-2
              variant="outline-primary"
              class="text-left accordion_btn"
            >
              <div class="d-flex justify-content-between">
                <p class="text">Farzandim to‘lov-kontrakt asosida universitetda tahsil olmoqda. Oilaviy sharoitimiz og‘ir. Farzandimni o‘qishini budjet asosiga o‘tkazishni imkoni bormi?</p>
                <img src="@/assets/images/new_design/add_circle.svg" alt="">
              </div>
            </b-button>
          </b-card-header>
          <b-collapse id="collapse-2" accordion="my-collapse" role="tabpanel">
            <b-card-body v-if="lang == 'ru'">
              <div class="accCard_body">
                Соответственно 1 абзацу 3 пункта “Положений о порядке приёма
                студентов в бакалавриат высших учебных заведений”, утвержденному
                Кабинетом Министров Республики Узбекистан от 18 июня 2010 года №
                118: “Приём студентов в высшие учебные заведения осуществляется по
                рейтинговой системе набранных баллов по результатам тестовых
                испытаний Государственной Комиссией по приёму в высшие учебния
                заведения”.
                <br /><br />Согласно 2 абзацу 3 пункта данного Положения : “Приём в
                ВУЗ для всех (бюджетникам и контрактам) обеспечивается равноправие,
                осуществление на основе единственных правил приёма и единственного
                выбора, права абитуриента, набравший самый высокий балл в тестовых
                испытаниях, принять в первую очередь на основе государственного
                гранта. <br /><br />Остальные абитуриенты имеют право приёма в
                рамках установленных квот контракта на основе рейтинговых баллов
                теста”. <br /><br />Обучение на контрактной основе является
                добровольным, в соответствующих нормативных документах для студентов
                такого рода не предусмотрены предоставление льгот по облегчению
                условий оплаты.
              </div>
            </b-card-body>
            <b-card-body v-if="lang == 'uz_cyrl'">
              <div class="accCard_body">
                Ўзбекистон Республикаси Вазирлар Маҳкамасининг 2010 йил 18 июндаги
              118-сон қарори билан тасдиқланган “Олий таълим муассасаларининг
              бакалавриатига талабаларни қабул қилиш тартиби тўғрисида”ги
              Низомнинг 3-бандидаги биринчи хат бошига мувофиқ: “Олий таълим
              муассасаларига талабаларни қабул қилиш Ўзбекистон Республикаси
              таълим муассасаларига қабул қилиш бўйича Давлат комиссияси томонидан
              тест синовлари натижаларига кўра тўпланган балларнинг рейтинг тизими
              бўйича амалга оширилади”.
              <br /><br />Мазкур Низомнинг 3-бандидаги иккинчи хат бошига мувофиқ:
              <br /><br />“Олий таълим муассасаларига қабул барча учун (ҳам
              грантлар, ҳам тўлов-контракт бўйича) тенг ҳуқуқлилик, ягона қабул
              қоидалари ва ягона танлов асосида амалга оширилиб, тест синовларида
              енг юқори балл тўплаган абитуриентларга давлат грантлари бўйича
              биринчи навбатда қабул қилиниш ҳуқуқи таъминланади. Қолган
              абитуриентлар тест баллари рейтинги асосида белгиланган
              тўлов-контракт квоталари доирасида қабул қилиниш ҳуқуқига
              егадирлар”. <br /><br />Тўлов–контракт асосида ўқиш ихтиёрий бўлиб,
              тегишли меъёрий ҳужжатларда мазкур тоифадаги талабаларга тўлов
              шартларини енгиллаштириш бўйича имтиёзлар бериш кўзда тутилмаган.
              </div>
            </b-card-body>
            <b-card-body v-if="lang == 'uz_latn'">
              <div class="accCard_body">
                O‘zbekiston Respublikasi Vazirlar Mahkamasining 2010 yil 18 iyundagi
                118-son qarori bilan tasdiqlangan “Oliy ta’lim muassasalarining
                bakalavriatiga talabalarni qabul qilish tartibi to‘g‘risida”gi
                Nizomning 3-bandidagi birinchi xat boshiga muvofiq: “Oliy ta’lim
                muassasalariga talabalarni qabul qilish O‘zbekiston Respublikasi
                ta’lim muassasalariga qabul qilish bo‘yicha Davlat komissiyasi
                tomonidan test sinovlari natijalariga ko‘ra to‘plangan ballarning
                reyting tizimi bo‘yicha amalga oshiriladi”.
                <br /><br />Mazkur Nizomning 3-bandidagi ikkinchi xat boshiga
                muvofiq: <br /><br />“Oliy ta’lim muassasalariga qabul barcha uchun
                (ham grantlar, ham to‘lov-kontrakt bo‘yicha) teng huquqlilik, yagona
                qabul qoidalari va yagona tanlov asosida amalga oshirilib, test
                sinovlarida eng yuqori ball to‘plagan abiturientlarga davlat
                grantlari bo‘yicha birinchi navbatda qabul qilinish huquqi
                ta’minlanadi. Qolgan abiturientlar test ballari reytingi asosida
                belgilangan to‘lov-kontrakt kvotalari doirasida qabul qilinish
                huquqiga egadirlar”. <br /><br />To‘lov–kontrakt asosida o‘qish
                ixtiyoriy bo‘lib, tegishli me’yoriy hujjatlarda mazkur toifadagi
                talabalarga to‘lov shartlarini yengillashtirish bo‘yicha imtiyozlar
                berish ko‘zda tutilmagan.
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>

      <b-col sm="12" lg="12">
        <b-card class="accCard">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.collapse-3
              variant="outline-primary"
              class="text-left accordion_btn"
            >
              <div class="d-flex justify-content-between">
                <p class="text">Xorijiy fuqarolarni oliy ta’lim muassasalariga qabul qilish qanday tartib asosida amalga oshiriladi?</p>
                <img src="@/assets/images/new_design/add_circle.svg" alt="">
              </div>
            </b-button>
          </b-card-header>
          <b-collapse id="collapse-3" accordion="my-collapse" role="tabpanel">
            <b-card-body v-if="lang == 'ru'">
              <div class="accCard_body">
                Приём иностранных граждан в высшие учебные заведения осуществляется
                в соответствии с постановлением Кабинета Министров Республики
                Узбекистан от 4 августа 2008 года № 169 «О совершенствовании порядка
                приёма и обучения иностранных граждан в образовательных учреждениях
                Республики Узбекистан».
                <br /><br />Документы иностранных граждан принимаются, как и для
                граждан Республики Узбекистан в назначенное время, т.е. для
                поступления в бакалавриат с 20 июня до 20 июля, для поступления в
                магистратуру с 1 июля до 30 июля. <br /><br />Согласно
                установленному порядку иностранные граждане должны сдать документы
                непосредственно в Приёмную комиссию высшего учебного заведения.
                <br /><br />Иностранные граждане принимаются в бакалавриат на основе
                результатов тестовых испытаний, проведенных 1 августа каждого года
                Государственным тестовым центром при Кабинете Министров. А в
                магистратуру принимаются на основе результатов вводных экзаменов,
                организуемых примерно в период 1-10 августа со стороны высших
                учебных заведений. Приём иностранных граждан в ряд студентов
                осуществляется на основе постановления Государственной комиссии по
                приёму в образовательные учреждения Республики Узбекистан при
                Кабинете Министров по результатам тестовых испытаний (для
                бакалавриата) и вводных экзаменов (для магистратуры).
              </div>
            </b-card-body>
            <b-card-body v-if="lang == 'uz_cyrl'">
              <div class="accCard_body">
                Хорижий фуқароларни Ўзбекистон олий таълим муассасаларига қабул
                қилиш Вазирлар Маҳкамасининг “Хорижий фуқароларни Ўзбекистон
                Республикаси таълим муассасаларига қабул қилиш ва ўқитиш тартибини
                такомиллаштириш тўғрисида”ги 2008 йил 4 августдаги 169-сонли
                қарорига мувофиқ амалга оширилади.
                <br /><br />Хорижий фуқароларнинг ҳужжатлари Ўзбекистон Республикаси
                фуқаролари учун белгиланган муддатларда яъни бакалавриатга кириш
                учун 20 июндан 20 июлга қадар, магистратурага кириш учун 1 июлдан 30
                июлга қадар қабул қилинади. Ўрнатилган тартибга биноан хорижий
                фуқаролар ҳужжатларини тегишли олий таълим муассасасининг Қабул
                комиссиясига тўғридан-тўғри топширишлари керак. <br /><br />Хорижий
                фуқаролар бакалавриатга Вазирлар Маҳкамаси ҳузуридаги Давлат тест
                маркази томонидан ҳар йили 1 август куни ўтказиладиган тест
                синовлари натижалари асосида қабул қилинадилар. Магистратурага еса
                олий таълим муассасалари томонидан мустақил равишда таҳминан 1-10
                август оралиғида ташкил етиладиган кириш имтиҳонлари натижаси
                асосида қабул қилинадилар. <br /><br />Хорижий фуқароларни талабалар
                сафига қабул қилиш Вазирлар Маҳкамаси ҳузуридаги Ўзбекистон
                Республикаси Таълим муассасаларига қабул қилиш бўйича Давлат
                комиссиясининг қарори асосида тест синовлари (бакалавриат учун) ёки
                кириш имтиҳонлари (магистратура учун) натижаларига кўра амалга
                оширилади
              </div>
            </b-card-body>
            <b-card-body v-if="lang == 'uz_latn'">
              <div class="accCard_body">
                Xorijiy fuqarolarni O‘zbekiston oliy ta’lim muassasalariga qabul
                qilish Vazirlar Mahkamasining “Xorijiy fuqarolarni O‘zbekiston
                Respublikasi ta’lim muassasalariga qabul qilish va o‘qitish
                tartibini takomillashtirish to‘g‘risida”gi 2008 yil 4 avgustdagi
                169-sonli qaroriga muvofiq amalga oshiriladi.
                <br /><br />Xorijiy fuqarolarning hujjatlari O‘zbekiston
                Respublikasi fuqarolari uchun belgilangan muddatlarda ya’ni
                bakalavriatga kirish uchun 20 iyundan 20 iyulga qadar,
                magistraturaga kirish uchun 1 iyuldan 30 iyulga qadar qabul
                qilinadi. O‘rnatilgan tartibga binoan xorijiy fuqarolar hujjatlarini
                tegishli oliy ta’lim muassasasining Qabul komissiyasiga
                to‘g‘ridan-to‘g‘ri topshirishlari kerak. <br /><br />Xorijiy
                fuqarolar bakalavriatga Vazirlar Mahkamasi huzuridagi Davlat test
                markazi tomonidan har yili 1 avgust kuni o‘tkaziladigan test
                sinovlari natijalari asosida qabul qilinadilar. Magistraturaga esa
                oliy ta’lim muassasalari tomonidan mustaqil ravishda tahminan 1-10
                avgust oralig‘ida tashkil etiladigan kirish imtihonlari natijasi
                asosida qabul qilinadilar. <br /><br />Xorijiy fuqarolarni talabalar
                safiga qabul qilish Vazirlar Mahkamasi huzuridagi O‘zbekiston
                Respublikasi Ta’lim muassasalariga qabul qilish bo‘yicha Davlat
                komissiyasining qarori asosida test sinovlari (bakalavriat uchun)
                yoki kirish imtihonlari (magistratura uchun) natijalariga ko‘ra
                amalga oshiriladi.
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>

      <b-col sm="12" lg="12">
        <b-card class="accCard">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.collapse-4
              variant="outline-primary"
              class="text-left accordion_btn"
            >
              <div class="d-flex justify-content-between">
                <p class="text">Xorijiy fuqarolarning o‘qish uchun to‘lovlari qanday tartibda amalga oshiriladi?</p>
                <img src="@/assets/images/new_design/add_circle.svg" alt="">
              </div>
            </b-button>
          </b-card-header>
          <b-collapse id="collapse-4" accordion="my-collapse" role="tabpanel">
            <b-card-body v-if="lang == 'ru'">
              <div class="accCard_body">
                Иностранные граждане принимаются на учёбу только на
                платно-контрактной основе, и сумма контракта является специально
                утвержденной для иностранных граждан. Оплата за обучение иностранных
                граждан осуществляется в свободно конвертируемой валюте, если иная
                валюта не предусмотрена межгосударственными соглашениями и
                контрактами. Вместе с этим иностранные граждане сдают поручение или
                квитанцию банка об осуществлении оплаты с сертификатом об обмене
                иностранной валюты на национальную. Исключением являются иностранные
                граждане, имеющие свидетельство о проживании в Республике
                Узбекистан.
                <br /><br />Оплата за обучение таких иностранных граждан
                осуществляется в свободно конвертируемой валюте, если иная валюта не
                предусмотрена межгосударственными соглашениями и контрактами. От них
                не требуется сертификат об обмене иностранной валюты на
                национальную.
              </div>
            </b-card-body>
            <b-card-body v-if="lang == 'uz_cyrl'">
              <div class="accCard_body">
                Хорижий фуқаролар ўқишга фақат тўлов-шартнома асосида қабул қилиниб,
                улар тўловларини хорижий фуқаролар учун белгиланган миқдорида амалга
                оширадилар. Хорижий фуқаролар ўқиш учун тўловларини чет ел валютаси
                еквивалентида, Марказий банк томонидан тўлов кунида белгиланган курс
                асосида миллий валютада амалга оширадилар. Шу билан бирга хорижий
                фуқаролар тўлов амалга оширилганлиги тўғрисидаги банк тўлов
                топшириқномаси ёки квитанцияси билан бирга Ўзбекистон Республикаси
                банкларида чет ел валютасини миллий валютага айирбошланганлиги
                тўғрисида сертификатни ҳам топширадилар.
                <br /><br />Ўзбекистон Республикасида яшаш гувоҳномасига ега бўлган
                хорижий фуқаролар бундан мустасно. Улар тўловларни чет ел валютаси
                еквивалентида, Марказий банк томонидан тўлов кунида белгиланган курс
                асосида, миллий валютада амалга ошириладилар. Улардан чет ел
                валютасини миллий валютага айирбошланганлиги тўғрисидаги сертификат
                талаб етилмайди.
              </div>
            </b-card-body>
            <b-card-body v-if="lang == 'uz_latn'">
              <div class="accCard_body">
                Xorijiy fuqarolar o‘qishga faqat to‘lov-shartnoma asosida qabul
                qilinib, ular to‘lovlarini xorijiy fuqarolar uchun belgilangan
                miqdorda amalga oshiradilar. Xorijiy fuqarolar o‘qish uchun
                to‘lovlarini chet el valyutasi ekvivalentida, Markaziy bank
                tomonidan to‘lov kunida belgilangan kurs asosida milliy valyutada
                amalga oshiradilar. Shu bilan birga xorijiy fuqarolar to‘lov amalga
                oshirilganligi to‘g‘risidagi bank to‘lov topshiriqnomasi yoki
                kvitantsiyasi bilan birga O‘zbekiston Respublikasi banklarida chet
                el valyutasini milliy valyutaga ayirboshlanganligi to‘g‘risida
                sertifikatni ham topshiradilar.
                <br /><br />O‘zbekiston Respublikasida yashash guvohnomasiga ega
                bo‘lgan xorijiy fuqarolar bundan mustasno. Ular to‘lovlarni chet el
                valyutasi ekvivalentida, Markaziy bank tomonidan to‘lov kunida
                belgilangan kurs asosida, milliy valyutada amalga oshiriladilar.
                Ulardan chet el valyutasini milliy valyutaga ayirboshlanganligi
                to‘g‘risidagi sertifikat talab etilmaydi.
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import statisticCount from "./statisticCount.vue";
export default {
  components: { statisticCount },
  data() {
    return {
      lang: localStorage.getItem("locale") || 'uz_latn',
    };
  },
  created(){
       console.log(localStorage.getItem("locale"))
    },
};
</script>

<style lang="scss">
.accCard {
  padding: 0px !important;
  border: none !important;
  background: rgba(0, 0, 0, 0.02);
  .card-body {
    padding: 0px !important;
  }
  .accCard_body {
    padding: 30px !important;
  }
}
</style>
