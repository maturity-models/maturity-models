# Locales ar gyfer prosiectau mawr gyda SvelteKit

Cyfieithu cynnwys i sawl locale.

Sut mae'r wefan hon yn cefnogi sawl locale o'r dechrau i'r diwedd: cynnwys,
llwybro gwe, cragen y rhyngwyneb (UI chrome), a chwilod.

Darllenwch y locales drwy'r ffeil `locales.tsv`.

Trefn blaenoriaeth codau locale:

- en-001
- en-us
- en-gb
- en-gb-oxendict
- cy-gb (yna copïo i cy-001)
- zh-cn (yna copïo i zh-001)
- ar-001
- hi-in (yna copïo i hi-001)

## Ffeil .locale-peer.id

Mae ffeil `.locale-peer-id` yn rhif hecsadegol llythrennau bach 32 nod, yn
union yr un fath bait-am-bait, wedi'i ddilyn gan linell newydd, ym mhob fersiwn
locale o "yr un" pwnc, waeth beth fo'r slug.

`.locale-peer-id` yw sut mae'r prosiect yn datrys "y dudalen hon, yn locale X".

## Arweiniad

- en-us: sillafu Americanaidd cyson; trwsio unrhyw ffurfiau en-gb crwydr (organisation→organization, licence→license, programme→program, cancelled→canceled, analogue→analog).

- en-gb: y teulu -ize/-ise (optimise, realise, organise, prioritise, utilise, ac ati), -or/-our (colour, behaviour, favour, labour, neighbours), -er/-re (centre, theatre yn yr ystyr drosiadol), -ense/-ce (defence, licence), ffurfiau L ddwbl (modelled, labelled, cancelled, enrol/enrolment), analogue, programme, a math→maths.

- en-gb-oxendict: defnyddio en-gb yna troi'r teulu -ise yn ôl i sillafiad Rhydychen -ize yn unig (optimize, realise→realize, organise→organize, ac ati), gan gadw'r ffurfiau -yse yn gywir heb eu newid (analyse/analysable), gan nad yw arddull Rhydychen byth yn defnyddio -yze, a chadw pob ffurf Brydeinig arall (colour, centre, defence, licence, programme, maths, modelled) yn gyfan.

## Gwarchod rhag llygru

Cadwch enwau priod heb eu trosi. Enghraifft: "Hospital Readmissions Reduction Program" (enw rhaglen ffederal go iawn yn yr Unol Daleithiau).

## Gwirio

Ar gyfer pob isgyfeiriadur locale:

- Mae'r ffeil yn bodoli: `index.md`
- Mae'r symlink yn bodoli: `README.md`
- Mae'r ffeil olrhain id cymar locale yn bodoli: `.locale-peer-id`

Yna:

- Trwsio unrhyw ddolenni mewnol toredig
- Trwsio unrhyw sillafiadau tafodiaith anghywir sy'n weddill
- Diweddaru `./spec/locale/index.md`

## Strwythur cynnwys (ochr y llyfr)

Mae pob locale yn `locales/<code>/` yn ystorfa'r llyfr, ac yn cynnwys:

- `locales/<code>/topics/<slug>/index.md` + `.locale-peer-id` — un i bob pwnc.
  Mae `README.md` yn symlink i `index.md`.
- `locales/<code>/index.md` + `.locale-peer-id` + symlink `README.md` — README
  wedi'i gyfieithu'r locale ei hun (ffynhonnell tudalen gartref/cynnwys y wefan).
  Mae pob locale yn cael y ffeil hon wedi'i sgaffaldio (yn cyfateb i batrwm ffeil
  y pynciau) hyd yn oed cyn iddi gael cyfieithiad; mae'n dechrau'n wag.

## Slugs

Mae slugs yn benodol i bob locale, ac nid ydynt yn cael eu rhannu. Mae locales
wedi'u cyfieithu yn ailenwi cyfeiriaduron pynciau i slugs yn yr wyddor frodorol
neu gydag acenion.

Enghraifft: `es-001` `año-de-vida-ajustado-por-calidad`, `ur-001` `صحت-ایڈجسٹڈ-متوقع-زندگی`.

Nid yw dim yn y wefan yn tybio bod slugs yn cyfateb ar draws locales.

## Dewisydd locale (labeli + trefn)

- Mae labeli yn byw yn `LOCALE_LABELS` yn `locales.js`, un cofnod i bob cod, yn yr
  iaith honno (e.e. `'fr-001': 'Français (Monde)'`). Mae'n disgyn yn ôl i'r cod
  crai drwy `localeLabel()` os nad oes label i god eto.
- Daw trefn `PickerBar` y pennawd o `locales()` yn `content.js` (wedi'i didoli
  yn ôl cod) — mae'r olddodiad `-001` yn digwydd didoli cyn unrhyw olddodiad
  rhanbarthol sy'n dechrau â llythyren, felly mae'r amrywiadau eisoes yn dod yn
  gyntaf yno.
- Mae rhestr locales y dudalen gartref (`+page.server.js`) yn didoli'n benodol:
  y locale rhagosodedig yn gyntaf, yna wedi'u grwpio yn ôl enw'r iaith (testun y
  label cyn y `(`), gyda'r amrywiad `-001`/World wedi'i ddidoli cyn ei
  gefndryd rhanbarthol o fewn pob grŵp, yna yn nhrefn yr wyddor yn ôl label.
  NID yw hyn yn dilyn yn naturiol o ddidoli yn ôl label yn nhrefn yr wyddor yn
  unig (e.e. "España" < "Mundo") — mae angen y gwiriad `-001` penodol.

## Atgyweiriadau chwilod (rhestr wylio atchweliad)

### Chwilen: roedd regexau `\w` ASCII yn unig yn torri pob slug nad yw'n Lladin/heb acenion

Chwilen: roedd slugs pynciau yn cael eu paru gyda `[\w.-]+` (nodau gair ASCII yn
unig). Roedd unrhyw locale â slug acennog neu yn yr wyddor frodorol (Sbaeneg,
Ffrangeg, Rwsieg, Tsieineeg, Arabeg, Cymraeg, Hindi, Bengaleg, Portiwgaleg,
Indoneseg, Wrdw) yn methu'n dawel â datrys id cymar a dolenni rhwng pynciau.

Atgyweiriad: ehangu'r grŵp dal slug i `[^/]+`.

### Chwilen: roedd tudalen gartref/cynnwys pob locale yn dangos y cynnwys Saesneg canonaidd

Chwilen: roedd y cod a'r cynnwys bob amser yn darllen un `/README.md` lefel
uchaf ar gyfer teitl, cyflwyniad, dewisiadau "New here?", penawdau rhannau, a
disgrifiadau byr — dim ond _dolenni_ pynciau a gâi eu lleoleiddio erioed.

Atgyweiriad: llenwi'r `locales/<code>/index.md` a oedd yn wag gynt ar gyfer pob locale.

## Chwilen: roedd tynnu dolenni wedi'i godio'n galed i ymadrodd Saesneg llythrennol

Chwilen: roedd y ddolen yn canfod dim yn dawel unwaith i'r README gael ei gyfieithu.

Atgyweiriad: tynnu pob dolen o'r bloc cyflwyniad cyfan cyn y `##` cyntaf yn lle
paru'r frawddeg Saesneg â regex.

### Chwilen: roedd cragen y UI wedi'i chodio'n galed yn Saesneg yn y templedi `.svelte`

Chwilen: labeli llywio, is-deitlau, teitlau tudalennau, cyflwyniadau, briwsion
bara, safle'r pwnc, tudalennu, labeli'r dewisydd/rhannu.

Atgyweiriad: ychwanegu `i18n.js` a phasio `ui(locale)` drwy bob llwybr
locale-benodol a `+layout.svelte`.

### Chwilen: arhosodd nod gair brand y pennawd/troedyn yn Saesneg

Chwilen: daeth nod y gair o'r `+layout.server.js` gwraidd yn unig (sy'n
ddiarwybod i locale), sy'n fwriadol byth yn dewis locale.

Atgyweiriad: gwneud i `locales/[locale]/+layout.server.js` ddarparu teitl y
locale hwn ei hun, sy'n goresgyn teitl canonaidd y gosodiad gwraidd drwy
`page.data` cyfunol SvelteKit ar unrhyw lwybr o dan `/locales/<locale>/` — mae'r
dewisydd gwraidd a `/about/` (dim locale yn yr URL) yn cadw'r teitl Saesneg
canonaidd yn gywir.

## Gohirio i'w wneud â llaw

Nod: cyfieithu ein prosiectau i locales; gweithio'n _olynol_, NID gydag isasiantau.

Gwirio bod gwefan y prosiect "https://<project>.github.io/" yn gweithio a bod gan y dudalen gyfieithiadau (a thrwsio unrhyw rai coll neu wallau):

- pennawd yr arwr (hero headline)
- is-bennawd yr arwr
- cyflwyniad un paragraff yr arwr
- os yw'r prosiect yn lily-design-system yna dangos eiconau fframweithiau
- brawddeg un-frawddeg yr arwr "Translations: " gyda rhestr wedi'i gwahanu gan atalnodau o endonymau locales cyfieithu *-001; enghraifft gan ddefnyddio'r locale en-001: "Translations: العربية, বাংলা, Cymraeg, Deutsch, English, Español, Français, हिन्दी, Bahasa Indonesia, 日本語, 한국어, Português, Русский, اردو, 中文"
- pob botwm pickerbar: mae hofran yn newid y lliw
- pob botwm pickerbar: mae'r gwymplen yn ymddangos o dan y botwm, ac nid yw'n symud y dudalen
- mae ganddo'r ffeil `https://<project>.github.io/sitemap.xml` sy'n fap safle XML o'r wefan

Ar gyfer pob locale yn y drefn hon:

- en-001
- en-us
- en-gb
- zh-cn yna copïo i zh-001
- hi-in yna copïo i hi-001
- cy-gb yna copïo i cy-001
- ar-001
- es-001
- fr-001
- ru-001
- bn-001
- id-001
- ja-jp yna copïo i ja-001
- ko-kr yna copïo i ko-001
- sw-tz yna copïo i sw-001
- sv-se yna copïo i sv-001
- nl-nl yna copïo i nl-001
- is-is yna copïo i is-001

Gwirio bod locale'r prosiect yn gweithio (a thrwsio unrhyw rai coll neu wallau)

- mae ganddo'r ffeil `/locales/<locale>/sitemap.xml` sy'n fap safle o lwybrau'r isgyfeiriaduron
- mae ganddo ei holl ffeiliau cynnwys
- mae pob isgyfeiriadur `/locales/<locale>/` yn cynnwys ffeil olrhain `.locale-peer-id`
- mae pob segment isgyfeiriadur `/locales/<locale>/` wedi'i gyfieithu i'r iaith a'r set nodau (nid ei drawslythrennu yn unig)

Os yw prosiect yn colli locale:

- creu'r locale a chyfieithu'r cynnwys yn olynol, NID gydag isasiantau.
- ymrwymo (commit) a gwthio (push) a chyhoeddi
- gwirio yn y porwr fod "https://<project>.github.io/<locale>/" yn rendro'r locale yn llwyddiannus.

Gwirio bod gwefan locale'r prosiect "https://<project>.github.io/<locale>/" yn gweithio a bod gan y dudalen gyfieithiadau (a thrwsio unrhyw rai coll neu wallau):

- pennawd yr arwr
- is-bennawd yr arwr
- cyflwyniad un paragraff yr arwr
- brawddeg un-frawddeg yr arwr "Translations: " gyda rhestr wedi'i gwahanu gan atalnodau o endonymau'r locales cyfieithu; enghraifft gan ddefnyddio'r locale en-001: "Translations: العربية, বাংলা, Cymraeg, Deutsch, English, Español, Français, हिन्दी, Bahasa Indonesia, 日本語, 한국어, Português, Русский, اردو, 中文"

Parhau nes bod y cyfan wedi'i gwblhau.

## Stopio

Mwy o locales:

- de-001
- pt-001
- ur-001
- bn-001
- da-001
- et-ee yna copïo i et-001
- id-id yna copïo i id-001
- fi-fi yna copïo i fi-001
- it-it yna copïo i it-001
- th-th yna copïo i th-001
- tr-tr yna copïo i tr-001
- vi-vn yna copïo i vi-001
- zh-tw

## Rhesymu dewis locale

Lle rwy'n byw:

- en-gb Saesneg - Prydain Fawr
- cy-gb Cymraeg - Prydain Fawr

3 uchaf y byd yn nhrefn nifer:

- en-us Saesneg - Unol Daleithiau
- zh-cn Tsieineeg - Tsieina
- hi-in Hindi - India

Ieithoedd gwaith y Cenhedloedd Unedig:

- en-us Saesneg - Unol Daleithiau
- zh-cn Tsieineeg - Tsieina
- es-es Sbaeneg - Sbaen
- fr-fr Ffrangeg - Ffrainc
- ar-eg Arabeg - yr Aifft
- ru-ru Rwsieg - Rwsia

Iaith waith Cymdeithas Cenhedloedd De-ddwyrain Asia (ASEAN):

- en-001 Saesneg

Ieithoedd gwaith yr Undeb Affricanaidd:

- ar-eg Arabeg - yr Aifft
- en-us Saesneg - Unol Daleithiau
- fr-fr Ffrangeg - Ffrainc
- es-es Sbaeneg - Sbaen
- pt-pt Portiwgaleg - Portiwgal
- sw-tz Swahili - Tanzania

Ledled y byd yn ôl poblogaeth gwlad:

- id-id Indoneseg - Indonesia
- pt-br Portiwgaleg - Brasil
- es-mx Sbaeneg - Mecsico

3 uchaf yr Undeb Ewropeaidd:

- de-de Almaeneg - yr Almaen
- fr-fr Ffrangeg - Ffrainc
- it-it Eidaleg - yr Eidal

3 uchaf APAC:

- id-id Indoneseg - Indonesia
- ja-jp Japaneeg - Japan
- vi-vn Fietnameg - Fietnam

3 uchaf y Nordig:

- sv-se Swedeg - Sweden
- da-dk Daneg - Denmarc
- fi-fi Ffinneg - y Ffindir

3 uchaf gwerth cyhoeddus:

- zh-tw Tsieineeg - Taiwan
- ko-kr Corëeg - De Corea
- nl-nl Iseldireg - yr Iseldiroedd

10 uchaf y byd yn nhrefn nifer:

- en-us Saesneg - Unol Daleithiau
- zh-cn Tsieineeg - Tsieina
- hi-in Hindi - India
- es-es Sbaeneg - Sbaen
- fr-fr Ffrangeg - Ffrainc
- ar-eg Arabeg - yr Aifft
- bn-bd Bengaleg - Bangladesh
- ru-ru Rwsieg - Rwsia
- pt-pt Portiwgaleg - Portiwgal
- ur-pn Wrdw - Pacistan

Argymhellion arweinyddiaeth llywodraeth iechyd cyhoeddus:

- da-dk Daneg - Denmarc
- et-ee Estoneg - Estonia

Gwledydd y Nordig yn nhrefn nifer:

- sv-se Swedeg - Sweden
- da-dk Daneg - Denmarc
- fi-fi Ffinneg - y Ffindir
- nb-no Norwyeg - Norwy
- is-is Islandeg - Gwlad yr Iâ

Gwledydd a'm croesawodd:

- vi-vn Fietnameg - Fietnam
- lo-la Laoseg - Laos
- km-kh Khmer - Cambodia
- th-th Thai - Gwlad Thai

3 uchaf y Celtiaid yn nhrefn agosrwydd:

- cy-cy Cymraeg - Cymru
- gd-gb Gaeleg yr Alban - yr Alban
- ga-ie Gwyddeleg - Iwerddon

Gogledd America:

- en-us
- es-mx
- fr-ca

Yr Undeb Ewropeaidd yn nhrefn nifer siaradwyr:

- de-de Almaeneg - yr Almaen
- fr-fr Ffrangeg - Ffrainc
- it-it Eidaleg - yr Eidal
- es-es Sbaeneg - Sbaen
- pl-pl Pwyleg - Gwlad Pwyl
- ro-ro Rwmaneg - Rwmania
- nl-nl Iseldireg - yr Iseldiroedd
- cs-cz Tsieceg - Tsiecia
- sv-se Swedeg - Sweden
- pt-pt Portiwgaleg - Portiwgal
- hu-hu Hwngareg - Hwngari
- de-at Almaeneg - Awstria
- el-gr Groeg - Gwlad Groeg
- bg-bg Bwlgareg - Bwlgaria
- da-dk Daneg - Denmarc
- fi-fi Ffinneg - y Ffindir
- sk-sk Slofaceg - Slofacia
- fr-be Ffrangeg - Gwlad Belg
- hr-hr Croateg - Croatia
- lt-lt Lithwaneg - Lithwania
- sl-si Slofeneg - Slofenia
- lv-lv Latfieg - Latfia
- et-ee Estoneg - Estonia
- el-cy Groeg - Cyprus
- lb-lu Lwcsembwrgeg - Lwcsembwrg
- mt-mt Malteg - Malta
- ga-ie Gwyddeleg - Iwerddon

Mwy o ieithoedd â 50M+ o siaradwyr yn nhrefn nifer:

- pa-001 ਪੰਜਾਬੀ Pwnjabeg
- mr-001 मराठी Marathi
- te-001 తెలుగు Telugu
- ha-001 Harshen Hausa Hawsa
- ta-001 தமிழ் Tamil
- fa-001 فارسی Perseg
- jv-001 Basa Jawa Jafaneg
- gu-001 ગુજરાતી Gwjarati
- bh-001 भोजपुरी Bhojpuri

Ieithoedd gorthrymedig:

- cy-gb Cymraeg Cymraeg
- eu-001 Euskara Basgeg

I'W WNEUD:

- hr-001 Hrvatski Croateg
- hu-001 Magyar Hwngareg
- tr-001 Türkçe Tyrceg
