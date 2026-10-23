# DevOps gan TODO

Gweler https://github.com/ramyrams/DevOps

Cydnabyddiaeth:
https://camo.githubusercontent.com/bda83d076818b865aa6c9b64aa055d789d1d1580/687474703a2f2f626c6f672e6172756e67757074612e6d652f77702d636f6e74656e742f75706c6f6164732f323031352f30322f636f6e74696e756f75732d64656c69766572792d6d617475726974792d6d6f64656c2d76312e302d31303234783733342e706e67

<table>

<tr>

<th></th>
<th>Cychwynnol</th>
<th>Wedi'i reoli</th>
<th>Wedi'i ddiffinio</th>
<th>Rheolaeth feintiol</th>
<th>Optimeiddio</th>

</tr><tr>

<th>Diwylliant a sefydliad</th>

<td>
<ul>
<li>Timau wedi'u trefnu yn ôl platfform/technoleg
<li>Prosesau wedi'u diffinio a'u dogfennu
</ul>
</td>

<td>
<ul>
<li>Un ôl-groniad fesul tîm
<li>Mabwysiadu methodolegau ystwyth
<li>Dileu ffiniau rhwng timau
</ul>
</td>

<td>
<ul>
<li>Cydweithio estynedig rhwng timau
<li>Dileu'r ffin rhwng datblygu/gweithrediadau
<li>Proses gyffredin ar gyfer pob newid
</ul>
</td>

<td>
<ul>
<li>
<li>Gwelliant parhaus ar draws timau
<li>Timau'n gyfrifol yr holl ffordd i gynhyrchu
</ul>
</td>

<td>
<ul>
<li>Timau trawswasanaethol
</ul>
</td>

</tr><tr>

<th>Adeiladu a defnyddio</th>

<td>
<ul>
<li>Rheoli fersiynau canolog
<li>Sgriptiau adeiladu awtomataidd
<li>Dim rheoli arteffactau
<li>Defnyddio â llaw
<li>Amgylcheddau'n cael eu darparu â llaw
</ul>
</td>

<td>
<ul>
<li>Adeiladwaith CI trwy bleidleisio (polling)
<li>Gellir ail-greu unrhyw adeiladwaith o'r system rheoli ffynhonnell
<li>Rheoli arteffactau adeiladu
<li>Sgriptiau defnyddio awtomataidd
<li>Darparu amgylcheddau'n awtomataidd
</ul>
</td>

<td>
<ul>
<li>Adeiladwaith CI trwy fachyn cyflwyno (commit hook)
<li>Mae'r adeiladwaith yn methu os na fodlonir ansawdd (dadansoddi cod, perfformiad, ac ati)
<li>Defnyddio unrhyw arteffact y gellir ei ryddhau i unrhyw amgylchedd ar wasgiad botwm
</ul>
</td>

<td>
<ul>
<li>Mae'r tîm yn blaenoriaethu cadw'r sylfaen cod yn barod i'w defnyddio dros wneud gwaith newydd
<li>Ni adewir adeiladwaith wedi torri
<li>Defnyddiadau wedi'u cyfeirio
<li>Defnyddiadau glas/gwyrdd
</ul>
</td>

<td>
<ul>
<li>Defnyddiadau parhaus heb gyffwrdd
</ul>
</td>

</tr><tr>

<th>Rhyddhau</th>

<td>
<ul>
<li>Rhyddhau anaml ac annibynadwy
<li>Proses â llaw
</ul>
</td>

<td>
<ul>
<li>Rhyddhau poenus ac anaml ond dibynadwy
</ul>
</td>

<td>
<ul>
<li>Rhyddhau anaml ond wedi'i awtomeiddio'n llawn a dibynadwy mewn unrhyw amgylchedd
</ul>
</td>

<td>
<ul>
<li>Rhyddhau mynych wedi'i awtomeiddio'n llawn
<li>Defnyddio wedi'i ddatgysylltu o ryddhau
<li>Rhyddhau caneri
</ul>
</td>

<td>
<ul>
<li>Dim ôl-gylchoedd; bob amser yn symud ymlaen
</ul>
</td>

</tr><tr>

<th>Rheoli data</th>

<td>
<ul>
<li>Mudo data yn cael ei wneud â llaw, heb sgriptiau
</ul>
</td>

<td>
<ul>
<li>Mae mudo data yn defnyddio sgriptiau wedi'u fersiynu, a wneir â llaw
</ul>
</td>

<td>
<ul>
<li>Newidiadau awtomataidd a fersiynedig i storfeydd data
</ul>
</td>

<td>
<ul>
<li>Newidiadau i storfeydd data'n cael eu gwneud yn awtomatig fel rhan o'r broses ddefnyddio
</ul>
</td>

<td>
<ul>
<li>Newidiadau ac ôl-gylchoedd storfa ddata awtomatig, wedi'u profi gyda phob defnyddiad
</ul>
</td>

</tr><tr>

<th>Profi a gwirio</th>

<td>
<ul>
<li>Profion uned awtomataidd
<li>Amgylchedd profi ar wahân
</ul>
</td>

<td>
<ul>
<li>Profion integreiddio awtomatig
<li>Dadansoddi cod statig
<li>Dadansoddi cwmpas profion
</ul>
</td>

<td>
<ul>
<li>Profion swyddogaethol awtomatig
<li>Profion perfformiad a phrofion diogelwch â llaw
</ul>
</td>

<td>
<ul>
<li>Profion derbyn cwbl awtomatig
<li>Profion perfformiad a phrofion diogelwch awtomatig
<li>Profi archwiliadol â llaw yn seiliedig ar ddadansoddi profi seiliedig ar risg
</ul>
</td>

<td>
<ul>
<li>Gwirio'r gwerth busnes disgwyliedig
<li>Diffygion yn cael eu canfod a'u trwsio ar unwaith (symud ymlaen)
</ul>
</td>

</tr><tr>

<th>Gwybodaeth ac adrodd</th>

<td>
<ul>
<li>Metrigau perfformiad sylfaenol
<li>Adrodd â llaw
<li>Gweladwy i'r sawl sy'n rhedeg yr adroddiad
</ul>
</td>

<td>
<ul>
<li>Mesur y broses
<li>Adrodd awtomatig
<li>Gweladwy i'r tîm
</ul>
</td>

<td>
<ul>
<li>Cynhyrchu nodiadau rhyddhau yn awtomatig
<li>Olrheiniadwyedd y biblinell
<li>Hanes adrodd
<li>Gweladwy ar draws seilos
</ul>
</td>

<td>
<ul>
<li>Dadansoddi tueddiadau adroddiadau
<li>Graffiau amser real ar fetrigau'r biblinell ddefnyddio
</ul>
</td>

<td>
<ul>
<li>Hunanwasanaeth deinamig ar gyfer gwybodaeth
<li>Dangosfyrddau y gellir eu haddasu
<li>Croesgyfeirio ar draws ffiniau sefydliadol
</ul>
</td>

</tr>

</table>
