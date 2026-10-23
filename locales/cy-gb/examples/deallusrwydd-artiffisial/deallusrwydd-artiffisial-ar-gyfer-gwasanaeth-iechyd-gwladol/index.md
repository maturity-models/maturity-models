# Model aeddfedrwydd AI ar gyfer Gwasanaeth Iechyd Gwladol

**Ymwadiad: Cynhyrchwyd y dudalen hon gan AI. Bwriedir y wybodaeth hon ar gyfer addysg at ddibenion cyffredinol ac ar gyfer gwasanaeth iechyd gwladol generig, ac NID yw ar gyfer defnydd cynhyrchu, NID ar gyfer unrhyw wasanaeth iechyd gwladol penodol, ac NID ar gyfer unrhyw ddiben meddygol.**

Cynnwys:
- [Lefelau'r model aeddfedrwydd](#lefelaur-model-aeddfedrwydd)
- [Sut i ddefnyddio'r model hwn](#sut-i-ddefnyddior-model-hwn)
- [Offer datblygwyr](#offer-datblygwyr)
- [Profi awtomatig](#profi-awtomatig)
- [Pensaernïaeth meddalwedd](#pensaernïaeth-meddalwedd)
- [Sicrhau ansawdd meddalwedd](#sicrhau-ansawdd-meddalwedd)
- [Argaeledd uchel meddalwedd](#argaeledd-uchel-meddalwedd)
- [Adfer ar ôl trychineb meddalwedd](#adfer-ar-ôl-trychineb-meddalwedd)
- [DevOps meddalwedd](#devops-meddalwedd)
- [Galluoedd gwasanaethau cwmwl](#galluoedd-gwasanaethau-cwmwl)
- [FinOps gwasanaethau cwmwl](#finops-gwasanaethau-cwmwl)
- [Dylunio sy'n canolbwyntio ar y defnyddiwr (UCD/UI/UX)](#dylunio-syn-canolbwyntio-ar-y-defnyddiwr-ucduiux)
- [AI yn ein cynhyrchion meddalwedd](#ai-yn-ein-cynhyrchion-meddalwedd)
- [AI yn ein dyfeisiau meddygol](#ai-yn-ein-dyfeisiau-meddygol)
- [Integreiddiadau ag EHR, EMR, ac ati.](#integreiddiadau-ag-ehr-emr-ac-ati)
- [Galluoedd gwerthwyr](#galluoedd-gwerthwyr)
- [Ysgrifenyddion amgylchynol](#ysgrifenyddion-amgylchynol)
- [Gweinyddu ysbytai](#gweinyddu-ysbytai)
- [Gweinyddu practis cyffredinol](#gweinyddu-practis-cyffredinol)
- [Adran gydymffurfio](#adran-gydymffurfio)
- [Adran gyllid](#adran-gyllid)
- [Adran gyfreithiol](#adran-gyfreithiol)
- [Adran adnoddau dynol](#adran-adnoddau-dynol)
- [Adran cysylltiadau cyhoeddus](#adran-cysylltiadau-cyhoeddus)
- [Seiberddiogelwch](#seiberddiogelwch)
- [Apiau a gwefannau ar gyfer cleifion](#apiau-a-gwefannau-ar-gyfer-cleifion)
- [Apiau a gwefannau ar gyfer darparwyr](#apiau-a-gwefannau-ar-gyfer-darparwyr)
- [Arweinyddiaeth system peirianneg meddalwedd](#arweinyddiaeth-system-peirianneg-meddalwedd)
- [Arweinyddiaeth system ymarferwyr meddygol](#arweinyddiaeth-system-ymarferwyr-meddygol)
- [Arweinyddiaeth system rhanddeiliaid y llywodraeth](#arweinyddiaeth-system-rhanddeiliaid-y-llywodraeth)
- [Sofraniaeth ddigidol](#sofraniaeth-ddigidol)
- [Uwchsgilio](#uwchsgilio)
- [Diswyddiadau](#diswyddiadau)
- [Nodiadau ar gwmpas](#nodiadau-ar-gwmpas)
- [Dyfyniadau](#dyfyniadau)
- [Dyfyniadau yn ôl maes ymarfer](#dyfyniadau-yn-ôl-maes-ymarfer)

## Lefelau'r model aeddfedrwydd

* Lefel 0: Dim, Byth, Dibwys, Amherthnasol.
* Lefel 1: Cychwyn, Chwilota, Ymhlyg, Unigolyn-ganolog, Defnydd anffurfiol.
* Lefel 2: Datblygu, Disgrifio, Dyblygu, Uniongyrchol-ganolog, Defnydd adrannol.
* Lefel 3: Safoni, Manylu, Graddio, Gwasanaeth-ganolog, Defnydd segment.
* Lefel 4: Rheoli, Mesur, Prif ffrydio, Cenhadaeth-ganolog, Defnydd torfol.
* Lefel 5: Cyfeirio, Optimeiddio, Tarddu, Cyfle-ganolog, Defnydd enfawr.

## Sut i ddefnyddio'r model hwn

* Sgoriwch bob maes ymarfer yn annibynnol. Mae gwasanaeth iechyd fel arfer ar lefel 4 mewn un maes ac ar lefel 1 mewn un arall, a'r anwastadrwydd hwnnw yw'r arwydd defnyddiol.
* Sgoriwch yr hyn sydd â thystiolaeth, nid yr hyn a ddymunir. Os yw rheolaeth yn bodoli ond nad yw'n cynhyrchu unrhyw arteffact, trinwch hi fel y lefel islaw.
* Darllenwch y lefelau fel rhai cronnol. Mae Lefel 4 yn tybio bod safonau lefel 3 yn dal i fod yn berthnasol, ac mae lefel 5 yn tybio bod mesurau lefel 4 yn dal i redeg.
* Trinwch feysydd rheoledig yn wahanol. Ar gyfer meysydd ymarfer clinigol a dyfeisiau, mae naid o lefel 1 i lefel 3 heb y gwaith llywodraethu rhyngddynt yn risg diogelwch, nid llwybr byr.
* Ailsgoriwch ar gylch sefydlog, megis yn flynyddol, fel bod y model yn mesur trywydd yn hytrach nag un foment.

## Offer datblygwyr

- **Lefel 0: Dim.** Nid oes cymorth AI yn bodoli yn y gadwyn offer datblygu meddalwedd, naill ai oherwydd na chafodd ei ystyried erioed neu oherwydd ei fod wedi'i flocio'n llwyr heb unrhyw lwybr at gymeradwyaeth. Mae peirianwyr yn ysgrifennu, yn adolygu ac yn ail-ffactorio'n gyfan gwbl heb gymorth.

    - Mae polisi rhwydwaith yn blocio pob pwynt terfyn model cyhoeddus ac nid oes proses eithrio.
    - Ni phrynwyd unrhyw drwyddedau cynorthwyydd codio AI erioed.
    - Nid oes datganiad polisi, felly mae timau'n tybio gwaharddiad ac yn hunanysgrifennu.

- **Lefel 1: Cychwyn.** Mae peirianwyr unigol yn arbrofi ar eu menter eu hunain, yn aml ar gyfrifon personol a'r tu allan i gaffael. Mae'r defnydd yn anweledig i'r sefydliad ac yn creu amlygiad gollwng data heb ei reoli.

    - Mae datblygwr yn gludo swyddogaeth cyfleustodau anghlinigol i sgwrsfot defnyddwyr i gael ail-ffactorio.
    - Mae un sgwad yn rhannu anogwyr defnyddiol mewn sgwrs grŵp heb gadw nac adolygu.
    - Nid oes telemetreg, felly ni all yr arweinyddiaeth ddweud faint o staff sy'n defnyddio offer AI.

- **Lefel 2: Datblygu.** Mae un neu ddwy adran yn prynu seddi ac yn ysgrifennu nodyn defnydd mewnol byr. Disgrifir yr arfer a'i ddyblygu tîm wrth dîm yn hytrach na bod yn gyson ar draws y sefydliad.

    - Mae cyfarwyddiaeth ddigidol yn prynu cronfa drwyddedau ar gyfer ei pheirianwyr ei hun yn unig.
    - Mae tudalen wici yn nodi i beidio byth â gludo data adnabyddadwy cleifion i anogwr.
    - Mae pob storfa yn cario ei ffeil anogwr neu reolau ei hun a gopïwyd â llaw.

- **Lefel 3: Safoni.** Manylir un gadwyn offer gymeradwy ar gyfer pob peirianneg: hunaniaeth menter, lletya o fewn awdurdodaeth, logio, a rhestr fodelau gymeradwy. Mae cod a gynorthwyir gan AI yn dilyn yr un pyrth adolygu, diogelwch a diogelwch clinigol ag unrhyw god arall.

    - Cyrchir cynorthwywyr trwy fewngofnodi sengl yn unig gyda logio archwilio fesul defnyddiwr a dim hyfforddi ar god a gyflwynwyd.
    - Mae ffeil rheolau storfa safonol yn amgodio safonau codio, rheolau codio diogel, a phatrymau gwaharddedig.
    - Mae sganio cyfrinachau a gwiriadau tarddiad dibyniaethau yn rhedeg ar bob cais tynnu a gynorthwyir gan AI.

- **Lefel 4: Rheoli.** Mesurir mabwysiadu ac ansawdd, nid eu tybio. Mae offer AI yn brif ffrwd ar draws pob tîm peirianneg, ac archwilir ei reolaethau ar yr un cylch â rheolaethau llywodraethu gwybodaeth eraill.

    - Mae dangosfyrddau'n olrhain cyfradd derbyn awgrymiadau, amser adolygu, a chyfradd diffygion ar ôl uno ar gyfer newidiadau a gynorthwyir gan AI.
    - Mae metadata cyflwyno yn cofnodi cymorth AI fel y gellir cymharu tueddiadau diffygion â gwaith heb gymorth.
    - Mae archwiliad mewnol blynyddol yn samplu newidiadau a gynorthwyir gan AI ar gyfer cydymffurfiaeth trwydded, diogelwch a diogelwch.

- **Lefel 5: Cyfeirio.** Mae'r sefydliad yn rhedeg ei blatfform datblygwyr wedi'i seilio ei hun, wedi'i diwnio i'w sylfeini cod, safonau diogelwch clinigol, a rheolau llywodraethu gwybodaeth, ac mae'n allforio'r gallu hwnnw i sefydliadau cyfoed.

    - Mae asiant mewnol wedi'i seilio ar storfeydd y sefydliad ei hun, penderfyniadau pensaernïaeth, a safonau codio.
    - Mae asiantau awtomataidd yn drafftio rhestrau gwirio diogelwch clinigol a diogelu data fel rhan o'r templed cais tynnu.
    - Cyhoeddir cyfluniadau cadwyn offer ailddefnyddiadwy i ymddiriedolaethau, byrddau a chyrff rhanbarthol eraill i'w hailddefnyddio.

## Profi awtomatig

- **Lefel 0: Dim.** Mae profi â llaw neu'n fychan iawn, ac nid yw AI yn chwarae unrhyw ran wrth gynhyrchu na chynnal profion. Cludir risg atchweliad gan bobl yn ail-redeg sgriptiau â llaw.

    - Mae profi rhyddhau yn rhestr wirio â llaw a weithredir gan ddadansoddwr QA.
    - Nid oes piblinell integreiddio parhaus yn rhedeg profion ar bob newid.
    - Copi hen yw data prawf heb broses adnewyddu na masgio ddiffiniedig.

- **Lefel 1: Cychwyn.** Mae unigolyn yn defnyddio AI i ddrafftio llond llaw o brofion ar gyfer cod y maent yn digwydd gweithio arno. Nid oes disgwyliad bod unrhyw un arall yn gwneud yr un peth.

    - Mae datblygwr yn cynhyrchu profion uned ar gyfer un gwasanaeth ac yn eu cyflwyno heb eu hadolygu.
    - Mae profion a gynhyrchir yn honni ymddygiad cyfredol yn hytrach nag ymddygiad bwriadedig, gan gloi namau i mewn.
    - Nid oes neb yn olrhain pa brofion a gynhyrchwyd gan AI.

- **Lefel 2: Datblygu.** Mae tîm yn mabwysiadu confensiwn disgrifiedig ar gyfer cynhyrchu profion a gynorthwyir gan AI ac yn ei gopïo i dimau cyfagos. Mae cwmpas yn gwella mewn pocedi, ac mae data prawf synthetig yn dechrau cael ei drafod fel cwestiwn llywodraethu.

    - Mae safon tîm yn gofyn i berson adolygu ac ailenwi pob prawf a gynhyrchir cyn uno.
    - Mae adran yn cynhyrchu cofnodion cleifion synthetig i'w profi yn hytrach na defnyddio echdyniadau byw wedi'u masgio.
    - Mae templed anogwr a rennir yn cynhyrchu profion yn arddull honiad dewisol y tîm.

- **Lefel 3: Safoni.** Manylir cynhyrchu profion, data prawf ac adolygu profion ledled y sefydliad a'u gorfodi yn y biblinell. Mae tystiolaeth profi yn addas i gyfeirio ati o ffeil risg glinigol lle mae'r meddalwedd yn cyffwrdd â gofal.

    - Mae piblinellau'n methu adeiladwaith islaw trothwy cwmpas a sgôr mwtaniad diffiniedig ni waeth sut yr ysgrifennwyd y profion.
    - Mae safon data synthetig yn manylu cynhyrchu, gwiriadau realaeth, a gwahardd ymdrechion ail-adnabod.
    - Mae profion cydymffurfio hygyrchedd a rhyngweithredadwyedd yn rhedeg yn awtomatig yn erbyn pob ymgeisydd rhyddhau.

- **Lefel 4: Rheoli.** Mesurir a rheolir effeithiolrwydd profion, ac mae asiantau profi AI yn rhedeg ar draws y stad wasanaeth gyfan. Mae tystiolaeth profi yn olrheiniadwy i achosion diogelwch a sicrwydd cyflenwyr.

    - Adroddir cyfradd diffygion a ddihangodd, cyfradd fflawiau, ac amser cymedrig i ganfod i fwrdd peirianneg yn fisol.
    - Mae asiantau AI yn didoli profion sy'n methu, yn clystyru dyblygion, ac yn cynnig perchnogion yn awtomatig.
    - Cynhyrchir pecynnau tystiolaeth profi yn awtomatig a'u hatodi i bob diweddariad achos diogelwch clinigol.

- **Lefel 5: Cyfeirio.** Mae profi yn barhaus, yn wrthwynebus ac yn hunan-wella. Defnyddir modelau i ymosod ar y system yn ogystal â'i gwirio, ac mae ymddygiad cynhyrchu yn bwydo'n ôl i gynhyrchu profion.

    - Mae asiantau tîm coch yn cynhyrchu mewnbynnau gwrthwynebus ac allan-o-ddosbarthiad ar gyfer nodweddion cymorth penderfyniadau clinigol.
    - Mae profion hunan-iachau yn trwsio dewiswyr a gosodiadau, ac yn tynnu sylw at newidiadau semantig ar gyfer penderfyniad dynol.
    - Mae telemetreg cynhyrchu yn cynnig profion atchweliad newydd yn awtomatig ar gyfer achosion ymylol na welwyd o'r blaen.

## Pensaernïaeth meddalwedd

- **Lefel 0: Dim.** Nid oes swyddogaeth bensaernïaeth. Mae systemau'n cronni ar ddamwain, nid oes neb yn dal golwg cyflwr cyfredol, ac nid oes strwythur y gellid gosod AI ynddo'n ddiogel.

    - Nid oes diagram cyflwr cyfredol o'r stad yn bodoli yn unman.
    - Mae pob prosiect yn dewis ei bentwr ei hun heb gyfeirio at unrhyw brosiect arall.
    - Mae systemau'n integreiddio trwy gyrraedd yn uniongyrchol i gronfeydd data ei gilydd.

- **Lefel 1: Cychwyn.** Mae pensaer unigol yn dogfennu'r hyn sy'n bodoli ac yn chwilota patrymau, ond heb fandad. Gellir anwybyddu cyngor heb ganlyniad.

    - Mae un person yn cynnal diagramau mewn ffeil bersonol nad yw eraill yn ei gweld.
    - Braslunir pensaernïaeth gyfeirio AI ond ni chaiff ei mabwysiadu byth gan dimau darparu.
    - Nid oes cofnodion penderfyniadau pensaernïaeth, felly ni ellir egluro dewisiadau'r gorffennol.

- **Lefel 2: Datblygu.** Mae adran yn disgrifio pensaernïaeth darged ac yn ei hailddefnyddio'n lleol. Mae ardaloedd cyfagos yn gwneud dewisiadau gwahanol, ac mae'r patrymau'n ymwahanu.

    - Mae cyfarwyddiaeth yn cyhoeddi diagram cyflwr targed sy'n berthnasol i'w rhaglenni ei hun yn unig.
    - Mae cofnodion penderfyniadau pensaernïaeth yn cychwyn ar un rhaglen ac yn stopio pan ddaw i ben.
    - Mae tri thîm yn ailadeiladu patrymau integreiddio tebyg ar wahân.

- **Lefel 3: Safoni.** Manylir egwyddorion pensaernïaeth, dyluniadau cyfeirio a chofnodion penderfyniadau ledled y sefydliad, gyda swyddogaeth adolygu sydd ag awdurdod go iawn. Mae'r bensaernïaeth gyfeirio AI yn benodol am y porth, adfer, gwerthuso, monitro a goruchwylio dynol.

    - Rhaid i unrhyw wasanaeth AI ddilyn pensaernïaeth gyfeirio orfodol sy'n cwmpasu porth, harnais gwerthuso, logio a chynllun wrth gefn.
    - Mae cofnodion penderfyniadau pensaernïaeth yn ofynnol, yn cael eu hadolygu ac yn cael eu cadw fel yr eglurhad swyddogol.
    - Mae cyplu i systemau clinigol yn mynd trwy ryngwynebau safonol, fel y gellir disodli model heb gyffwrdd â'r cofnod claf.

- **Lefel 4: Rheoli.** Mesurir iechyd pensaernïol yn hytrach na'i ddadlau. Olrheinir cydymffurfiaeth, cyplu, dyled dechnegol ac eithriadau, ac mae risg pensaernïaeth yn cyrraedd y bwrdd gyda chynlluniau adfer ynghlwm.

    - Gwirir cydymffurfiaeth ag egwyddorion yn awtomatig mewn piblinellau yn hytrach nag mewn cyfarfod.
    - Mae cofrestr eithriadau yn cofnodi pob gwyriad gyda pherchennog a dyddiad dod i ben.
    - Adroddir dyled dechnegol a risg pensaernïol ochr yn ochr â risg ariannol a chlinigol.

- **Lefel 5: Cyfeirio.** Cyfeirir pensaernïaeth ar draws sefydliadau ac fe'i dyluniwyd i esblygu. Cyfrannir dyluniadau cyfeirio yn genedlaethol, a phrofir amnewidioldeb mewn cynhyrchu yn hytrach na'i hawlio.

    - Mae pensaernïaeth gyfeirio a rennir yn cael ei hailddefnyddio gan sefydliadau cyfoed yn hytrach na bod pob un yn ysgrifennu ei phen ei hun.
    - Mae swyddogaethau ffitrwydd awtomataidd yn profi'n barhaus y nodweddion pensaernïol sy'n bwysig, megis hwyrni, ynysu a hygludedd.
    - Dangosir dylunio model-agnostig trwy gyfnewid darparwyr casglu mewn cynhyrchu heb newid gwasanaeth.

## Sicrhau ansawdd meddalwedd

- **Lefel 0: Dim.** Nid oes swyddogaeth sicrhau ansawdd. Caiff diffygion eu canfod gan ddefnyddwyr, sydd mewn gwasanaeth iechyd yn golygu clinigwyr yn eu darganfod yng nghanol shifft.

    - Nid oes system olrhain diffygion yn bodoli.
    - Nid oes diffiniad o orffen na meini prawf rhyddhau.
    - Mae rhyddhau yn mynd yn fyw heb ei brofi ac yn cael ei drwsio'n adweithiol.

- **Lefel 1: Cychwyn.** Mae unigolyn yn cymhwyso safonau personol i beth bynnag y maent yn digwydd gweithio arno. Mae trylwyredd yn dibynnu'n llwyr ar bwy sy'n cael ei neilltuo.

    - Mae un profwr yn cwmpasu un prosiect tra nad oes gan eraill ddim.
    - Mae profi archwiliadol yn ad hoc ac heb ei gofnodi.
    - Nid oes dimensiwn clinigol i ddifrifoldeb diffygion, felly mae mater diogelwch yn ciwio y tu ôl i un cosmetig.

- **Lefel 2: Datblygu.** Mae adran yn diffinio proses ansawdd gyda meini prawf mynediad a gadael disgrifiedig. Mae'n gweithio'n lleol ac nid yw'n trosglwyddo.

    - Mae cynlluniau prawf a thriniaeth diffygion yn bodoli o fewn un gyfarwyddiaeth.
    - Disgrifir graddfa difrifoldeb ond caiff ei dehongli'n wahanol gan wahanol dimau.
    - Mae profi derbyn gan ddefnyddwyr yn cynnwys llond llaw o glinigwyr parod.

- **Lefel 3: Safoni.** Manylir sicrhau ansawdd ar draws y sefydliad, gyda graddio risg glinigol o ddiffygion, pyrth rhyddhau diffiniedig, olrheiniadwyedd o ofyniad i brawf i achos diogelwch, a meini prawf derbyn penodol ar gyfer ymddygiad AI.

    - Mae pob diffyg yn cario gradd difrifoldeb clinigol a adolygir gan swyddog diogelwch clinigol.
    - Mae pyrth rhyddhau yn blocio ar ddiffygion clinigol difrifoldeb uchel agored ni waeth beth yw'r pwysau darparu.
    - Rhaid i nodweddion AI fodloni trothwyon dogfenedig ar gyfer cywirdeb, gwrthod priodol, a chyfradd honiadau heb eu cefnogi cyn eu rhyddhau.

- **Lefel 4: Rheoli.** Mesurir ansawdd ar draws y cylch oes, gan gynnwys mewn cynhyrchu, ac mae'n berthnasol yn gyfartal i feddalwedd fewnol a meddalwedd cyflenwyr.

    - Mae diffygion a ddihangodd ac unrhyw ddigwyddiadau clinigol y gellir eu holrhain i feddalwedd yn cael eu tueddu gyda themâu gwraidd y broblem.
    - Mae swît gwerthuso AI yn rhedeg fesul rhyddhad a fesul fersiwn model, a chedwir y canlyniadau fel tystiolaeth sicrwydd.
    - Mesurir meddalwedd cyflenwyr ar yr un raddfa ansawdd â meddalwedd a adeiladwyd yn fewnol.

- **Lefel 5: Cyfeirio.** Mae ansawdd yn barhaus ac yn cael ei ddeall yn economaidd, gyda chynhyrchu ei hun yn gweithredu fel yr amgylchedd gwerthuso o dan reolaeth.

    - Mae modelau ymgeisiol yn cael eu gwerthuso mewn cysgod yn erbyn traffig byw cyn unrhyw ddyrchafiad.
    - Mae signalau cynhyrchu yn cynhyrchu achosion atchweliad yn awtomatig ar gyfer mewnbynnau na welwyd o'r blaen.
    - Meintiolir cost ansawdd gwael mewn termau clinigol ac ariannol a'i ddefnyddio mewn penderfyniadau buddsoddi.

## Argaeledd uchel meddalwedd

- **Lefel 0: Dim.** Mae pwyntiau unigol o fethiant ym mhobman ac mae toriadau'n cael eu trin fel arferol. Mae gwasanaethau clinigol yn amsugno'r tarfu â llaw.

    - Mae systemau hanfodol yn rhedeg ar un gweinydd heb unrhyw ddiangen.
    - Nid oes targedau argaeledd ar gyfer unrhyw system.
    - Darganfyddir toriadau pan fydd wardiau'n ffonio'r ddesg wasanaeth.

- **Lefel 1: Cychwyn.** Mae unigolyn yn ffurfweddu enghraifft wrth gefn ar gyfer un system. Nid yw erioed wedi'i phrofi ac nid oes neb arall yn ei deall.

    - Mae enghraifft eilaidd yn bodoli ond ni cheisiwyd newid iddi erioed.
    - Mae monitro'n cynnwys e-byst rhybudd i flwch derbyn un peiriannydd.
    - Ni chytunwyd ar unrhyw darged argaeledd gydag unrhyw wasanaeth clinigol.

- **Lefel 2: Datblygu.** Mae adran yn diffinio gofynion argaeledd ar gyfer ei systemau ei hun ac yn copïo'r patrwm. Mae'r cwmpas yn dameidiog ar draws y sefydliad.

    - Mae un system glinigol yn rhedeg ar gronfa ddata glwstwr tra nad yw systemau cyfagos.
    - Disgrifir ffenestri cynnal a chadw ond nid ydynt wedi'u cydlynu ar draws gwasanaethau.
    - Mae rota ar alwad yn bodoli'n lleol heb safon ledled y sefydliad.

- **Lefel 3: Safoni.** Manylir haenau argaeledd yn ôl hanfodolrwydd clinigol, gyda diangen cyfatebol, newid prawf, a diraddio dogfenedig gan gynnwys cynllun wrth gefn nad yw'n ddigidol. Dyluniwyd gwasanaethau AI fel nad yw eu habsenoldeb byth yn atal gofal.

    - Caiff pob system ei dosbarthu yn ôl hanfodolrwydd clinigol gyda tharged argaeledd cyfatebol a threfniant ar alwad.
    - Mae nodweddion AI yn methu'n ddiogel, ac mae'r llif gwaith clinigol yn parhau hebddynt yn hytrach na rhwystro.
    - Cedwir gweithdrefnau amser segur, gan gynnwys ffurflenni papur, a'u hymarfer gan y timau clinigol a fyddai'n eu defnyddio.

- **Lefel 4: Rheoli.** Mesurir argaeledd yn erbyn targedau cyhoeddedig, mapir dibyniaethau gan gynnwys darparwyr model trydydd parti, a mynegir effaith digwyddiadau yn glinigol yn hytrach na dim ond mewn munudau.

    - Mesurir argaeledd a hwyrni yn erbyn lefelau gwasanaeth, gan gynnwys pwyntiau terfyn casglu allanol.
    - Mae mapiau dibyniaeth yn nodi cydrannau a rennir a fyddai'n dod â sawl system glinigol i lawr ar unwaith pe baent yn methu.
    - Mae adolygiadau digwyddiadau yn cofnodi effaith glinigol megis apwyntiadau a darfwyd arnynt neu weithdrefnau a ohiriwyd.

- **Lefel 5: Cyfeirio.** Cyfeirir gwydnwch: aml-ranbarth, yn diraddio'n osgeiddig, yn cael ei brofi'n barhaus, ac yn cael ei gefnogi gan gymorth cydfuddiannol ar draws sefydliadau.

    - Mae arbrofion anhrefn rheoledig yn rhedeg yn erbyn cynhyrchu i brofi rhagdybiaethau gwydnwch.
    - Mae gwasanaethau'n diraddio'n awtomatig i set nodweddion lai ond diogel pan fydd darparwr model yn methu.
    - Mae trefniadau cymorth cydfuddiannol rhanbarthol yn cwmpasu gwasanaethau hanfodol pan fydd un sefydliad yn colli gallu.

## Adfer ar ôl trychineb meddalwedd

- **Lefel 0: Dim.** Nid oes gallu adfer ar ôl trychineb. Mae copïau wrth gefn yn absennol neu heb eu gwirio, felly byddai digwyddiad seiber neu seilwaith difrifol yn anadferadwy.

    - Ni phrofwyd adferiad yn llwyddiannus erioed.
    - Nid oes amcanion amser adfer nac amcanion pwynt adfer.
    - Mae copïau wrth gefn ar-lein a byddent yn cael eu hamgryptio ynghyd â phopeth arall mewn digwyddiad ransomware.

- **Lefel 1: Cychwyn.** Mae unigolyn yn cymryd copïau wrth gefn ar ei fenter ei hun. Nid oes neb wedi cadarnhau y gellir adfer unrhyw beth ohonynt mewn gwirionedd.

    - Mae un peiriannydd yn rhedeg sgript copi wrth gefn ar amserlen a osododd ei hun.
    - Ni cheisiwyd adfer erioed, hyd yn oed yn rhannol.
    - Nid oes copi all-lein na digyfnewid.

- **Lefel 2: Datblygu.** Mae adran yn dogfennu amcanion a gweithdrefnau adfer ar gyfer ei systemau ei hun, ac yn eu profi o bryd i'w gilydd.

    - Datgenir amcanion adfer ar gyfer un system glinigol.
    - Mae llyfr rhedeg adfer yn bodoli ond mae'n hen o'i gymharu â'r seilwaith cyfredol.
    - Perfformiwyd prawf adfer rhannol unwaith ac ni chafodd ei ailadrodd.

- **Lefel 3: Safoni.** Manylir adfer ar ôl trychineb yn ôl hanfodolrwydd clinigol, gyda chopïau wrth gefn digyfnewid ac all-lein, cynlluniau dogfenedig wedi'u profi, ac adfer asedau AI yn benodol, nid cronfeydd data yn unig.

    - Mae copïau wrth gefn digyfnewid, ynysig gydag adferiadau wedi'u profi yn cwmpasu pob system glinigol hanfodol.
    - Mae cynlluniau adfer yn cynnwys arteffactau model, mynegeion adfer, anogwyr, cyfluniadau, a llinellau sylfaen gwerthuso.
    - Ymarferir gweithdrefnau amser segur ac adfer clinigol gyda'r gwasanaethau a fyddai'n dibynnu arnynt.

- **Lefel 4: Rheoli.** Dangosir gallu adfer yn hytrach na'i honni, ei ymarfer ar amserlen, ac adroddir arno lle mae'n bwysig, gan gynnwys mewn cyflwyniadau sicrwydd seiber.

    - Mae ymarferion adfer ar raddfa lawn yn mesur amseroedd adfer gwirioneddol yn erbyn yr amcanion a ddatganwyd.
    - Cyflenwir tystiolaeth adfer fel rhan o sicrwydd seiber cenedlaethol yn hytrach na'i chydosod ad hoc.
    - Profir gallu adfer cyflenwyr yn erbyn contract, nid ei dderbyn ar sail dogfen bolisi.

- **Lefel 5: Cyfeirio.** Cyfeirir parhad ar draws y system iechyd, gydag ailadeiladu awtomataidd ac ymarferion system gyfan sy'n cynnwys senarios ymosodiad a alluogir gan AI.

    - Ailadeiladir seilwaith a gwasanaethau AI o gofrestrfeydd cod ac arteffactau o fewn amser mesuredig, ailadroddadwy.
    - Mae ymarferion rhanbarthol yn efelychu colli darparwr a rennir neu westeiwr model sy'n effeithio ar lawer o sefydliadau ar unwaith.
    - Cyhoeddir dysgu adfer a'i ailddefnyddio ar draws y system iechyd yn hytrach na'i gadw'n fewnol.

## DevOps meddalwedd

- **Lefel 0: Dim.** Nid oes arfer DevOps. Mae defnyddio â llaw, mae timau mewn seilos, ac mae rheoli newid yn giw yn hytrach na gallu.

    - Perfformir rhyddhau â llaw y tu allan i oriau gan unigolyn penodol.
    - Nid oes gan ddatblygwyr welededd o ymddygiad cynhyrchu.
    - Y bwrdd cynghori newid yw'r unig reolaeth ystyrlon ar unrhyw newid.

- **Lefel 1: Cychwyn.** Mae unigolyn yn awtomeiddio adeiladwaith neu'n ysgrifennu sgript ddefnyddio. Mae popeth o'i gwmpas yn parhau i fod â llaw.

    - Mae gan un storfa biblinell tra nad oes gan y gweddill.
    - Mae cyfluniad amgylchedd yn cael ei gymhwyso â llaw ac yn wahanol rhwng amgylcheddau.
    - Nid yw arteffactau wedi'u fersiynu, felly nid yw'n glir beth sy'n rhedeg mewn gwirionedd.

- **Lefel 2: Datblygu.** Mae tîm yn safoni integreiddio a darparu parhaus iddo'i hun ac yn disgrifio'r broses. Mae timau eraill yn gwneud rhywbeth gwahanol.

    - Mae adeiladu a phrofi awtomataidd yn bodoli mewn un tîm yn unig.
    - Darperir amgylcheddau o sgript a rennir y mae'r tîm hwnnw'n unig yn ei chynnal.
    - Mae defnyddio yn dal i fod angen sawl cam cymeradwyo â llaw.

- **Lefel 3: Safoni.** Manylir platfform darparu ar gyfer pob tîm: seilwaith fel cod, piblinellau awtomataidd, cydraddoldeb amgylchedd, rheoli cyfrinachau, a rheoli newid sy'n integreiddio â diogelwch clinigol yn lle ei osgoi.

    - Darperir pob amgylchedd o god, gyda drifft yn cael ei ganfod a'i gywiro'n awtomatig.
    - Defnyddir fersiynau model, anogwyr a mynegeion adfer fel arteffactau wedi'u fersiynu gyda'r un trylwyredd â chod rhaglen.
    - Cynhyrchir tystiolaeth newid a diogelwch clinigol yn awtomatig gan y biblinell yn hytrach na'i hysgrifennu wedyn.

- **Lefel 4: Rheoli.** Mesurir perfformiad darparu a sefydlogrwydd gweithredol a gweithredir arnynt, ac mae'r arfer yn gyson ar draws y stad beirianneg gyfan.

    - Adroddir amlder defnyddio, amser arweiniol ar gyfer newid, cyfradd methiant newid, ac amser i adfer a'u defnyddio i flaenoriaethu gwaith.
    - Mae darparu cynyddol gydag ôl-gylch awtomataidd yn cwmpasu nodweddion AI, fel y tynnir fersiwn model gwael yn ôl yn gyflym.
    - Mae arfer ar alwad ac adolygu digwyddiadau heb feio yn gyson ar draws timau yn hytrach na bod yn benodol i dîm.

- **Lefel 5: Cyfeirio.** Cyfeirir peirianneg platfform: llwybrau aur hunanwasanaeth, cydymffurfiaeth barhaus, a phlatfform digon da fel bod sefydliadau eraill yn ei fabwysiadu.

    - Mae templed llwybr aur yn cludo gwasanaeth AI cydymffurfiol gyda phorth, gwerthuso, monitro a chofnod tryloywder eisoes wedi'u gwifrio i mewn.
    - Cynhyrchir tystiolaeth cydymffurfiaeth yn barhaus gan y platfform yn hytrach na'i chydosod ar gyfer pob archwiliad.
    - Cynigir y platfform fel gwasanaeth i sefydliadau cyfoed yn y system iechyd.

## Galluoedd gwasanaethau cwmwl

- **Lefel 0: Dim.** Mae popeth yn rhedeg ar y safle heb strategaeth gwmwl na sgiliau cwmwl. Mae caffael, cyllido a modelau gweithredu i gyd yn tybio caledwedd a berchenogir.

    - Mae llwythi gwaith hanfodol yn rhedeg ar galedwedd ar y safle sy'n heneiddio y tu hwnt i'w oes a gefnogir.
    - Nid oes gan unrhyw aelod o staff ardystiad na phrofiad cwmwl.
    - Mae achosion busnes yn tybio pryniant cyfalaf ac ni allant ddarparu ar gyfer prisio defnydd.

- **Lefel 1: Cychwyn.** Mae un prosiect unigol yn defnyddio cyfrif cwmwl yn anffurfiol, y tu allan i unrhyw lywodraethu neu barth glanio.

    - Agorir tanysgrifiad ar gerdyn talu adrannol.
    - Nid oes parth glanio, tagio, na logio canolog.
    - Nid oes neb y tu allan i'r prosiect yn gwybod bod y cyfrif yn bodoli.

- **Lefel 2: Datblygu.** Mae adran yn adeiladu ôl troed cwmwl ac yn disgrifio ei rheolaethau ei hun. Mae sgiliau a gwybodaeth gyda nifer fach o bobl.

    - Mae un gyfarwyddiaeth yn rhedeg llwythi gwaith mewn un cyfrif darparwr gyda chonfensiynau lleol.
    - Disgrifir llinell sylfaen ddiogelwch mewn dogfen ond nid yw'n cael ei gorfodi'n dechnegol.
    - Mae dau beiriannydd yn dal yr holl wybodaeth weithredol.

- **Lefel 3: Safoni.** Manylir a gorfodir parthau glanio, llinellau sylfaen diogelwch, hunaniaeth, rhwydwaith, a rheolaethau preswyliad data, wedi'u halinio â chanllawiau cwmwl a diogelwch cwmwl cenedlaethol, gyda llwybr cymeradwy ar gyfer lletya neu ddefnyddio gwasanaethau AI.

    - Mae parthau glanio yn gorfodi amgryptio, logio, tagio, a rhanbarthau a ganiateir trwy bolisi yn hytrach na chonfensiwn.
    - Mae patrymau cymeradwy yn bodoli ar gyfer cysylltedd preifat â phwyntiau terfyn casglu, fel nad yw anogwyr a data yn croesi'r rhyngrwyd cyhoeddus yn ddiangen.
    - Mae asesu risg cwmwl yn dilyn egwyddorion diogelwch cwmwl cydnabyddedig, gydag unrhyw all-draethu data yn cael ei asesu a'i gofnodi'n benodol.

- **Lefel 4: Rheoli.** Mesurir a rheolir osgo cwmwl, cydymffurfiaeth, gallu, a risg crynodiad, ac mae'r stad AI o fewn cyfrifon cwmwl wedi'i rhestru'n llawn.

    - Mae rheoli osgo diogelwch cwmwl yn canfod drifft ac yn gorfodi canllawiau diogelu yn awtomatig.
    - Mae cynllun gallu yn olrhain staff ardystiedig ac yn lleihau risg person allweddol yn fwriadol.
    - Mae pob gwasanaeth AI ym mhob cyfrif wedi'i restru gyda pherchennog, diben, a dosbarthiad data.

- **Lefel 5: Cyfeirio.** Cyfeirir gallu aml-ddarparwr gyda hygludedd profedig, gan roi safbwynt negodi gwirioneddol i'r sefydliad a llwyfannau a rennir ar draws y system.

    - Profir bod llwythi gwaith a gwasanaethau AI yn hygludadwy ar draws darparwyr o fewn amser newid mesuredig.
    - Mae negodi masnachol yn dechrau o amnewidioldeb a ddangoswyd yn hytrach na gobaith.
    - Mae llwyfannau rhanbarthol a rennir yn dileu costau adeiladu a rhedeg dyblyg ar draws sefydliadau.

## FinOps gwasanaethau cwmwl

- **Lefel 0: Dim.** Mae gwariant cwmwl a chasglu yn anweledig ac heb ei reoli. Mae biliau'n cyrraedd fel syrpreisys ac nid oes neb yn berchen arnynt.

    - Nid oes dyraniad costau i wasanaethau, timau, na meysydd clinigol.
    - Nid oes rhagolwg o wariant cwmwl nac AI.
    - Nid oes unrhyw unigolyn yn atebol am gost cwmwl.

- **Lefel 1: Cychwyn.** Mae unigolyn yn edrych ar y bil pan fydd yn edrych yn fawr. Nid oes disgyblaeth y tu ôl iddo.

    - Mae peiriannydd yn gwirio consol y darparwr o bryd i'w gilydd am eitemau llinell mawr.
    - Mae adnoddau heb eu tagio, felly ni ellir priodoli costau.
    - Adroddir gwariant ar ôl y ffaith heb olwg ymlaen.

- **Lefel 2: Datblygu.** Mae adran yn adrodd ei chostau ei hun ac yn disgrifio rheolaethau sylfaenol. Mae'r arfer yn anghyson a phrynir ymrwymiadau yn fanteisgar.

    - Mae adroddiad cost misol yn cwmpasu un gyfarwyddiaeth yn unig.
    - Cymhwysir tagio'n anghyson ac nid yw'n cael ei orfodi.
    - Prynir gostyngiadau neilltuedig neu ddefnydd-ymrwymedig ad hoc heb gynllun cwmpas.

- **Lefel 3: Safoni.** Manylir dyraniad costau, tagio, cyllidebau, rhybuddio, ac economeg uned ledled y sefydliad, a thrinnir casglu AI fel cost a reolir o'r radd flaenaf yn hytrach nag un anweledig.

    - Gorfodir tagio wrth ddarparu, ac adroddir gwariant heb ei ddyrannu fel diffyg gyda pherchennog.
    - Mae cyllidebau a rhybuddion anghysondeb yn cael eu cyfeirio'n awtomatig at berchnogion gwasanaeth enwedig yn hytrach nag i flwch post a rennir.
    - Diffinnir ac olrheinir cost uned, megis cost fesul casgliad, fesul dogfen a brosesir, neu fesul ymgynghoriad a gefnogir, ochr yn ochr ag ansawdd.

- **Lefel 4: Rheoli.** Mesurir a rheolir cost ar y cyd gan gyllid a pheirianneg o'r un rhifau, gyda gwastraff yn cael ei adfer yn weithredol a gwerth yn cael ei brofi.

    - Adroddir cywirdeb rhagolwg, cwmpas ymrwymiad, a gwastraff yn fisol i gyllid a pheirianneg gyda'i gilydd.
    - Mae penderfyniadau cyfeirio model yn pwyso cost ac ansawdd mesuredig gyda'i gilydd, gyda'r dystiolaeth wedi'i chofnodi.
    - Caiff adnoddau segur, rhy fawr, a diymgeledd eu nodi a'u hadfer ar amserlen ddiffiniedig.

- **Lefel 5: Cyfeirio.** Awtomeiddir optimeiddio ac mae penderfyniadau'n seiliedig ar werth, gyda phrynu wedi'i gydlynu ar draws sefydliadau i wella telerau ar gyfer y system gyfan.

    - Mae cyfeirio awtomataidd yn anfon pob cais at y model lleiaf costus sy'n bodloni'r trothwy ansawdd mesuredig ar gyfer y dasg honno.
    - Mae penderfyniadau buddsoddi yn pwyso cost yn erbyn canlyniad clinigol ac amser staff a ryddhawyd, nid cost yn unig.
    - Mae prynu cyfun ar draws sefydliadau yn sicrhau telerau masnachol gwell nag y gallai unrhyw un sefydliad eu cael.

## Dylunio sy'n canolbwyntio ar y defnyddiwr (UCD/UI/UX)

- **Lefel 0: Dim.** Nid oes arfer dylunio. Adeiledir rhyngwynebau i fanyleb ysgrifenedig heb gysylltiad â'r bobl a fydd yn eu defnyddio, a thrinnir methiannau defnyddioldeb fel problemau hyfforddi.

    - Ni chyflogir na chontractir unrhyw ddylunwyr nac ymchwilwyr defnyddwyr.
    - Casglir gofynion unwaith, gan reolwr, ac ni chânt eu hailymweld â defnyddwyr byth.
    - Atebir cwynion am sgriniau anaddas i'w defnyddio gyda mwy o hyfforddiant.

- **Lefel 1: Cychwyn.** Mae unigolyn yn gwella sgriniau'n anffurfiol yn seiliedig ar ba bynnag adborth sy'n eu cyrraedd. Ni chofnodir na chyffredinolir dim.

    - Mae datblygwr yn ailddylunio sgrin ar ôl un gŵyn.
    - Mae clinigwr yn braslunio cynllun dewisol a weithredir heb ei brofi.
    - Ni ysgrifennir na rennir unrhyw ganfyddiadau ymchwil.

- **Lefel 2: Datblygu.** Mae adran yn cynnal ymchwil defnyddwyr a phrofi defnyddioldeb ar gyfer ei chynhyrchion ei hun ac yn disgrifio ei dull. Mae'r canfyddiadau'n aros yn lleol.

    - Mae cyfarwyddiaeth yn cynnal sesiynau defnyddioldeb gyda nifer fach o glinigwyr.
    - Drafftir personâu ar gyfer un gwasanaeth ac ni chânt eu hailddefnyddio.
    - Storir canfyddiadau ymchwil ar yriant tîm ac ni chyrhaeddant dimau eraill byth.

- **Lefel 3: Safoni.** Manylir dylunio sy'n canolbwyntio ar y defnyddiwr o fewn y cylch oes darparu, gydag ymchwil yn cynnwys cleifion a staff go iawn, system ddylunio hygyrch a rennir, a dylunio penodol ar gyfer goruchwyliaeth ddynol o AI.

    - Mae system ddylunio yn darparu cydrannau hygyrch, cyson y mae pob tîm yn eu defnyddio yn hytrach nag yn eu hailddyfeisio.
    - Dyluniwyd rhyngwynebau AI i ddangos ansicrwydd a tharddiad, ac i wneud anghytuno â'r AI yn hawdd ac yn gyflym.
    - Mae ymchwil yn fwriadol yn cynnwys pobl ag anghenion mynediad, hyder digidol isel, a hyfedredd cyfyngedig yn yr iaith leol.

- **Lefel 4: Rheoli.** Mesurir defnyddioldeb a baich ar draws y portffolio, archwilir hygyrchedd ar amserlen, a phrofir tuedd awtomeiddio yn hytrach na'i gwrthod.

    - Mesurir llwyddiant tasg, amser ar dasg, cyfradd gwallau, a baich gwybyddol clinigwyr cyn ac ar ôl rhyddhau.
    - Trefnir archwiliadau hygyrchedd, ac olrheinir canfyddiadau hyd at eu cau fel unrhyw ddiffyg arall.
    - Mae sesiynau defnyddioldeb yn fwriadol yn cynnwys achosion lle mae'r AI yn anghywir, i arsylwi a yw defnyddwyr yn ei ddal.

- **Lefel 5: Cyfeirio.** Cyfeirir arweinyddiaeth dylunio ar draws y system, gyda chyd-gynhyrchu parhaus, patrymau rhyngweithio cyhoeddedig, a thystiolaeth dylunio yn cario pwysau go iawn mewn penderfyniadau buddsoddi.

    - Mae panel sefydlog o gleifion a staff yn llywio'r map ffordd yn barhaus yn hytrach na chael ei ymgynghori unwaith.
    - Cyhoeddir patrymau ar gyfer rhyngweithio dynol-AI diogel a'u hailddefnyddio ar draws y system iechyd.
    - Mae tystiolaeth dylunio yn eistedd ochr yn ochr â thystiolaeth dechnegol ac ariannol pan wneir penderfyniadau buddsoddi.

## AI yn ein cynhyrchion meddalwedd

- **Lefel 0: Dim.** Nid oes unrhyw gynnyrch yn y portffolio yn cynnwys AI, ac nid oes un wedi'i gynllunio. Nid yw mapiau ffordd cynnyrch yn cyfeirio at fodelau, casglu, na nodweddion a yrrir gan ddata.

    - Mae pob gwasanaeth digidol sy'n wynebu cleifion yn seiliedig ar reolau yn unig.
    - Nid oes gan unrhyw reolwr cynnyrch eitem AI ar fap ffordd.
    - Nid oes seilwaith casglu yn bodoli yn y stad.

- **Lefel 1: Cychwyn.** Mae prototeipiau'n ymddangos o hacathonau neu frwdfrydedd unigol, heb lywodraethu a heb lwybr i gynhyrchu. Mae arddangosiadau'n creu argraff, yna'n arafu.

    - Mae prototeip penwythnos yn crynhoi llythyrau atgyfeirio ond ni adawodd gliniadur erioed.
    - Mae prawf cysyniad yn rhedeg yn erbyn set ddata agored a lawrlwythwyd heb asesiad diogelu data.
    - Nid oes perchennog, llinell gyllideb, na chynllun dirwyn i ben ar gyfer y prototeip.

- **Lefel 2: Datblygu.** Mae adran yn symud un achos defnydd ymlaen gydag achos busnes disgrifiedig, drafft o asesiad effaith diogelu data, a noddwr clinigol enwedig. Mae'r dysgu'n aros yn lleol i'r adran honno.

    - Mae un gyfarwyddiaeth yn treialu didoli AI o ohebiaeth sy'n dod i mewn mewn un llinell wasanaeth.
    - Drafftir asesiad effaith diogelu data ac asesiad risg clinigol cychwynnol ar gyfer y peilot hwnnw.
    - Gwerthusiad yw un ffigur cywirdeb ôl-weithredol heb fonitro disgwyliedig.

- **Lefel 3: Safoni.** Mae patrwm gwasanaeth penodedig yn berthnasol i bob nodwedd AI: porth model, harnais gwerthuso, asesiadau effaith, dylunio goruchwyliaeth ddynol, cofnodion tryloywder, a dogfennaeth diogelwch clinigol cyn mynd yn fyw.

    - Mae pob galwad model yn cael ei chyfeirio trwy borth a lywodraethir gyda logio, golygu, a therfynau cyfradd.
    - Mae pob nodwedd AI yn cludo gyda defnydd bwriadedig dogfenedig, cyfyngiadau hysbys, a datganiad allan o gwmpas.
    - Cyhoeddir cofnod tryloywder algorithmig cyhoeddus ar gyfer pob nodwedd AI a ddefnyddir.

- **Lefel 4: Rheoli.** Mae nodweddion AI yn brif ffrwd mewn cynhyrchion blaenllaw, ac mae eu heffeithiau clinigol, gweithredol a chydraddoldeb yn cael eu mesur yn barhaus. Rheolir drifft, digwyddiadau, a pherfformiad is-grwpiau fel unrhyw bryder diogelwch cleifion arall.

    - Mae dangosfyrddau byw yn olrhain perfformiad model yn ôl oedran, rhyw, ethnigrwydd, amddifadedd ac iaith.
    - Mae larymau drifft ac ansawdd data yn sbarduno gweithdrefn ôl-gylch a chynllun wrth gefn dynol diffiniedig.
    - Adroddir digwyddiadau sy'n gysylltiedig ag AI trwy'r un llwybr digwyddiadau diogelwch cleifion ag unrhyw ddiffyg arall.

- **Lefel 5: Cyfeirio.** Optimeiddir y portffolio yn ei gyfanrwydd. Ailddefnyddir gallu AI ar draws cynhyrchion, cyhoeddir tystiolaeth, mae cleifion yn cyd-ddylunio nodweddion, ac mae'r sefydliad yn tarddu gwasanaethau nad oeddent yn bosibl o'r blaen.

    - Mae platfform gwerthuso a monitro a rennir yn gwasanaethu pob tîm cynnyrch yn hytrach na phob un yn ei ailadeiladu.
    - Cyhoeddir canlyniadau gwerthuso byd go iawn, gan gynnwys canlyniadau negyddol, yn agored.
    - Mae paneli cynnwys cleifion a'r cyhoedd yn eistedd y tu mewn i'r ddolen ddylunio, nid yn unig y ddolen gymeradwyo.

## AI yn ein dyfeisiau meddygol

- **Lefel 0: Dim.** Nid yw'r sefydliad yn gweithgynhyrchu dyfeisiau meddygol a alluogir gan AI ac nid yw'n defnyddio unrhyw rai. Mae unrhyw feddalwedd y mae'n ei hadeiladu yn benodol y tu allan i ddiffiniad dyfais feddygol.

    - Mae pob meddalwedd fewnol yn weinyddol ac yn cario sail resymegol ddogfenedig nad yw'n ddyfais.
    - Nid oes system rheoli ansawdd ar gyfer dyfeisiau meddygol yn bodoli.
    - Ni cheisiwyd cofrestru dyfais na marcio cydymffurfiaeth erioed.

- **Lefel 1: Cychwyn.** Defnyddir AI mewn lleoliadau ymchwil neu ymchwiliol yn unig, wedi'i wahanu'n glir oddi wrth ofal. Cydnabyddir rhwymedigaethau rheoleiddio mewn sgwrs ond nid oes neb yn berchen arnynt eto.

    - Gwerthusir algorithm delweddu yn ôl-weithredol o dan gymeradwyaeth moeseg ymchwil.
    - Marciwyd allbynnau fel defnydd ymchwil yn unig ac nid ydynt byth yn mynd i mewn i'r cofnod claf.
    - Nid oes neb eto wedi perfformio dadansoddiad dosbarthu ffurfiol o ddiben bwriadedig.

- **Lefel 2: Datblygu.** Disgrifir diben bwriadedig, dosbarthiad dyfais, a'r bwlch i system ansawdd gydymffurfiol yn ysgrifenedig. Drafftir llwybr rheoleiddio ond nid yw wedi'i weithredu o'r dechrau i'r diwedd eto.

    - Mae datganiad diben bwriadedig ysgrifenedig a sail resymegol dosbarthu risg yn bodoli ar gyfer un algorithm.
    - Cwblheir dadansoddiad bylchau yn erbyn system rheoli ansawdd dyfeisiau meddygol.
    - Drafftir cynllun gwerthuso clinigol, gyda bylchau tystiolaeth wedi'u rhestru.

- **Lefel 3: Safoni.** Dilynir llwybr rheoleiddio penodedig ar gyfer pob dyfais a alluogir gan AI: rheoli ansawdd, rheoli risg, rheolaethau cylch oes data a model, gwerthuso clinigol, ffactorau dynol, labelu, a chynllun gwyliadwriaeth ôl-farchnad cyn gosod ar y farchnad.

    - Mae system rheoli ansawdd yn cwmpasu rheolaethau dylunio, rheoli newid, a rheoli cyflenwyr ar gyfer cydrannau AI.
    - Mae rheoli risg yn mynd i'r afael â pheryglon penodol i AI megis symud dosbarthiad, tuedd awtomeiddio, a methiant distaw.
    - Dogfennir setiau data hyfforddi, dilysu a phrofi ar gyfer tarddiad, cynrychioldeb, a gwahanu.

- **Lefel 4: Rheoli.** Mae gwyliadwriaeth ôl-farchnad yn real ac yn cael ei mesur. Rheolir perfformiad byd go iawn, digwyddiadau niweidiol, a rheoli newid yn barhaus, ac adroddir y portffolio dyfeisiau i'r bwrdd a'r rheoleiddiwr.

    - Mae monitro perfformiad byd go iawn yn cymharu cywirdeb byw yn erbyn yr honiadau yn y gwerthusiad clinigol.
    - Mae cynllun rheoli newid rhagbenodedig yn llywodraethu ailhyfforddi a diweddariadau model heb syrpreisys ail-ardystio.
    - Ymarferir adrodd gwyliadwriaeth, hysbysiadau diogelwch maes, ac ymarferion galw yn ôl, nid dim ond eu dogfennu.

- **Lefel 5: Cyfeirio.** Mae'r sefydliad yn rhedeg gwelliant parhaus rheoledig ar draws ei bortffolio dyfeisiau, yn cymryd rhan mewn blychau tywod rheoleiddio, ac yn cyfrannu at y safonau y mae gweithgynhyrchwyr eraill yn eu dilyn.

    - Perfformir graddnodi penodol i safle o dan gynllun newid a lywodraethir gyda therfynau perfformiad wedi'u cytuno ymlaen llaw.
    - Mae'r sefydliad yn cymryd rhan mewn blwch tywod rheoleiddiwr ar gyfer swyddogaeth ddyfais addasol neu gynhyrchiol.
    - Mae staff yn cyfrannu at waith safonau cenedlaethol a rhyngwladol ar ddyfeisiau a alluogir gan AI.

## Integreiddiadau ag EHR, EMR, ac ati.

- **Lefel 0: Dim.** Nid yw systemau clinigol yn cyfnewid data ag AI nac offer dadansoddeg. Mae gwybodaeth yn symud fel papur, ffacs, PDF, neu ail-deipio dynol.

    - Argraffir a phostir crynodebau rhyddhau.
    - Echdynnir data i'w ddadansoddi trwy ddal sgrin â llaw.
    - Nid oes injan integreiddio na stad API yn bodoli.

- **Lefel 1: Cychwyn.** Mae dadansoddwr unigol yn adeiladu echdyniad untro i gael arbrawf AI i symud. Mae'r llwybr heb ei ddogfennu, yn anailadroddadwy, ac fel arfer yn anawdurdodedig.

    - Anfonir allforiad wedi'i wahanu gan gomâu trwy e-bost at wyddonydd data ar gyfer un adeiladwaith model.
    - Mae sgript yn sgrapio porth clinigol am nad oes rhyngwyneb ar gael.
    - Cyfatebir dynodwyr yn ôl enw a dyddiad geni heb allwedd benderfynol.

- **Lefel 2: Datblygu.** Mae rhyngwynebau adrannol yn bodoli ac yn cael eu dyblygu fesul prosiect. Disgrifir fformatau negeseuon ond mae pob integreiddiad newydd yn ailadrodd y rhan fwyaf o waith yr integreiddiad blaenorol.

    - Adeiledir porthiannau negeseuon clinigol pwynt-i-bwynt ar wahân ar gyfer prosiect pob adran.
    - Defnyddir rhestrau codau lleol yn lle terminoleg glinigol genedlaethol.
    - Mae catalog rhyngwynebau yn bodoli fel taenlen heb berchnogaeth glir.

- **Lefel 3: Safoni.** Manylir integreiddio unwaith a'i ailddefnyddio: APIs sy'n seiliedig ar safonau, terminoleg glinigol genedlaethol, platfform integreiddio a lywodraethir, a datrys hunaniaeth gyson. Mae nodweddion AI yn defnyddio'r un rhyngwynebau â phopeth arall.

    - APIs clinigol ar lefel adnodd sy'n dilyn safon rhyngweithredadwyedd agored yw'r unig lwybr mynediad awdurdodedig.
    - Codir cysyniadau clinigol mewn terminoleg genedlaethol, gyda meddyginiaethau wedi'u codio yn y geiriadur cenedlaethol.
    - Mae rhaglenni AI yn lansio mewn cyd-destun clinigol o fewn y cofnod, gan gario cyd-destun claf a chyfarfyddiad yn ddiogel.

- **Lefel 4: Rheoli.** Mesurir a rheolir ansawdd integreiddio ar raddfa. Llywodraethir ysgrifennu'n ôl i'r cofnod yn benodol, ac olrheinir cydymffurfiaeth, hwyrni, a chyllidebau gwallau fel unrhyw wasanaeth cynhyrchu.

    - Monitrir profi cydymffurfiaeth a lefelau gwasanaeth hwyrni fesul rhyngwyneb gyda rhybuddio.
    - Priodolir, fersiynir, a gwneir yn ddadwneudadwy unrhyw gynnwys a awdurir gan AI a ysgrifennir i'r cofnod.
    - Mae tanysgrifiadau a yrrir gan ddigwyddiadau yn disodli pleidleisio swp ar draws mwyafrif yr integreiddiadau.

- **Lefel 5: Cyfeirio.** Cyfeirir llifoedd data ar draws ffiniau sefydliadol. Mae cofnodion gofal a rennir, amgylcheddau data diogel, a dadansoddi ffederal yn gadael i fodelau ddysgu ar draws rhanbarth heb symud data crai cleifion.

    - Mae gwerthuso ffederal yn rhedeg model ar draws sefydliadau lluosog heb ganoli data adnabyddadwy.
    - Mae cofnod gofal a rennir rhanbarthol yn cyflenwi un olwg hydredol i wasanaethau AI awdurdodedig.
    - Mae'r sefydliad yn cyfrannu proffiliau a chanllawiau gweithredu yn ôl i'r gymuned safonau cenedlaethol.

## Galluoedd gwerthwyr

- **Lefel 0: Dim.** Nid yw AI cyflenwyr yn cael ei asesu na'i olrhain. Ni all neb ddweud pa gynhyrchion a brynwyd sy'n cynnwys modelau.

    - Nid yw dogfennau caffael yn cynnwys unrhyw gwestiynau penodol i AI.
    - Nid oes cofrestr o AI mewn systemau a brynwyd yn bodoli.
    - Mae gwerthwyr yn ychwanegu nodweddion AI trwy ddiweddariad distaw heb rwymedigaeth hysbysu.

- **Lefel 1: Cychwyn.** Mae unigolion yn gofyn cwestiynau ad hoc i gyflenwyr pan fydd rhywbeth yn eu poeni. Nid yw atebion yn cael eu cadw na'u cymharu rhwng cyflenwyr.

    - Mae clinigwr yn anfon e-bost at gyflenwr yn gofyn a yw nodwedd newydd yn defnyddio model iaith fawr.
    - Mae un rheolwr contractau yn gofyn am ddisgrifiad model ond ni ffeilir dim yn ganolog.
    - Mae treialon yn mynd rhagddynt ar sicrwydd cyflenwyr yn unig.

- **Lefel 2: Datblygu.** Mae adran yn adeiladu rhestr wirio ac yn ei chymhwyso i'w phryniannau ei hun. Disgrifir cwestiynau, ond mae sgorio yn oddrychol ac nid yw'r canlyniadau'n cael eu rhannu ledled y sefydliad.

    - Mae rhestr wirio taenlen yn cwmpasu lleoliad data, is-broseswyr, ac ailddefnyddio data hyfforddi.
    - Mae un gyfarwyddiaeth yn mynnu cerdyn model cyflenwr cyn i beilot ddechrau.
    - Cedwir canfyddiadau ar yriant yr adran ei hun, nid cofrestr ganolog.

- **Lefel 3: Safoni.** Mae proses sicrwydd safonedig yn berthnasol i bob cyflenwr gydag AI o fewn cwmpas, gan gwmpasu diogelwch clinigol, diogelu data, diogelwch, rhyngweithredadwyedd, hygyrchedd, a pherfformiad technegol, gyda chymalau contract cyfatebol.

    - Mae un fframwaith asesu yn gatiau pob pryniant ac adnewyddiad AI, gyda chymeradwywr enwedig.
    - Mae contractau'n mynnu hysbysiad cyn newid model perthnasol, ac yn gwahardd hyfforddi ar ddata'r sefydliad heb gydsyniad.
    - Mae catalog cyflenwyr cymeradwy yn rhestru cynhyrchion AI a asesir gyda'u cyd-destunau defnydd a ganiateir.

- **Lefel 4: Rheoli.** Mesurir perfformiad AI cyflenwyr yn erbyn contract mewn cynhyrchu, ac mae'r stad AI gyfan wedi'i chofrestru ac adroddir arni. Ailadroddir sicrwydd, nid untro wrth brynu.

    - Mae cofrestr fyw yn cofnodi pob cynnyrch AI yn y stad gyda pherchennog, haen risg, a dyddiad sicrwydd olaf.
    - Mae credydau gwasanaeth yn atodi i rwymedigaethau cywirdeb, argaeledd a hysbysu diogelwch diffiniedig.
    - Mae archwiliadau annibynnol neu ardystiadau trydydd parti yn ofynnol yn flynyddol gan gyflenwyr risg uwch.

- **Lefel 5: Cyfeirio.** Mae'r sefydliad yn llunio'r farchnad. Mae'n cyd-ddatblygu gyda chyflenwyr, yn rhannu seilwaith gwerthuso, yn cyfnewid tystiolaeth byd go iawn, ac yn cadw llwybrau ymadael credadwy fel nad yw byth yn cael ei ddal.

    - Gwerthusir cyflenwyr ar harnais meincnod a rennir gan ddefnyddio data lleol cyn dyfarnu contract.
    - Bwydir canfyddiadau perfformiad byd go iawn yn ôl i gyflenwyr a'u cyhoeddi ar ffurf ddienw.
    - Ymarferir profi ymadael a hygludedd, gan gynnwys echdynnu asedau model ac anogwr.

## Ysgrifenyddion amgylchynol

- **Lefel 0: Dim.** Nid oes technoleg dogfennu amgylchynol yn cael ei defnyddio. Mae clinigwyr yn teipio, yn arddweud i deipydd dynol, neu'n ysgrifennu nodiadau â llaw.

    - Teipir nodiadau'n uniongyrchol i'r cofnod yn ystod neu ar ôl yr ymgynghoriad.
    - Mae arddweud yn mynd i wasanaeth trawsgrifio dynol gyda throsiant aml-ddiwrnod.
    - Nid oes polisi ar gofnodi ymgynghoriadau.

- **Lefel 1: Cychwyn.** Mae clinigwyr unigol yn treialu apiau defnyddwyr ar eu dyfeisiau eu hunain, fel arfer heb gymeradwyaeth, sgriptiau cydsyniad, nac unrhyw adolygiad llywodraethu gwybodaeth. Dyma gam risg uchaf y model cyfan.

    - Mae clinigwr yn cofnodi ymgynghoriad ar ffôn personol gan ddefnyddio rhaglen anghymeradwy.
    - Prosesir sain a thrawsgrifiadau y tu allan i'r awdurdodaeth gyda chadw aneglur.
    - Ni ddywedir wrth gleifion fod recordiad yn cael ei wneud.

- **Lefel 2: Datblygu.** Mae un adran yn rhedeg peilot dan oruchwyliaeth gyda sgript cydsyniad ddisgrifiedig, gweithdrefn weithredu safonol leol, a charfan ddiffiniedig o glinigwyr. Mae llywodraethu'n bodoli ond mae'n lleol ac yn anghyson.

    - Mae un clinig cleifion allanol yn treialu un cynnyrch cymeradwy gyda deg clinigwr gwirfoddol.
    - Cytunir ar sgript cydsyniad ysgrifenedig a llwybr optio allan gyda thîm y clinig.
    - Cytunir yn lleol ar amserlenni dileu ar gyfer sain a thrawsgrifiadau ond ni chânt eu harchwilio.

- **Lefel 3: Safoni.** Caniateir cynhyrchion a sicrhawyd yn unig, mae defnyddio yn dilyn llwybr penodedig, ac nid oes cynnwys a gynhyrchir yn mynd i'r cofnod heb adolygiad a chymeradwyaeth glinigwr penodol. Dogfennir statws rheoleiddio, lleoliad data, a diogelwch clinigol cyn ei gyflwyno.

    - Mae dethol cynnyrch yn gofyn i safbwynt rheoleiddio'r cyflenwr ar statws dyfais gael ei ddogfennu a'i dderbyn.
    - Mae cyfluniad yn gorfodi adolygiad ac arwyddo clinigwr cyn ffeilio unrhyw nodyn, llythyr, neu god.
    - Mae cydsyniad, optio allan, cadw, a dileu wedi'u safoni ar draws yr holl wasanaethau sy'n defnyddio'r dechnoleg.

- **Lefel 4: Rheoli.** Mesurir y defnydd ac mae'n brif ffrwd. Olrheinir amser a arbedwyd, ansawdd dogfennaeth, cywirdeb codio, cyfraddau golygu, a digwyddiadau diogelwch, ac mae perfformiad gwael yn sbarduno gweithredu yn hytrach na goddefgarwch.

    - Monitrir pellter golygu a chyfraddau gwrthod yn ôl arbenigedd i ganfod diraddio neu duedd acen a thafodiaith.
    - Arolygir baich gweinyddol a adroddir gan glinigwyr cyn ac ar ôl ei gyflwyno gyda grŵp rheoli.
    - Dalir gwallau sy'n cyrraedd y cofnod trwy'r system digwyddiadau diogelwch cleifion a'u tueddu.

- **Lefel 5: Cyfeirio.** Cyfeirir dal amgylchynol i'r llif gwaith clinigol cyfan yn hytrach na bod yn gynhyrchydd nodiadau. Mae'n gyrru codio, archebion, llythyrau, tasgau dilynol, a chrynodebau sy'n wynebu cleifion dan werthuso parhaus.

    - Mae'r cofnod ymgynghori yn cynhyrchu crynodeb iaith blaen ar gyfer y claf yn ei hoff iaith.
    - Cynhyrchir archebion drafft, atgyfeiriadau, a chynigion codio i'w cadarnhau gan glinigwr mewn un cam adolygu.
    - Gwerthusir templedi wedi'u tiwnio i arbenigedd yn barhaus a'u hymddeol pan fyddant yn tanberfformio.

## Gweinyddu ysbytai

- **Lefel 0: Dim.** Mae gweithrediadau ysbytai yn rhedeg ar amserlennu â llaw, taenlenni a phrofiad. Nid oes offer rhagfynegol na chynhyrchiol yn cefnogi llif, capasiti, na rotas.

    - Lluniwyd statws gwelyau gan rownd ffôn â llaw bob bore.
    - Adeiledir rhestrau theatr â llaw o daenlen a rennir.
    - Gwneir rotas mewn system etifeddiaeth heb ragolygu.

- **Lefel 1: Cychwyn.** Mae rheolwr unigol yn adeiladu rhagolwg personol neu'n drafftio rota gyda model pwrpas cyffredinol. Mae'r canlyniadau heb eu dilysu ac yn diflannu pan fydd y person hwnnw'n symud ymlaen.

    - Mae rheolwr safle yn defnyddio model i ddrafftio naratif cynllun uwchgyfeirio.
    - Mae un dadansoddwr yn cynnal rhagolwg taenlen o dderbyniadau ar yriant personol.
    - Nid oes dim am y dull wedi'i ddogfennu nac yn atgynhyrchadwy.

- **Lefel 2: Datblygu.** Mae adran yn defnyddio un achos defnydd AI gweithredol gyda mewnbynnau, perchnogion a budd disgwyliedig wedi'u disgrifio. Mae adrannau eraill yn clywed amdano ond nid ydynt yn ei etifeddu.

    - Mae un gyfarwyddiaeth yn rhagweld presenoldebau brys i lywio staffio ar gyfer y safle hwnnw yn unig.
    - Mae un swît theatr yn treialu awgrymiadau optimeiddio rhestr a adolygir gan yr amserlennydd.
    - Hawlir budd-daliadau o gymhariaeth fer cyn-ac-ar-ôl heb reolaethau.

- **Lefel 3: Safoni.** Cyflenwir AI gweithredol fel gwasanaeth safonol wedi'i integreiddio i lifau gwaith canolfan reoli a gweinyddu cleifion, gydag ansawdd data penodedig, hawliau penderfynu dynol, a chynllun wrth gefn pan nad yw'r model ar gael.

    - Mae rhagweld galw a chapasiti yn bwydo'r cyfarfod gweithredol dyddiol gyda model dogfenedig ac egwyl hyder.
    - Mae rhagfynegi parodrwydd rhyddhau yn ymddangos yn yr offer llif presennol yn hytrach na sgrin ar wahân.
    - Mae hawliau penderfynu dynol dogfenedig yn datgan nad yw unrhyw benderfyniad gwely, staffio, neu ryddhau wedi'i awtomeiddio.

- **Lefel 4: Rheoli.** Mae AI gweithredol yn brif ffrwd ar draws safleoedd ac yn cael ei fesur yn erbyn canlyniadau gweithredol a chleifion, nid gweithgarwch. Adolygir perfformiad a thegwch ar gylch diffiniedig.

    - Olrheinir hyd arhosiad, oedi trosglwyddo ambiwlans, defnydd theatr, a chyfraddau peidio â mynychu yn erbyn ymyriadau a yrrir gan ragolygon.
    - Monitrir cywirdeb rhagolygon ac ymddeolir neu ailhyfforddir modelau ar sbardunau diffiniedig.
    - Mae gwiriadau tegwch yn cadarnhau nad yw ymyriadau megis nodiadau atgoffa apwyntiadau yn ehangu bylchau mynediad.

- **Lefel 5: Cyfeirio.** Cyfeirir gweithrediadau ar draws y system gyfan, gan gynnwys gofal sylfaenol, cymunedol, cymdeithasol ac ambiwlans, gan ddefnyddio efelychu i brofi penderfyniadau cyn eu gwneud.

    - Mae gefell ddigidol yn efelychu senarios uwchgyfeirio'r gaeaf cyn ymrwymo penderfyniadau capasiti.
    - Mae optimeiddio llif traws-sefydliad yn cydbwyso llwyth rhwng safleoedd mewn amser bron yn real o dan reolaeth ddynol.
    - Mae amserlennu ymreolaethol dan oruchwyliaeth yn ymdrin ag achosion arferol tra bod eithriadau'n uwchgyfeirio at bobl.

## Gweinyddu practis cyffredinol

- **Lefel 0: Dim.** Mae gweinyddu practis cyffredinol yn gwbl â llaw. Darllenir a chodir dogfennau â llaw, a drafftir gohebiaeth o'r dechrau.

    - Darllenir llythyrau sy'n dod i mewn yn unigol a'u codio â llaw gan weinyddwr.
    - Mae didoli apwyntiadau dros y ffôn gyda phrotocol papur.
    - Adeiledir rhestrau galw yn ôl gan chwiliadau â llaw.

- **Lefel 1: Cychwyn.** Mae aelod unigol o staff yn defnyddio model pwrpas cyffredinol yn anffurfiol ar gyfer drafftio. Nid oes polisi practis na chofnod o'r hyn a ddefnyddiwyd.

    - Mae rheolwr practis yn drafftio llythyr claf gyda sgwrsfot defnyddwyr.
    - Mae derbynnydd yn defnyddio model i grynhoi atgyfeiriad hir i glinigwr.
    - Gludir manylion adnabyddadwy i mewn heb adolygiad diogelu data.

- **Lefel 2: Datblygu.** Mae'r practis yn mabwysiadu gweithdrefn weithredu safonol ddisgrifiedig ar gyfer un llif gwaith, fel arfer trin dogfennau neu ddidoli ar-lein. Mae practisau cyfagos yn ei gopïo'n anffurfiol.

    - Treialir codio dogfennau awtomataidd gyda dilysu gorfodol gan glinigwr o bob cod.
    - Mae offeryn ymgynghori ar-lein yn cymhwyso blaenoriaethu didoli a adolygir gan glinigwr dyletswydd.
    - Mae'r practis yn ysgrifennu polisi un dudalen ar ddefnydd AI derbyniol gan staff.

- **Lefel 3: Safoni.** Mae manyleb safonol yn berthnasol ar draws y rhwydwaith gofal sylfaenol neu'r rhanbarth: offer cymeradwy, dilysu gorfodol gan glinigwr, rheolau rhwyd diogelwch, trywyddau archwilio, a gofynion goruchwylio ar gyfer staff anghlinigol.

    - Mae pob practis yn y rhwydwaith yn defnyddio'r un cyfluniad codio dogfennau a didoli a sicrhawyd.
    - Mae rheolau rhwyd diogelwch yn diffinio pa gyflwyniadau na ellir byth eu dad-flaenoriaethu gan algorithm.
    - Logir pob gweithred a gynorthwyir gan AI gyda'r defnyddiwr enwedig cyfrifol.

- **Lefel 4: Rheoli.** Mae mabwysiadu yn dorfol ac yn cael ei reoli. Mesurir mynediad, llwyth gwaith, cywirdeb codio, a thegwch canlyniad ar draws y segment, a chywirir defnyddiadau sy'n tanberfformio.

    - Archwilir cywirdeb codio trwy samplu yn erbyn adolygiad clinigwr bob chwarter.
    - Dadansoddir metrigau mynediad yn ôl oedran, amddifadedd, iaith, a risg eithrio digidol.
    - Cynhelir a monitrir llwybrau mynediad nad ydynt yn ddigidol fel nad yw neb yn cael ei eithrio gan y llwybr AI.

- **Lefel 5: Cyfeirio.** Cyfeirir AI gofal sylfaenol gyda gofal eilaidd, cymunedol a chymdeithasol o amgylch iechyd poblogaeth rhagweithiol yn hytrach na thrin galw adweithiol.

    - Mae haenu risg yn gyrru allgymorth rhagweithiol ar gyfer cyflyrau hirdymor heb eu diagnosio neu wedi'u rheoli'n wael.
    - Cydlynir llywio gofal ar draws sefydliadau gyda chynllun a rennir sy'n weladwy i bob parti.
    - Mae gwerthuso parhaus yn cymharu carfanau rhagweithiol yn erbyn rheolaethau cyfatebol ac yn cyhoeddi canlyniadau.

## Adran gydymffurfio

- **Lefel 0: Dim.** Nid oes gan gydymffurfio safbwynt ar AI. Nid yw AI wedi'i wahardd na'i ganiatáu, ac ni all yr adran weld lle mae eisoes yn cael ei ddefnyddio.

    - Nid oes cymal AI mewn unrhyw bolisi, gan gynnwys defnydd derbyniol.
    - Nid oes rhestr o systemau AI yn bodoli yn unman yn y sefydliad.
    - Mae templedi asesu effaith yn rhagflaenu AI yn gyfan gwbl.

- **Lefel 1: Cychwyn.** Mae swyddog cydymffurfio unigol yn ymchwilio i'r pwnc ac yn ateb cwestiynau fesul achos. Mae dyfarniadau'n bersonol ac yn anghyson rhwng ceisiadau.

    - Mae un swyddog yn adolygu un peilot AI fel ffafr heb unrhyw feini prawf diffiniedig.
    - Rhoddir canllawiau ar lafar mewn cyfarfodydd a'u hysgrifennu byth.
    - Nid oes llwybr uwchgyfeirio pan fydd swyddog yn ansicr.

- **Lefel 2: Datblygu.** Mae'r adran yn ysgrifennu polisi AI ac yn cadw rhestr o systemau hysbys. Mae'r cwmpas yn rhannol ac yn dibynnu ar dimau yn gwirfoddoli eu bod yn defnyddio AI.

    - Cyhoeddir polisi defnydd derbyniol ar gyfer AI cynhyrchiol i staff.
    - Lluniwyd rhestr a gynhelir â llaw o fentrau AI o arolwg.
    - Mae asesiadau effaith diogelu data yn ennill atodiad AI.

- **Lefel 3: Safoni.** Mae system rheoli AI benodedig yn llywodraethu'r cylch oes: haenu risg, asesiadau effaith gorfodol, pyrth cymeradwyo, gofynion goruchwyliaeth ddynol, cofnodion tryloywder, a rolau ac atebolrwyddau diffiniedig.

    - Mae system rheoli AI wedi'i halinio â safon gydnabyddedig yn diffinio polisi, rolau, haenu risg, a chylchoedd adolygu.
    - Mae asesiadau effaith diogelu data a chydraddoldeb yn byrth gorfodol cyn unrhyw fynd yn fyw AI.
    - Mae cofrestr AI ganolog yn cofnodi diben, haen risg, perchennog, dyluniad goruchwyliaeth, a dyddiad adolygu ar gyfer pob system.

- **Lefel 4: Rheoli.** Mesurir rheolaethau am effeithiolrwydd yn hytrach nag am fodolaeth. Mae monitro'n barhaus, mae archwilio mewnol yn profi'r rheolaethau, ac mae'r bwrdd yn derbyn adroddiadau risg AI rheolaidd.

    - Adroddir metrigau effeithiolrwydd rheolaeth megis cwblhau asesiadau a chyfraddau adolygu hwyr yn fisol.
    - Mae archwilio mewnol yn cynnal archwiliad llywodraethu AI annibynnol ar gylch diffiniedig.
    - Mae pwyllgor goruchwylio AI yn adolygu digwyddiadau, rhybuddion drifft, a cheisiadau eithrio gydag awdurdod i atal systemau.

- **Lefel 5: Cyfeirio.** Mae cydymffurfio yn gweithredu fel gwasanaeth galluogi gyda chasglu tystiolaeth awtomataidd, ac mae'r sefydliad yn ymgysylltu â rheoleiddwyr yn gynnar yn hytrach nag yn adweithiol.

    - Casglir tystiolaeth ar gyfer sicrwydd yn awtomatig o biblinellau a monitro yn hytrach na'i chydosod â llaw.
    - Mae patrymau a gymeradwywyd ymlaen llaw yn gadael i achosion defnydd risg isel hunanardystio mewn dyddiau yn hytrach na misoedd.
    - Mae'r sefydliad yn cymryd rhan mewn blychau tywod rheoleiddio ac yn cyfrannu at ganllawiau cenedlaethol.

## Adran gyllid

- **Lefel 0: Dim.** Nid yw cyllid yn defnyddio AI. Mae gwaith cyfriflyfr, rhagweld, a dadansoddi caffael yn gwbl â llaw neu'n seiliedig ar reolau.

    - Mae paru anfonebau yn gwbl â llaw.
    - Mae rhagweld cyllideb yn allosod taenlen o wirioneddol y flwyddyn flaenorol.
    - Nid oes canfod anghysondebau yn rhedeg dros drafodion.

- **Lefel 1: Cychwyn.** Mae cyfrifydd unigol yn defnyddio model pwrpas cyffredinol ar gyfer cynhyrchiant personol. Nid oes dim yn cael ei ddilysu ac nid oes dim yn cael ei rannu.

    - Mae dadansoddwr yn gofyn i fodel ysgrifennu fformiwla taenlen gymhleth.
    - Mae rheolwr yn drafftio naratif achos busnes gydag AI ac yn ei olygu'n ysgafn.
    - Gludir ffigurau ariannol i offeryn anghymeradwy.

- **Lefel 2: Datblygu.** Mae'r adran yn treialu un awtomeiddio gyda chwmpas a rheolaethau wedi'u disgrifio, fel arfer wrth brosesu trafodion. Mae'r buddion yn lleol ac wedi'u gwirio â llaw.

    - Awtomeiddir codio anfonebau ar gyfer un categori cyflenwyr gydag adolygiad llaw llawn.
    - Mae peilot yn nodi taliadau dyblyg i'w hymchwilio gan bobl.
    - Gwirir canlyniadau trwy ail-wneud y gwaith â llaw am gyfnod y peilot.

- **Lefel 3: Safoni.** Manylir AI o fewn yr amgylchedd rheoli ariannol safonol: gwahanu dyletswyddau, trothwyon cymeradwyo, trywyddau archwilio, ac eglurhad digonol ar gyfer archwilio allanol.

    - Mae awtomeiddio prynu-i-dalu yn gweithredu o fewn terfynau cymeradwyo dogfenedig ac ni all gymeradwyo ei eithriadau ei hun.
    - Mae pob postio dan ddylanwad AI yn cario trywydd archwilio olrheiniadwy sy'n dangos mewnbynnau, fersiwn model, a chymeradwywr.
    - Dogfennir modelau rhagweld gyda rhagdybiaethau, cyfyngiadau, a dadansoddi sensitifrwydd ar gyfer archwilwyr.

- **Lefel 4: Rheoli.** Mae cyllid yn mesur y gwerth a'r risg. Mae AI yn brif ffrwd mewn diwedd mis, rhagweld, a gwrth-dwyll, ac adroddir ei gywirdeb a'i arbedion yn hytrach na'u honni.

    - Adroddir cywirdeb rhagolygon, cyfraddau eithriadau, ac arbedion a wireddwyd i'r pwyllgor cyllid.
    - Mesurir dadansoddeg gwrth-dwyll ar gyfradd canfod a baich positifau ffug, nid cyfaint rhybuddion.
    - Olrheinir cyfanswm cost AI ei hun, gan gynnwys casglu, trwyddedu, ac amser staff, fel llinell gost a reolir.

- **Lefel 5: Cyfeirio.** Mae cyllid yn cyfeirio penderfyniadau cynllunio a buddsoddi ar draws y sefydliad, ac yn trin gallu AI fel portffolio i'w optimeiddio yn hytrach na set o bryniannau.

    - Mae cynllunio senarios yn modelu effaith ariannol newidiadau galw, gweithlu a pholisi ar yr un pryd.
    - Mae penderfyniadau buddsoddi AI yn defnyddio fframwaith gwerth safonol gan gynnwys canlyniadau cleifion ac amser staff a ryddhawyd.
    - Mae optimeiddio costau parhaus yn symud llwythi gwaith rhwng modelau a darparwyr yn erbyn trothwyon ansawdd mesuredig.

## Adran gyfreithiol

- **Lefel 0: Dim.** Mae gwaith cyfreithiol yn gwbl â llaw. Cynhyrchir contractau, cyngor, a chymorth cwest heb gymorth AI.

    - Mae adolygu contractau yn ddarlleniad llaw llawn o bob cymal.
    - Mae cynsail yn byw mewn ffolderi cyfreithwyr unigol.
    - Nid oes offer technoleg gyfreithiol ar waith.

- **Lefel 1: Cychwyn.** Mae cyfreithiwr unigol yn defnyddio sgwrsfot cyhoeddus ar gyfer drafftiau cyntaf, gan amlygu'r sefydliad i risg cyfrinachedd a dyfyniadau ffug.

    - Cynhyrchir ymateb drafft gydag offeryn defnyddwyr ac mae'n cynnwys dyfyniad achos dyfeisiedig.
    - Gludir deunydd cyfrinachol i wasanaeth gyda chadw aneglur.
    - Nid oes angen cam gwirio cyn defnyddio'r drafft.

- **Lefel 2: Datblygu.** Mae'r adran yn prynu offeryn AI cyfreithiol ac yn disgrifio rheolau gwirio. Mae'r defnydd wedi'i gyfyngu i'r tîm cyfreithiol ac yn dibynnu ar ddisgyblaeth unigol.

    - Trwyddedir offeryn ar gyfer crynhoi contractau gyda rheol bod yn rhaid gwirio pob dyfyniad.
    - Mae nodyn mewnol byr yn disgrifio'r hyn y caniateir ac na chaniateir ei roi yn yr offeryn.
    - Trafodir trin deunydd breintiedig ond nid yw'n cael ei orfodi'n dechnegol.

- **Lefel 3: Safoni.** Mae dull penodedig yn cwmpasu offer, cyfrinachedd, braint, cadw, a gwirio, ac mae'r adran gyfreithiol yn berchen ar y llyfrgell cymalau AI y mae'r sefydliad cyfan yn ei defnyddio mewn caffael.

    - Seilir adfer ar gynsail a pholisïau'r sefydliad ei hun, gyda dyfyniadau wedi'u cysylltu â dogfennau ffynhonnell.
    - Gwahanir deunydd breintiedig a chyfrinachol yn dechnegol gyda chadw wedi'i orfodi a dim hyfforddi gan werthwyr.
    - Mae set cymalau AI safonol yn cwmpasu atebolrwydd, hysbysu newid model, defnydd data, indemniad, ac ymadael.

- **Lefel 4: Rheoli.** Mae'r adran gyfreithiol yn mesur trwybwn ac ansawdd, ac mae AI yn brif ffrwd ar draws contractio, cyngor, a chymorth achosion. Mae gwirio yn parhau'n orfodol ac yn cael ei archwilio.

    - Olrheinir ac adroddir amser cylch contractau, cyfraddau gwyro cymalau, a chyfraddau ailwneud.
    - Mae archwiliadau samplu yn cadarnhau bod pob allbwn a gynorthwywyd gan AI wedi'i wirio cyn ei ryddhau.
    - Mae paratoi cwestau a hawliadau yn defnyddio AI i gydosod cronolegau o gofnodion o dan adolygiad cyfreithiwr.

- **Lefel 5: Cyfeirio.** Mae'r adran gyfreithiol yn cyfeirio sganio gorwel a strategaeth risg, gan droi newid rheoleiddiol yn weithredu sefydliadol yn gyflym, ac yn cyfrannu at asedau cyfreithiol cenedlaethol a rennir.

    - Mae sganio gorwel awtomataidd yn mapio rheoliadau AI ac iechyd newydd i bolisïau a systemau mewnol yr effeithir arnynt.
    - Mae strategaeth atebolrwydd AI yn cwmpasu esgeulustod clinigol, atebolrwydd cynnyrch, a dosrannu cyflenwyr yn benodol.
    - Mae'r adran yn cyd-awduro telerau contract model a rennir gyda sefydliadau cyfoed yn genedlaethol.

## Adran adnoddau dynol

- **Lefel 0: Dim.** Nid yw AD yn defnyddio AI. Mae recriwtio, cynllunio'r gweithlu, a rheoli achosion yn gwbl â llaw, ac nid oes strategaeth gweithlu AI yn bodoli.

    - Mae hysbysebion swyddi a rhestru byr yn gwbl â llaw.
    - Mae cynllunio'r gweithlu yn allosod niferoedd staff mewn taenlen.
    - Nid oes cynnwys llythrennedd AI yn y catalog hyfforddi.

- **Lefel 1: Cychwyn.** Mae rheolwyr unigol yn defnyddio modelau pwrpas cyffredinol yn anffurfiol ar gyfer tasgau ysgrifennu. Nid oes polisi, ac mae staff yn ansicr a yw'n cael ei ganiatáu.

    - Mae rheolwr yn drafftio hysbyseb swydd a manyleb person gydag offeryn defnyddwyr.
    - Mae rhywun yn crynhoi nodiadau cyfweliad dienw gyda rhaglen anghymeradwy.
    - Mae staff yn derbyn cyngor llafar croes ar yr hyn a ganiateir.

- **Lefel 2: Datblygu.** Mae AD yn treialu un achos defnydd ac yn dogfennu'r pryderon, yn enwedig tuedd a chyfreithlondeb gwneud penderfyniadau awtomataidd. Disgrifir yr arfer ond nid yw'n cael ei reoli eto ledled y sefydliad.

    - Treialir offeryn sgrinio ar gyfer un rôl cyfaint uchel gydag adolygiad dynol llawn o bob gwrthodiad.
    - Drafftir geiriad sy'n wynebu ymgeiswyr am gynnwys AI ar gyfer y peilot hwnnw.
    - Trafodir profi tuedd ond nid yw wedi'i berfformio eto ar ddata ymgeiswyr go iawn.

- **Lefel 3: Safoni.** Mae rheolau penodedig yn llywodraethu pob AI mewn penderfyniadau cyflogaeth: dim penderfyniad niweidiol yn unig awtomataidd, asesiad effaith cydraddoldeb gorfodol, profi tuedd, tryloywder i ymgeiswyr, a llwybrau apêl. Mae llythrennedd AI staff yn dod yn gwricwlwm diffiniedig.

    - Mae polisi yn gofyn am wneuthurwr penderfyniadau dynol ag awdurdod gwirioneddol ar gyfer pob gwrthodiad, cosb, neu ddiswyddiad.
    - Mae asesiad effaith cydraddoldeb a phrofi tuedd cyn defnyddio yn orfodol cyn i unrhyw offeryn llogi fynd yn fyw.
    - Mae cwricwlwm hyfforddi AI sy'n seiliedig ar rôl yn cwmpasu staff clinigol, gweinyddol a thechnegol.

- **Lefel 4: Rheoli.** Mae AD yn mesur tegwch ac effaith, nid dim ond mabwysiadu. Mae AI yn brif ffrwd ar draws recriwtio a chynllunio'r gweithlu, ac mae effaith niweidiol yn cael ei monitro'n barhaus.

    - Monitrir cymarebau effaith niweidiol yn ôl nodwedd warchodedig ym mhob cam recriwtio ac adroddir arnynt.
    - Olrheinir amser i logi, derbyn cynnig, a cholli staff cynnar yn erbyn llinellau sylfaen cyn-AI.
    - Mae gallu AI yn elfen enwedig o arfarnu a fframweithiau gallu'r gweithlu.

- **Lefel 5: Cyfeirio.** Mae AD yn cyfeirio strategaeth y gweithlu o amgylch rolau sy'n newid, gan ddefnyddio cynllunio seiliedig ar sgiliau ac archwilio tegwch parhaus, ac yn llunio'r agenda gweithlu ehangach.

    - Mae cynllunio seiliedig ar sgiliau yn modelu sut mae AI yn newid cyfansoddiad rolau ac yn adleoli staff yn hytrach na'u dadleoli.
    - Mae paru symudedd mewnol yn cyflwyno cyfleoedd i staff presennol cyn i recriwtio allanol agor.
    - Comisiynir archwiliadau tegwch annibynnol a chyhoeddir eu canfyddiadau'n fewnol.

## Adran cysylltiadau cyhoeddus

- **Lefel 0: Dim.** Nid yw cyfathrebu yn defnyddio AI. Cynhyrchir yr holl gynnwys, cyfieithu, a monitro'r cyfryngau â llaw.

    - Ysgrifennir datganiadau i'r wasg a chopi ymgyrch yn gyfan gwbl â llaw.
    - Mae cyfieithu wedi'i allanoli gydag amseroedd trosiant hir.
    - Mae monitro'r cyfryngau a chymdeithasol yn chwilio â llaw.

- **Lefel 1: Cychwyn.** Mae swyddog cyfathrebu unigol yn drafftio negeseuon gyda model pwrpas cyffredinol. Nid oes arfer datgelu na gwiriad ar gywirdeb clinigol.

    - Drafftir neges gymdeithasol am newid gwasanaeth gan AI a'i chyhoeddi gyda golygu ysgafn.
    - Defnyddir delwedd a gynhyrchwyd gan AI heb unrhyw labelu tarddiad.
    - Nid oes neb yn gwirio a yw honiadau iechyd yn y copi yn glinigol gywir.

- **Lefel 2: Datblygu.** Mae'r adran yn ysgrifennu canllaw arddull sy'n cwmpasu drafftio AI ac yn disgrifio pryd mae datgelu yn ofynnol. Mae'r arfer yn gyson y tu mewn i gyfathrebu ond nid y tu hwnt iddo.

    - Mae canllaw arddull yn datgan y caiff AI ddrafftio ond byth gymeradwyo, ac mae person enwedig yn berchen ar bob cyhoeddiad.
    - Mae delweddau synthetig yn gofyn am labelu mewnol ac arwyddo.
    - Rhaid i glinigwr adolygu copi sy'n ymwneud ag iechyd cyn ei ryddhau.

- **Lefel 3: Safoni.** Mae safonau penodedig yn berthnasol i bob cyfathrebu a gynorthwyir gan AI: offer cymeradwy, labelu tarddiad cyfryngau synthetig, arwyddo clinigol ar gyfer honiadau iechyd, safonau hygyrchedd ac oedran darllen, ac uwchgyfeirio diffiniedig.

    - Cymhwysir metadata tarddiad a labelu gweladwy i bob cyfrwng synthetig neu a gynhyrchwyd yn sylweddol gan AI.
    - Mae pob neges iechyd cyhoeddus yn pasio gwiriad hygyrchedd ac oedran darllen cyn ei rhyddhau.
    - Cynhyrchir allbwn amlieithog trwy lwybr cyfieithu a sicrhawyd gydag adolygiad dynol ar gyfer cynnwys clinigol.

- **Lefel 4: Rheoli.** Mesurir cyfathrebu ar gyrhaeddiad, dealltwriaeth ac ymddiriedaeth, ac mae AI yn brif ffrwd ar draws ymgyrchoedd, trin y cyfryngau, a gohebiaeth.

    - Mesurir oedran darllen, profi dealltwriaeth, ac ansawdd cyfieithu fesul ymgyrch.
    - Olrheinir amseroedd ymateb ar gyfer ymholiadau a gohebiaeth cwynion gyda drafftio a gynorthwyir gan AI ar waith.
    - Monitrir dangosyddion teimlad ac ymddiriedaeth ar draws cymunedau, nid dim ond yn gyfanredol.

- **Lefel 5: Cyfeirio.** Mae cyfathrebu yn cyfeirio ymgysylltu cyhoeddus amser real, gan gynnwys canfod a gwrthbrofi gwybodaeth anghywir, ac yn cyd-gynhyrchu cynnwys gyda chleifion a chymunedau.

    - Canfyddir gwybodaeth anghywir am iechyd ar draws sianeli a pharatoir cynnwys gwrthbrofi i'w gymeradwyo'n gyflym gan bobl.
    - Mae efelychiadau argyfwng yn ymarfer ymateb a gynorthwyir gan AI gan gynnwys senarios ffugiad dwfn a dynwared.
    - Mae cleifion a grwpiau cymunedol yn cyd-gynhyrchu negeseuon, gydag AI yn cael ei ddefnyddio i addasu tôn a fformat fesul cynulleidfa.

## Seiberddiogelwch

- **Lefel 0: Dim.** Nid yw diogelwch yn ystyried AI o gwbl, nac fel offeryn amddiffynnol nac fel arwyneb ymosod newydd. Mae systemau AI, os oes rhai, y tu allan i'r perimedr diogelwch a'r tu allan i'r gofrestr asedau.

    - Nid oes model bygythiad yn cwmpasu modelau, anogwyr, data hyfforddi, na phwyntiau terfyn casglu.
    - Nid yw pwyntiau terfyn model a chronfa ddata fector yn cynhyrchu logiau diogelwch.
    - Nid yw deunydd ymwybyddiaeth gwe-rwydo yn crybwyll abwyd a gynhyrchir gan AI na llais synthetig.

- **Lefel 1: Cychwyn.** Mae dadansoddwr unigol yn arbrofi gydag AI ar gyfer didoli rhybuddion tra bod defnydd AI anawdurdodedig yn lledaenu heb ei fonitro mewn mannau eraill yn y sefydliad. Ni all neb feintioli'r amlygiad.

    - Mae dadansoddwr diogelwch yn gludo darnau o logiau i sgwrsfot defnyddwyr i grynhoi digwyddiad.
    - Amheuir defnydd AI cysgodol ond ni chynhaliwyd unrhyw ddarganfod.
    - Nid yw AI yn ymddangos yn unman ar y gofrestr risg gorfforaethol na seiber.

- **Lefel 2: Datblygu.** Mae'r tîm diogelwch yn disgrifio rheolau ar gyfer gwaith a gynorthwyir gan AI ac yn treialu un achos defnydd canfod. Mae'r cwmpas yn adrannol a chydnabyddir bygythiadau penodol i AI ond nid ydynt yn cael eu rheoli eto.

    - Mae peilot yn cymhwyso dadansoddeg ymddygiadol i delemetreg hunaniaeth a mynediad mewn un parth.
    - Mae ymarfer darganfod AI cysgodol yn cynhyrchu rhestr gyntaf o bwyntiau terfyn model sy'n cael eu defnyddio.
    - Ychwanegir risg AI at y gofrestr risg gyda pherchennog ond heb gynllun trin.

- **Lefel 3: Safoni.** Dygir systemau AI yn llwyr y tu mewn i'r fframwaith diogelwch, gyda modelu bygythiadau penodol i AI, rheolaethau porth, a gofynion diogelwch cyflenwyr wedi'u manylu ar gyfer pob defnyddiad.

    - Mae gan bob system AI fodel bygythiad yn cwmpasu chwistrellu anogwr, gwenwyno data hyfforddi, ecsfiltradu model ac anogwr, a thrin allbwn anniogel.
    - Gorfodir atal colli data, golygu, a chyfyngu cyfradd wrth y porth model, heb eu gadael i ddisgyblaeth defnyddwyr.
    - Cofnodir asedau AI yn y gronfa ddata rheoli cyfluniad gyda pherchnogion, dosbarthiadau data, a dyddiadau adolygu, ac maent o fewn cwmpas cyflwyniad y fframwaith asesu seiber cenedlaethol.

- **Lefel 4: Rheoli.** Mesurir canlyniadau diogelwch, mae offer amddiffynnol AI yn brif ffrwd yn y ganolfan gweithrediadau diogelwch, ac mae systemau AI yn cael eu tîm-cochi ar amserlen yn hytrach nag ar ôl digwyddiad.

    - Olrheinir amser cymedrig i ganfod ac ymateb cyn ac ar ôl didoli a gynorthwyir gan AI, gyda baich positifau ffug yn cael ei fesur.
    - Contractir profi gwrthwynebus wedi'i drefnu o systemau AI a ddefnyddir ac olrheinir ei ganfyddiadau hyd at eu cau.
    - Caledir dilysu hunaniaeth y ddesg wasanaeth yn erbyn llais synthetig a dynwared ffugiad dwfn, a'i brofi.

- **Lefel 5: Cyfeirio.** Cyfeirir canfod, ymateb, a gwybodaeth am fygythiadau ar draws y system iechyd, gydag awtomeiddio dan oruchwyliaeth a gwydnwch wedi'i ymarfer yn erbyn ymosodiadau a alluogir gan AI.

    - Mae llyfrau chwarae cyfyngu yn gweithredu'n awtomatig ar gyfer canfyddiadau hyder uchel diffiniedig, gyda feto dynol a thrywydd archwilio llawn.
    - Cyfnewidir gwybodaeth am fygythiadau AI ar draws sefydliadau yn y system iechyd mewn amser bron yn real.
    - Mae ymarferion ar raddfa fawr yn ymarfer ransomware ac ymosodiadau cyfanrwydd data a alluogir gan AI ochr yn ochr â chynlluniau parhad clinigol.

## Apiau a gwefannau ar gyfer cleifion

- **Lefel 0: Dim.** Nid yw gwasanaethau digidol sy'n wynebu cleifion yn cynnwys AI. Mae cynnwys yn statig, mae personoli yn absennol, ac mae pob rhyngweithiad sydd angen barn yn mynd i giw ffôn.

    - Mae tudalennau gwybodaeth gwasanaeth yn gynnwys statig a gynhelir â llaw.
    - Mae archebu a chanslo ar y ffôn yn unig.
    - Nid oes chwilio na chymorth llywio sy'n wynebu cleifion yn bodoli.

- **Lefel 1: Cychwyn.** Mae tîm yn bolltio sgwrsfot ar wefan ar ei fenter ei hun, heb adolygiad clinigol, profi hygyrchedd, na llwybr uwchgyfeirio at berson.

    - Ychwanegir teclyn ateb cwestiynau generig at dudalen wasanaeth dros nos.
    - Nid oes gan y bot lwybr at berson na thrin baneri coch.
    - Ni pherfformiwyd unrhyw wiriad oedran darllen, cyfieithu, na hygyrchedd.

- **Lefel 2: Datblygu.** Mae adran yn treialu taith claf a gynorthwyir gan AI gyda ymwadiadau dogfenedig, geiriad cydsyniad, a goruchwyliaeth clinigwr. Mae'r arfer yn lleol ac yn cael ei gymhwyso'n anghyson mewn mannau eraill.

    - Mae un gwasanaeth yn treialu didoli apwyntiadau a gynorthwyir gan AI gyda phob allbwn yn cael ei adolygu gan glinigwr.
    - Disgrifir uwchgyfeirio o'r llwybr digidol at berson mewn gweithdrefn leol.
    - Trwsir problemau hygyrchedd yn ôl-weithredol ar ôl cwynion defnyddwyr.

- **Lefel 3: Safoni.** Mae pob AI sy'n wynebu cleifion yn dilyn un safon benodedig: hygyrch i'r lefel ryngwladol gydnabyddedig AA o leiaf, wedi'i ddatgelu'n glir fel un a gynhyrchwyd gan AI, â rhwyd diogelwch gyda llwybro caled baneri coch at bobl, wedi'i asesu ar gyfer diogelu data, ac yn gwneud dim honiadau clinigol oni bai ei fod wedi'i reoleiddio'n briodol.

    - Mae cynnwys cleifion a gynhyrchwyd gan AI wedi'i labelu felly ac mae ganddo berchennog dynol enwedig sy'n atebol am gywirdeb.
    - Mae patrymau symptomau baner goch yn osgoi'r AI yn gyfan gwbl ac yn llwybro'n uniongyrchol i asesiad clinigol brys.
    - Cynhyrchir cyfieithu i'r ieithoedd lleol a ddefnyddir fwyaf trwy lwybr a sicrhawyd gydag adolygiad dynol o gynnwys clinigol.

- **Lefel 4: Rheoli.** Mae AI sy'n wynebu cleifion yn brif ffrwd ac yn cael ei fesur ar ganlyniadau a thegwch, nid ar gyfaint defnydd. Cynhelir a monitrir llwybrau nad ydynt yn ddigidol yn fwriadol.

    - Dadansoddir cyfraddau cwblhau, boddhad, a phriodoldeb uwchgyfeirio yn ôl oedran, amddifadedd, anabledd, ac iaith.
    - Mae niweidiau a gamgymeriadau agos a adroddir o lwybrau digidol yn llifo i'r system digwyddiadau diogelwch cleifion.
    - Cedwir llwybrau ffôn ac wyneb yn wyneb gyda chydraddoldeb mesuredig o ran mynediad ac amser aros.

- **Lefel 5: Cyfeirio.** Cyfeirir gwasanaethau sy'n wynebu cleifion o amgylch yr unigolyn: personol, rhagweithiol, wedi'u cyd-gynhyrchu gyda chleifion, wedi'u hintegreiddio â'r cofnod a'r cynllun gofal, ac yn cael eu gwerthuso'n barhaus yn gyhoeddus.

    - Eglurir cynlluniau gofal a chanlyniadau mewn iaith blaen yn newis iaith a fformat y claf.
    - Mae anogwyr rhagweithiol ar gyfer sgrinio, brechu, ac adolygu cyflyrau hirdymor wedi'u personoli ac yn cael eu gwerthuso am degwch.
    - Mae cleifion yn rheoli pa ddata y caiff nodweddion AI ei ddefnyddio, gyda'r dewis yn weladwy ac yn ddirymadwy ar unrhyw adeg.

## Apiau a gwefannau ar gyfer darparwyr

- **Lefel 0: Dim.** Nid yw'r stad ddigidol sy'n wynebu staff yn cynnwys AI. Mae polisïau a chanllawiau'n eistedd mewn storfeydd dogfennau sy'n anodd eu chwilio ac yn aml yn hen.

    - Cyhoeddir canllawiau clinigol fel dogfennau ar fewnrwyd gyda chwiliad gwan.
    - Nid oes un lle i ddod o hyd i'r fformiwlari neu'r llwybr cyfredol.
    - Nid oes dadansoddeg defnydd ar gyfer cynnwys sy'n wynebu staff.

- **Lefel 1: Cychwyn.** Mae staff unigol yn defnyddio offer AI defnyddwyr i ateb cwestiynau clinigol a gweithredol, sy'n peryglu canllawiau anghywir hyderus heb darddiad.

    - Mae clinigwr yn gofyn i sgwrsfot defnyddwyr gwestiwn dosio ac yn cael ateb heb ffynhonnell.
    - Ni ellir olrhain atebion i unrhyw bolisi lleol cymeradwy na chanllaw cenedlaethol.
    - Nid oes logio yn bodoli, felly ni ellir ymchwilio i wallau wedyn.

- **Lefel 2: Datblygu.** Mae adran yn defnyddio adfer dros ei dogfennau cymeradwy ei hun ac yn disgrifio'r cafeatau. Mae'n gweithio'n dda i'r gyfarwyddiaeth honno ac nid yw'n cael ei ymestyn.

    - Adeiledir cynorthwyydd chwilio canllawiau dros lyfrgell bolisïau un gyfarwyddiaeth.
    - Disgrifir ymwadiadau a mecanwaith adborth mewn gweithdrefn leol.
    - Adnewyddir dogfennau ffynhonnell â llaw ac maent yn mynd yn hen.

- **Lefel 3: Safoni.** Mae safon benodedig yn llywodraethu pob AI sy'n wynebu staff: wedi'i seilio ar ffynonellau cymeradwy yn unig, pob ateb wedi'i ddyfynnu i ddogfen wedi'i fersiynu, mynediad ar sail rôl, wedi'i ymgorffori yn y llif gwaith, ac wedi'i gwmpasu gan achos diogelwch clinigol.

    - Mae pob ateb yn cysylltu â'r polisi neu'r canllaw cymeradwy penodol a'i fersiwn a'i ddyddiad adolygu.
    - Cyfyngir adfer i gorpws wedi'i guradu, ac mae cwestiynau y tu allan i'r corpws yn dychwelyd gwrthodiad penodol yn hytrach na dyfaliad.
    - Mae mynediad trwy fewngofnodi sengl gyda logio archwilio fesul defnyddiwr sy'n addas ar gyfer ymchwilio i ddigwyddiadau.

- **Lefel 4: Rheoli.** Mae AI sy'n wynebu staff yn brif ffrwd ac mae ei gywirdeb yn cael ei archwilio yn hytrach na'i dybio. Rheolir ffresni cynnwys yn awtomatig a mesurir y defnydd yn erbyn budd clinigol.

    - Mae archwiliad cywirdeb clinigol chwarterol yn samplu atebion ac yn eu graddio yn erbyn canllawiau ffynhonnell.
    - Caiff ffynonellau hen neu a ddisodlwyd eu baneru, eu cwarantinu, a'u tynnu o adfer yn awtomatig.
    - Olrheinir amser i ddod o hyd i ganllawiau, cadw at ganllawiau, a defnyddioldeb a adroddir gan staff.

- **Lefel 5: Cyfeirio.** Cyfeirir offer darparwyr i'r llif gwaith clinigol, gydag asiantau sy'n gweithredu mewn cyd-destun, curadu gwybodaeth barhaus, a chynnwys a rennir ar draws sefydliadau.

    - Mae cymorth penderfyniadau yn ymddangos ar y pwynt archebu neu ragnodi yn hytrach nag mewn rhaglen ar wahân.
    - Mae newidiadau canllawiau cenedlaethol neu ranbarthol yn lledaenu'n awtomatig i lwybrau lleol gyda hysbysiad newid i staff yr effeithir arnynt.
    - Rhennir gwybodaeth wedi'i churadu a chanlyniadau gwerthuso gyda sefydliadau cyfoed yn hytrach na'u hailadeiladu ym mhob un.

## Arweinyddiaeth system peirianneg meddalwedd

- **Lefel 0: Dim.** Nid oes arweinyddiaeth peirianneg. Mae gallu meddalwedd wedi'i allanoli'n llwyr, a phenderfynir cyfeiriad technegol gan ba bynnag gyflenwr sy'n cael ei ymgysylltu ar hyn o bryd.

    - Nid oes unrhyw swyddog gweithredol yn atebol am beirianneg meddalwedd na strategaeth dechnoleg.
    - Nid oes gallu peirianneg mewnol yn bodoli ar unrhyw lefel.
    - Gwneir penderfyniadau pensaernïaeth mewn cynigion cyflenwyr yn hytrach na chan y sefydliad.

- **Lefel 1: Cychwyn.** Mae un hyrwyddwr yn gwthio AI ymlaen heb fandad, cyllideb, nac olyniaeth. Mae cynnydd yn dibynnu'n llwyr ar aros y person hwnnw.

    - Mae pennaeth datblygu yn rhedeg arbrofion AI ochr yn ochr â llwyth gwaith darparu llawn.
    - Nid oes map ffordd a ariennir, dim ond profion cysyniad manteisgar.
    - Os yw'r hyrwyddwr yn gadael, nid oes dim yn parhau.

- **Lefel 2: Datblygu.** Mae un adran yn ysgrifennu strategaeth a phensaernïaeth darged, ac yn llogi ei harbenigwyr ei hun. Mae rhannau eraill o'r sefydliad yn cymryd cyfeiriadau gwahanol.

    - Mae cyfarwyddiaeth yn cyhoeddi strategaeth AI nad yw cyfarwyddiaethau eraill yn ei dilyn.
    - Ffurfir tîm gwyddor data mewn un sefydliad heb blatfform a rennir.
    - Disgrifir bylchau sgiliau mewn papur ond ni chânt eu hariannu.

- **Lefel 3: Safoni.** Manylir model gweithredu peirianneg ar draws y sefydliad neu'r rhanbarth: timau platfform, perchnogaeth gwasanaeth, egwyddorion pensaernïaeth sy'n cynnwys AI, a llwybrau gyrfa diffiniedig.

    - Mae egwyddorion pensaernïaeth yn gorchymyn porth model a lywodraethir, harnais gwerthuso, a monitro ar gyfer unrhyw wasanaeth AI.
    - Mae tîm platfform yn berchen ar wasanaethau AI a rennir fel nad yw timau cynnyrch yn eu hailadeiladu bob un.
    - Diffinnir a chyhoeddir teuluoedd swyddi peirianneg, dilyniant, a bandiau cyflog.

- **Lefel 4: Rheoli.** Mesurir arweinyddiaeth peirianneg ac mae'n atebol ar lefel bwrdd. Cefnogir penderfyniadau darparu, gallu, ac adeiladu yn erbyn prynu â thystiolaeth yn hytrach na'u honni.

    - Adroddir metrigau darparu megis amlder defnyddio, amser arweiniol, cyfradd methiant newid, ac amser adfer i'r bwrdd.
    - Mae swyddog gweithredol enwedig yn dal atebolrwydd penodol am ganlyniadau a risgiau AI yn yr ystafell fwrdd.
    - Olrheinir recriwtio, cadw, a thwf gallu mewnol yn erbyn cynllun gweithlu.

- **Lefel 5: Cyfeirio.** Mae arweinyddiaeth peirianneg yn ymestyn y tu hwnt i'r sefydliad. Cyfeirir llwyfannau a rennir, cod agored, a phiblinellau talent ar draws y system iechyd, ac mae'r sefydliad yn gosod cyfeiriad yn hytrach na'i ddilyn.

    - Mae platfform rhanbarthol a rennir yn gwasanaethu sefydliadau lluosog yn hytrach na bod pob un yn cynnal ei un ei hun.
    - Mae cydrannau ailddefnyddiadwy yn cael eu hagor-ffynhonnellu ac mae eu hailddefnyddio gan gyfoedion yn cael ei olrhain a'i gefnogi.
    - Mae prentisiaethau, partneriaethau academaidd, a rolau hybrid clinigol-technegol yn adeiladu piblinell gynaliadwy.

## Arweinyddiaeth system ymarferwyr meddygol

- **Lefel 0: Dim.** Nid oes gan glinigwyr rôl arwain mewn AI. Gwneir penderfyniadau gan swyddogaethau technoleg a chaffael, ac mae perchnogaeth risg glinigol heb ei diffinio.

    - Nid oes rôl prif swyddog gwybodaeth glinigol na nyrsio yn bodoli.
    - Ni phenodir unrhyw swyddog diogelwch clinigol ardystiedig ar gyfer defnyddiadau digidol.
    - Mae clinigwyr yn dysgu am offeryn AI gyntaf pan fydd yn ymddangos yn eu llif gwaith.

- **Lefel 1: Cychwyn.** Mae clinigwr unigol brwdfrydig yn eiriol dros AI heb amser wedi'i gynllunio yn y swydd, mandad, na llwybr llywodraethu. Mae eu prosiectau'n byw ac yn marw gyda'u ewyllys da.

    - Mae ymgynghorydd yn rhedeg gwerthusiadau AI yn ei amser di-dâl ei hun.
    - Nid oes llwybr o'u prosiect i lywodraethu clinigol.
    - Mae cydweithwyr yn anymwybodol bod y gwaith yn digwydd.

- **Lefel 2: Datblygu.** Mae adran yn penodi arweinydd clinigol digidol gyda chyfrifoldebau disgrifiedig a rhywfaint o amser gwarchodedig. Mae dylanwad wedi'i gyfyngu i'r adran honno.

    - Mae gan arweinydd clinigol cyfarwyddiaeth sesiynau a gynllunnir yn y swydd ar gyfer gwaith digidol.
    - Disgrifir llwybr lleol i gyfarfod llywodraethu'r gyfarwyddiaeth.
    - Cyflwynir un sesiwn hyfforddi leol ar AI i dîm arbenigedd.

- **Lefel 3: Safoni.** Manylir arweinyddiaeth ddigidol glinigol ledled y sefydliad, gyda rolau gwybodaeth glinigol hŷn enwedig, swyddogion diogelwch clinigol ardystiedig, safle i AI mewn llywodraethu clinigol, a datganiadau penodol o atebolrwydd proffesiynol.

    - Mae swyddog diogelwch clinigol ardystiedig gydag amser a gynllunnir yn y swydd yn ofynnol ar gyfer pob defnyddiad AI.
    - Mae perfformiad a digwyddiadau AI yn eitem sefydlog mewn llywodraethu clinigol ac archwilio clinigol.
    - Mae polisi yn datgan yn blaen fod atebolrwydd clinigol am benderfyniad yn aros gyda'r clinigwr waeth beth fo cynnwys AI.

- **Lefel 4: Rheoli.** Mesurir arweinyddiaeth glinigol ar y pethau sy'n bwysig: hyder clinigwyr, dibyniaeth briodol, ymddygiad diystyru, hyfforddiant, a chanlyniadau diogelwch ar draws y gweithlu cyfan.

    - Mae archwiliadau tuedd awtomeiddio yn samplu achosion lle cytunodd clinigwyr ag allbwn AI a'i ddiystyru, ac yn chwilio am barchu amhriodol.
    - Mae llythrennedd AI wedi'i ymgorffori mewn hyfforddiant gorfodol, arfarnu, a datblygiad proffesiynol parhaus.
    - Arolygir profiad a adroddir gan glinigwyr o offer AI a gweithredir arno, gyda chanlyniadau'n cael eu cyhoeddi'n fewnol.

- **Lefel 5: Cyfeirio.** Mae arweinwyr clinigol yn llunio'r maes y tu hwnt i'w sefydliad eu hunain, trwy ymchwil, datblygu canllawiau, safonau proffesiynol, a rhwydweithiau gwerthuso.

    - Mae partneriaeth academaidd glinigol yn gwerthuso AI a ddefnyddir yn ddisgwyliedig ac yn cyhoeddi'r canlyniadau, gan gynnwys canfyddiadau negyddol.
    - Mae clinigwyr yn cyfrannu at ganllawiau cenedlaethol a safbwyntiau cyrff proffesiynol ar AI mewn ymarfer.
    - Mae cymrodoriaethau a secondiadau AI clinigol yn adeiladu piblinell o arweinwyr digidol credadwy yn glinigol.

## Arweinyddiaeth system rhanddeiliaid y llywodraeth

- **Lefel 0: Dim.** Nid oes ymgysylltu â'r llywodraeth, rheoleiddwyr, na chyrff cenedlaethol ar AI. Mae atebolrwydd cyhoeddus am ddefnydd AI heb ei ddiffinio.

    - Nid oes adrodd ar AI yn cyrraedd yr adran noddi na'r corff cenedlaethol.
    - Nid yw'r sefydliad yn ymateb i ymgynghoriadau polisi.
    - Nid oes strategaeth ariannu ar gyfer AI y tu hwnt i geisiadau manteisgar.

- **Lefel 1: Cychwyn.** Mae unigolion yn ymateb i ymgynghoriadau neu'n siarad â chysylltiadau cenedlaethol yn anffurfiol. Mae safbwyntiau'n bersonol ac heb eu cydlynu.

    - Mae un swyddog gweithredol yn ateb galwad am dystiolaeth heb arwyddo mewnol.
    - Perthynas anffurfiol ag arweinydd rhaglen genedlaethol yw'r unig sianel.
    - Mae dwy ran o'r sefydliad yn rhoi gwybodaeth groes i gyrff cenedlaethol.

- **Lefel 2: Datblygu.** Mae'r sefydliad yn disgrifio ei safbwynt ac yn briffio rhanddeiliaid o bryd i'w gilydd, fel arfer o amgylch cais neu ymweliad penodol. Mae ymgysylltu yn adweithiol.

    - Cynhyrchir pecyn briffio ar gyfer gwleidydd neu swyddog cenedlaethol sy'n ymweld.
    - Ysgrifennir achos budd-daliadau i gefnogi un cais ariannu cenedlaethol.
    - Mae'r sefydliad yn ymuno â pheilot cenedlaethol heb gynllun ar gyfer yr hyn sy'n digwydd ar ei ôl.

- **Lefel 3: Safoni.** Manylir ymgysylltu ac mae'n rheolaidd: cofnodion tryloywder cyhoeddedig, llinellau adrodd diffiniedig i gyrff cenedlaethol a rheoleiddwyr, atebolrwydd ar lefel bwrdd am AI, ac aliniad bwriadol â strategaeth genedlaethol ac amodau ariannu.

    - Cyhoeddir cofnodion tryloywder algorithmig ar gyfer AI sy'n wynebu'r cyhoedd fel mater o arfer safonol.
    - Diffinnir ac ymarferir llwybrau adrodd i'r adran noddi, rheoleiddiwr dyfeisiau, ac awdurdod diogelu data.
    - Mapir cynlluniau AI lleol yn benodol i ymrwymiadau strategaeth ddigidol a data genedlaethol.

- **Lefel 4: Rheoli.** Mesurir perfformiad yn erbyn fframweithiau cenedlaethol, ei feincnodi yn erbyn cyfoedion, ac mae'n destun craffu allanol annibynnol y gall y sefydliad ei brofi.

    - Mae'r sefydliad yn ei feincnodi ei hun trwy asesiadau aeddfedrwydd digidol cenedlaethol ac yn gweithredu ar y bylchau.
    - Cyfarfyddir ag archwilio allanol a chraffu seneddol neu gyhoeddus â thystiolaeth barod yn hytrach nag byrfyfyrio.
    - Mae adroddiad cyhoeddus blynyddol yn cwmpasu defnydd AI, buddion, digwyddiadau, ac effaith ar degwch.

- **Lefel 5: Cyfeirio.** Mae'r sefydliad yn cyd-greu polisi, safonau, a modelau ariannu, yn gweithio'n rhyngwladol, ac yn helpu i lunio'r rheolau y bydd pawb arall yn eu dilyn.

    - Mae staff yn eistedd ar flychau tywod rheoleiddwyr, pwyllgorau safonau, a grwpiau cynghori cenedlaethol.
    - Mae cydweithio rhyngwladol yn rhannu dulliau gwerthuso a thystiolaeth byd go iawn ar draws systemau iechyd.
    - Mae'r sefydliad yn helpu i ddylunio fframweithiau caffael cenedlaethol a modelau talu ar gyfer AI.

## Sofraniaeth ddigidol

- **Lefel 0: Dim.** Ni ofynnir byth ymhle mae data'n cael ei brosesu, pwy all ei gyrchu, ac o dan gyfraith pwy. Mae rhagosodiadau'n beth bynnag y mae'r cyflenwr yn ei gynnig.

    - Nid yw contractau'n cynnwys cymal preswyliad data nac awdurdodaeth.
    - Mae is-broseswyr a'u lleoliadau'n anhysbys ac heb eu rhestru.
    - Ni all neb ddweud o ba wlad y gwasanaethir cais casglu penodol.

- **Lefel 1: Cychwyn.** Mae unigolyn yn codi'r cwestiwn ac yn ymchwilio'n anffurfiol. Mae pryder ond dim gofyniad, cofrestr, na phenderfyniad.

    - Mae pensaer yn gofyn i gyflenwr ymhle mae casglu'n digwydd ac yn derbyn ateb amwys.
    - Mae prosiect yn nodi trosglwyddiad data rhyngwladol heb gwblhau asesiad risg trosglwyddo.
    - Nid oes cofrestr o lifoedd data trawsffiniol yn bodoli.

- **Lefel 2: Datblygu.** Mae un adran yn ysgrifennu gofynion preswyliad i mewn i un contract ac yn drafftio asesiadau trosglwyddo. Dyblygir yr arfer fesul achos yn hytrach na'i osod fel polisi.

    - Mae un contract yn mynnu storio yn y wlad ond yn dawel ar brosesu a mynediad cymorth.
    - Drafftir asesiad risg trosglwyddo ar gyfer un cyflenwr.
    - Mae dewis datganedig dros letya lleol yn bodoli heb fecanwaith gorfodi.

- **Lefel 3: Safoni.** Manylir gofynion sofraniaeth ar gyfer pob system AI: preswyliad data, rheolaeth awdurdodaethol, tryloywder is-broseswyr, rheoli allweddi, a hygludedd ac ymadael â thystiolaeth.

    - Prosesir data cleifion yn y wlad o dan gyfraith ddomestig, gan gynnwys llwybrau mynediad cymorth a gweinyddol.
    - Mae allweddi amgryptio yn cael eu rheoli gan y cwsmer ac yn ddirymadwy, felly ni all cyflenwr ddarllen data yn unochrog.
    - Mae rhestr fodelau gymeradwy yn cofnodi lleoliad lletya, awdurdodaeth, a thelerau cadw ar gyfer pob opsiwn.

- **Lefel 4: Rheoli.** Mesurir a rheolir risg sofraniaeth fel risg strategol: meintiolir ac adroddir crynodiad, dibyniaeth, a chlo i mewn, ac ymarferir ymadael yn hytrach na'i fod yn ddamcaniaethol.

    - Mae cofrestr fyw yn cofnodi pob trosglwyddiad trawsffiniol gyda'i sail gyfreithlon a'i ddiogelwch.
    - Meintiolir risg crynodiad cyflenwyr a modelau ac adroddir i'r bwrdd ochr yn ochr â risgiau strategol eraill.
    - Gweithredir profion ymadael a hygludedd ar amserlen, gan gynnwys echdynnu anogwyr, cyfluniadau, ac asedau mân-diwnio.

- **Lefel 5: Cyfeirio.** Mae gan y sefydliad ymreolaeth strategol wirioneddol. Mae llwythi gwaith yn symud rhwng darparwyr heb golli gwasanaeth, mae opsiynau agored a sofran yn hyfyw, ac mae seilwaith cyhoeddus a rennir yn lleihau dibyniaeth.

    - Profir bod llwythi gwaith AI hanfodol yn hygludadwy ar draws dau ddarparwr o leiaf gydag amser newid mesuredig.
    - Dilyswyd modelau pwysau agored sy'n rhedeg ar gyfrifiadura cenedlaethol neu ranbarthol fel dewisiadau amgen credadwy ar gyfer achosion defnydd diffiniedig.
    - Mae'r sefydliad yn cyfrannu at seilwaith AI cyhoeddus a rennir ac yn ei ddefnyddio yn hytrach na dyblygu pentyrrau preifat.

## Uwchsgilio

- **Lefel 0: Dim.** Nid oes hyfforddiant AI yn bodoli. Mae'r gweithlu heb ei baratoi, ac nid oes neb yn gwybod beth yw'r lefel sgiliau sylfaenol.

    - Nid yw sefydlu a hyfforddiant gorfodol yn cynnwys cynnwys llythrennedd AI na data.
    - Ni fesurwyd llinell sylfaen sgiliau digidol erioed.
    - Nid oes llinell gyllideb hyfforddi ar gyfer AI.

- **Lefel 1: Cychwyn.** Mae unigolion yn dysgu eu hunain yn eu hamser eu hunain ac ar eu cost eu hunain. Mae sgil wedi'i ganolbwyntio mewn ychydig o frwdfrydigion ac yn anweledig i gynllunio'r gweithlu.

    - Mae clinigwr yn cwblhau cwrs AI ar-lein heb ei ariannu a'r tu allan i oriau gwaith.
    - Cynhelir sesiynau anffurfiol amser cinio gan bwy bynnag sydd â diddordeb.
    - Nid oes cofnod o bwy sydd wedi'i hyfforddi mewn beth.

- **Lefel 2: Datblygu.** Mae adran yn adeiladu cwricwlwm ar gyfer ei staff ei hun ac yn olrhain cwblhau'n lleol. Mae ansawdd yn amrywio ac nid oes dim yn trosglwyddo rhwng adrannau.

    - Mae cyfarwyddiaeth yn cynnal sesiynau ymwybyddiaeth AI ar gyfer ei thimau ei hun yn unig.
    - Mae rhwydwaith hyrwyddwyr lleol yn ffurfio heb rôl nac amser a ddyrannwyd wedi'u diffinio.
    - Olrheinir cwblhau mewn taenlen a ddelir gan yr adran.

- **Lefel 3: Safoni.** Manylir cwricwlwm sy'n seiliedig ar rôl ar gyfer y gweithlu cyfan, gyda chymwyseddau diffiniedig, sylfeini gorfodol, amser gwarchodedig, ac asesu, wedi'i alinio â fframweithiau gallu cydnabyddedig.

    - Mae llwybrau haenog yn gwasanaethu pob staff, defnyddwyr mynych, adeiladwyr, a chymeradwywyr, pob un â chymwyseddau diffiniedig.
    - Mae llythrennedd AI a data yn rhan o sefydlu a hyfforddiant gorfodol ar gyfer pob rôl.
    - Cynllunnir amser dysgu gwarchodedig yn y swydd yn hytrach na disgwyl iddo ddigwydd mewn bylchau.

- **Lefel 4: Rheoli.** Mesurir gallu, nid presenoldeb. Asesir cymhwysedd, hyder, a defnydd cymhwysol diogel ar draws y gweithlu cyfan ac mae'n gyrru ymyrraeth wedi'i thargedu.

    - Asesir cymhwysedd trwy senarios ymarferol, gan gynnwys adnabod pryd i beidio ag ymddiried mewn allbwn AI.
    - Mae data gallu yn ôl grŵp staff a safle yn nodi ble i fuddsoddi nesaf.
    - Cydberthynir cwmpas hyfforddiant â digwyddiadau sy'n gysylltiedig ag AI ac adroddiadau defnydd anniogel.

- **Lefel 5: Cyfeirio.** Cyfeirir dysgu fel system barhaus wedi'i hymgorffori mewn gwaith, gyda chymrodoriaethau, partneriaethau academaidd, a chwricwla wedi'u hallforio i'r system iechyd ehangach.

    - Mae hyfforddi o fewn y llif gwaith yn cyflwyno canllawiau ar adeg ei ddefnyddio yn hytrach nag mewn ystafell ddosbarth fisoedd ynghynt.
    - Mae cymrodoriaethau a secondiadau AI yn cylchdroi staff rhwng rolau clinigol, technegol a llywodraethu.
    - Rhennir cwricwla a deunyddiau asesu gyda sefydliadau eraill a darparwyr addysg.

## Diswyddiadau

- **Lefel 0: Dim.** Ni ystyrir effaith ar y gweithlu. Mae achosion busnes yn hawlio arbedion heb ddatgan a yw swyddi'n cael eu heffeithio, ac nid oes meddwl ymgynghori nac adleoli yn bodoli.

    - Mae achos busnes AI yn hawlio arbediad sy'n rhyddhau arian parod heb enwi unrhyw rôl yr effeithir arni.
    - Nid oes templed asesu effaith ar y gweithlu yn bodoli.
    - Nid yw cynrychiolwyr staff yn cymryd rhan mewn penderfyniadau AI ar unrhyw gam.

- **Lefel 1: Cychwyn.** Mae rheolwyr unigol yn dyfalu ac yn gweithredu'n anffurfiol. Mae pryder yn lledaenu trwy si, sy'n niweidio mabwysiadu yn fwy nag y byddai'r dechnoleg byth.

    - Mae si yn cylchredeg y bydd AI yn torri swyddi gweinyddol, heb ddatganiad swyddogol.
    - Mae rheolwr yn rhewi swydd wag yn dawel wrth ragweld awtomeiddio.
    - Mae staff yn cuddio eu defnydd AI eu hunain rhag ofn awtomeiddio eu rôl eu hunain i ffwrdd.

- **Lefel 2: Datblygu.** Mae adran yn disgrifio'r effaith ddisgwyliedig ar y gweithlu mewn achos busnes ac yn trin canlyniadau fesul achos. Mae ymgynghori yn dechrau'n hwyr, ar ôl i benderfyniadau gael eu gwneud i bob pwrpas.

    - Mae achos busnes cyfarwyddiaeth yn datgan nifer y swyddi a ryddhawyd heb nodi pa rolau na sut.
    - Adleolir ychydig o staff yn anffurfiol trwy ewyllys da rheolwyr.
    - Mae ymgynghori ffurfiol yn dechrau dim ond unwaith y mae'r dechnoleg eisoes wedi'i chontractio.

- **Lefel 3: Safoni.** Mae polisi penodedig yn gofyn am asesiad effaith ar y gweithlu cyn cymeradwyo AI, trin adleoli-yn-gyntaf, ymgynghori cynnar â chynrychiolwyr staff, a meini prawf clir sy'n gwahaniaethu newid rôl oddi wrth ddiswyddiad.

    - Mae asesiad effaith ar y gweithlu yn eistedd ochr yn ochr ag asesiadau effaith diogelu data a chydraddoldeb fel porth cymeradwyo gorfodol.
    - Mae polisi yn ymrwymo bod amser a ryddhawyd yn cael ei ailfuddsoddi'n gyntaf mewn ansawdd gofal ac ôl-groniad cyn unrhyw benderfyniad niferoedd staff.
    - Mae cynrychiolwyr staff yn cymryd rhan o'r cam dylunio, nid y cam hysbysiad.

- **Lefel 4: Rheoli.** Mesurir a rheolir trawsnewidiadau. Olrheinir ac adroddir llwyddiant adleoli, effaith ar gydraddoldeb, ac a wireddwyd yr arbedion a ragfynegwyd mewn gwirionedd.

    - Olrheinir cyfraddau adleoli a chadw ar ôl trawsnewid yn ôl grŵp staff.
    - Dadansoddir effaith newidiadau rôl ar gydraddoldeb yn ôl nodwedd warchodedig a gweithredir arni lle mae gwahaniaethau'n ymddangos.
    - Mae adolygu ar ôl gweithredu yn profi a wireddwyd arbedion a hawliwyd neu a gawsant eu dadleoli i rywle arall yn unig.

- **Lefel 5: Cyfeirio.** Cyfeirir trawsnewid y gweithlu ar draws y system iechyd, gan ddefnyddio colli staff naturiol ac ailsgilio yn hytrach na dadleoli, a chreu'r rolau newydd y mae AI ei hun eu hangen.

    - Mae rhwydwaith cyflogwyr rhanbarthol yn rhannu cyfleoedd adleoli fel bod staff yn symud rhwng sefydliadau yn hytrach nag allan o'r sector.
    - Crëir ac ariennir rolau newydd megis arbenigwr sicrwydd AI, swyddog diogelwch clinigol, a pheiriannydd anogwyr a gwerthuso.
    - Mae'r sefydliad yn cyhoeddi ei dystiolaeth trawsnewid gweithlu fel y gall eraill gynllunio ar ddata go iawn yn hytrach nag honiadau gwerthwyr.

## Nodiadau ar gwmpas

* Mae **Diswyddiadau** yn y model hwn yn golygu lleihau'r gweithlu a newid rôl sy'n deillio o fabwysiadu AI. Mae diangen gweithredol yn yr ystyr peirianneg, hynny yw newid i system wrth gefn a chynllun wrth gefn pan nad yw system neu fodel ar gael, wedi'i gwmpasu o dan **Argaeledd uchel meddalwedd** ac **Adfer ar ôl trychineb meddalwedd**.
* Mae adrannau **Arweinyddiaeth system** yn asesu arweinyddiaeth etholaeth, nid uwchafiaeth unigolion. Gall sefydliad gyflogi clinigwyr rhagorol a dal i sgorio lefel 1 ar arweinyddiaeth system ymarferwyr meddygol os nad oes gan yr un ohonynt fandad, amser gwarchodedig, na llwybr llywodraethu.
* Sgorir **Sofraniaeth ddigidol** ar reolaeth a ddangoswyd a hygludedd â thystiolaeth, nid dewis datganedig. Mae cymal contract sy'n mynnu storio yn y wlad yn dystiolaeth lefel 2; mae newid darparwr wedi'i ymarfer yn dystiolaeth lefel 5.
* Mae adrannau **Meddalwedd** wedi'u grwpio gyda'i gilydd ger brig y model oherwydd eu bod yn datblygu gyda'i gilydd. Anaml y bydd sefydliad yn cyrraedd lefel 4 yn **DevOps meddalwedd** tra'n aros ar lefel 1 ym **Mhensaernïaeth meddalwedd**, ac mae anghydweddiad rhyngddynt fel arfer yn werth ymchwilio iddo.
* Rhennir adrannau **Apiau a gwefannau** yn ôl cynulleidfa oherwydd bod y rhwymedigaethau diogelwch, hygyrchedd a datgelu yn wahanol iawn rhwng cleifion a darparwyr.

## Dyfyniadau

Dyma'r cyfeiriadau a ddefnyddiwyd i lunio'r model hwn. Fe'u tynnwyd o ganllawiau gwasanaeth iechyd gwladol, rheoleiddwyr, cyrff safonau, a fframweithiau aeddfedrwydd cyhoeddedig. Roedd yr URLau yn gyfredol pan ysgrifennwyd y dudalen hon; mae canllawiau yn y maes hwn yn newid yn aml, felly gwiriwch y fersiwn gyfredol a chadarnhewch y berthnasedd i'ch awdurdodaeth eich hun cyn dibynnu ar unrhyw ran ohono. Cedwir teitlau'r gweithiau a ddyfynnir yn eu hiaith wreiddiol.

Fframweithiau aeddfedrwydd ac aeddfedrwydd digidol:

1. NHS England Digital. *What Good Looks Like framework and Digital Maturity Assessments.* https://digital.nhs.uk/services/what-good-looks-like---digital-maturity-assessments
2. NHS England. *Digital maturity assessment.* https://www.england.nhs.uk/long-read/digital-maturity-assessment/
3. NHS England Digital. *Digital Maturity Assessment report: 2024 and 2025 results.* https://digital.nhs.uk/data-and-information/digital-maturity-assessment-report-2024-and-2025-results
4. HIMSS. *Digital maturity models.* https://www.himss.org/maturity-models/
5. HIMSS. *Adoption Model for Analytics Maturity (AMAM).* https://www.himss.org/maturity-models/amam/
6. Digital Medicine Society (DiMe). *Health AI Maturity Model.* https://dimesociety.org/ai-implementation-in-healthcare-playbook/ai-evaluation-readiness/health-ai-maturity-model/
7. NEJM AI. *The AI Maturity Roadmap: A Framework for Effective and Sustainable AI in Health Care.* https://ai.nejm.org/doi/full/10.1056/AI-S2400177
8. MITRE. *AI Maturity Model.* https://aimaturitymodel.mitre.org/

Diogelwch clinigol, sicrwydd, a thystiolaeth:

9. NHS England Digital. *Clinical risk management standards DCB0129 and DCB0160.* https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/review-of-digital-clinical-safety-standards-dcb0129-and-dcb0160
10. NHS England. *Digital Technology Assessment Criteria (DTAC): guidance for buyers and suppliers.* https://transform.england.nhs.uk/key-tools-and-info/digital-technology-assessment-criteria-dtac/
11. NICE. *Evidence standards framework for digital health technologies.* https://www.nice.org.uk/corporate/ecd7/resources/evidence-standards-framework-for-digital-health-technologies-pdf-1124017457605
12. NHS England and MHRA. *AI and Digital Regulations Service for health and social care.* https://digitalregulations.innovation.nhs.uk/

Dyfeisiau meddygol a rheoleiddio AI:

13. MHRA. *AI Airlock: the regulatory sandbox for AI as a Medical Device.* https://www.gov.uk/government/collections/ai-airlock-the-regulatory-sandbox-for-aiamd
14. MHRA MedRegs blog. *Advancing AI regulation in healthcare: insights from AI Airlock Phase 2.* https://medregs.blog.gov.uk/2026/06/09/advancing-ai-regulation-in-healthcare-insights-from-ai-airlock-phase-2/
15. European Union. *Artificial Intelligence Act.* https://artificialintelligenceact.eu/
16. ISO/IEC. *ISO/IEC 42001:2023, Information technology, Artificial intelligence, Management system.* https://www.iso.org/standard/42001
17. ISO. *ISO 14971 medical device risk management and ISO 13485 medical device quality management.* https://www.iso.org/

Ysgrifennu amgylchynol a dogfennaeth glinigol:

18. NHS England. *Guidance on the use of AI-enabled ambient scribing products in health and care settings.* https://www.england.nhs.uk/long-read/guidance-on-the-use-of-ai-enabled-ambient-scribing-products-in-health-and-care-settings/
19. NHS England Digital. *Adopting ambient scribing products in health and care settings.* https://digital.nhs.uk/services/ambient-scribing

Diogelwch seiber:

20. NHS England Digital. *Cyber Assessment Framework (CAF)-aligned Data Security and Protection Toolkit (DSPT) guidance.* https://digital.nhs.uk/cyber-and-data-security/guidance-and-resources/caf-aligned-dspt-guidance
21. NHS England. *CAF-aligned DSPT: evolution of our assurance model.* https://transform.england.nhs.uk/information-governance/caf-aligned-dspt-evolution-of-our-assurance-model/
22. OWASP. *Top 10 for Large Language Model Applications.* https://owasp.org/www-project-top-10-for-large-language-model-applications/
23. MITRE. *ATLAS: Adversarial Threat Landscape for Artificial-Intelligence Systems.* https://atlas.mitre.org/
24. NIST. *AI Risk Management Framework.* https://www.nist.gov/itl/ai-risk-management-framework

Hygyrchedd, dylunio gwasanaeth, a safonau sy'n wynebu cleifion:

25. NHS digital service manual. *Accessibility.* https://service-manual.nhs.uk/accessibility
26. NHS digital service manual. *New accessibility requirements: WCAG 2.2.* https://service-manual.nhs.uk/accessibility/new-accessibility-requirements-wcag-2-2
27. NHS England. *Digital accessibility standards.* https://www.england.nhs.uk/long-read/digital-accessibility/
28. NHS England Digital. *Standards for NHS App integration.* https://digital.nhs.uk/services/nhs-app/how-to-integrate-with-the-nhs-app/standards-for-nhs-app-integration
29. NHS digital service manual, gan gynnwys y safon gwasanaeth NHS. https://service-manual.nhs.uk/

Llywodraethu a moeseg AI yn y sector cyhoeddus:

30. Government Digital Service. *Launching the Artificial Intelligence Playbook for the UK Government.* https://gds.blog.gov.uk/2025/02/10/launching-the-artificial-intelligence-playbook-for-the-uk-government/
31. GOV.UK. *Algorithmic Transparency Recording Standard hub.* https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub
32. World Health Organization. *Ethics and governance of artificial intelligence for health.* https://www.who.int/publications/i/item/9789240029200

Llwyfannau data, rhyngweithredadwyedd, a sofraniaeth:

33. NHS England. *NHS Federated Data Platform.* https://www.england.nhs.uk/digitaltechnology/nhs-federated-data-platform/
34. NHS England Digital. *Federated Data Platform.* https://digital.nhs.uk/services/federated-data-platform
35. HL7. *FHIR: Fast Healthcare Interoperability Resources.* https://hl7.org/fhir/
36. SMART Health IT. *SMART on FHIR application launch framework.* https://docs.smarthealthit.org/
37. SNOMED International. *SNOMED CT clinical terminology.* https://www.snomed.org/

Gweithlu, gallu, ac arweinyddiaeth:

38. UK Government. *Digital and Data Profession Capability Framework.* Gweler hefyd y storfa hon: [examples/sgiliau/fframwaith-gallu-proffesiwn-digidol-a-data-llywodraeth-y-du](sgiliau/fframwaith-gallu-proffesiwn-digidol-a-data-llywodraeth-y-du/)
39. Digital Health. *NHS leaders call time on AI pilots and demand national scaling.* https://www.digitalhealth.net/2026/06/nhs-leaders-call-time-on-ai-pilots-and-demand-national-scaling/

Darparu meddalwedd, cwmwl, a dylunio:

40. NHS England Digital. *Cloud Centre of Excellence: cloud security good practice guide.* https://digital.nhs.uk/services/cloud-centre-of-excellence/cloud-security-good-practice-guide
41. NHS England Digital. *NHS cloud policies and guidance.* https://digital.nhs.uk/services/cloud-centre-of-excellence/strategy/nhs-cloud-policies-and-guidance
42. NHS England Digital. *NHS and social care data: off-shoring and the use of public cloud services.* https://digital.nhs.uk/data-and-information/looking-after-information/data-security-and-information-governance/nhs-and-social-care-data-off-shoring-and-the-use-of-public-cloud-services
43. National Cyber Security Centre. *Cloud security guidance and the cloud security principles.* https://www.ncsc.gov.uk/collection/cloud
44. FinOps Foundation. *FinOps Framework and FinOps maturity model.* https://www.finops.org/insights/finops-maturity-model/
45. DORA. *DevOps Research and Assessment: capabilities and State of DevOps research.* https://dora.dev/
46. ISO. *ISO 22301 business continuity management and ISO/IEC 27031 ICT readiness for business continuity.* https://www.iso.org/
47. GOV.UK Service Manual. *User-centred design.* https://www.gov.uk/service-manual/user-centred-design

## Dyfyniadau yn ôl maes ymarfer

| Maes ymarfer | Dyfyniadau |
|---|---|
| Offer datblygwyr | 9, 16, 22, 24, 30 |
| Profi awtomatig | 9, 22, 24 |
| Pensaernïaeth meddalwedd | 9, 10, 12, 35, 37, 41 |
| Sicrhau ansawdd meddalwedd | 9, 10, 11, 12, 45 |
| Argaeledd uchel meddalwedd | 20, 41, 43, 46 |
| Adfer ar ôl trychineb meddalwedd | 20, 42, 43, 46 |
| DevOps meddalwedd | 20, 24, 41, 45 |
| Galluoedd gwasanaethau cwmwl | 40, 41, 42, 43 |
| FinOps gwasanaethau cwmwl | 41, 44 |
| Dylunio sy'n canolbwyntio ar y defnyddiwr (UCD/UI/UX) | 25, 26, 27, 29, 47 |
| AI yn ein cynhyrchion meddalwedd | 1, 6, 7, 9, 10, 11, 12, 31 |
| AI yn ein dyfeisiau meddygol | 12, 13, 14, 15, 16, 17 |
| Integreiddiadau ag EHR, EMR, ac ati. | 33, 34, 35, 36, 37 |
| Galluoedd gwerthwyr | 10, 11, 12, 16, 20 |
| Ysgrifenyddion amgylchynol | 13, 18, 19 |
| Gweinyddu ysbytai | 5, 33, 34, 39 |
| Gweinyddu practis cyffredinol | 9, 10, 25, 27 |
| Adran gydymffurfio | 12, 16, 24, 30, 31, 32 |
| Adran gyllid | 16, 30 |
| Adran gyfreithiol | 15, 16, 30, 31 |
| Adran adnoddau dynol | 30, 32, 38 |
| Adran cysylltiadau cyhoeddus | 25, 27, 30, 31 |
| Seiberddiogelwch | 20, 21, 22, 23, 24 |
| Apiau a gwefannau ar gyfer cleifion | 10, 11, 25, 26, 27, 28, 29 |
| Apiau a gwefannau ar gyfer darparwyr | 10, 12, 25, 35, 37 |
| Arweinyddiaeth system peirianneg meddalwedd | 1, 2, 3, 38 |
| Arweinyddiaeth system ymarferwyr meddygol | 9, 12, 39 |
| Arweinyddiaeth system rhanddeiliaid y llywodraeth | 1, 3, 30, 31, 32 |
| Sofraniaeth ddigidol | 15, 16, 20, 33, 34 |
| Uwchsgilio | 6, 30, 38 |
| Diswyddiadau | 30, 32, 38 |
