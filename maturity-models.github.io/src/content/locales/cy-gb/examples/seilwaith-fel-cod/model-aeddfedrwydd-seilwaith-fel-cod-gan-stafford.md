# Model aeddfedrwydd Seilwaith fel Cod (IaC)

Cydnabyddiaeth: https://programmaticponderings.com/2016/11/25/infrastructure-as-code-maturity-model/


## Lefel IaC -1: Atchweliadol

Prosesau na ellir eu hailadrodd, wedi'u rheoli'n wael, ac yn adweithiol

  * Dim ond ychydig o'r seilwaith sy'n cael ei ddarparu a'i reoli fel cod
  * Mae darparu seilwaith yn dal i fod angen llawer o brosesau â llaw
  * Nid yw cod seilwaith yn cael ei ysgrifennu gan ddefnyddio offer a phatrymau safonol y diwydiant
  * Nid yw cod seilwaith yn cael ei adeiladu, ei brofi ar lefel uned, ei ddarparu a'i reoli, fel rhan o biblinell
  * Mae cod, prosesau a gweithdrefnau seilwaith wedi'u dogfennu'n anghyson, ac nid ydynt ar gael i'r holl bartïon sydd eu hangen

## Lefel IaC 0: Ailadroddadwy

Prosesau wedi'u dogfennu ac wedi'u hawtomeiddio'n rhannol

  * Mae'r holl god a chyfluniad seilwaith yn cael eu storio mewn system rheoli fersiynau ganolog
  * Mae profi, darparu a rheoli seilwaith yn cael eu gwneud fel rhan o biblinell awtomataidd
  * Gellir defnyddio'r seilwaith fel cydrannau unigol
  * Yn manteisio ar ryngwynebau rhaglennol i ddyfeisiau ffisegol
  * Archwiliad diogelwch awtomataidd o gydrannau a dibyniaethau
  * CLI neu API hunanwasanaeth, lle mae cwsmeriaid mewnol yn darparu eu hadnoddau
  * Mae'r holl god, prosesau a gweithdrefnau wedi'u dogfennu ac ar gael
  * Seilwaith a phrosesau digyfnewid

## Lefel IaC 1: Cyson

Prosesau awtomataidd wedi'u cymhwyso ar draws cylch oes cyfan y rhaglen

  * Darparu a rheoli seilwaith wedi'u hawtomeiddio'n llawn
  * Defnydd lleiaf o offer seilwaith 'cartref' heb eu cefnogi
  * Mae profion uned yn bodloni gofynion cwmpas cod
  * Caiff cod ei brofi'n barhaus ar bob cofrestriad i'r system rheoli fersiynau
  * Seilwaith sydd ar gael yn barhaus gan ddefnyddio darparu heb amser segur
  * Yn defnyddio cofrestrfeydd cyfluniad
  * Ffeiliau cyfluniad wedi'u templedu (dim hud awk/sed)
  * Cyfrinachau'n cael eu rheoli'n ddiogel
  * Awtoraddio yn seiliedig ar nodweddion llwyth a ddiffinnir gan y defnyddiwr

## Lefel IaC 2: Wedi'i reoli'n feintiol

Prosesau wedi'u mesur a'u rheoli

  * Yn defnyddio ffeiliau diffinio seilwaith
  * Yn gallu gwneud ôl-gylchoedd awtomataidd
  * Mae seilwaith a systemau cefnogi ar gael yn fawr ac yn oddefgar o fai
  * Cyfluniad allanol, dim API blwch du i addasu cyfluniad
  * Seilwaith wedi'i fonitro'n llawn gyda rhybuddio ffurfweddadwy
  * Logio seilwaith cyfun y gellir ei archwilio
  * Mae'r holl god, prosesau a gweithdrefnau wedi'u dogfennu'n dda mewn System Rheoli Gwybodaeth
  * Mae cod seilwaith yn defnyddio model rhaglennu datganiadol yn hytrach nag gorchmynnol, efallai…

## Lefel IaC 3: Optimeiddio

Ffocws ar wella prosesau

  * Seilwaith hunan-iachau, hunan-ffurfweddu, hunan-optimeiddio
  * Wedi'i brofi o ran perfformiad a'i fonitro yn erbyn KPIs busnes
  * Defnydd mwyaf posibl o seilwaith a dwysedd llwyth gwaith
  * Yn cadw at batrymau Cloud Native a 12-Factor
  * Cod sy'n annibynnol ar y cwmwl sy'n lleihau cloi i mewn i werthwr cwmwl
