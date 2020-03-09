const lifeTables = {
  totalPopulation: [
    {
      age: 0,
      deathChance: 0.005776968318969011,
      lifeRemaining: 78.6075210571289
    },
    {
      age: 1,
      deathChance: 0.0003818386176135391,
      lifeRemaining: 78.06355285644531
    },
    {
      age: 2,
      deathChance: 0.000248394557274878,
      lifeRemaining: 77.09317779541016
    },
    {
      age: 3,
      deathChance: 0.0001928160636452958,
      lifeRemaining: 76.11221313476562
    },
    {
      age: 4,
      deathChance: 0.00014872249448671937,
      lifeRemaining: 75.12679290771484
    },
    {
      age: 5,
      deathChance: 0.0001408825773978606,
      lifeRemaining: 74.13789367675781
    },
    {
      age: 6,
      deathChance: 0.0001259810960618779,
      lifeRemaining: 73.14826202392578
    },
    {
      age: 7,
      deathChance: 0.00011421359522501007,
      lifeRemaining: 72.15741729736328
    },
    {
      age: 8,
      deathChance: 0.00010369524534326047,
      lifeRemaining: 71.16560363769531
    },
    {
      age: 9,
      deathChance: 0.00009535192657494918,
      lifeRemaining: 70.17293548583984
    },
    {
      age: 10,
      deathChance: 0.00009301797399530187,
      lifeRemaining: 69.17958068847656
    },
    {
      age: 11,
      deathChance: 0.00010298151755705476,
      lifeRemaining: 68.18596649169922
    },
    {
      age: 12,
      deathChance: 0.00013252763892523944,
      lifeRemaining: 67.19293212890625
    },
    {
      age: 13,
      deathChance: 0.0001858931063907221,
      lifeRemaining: 66.20177459716797
    },
    {
      age: 14,
      deathChance: 0.0002583088935352862,
      lifeRemaining: 65.21399688720703
    },
    {
      age: 15,
      deathChance: 0.00033830752363428473,
      lifeRemaining: 64.230712890625
    },
    {
      age: 16,
      deathChance: 0.0004207263409625739,
      lifeRemaining: 63.25227737426758
    },
    {
      age: 17,
      deathChance: 0.0005096942186355591,
      lifeRemaining: 62.278690338134766
    },
    {
      age: 18,
      deathChance: 0.0006031306111253798,
      lifeRemaining: 61.3101921081543
    },
    {
      age: 19,
      deathChance: 0.0006978617748245597,
      lifeRemaining: 60.346893310546875
    },
    {
      age: 20,
      deathChance: 0.0007951713050715625,
      lifeRemaining: 59.38868713378906
    },
    {
      age: 21,
      deathChance: 0.000889373361133039,
      lifeRemaining: 58.435550689697266
    },
    {
      age: 22,
      deathChance: 0.0009702147799544036,
      lifeRemaining: 57.487125396728516
    },
    {
      age: 23,
      deathChance: 0.001032469910569489,
      lifeRemaining: 56.54246520996094
    },
    {
      age: 24,
      deathChance: 0.0010802376782521605,
      lifeRemaining: 55.60038757324219
    },
    {
      age: 25,
      deathChance: 0.001122550922445953,
      lifeRemaining: 54.659976959228516
    },
    {
      age: 26,
      deathChance: 0.0011651417007669806,
      lifeRemaining: 53.7208366394043
    },
    {
      age: 27,
      deathChance: 0.0012071458622813225,
      lifeRemaining: 52.78292465209961
    },
    {
      age: 28,
      deathChance: 0.0012518096482381225,
      lifeRemaining: 51.84611129760742
    },
    {
      age: 29,
      deathChance: 0.0012999660102650523,
      lifeRemaining: 50.91046905517578
    },
    {
      age: 30,
      deathChance: 0.0013505816459655762,
      lifeRemaining: 49.9760856628418
    },
    {
      age: 31,
      deathChance: 0.0014020204544067383,
      lifeRemaining: 49.042999267578125
    },
    {
      age: 32,
      deathChance: 0.0014542329590767622,
      lifeRemaining: 48.111148834228516
    },
    {
      age: 33,
      deathChance: 0.0015055579133331776,
      lifeRemaining: 47.18049240112305
    },
    {
      age: 34,
      deathChance: 0.0015564917121082544,
      lifeRemaining: 46.25088119506836
    },
    {
      age: 35,
      deathChance: 0.0016147659625858068,
      lifeRemaining: 45.322200775146484
    },
    {
      age: 36,
      deathChance: 0.0016787280328571796,
      lifeRemaining: 44.39469528198242
    },
    {
      age: 37,
      deathChance: 0.0017399053322151303,
      lifeRemaining: 43.468505859375
    },
    {
      age: 38,
      deathChance: 0.0017976908711716533,
      lifeRemaining: 42.543399810791016
    },
    {
      age: 39,
      deathChance: 0.001859532785601914,
      lifeRemaining: 41.619117736816406
    },
    {
      age: 40,
      deathChance: 0.001936057349666953,
      lifeRemaining: 40.69572067260742
    },
    {
      age: 41,
      deathChance: 0.00203607021830976,
      lifeRemaining: 39.7736930847168
    },
    {
      age: 42,
      deathChance: 0.0021597782615572214,
      lifeRemaining: 38.853816986083984
    },
    {
      age: 43,
      deathChance: 0.0023056466598063707,
      lifeRemaining: 37.936832427978516
    },
    {
      age: 44,
      deathChance: 0.0024699631612747908,
      lifeRemaining: 37.02334976196289
    },
    {
      age: 45,
      deathChance: 0.0026473840698599815,
      lifeRemaining: 36.1137809753418
    },
    {
      age: 46,
      deathChance: 0.002845828188583255,
      lifeRemaining: 35.20831298828125
    },
    {
      age: 47,
      deathChance: 0.0030785934068262577,
      lifeRemaining: 34.307369232177734
    },
    {
      age: 48,
      deathChance: 0.00335723627358675,
      lifeRemaining: 33.41176986694336
    },
    {
      age: 49,
      deathChance: 0.0036819539964199066,
      lifeRemaining: 32.52263641357422
    },
    {
      age: 50,
      deathChance: 0.004029641393572092,
      lifeRemaining: 31.64097785949707
    },
    {
      age: 51,
      deathChance: 0.004400948062539101,
      lifeRemaining: 30.766969680786133
    },
    {
      age: 52,
      deathChance: 0.004820072557777166,
      lifeRemaining: 29.9007625579834
    },
    {
      age: 53,
      deathChance: 0.0052849845960736275,
      lifeRemaining: 29.043163299560547
    },
    {
      age: 54,
      deathChance: 0.005778339225798845,
      lifeRemaining: 28.19481658935547
    },
    {
      age: 55,
      deathChance: 0.006283685099333525,
      lifeRemaining: 27.355777740478516
    },
    {
      age: 56,
      deathChance: 0.006794278975576162,
      lifeRemaining: 26.52559471130371
    },
    {
      age: 57,
      deathChance: 0.007318704389035702,
      lifeRemaining: 25.703630447387695
    },
    {
      age: 58,
      deathChance: 0.007868977263569832,
      lifeRemaining: 24.889450073242188
    },
    {
      age: 59,
      deathChance: 0.008456273935735226,
      lifeRemaining: 24.0828914642334
    },
    {
      age: 60,
      deathChance: 0.009092561900615692,
      lifeRemaining: 23.284013748168945
    },
    {
      age: 61,
      deathChance: 0.009767520241439342,
      lifeRemaining: 22.49308204650879
    },
    {
      age: 62,
      deathChance: 0.010466912761330605,
      lifeRemaining: 21.710018157958984
    },
    {
      age: 63,
      deathChance: 0.011180669069290161,
      lifeRemaining: 20.934370040893555
    },
    {
      age: 64,
      deathChance: 0.01192191056907177,
      lifeRemaining: 20.165422439575195
    },
    {
      age: 65,
      deathChance: 0.012710461392998695,
      lifeRemaining: 19.40270233154297
    },
    {
      age: 66,
      deathChance: 0.013621198944747448,
      lifeRemaining: 18.64605712890625
    },
    {
      age: 67,
      deathChance: 0.014620319940149784,
      lifeRemaining: 17.896638870239258
    },
    {
      age: 68,
      deathChance: 0.015770327299833298,
      lifeRemaining: 17.15475845336914
    },
    {
      age: 69,
      deathChance: 0.0171000137925148,
      lifeRemaining: 16.42161750793457
    },
    {
      age: 70,
      deathChance: 0.018428446725010872,
      lifeRemaining: 15.698613166809082
    },
    {
      age: 71,
      deathChance: 0.020316941663622856,
      lifeRemaining: 14.98395824432373
    },
    {
      age: 72,
      deathChance: 0.022101905196905136,
      lifeRemaining: 14.284331321716309
    },
    {
      age: 73,
      deathChance: 0.024193743243813515,
      lifeRemaining: 13.595876693725586
    },
    {
      age: 74,
      deathChance: 0.026342058554291725,
      lifeRemaining: 12.920571327209473
    },
    {
      age: 75,
      deathChance: 0.029041821137070656,
      lifeRemaining: 12.256607055664062
    },
    {
      age: 76,
      deathChance: 0.032000839710235596,
      lifeRemaining: 11.608251571655273
    },
    {
      age: 77,
      deathChance: 0.03544320911169052,
      lifeRemaining: 10.975476264953613
    },
    {
      age: 78,
      deathChance: 0.039257220923900604,
      lifeRemaining: 10.360404968261719
    },
    {
      age: 79,
      deathChance: 0.043392524123191833,
      lifeRemaining: 9.763314247131348
    },
    {
      age: 80,
      deathChance: 0.04816289618611336,
      lifeRemaining: 9.18350601196289
    },
    {
      age: 81,
      deathChance: 0.05321643874049187,
      lifeRemaining: 8.62289047241211
    },
    {
      age: 82,
      deathChance: 0.05923973023891449,
      lifeRemaining: 8.079459190368652
    },
    {
      age: 83,
      deathChance: 0.06656382977962494,
      lifeRemaining: 7.556738376617432
    },
    {
      age: 84,
      deathChance: 0.07404520362615585,
      lifeRemaining: 7.059957981109619
    },
    {
      age: 85,
      deathChance: 0.08195354789495468,
      lifeRemaining: 6.58453369140625
    },
    {
      age: 86,
      deathChance: 0.09087931364774704,
      lifeRemaining: 6.127696990966797
    },
    {
      age: 87,
      deathChance: 0.10193751752376556,
      lifeRemaining: 5.690263748168945
    },
    {
      age: 88,
      deathChance: 0.11407470703125,
      lifeRemaining: 5.2794013023376465
    },
    {
      age: 89,
      deathChance: 0.1273311823606491,
      lifeRemaining: 4.894813060760498
    },
    {
      age: 90,
      deathChance: 0.14173302054405212,
      lifeRemaining: 4.536060810089111
    },
    {
      age: 91,
      deathChance: 0.15728875994682312,
      lifeRemaining: 4.20257043838501
    },
    {
      age: 92,
      deathChance: 0.17398592829704285,
      lifeRemaining: 3.8936407566070557
    },
    {
      age: 93,
      deathChance: 0.1917882263660431,
      lifeRemaining: 3.6084537506103516
    },
    {
      age: 94,
      deathChance: 0.2106333076953888,
      lifeRemaining: 3.346088171005249
    },
    {
      age: 95,
      deathChance: 0.23043155670166016,
      lifeRemaining: 3.1055335998535156
    },
    {
      age: 96,
      deathChance: 0.2510662376880646,
      lifeRemaining: 2.8857076168060303
    },
    {
      age: 97,
      deathChance: 0.27239489555358887,
      lifeRemaining: 2.685472011566162
    },
    {
      age: 98,
      deathChance: 0.29425257444381714,
      lifeRemaining: 2.5036511421203613
    },
    {
      age: 99,
      deathChance: 0.3164564371109009,
      lifeRemaining: 2.3390486240386963
    }
  ],
  malePopulation: [
    {
      age: 0,
      deathChance: 0.00630234694108367,
      lifeRemaining: 76.10075378417969
    },
    {
      age: 1,
      deathChance: 0.00042268639663234353,
      lifeRemaining: 75.58261108398438
    },
    {
      age: 2,
      deathChance: 0.0002874353376682848,
      lifeRemaining: 74.6143569946289
    },
    {
      age: 3,
      deathChance: 0.00022494496079161763,
      lifeRemaining: 73.63566589355469
    },
    {
      age: 4,
      deathChance: 0.0001581647666171193,
      lifeRemaining: 72.6521224975586
    },
    {
      age: 5,
      deathChance: 0.00015554059064015746,
      lifeRemaining: 71.66353607177734
    },
    {
      age: 6,
      deathChance: 0.000138456147396937,
      lifeRemaining: 70.67460632324219
    },
    {
      age: 7,
      deathChance: 0.00012436427641659975,
      lifeRemaining: 69.68431854248047
    },
    {
      age: 8,
      deathChance: 0.00011041062680305913,
      lifeRemaining: 68.69293212890625
    },
    {
      age: 9,
      deathChance: 0.00009820367267820984,
      lifeRemaining: 67.70045471191406
    },
    {
      age: 10,
      deathChance: 0.00009397680696565658,
      lifeRemaining: 66.70706176757812
    },
    {
      age: 11,
      deathChance: 0.00010786124767037109,
      lifeRemaining: 65.7132797241211
    },
    {
      age: 12,
      deathChance: 0.00015155704750213772,
      lifeRemaining: 64.7203140258789
    },
    {
      age: 13,
      deathChance: 0.00023189505736809224,
      lifeRemaining: 63.73004913330078
    },
    {
      age: 14,
      deathChance: 0.0003413899685256183,
      lifeRemaining: 62.744712829589844
    },
    {
      age: 15,
      deathChance: 0.000461328134406358,
      lifeRemaining: 61.765968322753906
    },
    {
      age: 16,
      deathChance: 0.0005841611418873072,
      lifeRemaining: 60.79423904418945
    },
    {
      age: 17,
      deathChance: 0.0007175786886364222,
      lifeRemaining: 59.82948684692383
    },
    {
      age: 18,
      deathChance: 0.0008585978648625314,
      lifeRemaining: 58.87208557128906
    },
    {
      age: 19,
      deathChance: 0.001001486787572503,
      lifeRemaining: 57.92224884033203
    },
    {
      age: 20,
      deathChance: 0.0011470711324363947,
      lifeRemaining: 56.97981262207031
    },
    {
      age: 21,
      deathChance: 0.001285942387767136,
      lifeRemaining: 56.044673919677734
    },
    {
      age: 22,
      deathChance: 0.0014028329169377685,
      lifeRemaining: 55.116188049316406
    },
    {
      age: 23,
      deathChance: 0.0014899933012202382,
      lifeRemaining: 54.19291687011719
    },
    {
      age: 24,
      deathChance: 0.0015538185834884644,
      lifeRemaining: 53.27303695678711
    },
    {
      age: 25,
      deathChance: 0.001609192113392055,
      lifeRemaining: 52.35516357421875
    },
    {
      age: 26,
      deathChance: 0.0016636601649224758,
      lifeRemaining: 51.438743591308594
    },
    {
      age: 27,
      deathChance: 0.00171330024022609,
      lifeRemaining: 50.523624420166016
    },
    {
      age: 28,
      deathChance: 0.0017615470569580793,
      lifeRemaining: 49.60947799682617
    },
    {
      age: 29,
      deathChance: 0.00181030691601336,
      lifeRemaining: 48.69614028930664
    },
    {
      age: 30,
      deathChance: 0.0018587581580504775,
      lifeRemaining: 47.78355026245117
    },
    {
      age: 31,
      deathChance: 0.0019074579467996955,
      lifeRemaining: 46.87160110473633
    },
    {
      age: 32,
      deathChance: 0.0019591974560171366,
      lifeRemaining: 45.96022415161133
    },
    {
      age: 33,
      deathChance: 0.002014129189774394,
      lifeRemaining: 45.049461364746094
    },
    {
      age: 34,
      deathChance: 0.002071626950055361,
      lifeRemaining: 44.13936996459961
    },
    {
      age: 35,
      deathChance: 0.0021390151232481003,
      lifeRemaining: 43.22996520996094
    },
    {
      age: 36,
      deathChance: 0.0022113339509814978,
      lifeRemaining: 42.32155990600586
    },
    {
      age: 37,
      deathChance: 0.0022768150083720684,
      lifeRemaining: 41.41424560546875
    },
    {
      age: 38,
      deathChance: 0.0023329313844442368,
      lifeRemaining: 40.50761032104492
    },
    {
      age: 39,
      deathChance: 0.002389836125075817,
      lifeRemaining: 39.601165771484375
    },
    {
      age: 40,
      deathChance: 0.0024626462254673243,
      lifeRemaining: 38.6948356628418
    },
    {
      age: 41,
      deathChance: 0.002565524075180292,
      lifeRemaining: 37.789127349853516
    },
    {
      age: 42,
      deathChance: 0.0027009788900613785,
      lifeRemaining: 36.885040283203125
    },
    {
      age: 43,
      deathChance: 0.0028696933295577765,
      lifeRemaining: 35.98358154296875
    },
    {
      age: 44,
      deathChance: 0.003066050121560693,
      lifeRemaining: 35.08570098876953
    },
    {
      age: 45,
      deathChance: 0.0032801120541989803,
      lifeRemaining: 34.19207000732422
    },
    {
      age: 46,
      deathChance: 0.003520103171467781,
      lifeRemaining: 33.30294418334961
    },
    {
      age: 47,
      deathChance: 0.003803920466452837,
      lifeRemaining: 32.4188232421875
    },
    {
      age: 48,
      deathChance: 0.004145975690335035,
      lifeRemaining: 31.54070281982422
    },
    {
      age: 49,
      deathChance: 0.004546886309981346,
      lifeRemaining: 30.669933319091797
    },
    {
      age: 50,
      deathChance: 0.004978296346962452,
      lifeRemaining: 29.8077392578125
    },
    {
      age: 51,
      deathChance: 0.005440931301563978,
      lifeRemaining: 28.95437240600586
    },
    {
      age: 52,
      deathChance: 0.005965096410363913,
      lifeRemaining: 28.110036849975586
    },
    {
      age: 53,
      deathChance: 0.006548528093844652,
      lifeRemaining: 27.27572250366211
    },
    {
      age: 54,
      deathChance: 0.007169920485466719,
      lifeRemaining: 26.452220916748047
    },
    {
      age: 55,
      deathChance: 0.007803182117640972,
      lifeRemaining: 25.639638900756836
    },
    {
      age: 56,
      deathChance: 0.008444663137197495,
      lifeRemaining: 24.83734703063965
    },
    {
      age: 57,
      deathChance: 0.00911618396639824,
      lifeRemaining: 24.044618606567383
    },
    {
      age: 58,
      deathChance: 0.009838087484240532,
      lifeRemaining: 23.26123046875
    },
    {
      age: 59,
      deathChance: 0.010619322769343853,
      lifeRemaining: 22.487382888793945
    },
    {
      age: 60,
      deathChance: 0.01146990992128849,
      lifeRemaining: 21.723379135131836
    },
    {
      age: 61,
      deathChance: 0.012361294589936733,
      lifeRemaining: 20.969633102416992
    },
    {
      age: 62,
      deathChance: 0.013260341249406338,
      lifeRemaining: 20.225831985473633
    },
    {
      age: 63,
      deathChance: 0.014139737002551556,
      lifeRemaining: 19.49091911315918
    },
    {
      age: 64,
      deathChance: 0.015018866397440434,
      lifeRemaining: 18.763296127319336
    },
    {
      age: 65,
      deathChance: 0.01594170555472374,
      lifeRemaining: 18.04177474975586
    },
    {
      age: 66,
      deathChance: 0.01702643185853958,
      lifeRemaining: 17.32594871520996
    },
    {
      age: 67,
      deathChance: 0.018188728019595146,
      lifeRemaining: 16.61739730834961
    },
    {
      age: 68,
      deathChance: 0.019483163952827454,
      lifeRemaining: 15.91598129272461
    },
    {
      age: 69,
      deathChance: 0.020990420132875443,
      lifeRemaining: 15.222302436828613
    },
    {
      age: 70,
      deathChance: 0.022447997704148293,
      lifeRemaining: 14.537954330444336
    },
    {
      age: 71,
      deathChance: 0.024630911648273468,
      lifeRemaining: 13.86031436920166
    },
    {
      age: 72,
      deathChance: 0.026569554582238197,
      lifeRemaining: 13.197701454162598
    },
    {
      age: 73,
      deathChance: 0.029040491208434105,
      lifeRemaining: 12.544282913208008
    },
    {
      age: 74,
      deathChance: 0.03153933584690094,
      lifeRemaining: 11.90451717376709
    },
    {
      age: 75,
      deathChance: 0.034644465893507004,
      lifeRemaining: 11.275921821594238
    },
    {
      age: 76,
      deathChance: 0.03814829885959625,
      lifeRemaining: 10.662646293640137
    },
    {
      age: 77,
      deathChance: 0.04224970191717148,
      lifeRemaining: 10.065710067749023
    },
    {
      age: 78,
      deathChance: 0.04652179032564163,
      lifeRemaining: 9.487686157226562
    },
    {
      age: 79,
      deathChance: 0.05140077695250511,
      lifeRemaining: 8.926210403442383
    },
    {
      age: 80,
      deathChance: 0.05678277462720871,
      lifeRemaining: 8.382792472839355
    },
    {
      age: 81,
      deathChance: 0.06251414120197296,
      lifeRemaining: 7.857346534729004
    },
    {
      age: 82,
      deathChance: 0.0694519430398941,
      lifeRemaining: 7.347954750061035
    },
    {
      age: 83,
      deathChance: 0.07762156426906586,
      lifeRemaining: 6.859055042266846
    },
    {
      age: 84,
      deathChance: 0.08615536987781525,
      lifeRemaining: 6.394192695617676
    },
    {
      age: 85,
      deathChance: 0.0954504981637001,
      lifeRemaining: 5.949885368347168
    },
    {
      age: 86,
      deathChance: 0.10578827559947968,
      lifeRemaining: 5.524971961975098
    },
    {
      age: 87,
      deathChance: 0.11852699518203735,
      lifeRemaining: 5.119442939758301
    },
    {
      age: 88,
      deathChance: 0.13243746757507324,
      lifeRemaining: 4.74059534072876
    },
    {
      age: 89,
      deathChance: 0.1475410759449005,
      lifeRemaining: 4.387941837310791
    },
    {
      age: 90,
      deathChance: 0.16383889317512512,
      lifeRemaining: 4.060855388641357
    },
    {
      age: 91,
      deathChance: 0.18130825459957123,
      lifeRemaining: 3.758575677871704
    },
    {
      age: 92,
      deathChance: 0.19989974796772003,
      lifeRemaining: 3.4802231788635254
    },
    {
      age: 93,
      deathChance: 0.21953538060188293,
      lifeRemaining: 3.2248122692108154
    },
    {
      age: 94,
      deathChance: 0.24010759592056274,
      lifeRemaining: 2.99126935005188
    },
    {
      age: 95,
      deathChance: 0.2614802122116089,
      lifeRemaining: 2.7784502506256104
    },
    {
      age: 96,
      deathChance: 0.283490926027298,
      lifeRemaining: 2.585157871246338
    },
    {
      age: 97,
      deathChance: 0.3059553802013397,
      lifeRemaining: 2.4101626873016357
    },
    {
      age: 98,
      deathChance: 0.3286730647087097,
      lifeRemaining: 2.252218723297119
    },
    {
      age: 99,
      deathChance: 0.3514341115951538,
      lifeRemaining: 2.1100826263427734
    }
  ],
  femalePopulation: [
    {
      age: 0,
      deathChance: 0.005226429086178541,
      lifeRemaining: 81.10474395751953
    },
    {
      age: 1,
      deathChance: 0.00033906285534612834,
      lifeRemaining: 80.53022003173828
    },
    {
      age: 2,
      deathChance: 0.00020753819262608886,
      lifeRemaining: 79.55736541748047
    },
    {
      age: 3,
      deathChance: 0.0001592152111697942,
      lifeRemaining: 78.57377624511719
    },
    {
      age: 4,
      deathChance: 0.00013885405496694148,
      lifeRemaining: 77.58621215820312
    },
    {
      age: 5,
      deathChance: 0.00012557220179587603,
      lifeRemaining: 76.59691619873047
    },
    {
      age: 6,
      deathChance: 0.00011295814329059795,
      lifeRemaining: 75.60647583007812
    },
    {
      age: 7,
      deathChance: 0.00010362247849116102,
      lifeRemaining: 74.61495971679688
    },
    {
      age: 8,
      deathChance: 0.00009669153223512694,
      lifeRemaining: 73.62264251708984
    },
    {
      age: 9,
      deathChance: 0.00009237877384293824,
      lifeRemaining: 72.62971496582031
    },
    {
      age: 10,
      deathChance: 0.00009201855573337525,
      lifeRemaining: 71.6363754272461
    },
    {
      age: 11,
      deathChance: 0.00009789587784325704,
      lifeRemaining: 70.6429214477539
    },
    {
      age: 12,
      deathChance: 0.00011269428068771958,
      lifeRemaining: 69.64979553222656
    },
    {
      age: 13,
      deathChance: 0.0001379369496135041,
      lifeRemaining: 68.6575927734375
    },
    {
      age: 14,
      deathChance: 0.00017166299221571535,
      lifeRemaining: 67.6669921875
    },
    {
      age: 15,
      deathChance: 0.00020998850231990218,
      lifeRemaining: 66.67852020263672
    },
    {
      age: 16,
      deathChance: 0.0002502097049728036,
      lifeRemaining: 65.69242095947266
    },
    {
      age: 17,
      deathChance: 0.000292550161248073,
      lifeRemaining: 64.708740234375
    },
    {
      age: 18,
      deathChance: 0.00033566230558790267,
      lifeRemaining: 63.72752380371094
    },
    {
      age: 19,
      deathChance: 0.0003790347254835069,
      lifeRemaining: 62.748756408691406
    },
    {
      age: 20,
      deathChance: 0.0004244505544193089,
      lifeRemaining: 61.77235794067383
    },
    {
      age: 21,
      deathChance: 0.0004705753526650369,
      lifeRemaining: 60.798370361328125
    },
    {
      age: 22,
      deathChance: 0.0005130990175530314,
      lifeRemaining: 59.82676315307617
    },
    {
      age: 23,
      deathChance: 0.0005499850958585739,
      lifeRemaining: 58.85721969604492
    },
    {
      age: 24,
      deathChance: 0.0005826799897477031,
      lifeRemaining: 57.88933181762695
    },
    {
      age: 25,
      deathChance: 0.0006134592113085091,
      lifeRemaining: 56.92279052734375
    },
    {
      age: 26,
      deathChance: 0.0006456889677792788,
      lifeRemaining: 55.957427978515625
    },
    {
      age: 27,
      deathChance: 0.0006817306857556105,
      lifeRemaining: 54.99325942993164
    },
    {
      age: 28,
      deathChance: 0.0007244937587529421,
      lifeRemaining: 54.030433654785156
    },
    {
      age: 29,
      deathChance: 0.0007737661944702268,
      lifeRemaining: 53.069244384765625
    },
    {
      age: 30,
      deathChance: 0.0008284593932330608,
      lifeRemaining: 52.10995101928711
    },
    {
      age: 31,
      deathChance: 0.0008847331046126783,
      lifeRemaining: 51.15274429321289
    },
    {
      age: 32,
      deathChance: 0.000939506571739912,
      lifeRemaining: 50.197593688964844
    },
    {
      age: 33,
      deathChance: 0.000989236170426011,
      lifeRemaining: 49.244327545166016
    },
    {
      age: 34,
      deathChance: 0.001035546069033444,
      lifeRemaining: 48.292598724365234
    },
    {
      age: 35,
      deathChance: 0.001086647273041308,
      lifeRemaining: 47.342140197753906
    },
    {
      age: 36,
      deathChance: 0.0011441981187090278,
      lifeRemaining: 46.39309310913086
    },
    {
      age: 37,
      deathChance: 0.0012029183562844992,
      lifeRemaining: 45.44566345214844
    },
    {
      age: 38,
      deathChance: 0.0012640721397474408,
      lifeRemaining: 44.49979019165039
    },
    {
      age: 39,
      deathChance: 0.0013324045576155186,
      lifeRemaining: 43.55548095703125
    },
    {
      age: 40,
      deathChance: 0.0014142458094283938,
      lifeRemaining: 42.61292266845703
    },
    {
      age: 41,
      deathChance: 0.0015130065148696303,
      lifeRemaining: 41.67256546020508
    },
    {
      age: 42,
      deathChance: 0.0016263265861198306,
      lifeRemaining: 40.73495101928711
    },
    {
      age: 43,
      deathChance: 0.0017503334674984217,
      lifeRemaining: 39.80049514770508
    },
    {
      age: 44,
      deathChance: 0.001883345888927579,
      lifeRemaining: 38.86940383911133
    },
    {
      age: 45,
      deathChance: 0.002024771412834525,
      lifeRemaining: 37.941802978515625
    },
    {
      age: 46,
      deathChance: 0.0021826105657964945,
      lifeRemaining: 37.01776885986328
    },
    {
      age: 47,
      deathChance: 0.002365926280617714,
      lifeRemaining: 36.0976448059082
    },
    {
      age: 48,
      deathChance: 0.002583846217021346,
      lifeRemaining: 35.182071685791016
    },
    {
      age: 49,
      deathChance: 0.0028362697921693325,
      lifeRemaining: 34.271915435791016
    },
    {
      age: 50,
      deathChance: 0.003105001524090767,
      lifeRemaining: 33.36797332763672
    },
    {
      age: 51,
      deathChance: 0.003390508471056819,
      lifeRemaining: 32.4703483581543
    },
    {
      age: 52,
      deathChance: 0.003711456898599863,
      lifeRemaining: 31.579113006591797
    },
    {
      age: 53,
      deathChance: 0.004066173452883959,
      lifeRemaining: 30.69489288330078
    },
    {
      age: 54,
      deathChance: 0.004441261291503906,
      lifeRemaining: 29.81816864013672
    },
    {
      age: 55,
      deathChance: 0.004829319193959236,
      lifeRemaining: 28.948957443237305
    },
    {
      age: 56,
      deathChance: 0.005221005994826555,
      lifeRemaining: 28.08701515197754
    },
    {
      age: 57,
      deathChance: 0.00561329023912549,
      lifeRemaining: 27.231801986694336
    },
    {
      age: 58,
      deathChance: 0.006011384539306164,
      lifeRemaining: 26.38270378112793
    },
    {
      age: 59,
      deathChance: 0.006429092958569527,
      lifeRemaining: 25.539236068725586
    },
    {
      age: 60,
      deathChance: 0.006880441214889288,
      lifeRemaining: 24.70125389099121
    },
    {
      age: 61,
      deathChance: 0.007371199317276478,
      lifeRemaining: 23.86892318725586
    },
    {
      age: 62,
      deathChance: 0.007903389632701874,
      lifeRemaining: 23.04245948791504
    },
    {
      age: 63,
      deathChance: 0.008480928838253021,
      lifeRemaining: 22.22203826904297
    },
    {
      age: 64,
      deathChance: 0.009110868908464909,
      lifeRemaining: 21.407838821411133
    },
    {
      age: 65,
      deathChance: 0.00979298073798418,
      lifeRemaining: 20.600078582763672
    },
    {
      age: 66,
      deathChance: 0.010567729361355305,
      lifeRemaining: 19.798866271972656
    },
    {
      age: 67,
      deathChance: 0.011436491273343563,
      lifeRemaining: 19.004989624023438
    },
    {
      age: 68,
      deathChance: 0.01247374527156353,
      lifeRemaining: 18.219070434570312
    },
    {
      age: 69,
      deathChance: 0.013659073039889336,
      lifeRemaining: 17.44288444519043
    },
    {
      age: 70,
      deathChance: 0.014881229028105736,
      lifeRemaining: 16.677513122558594
    },
    {
      age: 71,
      deathChance: 0.016529232263565063,
      lifeRemaining: 15.921893119812012
    },
    {
      age: 72,
      deathChance: 0.018210263922810555,
      lifeRemaining: 15.181089401245117
    },
    {
      age: 73,
      deathChance: 0.02001098357141018,
      lifeRemaining: 14.453394889831543
    },
    {
      age: 74,
      deathChance: 0.021903079003095627,
      lifeRemaining: 13.738317489624023
    },
    {
      age: 75,
      deathChance: 0.024321969598531723,
      lifeRemaining: 13.034770965576172
    },
    {
      age: 76,
      deathChance: 0.02689857967197895,
      lifeRemaining: 12.34724235534668
    },
    {
      age: 77,
      deathChance: 0.02988562360405922,
      lifeRemaining: 11.674724578857422
    },
    {
      age: 78,
      deathChance: 0.03341275453567505,
      lifeRemaining: 11.018977165222168
    },
    {
      age: 79,
      deathChance: 0.03706490248441696,
      lifeRemaining: 10.38259506225586
    },
    {
      age: 80,
      deathChance: 0.04147796705365181,
      lifeRemaining: 9.762991905212402
    },
    {
      age: 81,
      deathChance: 0.04614976793527603,
      lifeRemaining: 9.163826942443848
    },
    {
      age: 82,
      deathChance: 0.051680829375982285,
      lifeRemaining: 8.583005905151367
    },
    {
      age: 83,
      deathChance: 0.05858718976378441,
      lifeRemaining: 8.023508071899414
    },
    {
      age: 84,
      deathChance: 0.06558620929718018,
      lifeRemaining: 7.491720199584961
    },
    {
      age: 85,
      deathChance: 0.07285495102405548,
      lifeRemaining: 6.982467174530029
    },
    {
      age: 86,
      deathChance: 0.08111470192670822,
      lifeRemaining: 6.491858005523682
    },
    {
      age: 87,
      deathChance: 0.09161756932735443,
      lifeRemaining: 6.020790100097656
    },
    {
      age: 88,
      deathChance: 0.10324060171842575,
      lifeRemaining: 5.577605724334717
    },
    {
      age: 89,
      deathChance: 0.11604062467813492,
      lifeRemaining: 5.162171363830566
    },
    {
      age: 90,
      deathChance: 0.1300612837076187,
      lifeRemaining: 4.7741923332214355
    },
    {
      age: 91,
      deathChance: 0.14532890915870667,
      lifeRemaining: 4.413210391998291
    },
    {
      age: 92,
      deathChance: 0.16184815764427185,
      lifeRemaining: 4.078615665435791
    },
    {
      age: 93,
      deathChance: 0.17959828674793243,
      lifeRemaining: 3.769650459289551
    },
    {
      age: 94,
      deathChance: 0.19852951169013977,
      lifeRemaining: 3.485426187515259
    },
    {
      age: 95,
      deathChance: 0.2185608297586441,
      lifeRemaining: 3.224936008453369
    },
    {
      age: 96,
      deathChance: 0.23957890272140503,
      lifeRemaining: 2.9870738983154297
    },
    {
      age: 97,
      deathChance: 0.2614389657974243,
      lifeRemaining: 2.770653247833252
    },
    {
      age: 98,
      deathChance: 0.28396740555763245,
      lifeRemaining: 2.5744287967681885
    },
    {
      age: 99,
      deathChance: 0.306966632604599,
      lifeRemaining: 2.3971149921417236
    }
  ],
  whitePopulation: [
    {
      age: 0,
      deathChance: 0.004835349507629871,
      lifeRemaining: 78.79015350341797
    },
    {
      age: 1,
      deathChance: 0.0003432005178183317,
      lifeRemaining: 78.17240142822266
    },
    {
      age: 2,
      deathChance: 0.0002276245941175148,
      lifeRemaining: 77.19906616210938
    },
    {
      age: 3,
      deathChance: 0.0001755377888912335,
      lifeRemaining: 76.21653747558594
    },
    {
      age: 4,
      deathChance: 0.00013156802742742002,
      lifeRemaining: 75.22982788085938
    },
    {
      age: 5,
      deathChance: 0.00012763944687321782,
      lifeRemaining: 74.23966979980469
    },
    {
      age: 6,
      deathChance: 0.00011408606223994866,
      lifeRemaining: 73.24907684326172
    },
    {
      age: 7,
      deathChance: 0.00010364018817199394,
      lifeRemaining: 72.25737762451172
    },
    {
      age: 8,
      deathChance: 0.00009473346290178597,
      lifeRemaining: 71.26481628417969
    },
    {
      age: 9,
      deathChance: 0.00008823272219160572,
      lifeRemaining: 70.27152252197266
    },
    {
      age: 10,
      deathChance: 0.00008749933476792648,
      lifeRemaining: 69.27767944335938
    },
    {
      age: 11,
      deathChance: 0.00009797637176234275,
      lifeRemaining: 68.28369140625
    },
    {
      age: 12,
      deathChance: 0.00012594243162311614,
      lifeRemaining: 67.29033660888672
    },
    {
      age: 13,
      deathChance: 0.00017507740994915366,
      lifeRemaining: 66.29874420166016
    },
    {
      age: 14,
      deathChance: 0.0002413673500996083,
      lifeRemaining: 65.31027221679688
    },
    {
      age: 15,
      deathChance: 0.0003146319941151887,
      lifeRemaining: 64.32592010498047
    },
    {
      age: 16,
      deathChance: 0.00039081659633666277,
      lifeRemaining: 63.346004486083984
    },
    {
      age: 17,
      deathChance: 0.0004744319594465196,
      lifeRemaining: 62.37057113647461
    },
    {
      age: 18,
      deathChance: 0.0005641941679641604,
      lifeRemaining: 61.399940490722656
    },
    {
      age: 19,
      deathChance: 0.0006570361438207328,
      lifeRemaining: 60.434322357177734
    },
    {
      age: 20,
      deathChance: 0.0007533151074312627,
      lifeRemaining: 59.473724365234375
    },
    {
      age: 21,
      deathChance: 0.0008473602356389165,
      lifeRemaining: 58.518184661865234
    },
    {
      age: 22,
      deathChance: 0.0009300661040470004,
      lifeRemaining: 57.567386627197266
    },
    {
      age: 23,
      deathChance: 0.0009963733609765768,
      lifeRemaining: 56.620513916015625
    },
    {
      age: 24,
      deathChance: 0.001049725920893252,
      lifeRemaining: 55.676490783691406
    },
    {
      age: 25,
      deathChance: 0.0010980069637298584,
      lifeRemaining: 54.734466552734375
    },
    {
      age: 26,
      deathChance: 0.0011465189745649695,
      lifeRemaining: 53.79408645629883
    },
    {
      age: 27,
      deathChance: 0.0011946189915761352,
      lifeRemaining: 52.85525894165039
    },
    {
      age: 28,
      deathChance: 0.0012452314840629697,
      lifeRemaining: 51.917877197265625
    },
    {
      age: 29,
      deathChance: 0.001298703020438552,
      lifeRemaining: 50.98198318481445
    },
    {
      age: 30,
      deathChance: 0.001354518230073154,
      lifeRemaining: 50.047630310058594
    },
    {
      age: 31,
      deathChance: 0.0014100027037784457,
      lifeRemaining: 49.11483383178711
    },
    {
      age: 32,
      deathChance: 0.0014631341909989715,
      lifeRemaining: 48.18347930908203
    },
    {
      age: 33,
      deathChance: 0.0015116174472495914,
      lifeRemaining: 47.25334167480469
    },
    {
      age: 34,
      deathChance: 0.001557130366563797,
      lifeRemaining: 46.32412338256836
    },
    {
      age: 35,
      deathChance: 0.0016090783756226301,
      lifeRemaining: 45.395591735839844
    },
    {
      age: 36,
      deathChance: 0.0016669821925461292,
      lifeRemaining: 44.46794891357422
    },
    {
      age: 37,
      deathChance: 0.001722480054013431,
      lifeRemaining: 43.54136276245117
    },
    {
      age: 38,
      deathChance: 0.0017754347063601017,
      lifeRemaining: 42.615631103515625
    },
    {
      age: 39,
      deathChance: 0.0018331670435145497,
      lifeRemaining: 41.69053649902344
    },
    {
      age: 40,
      deathChance: 0.0019061057828366756,
      lifeRemaining: 40.76618194580078
    },
    {
      age: 41,
      deathChance: 0.0020027263090014458,
      lifeRemaining: 39.843082427978516
    },
    {
      age: 42,
      deathChance: 0.0021228925324976444,
      lifeRemaining: 38.92203140258789
    },
    {
      age: 43,
      deathChance: 0.0022643418051302433,
      lifeRemaining: 38.0037727355957
    },
    {
      age: 44,
      deathChance: 0.0024232356809079647,
      lifeRemaining: 37.08888626098633
    },
    {
      age: 45,
      deathChance: 0.00259447586722672,
      lifeRemaining: 36.177764892578125
    },
    {
      age: 46,
      deathChance: 0.0027866698801517487,
      lifeRemaining: 35.27056884765625
    },
    {
      age: 47,
      deathChance: 0.003013278590515256,
      lifeRemaining: 34.367733001708984
    },
    {
      age: 48,
      deathChance: 0.0032860597129911184,
      lifeRemaining: 33.470096588134766
    },
    {
      age: 49,
      deathChance: 0.0036047452595084906,
      lifeRemaining: 32.578792572021484
    },
    {
      age: 50,
      deathChance: 0.003945831675082445,
      lifeRemaining: 31.694847106933594
    },
    {
      age: 51,
      deathChance: 0.00430891802534461,
      lifeRemaining: 30.81842613220215
    },
    {
      age: 52,
      deathChance: 0.004716820083558559,
      lifeRemaining: 29.94963264465332
    },
    {
      age: 53,
      deathChance: 0.005166163668036461,
      lifeRemaining: 29.089197158813477
    },
    {
      age: 54,
      deathChance: 0.005639985669404268,
      lifeRemaining: 28.23766326904297
    },
    {
      age: 55,
      deathChance: 0.006124311126768589,
      lifeRemaining: 27.394990921020508
    },
    {
      age: 56,
      deathChance: 0.0066132317297160625,
      lifeRemaining: 26.560718536376953
    },
    {
      age: 57,
      deathChance: 0.007114189676940441,
      lifeRemaining: 25.734210968017578
    },
    {
      age: 58,
      deathChance: 0.007639630697667599,
      lifeRemaining: 24.91501808166504
    },
    {
      age: 59,
      deathChance: 0.008201813325285912,
      lifeRemaining: 24.102975845336914
    },
    {
      age: 60,
      deathChance: 0.008815145120024681,
      lifeRemaining: 23.29816246032715
    },
    {
      age: 61,
      deathChance: 0.009469510056078434,
      lifeRemaining: 22.500919342041016
    },
    {
      age: 62,
      deathChance: 0.010149095207452774,
      lifeRemaining: 21.71124839782715
    },
    {
      age: 63,
      deathChance: 0.010843767784535885,
      lifeRemaining: 20.92873191833496
    },
    {
      age: 64,
      deathChance: 0.011568659916520119,
      lifeRemaining: 20.152685165405273
    },
    {
      age: 65,
      deathChance: 0.01233590580523014,
      lifeRemaining: 19.382699966430664
    },
    {
      age: 66,
      deathChance: 0.01323721930384636,
      lifeRemaining: 18.618545532226562
    },
    {
      age: 67,
      deathChance: 0.014257660135626793,
      lifeRemaining: 17.861602783203125
    },
    {
      age: 68,
      deathChance: 0.015458447858691216,
      lifeRemaining: 17.11271858215332
    },
    {
      age: 69,
      deathChance: 0.016875172033905983,
      lifeRemaining: 16.373558044433594
    },
    {
      age: 70,
      deathChance: 0.01827135868370533,
      lifeRemaining: 15.646025657653809
    },
    {
      age: 71,
      deathChance: 0.02024386264383793,
      lifeRemaining: 14.927913665771484
    },
    {
      age: 72,
      deathChance: 0.022046543657779694,
      lifeRemaining: 14.226025581359863
    },
    {
      age: 73,
      deathChance: 0.024142548441886902,
      lifeRemaining: 13.535457611083984
    },
    {
      age: 74,
      deathChance: 0.02629254199564457,
      lifeRemaining: 12.857953071594238
    },
    {
      age: 75,
      deathChance: 0.02904118411242962,
      lifeRemaining: 12.191649436950684
    },
    {
      age: 76,
      deathChance: 0.03205684572458267,
      lifeRemaining: 11.54134464263916
    },
    {
      age: 77,
      deathChance: 0.03554626926779747,
      lifeRemaining: 10.907018661499023
    },
    {
      age: 78,
      deathChance: 0.03939671814441681,
      lifeRemaining: 10.290582656860352
    },
    {
      age: 79,
      deathChance: 0.04358803853392601,
      lifeRemaining: 9.692118644714355
    },
    {
      age: 80,
      deathChance: 0.048461612313985825,
      lifeRemaining: 9.111045837402344
    },
    {
      age: 81,
      deathChance: 0.05360381305217743,
      lifeRemaining: 8.549603462219238
    },
    {
      age: 82,
      deathChance: 0.059712231159210205,
      lifeRemaining: 8.005532264709473
    },
    {
      age: 83,
      deathChance: 0.06718616932630539,
      lifeRemaining: 7.4821648597717285
    },
    {
      age: 84,
      deathChance: 0.0748102217912674,
      lifeRemaining: 6.985057353973389
    },
    {
      age: 85,
      deathChance: 0.08303312957286835,
      lifeRemaining: 6.509434700012207
    },
    {
      age: 86,
      deathChance: 0.09170840680599213,
      lifeRemaining: 6.053600311279297
    },
    {
      age: 87,
      deathChance: 0.10309981554746628,
      lifeRemaining: 5.614336967468262
    },
    {
      age: 88,
      deathChance: 0.1156216636300087,
      lifeRemaining: 5.202236652374268
    },
    {
      age: 89,
      deathChance: 0.1293153464794159,
      lifeRemaining: 4.8169965744018555
    },
    {
      age: 90,
      deathChance: 0.1442064493894577,
      lifeRemaining: 4.458163261413574
    },
    {
      age: 91,
      deathChance: 0.16030074656009674,
      lifeRemaining: 4.125138282775879
    },
    {
      age: 92,
      deathChance: 0.17758075892925262,
      lifeRemaining: 3.8171868324279785
    },
    {
      age: 93,
      deathChance: 0.19600246846675873,
      lifeRemaining: 3.53344988822937
    },
    {
      age: 94,
      deathChance: 0.21549321711063385,
      lifeRemaining: 3.272958755493164
    },
    {
      age: 95,
      deathChance: 0.23595048487186432,
      lifeRemaining: 3.0346524715423584
    },
    {
      age: 96,
      deathChance: 0.2572425603866577,
      lifeRemaining: 2.8173928260803223
    },
    {
      age: 97,
      deathChance: 0.2792104482650757,
      lifeRemaining: 2.6199862957000732
    },
    {
      age: 98,
      deathChance: 0.3016720712184906,
      lifeRemaining: 2.441200017929077
    },
    {
      age: 99,
      deathChance: 0.32442766427993774,
      lifeRemaining: 2.279783010482788
    }
  ],
  whiteMalePopulation: [
    {
      age: 0,
      deathChance: 0.005273349583148956,
      lifeRemaining: 76.37059020996094
    },
    {
      age: 1,
      deathChance: 0.00038861535722389817,
      lifeRemaining: 75.77481842041016
    },
    {
      age: 2,
      deathChance: 0.000272595789283514,
      lifeRemaining: 74.80408477783203
    },
    {
      age: 3,
      deathChance: 0.00019900556071661413,
      lifeRemaining: 73.8243408203125
    },
    {
      age: 4,
      deathChance: 0.00014685964561067522,
      lifeRemaining: 72.83893585205078
    },
    {
      age: 5,
      deathChance: 0.00014263430784922093,
      lifeRemaining: 71.84955596923828
    },
    {
      age: 6,
      deathChance: 0.00012552397674880922,
      lifeRemaining: 70.85973358154297
    },
    {
      age: 7,
      deathChance: 0.00011200985318282619,
      lifeRemaining: 69.86856842041016
    },
    {
      age: 8,
      deathChance: 0.00010010765254264697,
      lifeRemaining: 68.87633514404297
    },
    {
      age: 9,
      deathChance: 0.00009124541247729212,
      lifeRemaining: 67.88318634033203
    },
    {
      age: 10,
      deathChance: 0.00009034339018398896,
      lifeRemaining: 66.88932800292969
    },
    {
      age: 11,
      deathChance: 0.0001052291045198217,
      lifeRemaining: 65.89532470703125
    },
    {
      age: 12,
      deathChance: 0.00014488933084066957,
      lifeRemaining: 64.90220642089844
    },
    {
      age: 13,
      deathChance: 0.00021466428006533533,
      lifeRemaining: 63.91154479980469
    },
    {
      age: 14,
      deathChance: 0.0003091071848757565,
      lifeRemaining: 62.9251594543457
    },
    {
      age: 15,
      deathChance: 0.00041235960088670254,
      lifeRemaining: 61.944461822509766
    },
    {
      age: 16,
      deathChance: 0.0005202929605729878,
      lifeRemaining: 60.969810485839844
    },
    {
      age: 17,
      deathChance: 0.0006424598395824432,
      lifeRemaining: 60.00128936767578
    },
    {
      age: 18,
      deathChance: 0.0007780393934808671,
      lifeRemaining: 59.03954315185547
    },
    {
      age: 19,
      deathChance: 0.0009205628302879632,
      lifeRemaining: 58.08512878417969
    },
    {
      age: 20,
      deathChance: 0.0010677417740225792,
      lifeRemaining: 57.138187408447266
    },
    {
      age: 21,
      deathChance: 0.0012089001247659326,
      lifeRemaining: 56.198726654052734
    },
    {
      age: 22,
      deathChance: 0.0013304941821843386,
      lifeRemaining: 55.266143798828125
    },
    {
      age: 23,
      deathChance: 0.001424485119059682,
      lifeRemaining: 54.339107513427734
    },
    {
      age: 24,
      deathChance: 0.0014965098816901445,
      lifeRemaining: 53.41590881347656
    },
    {
      age: 25,
      deathChance: 0.0015606636879965663,
      lifeRemaining: 52.49522018432617
    },
    {
      age: 26,
      deathChance: 0.0016239164397120476,
      lifeRemaining: 51.57649230957031
    },
    {
      age: 27,
      deathChance: 0.0016818991862237453,
      lifeRemaining: 50.65957260131836
    },
    {
      age: 28,
      deathChance: 0.0017374882008880377,
      lifeRemaining: 49.744083404541016
    },
    {
      age: 29,
      deathChance: 0.0017922495026141405,
      lifeRemaining: 48.82978820800781
    },
    {
      age: 30,
      deathChance: 0.001846571103669703,
      lifeRemaining: 47.91656494140625
    },
    {
      age: 31,
      deathChance: 0.0018999165622517467,
      lifeRemaining: 47.00428009033203
    },
    {
      age: 32,
      deathChance: 0.0019522698130458593,
      lifeRemaining: 46.09280014038086
    },
    {
      age: 33,
      deathChance: 0.002002861350774765,
      lifeRemaining: 45.18198776245117
    },
    {
      age: 34,
      deathChance: 0.0020526456646621227,
      lifeRemaining: 44.27165985107422
    },
    {
      age: 35,
      deathChance: 0.002110761124640703,
      lifeRemaining: 43.361690521240234
    },
    {
      age: 36,
      deathChance: 0.0021743716206401587,
      lifeRemaining: 42.45235061645508
    },
    {
      age: 37,
      deathChance: 0.0022329255007207394,
      lifeRemaining: 41.54376983642578
    },
    {
      age: 38,
      deathChance: 0.002285057445988059,
      lifeRemaining: 40.635623931884766
    },
    {
      age: 39,
      deathChance: 0.0023402816150337458,
      lifeRemaining: 39.727542877197266
    },
    {
      age: 40,
      deathChance: 0.0024129878729581833,
      lifeRemaining: 38.81956100463867
    },
    {
      age: 41,
      deathChance: 0.0025155129842460155,
      lifeRemaining: 37.91224670410156
    },
    {
      age: 42,
      deathChance: 0.0026487030554562807,
      lifeRemaining: 37.006595611572266
    },
    {
      age: 43,
      deathChance: 0.0028114663437008858,
      lifeRemaining: 36.10354995727539
    },
    {
      age: 44,
      deathChance: 0.0029989713802933693,
      lifeRemaining: 35.20392990112305
    },
    {
      age: 45,
      deathChance: 0.003202536841854453,
      lifeRemaining: 34.30831527709961
    },
    {
      age: 46,
      deathChance: 0.0034329204354435205,
      lifeRemaining: 33.41693878173828
    },
    {
      age: 47,
      deathChance: 0.003709283424541354,
      lifeRemaining: 32.530330657958984
    },
    {
      age: 48,
      deathChance: 0.004047031980007887,
      lifeRemaining: 31.649581909179688
    },
    {
      age: 49,
      deathChance: 0.0044453502632677555,
      lifeRemaining: 30.77615737915039
    },
    {
      age: 50,
      deathChance: 0.004874178674072027,
      lifeRemaining: 29.911346435546875
    },
    {
      age: 51,
      deathChance: 0.005331255029886961,
      lifeRemaining: 29.05540657043457
    },
    {
      age: 52,
      deathChance: 0.005844325292855501,
      lifeRemaining: 28.20845603942871
    },
    {
      age: 53,
      deathChance: 0.006408488377928734,
      lifeRemaining: 27.37134552001953
    },
    {
      age: 54,
      deathChance: 0.007003418635576963,
      lifeRemaining: 26.544660568237305
    },
    {
      age: 55,
      deathChance: 0.007607435341924429,
      lifeRemaining: 25.728347778320312
    },
    {
      age: 56,
      deathChance: 0.008218705654144287,
      lifeRemaining: 24.92173957824707
    },
    {
      age: 57,
      deathChance: 0.00885684322565794,
      lifeRemaining: 24.124120712280273
    },
    {
      age: 58,
      deathChance: 0.009542390704154968,
      lifeRemaining: 23.335224151611328
    },
    {
      age: 59,
      deathChance: 0.010285227559506893,
      lifeRemaining: 22.555227279663086
    },
    {
      age: 60,
      deathChance: 0.01109791174530983,
      lifeRemaining: 21.784427642822266
    },
    {
      age: 61,
      deathChance: 0.011952439323067665,
      lifeRemaining: 21.023290634155273
    },
    {
      age: 62,
      deathChance: 0.012814361602067947,
      lifeRemaining: 20.271562576293945
    },
    {
      age: 63,
      deathChance: 0.013656909577548504,
      lifeRemaining: 19.52821159362793
    },
    {
      age: 64,
      deathChance: 0.014501998201012611,
      lifeRemaining: 18.791675567626953
    },
    {
      age: 65,
      deathChance: 0.01538380142301321,
      lifeRemaining: 18.06084632873535
    },
    {
      age: 66,
      deathChance: 0.01644408330321312,
      lifeRemaining: 17.33521842956543
    },
    {
      age: 67,
      deathChance: 0.017623698338866234,
      lifeRemaining: 16.61668586730957
    },
    {
      age: 68,
      deathChance: 0.018967675045132637,
      lifeRemaining: 15.905817031860352
    },
    {
      age: 69,
      deathChance: 0.020586207509040833,
      lifeRemaining: 15.203679084777832
    },
    {
      age: 70,
      deathChance: 0.022109102457761765,
      lifeRemaining: 14.512734413146973
    },
    {
      age: 71,
      deathChance: 0.02435903437435627,
      lifeRemaining: 13.829546928405762
    },
    {
      age: 72,
      deathChance: 0.026346782222390175,
      lifeRemaining: 13.162349700927734
    },
    {
      age: 73,
      deathChance: 0.02880973555147648,
      lifeRemaining: 12.504988670349121
    },
    {
      age: 74,
      deathChance: 0.03130868449807167,
      lifeRemaining: 11.861108779907227
    },
    {
      age: 75,
      deathChance: 0.03448599576950073,
      lifeRemaining: 11.228306770324707
    },
    {
      age: 76,
      deathChance: 0.03802637755870819,
      lifeRemaining: 10.61149787902832
    },
    {
      age: 77,
      deathChance: 0.04228569567203522,
      lifeRemaining: 10.011199951171875
    },
    {
      age: 78,
      deathChance: 0.04654739797115326,
      lifeRemaining: 9.431145668029785
    },
    {
      age: 79,
      deathChance: 0.05153368413448334,
      lifeRemaining: 8.867162704467773
    },
    {
      age: 80,
      deathChance: 0.05700808763504028,
      lifeRemaining: 8.321782112121582
    },
    {
      age: 81,
      deathChance: 0.06292343139648438,
      lifeRemaining: 7.794643402099609
    },
    {
      age: 82,
      deathChance: 0.06991066038608551,
      lifeRemaining: 7.284468650817871
    },
    {
      age: 83,
      deathChance: 0.07809868454933167,
      lifeRemaining: 6.794426441192627
    },
    {
      age: 84,
      deathChance: 0.0867539644241333,
      lifeRemaining: 6.327658176422119
    },
    {
      age: 85,
      deathChance: 0.09654901921749115,
      lifeRemaining: 5.881258010864258
    },
    {
      age: 86,
      deathChance: 0.10647217929363251,
      lifeRemaining: 5.456336498260498
    },
    {
      age: 87,
      deathChance: 0.11967745423316956,
      lifeRemaining: 5.046930313110352
    },
    {
      age: 88,
      deathChance: 0.1341283768415451,
      lifeRemaining: 4.665073394775391
    },
    {
      age: 89,
      deathChance: 0.14984621107578278,
      lifeRemaining: 4.310266017913818
    },
    {
      age: 90,
      deathChance: 0.166828915476799,
      lifeRemaining: 3.9818551540374756
    },
    {
      age: 91,
      deathChance: 0.1850472092628479,
      lifeRemaining: 3.67903995513916
    },
    {
      age: 92,
      deathChance: 0.20444126427173615,
      lifeRemaining: 3.400888681411743
    },
    {
      age: 93,
      deathChance: 0.2249186933040619,
      lifeRemaining: 3.146353244781494
    },
    {
      age: 94,
      deathChance: 0.24635402858257294,
      lifeRemaining: 2.9142916202545166
    },
    {
      age: 95,
      deathChance: 0.26859015226364136,
      lifeRemaining: 2.7034823894500732
    },
    {
      age: 96,
      deathChance: 0.2914416193962097,
      lifeRemaining: 2.512650489807129
    },
    {
      age: 97,
      deathChance: 0.31470030546188354,
      lifeRemaining: 2.3404862880706787
    },
    {
      age: 98,
      deathChance: 0.33814239501953125,
      lifeRemaining: 2.18566632270813
    },
    {
      age: 99,
      deathChance: 0.36153706908226013,
      lifeRemaining: 2.0468716621398926
    }
  ],
  whiteFemalePopulation: [
    { age: 0, deathChance: 0.00437580794095993, lifeRemaining: 81.2353515625 },
    {
      age: 1,
      deathChance: 0.0002955567615572363,
      lifeRemaining: 80.59188079833984
    },
    {
      age: 2,
      deathChance: 0.00018046630430035293,
      lifeRemaining: 79.61556243896484
    },
    {
      age: 3,
      deathChance: 0.00015094169066287577,
      lifeRemaining: 78.62983703613281
    },
    {
      age: 4,
      deathChance: 0.00011554977390915155,
      lifeRemaining: 77.64163970947266
    },
    {
      age: 5,
      deathChance: 0.00011193971295142546,
      lifeRemaining: 76.65055084228516
    },
    {
      age: 6,
      deathChance: 0.00010211520566372201,
      lifeRemaining: 75.65907287597656
    },
    {
      age: 7,
      deathChance: 0.00009488269279245287,
      lifeRemaining: 74.666748046875
    },
    {
      age: 8,
      deathChance: 0.00008911058830562979,
      lifeRemaining: 73.67378997802734
    },
    {
      age: 9,
      deathChance: 0.00008508020982844755,
      lifeRemaining: 72.68030548095703
    },
    {
      age: 10,
      deathChance: 0.00008452247129753232,
      lifeRemaining: 71.68644714355469
    },
    {
      age: 11,
      deathChance: 0.00009038225834956393,
      lifeRemaining: 70.69246673583984
    },
    {
      age: 12,
      deathChance: 0.00010609657329041511,
      lifeRemaining: 69.69880676269531
    },
    {
      age: 13,
      deathChance: 0.00013359908189158887,
      lifeRemaining: 68.70614624023438
    },
    {
      age: 14,
      deathChance: 0.00017036573262885213,
      lifeRemaining: 67.71526336669922
    },
    {
      age: 15,
      deathChance: 0.00021218393521849066,
      lifeRemaining: 66.72671508789062
    },
    {
      age: 16,
      deathChance: 0.0002550429489929229,
      lifeRemaining: 65.74077606201172
    },
    {
      age: 17,
      deathChance: 0.0002980247954837978,
      lifeRemaining: 64.7574234008789
    },
    {
      age: 18,
      deathChance: 0.0003391705104149878,
      lifeRemaining: 63.77656936645508
    },
    {
      age: 19,
      deathChance: 0.0003789176407735795,
      lifeRemaining: 62.798038482666016
    },
    {
      age: 20,
      deathChance: 0.0004204030556138605,
      lifeRemaining: 61.8216552734375
    },
    {
      age: 21,
      deathChance: 0.00046355868107639253,
      lifeRemaining: 60.84744644165039
    },
    {
      age: 22,
      deathChance: 0.0005044636782258749,
      lifeRemaining: 59.87543487548828
    },
    {
      age: 23,
      deathChance: 0.0005416603526100516,
      lifeRemaining: 58.90540313720703
    },
    {
      age: 24,
      deathChance: 0.0005761573556810617,
      lifeRemaining: 57.93705749511719
    },
    {
      age: 25,
      deathChance: 0.0006088579539209604,
      lifeRemaining: 56.97016906738281
    },
    {
      age: 26,
      deathChance: 0.0006429449422284961,
      lifeRemaining: 56.00457000732422
    },
    {
      age: 27,
      deathChance: 0.0006816863897256553,
      lifeRemaining: 55.04027557373047
    },
    {
      age: 28,
      deathChance: 0.0007279147394001484,
      lifeRemaining: 54.07748031616211
    },
    {
      age: 29,
      deathChance: 0.0007807603687979281,
      lifeRemaining: 53.11650848388672
    },
    {
      age: 30,
      deathChance: 0.0008389208815060556,
      lifeRemaining: 52.15761947631836
    },
    {
      age: 31,
      deathChance: 0.0008975969976745546,
      lifeRemaining: 51.200992584228516
    },
    {
      age: 32,
      deathChance: 0.0009526248904876411,
      lifeRemaining: 50.246543884277344
    },
    {
      age: 33,
      deathChance: 0.0010001430055126548,
      lifeRemaining: 49.29397964477539
    },
    {
      age: 34,
      deathChance: 0.0010425504297018051,
      lifeRemaining: 48.342830657958984
    },
    {
      age: 35,
      deathChance: 0.0010894938604906201,
      lifeRemaining: 47.392757415771484
    },
    {
      age: 36,
      deathChance: 0.0011428887955844402,
      lifeRemaining: 46.443904876708984
    },
    {
      age: 37,
      deathChance: 0.0011966173769906163,
      lifeRemaining: 45.49647521972656
    },
    {
      age: 38,
      deathChance: 0.0012517921859398484,
      lifeRemaining: 44.55038070678711
    },
    {
      age: 39,
      deathChance: 0.001313482178375125,
      lifeRemaining: 43.6055908203125
    },
    {
      age: 40,
      deathChance: 0.0013881976483389735,
      lifeRemaining: 42.662288665771484
    },
    {
      age: 41,
      deathChance: 0.0014803827507421374,
      lifeRemaining: 41.72089767456055
    },
    {
      age: 42,
      deathChance: 0.001588626066222787,
      lifeRemaining: 40.782012939453125
    },
    {
      age: 43,
      deathChance: 0.0017093097558245063,
      lifeRemaining: 39.84610366821289
    },
    {
      age: 44,
      deathChance: 0.0018397478852421045,
      lifeRemaining: 38.913475036621094
    },
    {
      age: 45,
      deathChance: 0.0019786853808909655,
      lifeRemaining: 37.98427963256836
    },
    { age: 46, deathChance: 0.002132940338924527, lifeRemaining: 37.05859375 },
    {
      age: 47,
      deathChance: 0.0023105242289602757,
      lifeRemaining: 36.13673782348633
    },
    {
      age: 48,
      deathChance: 0.0025199383962899446,
      lifeRemaining: 35.219268798828125
    },
    {
      age: 49,
      deathChance: 0.0027616312727332115,
      lifeRemaining: 34.306983947753906
    },
    {
      age: 50,
      deathChance: 0.0030184914357960224,
      lifeRemaining: 33.400604248046875
    },
    {
      age: 51,
      deathChance: 0.003291827393695712,
      lifeRemaining: 32.500213623046875
    },
    {
      age: 52,
      deathChance: 0.0035998576786369085,
      lifeRemaining: 31.605899810791016
    },
    {
      age: 53,
      deathChance: 0.0039407298900187016,
      lifeRemaining: 30.71828269958496
    },
    {
      age: 54,
      deathChance: 0.004300853703171015,
      lifeRemaining: 29.83783531188965
    },
    {
      age: 55,
      deathChance: 0.0046736737713217735,
      lifeRemaining: 28.96455955505371
    },
    {
      age: 56,
      deathChance: 0.005049633327871561,
      lifeRemaining: 28.098217010498047
    },
    {
      age: 57,
      deathChance: 0.005425123032182455,
      lifeRemaining: 27.238283157348633
    },
    {
      age: 58,
      deathChance: 0.005805716849863529,
      lifeRemaining: 26.38413429260254
    },
    {
      age: 59,
      deathChance: 0.006206429563462734,
      lifeRemaining: 25.535287857055664
    },
    {
      age: 60,
      deathChance: 0.006643775384873152,
      lifeRemaining: 24.691638946533203
    },
    {
      age: 61,
      deathChance: 0.007123772520571947,
      lifeRemaining: 23.853437423706055
    },
    {
      age: 62,
      deathChance: 0.007646834012120962,
      lifeRemaining: 23.020998001098633
    },
    {
      age: 63,
      deathChance: 0.00821660179644823,
      lifeRemaining: 22.194538116455078
    },
    {
      age: 64,
      deathChance: 0.008841680362820625,
      lifeRemaining: 21.374271392822266
    },
    {
      age: 65,
      deathChance: 0.009515288285911083,
      lifeRemaining: 20.560482025146484
    },
    {
      age: 66,
      deathChance: 0.01029264833778143,
      lifeRemaining: 19.753196716308594
    },
    {
      age: 67,
      deathChance: 0.011187560856342316,
      lifeRemaining: 18.95342254638672
    },
    {
      age: 68,
      deathChance: 0.012280324473977089,
      lifeRemaining: 18.162208557128906
    },
    {
      age: 69,
      deathChance: 0.013536711223423481,
      lifeRemaining: 17.381803512573242
    },
    {
      age: 70,
      deathChance: 0.014827486127614975,
      lifeRemaining: 16.61346435546875
    },
    {
      age: 71,
      deathChance: 0.016570448875427246,
      lifeRemaining: 15.85598373413086
    },
    {
      age: 72,
      deathChance: 0.0182353425770998,
      lifeRemaining: 15.114725112915039
    },
    {
      age: 73,
      deathChance: 0.020046193152666092,
      lifeRemaining: 14.38617992401123
    },
    {
      age: 74,
      deathChance: 0.02193782478570938,
      lifeRemaining: 13.670239448547363
    },
    {
      age: 75,
      deathChance: 0.024381814524531364,
      lifeRemaining: 12.96564769744873
    },
    {
      age: 76,
      deathChance: 0.027025815099477768,
      lifeRemaining: 12.277178764343262
    },
    {
      age: 77,
      deathChance: 0.029965296387672424,
      lifeRemaining: 11.604307174682617
    },
    {
      age: 78,
      deathChance: 0.03356606885790825,
      lifeRemaining: 10.9473295211792
    },
    {
      age: 79,
      deathChance: 0.037224430590867996,
      lifeRemaining: 10.310184478759766
    },
    {
      age: 80,
      deathChance: 0.04174827039241791,
      lifeRemaining: 9.689481735229492
    },
    {
      age: 81,
      deathChance: 0.04642612487077713,
      lifeRemaining: 9.089839935302734
    },
    {
      age: 82,
      deathChance: 0.052066199481487274,
      lifeRemaining: 8.508049964904785
    },
    {
      age: 83,
      deathChance: 0.05921279639005661,
      lifeRemaining: 7.94789981842041
    },
    {
      age: 84,
      deathChance: 0.0663585364818573,
      lifeRemaining: 7.416667938232422
    },
    {
      age: 85,
      deathChance: 0.07379838079214096,
      lifeRemaining: 6.90826940536499
    },
    {
      age: 86,
      deathChance: 0.08179298788309097,
      lifeRemaining: 6.41887092590332
    },
    {
      age: 87,
      deathChance: 0.09258637577295303,
      lifeRemaining: 5.946118354797363
    },
    {
      age: 88,
      deathChance: 0.10454946756362915,
      lifeRemaining: 5.501803398132324
    },
    {
      age: 89,
      deathChance: 0.11774128675460815,
      lifeRemaining: 5.085794925689697
    },
    {
      age: 90,
      deathChance: 0.13220612704753876,
      lifeRemaining: 4.697789669036865
    },
    {
      age: 91,
      deathChance: 0.14796899259090424,
      lifeRemaining: 4.3373122215271
    },
    {
      age: 92,
      deathChance: 0.16503094136714935,
      lifeRemaining: 4.003723621368408
    },
    {
      age: 93,
      deathChance: 0.18336477875709534,
      lifeRemaining: 3.6962318420410156
    },
    {
      age: 94,
      deathChance: 0.20291149616241455,
      lifeRemaining: 3.4139037132263184
    },
    {
      age: 95,
      deathChance: 0.22357799112796783,
      lifeRemaining: 3.155683994293213
    },
    {
      age: 96,
      deathChance: 0.24523629248142242,
      lifeRemaining: 2.9204132556915283
    },
    {
      age: 97,
      deathChance: 0.2677249610424042,
      lifeRemaining: 2.7068490982055664
    },
    {
      age: 98,
      deathChance: 0.2908526062965393,
      lifeRemaining: 2.5136890411376953
    },
    {
      age: 99,
      deathChance: 0.31440362334251404,
      lifeRemaining: 2.3395915031433105
    }
  ],
  blackPopulation: [
    {
      age: 0,
      deathChance: 0.010796412825584412,
      lifeRemaining: 75.30674743652344
    },
    {
      age: 1,
      deathChance: 0.0006050770753063262,
      lifeRemaining: 75.1272201538086
    },
    {
      age: 2,
      deathChance: 0.0003807078755926341,
      lifeRemaining: 74.17240142822266
    },
    {
      age: 3,
      deathChance: 0.0002812627935782075,
      lifeRemaining: 73.20045471191406
    },
    {
      age: 4,
      deathChance: 0.0002395529591012746,
      lifeRemaining: 72.22090911865234
    },
    {
      age: 5,
      deathChance: 0.00021402268612291664,
      lifeRemaining: 71.23809814453125
    },
    {
      age: 6,
      deathChance: 0.0001910979626700282,
      lifeRemaining: 70.25324249267578
    },
    {
      age: 7,
      deathChance: 0.00017223205941263586,
      lifeRemaining: 69.26657104492188
    },
    {
      age: 8,
      deathChance: 0.0001539645454613492,
      lifeRemaining: 68.2784194946289
    },
    {
      age: 9,
      deathChance: 0.00013751816004514694,
      lifeRemaining: 67.28884887695312
    },
    {
      age: 10,
      deathChance: 0.0001292268862016499,
      lifeRemaining: 66.29803466796875
    },
    {
      age: 11,
      deathChance: 0.00014003431715536863,
      lifeRemaining: 65.3065414428711
    },
    {
      age: 12,
      deathChance: 0.0001828437380027026,
      lifeRemaining: 64.31562042236328
    },
    {
      age: 13,
      deathChance: 0.0002647356013767421,
      lifeRemaining: 63.32728958129883
    },
    {
      age: 14,
      deathChance: 0.0003763785061892122,
      lifeRemaining: 62.34392547607422
    },
    {
      age: 15,
      deathChance: 0.0004985080449841917,
      lifeRemaining: 61.367210388183594
    },
    {
      age: 16,
      deathChance: 0.0006214946624822915,
      lifeRemaining: 60.3975715637207
    },
    {
      age: 17,
      deathChance: 0.0007498629856854677,
      lifeRemaining: 59.434818267822266
    },
    {
      age: 18,
      deathChance: 0.0008794581517577171,
      lifeRemaining: 58.47904586791992
    },
    {
      age: 19,
      deathChance: 0.0010065074311569333,
      lifeRemaining: 57.53007507324219
    },
    {
      age: 20,
      deathChance: 0.001134403981268406,
      lifeRemaining: 56.5875358581543
    },
    {
      age: 21,
      deathChance: 0.0012564421631395817,
      lifeRemaining: 55.6512336730957
    },
    {
      age: 22,
      deathChance: 0.0013583449181169271,
      lifeRemaining: 54.720611572265625
    },
    {
      age: 23,
      deathChance: 0.0014334581792354584,
      lifeRemaining: 53.79436111450195
    },
    {
      age: 24,
      deathChance: 0.0014877415960654616,
      lifeRemaining: 52.87086868286133
    },
    {
      age: 25,
      deathChance: 0.0015356078511103988,
      lifeRemaining: 51.94889450073242
    },
    {
      age: 26,
      deathChance: 0.001583461300469935,
      lifeRemaining: 51.02802276611328
    },
    {
      age: 27,
      deathChance: 0.0016275696689262986,
      lifeRemaining: 50.108158111572266
    },
    {
      age: 28,
      deathChance: 0.0016721852589398623,
      lifeRemaining: 49.18903350830078
    },
    {
      age: 29,
      deathChance: 0.0017212802777066827,
      lifeRemaining: 48.27058410644531
    },
    {
      age: 30,
      deathChance: 0.001773801282979548,
      lifeRemaining: 47.35295486450195
    },
    {
      age: 31,
      deathChance: 0.0018335271161049604,
      lifeRemaining: 46.43621063232422
    },
    {
      age: 32,
      deathChance: 0.0019081693608313799,
      lifeRemaining: 45.52058792114258
    },
    {
      age: 33,
      deathChance: 0.001997655723243952,
      lifeRemaining: 44.60666275024414
    },
    {
      age: 34,
      deathChance: 0.0020957801025360823,
      lifeRemaining: 43.6949462890625
    },
    {
      age: 35,
      deathChance: 0.0022041439078748226,
      lifeRemaining: 42.78565979003906
    },
    {
      age: 36,
      deathChance: 0.0023170970380306244,
      lifeRemaining: 41.87907409667969
    },
    {
      age: 37,
      deathChance: 0.002425353042781353,
      lifeRemaining: 40.97517395019531
    },
    {
      age: 38,
      deathChance: 0.00252901460044086,
      lifeRemaining: 40.07358169555664
    },
    {
      age: 39,
      deathChance: 0.0026383844669908285,
      lifeRemaining: 39.17391586303711
    },
    {
      age: 40,
      deathChance: 0.0027691666036844254,
      lifeRemaining: 38.27622604370117
    },
    {
      age: 41,
      deathChance: 0.0029286362696439028,
      lifeRemaining: 37.38112258911133
    },
    {
      age: 42,
      deathChance: 0.003110695630311966,
      lifeRemaining: 36.48945236206055
    },
    {
      age: 43,
      deathChance: 0.0033098228741437197,
      lifeRemaining: 35.60175323486328
    },
    {
      age: 44,
      deathChance: 0.003524803789332509,
      lifeRemaining: 34.71832275390625
    },
    {
      age: 45,
      deathChance: 0.003756928723305464,
      lifeRemaining: 33.839359283447266
    },
    {
      age: 46,
      deathChance: 0.004020387306809425,
      lifeRemaining: 32.965087890625
    },
    {
      age: 47,
      deathChance: 0.00432902155444026,
      lifeRemaining: 32.096134185791016
    },
    {
      age: 48,
      deathChance: 0.004697108641266823,
      lifeRemaining: 31.233509063720703
    },
    {
      age: 49,
      deathChance: 0.005125279538333416,
      lifeRemaining: 30.37854766845703
    },
    {
      age: 50,
      deathChance: 0.00557539751753211,
      lifeRemaining: 29.532474517822266
    },
    {
      age: 51,
      deathChance: 0.006060545798391104,
      lifeRemaining: 28.695247650146484
    },
    {
      age: 52,
      deathChance: 0.006637158337980509,
      lifeRemaining: 27.86716651916504
    },
    {
      age: 53,
      deathChance: 0.00731924781575799,
      lifeRemaining: 27.05002212524414
    },
    {
      age: 54,
      deathChance: 0.008077817969024181,
      lifeRemaining: 26.24578094482422
    },
    {
      age: 55,
      deathChance: 0.008863701485097408,
      lifeRemaining: 25.4554443359375
    },
    {
      age: 56,
      deathChance: 0.009654238820075989,
      lifeRemaining: 24.678619384765625
    },
    {
      age: 57,
      deathChance: 0.010475428774952888,
      lifeRemaining: 23.914321899414062
    },
    {
      age: 58,
      deathChance: 0.011342627927660942,
      lifeRemaining: 23.16219139099121
    },
    {
      age: 59,
      deathChance: 0.012267307378351688,
      lifeRemaining: 22.422189712524414
    },
    {
      age: 60,
      deathChance: 0.013259396888315678,
      lifeRemaining: 21.694456100463867
    },
    {
      age: 61,
      deathChance: 0.014298152178525925,
      lifeRemaining: 20.979257583618164
    },
    {
      age: 62,
      deathChance: 0.015358674339950085,
      lifeRemaining: 20.276321411132812
    },
    {
      age: 63,
      deathChance: 0.016416991129517555,
      lifeRemaining: 19.584796905517578
    },
    {
      age: 64,
      deathChance: 0.01748058572411537,
      lifeRemaining: 18.903343200683594
    },
    {
      age: 65,
      deathChance: 0.01863451860845089,
      lifeRemaining: 18.23076820373535
    },
    {
      age: 66,
      deathChance: 0.01988300494849682,
      lifeRemaining: 17.567445755004883
    },
    {
      age: 67,
      deathChance: 0.021127214655280113,
      lifeRemaining: 16.913684844970703
    },
    {
      age: 68,
      deathChance: 0.02230055443942547,
      lifeRemaining: 16.2679443359375
    },
    {
      age: 69,
      deathChance: 0.023514943197369576,
      lifeRemaining: 15.62759780883789
    },
    {
      age: 70,
      deathChance: 0.024681350216269493,
      lifeRemaining: 14.991889953613281
    },
    {
      age: 71,
      deathChance: 0.026448290795087814,
      lifeRemaining: 14.358620643615723
    },
    {
      age: 72,
      deathChance: 0.028366003185510635,
      lifeRemaining: 13.735115051269531
    },
    {
      age: 73,
      deathChance: 0.030733546242117882,
      lifeRemaining: 13.121501922607422
    },
    {
      age: 74,
      deathChance: 0.03321559354662895,
      lifeRemaining: 12.52170467376709
    },
    {
      age: 75,
      deathChance: 0.035961296409368515,
      lifeRemaining: 11.934732437133789
    },
    {
      age: 76,
      deathChance: 0.03891340643167496,
      lifeRemaining: 11.361279487609863
    },
    {
      age: 77,
      deathChance: 0.04233812913298607,
      lifeRemaining: 10.801041603088379
    },
    {
      age: 78,
      deathChance: 0.04637480527162552,
      lifeRemaining: 10.256449699401855
    },
    {
      age: 79,
      deathChance: 0.05016089230775833,
      lifeRemaining: 9.73090648651123
    },
    {
      age: 80,
      deathChance: 0.05463747680187225,
      lifeRemaining: 9.218389511108398
    },
    {
      age: 81,
      deathChance: 0.059225309640169144,
      lifeRemaining: 8.722270965576172
    },
    {
      age: 82,
      deathChance: 0.06481990218162537,
      lifeRemaining: 8.239893913269043
    },
    {
      age: 83,
      deathChance: 0.0710466131567955,
      lifeRemaining: 7.776366710662842
    },
    {
      age: 84,
      deathChance: 0.07724966108798981,
      lifeRemaining: 7.332866191864014
    },
    {
      age: 85,
      deathChance: 0.08467693626880646,
      lifeRemaining: 6.9048919677734375
    },
    {
      age: 86,
      deathChance: 0.0927223265171051,
      lifeRemaining: 6.497411251068115
    },
    {
      age: 87,
      deathChance: 0.10139895230531693,
      lifeRemaining: 6.110337257385254
    },
    {
      age: 88,
      deathChance: 0.1107308566570282,
      lifeRemaining: 5.743412494659424
    },
    {
      age: 89,
      deathChance: 0.12073814868927002,
      lifeRemaining: 5.3963165283203125
    },
    {
      age: 90,
      deathChance: 0.1314360350370407,
      lifeRemaining: 5.068666934967041
    },
    {
      age: 91,
      deathChance: 0.14283378422260284,
      lifeRemaining: 4.76002311706543
    },
    {
      age: 92,
      deathChance: 0.15493382513523102,
      lifeRemaining: 4.469891548156738
    },
    {
      age: 93,
      deathChance: 0.1677306741476059,
      lifeRemaining: 4.197729110717773
    },
    {
      age: 94,
      deathChance: 0.1812102198600769,
      lifeRemaining: 3.9429476261138916
    },
    {
      age: 95,
      deathChance: 0.19534890353679657,
      lifeRemaining: 3.704922676086426
    },
    {
      age: 96,
      deathChance: 0.2101132571697235,
      lifeRemaining: 3.482996702194214
    },
    {
      age: 97,
      deathChance: 0.22545970976352692,
      lifeRemaining: 3.276486873626709
    },
    {
      age: 98,
      deathChance: 0.24133454263210297,
      lifeRemaining: 3.0846900939941406
    },
    {
      age: 99,
      deathChance: 0.25767436623573303,
      lifeRemaining: 2.9068901538848877
    }
  ],
  blackMalePopulation: [
    {
      age: 0,
      deathChance: 0.011882242746651173,
      lifeRemaining: 71.9446029663086
    },
    {
      age: 1,
      deathChance: 0.0006217766203917563,
      lifeRemaining: 71.80811309814453
    },
    {
      age: 2,
      deathChance: 0.0004057931946590543,
      lifeRemaining: 70.85247039794922
    },
    {
      age: 3,
      deathChance: 0.00034671660978347063,
      lifeRemaining: 69.88103485107422
    },
    {
      age: 4,
      deathChance: 0.0002313034055987373,
      lifeRemaining: 68.90509796142578
    },
    {
      age: 5,
      deathChance: 0.00023056069039739668,
      lifeRemaining: 67.9209213256836
    },
    {
      age: 6,
      deathChance: 0.00021074051619507372,
      lifeRemaining: 66.93647003173828
    },
    {
      age: 7,
      deathChance: 0.0001924129028338939,
      lifeRemaining: 65.95046997070312
    },
    {
      age: 8,
      deathChance: 0.00016881118062883615,
      lifeRemaining: 64.96307373046875
    },
    {
      age: 9,
      deathChance: 0.00014234847913030535,
      lifeRemaining: 63.97395324707031
    },
    {
      age: 10,
      deathChance: 0.00012547924416139722,
      lifeRemaining: 62.98299026489258
    },
    {
      age: 11,
      deathChance: 0.00013976491754874587,
      lifeRemaining: 61.99082946777344
    },
    {
      age: 12,
      deathChance: 0.0002106999745592475,
      lifeRemaining: 60.999427795410156
    },
    {
      age: 13,
      deathChance: 0.00035233324160799384,
      lifeRemaining: 60.012176513671875
    },
    {
      age: 14,
      deathChance: 0.0005462794215418398,
      lifeRemaining: 59.03314971923828
    },
    {
      age: 15,
      deathChance: 0.0007574809715151787,
      lifeRemaining: 58.06514358520508
    },
    {
      age: 16,
      deathChance: 0.0009647857514210045,
      lifeRemaining: 57.10878372192383
    },
    {
      age: 17,
      deathChance: 0.0011720506008714437,
      lifeRemaining: 56.1634521484375
    },
    {
      age: 18,
      deathChance: 0.0013695904053747654,
      lifeRemaining: 55.22876739501953
    },
    {
      age: 19,
      deathChance: 0.0015541096217930317,
      lifeRemaining: 54.30382537841797
    },
    {
      age: 20,
      deathChance: 0.0017361481441184878,
      lifeRemaining: 53.3875732421875
    },
    {
      age: 21,
      deathChance: 0.0019091012654826045,
      lifeRemaining: 52.47956085205078
    },
    {
      age: 22,
      deathChance: 0.002050999319180846,
      lifeRemaining: 51.5789794921875
    },
    {
      age: 23,
      deathChance: 0.0021535749547183514,
      lifeRemaining: 50.683963775634766
    },
    {
      age: 24,
      deathChance: 0.002225399948656559,
      lifeRemaining: 49.792266845703125
    },
    {
      age: 25,
      deathChance: 0.002286646980792284,
      lifeRemaining: 48.90220642089844
    },
    {
      age: 26,
      deathChance: 0.0023457694333046675,
      lifeRemaining: 48.01313781738281
    },
    {
      age: 27,
      deathChance: 0.002396724885329604,
      lifeRemaining: 47.124855041503906
    },
    {
      age: 28,
      deathChance: 0.0024443778675049543,
      lifeRemaining: 46.236873626708984
    },
    {
      age: 29,
      deathChance: 0.0024939039722085,
      lifeRemaining: 45.34894561767578
    },
    {
      age: 30,
      deathChance: 0.002542504807934165,
      lifeRemaining: 44.46107482910156
    },
    {
      age: 31,
      deathChance: 0.002597660757601261,
      lifeRemaining: 43.57312774658203
    },
    {
      age: 32,
      deathChance: 0.0026748853269964457,
      lifeRemaining: 42.685306549072266
    },
    {
      age: 33,
      deathChance: 0.00277858623303473,
      lifeRemaining: 41.7984504699707
    },
    {
      age: 34,
      deathChance: 0.0028986288234591484,
      lifeRemaining: 40.91352081298828
    },
    {
      age: 35,
      deathChance: 0.0030344880651682615,
      lifeRemaining: 40.031005859375
    },
    {
      age: 36,
      deathChance: 0.0031717615202069283,
      lifeRemaining: 39.15132522583008
    },
    {
      age: 37,
      deathChance: 0.0032921847887337208,
      lifeRemaining: 38.27430725097656
    },
    {
      age: 38,
      deathChance: 0.0033906300086528063,
      lifeRemaining: 37.399078369140625
    },
    {
      age: 39,
      deathChance: 0.003483035136014223,
      lifeRemaining: 36.52461242675781
    },
    {
      age: 40,
      deathChance: 0.0035933328326791525,
      lifeRemaining: 35.65052795410156
    },
    {
      age: 41,
      deathChance: 0.003742310218513012,
      lifeRemaining: 34.77729034423828
    },
    {
      age: 42,
      deathChance: 0.0039323740638792515,
      lifeRemaining: 33.90604782104492
    },
    {
      age: 43,
      deathChance: 0.004165434278547764,
      lifeRemaining: 33.037933349609375
    },
    {
      age: 44,
      deathChance: 0.004434053786098957,
      lifeRemaining: 32.174034118652344
    },
    {
      age: 45,
      deathChance: 0.00473050819709897,
      lifeRemaining: 31.315105438232422
    },
    {
      age: 46,
      deathChance: 0.005060845986008644,
      lifeRemaining: 30.46156883239746
    },
    {
      age: 47,
      deathChance: 0.005437587387859821,
      lifeRemaining: 29.613967895507812
    },
    {
      age: 48,
      deathChance: 0.005873961374163628,
      lifeRemaining: 28.77314567565918
    },
    {
      age: 49,
      deathChance: 0.006376233417540789,
      lifeRemaining: 27.940200805664062
    },
    {
      age: 50,
      deathChance: 0.0069045922718942165,
      lifeRemaining: 27.116287231445312
    },
    {
      age: 51,
      deathChance: 0.0074848695658147335,
      lifeRemaining: 26.301342010498047
    },
    {
      age: 52,
      deathChance: 0.008192196488380432,
      lifeRemaining: 25.49591827392578
    },
    {
      age: 53,
      deathChance: 0.00905000139027834,
      lifeRemaining: 24.702383041381836
    },
    {
      age: 54,
      deathChance: 0.010020229034125805,
      lifeRemaining: 23.92341423034668
    },
    {
      age: 55,
      deathChance: 0.01102579478174448,
      lifeRemaining: 23.160497665405273
    },
    {
      age: 56,
      deathChance: 0.012041490525007248,
      lifeRemaining: 22.413135528564453
    },
    {
      age: 57,
      deathChance: 0.013122141361236572,
      lifeRemaining: 21.680217742919922
    },
    {
      age: 58,
      deathChance: 0.014298422262072563,
      lifeRemaining: 20.961843490600586
    },
    {
      age: 59,
      deathChance: 0.015581365674734116,
      lifeRemaining: 20.25865936279297
    },
    {
      age: 60,
      deathChance: 0.016979267820715904,
      lifeRemaining: 19.571399688720703
    },
    {
      age: 61,
      deathChance: 0.01844324730336666,
      lifeRemaining: 18.90081214904785
    },
    {
      age: 62,
      deathChance: 0.019919708371162415,
      lifeRemaining: 18.246557235717773
    },
    {
      age: 63,
      deathChance: 0.02135440893471241,
      lifeRemaining: 17.607248306274414
    },
    {
      age: 64,
      deathChance: 0.022760381922125816,
      lifeRemaining: 16.980533599853516
    },
    {
      age: 65,
      deathChance: 0.02427864260971546,
      lifeRemaining: 16.3643741607666
    },
    {
      age: 66,
      deathChance: 0.02593092806637287,
      lifeRemaining: 15.759124755859375
    },
    {
      age: 67,
      deathChance: 0.02755059488117695,
      lifeRemaining: 15.1653413772583
    },
    {
      age: 68,
      deathChance: 0.029041366651654243,
      lifeRemaining: 14.580826759338379
    },
    {
      age: 69,
      deathChance: 0.030500616878271103,
      lifeRemaining: 14.001984596252441
    },
    {
      age: 70,
      deathChance: 0.031843457370996475,
      lifeRemaining: 13.426758766174316
    },
    {
      age: 71,
      deathChance: 0.03414159268140793,
      lifeRemaining: 12.851930618286133
    },
    {
      age: 72,
      deathChance: 0.03611306846141815,
      lifeRemaining: 12.288552284240723
    },
    {
      age: 73,
      deathChance: 0.03904320299625397,
      lifeRemaining: 11.730222702026367
    },
    {
      age: 74,
      deathChance: 0.04187317192554474,
      lifeRemaining: 11.186500549316406
    },
    {
      age: 75,
      deathChance: 0.04490678757429123,
      lifeRemaining: 10.653534889221191
    },
    {
      age: 76,
      deathChance: 0.04877166450023651,
      lifeRemaining: 10.130936622619629
    },
    {
      age: 77,
      deathChance: 0.05215773731470108,
      lifeRemaining: 9.624736785888672
    },
    {
      age: 78,
      deathChance: 0.057217616587877274,
      lifeRemaining: 9.126851081848145
    },
    {
      age: 79,
      deathChance: 0.06203828379511833,
      lifeRemaining: 8.650416374206543
    },
    {
      age: 80,
      deathChance: 0.06665408611297607,
      lifeRemaining: 8.189496994018555
    },
    {
      age: 81,
      deathChance: 0.07211274653673172,
      lifeRemaining: 7.738635540008545
    },
    {
      age: 82,
      deathChance: 0.07969126105308533,
      lifeRemaining: 7.301202297210693
    },
    {
      age: 83,
      deathChance: 0.08760543912649155,
      lifeRemaining: 6.89013147354126
    },
    {
      age: 84,
      deathChance: 0.09402991086244583,
      lifeRemaining: 6.503692626953125
    },
    {
      age: 85,
      deathChance: 0.1009056344628334,
      lifeRemaining: 6.126811504364014
    },
    {
      age: 86,
      deathChance: 0.1102265939116478,
      lifeRemaining: 5.758310317993164
    },
    {
      age: 87,
      deathChance: 0.12022559344768524,
      lifeRemaining: 5.4097185134887695
    },
    {
      age: 88,
      deathChance: 0.1309182196855545,
      lifeRemaining: 5.0806565284729
    },
    {
      age: 89,
      deathChance: 0.14231416583061218,
      lifeRemaining: 4.770685195922852
    },
    {
      age: 90,
      deathChance: 0.15441617369651794,
      lifeRemaining: 4.479311466217041
    },
    {
      age: 91,
      deathChance: 0.1672191023826599,
      lifeRemaining: 4.205993175506592
    },
    {
      age: 92,
      deathChance: 0.1807090789079666,
      lifeRemaining: 3.9501419067382812
    },
    {
      age: 93,
      deathChance: 0.1948627233505249,
      lifeRemaining: 3.7111318111419678
    },
    {
      age: 94,
      deathChance: 0.20964668691158295,
      lifeRemaining: 3.4883031845092773
    },
    {
      age: 95,
      deathChance: 0.22501733899116516,
      lifeRemaining: 3.280971050262451
    },
    {
      age: 96,
      deathChance: 0.24092085659503937,
      lifeRemaining: 3.088430404663086
    },
    {
      age: 97,
      deathChance: 0.25729355216026306,
      lifeRemaining: 2.909960985183716
    },
    {
      age: 98,
      deathChance: 0.2740626931190491,
      lifeRemaining: 2.7448363304138184
    },
    {
      age: 99,
      deathChance: 0.2911474406719208,
      lifeRemaining: 2.5923280715942383
    }
  ],
  blackFemalePopulation: [
    {
      age: 0,
      deathChance: 0.009674320928752422,
      lifeRemaining: 78.45941162109375
    },
    {
      age: 1,
      deathChance: 0.0005877604708075523,
      lifeRemaining: 78.22460174560547
    },
    {
      age: 2,
      deathChance: 0.00035472511081025004,
      lifeRemaining: 77.27031707763672
    },
    {
      age: 3,
      deathChance: 0.00021352112526074052,
      lifeRemaining: 76.29756164550781
    },
    {
      age: 4,
      deathChance: 0.0002480848634149879,
      lifeRemaining: 75.3137435913086
    },
    {
      age: 5,
      deathChance: 0.0001969258300960064,
      lifeRemaining: 74.33231353759766
    },
    {
      age: 6,
      deathChance: 0.00017080055840779096,
      lifeRemaining: 73.34685516357422
    },
    {
      age: 7,
      deathChance: 0.00015138812887016684,
      lifeRemaining: 72.35929870605469
    },
    {
      age: 8,
      deathChance: 0.00013863868662156165,
      lifeRemaining: 71.37018585205078
    },
    {
      age: 9,
      deathChance: 0.00013253497309051454,
      lifeRemaining: 70.38001251220703
    },
    {
      age: 10,
      deathChance: 0.0001330905652139336,
      lifeRemaining: 69.38927459716797
    },
    { age: 11, deathChance: 0.00014031180762685835, lifeRemaining: 68.3984375 },
    {
      age: 12,
      deathChance: 0.0001541369711048901,
      lifeRemaining: 67.40796661376953
    },
    {
      age: 13,
      deathChance: 0.0001744209002936259,
      lifeRemaining: 66.41828155517578
    },
    {
      age: 14,
      deathChance: 0.00020106024749111384,
      lifeRemaining: 65.42977905273438
    },
    {
      age: 15,
      deathChance: 0.0002311675198143348,
      lifeRemaining: 64.44284057617188
    },
    {
      age: 16,
      deathChance: 0.0002670298854354769,
      lifeRemaining: 63.45762634277344
    },
    {
      age: 17,
      deathChance: 0.0003134820144623518,
      lifeRemaining: 62.47444534301758
    },
    {
      age: 18,
      deathChance: 0.0003717952349688858,
      lifeRemaining: 61.49387741088867
    },
    {
      age: 19,
      deathChance: 0.00043793825898319483,
      lifeRemaining: 60.516563415527344
    },
    {
      age: 20,
      deathChance: 0.0005079636466689408,
      lifeRemaining: 59.54285430908203
    },
    {
      age: 21,
      deathChance: 0.0005760794738307595,
      lifeRemaining: 58.57286071777344
    },
    {
      age: 22,
      deathChance: 0.0006374993827193975,
      lifeRemaining: 57.60633850097656
    },
    {
      age: 23,
      deathChance: 0.0006881746230646968,
      lifeRemaining: 56.642765045166016
    },
    {
      age: 24,
      deathChance: 0.000730597588699311,
      lifeRemaining: 55.681427001953125
    },
    {
      age: 25,
      deathChance: 0.0007716248510405421,
      lifeRemaining: 54.721771240234375
    },
    {
      age: 26,
      deathChance: 0.000814638624433428,
      lifeRemaining: 53.76364517211914
    },
    {
      age: 27,
      deathChance: 0.0008587921038269997,
      lifeRemaining: 52.807071685791016
    },
    {
      age: 28,
      deathChance: 0.0009078362490981817,
      lifeRemaining: 51.852027893066406
    },
    {
      age: 29,
      deathChance: 0.0009647244587540627,
      lifeRemaining: 50.8986930847168
    },
    {
      age: 30,
      deathChance: 0.0010304402094334364,
      lifeRemaining: 49.947357177734375
    },
    {
      age: 31,
      deathChance: 0.0011045021237805486,
      lifeRemaining: 48.99836349487305
    },
    {
      age: 32,
      deathChance: 0.001185924862511456,
      lifeRemaining: 48.05198669433594
    },
    {
      age: 33,
      deathChance: 0.0012693774187937379,
      lifeRemaining: 47.10845184326172
    },
    {
      age: 34,
      deathChance: 0.0013525381218641996,
      lifeRemaining: 46.16769027709961
    },
    {
      age: 35,
      deathChance: 0.0014402337837964296,
      lifeRemaining: 45.22953796386719
    },
    {
      age: 36,
      deathChance: 0.0015357472002506256,
      lifeRemaining: 44.2940559387207
    },
    {
      age: 37,
      deathChance: 0.0016374903498217463,
      lifeRemaining: 43.361412048339844
    },
    {
      age: 38,
      deathChance: 0.0017504722345620394,
      lifeRemaining: 42.43171310424805
    },
    {
      age: 39,
      deathChance: 0.00187965901568532,
      lifeRemaining: 41.50524139404297
    },
    {
      age: 40,
      deathChance: 0.002033098367974162,
      lifeRemaining: 40.58246612548828
    },
    {
      age: 41,
      deathChance: 0.002205523429438472,
      lifeRemaining: 39.66412353515625
    },
    {
      age: 42,
      deathChance: 0.002383022801950574,
      lifeRemaining: 38.75069046020508
    },
    {
      age: 43,
      deathChance: 0.0025532436557114124,
      lifeRemaining: 37.842063903808594
    },
    {
      age: 44,
      deathChance: 0.0027207606472074986,
      lifeRemaining: 36.937652587890625
    },
    {
      age: 45,
      deathChance: 0.0028953873552381992,
      lifeRemaining: 36.03705978393555
    },
    {
      age: 46,
      deathChance: 0.0030990950763225555,
      lifeRemaining: 35.14025115966797
    },
    {
      age: 47,
      deathChance: 0.003347049467265606,
      lifeRemaining: 34.2479362487793
    },
    {
      age: 48,
      deathChance: 0.003654843894764781,
      lifeRemaining: 33.36127471923828
    },
    {
      age: 49,
      deathChance: 0.004018179606646299,
      lifeRemaining: 32.481815338134766
    },
    {
      age: 50,
      deathChance: 0.004400044213980436,
      lifeRemaining: 31.610843658447266
    },
    {
      age: 51,
      deathChance: 0.00480232248082757,
      lifeRemaining: 30.74833869934082
    },
    {
      age: 52,
      deathChance: 0.005265737418085337,
      lifeRemaining: 29.894302368164062
    },
    {
      age: 53,
      deathChance: 0.005796635523438454,
      lifeRemaining: 29.04990577697754
    },
    {
      age: 54,
      deathChance: 0.006374540273100138,
      lifeRemaining: 28.21636390686035
    },
    {
      age: 55,
      deathChance: 0.006974248681217432,
      lifeRemaining: 27.394176483154297
    },
    {
      age: 56,
      deathChance: 0.007576147094368935,
      lifeRemaining: 26.583059310913086
    },
    {
      age: 57,
      deathChance: 0.00818396732211113,
      lifeRemaining: 25.78217887878418
    },
    {
      age: 58,
      deathChance: 0.008802749216556549,
      lifeRemaining: 24.99079704284668
    },
    {
      age: 59,
      deathChance: 0.009446182288229465,
      lifeRemaining: 24.208297729492188
    },
    {
      age: 60,
      deathChance: 0.010126017034053802,
      lifeRemaining: 23.434385299682617
    },
    {
      age: 61,
      deathChance: 0.010844712145626545,
      lifeRemaining: 22.668994903564453
    },
    {
      age: 62,
      deathChance: 0.011601898819208145,
      lifeRemaining: 21.91204833984375
    },
    {
      age: 63,
      deathChance: 0.012396677397191525,
      lifeRemaining: 21.16338348388672
    },
    {
      age: 64,
      deathChance: 0.013230935670435429,
      lifeRemaining: 20.42275619506836
    },
    {
      age: 65,
      deathChance: 0.014149419963359833,
      lifeRemaining: 19.68988800048828
    },
    {
      age: 66,
      deathChance: 0.015136838890612125,
      lifeRemaining: 18.96531105041504
    },
    {
      age: 67,
      deathChance: 0.016142141073942184,
      lifeRemaining: 18.24911117553711
    },
    {
      age: 68,
      deathChance: 0.017121486365795135,
      lifeRemaining: 17.540321350097656
    },
    {
      age: 69,
      deathChance: 0.018186694011092186,
      lifeRemaining: 16.837158203125
    },
    {
      age: 70,
      deathChance: 0.01926405541598797,
      lifeRemaining: 16.139780044555664
    },
    {
      age: 71,
      deathChance: 0.020676514133810997,
      lifeRemaining: 15.446983337402344
    },
    {
      age: 72,
      deathChance: 0.022638075053691864,
      lifeRemaining: 14.76255989074707
    },
    {
      age: 73,
      deathChance: 0.024655671790242195,
      lifeRemaining: 14.092916488647461
    },
    {
      age: 74,
      deathChance: 0.026984894648194313,
      lifeRemaining: 13.436531066894531
    },
    {
      age: 75,
      deathChance: 0.029625089839100838,
      lifeRemaining: 12.795303344726562
    },
    {
      age: 76,
      deathChance: 0.03210126608610153,
      lifeRemaining: 12.170672416687012
    },
    {
      age: 77,
      deathChance: 0.035678789019584656,
      lifeRemaining: 11.557740211486816
    },
    {
      age: 78,
      deathChance: 0.03913589194417,
      lifeRemaining: 10.966864585876465
    },
    {
      age: 79,
      deathChance: 0.0424322709441185,
      lifeRemaining: 10.39317798614502
    },
    {
      age: 80,
      deathChance: 0.04700760170817375,
      lifeRemaining: 9.831570625305176
    },
    {
      age: 81,
      deathChance: 0.05130807310342789,
      lifeRemaining: 9.291863441467285
    },
    {
      age: 82,
      deathChance: 0.05597151443362236,
      lifeRemaining: 8.767353057861328
    },
    {
      age: 83,
      deathChance: 0.061447158455848694,
      lifeRemaining: 8.257524490356445
    },
    {
      age: 84,
      deathChance: 0.06787452846765518,
      lifeRemaining: 7.765410423278809
    },
    {
      age: 85,
      deathChance: 0.07382481545209885,
      lifeRemaining: 7.294455528259277
    },
    {
      age: 86,
      deathChance: 0.08177874982357025,
      lifeRemaining: 6.8360371589660645
    },
    {
      age: 87,
      deathChance: 0.0905364453792572,
      lifeRemaining: 6.400338172912598
    },
    {
      age: 88,
      deathChance: 0.10007154196500778,
      lifeRemaining: 5.987712860107422
    },
    {
      age: 89,
      deathChance: 0.1104183942079544,
      lifeRemaining: 5.5979437828063965
    },
    {
      age: 90,
      deathChance: 0.12160544842481613,
      lifeRemaining: 5.230720043182373
    },
    {
      age: 91,
      deathChance: 0.13365358114242554,
      lifeRemaining: 4.885643482208252
    },
    {
      age: 92,
      deathChance: 0.14657439291477203,
      lifeRemaining: 4.562229156494141
    },
    {
      age: 93,
      deathChance: 0.16036848723888397,
      lifeRemaining: 4.259909629821777
    },
    {
      age: 94,
      deathChance: 0.1750238835811615,
      lifeRemaining: 3.9780476093292236
    },
    {
      age: 95,
      deathChance: 0.19051460921764374,
      lifeRemaining: 3.7159371376037598
    },
    {
      age: 96,
      deathChance: 0.2067996859550476,
      lifeRemaining: 3.4728171825408936
    },
    {
      age: 97,
      deathChance: 0.2238224297761917,
      lifeRemaining: 3.2478766441345215
    },
    {
      age: 98,
      deathChance: 0.2415105104446411,
      lifeRemaining: 3.0402681827545166
    },
    {
      age: 99,
      deathChance: 0.2597764730453491,
      lifeRemaining: 2.849114418029785
    }
  ],
  HispanicPopulation: [
    {
      age: 0,
      deathChance: 0.005087877158075571,
      lifeRemaining: 81.81661224365234
    },
    {
      age: 1,
      deathChance: 0.0003121617191936821,
      lifeRemaining: 81.23442840576172
    },
    {
      age: 2,
      deathChance: 0.00018556055147200823,
      lifeRemaining: 80.2596435546875
    },
    {
      age: 3,
      deathChance: 0.00016239192336797714,
      lifeRemaining: 79.27444458007812
    },
    {
      age: 4,
      deathChance: 0.00010717516852309927,
      lifeRemaining: 78.2872314453125
    },
    {
      age: 5,
      deathChance: 0.0001137564322561957,
      lifeRemaining: 77.29557037353516
    },
    {
      age: 6,
      deathChance: 0.00010563300020294264,
      lifeRemaining: 76.30430603027344
    },
    {
      age: 7,
      deathChance: 0.00009858961857389659,
      lifeRemaining: 75.31232452392578
    },
    {
      age: 8,
      deathChance: 0.00009029905777424574,
      lifeRemaining: 74.31969451904297
    },
    {
      age: 9,
      deathChance: 0.00008142750448314473,
      lifeRemaining: 73.32636260986328
    },
    {
      age: 10,
      deathChance: 0.00007583719707326964,
      lifeRemaining: 72.33229064941406
    },
    {
      age: 11,
      deathChance: 0.00008023132977541536,
      lifeRemaining: 71.3377456665039
    },
    {
      age: 12,
      deathChance: 0.00010272670624544844,
      lifeRemaining: 70.34342956542969
    },
    {
      age: 13,
      deathChance: 0.00014850395382381976,
      lifeRemaining: 69.35060119628906
    },
    {
      age: 14,
      deathChance: 0.0002129159984178841,
      lifeRemaining: 68.36082458496094
    },
    {
      age: 15,
      deathChance: 0.00028639662195928395,
      lifeRemaining: 67.37527465820312
    },
    {
      age: 16,
      deathChance: 0.00036069934139959514,
      lifeRemaining: 66.3944320678711
    },
    {
      age: 17,
      deathChance: 0.0004346763016656041,
      lifeRemaining: 65.418212890625
    },
    {
      age: 18,
      deathChance: 0.000503299932461232,
      lifeRemaining: 64.44644165039062
    },
    {
      age: 19,
      deathChance: 0.0005661924951709807,
      lifeRemaining: 63.4786491394043
    },
    {
      age: 20,
      deathChance: 0.000629114278126508,
      lifeRemaining: 62.51432418823242
    },
    {
      age: 21,
      deathChance: 0.0006915321573615074,
      lifeRemaining: 61.55335998535156
    },
    {
      age: 22,
      deathChance: 0.000745431229006499,
      lifeRemaining: 60.595611572265625
    },
    {
      age: 23,
      deathChance: 0.000788327248301357,
      lifeRemaining: 59.640438079833984
    },
    {
      age: 24,
      deathChance: 0.0008221250609494746,
      lifeRemaining: 58.68709945678711
    },
    {
      age: 25,
      deathChance: 0.0008531053317710757,
      lifeRemaining: 57.7349739074707
    },
    {
      age: 26,
      deathChance: 0.0008823768584989011,
      lifeRemaining: 56.78384780883789
    },
    {
      age: 27,
      deathChance: 0.0009055989794433117,
      lifeRemaining: 55.83354949951172
    },
    {
      age: 28,
      deathChance: 0.0009226452093571424,
      lifeRemaining: 54.883705139160156
    },
    {
      age: 29,
      deathChance: 0.0009359297109767795,
      lifeRemaining: 53.933929443359375
    },
    {
      age: 30,
      deathChance: 0.0009464407339692116,
      lifeRemaining: 52.983985900878906
    },
    {
      age: 31,
      deathChance: 0.0009590444969944656,
      lifeRemaining: 52.03371047973633
    },
    {
      age: 32,
      deathChance: 0.0009793400531634688,
      lifeRemaining: 51.08317947387695
    },
    {
      age: 33,
      deathChance: 0.0010106244590133429,
      lifeRemaining: 50.13276290893555
    },
    {
      age: 34,
      deathChance: 0.0010503253433853388,
      lifeRemaining: 49.18297576904297
    },
    {
      age: 35,
      deathChance: 0.0010967436246573925,
      lifeRemaining: 48.23416519165039
    },
    {
      age: 36,
      deathChance: 0.001144259236752987,
      lifeRemaining: 47.28657150268555
    },
    {
      age: 37,
      deathChance: 0.0011884676059708,
      lifeRemaining: 46.34016799926758
    },
    {
      age: 38,
      deathChance: 0.0012272869935259223,
      lifeRemaining: 45.39470672607422
    },
    {
      age: 39,
      deathChance: 0.0012659478234127164,
      lifeRemaining: 44.44987487792969
    },
    {
      age: 40,
      deathChance: 0.001309343846514821,
      lifeRemaining: 43.505584716796875
    },
    {
      age: 41,
      deathChance: 0.001367258606478572,
      lifeRemaining: 42.56196975708008
    },
    {
      age: 42,
      deathChance: 0.0014480693498626351,
      lifeRemaining: 41.61955642700195
    },
    {
      age: 43,
      deathChance: 0.0015581122133880854,
      lifeRemaining: 40.6791877746582
    },
    {
      age: 44,
      deathChance: 0.0016941215144470334,
      lifeRemaining: 39.74188995361328
    },
    {
      age: 45,
      deathChance: 0.0018427419709041715,
      lifeRemaining: 38.8084831237793
    },
    {
      age: 46,
      deathChance: 0.0020040241070091724,
      lifeRemaining: 37.879207611083984
    },
    {
      age: 47,
      deathChance: 0.0021924793254584074,
      lifeRemaining: 36.95426940917969
    },
    {
      age: 48,
      deathChance: 0.002413956681266427,
      lifeRemaining: 36.03437042236328
    },
    {
      age: 49,
      deathChance: 0.002665827516466379,
      lifeRemaining: 35.12035369873047
    },
    {
      age: 50,
      deathChance: 0.0029471181333065033,
      lifeRemaining: 34.212894439697266
    },
    {
      age: 51,
      deathChance: 0.0032450330909341574,
      lifeRemaining: 33.31254196166992
    },
    {
      age: 52,
      deathChance: 0.0035458358470350504,
      lifeRemaining: 32.419368743896484
    },
    {
      age: 53,
      deathChance: 0.0038390844129025936,
      lifeRemaining: 31.53295135498047
    },
    {
      age: 54,
      deathChance: 0.004132545553147793,
      lifeRemaining: 30.652549743652344
    },
    {
      age: 55,
      deathChance: 0.004433623515069485,
      lifeRemaining: 29.777673721313477
    },
    {
      age: 56,
      deathChance: 0.004767053760588169,
      lifeRemaining: 28.908058166503906
    },
    {
      age: 57,
      deathChance: 0.005157661158591509,
      lifeRemaining: 28.044130325317383
    },
    {
      age: 58,
      deathChance: 0.005628117360174656,
      lifeRemaining: 27.186931610107422
    },
    {
      age: 59,
      deathChance: 0.006171657238155603,
      lifeRemaining: 26.33797836303711
    },
    {
      age: 60,
      deathChance: 0.006785200443118811,
      lifeRemaining: 25.498430252075195
    },
    {
      age: 61,
      deathChance: 0.0074286977760493755,
      lifeRemaining: 24.669208526611328
    },
    {
      age: 62,
      deathChance: 0.008056522347033024,
      lifeRemaining: 23.85009765625
    },
    {
      age: 63,
      deathChance: 0.008628496900200844,
      lifeRemaining: 23.03974723815918
    },
    {
      age: 64,
      deathChance: 0.009164391085505486,
      lifeRemaining: 22.235923767089844
    },
    {
      age: 65,
      deathChance: 0.009723035618662834,
      lifeRemaining: 21.436962127685547
    },
    {
      age: 66,
      deathChance: 0.010364122688770294,
      lifeRemaining: 20.642534255981445
    },
    {
      age: 67,
      deathChance: 0.011096268892288208,
      lifeRemaining: 19.853479385375977
    },
    {
      age: 68,
      deathChance: 0.011954901739954948,
      lifeRemaining: 19.07063865661621
    },
    {
      age: 69,
      deathChance: 0.012947027571499348,
      lifeRemaining: 18.29533576965332
    },
    {
      age: 70,
      deathChance: 0.014058775268495083,
      lifeRemaining: 17.52875328063965
    },
    {
      age: 71,
      deathChance: 0.015290112234652042,
      lifeRemaining: 16.77157211303711
    },
    {
      age: 72,
      deathChance: 0.01667499914765358,
      lifeRemaining: 16.024229049682617
    },
    {
      age: 73,
      deathChance: 0.01823294535279274,
      lifeRemaining: 15.287484169006348
    },
    {
      age: 74,
      deathChance: 0.01999030075967312,
      lifeRemaining: 14.56210994720459
    },
    {
      age: 75,
      deathChance: 0.021951861679553986,
      lifeRemaining: 13.84895133972168
    },
    {
      age: 76,
      deathChance: 0.02420555241405964,
      lifeRemaining: 13.14856243133545
    },
    {
      age: 77,
      deathChance: 0.02684723772108555,
      lifeRemaining: 12.462323188781738
    },
    {
      age: 78,
      deathChance: 0.029862811788916588,
      lifeRemaining: 11.792338371276855
    },
    {
      age: 79,
      deathChance: 0.03318212553858757,
      lifeRemaining: 11.13994026184082
    },
    {
      age: 80,
      deathChance: 0.03696310520172119,
      lifeRemaining: 10.505111694335938
    },
    {
      age: 81,
      deathChance: 0.04104667901992798,
      lifeRemaining: 9.889126777648926
    },
    {
      age: 82,
      deathChance: 0.04581890627741814,
      lifeRemaining: 9.291014671325684
    },
    {
      age: 83,
      deathChance: 0.05168915539979935,
      lifeRemaining: 8.713151931762695
    },
    {
      age: 84,
      deathChance: 0.05770699307322502,
      lifeRemaining: 8.160821914672852
    },
    {
      age: 85,
      deathChance: 0.06421680748462677,
      lifeRemaining: 7.629978656768799
    },
    {
      age: 86,
      deathChance: 0.0710737481713295,
      lifeRemaining: 7.119263172149658
    },
    {
      age: 87,
      deathChance: 0.08018007129430771,
      lifeRemaining: 6.625714302062988
    },
    {
      age: 88,
      deathChance: 0.09025537222623825,
      lifeRemaining: 6.159688949584961
    },
    {
      age: 89,
      deathChance: 0.10135173797607422,
      lifeRemaining: 5.721183776855469
    },
    {
      age: 90,
      deathChance: 0.11351098865270615,
      lifeRemaining: 5.310041904449463
    },
    {
      age: 91,
      deathChance: 0.12676142156124115,
      lifeRemaining: 4.9259467124938965
    },
    {
      age: 92,
      deathChance: 0.14111420512199402,
      lifeRemaining: 4.568427562713623
    },
    {
      age: 93,
      deathChance: 0.156560018658638,
      lifeRemaining: 4.236866474151611
    },
    {
      age: 94,
      deathChance: 0.17306597530841827,
      lifeRemaining: 3.930507183074951
    },
    {
      age: 95,
      deathChance: 0.19057324528694153,
      lifeRemaining: 3.648465156555176
    },
    {
      age: 96,
      deathChance: 0.20899586379528046,
      lifeRemaining: 3.389747142791748
    },
    {
      age: 97,
      deathChance: 0.22822065651416779,
      lifeRemaining: 3.153264045715332
    },
    {
      age: 98,
      deathChance: 0.24810880422592163,
      lifeRemaining: 2.9378533363342285
    },
    {
      age: 99,
      deathChance: 0.26849913597106934,
      lifeRemaining: 2.742295503616333
    }
  ],
  HispanicMalePopulation: [
    {
      age: 0,
      deathChance: 0.0053874836303293705,
      lifeRemaining: 79.09651184082031
    },
    {
      age: 1,
      deathChance: 0.0003169318661093712,
      lifeRemaining: 78.52430725097656
    },
    {
      age: 2,
      deathChance: 0.00020561042765621096,
      lifeRemaining: 77.5490493774414
    },
    {
      age: 3,
      deathChance: 0.0001931635633809492,
      lifeRemaining: 76.56489562988281
    },
    {
      age: 4,
      deathChance: 0.00011326335516059771,
      lifeRemaining: 75.57958984375
    },
    {
      age: 5,
      deathChance: 0.00012153355055488646,
      lifeRemaining: 74.58809661865234
    },
    {
      age: 6,
      deathChance: 0.00011073660425608978,
      lifeRemaining: 73.59709930419922
    },
    {
      age: 7,
      deathChance: 0.00010168200242333114,
      lifeRemaining: 72.60519409179688
    },
    {
      age: 8,
      deathChance: 0.00009163562208414078,
      lifeRemaining: 71.6125259399414
    },
    {
      age: 9,
      deathChance: 0.00008160215656971559,
      lifeRemaining: 70.6190414428711
    },
    {
      age: 10,
      deathChance: 0.00007658268441446126,
      lifeRemaining: 69.62476348876953
    },
    {
      age: 11,
      deathChance: 0.00008513869397575036,
      lifeRemaining: 68.63005828857422
    },
    {
      age: 12,
      deathChance: 0.00011761934729292989,
      lifeRemaining: 67.6358642578125
    },
    {
      age: 13,
      deathChance: 0.00018073082901537418,
      lifeRemaining: 66.64376068115234
    },
    {
      age: 14,
      deathChance: 0.00026889273431152105,
      lifeRemaining: 65.65570831298828
    },
    {
      age: 15,
      deathChance: 0.0003687497810460627,
      lifeRemaining: 64.6732406616211
    },
    {
      age: 16,
      deathChance: 0.00047134773922152817,
      lifeRemaining: 63.6969108581543
    },
    {
      age: 17,
      deathChance: 0.0005781992222182453,
      lifeRemaining: 62.72671127319336
    },
    {
      age: 18,
      deathChance: 0.0006839160341769457,
      lifeRemaining: 61.76271438598633
    },
    {
      age: 19,
      deathChance: 0.0007859445177018642,
      lifeRemaining: 60.80464172363281
    },
    {
      age: 20,
      deathChance: 0.0008880090899765491,
      lifeRemaining: 59.852073669433594
    },
    {
      age: 21,
      deathChance: 0.0009874181123450398,
      lifeRemaining: 58.904823303222656
    },
    {
      age: 22,
      deathChance: 0.0010744259925559163,
      lifeRemaining: 57.96255111694336
    },
    {
      age: 23,
      deathChance: 0.0011450416641309857,
      lifeRemaining: 57.024356842041016
    },
    {
      age: 24,
      deathChance: 0.00120128586422652,
      lifeRemaining: 56.08915328979492
    },
    {
      age: 25,
      deathChance: 0.0012543811462819576,
      lifeRemaining: 55.15601348876953
    },
    {
      age: 26,
      deathChance: 0.0013027763925492764,
      lifeRemaining: 54.22466278076172
    },
    {
      age: 27,
      deathChance: 0.0013344223843887448,
      lifeRemaining: 53.294742584228516
    },
    {
      age: 28,
      deathChance: 0.0013466272503137589,
      lifeRemaining: 52.36528396606445
    },
    {
      age: 29,
      deathChance: 0.0013456868473440409,
      lifeRemaining: 51.43522262573242
    },
    {
      age: 30,
      deathChance: 0.001335939159616828,
      lifeRemaining: 50.50386047363281
    },
    {
      age: 31,
      deathChance: 0.0013308706693351269,
      lifeRemaining: 49.57075119018555
    },
    {
      age: 32,
      deathChance: 0.0013437358429655433,
      lifeRemaining: 48.63614273071289
    },
    {
      age: 33,
      deathChance: 0.0013836766593158245,
      lifeRemaining: 47.7009162902832
    },
    {
      age: 34,
      deathChance: 0.0014440166996791959,
      lifeRemaining: 46.76631546020508
    },
    {
      age: 35,
      deathChance: 0.0015148643869906664,
      lifeRemaining: 45.833221435546875
    },
    {
      age: 36,
      deathChance: 0.0015835888916626573,
      lifeRemaining: 44.902000427246094
    },
    {
      age: 37,
      deathChance: 0.0016457487363368273,
      lifeRemaining: 43.9724235534668
    },
    {
      age: 38,
      deathChance: 0.0016967367846518755,
      lifeRemaining: 43.04408645629883
    },
    {
      age: 39,
      deathChance: 0.001743509084917605,
      lifeRemaining: 42.116397857666016
    },
    {
      age: 40,
      deathChance: 0.0017981968121603131,
      lifeRemaining: 41.189083099365234
    },
    {
      age: 41,
      deathChance: 0.0018712491728365421,
      lifeRemaining: 40.26238250732422
    },
    {
      age: 42,
      deathChance: 0.0019641267135739326,
      lifeRemaining: 39.3369255065918
    },
    {
      age: 43,
      deathChance: 0.002081223065033555,
      lifeRemaining: 38.41335678100586
    },
    {
      age: 44,
      deathChance: 0.002222285605967045,
      lifeRemaining: 37.492427825927734
    },
    {
      age: 45,
      deathChance: 0.0023725307546555996,
      lifeRemaining: 36.57482147216797
    },
    {
      age: 46,
      deathChance: 0.002542925300076604,
      lifeRemaining: 35.660614013671875
    },
    {
      age: 47,
      deathChance: 0.0027633262798190117,
      lifeRemaining: 34.75025177001953
    },
    {
      age: 48,
      deathChance: 0.0030494353268295527,
      lifeRemaining: 33.845157623291016
    },
    {
      age: 49,
      deathChance: 0.0033929336350411177,
      lifeRemaining: 32.94715118408203
    },
    {
      age: 50,
      deathChance: 0.0037801936268806458,
      lifeRemaining: 32.057621002197266
    },
    {
      age: 51,
      deathChance: 0.004184409976005554,
      lifeRemaining: 31.177364349365234
    },
    {
      age: 52,
      deathChance: 0.004589580465108156,
      lifeRemaining: 30.306270599365234
    },
    {
      age: 53,
      deathChance: 0.004978915676474571,
      lifeRemaining: 29.44369888305664
    },
    {
      age: 54,
      deathChance: 0.005363679025322199,
      lifeRemaining: 28.588529586791992
    },
    {
      age: 55,
      deathChance: 0.0057613966055214405,
      lifeRemaining: 27.73999786376953
    },
    {
      age: 56,
      deathChance: 0.0062031070701777935,
      lifeRemaining: 26.89784812927246
    },
    {
      age: 57,
      deathChance: 0.006711025256663561,
      lifeRemaining: 26.062620162963867
    },
    {
      age: 58,
      deathChance: 0.00731122400611639,
      lifeRemaining: 25.235328674316406
    },
    {
      age: 59,
      deathChance: 0.00799860805273056,
      lifeRemaining: 24.41750717163086
    },
    {
      age: 60,
      deathChance: 0.00877463910728693,
      lifeRemaining: 23.610355377197266
    },
    {
      age: 61,
      deathChance: 0.009595267474651337,
      lifeRemaining: 22.8149356842041
    },
    {
      age: 62,
      deathChance: 0.010402752086520195,
      lifeRemaining: 22.031126022338867
    },
    {
      age: 63,
      deathChance: 0.011143744923174381,
      lifeRemaining: 21.257463455200195
    },
    {
      age: 64,
      deathChance: 0.011837705969810486,
      lifeRemaining: 20.49138641357422
    },
    {
      age: 65,
      deathChance: 0.012553813867270947,
      lifeRemaining: 19.730873107910156
    },
    {
      age: 66,
      deathChance: 0.01336726825684309,
      lifeRemaining: 18.97536277770996
    },
    {
      age: 67,
      deathChance: 0.014291047118604183,
      lifeRemaining: 18.225675582885742
    },
    {
      age: 68,
      deathChance: 0.015373271889984608,
      lifeRemaining: 17.482664108276367
    },
    {
      age: 69,
      deathChance: 0.01662287302315235,
      lifeRemaining: 16.747819900512695
    },
    {
      age: 70,
      deathChance: 0.018019787967205048,
      lifeRemaining: 16.022472381591797
    },
    {
      age: 71,
      deathChance: 0.019553912803530693,
      lifeRemaining: 15.307317733764648
    },
    {
      age: 72,
      deathChance: 0.02125806361436844,
      lifeRemaining: 14.602632522583008
    },
    {
      age: 73,
      deathChance: 0.0231422521173954,
      lifeRemaining: 13.908937454223633
    },
    {
      age: 74,
      deathChance: 0.02523297630250454,
      lifeRemaining: 13.226602554321289
    },
    {
      age: 75,
      deathChance: 0.027549730613827705,
      lifeRemaining: 12.556045532226562
    },
    {
      age: 76,
      deathChance: 0.030164841562509537,
      lifeRemaining: 11.897595405578613
    },
    {
      age: 77,
      deathChance: 0.033303599804639816,
      lifeRemaining: 11.252095222473145
    },
    {
      age: 78,
      deathChance: 0.03680303692817688,
      lifeRemaining: 10.622515678405762
    },
    {
      age: 79,
      deathChance: 0.0408441536128521,
      lifeRemaining: 10.009288787841797
    },
    {
      age: 80,
      deathChance: 0.045360613614320755,
      lifeRemaining: 9.414227485656738
    },
    {
      age: 81,
      deathChance: 0.050408266484737396,
      lifeRemaining: 8.837794303894043
    },
    {
      age: 82,
      deathChance: 0.05613492429256439,
      lifeRemaining: 8.280399322509766
    },
    {
      age: 83,
      deathChance: 0.06288377940654755,
      lifeRemaining: 7.743126392364502
    },
    {
      age: 84,
      deathChance: 0.07005476951599121,
      lifeRemaining: 7.229165554046631
    },
    {
      age: 85,
      deathChance: 0.0781993716955185,
      lifeRemaining: 6.736087799072266
    },
    {
      age: 86,
      deathChance: 0.08647869527339935,
      lifeRemaining: 6.265115737915039
    },
    {
      age: 87,
      deathChance: 0.09753059595823288,
      lifeRemaining: 5.810871124267578
    },
    {
      age: 88,
      deathChance: 0.10970157384872437,
      lifeRemaining: 5.38482141494751
    },
    {
      age: 89,
      deathChance: 0.12303020805120468,
      lifeRemaining: 4.986723899841309
    },
    {
      age: 90,
      deathChance: 0.13753758370876312,
      lifeRemaining: 4.616166591644287
    },
    {
      age: 91,
      deathChance: 0.15322332084178925,
      lifeRemaining: 4.2725749015808105
    },
    {
      age: 92,
      deathChance: 0.17006167769432068,
      lifeRemaining: 3.9552183151245117
    },
    {
      age: 93,
      deathChance: 0.18799860775470734,
      lifeRemaining: 3.6632230281829834
    },
    {
      age: 94,
      deathChance: 0.20694972574710846,
      lifeRemaining: 3.3955881595611572
    },
    {
      age: 95,
      deathChance: 0.22679969668388367,
      lifeRemaining: 3.1512041091918945
    },
    {
      age: 96,
      deathChance: 0.24740372598171234,
      lifeRemaining: 2.928870677947998
    },
    {
      age: 97,
      deathChance: 0.26859036087989807,
      lifeRemaining: 2.7273221015930176
    },
    {
      age: 98,
      deathChance: 0.29016679525375366,
      lifeRemaining: 2.545245885848999
    },
    {
      age: 99,
      deathChance: 0.31192538142204285,
      lifeRemaining: 2.381304979324341
    }
  ],
  HispanicFemalePopulation: [
    {
      age: 0,
      deathChance: 0.004774351604282856,
      lifeRemaining: 84.30735778808594
    },
    {
      age: 1,
      deathChance: 0.0003016673435922712,
      lifeRemaining: 83.7112808227539
    },
    {
      age: 2,
      deathChance: 0.00016077011241577566,
      lifeRemaining: 82.73638916015625
    },
    {
      age: 3,
      deathChance: 0.00012644460366573185,
      lifeRemaining: 81.7496109008789
    },
    {
      age: 4,
      deathChance: 0.00009877653792500496,
      lifeRemaining: 80.75988006591797
    },
    {
      age: 5,
      deathChance: 0.00010343184840166941,
      lifeRemaining: 79.76781463623047
    },
    {
      age: 6,
      deathChance: 0.00009871400106931105,
      lifeRemaining: 78.77601623535156
    },
    {
      age: 7,
      deathChance: 0.00009404579759575427,
      lifeRemaining: 77.78374481201172
    },
    { age: 8, deathChance: 0.0000873443714226596, lifeRemaining: 76.791015625 },
    {
      age: 9,
      deathChance: 0.00007895830640336499,
      lifeRemaining: 75.79768371582031
    },
    {
      age: 10,
      deathChance: 0.00007182967965491116,
      lifeRemaining: 74.80363464355469
    },
    {
      age: 11,
      deathChance: 0.00007119473593775183,
      lifeRemaining: 73.80896759033203
    },
    {
      age: 12,
      deathChance: 0.00008340541535289958,
      lifeRemaining: 72.81419372558594
    },
    {
      age: 13,
      deathChance: 0.00011238228034926578,
      lifeRemaining: 71.82022094726562
    },
    {
      age: 14,
      deathChance: 0.00015404936857521534,
      lifeRemaining: 70.82823944091797
    },
    {
      age: 15,
      deathChance: 0.00020264156046323478,
      lifeRemaining: 69.83907318115234
    },
    {
      age: 16,
      deathChance: 0.00024952145759016275,
      lifeRemaining: 68.8531265258789
    },
    {
      age: 17,
      deathChance: 0.00028942423523403704,
      lifeRemaining: 67.87018585205078
    },
    {
      age: 18,
      deathChance: 0.0003167718241456896,
      lifeRemaining: 66.88968658447266
    },
    {
      age: 19,
      deathChance: 0.00033409122261218727,
      lifeRemaining: 65.91072845458984
    },
    {
      age: 20,
      deathChance: 0.0003502081090118736,
      lifeRemaining: 64.93258666992188
    },
    {
      age: 21,
      deathChance: 0.00036845216527581215,
      lifeRemaining: 63.95515823364258
    },
    {
      age: 22,
      deathChance: 0.0003835443640127778,
      lifeRemaining: 62.97854995727539
    },
    {
      age: 23,
      deathChance: 0.00039542283047921956,
      lifeRemaining: 62.002525329589844
    },
    {
      age: 24,
      deathChance: 0.00040529327816329896,
      lifeRemaining: 61.026851654052734
    },
    {
      age: 25,
      deathChance: 0.00041315186535939574,
      lifeRemaining: 60.051395416259766
    },
    {
      age: 26,
      deathChance: 0.000421906792325899,
      lifeRemaining: 59.07600784301758
    },
    {
      age: 27,
      deathChance: 0.00043551248381845653,
      lifeRemaining: 58.100730895996094
    },
    {
      age: 28,
      deathChance: 0.00045641293399967253,
      lifeRemaining: 57.12582778930664
    },
    {
      age: 29,
      deathChance: 0.0004833180282730609,
      lifeRemaining: 56.15168762207031
    },
    {
      age: 30,
      deathChance: 0.0005138636333867908,
      lifeRemaining: 55.17859649658203
    },
    {
      age: 31,
      deathChance: 0.0005445900605991483,
      lifeRemaining: 54.206703186035156
    },
    {
      age: 32,
      deathChance: 0.0005736772436648607,
      lifeRemaining: 53.23596954345703
    },
    {
      age: 33,
      deathChance: 0.0005987329059280455,
      lifeRemaining: 52.26624298095703
    },
    {
      age: 34,
      deathChance: 0.0006211348227225244,
      lifeRemaining: 51.2972526550293
    },
    {
      age: 35,
      deathChance: 0.0006469888612627983,
      lifeRemaining: 50.328826904296875
    },
    {
      age: 36,
      deathChance: 0.0006771957851015031,
      lifeRemaining: 49.361080169677734
    },
    {
      age: 37,
      deathChance: 0.0007072860607877374,
      lifeRemaining: 48.39419174194336
    },
    {
      age: 38,
      deathChance: 0.0007373954285867512,
      lifeRemaining: 47.42809295654297
    },
    {
      age: 39,
      deathChance: 0.0007709571509622037,
      lifeRemaining: 46.46272277832031
    },
    {
      age: 40,
      deathChance: 0.0008062351262196898,
      lifeRemaining: 45.49818420410156
    },
    {
      age: 41,
      deathChance: 0.0008521361742168665,
      lifeRemaining: 44.53449249267578
    },
    {
      age: 42,
      deathChance: 0.0009226741967722774,
      lifeRemaining: 43.572044372558594
    },
    {
      age: 43,
      deathChance: 0.001025411649607122,
      lifeRemaining: 42.6118278503418
    },
    {
      age: 44,
      deathChance: 0.0011544168228283525,
      lifeRemaining: 41.65505599975586
    },
    {
      age: 45,
      deathChance: 0.00129886984359473,
      lifeRemaining: 40.70262145996094
    },
    {
      age: 46,
      deathChance: 0.001448582741431892,
      lifeRemaining: 39.754905700683594
    },
    {
      age: 47,
      deathChance: 0.0016024569049477577,
      lifeRemaining: 38.811851501464844
    },
    {
      age: 48,
      deathChance: 0.0017568407347425818,
      lifeRemaining: 37.87334060668945
    },
    {
      age: 49,
      deathChance: 0.001915167784318328,
      lifeRemaining: 36.939117431640625
    },
    {
      age: 50,
      deathChance: 0.0020885136909782887,
      lifeRemaining: 36.00904083251953
    },
    {
      age: 51,
      deathChance: 0.002278822474181652,
      lifeRemaining: 35.08335876464844
    },
    {
      age: 52,
      deathChance: 0.002477022586390376,
      lifeRemaining: 34.16234588623047
    },
    {
      age: 53,
      deathChance: 0.002680642995983362,
      lifeRemaining: 33.24593734741211
    },
    {
      age: 54,
      deathChance: 0.0028937989845871925,
      lifeRemaining: 32.333953857421875
    },
    {
      age: 55,
      deathChance: 0.003112752689048648,
      lifeRemaining: 31.426342010498047
    },
    {
      age: 56,
      deathChance: 0.0033548418432474136,
      lifeRemaining: 30.522907257080078
    },
    {
      age: 57,
      deathChance: 0.0036477651447057724,
      lifeRemaining: 29.62397003173828
    },
    {
      age: 58,
      deathChance: 0.004010764416307211,
      lifeRemaining: 28.7305965423584
    },
    {
      age: 59,
      deathChance: 0.004436488728970289,
      lifeRemaining: 27.84427833557129
    },
    {
      age: 60,
      deathChance: 0.004919553175568581,
      lifeRemaining: 26.96613121032715
    },
    {
      age: 61,
      deathChance: 0.005425085313618183,
      lifeRemaining: 26.09697723388672
    },
    {
      age: 62,
      deathChance: 0.005917755421251059,
      lifeRemaining: 25.236600875854492
    },
    {
      age: 63,
      deathChance: 0.0063679274171590805,
      lifeRemaining: 24.38385772705078
    },
    {
      age: 64,
      deathChance: 0.0067945257760584354,
      lifeRemaining: 23.536924362182617
    },
    {
      age: 65,
      deathChance: 0.0072484686970710754,
      lifeRemaining: 22.69451904296875
    },
    {
      age: 66,
      deathChance: 0.007776031270623207,
      lifeRemaining: 21.856569290161133
    },
    {
      age: 67,
      deathChance: 0.008379989303648472,
      lifeRemaining: 21.023941040039062
    },
    {
      age: 68,
      deathChance: 0.009084904566407204,
      lifeRemaining: 20.197385787963867
    },
    {
      age: 69,
      deathChance: 0.009898317977786064,
      lifeRemaining: 19.377975463867188
    },
    {
      age: 70,
      deathChance: 0.010814709588885307,
      lifeRemaining: 18.566701889038086
    },
    {
      age: 71,
      deathChance: 0.011844374239444733,
      lifeRemaining: 17.764223098754883
    },
    {
      age: 72,
      deathChance: 0.013022235594689846,
      lifeRemaining: 16.971158981323242
    },
    {
      age: 73,
      deathChance: 0.01437548827379942,
      lifeRemaining: 16.188480377197266
    },
    {
      age: 74,
      deathChance: 0.015930356457829475,
      lifeRemaining: 15.417299270629883
    },
    {
      age: 75,
      deathChance: 0.017680661752820015,
      lifeRemaining: 14.658784866333008
    },
    {
      age: 76,
      deathChance: 0.019720500335097313,
      lifeRemaining: 13.913628578186035
    },
    {
      age: 77,
      deathChance: 0.022071512416005135,
      lifeRemaining: 13.183473587036133
    },
    {
      age: 78,
      deathChance: 0.02483886107802391,
      lifeRemaining: 12.469735145568848
    },
    {
      age: 79,
      deathChance: 0.027773365378379822,
      lifeRemaining: 11.774622917175293
    },
    {
      age: 80,
      deathChance: 0.031224267557263374,
      lifeRemaining: 11.096701622009277
    },
    {
      age: 81,
      deathChance: 0.03487687557935715,
      lifeRemaining: 10.438241004943848
    },
    {
      age: 82,
      deathChance: 0.03928826376795769,
      lifeRemaining: 9.797381401062012
    },
    {
      age: 83,
      deathChance: 0.0449218787252903,
      lifeRemaining: 9.177597045898438
    },
    {
      age: 84,
      deathChance: 0.050596024841070175,
      lifeRemaining: 8.585744857788086
    },
    {
      age: 85,
      deathChance: 0.05653085559606552,
      lifeRemaining: 8.016654014587402
    },
    {
      age: 86,
      deathChance: 0.06290226429700851,
      lifeRemaining: 7.467037677764893
    },
    {
      age: 87,
      deathChance: 0.0716516450047493,
      lifeRemaining: 6.934696674346924
    },
    {
      age: 88,
      deathChance: 0.08143626153469086,
      lifeRemaining: 6.431338787078857
    },
    {
      age: 89,
      deathChance: 0.09232749044895172,
      lifeRemaining: 5.957188129425049
    },
    {
      age: 90,
      deathChance: 0.10438767820596695,
      lifeRemaining: 5.512287139892578
    },
    {
      age: 91,
      deathChance: 0.11766580492258072,
      lifeRemaining: 5.096492767333984
    },
    {
      age: 92,
      deathChance: 0.13219298422336578,
      lifeRemaining: 4.709468364715576
    },
    {
      age: 93,
      deathChance: 0.14797763526439667,
      lifeRemaining: 4.350697040557861
    },
    {
      age: 94,
      deathChance: 0.16500110924243927,
      lifeRemaining: 4.019478797912598
    },
    {
      age: 95,
      deathChance: 0.18321382999420166,
      lifeRemaining: 3.7149498462677
    },
    {
      age: 96,
      deathChance: 0.20253263413906097,
      lifeRemaining: 3.4360971450805664
    },
    {
      age: 97,
      deathChance: 0.22283972799777985,
      lifeRemaining: 3.181777238845825
    },
    {
      age: 98,
      deathChance: 0.2439837008714676,
      lifeRemaining: 2.9507389068603516
    },
    {
      age: 99,
      deathChance: 0.26578277349472046,
      lifeRemaining: 2.741647958755493
    }
  ],
  "non-HispanicWhitePopulation": [
    {
      age: 0,
      deathChance: 0.00467101251706481,
      lifeRemaining: 78.51963806152344
    },
    {
      age: 1,
      deathChance: 0.00034370957291685045,
      lifeRemaining: 77.88754272460938
    },
    {
      age: 2,
      deathChance: 0.00023875704209785908,
      lifeRemaining: 76.91415405273438
    },
    {
      age: 3,
      deathChance: 0.00017273722914978862,
      lifeRemaining: 75.93240356445312
    },
    {
      age: 4,
      deathChance: 0.00013694124936591834,
      lifeRemaining: 74.9454345703125
    },
    {
      age: 5,
      deathChance: 0.00012904508912470192,
      lifeRemaining: 73.95562744140625
    },
    {
      age: 6,
      deathChance: 0.00011356104369042441,
      lifeRemaining: 72.9651107788086
    },
    {
      age: 7,
      deathChance: 0.0001019339615595527,
      lifeRemaining: 71.97334289550781
    },
    {
      age: 8,
      deathChance: 0.00009302723628934473,
      lifeRemaining: 70.98062133789062
    },
    {
      age: 9,
      deathChance: 0.00008773283479968086,
      lifeRemaining: 69.9871826171875
    },
    {
      age: 10,
      deathChance: 0.00008898998203221709,
      lifeRemaining: 68.99327850341797
    },
    {
      age: 11,
      deathChance: 0.00010140360245713964,
      lifeRemaining: 67.99937438964844
    },
    {
      age: 12,
      deathChance: 0.00013017702440265566,
      lifeRemaining: 67.00621795654297
    },
    {
      age: 13,
      deathChance: 0.0001782575127435848,
      lifeRemaining: 66.01487731933594
    },
    {
      age: 14,
      deathChance: 0.00024219200713559985,
      lifeRemaining: 65.02655792236328
    },
    {
      age: 15,
      deathChance: 0.0003124915820080787,
      lifeRemaining: 64.04219055175781
    },
    {
      age: 16,
      deathChance: 0.0003866810875479132,
      lifeRemaining: 63.06205368041992
    },
    {
      age: 17,
      deathChance: 0.0004704972088802606,
      lifeRemaining: 62.08625411987305
    },
    {
      age: 18,
      deathChance: 0.0005637758877128363,
      lifeRemaining: 61.1152458190918
    },
    {
      age: 19,
      deathChance: 0.0006629413110204041,
      lifeRemaining: 60.14944076538086
    },
    {
      age: 20,
      deathChance: 0.0007660074043087661,
      lifeRemaining: 59.18900680541992
    },
    {
      age: 21,
      deathChance: 0.0008670052047818899,
      lifeRemaining: 58.23400115966797
    },
    {
      age: 22,
      deathChance: 0.000958590186201036,
      lifeRemaining: 57.28409957885742
    },
    {
      age: 23,
      deathChance: 0.0010356107959523797,
      lifeRemaining: 56.33858108520508
    },
    {
      age: 24,
      deathChance: 0.0011006395798176527,
      lifeRemaining: 55.39646530151367
    },
    {
      age: 25,
      deathChance: 0.001160403829999268,
      lifeRemaining: 54.45695877075195
    },
    {
      age: 26,
      deathChance: 0.0012197606265544891,
      lifeRemaining: 53.51963806152344
    },
    {
      age: 27,
      deathChance: 0.0012786976294592023,
      lifeRemaining: 52.584388732910156
    },
    {
      age: 28,
      deathChance: 0.0013404880883172154,
      lifeRemaining: 51.65108108520508
    },
    {
      age: 29,
      deathChance: 0.0014055052306503057,
      lifeRemaining: 50.71973419189453
    },
    {
      age: 30,
      deathChance: 0.0014741792110726237,
      lifeRemaining: 49.7904167175293
    },
    {
      age: 31,
      deathChance: 0.0015420865966007113,
      lifeRemaining: 48.863189697265625
    },
    {
      age: 32,
      deathChance: 0.0016042127972468734,
      lifeRemaining: 47.93788528442383
    },
    {
      age: 33,
      deathChance: 0.0016565859550610185,
      lifeRemaining: 47.01410675048828
    },
    {
      age: 34,
      deathChance: 0.001702281180769205,
      lifeRemaining: 46.09128952026367
    },
    {
      age: 35,
      deathChance: 0.0017536842497065663,
      lifeRemaining: 45.169029235839844
    },
    {
      age: 36,
      deathChance: 0.0018124358030036092,
      lifeRemaining: 44.247501373291016
    },
    {
      age: 37,
      deathChance: 0.0018700264627113938,
      lifeRemaining: 43.32693862915039
    },
    {
      age: 38,
      deathChance: 0.0019274192163720727,
      lifeRemaining: 42.40717315673828
    },
    {
      age: 39,
      deathChance: 0.001992066390812397,
      lifeRemaining: 41.488101959228516
    },
    {
      age: 40,
      deathChance: 0.002075737342238426,
      lifeRemaining: 40.569915771484375
    },
    {
      age: 41,
      deathChance: 0.0021849162876605988,
      lifeRemaining: 39.653263092041016
    },
    {
      age: 42,
      deathChance: 0.0023146835155785084,
      lifeRemaining: 38.73899841308594
    },
    {
      age: 43,
      deathChance: 0.0024584059137851,
      lifeRemaining: 37.82771682739258
    },
    {
      age: 44,
      deathChance: 0.0026133444625884295,
      lifeRemaining: 36.91971206665039
    },
    {
      age: 45,
      deathChance: 0.002779540605843067,
      lifeRemaining: 36.01513671875
    },
    {
      age: 46,
      deathChance: 0.0029689730145037174,
      lifeRemaining: 35.11412811279297
    },
    {
      age: 47,
      deathChance: 0.003193717682734132,
      lifeRemaining: 34.217201232910156
    },
    {
      age: 48,
      deathChance: 0.0034668073058128357,
      lifeRemaining: 33.32522964477539
    },
    {
      age: 49,
      deathChance: 0.00378822791390121,
      lifeRemaining: 32.439422607421875
    },
    {
      age: 50,
      deathChance: 0.0041290707886219025,
      lifeRemaining: 31.56087875366211
    },
    {
      age: 51,
      deathChance: 0.004492057021707296,
      lifeRemaining: 30.68966293334961
    },
    {
      age: 52,
      deathChance: 0.004907687660306692,
      lifeRemaining: 29.825889587402344
    },
    {
      age: 53,
      deathChance: 0.005372818559408188,
      lifeRemaining: 28.970521926879883
    },
    {
      age: 54,
      deathChance: 0.0058643450029194355,
      lifeRemaining: 28.124313354492188
    },
    {
      age: 55,
      deathChance: 0.006362960208207369,
      lifeRemaining: 27.287267684936523
    },
    {
      age: 56,
      deathChance: 0.006859085522592068,
      lifeRemaining: 26.45880699157715
    },
    {
      age: 57,
      deathChance: 0.007360674906522036,
      lifeRemaining: 25.63808822631836
    },
    {
      age: 58,
      deathChance: 0.007880663499236107,
      lifeRemaining: 24.824491500854492
    },
    {
      age: 59,
      deathChance: 0.008433817885816097,
      lifeRemaining: 24.01770782470703
    },
    {
      age: 60,
      deathChance: 0.00903713796287775,
      lifeRemaining: 23.217741012573242
    },
    {
      age: 61,
      deathChance: 0.009681745432317257,
      lifeRemaining: 22.424917221069336
    },
    {
      age: 62,
      deathChance: 0.010351975448429585,
      lifeRemaining: 21.63926124572754
    },
    {
      age: 63,
      deathChance: 0.011038616299629211,
      lifeRemaining: 20.860383987426758
    },
    {
      age: 64,
      deathChance: 0.011757194995880127,
      lifeRemaining: 20.0876407623291
    },
    {
      age: 65,
      deathChance: 0.012516970746219158,
      lifeRemaining: 19.3206787109375
    },
    {
      age: 66,
      deathChance: 0.013406178914010525,
      lifeRemaining: 18.559242248535156
    },
    {
      age: 67,
      deathChance: 0.014421829953789711,
      lifeRemaining: 17.804636001586914
    },
    {
      age: 68,
      deathChance: 0.0156271792948246,
      lifeRemaining: 17.05785369873047
    },
    {
      age: 69,
      deathChance: 0.01705533266067505,
      lifeRemaining: 16.32071304321289
    },
    {
      age: 70,
      deathChance: 0.018465083092451096,
      lifeRemaining: 15.595221519470215
    },
    {
      age: 71,
      deathChance: 0.020449979230761528,
      lifeRemaining: 14.879199028015137
    },
    {
      age: 72,
      deathChance: 0.022266855463385582,
      lifeRemaining: 14.179393768310547
    },
    {
      age: 73,
      deathChance: 0.02438085526227951,
      lifeRemaining: 13.490927696228027
    },
    {
      age: 74,
      deathChance: 0.026554904878139496,
      lifeRemaining: 12.815571784973145
    },
    {
      age: 75,
      deathChance: 0.029340019449591637,
      lifeRemaining: 12.151532173156738
    },
    {
      age: 76,
      deathChance: 0.032400328665971756,
      lifeRemaining: 11.503722190856934
    },
    {
      age: 77,
      deathChance: 0.03592899441719055,
      lifeRemaining: 10.872183799743652
    },
    {
      age: 78,
      deathChance: 0.039800938218832016,
      lifeRemaining: 10.258735656738281
    },
    {
      age: 79,
      deathChance: 0.043997254222631454,
      lifeRemaining: 9.66324234008789
    },
    {
      age: 80,
      deathChance: 0.0488693043589592,
      lifeRemaining: 9.084953308105469
    },
    {
      age: 81,
      deathChance: 0.054018691182136536,
      lifeRemaining: 8.526050567626953
    },
    {
      age: 82,
      deathChance: 0.06014322116971016,
      lifeRemaining: 7.984364986419678
    },
    {
      age: 83,
      deathChance: 0.0676431804895401,
      lifeRemaining: 7.463303089141846
    },
    {
      age: 84,
      deathChance: 0.07529443502426147,
      lifeRemaining: 6.968496322631836
    },
    {
      age: 85,
      deathChance: 0.08353018760681152,
      lifeRemaining: 6.4951958656311035
    },
    {
      age: 86,
      deathChance: 0.09216037392616272,
      lifeRemaining: 6.0416178703308105
    },
    {
      age: 87,
      deathChance: 0.1035529151558876,
      lifeRemaining: 5.60418176651001
    },
    {
      age: 88,
      deathChance: 0.1160692423582077,
      lifeRemaining: 5.193790435791016
    },
    {
      age: 89,
      deathChance: 0.1297498345375061,
      lifeRemaining: 4.81013298034668
    },
    {
      age: 90,
      deathChance: 0.14461936056613922,
      lifeRemaining: 4.452752113342285
    },
    {
      age: 91,
      deathChance: 0.16068299114704132,
      lifeRemaining: 4.121044158935547
    },
    {
      age: 92,
      deathChance: 0.17792275547981262,
      lifeRemaining: 3.814274787902832
    },
    {
      age: 93,
      deathChance: 0.1962946355342865,
      lifeRemaining: 3.531585693359375
    },
    {
      age: 94,
      deathChance: 0.21572622656822205,
      lifeRemaining: 3.2720112800598145
    },
    {
      age: 95,
      deathChance: 0.23611578345298767,
      lifeRemaining: 3.0344948768615723
    },
    {
      age: 96,
      deathChance: 0.2573327422142029,
      lifeRemaining: 2.817904233932495
    },
    {
      age: 97,
      deathChance: 0.2792198359966278,
      lifeRemaining: 2.621053695678711
    },
    {
      age: 98,
      deathChance: 0.30159685015678406,
      lifeRemaining: 2.4427192211151123
    },
    {
      age: 99,
      deathChance: 0.32426634430885315,
      lifeRemaining: 2.28165864944458
    }
  ],
  "non-HispanicWhiteMalePopulation": [
    {
      age: 0,
      deathChance: 0.005167508497834206,
      lifeRemaining: 76.0853271484375
    },
    {
      age: 1,
      deathChance: 0.0004360081220511347,
      lifeRemaining: 75.47989654541016
    },
    {
      age: 2,
      deathChance: 0.00031904393108561635,
      lifeRemaining: 74.51260375976562
    },
    {
      age: 3,
      deathChance: 0.00020406859403010458,
      lifeRemaining: 73.53622436523438
    },
    {
      age: 4,
      deathChance: 0.00016519725613761693,
      lifeRemaining: 72.55113220214844
    },
    {
      age: 5,
      deathChance: 0.00015668988635297865,
      lifeRemaining: 71.56304168701172
    },
    {
      age: 6,
      deathChance: 0.0001353574189124629,
      lifeRemaining: 70.57417297363281
    },
    {
      age: 7,
      deathChance: 0.00011955267837038264,
      lifeRemaining: 69.58366394042969
    },
    {
      age: 8,
      deathChance: 0.00010800491872942075,
      lifeRemaining: 68.5919189453125
    },
    {
      age: 9,
      deathChance: 0.00010198998643318191,
      lifeRemaining: 67.59927368164062
    },
    {
      age: 10,
      deathChance: 0.00010535028559388593,
      lifeRemaining: 66.60611724853516
    },
    {
      age: 11,
      deathChance: 0.00012401700951159,
      lifeRemaining: 65.61308288574219
    },
    {
      age: 12,
      deathChance: 0.0001646785094635561,
      lifeRemaining: 64.62116241455078
    },
    {
      age: 13,
      deathChance: 0.00023119457182474434,
      lifeRemaining: 63.631717681884766
    },
    {
      age: 14,
      deathChance: 0.0003193418378941715,
      lifeRemaining: 62.64632034301758
    },
    {
      age: 15,
      deathChance: 0.000415182817960158,
      lifeRemaining: 61.666175842285156
    },
    {
      age: 16,
      deathChance: 0.0005173172685317695,
      lifeRemaining: 60.69158172607422
    },
    {
      age: 17,
      deathChance: 0.0006366691086441278,
      lifeRemaining: 59.72273635864258
    },
    {
      age: 18,
      deathChance: 0.0007740551372990012,
      lifeRemaining: 58.76046371459961
    },
    {
      age: 19,
      deathChance: 0.0009223719825968146,
      lifeRemaining: 57.80559539794922
    },
    {
      age: 20,
      deathChance: 0.0010757941054180264,
      lifeRemaining: 56.85850143432617
    },
    {
      age: 21,
      deathChance: 0.0012236395850777626,
      lifeRemaining: 55.9192008972168
    },
    {
      age: 22,
      deathChance: 0.0013557341881096363,
      lifeRemaining: 54.98709487915039
    },
    {
      age: 23,
      deathChance: 0.0014644102193415165,
      lifeRemaining: 54.061065673828125
    },
    {
      age: 24,
      deathChance: 0.0015537450090050697,
      lifeRemaining: 53.13961410522461
    },
    {
      age: 25,
      deathChance: 0.001635512337088585,
      lifeRemaining: 52.221527099609375
    },
    {
      age: 26,
      deathChance: 0.0017153567168861628,
      lifeRemaining: 51.3062629699707
    },
    {
      age: 27,
      deathChance: 0.0017896489007398486,
      lifeRemaining: 50.39356231689453
    },
    {
      age: 28,
      deathChance: 0.001861414173617959,
      lifeRemaining: 49.48301696777344
    },
    {
      age: 29,
      deathChance: 0.0019322697771713138,
      lifeRemaining: 48.57435989379883
    },
    {
      age: 30,
      deathChance: 0.002004471840336919,
      lifeRemaining: 47.66743850708008
    },
    {
      age: 31,
      deathChance: 0.002074994146823883,
      lifeRemaining: 46.762176513671875
    },
    {
      age: 32,
      deathChance: 0.002138799522072077,
      lifeRemaining: 45.85836410522461
    },
    {
      age: 33,
      deathChance: 0.002192458603531122,
      lifeRemaining: 44.95558547973633
    },
    {
      age: 34,
      deathChance: 0.0022390943486243486,
      lifeRemaining: 44.05326843261719
    },
    {
      age: 35,
      deathChance: 0.002292211167514324,
      lifeRemaining: 43.15100860595703
    },
    {
      age: 36,
      deathChance: 0.0023525282740592957,
      lifeRemaining: 42.249000549316406
    },
    {
      age: 37,
      deathChance: 0.0024096984416246414,
      lifeRemaining: 41.34744644165039
    },
    {
      age: 38,
      deathChance: 0.0024640674237161875,
      lifeRemaining: 40.44611358642578
    },
    {
      age: 39,
      deathChance: 0.0025249365717172623,
      lifeRemaining: 39.5447883605957
    },
    {
      age: 40,
      deathChance: 0.002607466885820031,
      lifeRemaining: 38.64362335205078
    },
    {
      age: 41,
      deathChance: 0.002721223048865795,
      lifeRemaining: 37.74333953857422
    },
    {
      age: 42,
      deathChance: 0.0028620294760912657,
      lifeRemaining: 36.84496307373047
    },
    {
      age: 43,
      deathChance: 0.0030240556225180626,
      lifeRemaining: 35.949283599853516
    },
    {
      age: 44,
      deathChance: 0.0032039249781519175,
      lifeRemaining: 35.05680847167969
    },
    {
      age: 45,
      deathChance: 0.003399623092263937,
      lifeRemaining: 34.16788101196289
    },
    {
      age: 46,
      deathChance: 0.0036249293480068445,
      lifeRemaining: 33.28273010253906
    },
    {
      age: 47,
      deathChance: 0.0038958813529461622,
      lifeRemaining: 32.40199661254883
    },
    {
      age: 48,
      deathChance: 0.004228784237056971,
      lifeRemaining: 31.526771545410156
    },
    {
      age: 49,
      deathChance: 0.0046240040101110935,
      lifeRemaining: 30.658533096313477
    },
    {
      age: 50,
      deathChance: 0.005045779049396515,
      lifeRemaining: 29.798633575439453
    },
    {
      age: 51,
      deathChance: 0.005497461184859276,
      lifeRemaining: 28.947216033935547
    },
    {
      age: 52,
      deathChance: 0.00601732125505805,
      lifeRemaining: 28.104469299316406
    },
    {
      age: 53,
      deathChance: 0.006601321045309305,
      lifeRemaining: 27.271575927734375
    },
    {
      age: 54,
      deathChance: 0.007220312021672726,
      lifeRemaining: 26.449480056762695
    },
    {
      age: 55,
      deathChance: 0.007843833416700363,
      lifeRemaining: 25.638206481933594
    },
    {
      age: 56,
      deathChance: 0.00846506655216217,
      lifeRemaining: 24.836944580078125
    },
    {
      age: 57,
      deathChance: 0.009105163626372814,
      lifeRemaining: 24.04471778869629
    },
    {
      age: 58,
      deathChance: 0.009785041213035583,
      lifeRemaining: 23.261066436767578
    },
    {
      age: 59,
      deathChance: 0.010517257265746593,
      lifeRemaining: 22.485984802246094
    },
    {
      age: 60,
      deathChance: 0.011316667310893536,
      lifeRemaining: 21.719675064086914
    },
    {
      age: 61,
      deathChance: 0.012156859040260315,
      lifeRemaining: 20.96255874633789
    },
    {
      age: 62,
      deathChance: 0.013004963286221027,
      lifeRemaining: 20.214380264282227
    },
    {
      age: 63,
      deathChance: 0.013836630620062351,
      lifeRemaining: 19.474143981933594
    },
    {
      age: 64,
      deathChance: 0.014674313366413116,
      lifeRemaining: 18.740367889404297
    },
    {
      age: 65,
      deathChance: 0.015548772178590298,
      lifeRemaining: 18.012020111083984
    },
    {
      age: 66,
      deathChance: 0.016596945002675056,
      lifeRemaining: 17.288610458374023
    },
    {
      age: 67,
      deathChance: 0.01776987686753273,
      lifeRemaining: 16.571950912475586
    },
    {
      age: 68,
      deathChance: 0.019113238900899887,
      lifeRemaining: 15.862714767456055
    },
    {
      age: 69,
      deathChance: 0.02073528617620468,
      lifeRemaining: 15.162067413330078
    },
    {
      age: 70,
      deathChance: 0.02226247452199459,
      lifeRemaining: 14.472527503967285
    },
    {
      age: 71,
      deathChance: 0.02451625093817711,
      lifeRemaining: 13.790674209594727
    },
    {
      age: 72,
      deathChance: 0.02651132456958294,
      lifeRemaining: 13.124700546264648
    },
    {
      age: 73,
      deathChance: 0.028988711535930634,
      lifeRemaining: 12.468512535095215
    },
    {
      age: 74,
      deathChance: 0.031511515378952026,
      lifeRemaining: 11.825821876525879
    },
    {
      age: 75,
      deathChance: 0.034727178514003754,
      lifeRemaining: 11.194328308105469
    },
    {
      age: 76,
      deathChance: 0.03831534460186958,
      lifeRemaining: 10.579072952270508
    },
    {
      age: 77,
      deathChance: 0.042619019746780396,
      lifeRemaining: 9.980642318725586
    },
    {
      age: 78,
      deathChance: 0.046907879412174225,
      lifeRemaining: 9.402685165405273
    },
    {
      age: 79,
      deathChance: 0.051904257386922836,
      lifeRemaining: 8.84084415435791
    },
    {
      age: 80,
      deathChance: 0.057382646948099136,
      lifeRemaining: 8.297471046447754
    },
    {
      age: 81,
      deathChance: 0.06331320106983185,
      lifeRemaining: 7.772148132324219
    },
    {
      age: 82,
      deathChance: 0.07032822072505951,
      lifeRemaining: 7.263692378997803
    },
    {
      age: 83,
      deathChance: 0.07856014370918274,
      lifeRemaining: 6.775354862213135
    },
    {
      age: 84,
      deathChance: 0.08726657927036285,
      lifeRemaining: 6.310379981994629
    },
    {
      age: 85,
      deathChance: 0.09710633754730225,
      lifeRemaining: 5.865911483764648
    },
    {
      age: 86,
      deathChance: 0.1070573702454567,
      lifeRemaining: 5.443016052246094
    },
    {
      age: 87,
      deathChance: 0.12026246637105942,
      lifeRemaining: 5.035647869110107
    },
    {
      age: 88,
      deathChance: 0.13470430672168732,
      lifeRemaining: 4.655683517456055
    },
    {
      age: 89,
      deathChance: 0.15040302276611328,
      lifeRemaining: 4.302616596221924
    },
    {
      age: 90,
      deathChance: 0.1673557013273239,
      lifeRemaining: 3.9757888317108154
    },
    {
      age: 91,
      deathChance: 0.18553252518177032,
      lifeRemaining: 3.67439866065979
    },
    {
      age: 92,
      deathChance: 0.20487350225448608,
      lifeRemaining: 3.3975141048431396
    },
    {
      age: 93,
      deathChance: 0.22528663277626038,
      lifeRemaining: 3.144091844558716
    },
    {
      age: 94,
      deathChance: 0.24664735794067383,
      lifeRemaining: 2.912993907928467
    },
    {
      age: 95,
      deathChance: 0.26879996061325073,
      lifeRemaining: 2.703007221221924
    },
    {
      age: 96,
      deathChance: 0.291561096906662,
      lifeRemaining: 2.5128653049468994
    },
    {
      age: 97,
      deathChance: 0.31472498178482056,
      lifeRemaining: 2.34126877784729
    },
    {
      age: 98,
      deathChance: 0.3380705714225769,
      lifeRemaining: 2.1869049072265625
    },
    {
      age: 99,
      deathChance: 0.3613697588443756,
      lifeRemaining: 2.048466444015503
    }
  ],
  "non-HispanicWhiteFemalePopulation": [
    {
      age: 0,
      deathChance: 0.004147980362176895,
      lifeRemaining: 80.98114013671875
    },
    {
      age: 1,
      deathChance: 0.0002495804219506681,
      lifeRemaining: 80.31793975830078
    },
    {
      age: 2,
      deathChance: 0.00015952585090417415,
      lifeRemaining: 79.33786010742188
    },
    {
      age: 3,
      deathChance: 0.00013838132144883275,
      lifeRemaining: 78.3504409790039
    },
    {
      age: 4,
      deathChance: 0.00010678546823328361,
      lifeRemaining: 77.36121368408203
    },
    {
      age: 5,
      deathChance: 0.00009932601096807048,
      lifeRemaining: 76.36942291259766
    },
    {
      age: 6,
      deathChance: 0.00008949139009928331,
      lifeRemaining: 75.376953125
    },
    {
      age: 7,
      deathChance: 0.00008216108108172193,
      lifeRemaining: 74.38365173339844
    },
    {
      age: 8,
      deathChance: 0.00007639617979293689,
      lifeRemaining: 73.38972473144531
    },
    {
      age: 9,
      deathChance: 0.00007261390419444069,
      lifeRemaining: 72.39529418945312
    },
    {
      age: 10,
      deathChance: 0.0000726038560969755,
      lifeRemaining: 71.4005126953125
    },
    {
      age: 11,
      deathChance: 0.00007927433034637943,
      lifeRemaining: 70.4056625366211
    },
    {
      age: 12,
      deathChance: 0.00009593532740836963,
      lifeRemaining: 69.41120147705078
    },
    {
      age: 13,
      deathChance: 0.00012439017882570624,
      lifeRemaining: 68.41780853271484
    },
    {
      age: 14,
      deathChance: 0.0001621906558284536,
      lifeRemaining: 67.42626190185547
    },
    {
      age: 15,
      deathChance: 0.0002048707101494074,
      lifeRemaining: 66.43711853027344
    },
    {
      age: 16,
      deathChance: 0.00024909674539230764,
      lifeRemaining: 65.45062255859375
    },
    {
      age: 17,
      deathChance: 0.0002950744528789073,
      lifeRemaining: 64.46680450439453
    },
    {
      age: 18,
      deathChance: 0.00034155105822719634,
      lifeRemaining: 63.485687255859375
    },
    {
      age: 19,
      deathChance: 0.0003885254554916173,
      lifeRemaining: 62.507205963134766
    },
    {
      age: 20,
      deathChance: 0.00043781084241345525,
      lifeRemaining: 61.531307220458984
    },
    {
      age: 21,
      deathChance: 0.0004887140821665525,
      lifeRemaining: 60.558040618896484
    },
    {
      age: 22,
      deathChance: 0.0005376508343033493,
      lifeRemaining: 59.587406158447266
    },
    {
      age: 23,
      deathChance: 0.0005826750420965254,
      lifeRemaining: 58.61919021606445
    },
    {
      age: 24,
      deathChance: 0.0006245250115171075,
      lifeRemaining: 57.653079986572266
    },
    {
      age: 25,
      deathChance: 0.0006640409119427204,
      lifeRemaining: 56.68878936767578
    },
    {
      age: 26,
      deathChance: 0.0007046482060104609,
      lifeRemaining: 55.726131439208984
    },
    {
      age: 27,
      deathChance: 0.0007499214843846858,
      lifeRemaining: 54.765071868896484
    },
    {
      age: 28,
      deathChance: 0.0008031029137782753,
      lifeRemaining: 53.8057975769043
    },
    {
      age: 29,
      deathChance: 0.0008633869583718479,
      lifeRemaining: 52.8486442565918
    },
    {
      age: 30,
      deathChance: 0.0009296939824707806,
      lifeRemaining: 51.89387893676758
    },
    {
      age: 31,
      deathChance: 0.0009963065385818481,
      lifeRemaining: 50.941707611083984
    },
    {
      age: 32,
      deathChance: 0.0010579780209809542,
      lifeRemaining: 49.992008209228516
    },
    {
      age: 33,
      deathChance: 0.0011101368581876159,
      lifeRemaining: 49.0444221496582
    },
    {
      age: 34,
      deathChance: 0.0011558098485693336,
      lifeRemaining: 48.0983772277832
    },
    {
      age: 35,
      deathChance: 0.0012063446920365095,
      lifeRemaining: 47.1534538269043
    },
    {
      age: 36,
      deathChance: 0.0012643055524677038,
      lifeRemaining: 46.209800720214844
    },
    {
      age: 37,
      deathChance: 0.0013229427859187126,
      lifeRemaining: 45.26766586303711
    },
    {
      age: 38,
      deathChance: 0.0013838273007422686,
      lifeRemaining: 44.32696533203125
    },
    {
      age: 39,
      deathChance: 0.0014526019804179668,
      lifeRemaining: 43.3877067565918
    },
    {
      age: 40,
      deathChance: 0.001537748146802187,
      lifeRemaining: 42.45009231567383
    },
    {
      age: 41,
      deathChance: 0.001642701798118651,
      lifeRemaining: 41.51470184326172
    },
    {
      age: 42,
      deathChance: 0.0017617453122511506,
      lifeRemaining: 40.58218765258789
    },
    {
      age: 43,
      deathChance: 0.0018874385859817266,
      lifeRemaining: 39.65292739868164
    },
    {
      age: 44,
      deathChance: 0.002017739461734891,
      lifeRemaining: 38.726966857910156
    },
    {
      age: 45,
      deathChance: 0.0021546799689531326,
      lifeRemaining: 37.804256439208984
    },
    {
      age: 46,
      deathChance: 0.0023086911533027887,
      lifeRemaining: 36.88480758666992
    },
    {
      age: 47,
      deathChance: 0.002488319994881749,
      lifeRemaining: 35.96900177001953
    },
    {
      age: 48,
      deathChance: 0.0027037113904953003,
      lifeRemaining: 35.05747985839844
    },
    {
      age: 49,
      deathChance: 0.0029545726720243692,
      lifeRemaining: 34.15116882324219
    },
    {
      age: 50,
      deathChance: 0.0032187020406126976,
      lifeRemaining: 33.25088882446289
    },
    {
      age: 51,
      deathChance: 0.0034978752955794334,
      lifeRemaining: 32.35664749145508
    },
    {
      age: 52,
      deathChance: 0.003814884927123785,
      lifeRemaining: 31.468469619750977
    },
    {
      age: 53,
      deathChance: 0.004167267121374607,
      lifeRemaining: 30.58706283569336
    },
    {
      age: 54,
      deathChance: 0.004537983797490597,
      lifeRemaining: 29.712966918945312
    },
    {
      age: 55,
      deathChance: 0.004918769467622042,
      lifeRemaining: 28.84613800048828
    },
    {
      age: 56,
      deathChance: 0.005297912750393152,
      lifeRemaining: 27.986257553100586
    },
    {
      age: 57,
      deathChance: 0.005671247839927673,
      lifeRemaining: 27.132652282714844
    },
    {
      age: 58,
      deathChance: 0.0060449386946856976,
      lifeRemaining: 26.28455352783203
    },
    {
      age: 59,
      deathChance: 0.006436226889491081,
      lifeRemaining: 25.441368103027344
    },
    {
      age: 60,
      deathChance: 0.006864197086542845,
      lifeRemaining: 24.602937698364258
    },
    {
      age: 61,
      deathChance: 0.007335819769650698,
      lifeRemaining: 23.769527435302734
    },
    {
      age: 62,
      deathChance: 0.00785083044320345,
      lifeRemaining: 22.94148826599121
    },
    {
      age: 63,
      deathChance: 0.008412882685661316,
      lifeRemaining: 22.119068145751953
    },
    {
      age: 64,
      deathChance: 0.009030860848724842,
      lifeRemaining: 21.302490234375
    },
    {
      age: 65,
      deathChance: 0.009695317596197128,
      lifeRemaining: 20.492067337036133
    },
    {
      age: 66,
      deathChance: 0.010459370911121368,
      lifeRemaining: 19.687795639038086
    },
    {
      age: 67,
      deathChance: 0.011349782347679138,
      lifeRemaining: 18.890609741210938
    },
    {
      age: 68,
      deathChance: 0.012449860572814941,
      lifeRemaining: 18.101734161376953
    },
    {
      age: 69,
      deathChance: 0.013722422532737255,
      lifeRemaining: 17.32363510131836
    },
    {
      age: 70,
      deathChance: 0.015032541006803513,
      lifeRemaining: 16.557708740234375
    },
    {
      age: 71,
      deathChance: 0.016793137416243553,
      lifeRemaining: 15.80278205871582
    },
    {
      age: 72,
      deathChance: 0.018475916236639023,
      lifeRemaining: 15.064152717590332
    },
    {
      age: 73,
      deathChance: 0.020305586978793144,
      lifeRemaining: 14.33830451965332
    },
    {
      age: 74,
      deathChance: 0.022219236940145493,
      lifeRemaining: 13.625123977661133
    },
    {
      age: 75,
      deathChance: 0.024696018546819687,
      lifeRemaining: 12.923380851745605
    },
    {
      age: 76,
      deathChance: 0.027380093932151794,
      lifeRemaining: 12.237957954406738
    },
    {
      age: 77,
      deathChance: 0.030352961272001266,
      lifeRemaining: 11.568391799926758
    },
    {
      age: 78,
      deathChance: 0.0339694507420063,
      lifeRemaining: 10.914867401123047
    },
    {
      age: 79,
      deathChance: 0.03762819990515709,
      lifeRemaining: 10.281094551086426
    },
    {
      age: 80,
      deathChance: 0.04214615002274513,
      lifeRemaining: 9.663529396057129
    },
    {
      age: 81,
      deathChance: 0.046825896948575974,
      lifeRemaining: 9.066729545593262
    },
    {
      age: 82,
      deathChance: 0.0524756945669651,
      lifeRemaining: 8.487582206726074
    },
    {
      age: 83,
      deathChance: 0.05963939055800438,
      lifeRemaining: 7.9299492835998535
    },
    {
      age: 84,
      deathChance: 0.06680086255073547,
      lifeRemaining: 7.40117073059082
    },
    {
      age: 85,
      deathChance: 0.07423796504735947,
      lifeRemaining: 6.895174503326416
    },
    {
      age: 86,
      deathChance: 0.08216549456119537,
      lifeRemaining: 6.408010959625244
    },
    {
      age: 87,
      deathChance: 0.09296280145645142,
      lifeRemaining: 5.936901569366455
    },
    {
      age: 88,
      deathChance: 0.104924276471138,
      lifeRemaining: 5.494133472442627
    },
    {
      age: 89,
      deathChance: 0.11810798197984695,
      lifeRemaining: 5.079565048217773
    },
    {
      age: 90,
      deathChance: 0.13255731761455536,
      lifeRemaining: 4.6928863525390625
    },
    {
      age: 91,
      deathChance: 0.14829649031162262,
      lifeRemaining: 4.333617210388184
    },
    {
      age: 92,
      deathChance: 0.16532599925994873,
      lifeRemaining: 4.001117706298828
    },
    {
      age: 93,
      deathChance: 0.18361836671829224,
      lifeRemaining: 3.6945924758911133
    },
    {
      age: 94,
      deathChance: 0.20311470329761505,
      lifeRemaining: 3.413111925125122
    },
    {
      age: 95,
      deathChance: 0.22372236847877502,
      lifeRemaining: 3.1556224822998047
    },
    {
      age: 96,
      deathChance: 0.24531437456607819,
      lifeRemaining: 2.9209702014923096
    },
    {
      age: 97,
      deathChance: 0.267730712890625,
      lifeRemaining: 2.707918643951416
    },
    {
      age: 98,
      deathChance: 0.29078179597854614,
      lifeRemaining: 2.5151731967926025
    },
    {
      age: 99,
      deathChance: 0.31425416469573975,
      lifeRemaining: 2.341400623321533
    }
  ],
  "non-HispanicBlackPopulation": [
    {
      age: 0,
      deathChance: 0.010888095013797283,
      lifeRemaining: 74.88072204589844
    },
    {
      age: 1,
      deathChance: 0.0006610678974539042,
      lifeRemaining: 74.70354461669922
    },
    {
      age: 2,
      deathChance: 0.00041252945084124804,
      lifeRemaining: 73.75263214111328
    },
    {
      age: 3,
      deathChance: 0.000311911542667076,
      lifeRemaining: 72.7828598022461
    },
    {
      age: 4,
      deathChance: 0.0002656303986441344,
      lifeRemaining: 71.80541229248047
    },
    {
      age: 5,
      deathChance: 0.00023369365953840315,
      lifeRemaining: 70.82435607910156
    },
    {
      age: 6,
      deathChance: 0.000208289799047634,
      lifeRemaining: 69.8407974243164
    },
    {
      age: 7,
      deathChance: 0.00018756280769594014,
      lifeRemaining: 68.85523986816406
    },
    {
      age: 8,
      deathChance: 0.00016769743524491787,
      lifeRemaining: 67.8680648803711
    },
    {
      age: 9,
      deathChance: 0.00015002035070210695,
      lifeRemaining: 66.87936401367188
    },
    {
      age: 10,
      deathChance: 0.00014144083252176642,
      lifeRemaining: 65.88932037353516
    },
    {
      age: 11,
      deathChance: 0.00015386121231131256,
      lifeRemaining: 64.89856719970703
    },
    {
      age: 12,
      deathChance: 0.0002012172481045127,
      lifeRemaining: 63.908485412597656
    },
    {
      age: 13,
      deathChance: 0.00029093524790368974,
      lifeRemaining: 62.92124557495117
    },
    {
      age: 14,
      deathChance: 0.00041252284427173436,
      lifeRemaining: 61.93940734863281
    },
    {
      age: 15,
      deathChance: 0.0005438505904749036,
      lifeRemaining: 60.96476745605469
    },
    {
      age: 16,
      deathChance: 0.0006753415800631046,
      lifeRemaining: 59.99766540527344
    },
    {
      age: 17,
      deathChance: 0.0008137707482092083,
      lifeRemaining: 59.037872314453125
    },
    {
      age: 18,
      deathChance: 0.0009553201380185783,
      lifeRemaining: 58.08554458618164
    },
    {
      age: 19,
      deathChance: 0.001094713225029409,
      lifeRemaining: 57.1406135559082
    },
    {
      age: 20,
      deathChance: 0.0012362228007987142,
      lifeRemaining: 56.20268630981445
    },
    {
      age: 21,
      deathChance: 0.001369102974422276,
      lifeRemaining: 55.271629333496094
    },
    {
      age: 22,
      deathChance: 0.0014735268196091056,
      lifeRemaining: 54.34672164916992
    },
    {
      age: 23,
      deathChance: 0.001540602301247418,
      lifeRemaining: 53.42618179321289
    },
    {
      age: 24,
      deathChance: 0.0015801610425114632,
      lifeRemaining: 52.507843017578125
    },
    {
      age: 25,
      deathChance: 0.0016114022582769394,
      lifeRemaining: 51.590152740478516
    },
    {
      age: 26,
      deathChance: 0.0016460862243548036,
      lifeRemaining: 50.672611236572266
    },
    {
      age: 27,
      deathChance: 0.0016821715980768204,
      lifeRemaining: 49.755340576171875
    },
    {
      age: 28,
      deathChance: 0.0017261166358366609,
      lifeRemaining: 48.83833312988281
    },
    {
      age: 29,
      deathChance: 0.0017808254342526197,
      lifeRemaining: 47.92191696166992
    },
    {
      age: 30,
      deathChance: 0.0018408719915896654,
      lifeRemaining: 47.00651550292969
    },
    {
      age: 31,
      deathChance: 0.0019086565589532256,
      lifeRemaining: 46.09228515625
    },
    {
      age: 32,
      deathChance: 0.0019955821335315704,
      lifeRemaining: 45.17947006225586
    },
    {
      age: 33,
      deathChance: 0.002101282589137554,
      lifeRemaining: 44.26880645751953
    },
    {
      age: 34,
      deathChance: 0.0022175631020218134,
      lifeRemaining: 43.36097717285156
    },
    {
      age: 35,
      deathChance: 0.0023457417264580727,
      lifeRemaining: 42.456233978271484
    },
    {
      age: 36,
      deathChance: 0.0024780360981822014,
      lifeRemaining: 41.55488204956055
    },
    {
      age: 37,
      deathChance: 0.0026020710356533527,
      lifeRemaining: 40.6568717956543
    },
    {
      age: 38,
      deathChance: 0.0027168123051524162,
      lifeRemaining: 39.761634826660156
    },
    {
      age: 39,
      deathChance: 0.0028338267002254725,
      lifeRemaining: 38.86859130859375
    },
    {
      age: 40,
      deathChance: 0.0029727250803261995,
      lifeRemaining: 37.97762680053711
    },
    {
      age: 41,
      deathChance: 0.0031409559305757284,
      lifeRemaining: 37.08937072753906
    },
    {
      age: 42,
      deathChance: 0.0033281748183071613,
      lifeRemaining: 36.20466232299805
    },
    {
      age: 43,
      deathChance: 0.003527351189404726,
      lifeRemaining: 35.32388687133789
    },
    {
      age: 44,
      deathChance: 0.0037389106582850218,
      lifeRemaining: 34.44715881347656
    },
    {
      age: 45,
      deathChance: 0.00396536011248827,
      lifeRemaining: 33.574562072753906
    },
    {
      age: 46,
      deathChance: 0.004224819131195545,
      lifeRemaining: 32.706233978271484
    },
    {
      age: 47,
      deathChance: 0.004534856881946325,
      lifeRemaining: 31.842880249023438
    },
    {
      age: 48,
      deathChance: 0.004912220407277346,
      lifeRemaining: 30.98566436767578
    },
    {
      age: 49,
      deathChance: 0.0053558009676635265,
      lifeRemaining: 30.13615608215332
    },
    {
      age: 50,
      deathChance: 0.005823338404297829,
      lifeRemaining: 29.29573631286621
    },
    {
      age: 51,
      deathChance: 0.006324907299131155,
      lifeRemaining: 28.464405059814453
    },
    {
      age: 52,
      deathChance: 0.006917211692780256,
      lifeRemaining: 27.642406463623047
    },
    {
      age: 53,
      deathChance: 0.007612159475684166,
      lifeRemaining: 26.83146095275879
    },
    {
      age: 54,
      deathChance: 0.008380540646612644,
      lifeRemaining: 26.03343963623047
    },
    {
      age: 55,
      deathChance: 0.00917451549321413,
      lifeRemaining: 25.249229431152344
    },
    {
      age: 56,
      deathChance: 0.009973707608878613,
      lifeRemaining: 24.478395462036133
    },
    {
      age: 57,
      deathChance: 0.010805312544107437,
      lifeRemaining: 23.719959259033203
    },
    {
      age: 58,
      deathChance: 0.011686990968883038,
      lifeRemaining: 22.97359848022461
    },
    {
      age: 59,
      deathChance: 0.012630855664610863,
      lifeRemaining: 22.239351272583008
    },
    {
      age: 60,
      deathChance: 0.013642550446093082,
      lifeRemaining: 21.517452239990234
    },
    {
      age: 61,
      deathChance: 0.014702584594488144,
      lifeRemaining: 20.808149337768555
    },
    {
      age: 62,
      deathChance: 0.015793656930327415,
      lifeRemaining: 20.11118507385254
    },
    {
      age: 63,
      deathChance: 0.016894910484552383,
      lifeRemaining: 19.425888061523438
    },
    {
      age: 64,
      deathChance: 0.01801140606403351,
      lifeRemaining: 18.75113296508789
    },
    {
      age: 65,
      deathChance: 0.01922803930938244,
      lifeRemaining: 18.085891723632812
    },
    {
      age: 66,
      deathChance: 0.020518753677606583,
      lifeRemaining: 17.430662155151367
    },
    {
      age: 67,
      deathChance: 0.021792719140648842,
      lifeRemaining: 16.78533363342285
    },
    {
      age: 68,
      deathChance: 0.022977571934461594,
      lifeRemaining: 16.148143768310547
    },
    {
      age: 69,
      deathChance: 0.024190299212932587,
      lifeRemaining: 15.516156196594238
    },
    {
      age: 70,
      deathChance: 0.02535327896475792,
      lifeRemaining: 14.888406753540039
    },
    {
      age: 71,
      deathChance: 0.02712290547788143,
      lifeRemaining: 14.262688636779785
    },
    {
      age: 72,
      deathChance: 0.029046939685940742,
      lifeRemaining: 13.646379470825195
    },
    {
      age: 73,
      deathChance: 0.031424764543771744,
      lifeRemaining: 13.039666175842285
    },
    {
      age: 74,
      deathChance: 0.0339185893535614,
      lifeRemaining: 12.44650650024414
    },
    {
      age: 75,
      deathChance: 0.03667430952191353,
      lifeRemaining: 11.865942001342773
    },
    {
      age: 76,
      deathChance: 0.039635345339775085,
      lifeRemaining: 11.298648834228516
    },
    {
      age: 77,
      deathChance: 0.043069351464509964,
      lifeRemaining: 10.7443208694458
    },
    {
      age: 78,
      deathChance: 0.047116417437791824,
      lifeRemaining: 10.205395698547363
    },
    {
      age: 79,
      deathChance: 0.05091416463255882,
      lifeRemaining: 9.685290336608887
    },
    {
      age: 80,
      deathChance: 0.05539698526263237,
      lifeRemaining: 9.17803955078125
    },
    {
      age: 81,
      deathChance: 0.059987522661685944,
      lifeRemaining: 8.686969757080078
    },
    {
      age: 82,
      deathChance: 0.06558910012245178,
      lifeRemaining: 8.209426879882812
    },
    {
      age: 83,
      deathChance: 0.07183100283145905,
      lifeRemaining: 7.750573635101318
    },
    {
      age: 84,
      deathChance: 0.07805392891168594,
      lifeRemaining: 7.311695098876953
    },
    {
      age: 85,
      deathChance: 0.08391296118497849,
      lifeRemaining: 6.8883891105651855
    },
    {
      age: 86,
      deathChance: 0.09209199994802475,
      lifeRemaining: 6.473560810089111
    },
    {
      age: 87,
      deathChance: 0.10099188983440399,
      lifeRemaining: 6.0794782638549805
    },
    {
      age: 88,
      deathChance: 0.11058633774518967,
      lifeRemaining: 5.7062602043151855
    },
    {
      age: 89,
      deathChance: 0.12089747190475464,
      lifeRemaining: 5.3535871505737305
    },
    {
      age: 90,
      deathChance: 0.13194191455841064,
      lifeRemaining: 5.021070957183838
    },
    {
      age: 91,
      deathChance: 0.14372959733009338,
      lifeRemaining: 4.708258152008057
    },
    {
      age: 92,
      deathChance: 0.15626263618469238,
      lifeRemaining: 4.414637088775635
    },
    {
      age: 93,
      deathChance: 0.16953423619270325,
      lifeRemaining: 4.139639377593994
    },
    {
      age: 94,
      deathChance: 0.18352770805358887,
      lifeRemaining: 3.882648229598999
    },
    {
      age: 95,
      deathChance: 0.19821567833423615,
      lifeRemaining: 3.6430041790008545
    },
    {
      age: 96,
      deathChance: 0.21355953812599182,
      lifeRemaining: 3.4200119972229004
    },
    {
      age: 97,
      deathChance: 0.22950926423072815,
      lifeRemaining: 3.212947368621826
    },
    {
      age: 98,
      deathChance: 0.24600344896316528,
      lifeRemaining: 3.021064281463623
    },
    {
      age: 99,
      deathChance: 0.2629699409008026,
      lifeRemaining: 2.843601703643799
    }
  ],
  "non-HispanicBlackMalePopulation": [
    {
      age: 0,
      deathChance: 0.011878004297614098,
      lifeRemaining: 71.51019287109375
    },
    { age: 1, deathChance: 0.000623991887550801, lifeRemaining: 71.3681640625 },
    {
      age: 2,
      deathChance: 0.0003947498626075685,
      lifeRemaining: 70.41240692138672
    },
    {
      age: 3,
      deathChance: 0.00035375182051211596,
      lifeRemaining: 69.44001770019531
    },
    {
      age: 4,
      deathChance: 0.00023875526676420122,
      lifeRemaining: 68.46442413330078
    },
    {
      age: 5,
      deathChance: 0.00023224687902256846,
      lifeRemaining: 67.48065185546875
    },
    {
      age: 6,
      deathChance: 0.00021431157074403018,
      lifeRemaining: 66.4962158203125
    },
    {
      age: 7,
      deathChance: 0.00019591377349570394,
      lifeRemaining: 65.51036071777344
    },
    {
      age: 8,
      deathChance: 0.00016909927944652736,
      lifeRemaining: 64.52310180664062
    },
    {
      age: 9,
      deathChance: 0.00013684490113519132,
      lifeRemaining: 63.53392791748047
    },
    {
      age: 10,
      deathChance: 0.0001140384265454486,
      lifeRemaining: 62.54256057739258
    },
    {
      age: 11,
      deathChance: 0.0001263284939341247,
      lifeRemaining: 61.54963684082031
    },
    {
      age: 12,
      deathChance: 0.00020388425036799163,
      lifeRemaining: 60.55735397338867
    },
    {
      age: 13,
      deathChance: 0.0003630187129601836,
      lifeRemaining: 59.569602966308594
    },
    {
      age: 14,
      deathChance: 0.0005815023323521018,
      lifeRemaining: 58.59105682373047
    },
    {
      age: 15,
      deathChance: 0.0008169193752110004,
      lifeRemaining: 57.624855041503906
    },
    {
      age: 16,
      deathChance: 0.00104522577021271,
      lifeRemaining: 56.67156219482422
    },
    {
      age: 17,
      deathChance: 0.0012728557921946049,
      lifeRemaining: 55.7303352355957
    },
    {
      age: 18,
      deathChance: 0.0014895062195137143,
      lifeRemaining: 54.800724029541016
    },
    {
      age: 19,
      deathChance: 0.0016907433746382594,
      lifeRemaining: 53.8817253112793
    },
    {
      age: 20,
      deathChance: 0.0018909043865278363,
      lifeRemaining: 52.97213363647461
    },
    {
      age: 21,
      deathChance: 0.0020782584324479103,
      lifeRemaining: 52.0715446472168
    },
    {
      age: 22,
      deathChance: 0.002221359871327877,
      lifeRemaining: 51.17894744873047
    },
    {
      age: 23,
      deathChance: 0.002308592665940523,
      lifeRemaining: 50.29177474975586
    },
    {
      age: 24,
      deathChance: 0.002354442374780774,
      lifeRemaining: 49.406986236572266
    },
    {
      age: 25,
      deathChance: 0.002386324107646942,
      lifeRemaining: 48.522403717041016
    },
    {
      age: 26,
      deathChance: 0.002421256387606263,
      lifeRemaining: 47.63727951049805
    },
    {
      age: 27,
      deathChance: 0.0024561225436627865,
      lifeRemaining: 46.751686096191406
    },
    {
      age: 28,
      deathChance: 0.002499320777133107,
      lifeRemaining: 45.865562438964844
    },
    {
      age: 29,
      deathChance: 0.002554325619712472,
      lifeRemaining: 44.97923278808594
    },
    {
      age: 30,
      deathChance: 0.0026105225551873446,
      lifeRemaining: 44.093135833740234
    },
    {
      age: 31,
      deathChance: 0.0026739027816802263,
      lifeRemaining: 43.207237243652344
    },
    {
      age: 32,
      deathChance: 0.002768151694908738,
      lifeRemaining: 42.321739196777344
    },
    {
      age: 33,
      deathChance: 0.0028987061232328415,
      lifeRemaining: 41.437828063964844
    },
    {
      age: 34,
      deathChance: 0.0030512982048094273,
      lifeRemaining: 40.55683898925781
    },
    {
      age: 35,
      deathChance: 0.003223934443667531,
      lifeRemaining: 39.67943572998047
    },
    {
      age: 36,
      deathChance: 0.0033962270244956017,
      lifeRemaining: 38.806156158447266
    },
    {
      age: 37,
      deathChance: 0.003542637685313821,
      lifeRemaining: 37.93669509887695
    },
    {
      age: 38,
      deathChance: 0.003654483240097761,
      lifeRemaining: 37.069793701171875
    },
    {
      age: 39,
      deathChance: 0.003750744042918086,
      lifeRemaining: 36.20392608642578
    },
    {
      age: 40,
      deathChance: 0.003862994024530053,
      lifeRemaining: 35.338348388671875
    },
    {
      age: 41,
      deathChance: 0.004015777260065079,
      lifeRemaining: 34.47344970703125
    },
    {
      age: 42,
      deathChance: 0.004207558464258909,
      lifeRemaining: 33.61042785644531
    },
    {
      age: 43,
      deathChance: 0.004440375603735447,
      lifeRemaining: 32.75033187866211
    },
    {
      age: 44,
      deathChance: 0.004707519430667162,
      lifeRemaining: 31.894174575805664
    },
    {
      age: 45,
      deathChance: 0.00499940849840641,
      lifeRemaining: 31.042661666870117
    },
    {
      age: 46,
      deathChance: 0.005325574893504381,
      lifeRemaining: 30.196121215820312
    },
    {
      age: 47,
      deathChance: 0.0057046860456466675,
      lifeRemaining: 29.35511589050293
    },
    {
      age: 48,
      deathChance: 0.006152927875518799,
      lifeRemaining: 28.52066993713379
    },
    {
      age: 49,
      deathChance: 0.0066740927286446095,
      lifeRemaining: 27.69414710998535
    },
    {
      age: 50,
      deathChance: 0.0072249360382556915,
      lifeRemaining: 26.87686538696289
    },
    {
      age: 51,
      deathChance: 0.007825520820915699,
      lifeRemaining: 26.068822860717773
    },
    {
      age: 52,
      deathChance: 0.008547119796276093,
      lifeRemaining: 25.270488739013672
    },
    {
      age: 53,
      deathChance: 0.009408719837665558,
      lifeRemaining: 24.484031677246094
    },
    {
      age: 54,
      deathChance: 0.010374143719673157,
      lifeRemaining: 23.711833953857422
    },
    {
      age: 55,
      deathChance: 0.011370775289833546,
      lifeRemaining: 22.955162048339844
    },
    {
      age: 56,
      deathChance: 0.012380288913846016,
      lifeRemaining: 22.21343231201172
    },
    {
      age: 57,
      deathChance: 0.013461130671203136,
      lifeRemaining: 21.485620498657227
    },
    {
      age: 58,
      deathChance: 0.014649268239736557,
      lifeRemaining: 20.77196502685547
    },
    {
      age: 59,
      deathChance: 0.01595587283372879,
      lifeRemaining: 20.073348999023438
    },
    {
      age: 60,
      deathChance: 0.01737918332219124,
      lifeRemaining: 19.390722274780273
    },
    {
      age: 61,
      deathChance: 0.01887105591595173,
      lifeRemaining: 18.724834442138672
    },
    {
      age: 62,
      deathChance: 0.020392319187521935,
      lifeRemaining: 18.07537078857422
    },
    {
      age: 63,
      deathChance: 0.021893655881285667,
      lifeRemaining: 17.441234588623047
    },
    {
      age: 64,
      deathChance: 0.023383429273962975,
      lifeRemaining: 16.82044219970703
    },
    {
      age: 65,
      deathChance: 0.02500392124056816,
      lifeRemaining: 16.211206436157227
    },
    {
      age: 66,
      deathChance: 0.026733357459306717,
      lifeRemaining: 15.61412525177002
    },
    {
      age: 67,
      deathChance: 0.028404153883457184,
      lifeRemaining: 15.029274940490723
    },
    {
      age: 68,
      deathChance: 0.02990643121302128,
      lifeRemaining: 14.454031944274902
    },
    {
      age: 69,
      deathChance: 0.03134675696492195,
      lifeRemaining: 13.8842134475708
    },
    {
      age: 70,
      deathChance: 0.03266081586480141,
      lifeRemaining: 13.317341804504395
    },
    {
      age: 71,
      deathChance: 0.03493887186050415,
      lifeRemaining: 12.750102043151855
    },
    {
      age: 72,
      deathChance: 0.03690125420689583,
      lifeRemaining: 12.19360065460205
    },
    {
      age: 73,
      deathChance: 0.03984075039625168,
      lifeRemaining: 11.641642570495605
    },
    {
      age: 74,
      deathChance: 0.04269469156861305,
      lifeRemaining: 11.10395336151123
    },
    {
      age: 75,
      deathChance: 0.04575473070144653,
      lifeRemaining: 10.576876640319824
    },
    {
      age: 76,
      deathChance: 0.04964200407266617,
      lifeRemaining: 10.06004810333252
    },
    {
      age: 77,
      deathChance: 0.05305112525820732,
      lifeRemaining: 9.559418678283691
    },
    {
      age: 78,
      deathChance: 0.0581309013068676,
      lifeRemaining: 9.066956520080566
    },
    {
      age: 79,
      deathChance: 0.06297008693218231,
      lifeRemaining: 8.595697402954102
    },
    {
      age: 80,
      deathChance: 0.06759992241859436,
      lifeRemaining: 8.139742851257324
    },
    {
      age: 81,
      deathChance: 0.07307029515504837,
      lifeRemaining: 7.693631172180176
    },
    {
      age: 82,
      deathChance: 0.08066438883543015,
      lifeRemaining: 7.260708332061768
    },
    {
      age: 83,
      deathChance: 0.08860494941473007,
      lifeRemaining: 6.853907108306885
    },
    {
      age: 84,
      deathChance: 0.09506503492593765,
      lifeRemaining: 6.471628189086914
    },
    {
      age: 85,
      deathChance: 0.10200273245573044,
      lifeRemaining: 6.098958492279053
    },
    {
      age: 86,
      deathChance: 0.11129482835531235,
      lifeRemaining: 5.734938621520996
    },
    {
      age: 87,
      deathChance: 0.12125163525342941,
      lifeRemaining: 5.390523910522461
    },
    {
      age: 88,
      deathChance: 0.13188765943050385,
      lifeRemaining: 5.065329551696777
    },
    {
      age: 89,
      deathChance: 0.1432117074728012,
      lifeRemaining: 4.758914947509766
    },
    {
      age: 90,
      deathChance: 0.15522581338882446,
      lifeRemaining: 4.470790863037109
    },
    {
      age: 91,
      deathChance: 0.16792447865009308,
      lifeRemaining: 4.200416564941406
    },
    {
      age: 92,
      deathChance: 0.18129374086856842,
      lifeRemaining: 3.9472124576568604
    },
    {
      age: 93,
      deathChance: 0.1953105628490448,
      lifeRemaining: 3.7105605602264404
    },
    {
      age: 94,
      deathChance: 0.20994237065315247,
      lifeRemaining: 3.4898133277893066
    },
    {
      age: 95,
      deathChance: 0.22514674067497253,
      lifeRemaining: 3.2842977046966553
    },
    {
      age: 96,
      deathChance: 0.24087148904800415,
      lifeRemaining: 3.093322515487671
    },
    {
      age: 97,
      deathChance: 0.2570551037788391,
      lifeRemaining: 2.9161837100982666
    },
    {
      age: 98,
      deathChance: 0.27362731099128723,
      lifeRemaining: 2.7521708011627197
    },
    {
      age: 99,
      deathChance: 0.2905101478099823,
      lifeRemaining: 2.600572109222412
    }
  ],
  "non-HispanicBlackFemalePopulation": [
    { age: 0, deathChance: 0.009865225292742252, lifeRemaining: 78.0791015625 },
    {
      age: 1,
      deathChance: 0.0006218438502401114,
      lifeRemaining: 77.85575866699219
    },
    {
      age: 2,
      deathChance: 0.0003821505233645439,
      lifeRemaining: 76.90389251708984
    },
    {
      age: 3,
      deathChance: 0.00022801040904596448,
      lifeRemaining: 75.93309783935547
    },
    {
      age: 4,
      deathChance: 0.00026307537336833775,
      lifeRemaining: 74.95030212402344
    },
    {
      age: 5,
      deathChance: 0.00020875457266811281,
      lifeRemaining: 73.96989440917969
    },
    {
      age: 6,
      deathChance: 0.00018033571541309357,
      lifeRemaining: 72.98523712158203
    },
    {
      age: 7,
      deathChance: 0.00015915567928459495,
      lifeRemaining: 71.9983139038086
    },
    {
      age: 8,
      deathChance: 0.00014505094441119581,
      lifeRemaining: 71.00968933105469
    },
    {
      age: 9,
      deathChance: 0.0001380248722853139,
      lifeRemaining: 70.0199203491211
    },
    {
      age: 10,
      deathChance: 0.00013825990026816726,
      lifeRemaining: 69.0295181274414
    },
    {
      age: 11,
      deathChance: 0.00014606010518036783,
      lifeRemaining: 68.03899383544922
    },
    {
      age: 12,
      deathChance: 0.00016170386516023427,
      lifeRemaining: 67.04885864257812
    },
    {
      age: 13,
      deathChance: 0.0001851980050560087,
      lifeRemaining: 66.05962371826172
    },
    {
      age: 14,
      deathChance: 0.00021611095871776342,
      lifeRemaining: 65.07176971435547
    },
    {
      age: 15,
      deathChance: 0.00025041430490091443,
      lifeRemaining: 64.08572387695312
    },
    {
      age: 16,
      deathChance: 0.00029053588514216244,
      lifeRemaining: 63.10165786743164
    },
    {
      age: 17,
      deathChance: 0.0003423529560677707,
      lifeRemaining: 62.11984634399414
    },
    {
      age: 18,
      deathChance: 0.0004072552837897092,
      lifeRemaining: 61.14094924926758
    },
    {
      age: 19,
      deathChance: 0.0004804047930520028,
      lifeRemaining: 60.16566467285156
    },
    {
      age: 20,
      deathChance: 0.0005580700235441327,
      lifeRemaining: 59.1943359375
    },
    {
      age: 21,
      deathChance: 0.0006326488801278174,
      lifeRemaining: 58.22711181640625
    },
    {
      age: 22,
      deathChance: 0.0006969638634473085,
      lifeRemaining: 57.26365280151367
    },
    {
      age: 23,
      deathChance: 0.0007460040505975485,
      lifeRemaining: 56.303245544433594
    },
    {
      age: 24,
      deathChance: 0.0007839981699362397,
      lifeRemaining: 55.344905853271484
    },
    {
      age: 25,
      deathChance: 0.0008196918061003089,
      lifeRemaining: 54.387935638427734
    },
    {
      age: 26,
      deathChance: 0.0008589649805799127,
      lifeRemaining: 53.43214416503906
    },
    {
      age: 27,
      deathChance: 0.0009021862642839551,
      lifeRemaining: 52.4776496887207
    },
    {
      age: 28,
      deathChance: 0.0009543707710690796,
      lifeRemaining: 51.52458953857422
    },
    {
      age: 29,
      deathChance: 0.0010179372038692236,
      lifeRemaining: 50.573333740234375
    },
    {
      age: 30,
      deathChance: 0.001092350808903575,
      lifeRemaining: 49.624351501464844
    },
    {
      age: 31,
      deathChance: 0.0011755104642361403,
      lifeRemaining: 48.678070068359375
    },
    {
      age: 32,
      deathChance: 0.0012661281507462263,
      lifeRemaining: 47.73477554321289
    },
    {
      age: 33,
      deathChance: 0.00135726947337389,
      lifeRemaining: 46.794654846191406
    },
    {
      age: 34,
      deathChance: 0.0014465790009126067,
      lifeRemaining: 45.857574462890625
    },
    {
      age: 35,
      deathChance: 0.0015400240663439035,
      lifeRemaining: 44.92328643798828
    },
    {
      age: 36,
      deathChance: 0.0016421308973804116,
      lifeRemaining: 43.99180221557617
    },
    {
      age: 37,
      deathChance: 0.001751357689499855,
      lifeRemaining: 43.06333541870117
    },
    {
      age: 38,
      deathChance: 0.0018734693294391036,
      lifeRemaining: 42.13801193237305
    },
    {
      age: 39,
      deathChance: 0.002013210905715823,
      lifeRemaining: 41.216163635253906
    },
    {
      age: 40,
      deathChance: 0.0021794363856315613,
      lifeRemaining: 40.298301696777344
    },
    {
      age: 41,
      deathChance: 0.002364259446039796,
      lifeRemaining: 39.38522720336914
    },
    {
      age: 42,
      deathChance: 0.0025494752917438745,
      lifeRemaining: 38.477378845214844
    },
    {
      age: 43,
      deathChance: 0.0027200260665267706,
      lifeRemaining: 37.57444763183594
    },
    {
      age: 44,
      deathChance: 0.002882822882384062,
      lifeRemaining: 36.67557144165039
    },
    {
      age: 45,
      deathChance: 0.0030511391814798117,
      lifeRemaining: 35.78015899658203
    },
    {
      age: 46,
      deathChance: 0.0032511844765394926,
      lifeRemaining: 34.88813018798828
    },
    {
      age: 47,
      deathChance: 0.003500070422887802,
      lifeRemaining: 34.000301361083984
    },
    {
      age: 48,
      deathChance: 0.003815459320321679,
      lifeRemaining: 33.11796569824219
    },
    {
      age: 49,
      deathChance: 0.004191828425973654,
      lifeRemaining: 32.24289321899414
    },
    {
      age: 50,
      deathChance: 0.004587612580507994,
      lifeRemaining: 31.376514434814453
    },
    {
      age: 51,
      deathChance: 0.005003665573894978,
      lifeRemaining: 30.518817901611328
    },
    {
      age: 52,
      deathChance: 0.0054838634096086025,
      lifeRemaining: 29.66977882385254
    },
    {
      age: 53,
      deathChance: 0.0060341088101267815,
      lifeRemaining: 28.83062171936035
    },
    {
      age: 54,
      deathChance: 0.006632210686802864,
      lifeRemaining: 28.00261116027832
    },
    {
      age: 55,
      deathChance: 0.00725206546485424,
      lifeRemaining: 27.18623161315918
    },
    {
      age: 56,
      deathChance: 0.007873047143220901,
      lifeRemaining: 26.381175994873047
    },
    {
      age: 57,
      deathChance: 0.008498352952301502,
      lifeRemaining: 25.586557388305664
    },
    {
      age: 58,
      deathChance: 0.009133276529610157,
      lifeRemaining: 24.801578521728516
    },
    {
      age: 59,
      deathChance: 0.00979267805814743,
      lifeRemaining: 24.025577545166016
    },
    {
      age: 60,
      deathChance: 0.010488391853868961,
      lifeRemaining: 23.25823211669922
    },
    {
      age: 61,
      deathChance: 0.011224303394556046,
      lifeRemaining: 22.49945831298828
    },
    {
      age: 62,
      deathChance: 0.012002469040453434,
      lifeRemaining: 21.749189376831055
    },
    {
      age: 63,
      deathChance: 0.01282354537397623,
      lifeRemaining: 21.0073299407959
    },
    {
      age: 64,
      deathChance: 0.01368874590843916,
      lifeRemaining: 20.273723602294922
    },
    {
      age: 65,
      deathChance: 0.014642125926911831,
      lifeRemaining: 19.54815673828125
    },
    {
      age: 66,
      deathChance: 0.015648266300559044,
      lifeRemaining: 18.831207275390625
    },
    {
      age: 67,
      deathChance: 0.016669832170009613,
      lifeRemaining: 18.122621536254883
    },
    {
      age: 68,
      deathChance: 0.017662376165390015,
      lifeRemaining: 17.421367645263672
    },
    {
      age: 69,
      deathChance: 0.018739597871899605,
      lifeRemaining: 16.72561264038086
    },
    {
      age: 70,
      deathChance: 0.019832555204629898,
      lifeRemaining: 16.035480499267578
    },
    {
      age: 71,
      deathChance: 0.02126470021903515,
      lifeRemaining: 15.349822998046875
    },
    {
      age: 72,
      deathChance: 0.023244734853506088,
      lifeRemaining: 14.67246150970459
    },
    {
      age: 73,
      deathChance: 0.025275394320487976,
      lifeRemaining: 14.009736061096191
    },
    {
      age: 74,
      deathChance: 0.027611019089818,
      lifeRemaining: 13.360054969787598
    },
    {
      age: 75,
      deathChance: 0.030253790318965912,
      lifeRemaining: 12.725215911865234
    },
    {
      age: 76,
      deathChance: 0.032733652740716934,
      lifeRemaining: 12.106613159179688
    },
    {
      age: 77,
      deathChance: 0.03631523624062538,
      lifeRemaining: 11.499397277832031
    },
    {
      age: 78,
      deathChance: 0.03977985680103302,
      lifeRemaining: 10.913895606994629
    },
    {
      age: 79,
      deathChance: 0.043086472898721695,
      lifeRemaining: 10.345321655273438
    },
    {
      age: 80,
      deathChance: 0.04766606166958809,
      lifeRemaining: 9.78862190246582
    },
    {
      age: 81,
      deathChance: 0.05196686089038849,
      lifeRemaining: 9.253534317016602
    },
    {
      age: 82,
      deathChance: 0.056636031717061996,
      lifeRemaining: 8.733363151550293
    },
    {
      age: 83,
      deathChance: 0.06212571635842323,
      lifeRemaining: 8.22766399383545
    },
    {
      age: 84,
      deathChance: 0.06857070326805115,
      lifeRemaining: 7.739551544189453
    },
    {
      age: 85,
      deathChance: 0.07453782111406326,
      lifeRemaining: 7.272517681121826
    },
    {
      age: 86,
      deathChance: 0.08240360766649246,
      lifeRemaining: 6.8179850578308105
    },
    {
      age: 87,
      deathChance: 0.09115096926689148,
      lifeRemaining: 6.385363578796387
    },
    {
      age: 88,
      deathChance: 0.10066689550876617,
      lifeRemaining: 5.97562313079834
    },
    {
      age: 89,
      deathChance: 0.1109846904873848,
      lifeRemaining: 5.588537216186523
    },
    {
      age: 90,
      deathChance: 0.12213180214166641,
      lifeRemaining: 5.223790168762207
    },
    {
      age: 91,
      deathChance: 0.13412827253341675,
      lifeRemaining: 4.880979061126709
    },
    {
      age: 92,
      deathChance: 0.1469850242137909,
      lifeRemaining: 4.559616565704346
    },
    {
      age: 93,
      deathChance: 0.16070227324962616,
      lifeRemaining: 4.259139060974121
    },
    {
      age: 94,
      deathChance: 0.17526791989803314,
      lifeRemaining: 3.978909730911255
    },
    {
      age: 95,
      deathChance: 0.19065628945827484,
      lifeRemaining: 3.7182302474975586
    },
    {
      age: 96,
      deathChance: 0.2068270742893219,
      lifeRemaining: 3.4763455390930176
    },
    {
      age: 97,
      deathChance: 0.22372478246688843,
      lifeRemaining: 3.2524545192718506
    },
    {
      age: 98,
      deathChance: 0.24127866327762604,
      lifeRemaining: 3.045720100402832
    },
    {
      age: 99,
      deathChance: 0.259403258562088,
      lifeRemaining: 2.8552770614624023
    }
  ]
};

export { lifeTables };
