# Model aeddfedrwydd Seilwaith fel Cod (IaC) gan Joel Parker Henderson

Seilwaith fel Cod (IaC) yw'r broses o reoli a darparu seilwaith cyfrifiadurol (prosesau, gweinyddion metel noeth, gweinyddion rhithwir, ac ati) a'u cyfluniad trwy ffeiliau y gall peiriant eu prosesu (cod ffynhonnell, sgriptiau, ffeiliau datganiadol, dotffeiliau, ac ati) yn hytrach na chyfluniad caledwedd ffisegol neu ddefnyddio offer rhyngweithiol.

Gweler Wikipedia:
* [Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_Code)
* [Continuous configuration automation (CCA)](https://en.wikipedia.org/wiki/Continuous_configuration_automation)
* [DevOps](https://en.wikipedia.org/wiki/DevOps)
* [Maturity model](https://en.wikipedia.org/wiki/Maturity_model)


## Lefel 0: Dim

*  Dim IaC, neu ddefnydd dibwys, neu amherthnasol.


## Lefel 1: Cychwynnol + Anffurfiol

* Mae Seilwaith fel Cod yn y camau cychwynnol, gan gynnwys meysydd megis asesiadau, prosiect treialu, peilot, prototeip.

* Mae cyd-aelodau ar brosiect yn dechrau siarad am IaC, fel arfer gydag un arwr neu grŵp bach o bobl sydd ei eisiau.

* Mae ansawdd cod y cod IaC yn tueddu i fod wedi'i rolio â llaw, ei brofi â llaw, neu ei offeru â llaw.

* Mae cynllunio rhaglenni'n canolbwyntio ar gludo cod.

<b>Enghreifftiau:</b>

* Defnyddio gwasanaethau cwmwl, megis Amazon Web Services.

* Defnyddio sgript cragen sy'n gwirio amser gweithredol gweinydd

<b>Syniadau i wella:</b>

* Symud o ddefnyddio gosodiadau untro wedi'u rholio â llaw tuag at ddefnyddio rheolwyr pecynnau megis apm, apt, brew, choco, melpa, gem, pip, yum, yn ogystal â rheoli cyfluniad megis ffeiliau cyfluniad a dotffeiliau.

* Dysgu am unrhyw offer cyfluniad prif ffrwd poblogaidd, megis Ansible, Salt, Puppet, Chef.


## Lefel 2: Datblygu + Disgrifio

* Mae seilwaith yn datblygu, fel arfer oherwydd angen tîm. Mae meddalwedd nodweddiadol ar y lefel hon yn aml yn cynnwys gwasanaethau cwmwl (e.e. AWS), cynhwysyddio (e.e. Docker), rheoli cyfluniad (e.e. Ansible), offer cyfeirio (e.e. Kubernetes), meddalwedd darparu parhaus (e.e. GoCD), ac o bosibl cynigion llwyfan fel gwasanaeth (e.e. Heroku).

* Mae cyd-aelodau o'r adran yn siarad am IaC, ac yn gweithio ar ffyrdd o ddefnyddio IaC i helpu'r adran ar draws prosiectau lluosog.

* Mae ansawdd cod yn dechrau defnyddio profion awtomataidd ar gyfer y cod IaC, yn ychwanegol at god y rhaglen.

* Mae cefnogwyr IaC yn datblygu ac yn disgrifio meysydd trawsswyddogaethol, megis Cost (lleihau), Cyflymder (gweithredu), a Risg (lliniaru).

* Mae cynllunio rhaglenni'n cynnwys dogfennaeth, gan ganolbwyntio'n ddelfrydol ar ddatblygu amrywiol lyfrau coginio, ryseitiau, maniffestau, glasbrintiau, yn ogystal â gweithrediadau datblygwyr (devops) megis integreiddio parhaus, piblinellau defnyddio fel rhan annatod o'r broses ddarparu rhaglenni, a sicrhau ansawdd sy'n cwmpasu'r biblinell ddarparu gyfan.


<b>Enghreifftiau:</b>

* Mae o leiaf ychydig o brosiectau lle gall datblygwr gyflwyno llinell o god, a'r cod yn llifo i gynhyrchu, trwy ddefnyddio integreiddio parhaus, darparu parhaus, ac yn ddewisol galluoedd ar gyfer baneri nodweddion, rhyddhau cyfyngedig (glas/gwyrdd, go/no, rhyddhau caneri, ac ati).

* Mae'r adran yn rhannu cod IaC ac yn cydweithio ar IaC gan ddefnyddio storfeydd cod ffynhonnell, ac yn ddewisol galluoedd ar gyfer sgwrsio, cymorth, dogfennaeth, wikis, cynllunio, ac ati.

<b>Syniadau i wella:</b>

* Technegol: Datblygu cod IaC mewn ffyrdd sy'n cyd-fynd â chod prosiect eich timau, megis gwneud adolygiadau cod, cynllunio map ffordd, profi idempotency, ac ati. Ymgyfarwyddo â'r holl enghreifftiau uchod: AWS, Docker, Ansible, Kubernetes, GoCD, Heroku; hyd yn oed os dewiswch ddefnyddio dewisiadau amgen yn lle'r rhain, bydd y dysgu'n trosglwyddo'n dda.

* Cymdeithasol: Rhannu cod IaC â thimau eraill, cael adborth, a gwella'r cod a'i holl alluoedd cysylltiedig ar gyfer cydweithio, dogfennaeth, gwirio, ac ati.


## Lefel 3: Safoni + Graddio

* Mae seilwaith yn safoni, fel arfer diolch i dimau'n creu manylebau, cod y gellir ei rannu, storfeydd cod ffynhonnell.

* Gall aelodau'r tîm greu prosiectau IaC yn gyflym, yn hyderus ac yn effeithiol, yn gyflawn gyda llwyddiant o'r dechrau i'r diwedd, yn ogystal ag unrhyw ddogfennaeth ac ardystiad.

* Mae ansawdd cod yn anelu tuag at alluoedd gwasanaeth-ganolog, megis APIs, y gallu i'w ddarganfod, y gallu i'w gymysgu.

* Mae'r dull o ymdrin ag IaC yn gyffredinol yn orchmynnol a/neu'n weithdrefnol. Mae'r dull gorchmynnol yn canolbwyntio ar sut y mae'r seilwaith i'w newid i fodloni'r cyfluniad targed. Mae'r dull gorchmynnol yn diffinio gorchmynion penodol y mae angen eu gweithredu i orffen gyda'r casgliad dymunol.

* Mae cefnogwyr IaC yn safoni meysydd trawsswyddogaethol, megis Cost (lleihau), Cyflymder (gweithredu), a Risg (lliniaru). Mae'r safoni'n cynnwys cyfaddawdau penodol, megis cost/budd defnyddio cyflymach, neu risg/gwobr dilysiadau diogelwch.

* Mae cynllunio rhaglenni'n cynnwys dylunio ar gyfer hunan-safoni a/neu hunan-raddio, yn ogystal â thechnegau devops megis seilwaith digyfnewid, gweinyddion ffenics, IaaS, PaaS, ac iPaaS.

<b>Enghreifftiau:</b>

* Fel arfer gellir defnyddio prosiectau â botwm sengl, gan gynnwys creu adnoddau cysylltiedig, cronfeydd data, rhwydweithiau, cyfeiriadau, ac ati mewn union bryd yn ôl yr angen.

* Mae IaC yn cael ei ddefnyddio y tu hwnt i'r adran TG yn unig; gall hyn gynnwys offer hunanwasanaeth, megis sefydlu gliniaduron newydd, yn ogystal ag offer busnes sylweddol, megis timau TG-busnes a all ffurfweddu a defnyddio gwasanaethau newydd yn annibynnol ar weinyddwyr systemau TG.

<b>Sut i wella:</b>

* Technegol: Dysgu sut i fodiwleiddio cod IaC a'i ddosbarthu, megis trwy ddefnyddio rheolwyr pecynnau, modiwlau, llyfrgelloedd, dadelfennu swyddogaethol, profi idempotency, ail-lwytho poeth, ac ati.

* Cymdeithasol: Cynllunio'n benodol ar gyfer llywodraethu da. Mae llywodraethu'n cynnwys meysydd technegol megis fersiynu a rheoli rhyddhau, meysydd tîm megis dadansoddi gwraidd y broblem pum-pam ac ôl-sylliadau heb feio, a meysydd rheoli megis cyllidebu a chymeradwyo.


## Lefel 4: Rheoli + Mesur + Cenadaethau

* Mae seilwaith yn cael ei reoli a'i fesur ochr yn ochr â datganiadau cenhadaeth penodol. Ymgeiswyr da yw [OKRs (Objectives and Key Results)](https://github.com/joelparkerhenderson/objectives_and_key_results), [metrigau KPI (Key Performance Indicator)](https://github.com/joelparkerhenderson/key_performance_indicator), a [Cherdyn Sgorio Cytbwys Strategol](https://github.com/joelparkerhenderson/strategic_balanced_scorecard).

* Gall aelodau'r tîm ddefnyddio byrddau sgorio, dangosfyrddau, metrigau, mesuriadau ac offer tebyg a yrrir gan ddata yn hawdd i redeg, uwchraddio a gwirio cod IaC. Gall arweinyddiaeth weithredol TG ddefnyddio systemau crynhoi yn hawdd i brofi galluoedd TG-busnes a chyfiawnhad costau.

* Mae ansawdd cod yn cael ei fesur a'i brofi'n gyson gan ddefnyddio offer darparu parhaus, fetio ansawdd cod awtomataidd, meincnodi graddio, ac ati.

* Mae'r dull o ymdrin ag IaC yn gyffredinol yn ddatganiadol a/neu'n swyddogaethol. Mae'r dull datganiadol yn canolbwyntio ar beth ddylai'r cyfluniad targed terfynol fod. Mae'r dull datganiadol yn diffinio'r cyflwr dymunol, ac mae'r system yn gweithredu'r hyn sydd angen digwydd i gyflawni'r cyflwr dymunol hwnnw.

* Mae cefnogwyr IaC yn profi llwyddiant mewn meysydd trawsswyddogaethol, megis Cost (lleihau), Cyflymder (gweithredu), a Risg (lliniaru). Mae'r prawf yn cynnwys data ar gyfer cost/budd defnyddio cyflymach, risg/gwobr dilysiadau diogelwch, ac ati.

* Mae cynllunio rhaglenni'n cynnwys dylunio ar gyfer hunanreoli a/neu hunanfesur.

<b>Enghreifftiau:</b>

* Mae llawer o brosiectau'n cael eu cychwyn â botwm sengl, o'r dechrau i'r diwedd, o godiad haul i fachlud haul. Gall hyn gynnwys Rheoli Cylch Oes Rhaglenni (ALM), Rheoli Portffolio, Rhaglenni a Phrosiectau (PPPM), arferion gorau, cyfateb modelau aeddfedrwydd, ac ati.

* Mae offer IaC yn allyrru metrigau, sydd yn eu tro yn ddefnyddiol ar gyfer Monitro Perfformiad Rhaglenni (APM), monitro synthetig, dadfygio, a chynllunio twf galluoedd.

<b>Sut i wella:</b>

* Technegol: gwella cod fel ei fod yn addas i'w ddefnyddio'n brif ffrwd. Mae hyn yn cynnwys cwmpas profion trylwyr ar gyfer achosion ymylol, dulliau methu, ymyriadau anhrefn, lliniaru toriadau.

* Cymdeithasol: Cynllunio IaC o ran rheoli hirdymor a defnydd prif ffrwd, gan gynnwys mapiau ffordd ar gyfer rheoli cylch oes, rheoli cyllid, rheoli cyfathrebu, mapio ffrwd werth, a rheoli llywodraethu.


## Lefel 5: Optimeiddio + Cyfeirio + Cyfleoedd

* Ariennir ymchwil a datblygu seilwaith i greu cynhyrchion a gwasanaethau newydd, a chyfleoedd busnes newydd hefyd.

* Mae ansawdd cod yn gallu esblygu'n gyson, ac yn croesawu cyfraniadau, trafodaethau a defnydd gan y sefydliad cyfan, ac o bosibl ei bartneriaid, gwerthwyr, cwsmeriaid, a'r cyhoedd.

* Mae'r dull o ymdrin ag IaC yn gyfeiriol ac yn ymwybodol o'r amgylchedd. Mae'r dull cyfeiriol yn canolbwyntio ar pam y dylai'r cyfluniad fod mewn ffordd benodol gan ystyried holl gyd-berthnasoedd a chyd-ddibyniaethau rhaglenni lluosog sy'n rhedeg ar yr un seilwaith a geir fel arfer mewn cynhyrchu.

* Mae cefnogwyr IaC yn optimeiddio llwyddiant mewn meysydd trawsswyddogaethol, megis Cost (lleihau), Cyflymder (gweithredu), a Risg (lliniaru). Mae'r optimeiddio'n cynnwys data ar gyfer cost/budd defnyddio cyflymach, risg/gwobr dilysiadau diogelwch, ac ati. Mae'r optimeiddio hefyd yn cynnwys edrych ymlaen strategol i yrru buddsoddiad sefydliadol yn y meysydd trawsswyddogaethol hyn.

* Mae cynllunio rhaglenni'n cynnwys dylunio ar gyfer hunan-optimeiddio a/neu hunan-iachau.

<b>Enghreifftiau:</b>

* Amazon yn creu AWS, Google yn creu GCS, Facebook yn creu React, Netflix yn creu llawer o brosiectau cod agored.

* Cyfeirio ymhlith cymylau lluosog, mewnol ac allanol, gydag offer megis Kubernetes a Mesos.

<b>Sut i wella:</b>

* Creu cod sy'n ysbrydoli pobl i dyfu mwy o alluoedd IaC. Mae hyn yn cynnwys cyhoeddi'r cod, megis blogio amdano, creu sianeli cymorth ar ei gyfer, a dysgu sut i'w ddefnyddio.

* Defnyddio TG i yrru cyfleoedd strategol, megis buddsoddiadau mewn cwmnïau, cynhyrchion, a phobl.
