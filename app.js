// أذكار الصباح والمساء — موثقة من حصن المسلم وأصول السنة
const MORNING = [
  {title:"آية الكرسي", text:"أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ﴿ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴾ [البقرة: 255]", count:1, virtue:"من قالها حين يصبح أُجير من الجن حتى يمسي، ومن قالها حين يمسي أُجير من الجن حتى يصبح.", source:"رواه الحاكم (1/562) وصححه الألباني في صحيح الترغيب رقم 662"},
  {title:"سورة الإخلاص والمعوذتين", text:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ ﴾ + ﴿ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴾ + ﴿ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴾", count:3, virtue:"تكفيك كلَّ شيء.", source:"رواه أبو داود 5082 والترمذي 3575 وقال حديث حسن صحيح"},
  {title:"أصبحنا وأصبح الملك لله", text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ", count:1, virtue:"ذكر جامع لخير اليوم والاستعاذة من شرّه.", source:"رواه مسلم 2723"},
  {title:"اللهم بك أصبحنا", text:"اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ", count:1, virtue:"إقرار بالتوكل على الله في الحياة والموت والبعث.", source:"رواه الترمذي 3391 وأبو داود 5068 وصححه الألباني"},
  {title:"سيد الاستغفار", text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", count:1, virtue:"من قالها موقناً بها حين يمسي فمات من ليلته دخل الجنة، وكذلك إذا أصبح.", source:"رواه البخاري 6306"},
  {title:"اللهم عافني في بدني", text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ", count:3, virtue:"سؤال الله العافية في البدن والسمع والبصر.", source:"رواه أبو داود 5090 وحسّنه الألباني"},
  {title:"اللهم إني أعوذ بك من الكفر والفقر", text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ", count:3, virtue:"كان النبي ﷺ يدعو بهن حين يصبح وحين يمسي.", source:"رواه أبو داود 5090 وأحمد وحسّنه الألباني"},
  {title:"سبحان الله وبحمده", text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", count:100, virtue:"من قالها مائة مرة حين يصبح وحين يمسي لم يأت أحد يوم القيامة بأفضل مما جاء به إلا أحد قال مثل ما قال أو زاد عليه.", source:"رواه مسلم 2692"},
  {title:"لا إله إلا الله وحده لا شريك له", text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", count:10, virtue:"كانت له عدل عشر رقاب، وكُتبت له مائة حسنة، ومُحيت عنه مائة سيئة، وكانت له حرزاً من الشيطان يومه ذلك حتى يمسي.", source:"رواه البخاري 3293 ومسلم 2691 (بلفظ المائة) والنسائي في عمل اليوم والليلة بلفظ العشر وصححه الألباني"},
  {title:"بسم الله الذي لا يضر مع اسمه شيء", text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", count:3, virtue:"من قالها ثلاثاً حين يصبح وحين يمسي لم تضرّه فجأة بلاء حتى يصبح / حتى يمسي.", source:"رواه أبو داود 5088 والترمذي 3388 وصححه الألباني"},
  {title:"رضيت بالله رباً", text:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا", count:3, virtue:"من قالها حين يصبح وحين يمسي كان حقاً على الله أن يرضيه يوم القيامة.", source:"رواه أبو داود 5072 والترمذي 3389 وحسّنه الألباني"},
  {title:"يا حي يا قيوم برحمتك أستغيث", text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ", count:1, virtue:"وصية النبي ﷺ لفاطمة أن تقولها حين تصبح وحين تمسي.", source:"رواه الحاكم وصححه ووافقه الذهبي، وحسّنه الألباني في صحيح الترغيب 661"},
  {title:"أصبحنا على فطرة الإسلام", text:"أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ", count:1, virtue:"تجديد العهد مع التوحيد كل صباح.", source:"رواه أحمد 15360 وصححه الألباني في صحيح الجامع 4674"},
  {title:"سبحان الله وبحمده عدد خلقه", text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ", count:3, virtue:"قالها النبي ﷺ بعد الفجر وهي تعدل ما قالته جويرية في مجلسها حتى الضحى.", source:"رواه مسلم 2726"},
  {title:"اللهم إني أسألك علماً نافعاً (صباحاً)", text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا", count:1, virtue:"كان النبي ﷺ يقولها إذا صلى الصبح حين يسلّم.", source:"رواه ابن ماجه 925 وصححه الألباني"},
  {title:"اللهم فاطر السماوات والأرض", text:"اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَشَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ", count:1, virtue:"أمر النبي ﷺ أبا بكر أن يقولها إذا أصبح وإذا أمسى وإذا أخذ مضجعه.", source:"رواه الترمذي 3392 وأبو داود 5067 وصححه الألباني"},
  {title:"اللهم ما أصبح بي من نعمة", text:"اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ", count:1, virtue:"من قالها حين يصبح فقد أدّى شكر يومه.", source:"رواه أبو داود 5073 وحسّنه ابن باز"},
  {title:"حسبي الله لا إله إلا هو", text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", count:7, virtue:"من قالها حين يصبح وحين يمسي سبع مرات كفاه الله ما أهمّه من أمر الدنيا والآخرة.", source:"رواه أبو داود 5081 موقوفاً على أبي الدرداء بسند حسن"},
  {title:"أستغفر الله وأتوب إليه", text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", count:100, virtue:"إنه ليُغان على قلبي وإني لأستغفر الله في اليوم مائة مرة.", source:"رواه مسلم 2702 والبخاري 6307"},
  {title:"الصلاة على النبي ﷺ", text:"اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", count:10, virtue:"من صلى عليَّ حين يصبح عشراً وحين يمسي عشراً أدركته شفاعتي يوم القيامة.", source:"رواه الطبراني في الكبير وحسّنه الألباني في صحيح الجامع 6577"},
];

const EVENING = [
  {title:"آية الكرسي", text:"أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ﴿ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ... وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴾ [البقرة: 255]", count:1, virtue:"من قالها حين يمسي أُجير من الجن حتى يصبح.", source:"رواه الحاكم وصححه الألباني في صحيح الترغيب 662"},
  {title:"سورة الإخلاص والمعوذتين", text:"﴿ قُلْ هُوَ اللَّهُ أَحَدٌ ﴾ + ﴿ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴾ + ﴿ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴾", count:3, virtue:"تكفيك كلَّ شيء.", source:"رواه أبو داود 5082 والترمذي 3575"},
  {title:"أمسينا وأمسى الملك لله", text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ", count:1, virtue:"ذكر جامع لخير الليلة والاستعاذة من شرّها.", source:"رواه مسلم 2723"},
  {title:"اللهم بك أمسينا", text:"اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ", count:1, virtue:"إقرار بالتوكل على الله في الممات والبعث.", source:"رواه الترمذي 3391 وأبو داود 5068"},
  {title:"سيد الاستغفار", text:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", count:1, virtue:"من قالها موقناً بها حين يمسي فمات من ليلته دخل الجنة.", source:"رواه البخاري 6306"},
  {title:"أعوذ بكلمات الله التامات (مساءً)", text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", count:3, virtue:"من قالها حين يمسي لم تضرّه حمَة تلك الليلة.", source:"رواه مسلم 2709 والترمذي 3604"},
  {title:"اللهم عافني في بدني", text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ", count:3, virtue:"سؤال العافية في البدن والسمع والبصر.", source:"رواه أبو داود 5090"},
  {title:"اللهم إني أعوذ بك من الكفر والفقر", text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ", count:3, virtue:"كان النبي ﷺ يدعو بهن حين يصبح وحين يمسي.", source:"رواه أبو داود 5090"},
  {title:"سبحان الله وبحمده", text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", count:100, virtue:"حُطَّت خطاياه وإن كانت مثل زبد البحر.", source:"رواه البخاري 6405 ومسلم 2691"},
  {title:"لا إله إلا الله وحده لا شريك له", text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", count:10, virtue:"كانت له حرزاً من الشيطان حتى يصبح، وكُتبت له مائة حسنة.", source:"رواه البخاري ومسلم، والنسائي بلفظ العشر"},
  {title:"بسم الله الذي لا يضر مع اسمه شيء", text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", count:3, virtue:"لم تضرّه فجأة بلاء حتى يصبح.", source:"رواه أبو داود 5088 والترمذي 3388"},
  {title:"رضيت بالله رباً", text:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا", count:3, virtue:"كان حقاً على الله أن يرضيه يوم القيامة.", source:"رواه أبو داود 5072"},
  {title:"يا حي يا قيوم برحمتك أستغيث", text:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ", count:1, virtue:"وصية النبي ﷺ لفاطمة حين تصبح وحين تمسي.", source:"رواه الحاكم وحسّنه الألباني 661"},
  {title:"أمسينا على فطرة الإسلام", text:"أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ", count:1, virtue:"تجديد العهد مع التوحيد كل مساء.", source:"رواه أحمد 15360"},
  {title:"اللهم فاطر السماوات والأرض", text:"اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَشَرِّ الشَّيْطَانِ وَشِرْكِهِ", count:1, virtue:"يقولها إذا أصبح وإذا أمسى وإذا أخذ مضجعه.", source:"رواه الترمذي 3392 وأبو داود 5067"},
  {title:"اللهم ما أمسى بي من نعمة", text:"اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ", count:1, virtue:"من قالها حين يمسي فقد أدّى شكر ليلته.", source:"رواه أبو داود 5073"},
  {title:"حسبي الله لا إله إلا هو", text:"حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", count:7, virtue:"كفاه الله ما أهمّه من أمر الدنيا والآخرة.", source:"رواه أبو داود 5081"},
  {title:"أستغفر الله وأتوب إليه", text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", count:100, virtue:"طوبى لمن وجد في صحيفته استغفاراً كثيراً.", source:"رواه ابن ماجه 3818 ومسلم 2702"},
  {title:"الصلاة على النبي ﷺ", text:"اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", count:10, virtue:"من صلى عليَّ عشراً حين يمسي أدركته شفاعتي.", source:"رواه الطبراني وحسّنه الألباني 6577"},
  {title:"اللهم إني أعوذ بك من الهم والحزن (زيادة مستحبة)", text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ", count:1, virtue:"دعاء نبوي لتفريج الهم وقضاء الدين، يُقال صباحاً ومساءً.", source:"رواه البخاري 6369 وأبو داود 1555"},
];

const state = {
  page: "faq",
  tab: "morning",
  remaining: {}, // key: `${tab}-${i}` -> remaining
  fontScale: 1,
  theme: "light",
  query: "",
  faqQuery: ""
};

function loadPrefs(){
  try{
    const t = localStorage.getItem("azkar-theme");
    if(t) state.theme = t;
    const f = parseFloat(localStorage.getItem("azkar-font"));
    if(f && f>=0.8 && f<=1.6) state.fontScale = f;
    const h = new Date().getHours();
    state.tab = (h>=15 || h<4) ? "evening" : "morning";
  }catch{}
}
function savePrefs(){
  try{
    localStorage.setItem("azkar-theme", state.theme);
    localStorage.setItem("azkar-font", String(state.fontScale));
  }catch{}
}
function data(){ return state.tab==="morning" ? MORNING : EVENING; }
function key(i){ return state.tab+"-"+i; }
function getRemaining(i, total){
  const k = key(i);
  if(!(k in state.remaining)) state.remaining[k]=total;
  return state.remaining[k];
}
function render(){
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.style.setProperty("--font-scale", state.fontScale);
  document.getElementById("fontScaleLabel").textContent = Math.round(state.fontScale*100)+"%";
  const dark = state.theme==="dark";
  document.getElementById("iconMoon").style.display = dark?"none":"block";
  document.getElementById("iconSun").style.display = dark?"block":"none";
  document.getElementById("themeLabel").textContent = dark?"نهاري":"ليلي";

  // --- إدارة الصفحات: faq / morning / evening ---
  const faqPage = document.getElementById("faqPage");
  const azkarPage = document.getElementById("azkarPage");
  const isFaq = state.page === "faq";
  if(faqPage) faqPage.style.display = isFaq ? "" : "none";
  if(azkarPage) azkarPage.style.display = isFaq ? "none" : "";
  document.querySelectorAll(".pagenav-btn").forEach(b=>b.classList.toggle("active", b.dataset.page===state.page));

  document.querySelectorAll(".tab[data-tab]").forEach(b=>b.classList.toggle("active", b.dataset.tab===state.tab));

  const h = new Date().getHours();
  const badge = document.getElementById("timeBadge");
  if(state.tab==="morning"){ badge.textContent = (h>=4&&h<12)?"🌅 وقت الصباح الآن":"☀️ أذكار الصباح"; }
  else{ badge.textContent = (h>=15||h<4)?"🌙 وقت المساء الآن":"🌙 أذكار المساء"; }

  const list = data();
  const q = state.query.trim();
  const wrap = document.getElementById("cards");
  wrap.innerHTML = "";
  let shown = 0;
  list.forEach((d,i)=>{
    if(q && !(d.title.includes(q)||d.text.includes(q))) return;
    shown++;
    const rem = getRemaining(i, d.count);
    const done = rem===0;
    const el = document.createElement("article");
    el.className = "card"+(done?" done":"");
    el.innerHTML = `
      <div class="card-top">
        <span class="card-num">${i+1}</span>
        <span class="repeat-pill">${d.count>1?("التكرار: "+d.count+" مرات"):"مرة واحدة"}</span>
      </div>
      <h3 class="dhikr-title">${d.title}</h3>
      <p class="dhikr-text">${d.text}</p>
      <div class="virtue">💎 الفضل: ${d.virtue}</div>
      <div class="source"><b>📚 المصدر:</b><span>${d.source}</span></div>
      <div class="counter-row">
        <div class="count-bubble" aria-live="polite">${done?"✓":rem}</div>
        <button class="counter-btn" ${done?"disabled":""}>${done?"تم بحمد الله":"سبِّح • بقي "+rem}</button>
        <button class="reset-one" title="إعادة هذا الذكر">↺</button>
      </div>`;
    const [bubble, btn, resetBtn] = [el.querySelector(".count-bubble"), el.querySelector(".counter-btn"), el.querySelector(".reset-one")];
    btn.addEventListener("click", ()=>{
      const k = key(i);
      if(state.remaining[k]>0){
        state.remaining[k]--;
        if(navigator.vibrate) try{navigator.vibrate(20)}catch{}
        render();
      }
    });
    resetBtn.addEventListener("click", ()=>{ state.remaining[key(i)]=d.count; render(); });
    // الضغط على البطاقة نفسها يسبّح أيضاً (ما عدا الأزرار والنص المحدد)
    bubble.style.cursor="pointer";
    bubble.addEventListener("click", ()=>btn.click());
    wrap.appendChild(el);
  });

  document.getElementById("totalLabel").textContent = `عدد الأذكار: ${shown}`;
  // progress
  const total = list.length;
  let finished = 0;
  list.forEach((d,i)=>{ if(getRemaining(i,d.count)===0) finished++; });
  const pct = total? Math.round(finished/total*100):0;
  document.getElementById("progressPct").textContent = pct+"%";
  document.getElementById("progressCount").textContent = `${finished} / ${total} ذكر`;
  const C = 2*Math.PI*52;
  document.getElementById("ringFg").style.strokeDashoffset = String(C*(1-finished/Math.max(total,1)));
  savePrefs();
}

document.querySelectorAll(".tab[data-tab]").forEach(b=>b.addEventListener("click", ()=>{ state.tab=b.dataset.tab; state.page=b.dataset.tab; render(); window.scrollTo({top:0, behavior:"smooth"}); }));
document.querySelectorAll(".pagenav-btn").forEach(b=>b.addEventListener("click", ()=>{
  const p = b.dataset.page;
  if(p==="morning"||p==="evening"){ state.tab=p; state.page=p; }
  else{ state.page="faq"; }
  render();
  window.scrollTo({top:0, behavior:"smooth"});
}));
document.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click", ()=>{
  state.tab=b.dataset.goto; state.page=b.dataset.goto; render();
  window.scrollTo({top:0, behavior:"smooth"});
}));
document.getElementById("resetAll").addEventListener("click", ()=>{
  data().forEach((d,i)=>{ state.remaining[key(i)]=d.count; });
  render();
});
document.getElementById("search").addEventListener("input", e=>{ state.query=e.target.value; render(); });
const faqSearchEl = document.getElementById("faqSearch");
if(faqSearchEl) faqSearchEl.addEventListener("input", e=>{
  state.faqQuery = e.target.value.trim();
  const q = state.faqQuery;
  let visible = 0;
  document.querySelectorAll("#faqList .faq-item").forEach(item=>{
    const hit = !q || item.textContent.includes(q);
    item.style.display = hit ? "" : "none";
    if(hit){ visible++; if(q) item.open = true; }
  });
  let empty = document.getElementById("faqEmpty");
  if(!empty){
    empty = document.createElement("div");
    empty.id = "faqEmpty";
    empty.className = "faq-empty";
    empty.textContent = "لا توجد نتائج مطابقة — جرّب كلمة أخرى مثل: الوقت، الوضوء، العدد";
    document.getElementById("faqList").appendChild(empty);
  }
  empty.style.display = visible ? "none" : "";
});
document.getElementById("fontIncrease").addEventListener("click", ()=>{ state.fontScale=Math.min(1.6, +(state.fontScale+0.1).toFixed(2)); render(); });
document.getElementById("fontDecrease").addEventListener("click", ()=>{ state.fontScale=Math.max(0.8, +(state.fontScale-0.1).toFixed(2)); render(); });
document.getElementById("themeToggle").addEventListener("click", ()=>{ state.theme = state.theme==="light"?"dark":"light"; render(); });

// --- PWA: تسجيل Service Worker للعمل دون إنترنت ---
if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  });
}

// --- PWA: زر تحميل التطبيق ---
let deferredPrompt = null;
const installBtns = document.querySelectorAll(".install-btn");
function hideInstallBtns(){ installBtns.forEach((b)=>{ b.hidden = true; }); }
// إخفاء الزر إذا كان التطبيق مثبتاً ويعمل مستقلاً
if(window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true) hideInstallBtns();
window.addEventListener("beforeinstallprompt", (e)=>{
  e.preventDefault();
  deferredPrompt = e;
});
installBtns.forEach((b)=>b.addEventListener("click", ()=>{
  if(deferredPrompt){
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(()=>{ deferredPrompt = null; });
    return;
  }
  const dlg = document.getElementById("installHelp");
  if(dlg){
    try{
      if(dlg.showModal) dlg.showModal();
      else dlg.setAttribute("open", "");
    }catch(_){
      dlg.setAttribute("open", "");
    }
  }
}));
window.addEventListener("appinstalled", ()=>{ deferredPrompt = null; hideInstallBtns(); });
const installHelpClose = document.getElementById("installHelpClose");
if(installHelpClose) installHelpClose.addEventListener("click", ()=>{
  const dlg = document.getElementById("installHelp");
  if(dlg) dlg.close();
});

// --- حالة الاتصال: تنبيه عند انقطاع الإنترنت ---
function updateConn(){
  const el = document.getElementById("connStatus");
  if(!el) return;
  const off = !navigator.onLine;
  el.textContent = off ? "📴 بدون إنترنت — الأذكار المحفوظة تعمل" : "";
  el.classList.toggle("offline", off);
}
window.addEventListener("online", updateConn);
window.addEventListener("offline", updateConn);
updateConn();

loadPrefs();
render();
