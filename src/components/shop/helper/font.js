// Translator
const tamilUnicodeUtf8Replace = (englishValue) => {
  let unicodeValue = englishValue;

  // north letters
  // x - க்ஷ
  unicodeValue = unicodeValue.replace(/sr/g, 'ஸ்ரீ');
  unicodeValue = unicodeValue.replace(/xau/g, 'க்ஷௌ');
  unicodeValue = unicodeValue.replace(/xoo/g, 'க்ஷோ');
  unicodeValue = unicodeValue.replace(/xo/g, 'க்ஷொ');
  unicodeValue = unicodeValue.replace(/xai/g, 'க்ஷை');
  unicodeValue = unicodeValue.replace(/xaee/g, 'க்ஷே');
  unicodeValue = unicodeValue.replace(/xae/g, 'க்ஷெ');
  unicodeValue = unicodeValue.replace(/xuu/g, 'க்ஷூ');
  unicodeValue = unicodeValue.replace(/xu/g, 'க்ஷு');
  unicodeValue = unicodeValue.replace(/xii/g, 'க்ஷீ');
  unicodeValue = unicodeValue.replace(/xi/g, 'க்ஷி');
  unicodeValue = unicodeValue.replace(/xaa/g, 'க்ஷா');
  unicodeValue = unicodeValue.replace(/xa/g, 'க்ஷ');
  unicodeValue = unicodeValue.replace(/x/g, 'க்ஷ்');

  // sh - ஷ
  unicodeValue = unicodeValue.replace(/shau/g, 'ஷௌ');
  unicodeValue = unicodeValue.replace(/shoo/g, 'ஷோ');
  unicodeValue = unicodeValue.replace(/sho/g, 'ஷொ');
  unicodeValue = unicodeValue.replace(/shai/g, 'ஷை');
  unicodeValue = unicodeValue.replace(/shaee/g, 'ஷே');
  unicodeValue = unicodeValue.replace(/shae/g, 'ஷெ');
  unicodeValue = unicodeValue.replace(/shuu/g, 'ஷூ');
  unicodeValue = unicodeValue.replace(/shu/g, 'ஷு');
  unicodeValue = unicodeValue.replace(/shii/g, 'ஷீ');
  unicodeValue = unicodeValue.replace(/shi/g, 'ஷி');
  unicodeValue = unicodeValue.replace(/shaa/g, 'ஷா');
  unicodeValue = unicodeValue.replace(/sha/g, 'ஷ');
  unicodeValue = unicodeValue.replace(/sh/g, 'ஷ்');

  // s - ஸ
  unicodeValue = unicodeValue.replace(/chau/g, 'ஸௌ');
  unicodeValue = unicodeValue.replace(/choo/g, 'ஸோ');
  unicodeValue = unicodeValue.replace(/cho/g, 'ஸொ');
  unicodeValue = unicodeValue.replace(/chai/g, 'ஸை');
  unicodeValue = unicodeValue.replace(/chaee/g, 'ஸே');
  unicodeValue = unicodeValue.replace(/chae/g, 'ஸெ');
  unicodeValue = unicodeValue.replace(/chuu/g, 'ஸூ');
  unicodeValue = unicodeValue.replace(/chu/g, 'ஸு');
  unicodeValue = unicodeValue.replace(/chii/g, 'ஸீ');
  unicodeValue = unicodeValue.replace(/chi/g, 'ஸி');
  unicodeValue = unicodeValue.replace(/chaa/g, 'ஸா');
  unicodeValue = unicodeValue.replace(/cha/g, 'ஸ');
  unicodeValue = unicodeValue.replace(/ch/g, 'ஸ்');

  // j - ஜ
  unicodeValue = unicodeValue.replace(/jau/g, 'ஜௌ');
  unicodeValue = unicodeValue.replace(/joo/g, 'ஜோ');
  unicodeValue = unicodeValue.replace(/jo/g, 'ஜொ');
  unicodeValue = unicodeValue.replace(/jai/g, 'ஜை');
  unicodeValue = unicodeValue.replace(/jaee/g, 'ஜே');
  unicodeValue = unicodeValue.replace(/jae/g, 'ஜெ');
  unicodeValue = unicodeValue.replace(/juu/g, 'ஜூ');
  unicodeValue = unicodeValue.replace(/ju/g, 'ஜு');
  unicodeValue = unicodeValue.replace(/jii/g, 'ஜீ');
  unicodeValue = unicodeValue.replace(/ji/g, 'ஜி');
  unicodeValue = unicodeValue.replace(/jaa/g, 'ஜா');
  unicodeValue = unicodeValue.replace(/ja/g, 'ஜ');
  unicodeValue = unicodeValue.replace(/j/g, 'ஜ்');

  // const_vowels
  // ng - ங
  unicodeValue = unicodeValue.replace(/ngau/g, 'ஙௌ');
  unicodeValue = unicodeValue.replace(/ngoo/g, 'ஙோ');
  unicodeValue = unicodeValue.replace(/ngo/g, 'ஙொ');
  unicodeValue = unicodeValue.replace(/ngai/g, 'ஙை');
  unicodeValue = unicodeValue.replace(/ngaee/g, 'ஙே');
  unicodeValue = unicodeValue.replace(/ngae/g, 'ஙெ');
  unicodeValue = unicodeValue.replace(/nguu/g, 'ஙூ');
  unicodeValue = unicodeValue.replace(/ngu/g, 'ஙு');
  unicodeValue = unicodeValue.replace(/ngii/g, 'ஙீ');
  unicodeValue = unicodeValue.replace(/ngi/g, 'ஙி');
  unicodeValue = unicodeValue.replace(/ngaa/g, 'ஙா');
  unicodeValue = unicodeValue.replace(/nga/g, 'ங');
  unicodeValue = unicodeValue.replace(/ng/g, 'ங்');

  // g- க
  unicodeValue = unicodeValue.replace(/gau/g, 'கௌ');
  unicodeValue = unicodeValue.replace(/goo/g, 'கோ');
  unicodeValue = unicodeValue.replace(/go/g, 'கொ');
  unicodeValue = unicodeValue.replace(/gai/g, 'கை');
  unicodeValue = unicodeValue.replace(/gaee/g, 'கே');
  unicodeValue = unicodeValue.replace(/ge/g, 'கெ');
  unicodeValue = unicodeValue.replace(/guu/g, 'கூ');
  unicodeValue = unicodeValue.replace(/gu/g, 'கு');
  unicodeValue = unicodeValue.replace(/gii/g, 'கீ');
  unicodeValue = unicodeValue.replace(/gi/g, 'கி');
  unicodeValue = unicodeValue.replace(/gaa/g, 'கா');
  unicodeValue = unicodeValue.replace(/ga/g, 'க');
  unicodeValue = unicodeValue.replace(/g/g, 'க்');
  // k - க
  unicodeValue = unicodeValue.replace(/kau/g, 'கௌ');
  unicodeValue = unicodeValue.replace(/koo/g, 'கோ');
  unicodeValue = unicodeValue.replace(/ko/g, 'கொ');
  unicodeValue = unicodeValue.replace(/kai/g, 'கை');
  unicodeValue = unicodeValue.replace(/kaee/g, 'கே');
  unicodeValue = unicodeValue.replace(/ke/g, 'கெ');
  unicodeValue = unicodeValue.replace(/kuu/g, 'கூ');
  unicodeValue = unicodeValue.replace(/ku/g, 'கு');
  unicodeValue = unicodeValue.replace(/kii/g, 'கீ');
  unicodeValue = unicodeValue.replace(/ki/g, 'கி');
  unicodeValue = unicodeValue.replace(/kaa/g, 'கா');
  unicodeValue = unicodeValue.replace(/ka/g, 'க');
  unicodeValue = unicodeValue.replace(/k/g, 'க்');

  // ச
  unicodeValue = unicodeValue.replace(/sau/g, 'சௌ');
  unicodeValue = unicodeValue.replace(/soo/g, 'சோ');
  unicodeValue = unicodeValue.replace(/so/g, 'சொ');
  unicodeValue = unicodeValue.replace(/sai/g, 'சை');
  unicodeValue = unicodeValue.replace(/saee/g, 'சே');
  unicodeValue = unicodeValue.replace(/sae/g, 'செ');
  unicodeValue = unicodeValue.replace(/suu/g, 'சூ');
  unicodeValue = unicodeValue.replace(/su/g, 'சு');
  unicodeValue = unicodeValue.replace(/sii/g, 'சீ');
  unicodeValue = unicodeValue.replace(/si/g, 'சி');
  unicodeValue = unicodeValue.replace(/saa/g, 'சா');
  unicodeValue = unicodeValue.replace(/sa/g, 'ச');
  unicodeValue = unicodeValue.replace(/s/g, 'ச்');

  // ஞ
  unicodeValue = unicodeValue.replace(/njau/g, 'ஞௌ');
  unicodeValue = unicodeValue.replace(/njoo/g, 'ஞோ');
  unicodeValue = unicodeValue.replace(/njo/g, 'ஞொ');
  unicodeValue = unicodeValue.replace(/njai/g, 'ஞை');
  unicodeValue = unicodeValue.replace(/njaee/g, 'ஞே');
  unicodeValue = unicodeValue.replace(/njae/g, 'ஞெ');
  unicodeValue = unicodeValue.replace(/njuu/g, 'ஞூ');
  unicodeValue = unicodeValue.replace(/nju/g, 'ஞு');
  unicodeValue = unicodeValue.replace(/njii/g, 'ஞீ');
  unicodeValue = unicodeValue.replace(/nji/g, 'ஞி');
  unicodeValue = unicodeValue.replace(/njaa/g, 'ஞா');
  unicodeValue = unicodeValue.replace(/nja/g, 'ஞ');
  unicodeValue = unicodeValue.replace(/nj/g, 'ஞ்');

  // ந
  unicodeValue = unicodeValue.replace(/-nau/g, 'நௌ');
  unicodeValue = unicodeValue.replace(/-noo/g, 'நோ');
  unicodeValue = unicodeValue.replace(/-no/g, 'நொ');
  unicodeValue = unicodeValue.replace(/-nai/g, 'நை');
  unicodeValue = unicodeValue.replace(/-naee/g, 'நே');
  unicodeValue = unicodeValue.replace(/-nae/g, 'நெ');
  unicodeValue = unicodeValue.replace(/-nuu/g, 'நூ');
  unicodeValue = unicodeValue.replace(/-nu/g, 'நு');
  unicodeValue = unicodeValue.replace(/-nii/g, 'நீ');
  unicodeValue = unicodeValue.replace(/-ni/g, 'நி');
  unicodeValue = unicodeValue.replace(/-naa/g, 'நா');
  unicodeValue = unicodeValue.replace(/-na/g, 'ந');
  unicodeValue = unicodeValue.replace(/-n/g, 'ந்');

  // n - ன
  unicodeValue = unicodeValue.replace(/nau/g, 'னௌ');
  unicodeValue = unicodeValue.replace(/noo/g, 'னோ');
  unicodeValue = unicodeValue.replace(/no/g, 'னொ');
  unicodeValue = unicodeValue.replace(/nai/g, 'னை');
  unicodeValue = unicodeValue.replace(/naee/g, 'னே');
  unicodeValue = unicodeValue.replace(/nae/g, 'னெ');
  unicodeValue = unicodeValue.replace(/nuu/g, 'னூ');
  unicodeValue = unicodeValue.replace(/nu/g, 'னு');
  unicodeValue = unicodeValue.replace(/nii/g, 'னீ');
  unicodeValue = unicodeValue.replace(/ni/g, 'னி');
  unicodeValue = unicodeValue.replace(/naa/g, 'னா');
  unicodeValue = unicodeValue.replace(/na/g, 'ன');
  unicodeValue = unicodeValue.replace(/n/g, 'ன்');

  // த - dh
  unicodeValue = unicodeValue.replace(/dhau/g, 'தௌ');
  unicodeValue = unicodeValue.replace(/dhoo/g, 'தோ');
  unicodeValue = unicodeValue.replace(/dho/g, 'தொ');
  unicodeValue = unicodeValue.replace(/dhai/g, 'தை');
  unicodeValue = unicodeValue.replace(/dhaee/g, 'தே');
  unicodeValue = unicodeValue.replace(/dhae/g, 'தெ');
  unicodeValue = unicodeValue.replace(/dhuu/g, 'தூ');
  unicodeValue = unicodeValue.replace(/dhu/g, 'து');
  unicodeValue = unicodeValue.replace(/dhii/g, 'தீ');
  unicodeValue = unicodeValue.replace(/dhi/g, 'தி');
  unicodeValue = unicodeValue.replace(/dhaa/g, 'தா');
  unicodeValue = unicodeValue.replace(/dha/g, 'த');
  unicodeValue = unicodeValue.replace(/dh/g, 'த்');
  // த - th
  unicodeValue = unicodeValue.replace(/thau/g, 'தௌ');
  unicodeValue = unicodeValue.replace(/thoo/g, 'தோ');
  unicodeValue = unicodeValue.replace(/tho/g, 'தொ');
  unicodeValue = unicodeValue.replace(/thai/g, 'தை');
  unicodeValue = unicodeValue.replace(/thaee/g, 'தே');
  unicodeValue = unicodeValue.replace(/thae/g, 'தெ');
  unicodeValue = unicodeValue.replace(/thuu/g, 'தூ');
  unicodeValue = unicodeValue.replace(/thu/g, 'து');
  unicodeValue = unicodeValue.replace(/thii/g, 'தீ');
  unicodeValue = unicodeValue.replace(/thi/g, 'தி');
  unicodeValue = unicodeValue.replace(/thaa/g, 'தா');
  unicodeValue = unicodeValue.replace(/tha/g, 'த');
  unicodeValue = unicodeValue.replace(/th/g, 'த்');

  // h - ஹ - north
  unicodeValue = unicodeValue.replace(/hau/g, 'ஹௌ');
  unicodeValue = unicodeValue.replace(/hoo/g, 'ஹோ');
  unicodeValue = unicodeValue.replace(/ho/g, 'ஹொ');
  unicodeValue = unicodeValue.replace(/hai/g, 'ஹை');
  unicodeValue = unicodeValue.replace(/haee/g, 'ஹே');
  unicodeValue = unicodeValue.replace(/hae/g, 'ஹெ');
  unicodeValue = unicodeValue.replace(/huu/g, 'ஹூ');
  unicodeValue = unicodeValue.replace(/hu/g, 'ஹு');
  unicodeValue = unicodeValue.replace(/hii/g, 'ஹீ');
  unicodeValue = unicodeValue.replace(/hi/g, 'ஹி');
  unicodeValue = unicodeValue.replace(/haa/g, 'ஹா');
  unicodeValue = unicodeValue.replace(/ha/g, 'ஹ');
  unicodeValue = unicodeValue.replace(/h/g, 'ஹ்');

  // p - ப
  unicodeValue = unicodeValue.replace(/pau/g, 'பௌ');
  unicodeValue = unicodeValue.replace(/poo/g, 'போ');
  unicodeValue = unicodeValue.replace(/po/g, 'பொ');
  unicodeValue = unicodeValue.replace(/pai/g, 'பை');
  unicodeValue = unicodeValue.replace(/paee/g, 'பே');
  unicodeValue = unicodeValue.replace(/pae/g, 'பெ');
  unicodeValue = unicodeValue.replace(/puu/g, 'பூ');
  unicodeValue = unicodeValue.replace(/pu/g, 'பு');
  unicodeValue = unicodeValue.replace(/pii/g, 'பீ');
  unicodeValue = unicodeValue.replace(/pi/g, 'பி');
  unicodeValue = unicodeValue.replace(/paa/g, 'பா');
  unicodeValue = unicodeValue.replace(/pa/g, 'ப');
  unicodeValue = unicodeValue.replace(/p/g, 'ப்');
  // b - ப
  unicodeValue = unicodeValue.replace(/bau/g, 'பௌ');
  unicodeValue = unicodeValue.replace(/boo/g, 'போ');
  unicodeValue = unicodeValue.replace(/bo/g, 'பொ');
  unicodeValue = unicodeValue.replace(/bai/g, 'பை');
  unicodeValue = unicodeValue.replace(/baee/g, 'பே');
  unicodeValue = unicodeValue.replace(/bae/g, 'பெ');
  unicodeValue = unicodeValue.replace(/buu/g, 'பூ');
  unicodeValue = unicodeValue.replace(/bu/g, 'பு');
  unicodeValue = unicodeValue.replace(/bii/g, 'பீ');
  unicodeValue = unicodeValue.replace(/bi/g, 'பி');
  unicodeValue = unicodeValue.replace(/baa/g, 'பா');
  unicodeValue = unicodeValue.replace(/ba/g, 'ப');
  unicodeValue = unicodeValue.replace(/b/g, 'ப்');

  // m - ம
  unicodeValue = unicodeValue.replace(/mau/g, 'மௌ');
  unicodeValue = unicodeValue.replace(/moo/g, 'மோ');
  unicodeValue = unicodeValue.replace(/mo/g, 'மொ');
  unicodeValue = unicodeValue.replace(/mai/g, 'மை');
  unicodeValue = unicodeValue.replace(/maee/g, 'மே');
  unicodeValue = unicodeValue.replace(/mae/g, 'மெ');
  unicodeValue = unicodeValue.replace(/muu/g, 'மூ');
  unicodeValue = unicodeValue.replace(/mu/g, 'மு');
  unicodeValue = unicodeValue.replace(/mii/g, 'மீ');
  unicodeValue = unicodeValue.replace(/mi/g, 'மி');
  unicodeValue = unicodeValue.replace(/maa/g, 'மா');
  unicodeValue = unicodeValue.replace(/ma/g, 'ம');
  unicodeValue = unicodeValue.replace(/m/g, 'ம்');

  // y - ய
  unicodeValue = unicodeValue.replace(/yau/g, 'யௌ');
  unicodeValue = unicodeValue.replace(/yoo/g, 'யோ');
  unicodeValue = unicodeValue.replace(/yo/g, 'யொ');
  unicodeValue = unicodeValue.replace(/yai/g, 'யை');
  unicodeValue = unicodeValue.replace(/yaee/g, 'யே');
  unicodeValue = unicodeValue.replace(/yae/g, 'யெ');
  unicodeValue = unicodeValue.replace(/yuu/g, 'யூ');
  unicodeValue = unicodeValue.replace(/yu/g, 'யு');
  unicodeValue = unicodeValue.replace(/yii/g, 'யீ');
  unicodeValue = unicodeValue.replace(/yi/g, 'யி');
  unicodeValue = unicodeValue.replace(/yaa/g, 'யா');
  unicodeValue = unicodeValue.replace(/ya/g, 'ய');
  unicodeValue = unicodeValue.replace(/y/g, 'ய்');

  // r - ர
  unicodeValue = unicodeValue.replace(/rau/g, 'ரௌ');
  unicodeValue = unicodeValue.replace(/roo/g, 'ரோ');
  unicodeValue = unicodeValue.replace(/ro/g, 'ரொ');
  unicodeValue = unicodeValue.replace(/rai/g, 'ரை');
  unicodeValue = unicodeValue.replace(/raee/g, 'ரே');
  unicodeValue = unicodeValue.replace(/rae/g, 'ரெ');
  unicodeValue = unicodeValue.replace(/ruu/g, 'ரூ');
  unicodeValue = unicodeValue.replace(/ru/g, 'ரு');
  unicodeValue = unicodeValue.replace(/rii/g, 'ரீ');
  unicodeValue = unicodeValue.replace(/ri/g, 'ரி');
  unicodeValue = unicodeValue.replace(/raa/g, 'ரா');
  unicodeValue = unicodeValue.replace(/ra/g, 'ர');
  unicodeValue = unicodeValue.replace(/r/g, 'ர்');

  // R - ற
  unicodeValue = unicodeValue.replace(/Rau/g, 'றௌ');
  unicodeValue = unicodeValue.replace(/Roo/g, 'றோ');
  unicodeValue = unicodeValue.replace(/Ro/g, 'றொ');
  unicodeValue = unicodeValue.replace(/Rai/g, 'றை');
  unicodeValue = unicodeValue.replace(/Raee/g, 'றே');
  unicodeValue = unicodeValue.replace(/Rae/g, 'றெ');
  unicodeValue = unicodeValue.replace(/Ruu/g, 'றூ');
  unicodeValue = unicodeValue.replace(/Ru/g, 'று');
  unicodeValue = unicodeValue.replace(/Rii/g, 'றீ');
  unicodeValue = unicodeValue.replace(/Ri/g, 'றி');
  unicodeValue = unicodeValue.replace(/Raa/g, 'றா');
  unicodeValue = unicodeValue.replace(/Ra/g, 'ற');
  unicodeValue = unicodeValue.replace(/R/g, 'ற்');

  // l - ல
  unicodeValue = unicodeValue.replace(/lau/g, 'லௌ');
  unicodeValue = unicodeValue.replace(/loo/g, 'லோ');
  unicodeValue = unicodeValue.replace(/lo/g, 'லொ');
  unicodeValue = unicodeValue.replace(/lai/g, 'லை');
  unicodeValue = unicodeValue.replace(/laee/g, 'லே');
  unicodeValue = unicodeValue.replace(/lae/g, 'லெ');
  unicodeValue = unicodeValue.replace(/luu/g, 'லூ');
  unicodeValue = unicodeValue.replace(/lu/g, 'லு');
  unicodeValue = unicodeValue.replace(/lii/g, 'லீ');
  unicodeValue = unicodeValue.replace(/li/g, 'லி');
  unicodeValue = unicodeValue.replace(/laa/g, 'லா');
  unicodeValue = unicodeValue.replace(/la/g, 'ல');
  unicodeValue = unicodeValue.replace(/l/g, 'ல்');

  // L - ள
  unicodeValue = unicodeValue.replace(/Lau/g, 'ளௌ');
  unicodeValue = unicodeValue.replace(/Loo/g, 'ளோ');
  unicodeValue = unicodeValue.replace(/Lo/g, 'ளொ');
  unicodeValue = unicodeValue.replace(/Lai/g, 'ளை');
  unicodeValue = unicodeValue.replace(/Laee/g, 'ளே');
  unicodeValue = unicodeValue.replace(/Lae/g, 'ளெ');
  unicodeValue = unicodeValue.replace(/Luu/g, 'ளூ');
  unicodeValue = unicodeValue.replace(/Lu/g, 'ளு');
  unicodeValue = unicodeValue.replace(/Lii/g, 'ளீ');
  unicodeValue = unicodeValue.replace(/Li/g, 'ளி');
  unicodeValue = unicodeValue.replace(/Laa/g, 'ளா');
  unicodeValue = unicodeValue.replace(/La/g, 'ள');
  unicodeValue = unicodeValue.replace(/L/g, 'ள்');

  // zh - ழ
  unicodeValue = unicodeValue.replace(/zhau/g, 'ழௌ');
  unicodeValue = unicodeValue.replace(/zhoo/g, 'ழோ');
  unicodeValue = unicodeValue.replace(/zho/g, 'ழொ');
  unicodeValue = unicodeValue.replace(/zhai/g, 'ழை');
  unicodeValue = unicodeValue.replace(/zhaee/g, 'ழே');
  unicodeValue = unicodeValue.replace(/zhae/g, 'ழெ');
  unicodeValue = unicodeValue.replace(/zhuu/g, 'ழூ');
  unicodeValue = unicodeValue.replace(/zhu/g, 'ழு');
  unicodeValue = unicodeValue.replace(/zhii/g, 'ழீ');
  unicodeValue = unicodeValue.replace(/zhi/g, 'ழி');
  unicodeValue = unicodeValue.replace(/zhaa/g, 'ழா');
  unicodeValue = unicodeValue.replace(/zha/g, 'ழ');
  unicodeValue = unicodeValue.replace(/zh/g, 'ழ்');

  // z - ழ
  unicodeValue = unicodeValue.replace(/zau/g, 'ழௌ');
  unicodeValue = unicodeValue.replace(/zoo/g, 'ழோ');
  unicodeValue = unicodeValue.replace(/zo/g, 'ழொ');
  unicodeValue = unicodeValue.replace(/zai/g, 'ழை');
  unicodeValue = unicodeValue.replace(/zaee/g, 'ழே');
  unicodeValue = unicodeValue.replace(/zae/g, 'ழெ');
  unicodeValue = unicodeValue.replace(/zuu/g, 'ழூ');
  unicodeValue = unicodeValue.replace(/zu/g, 'ழு');
  unicodeValue = unicodeValue.replace(/zii/g, 'ழீ');
  unicodeValue = unicodeValue.replace(/zi/g, 'ழி');
  unicodeValue = unicodeValue.replace(/zaa/g, 'ழா');
  unicodeValue = unicodeValue.replace(/za/g, 'ழ');
  unicodeValue = unicodeValue.replace(/z/g, 'ழ்');

  // v - வ
  unicodeValue = unicodeValue.replace(/vau/g, 'வௌ');
  unicodeValue = unicodeValue.replace(/voo/g, 'வோ');
  unicodeValue = unicodeValue.replace(/vo/g, 'வொ');
  unicodeValue = unicodeValue.replace(/vai/g, 'வை');
  unicodeValue = unicodeValue.replace(/vaee/g, 'வே');
  unicodeValue = unicodeValue.replace(/vae/g, 'வெ');
  unicodeValue = unicodeValue.replace(/vuu/g, 'வூ');
  unicodeValue = unicodeValue.replace(/vu/g, 'வு');
  unicodeValue = unicodeValue.replace(/vii/g, 'வீ');
  unicodeValue = unicodeValue.replace(/vi/g, 'வி');
  unicodeValue = unicodeValue.replace(/vaa/g, 'வா');
  unicodeValue = unicodeValue.replace(/va/g, 'வ');
  unicodeValue = unicodeValue.replace(/v/g, 'வ்');

  // ட
  unicodeValue = unicodeValue.replace(/tau/g, 'டௌ');
  unicodeValue = unicodeValue.replace(/too/g, 'டோ');
  unicodeValue = unicodeValue.replace(/to/g, 'டொ');
  unicodeValue = unicodeValue.replace(/tai/g, 'டை');
  unicodeValue = unicodeValue.replace(/taee/g, 'டே');
  unicodeValue = unicodeValue.replace(/tae/g, 'டெ');
  unicodeValue = unicodeValue.replace(/tuu/g, 'டூ');
  unicodeValue = unicodeValue.replace(/tu/g, 'டு');
  unicodeValue = unicodeValue.replace(/tii/g, 'டீ');
  unicodeValue = unicodeValue.replace(/ti/g, 'டி');
  unicodeValue = unicodeValue.replace(/taa/g, 'டா');
  unicodeValue = unicodeValue.replace(/ta/g, 'ட');
  unicodeValue = unicodeValue.replace(/t/g, 'ட்');

  // ண
  unicodeValue = unicodeValue.replace(/Nau/g, 'ணௌ');
  unicodeValue = unicodeValue.replace(/Noo/g, 'ணோ');
  unicodeValue = unicodeValue.replace(/No/g, 'ணொ');
  unicodeValue = unicodeValue.replace(/Nai/g, 'ணை');
  unicodeValue = unicodeValue.replace(/Naee/g, 'ணே');
  unicodeValue = unicodeValue.replace(/Nae/g, 'ணெ');
  unicodeValue = unicodeValue.replace(/Nuu/g, 'ணூ');
  unicodeValue = unicodeValue.replace(/Nu/g, 'ணு');
  unicodeValue = unicodeValue.replace(/Nii/g, 'ணீ');
  unicodeValue = unicodeValue.replace(/Ni/g, 'ணி');
  unicodeValue = unicodeValue.replace(/Naa/g, 'ணா');
  unicodeValue = unicodeValue.replace(/Na/g, 'ண');
  unicodeValue = unicodeValue.replace(/N/g, 'ண்');

  // Vowels
  unicodeValue = unicodeValue.replace(/ak/g, 'ஃ');
  unicodeValue = unicodeValue.replace(/au/g, 'ஔ');
  unicodeValue = unicodeValue.replace(/oo/g, 'ஓ');
  unicodeValue = unicodeValue.replace(/o/g, 'ஒ');
  unicodeValue = unicodeValue.replace(/ai/g, 'ஐ');
  unicodeValue = unicodeValue.replace(/aee/g, 'ஏ');
  unicodeValue = unicodeValue.replace(/ae/g, 'எ');
  unicodeValue = unicodeValue.replace(/uu/g, 'ஊ');
  unicodeValue = unicodeValue.replace(/u/g, 'உ');
  unicodeValue = unicodeValue.replace(/ee/g, 'ஈ');
  unicodeValue = unicodeValue.replace(/e/g, 'இ');
  unicodeValue = unicodeValue.replace(/ii/g, 'ஈ');
  unicodeValue = unicodeValue.replace(/i/g, 'இ');
  unicodeValue = unicodeValue.replace(/aa/g, 'ஆ');
  unicodeValue = unicodeValue.replace(/a/g, 'அ');

  // others
  unicodeValue = unicodeValue.replace(/-1000/g, '௲');
  unicodeValue = unicodeValue.replace(/-100/g, '௱');
  unicodeValue = unicodeValue.replace(/-10/g, '௰');
  unicodeValue = unicodeValue.replace(/-1/g, '௧');
  unicodeValue = unicodeValue.replace(/-2/g, '௨');
  unicodeValue = unicodeValue.replace(/-3/g, '௩');
  unicodeValue = unicodeValue.replace(/-4/g, '௪');
  unicodeValue = unicodeValue.replace(/-5/g, '௫');
  unicodeValue = unicodeValue.replace(/-6/g, '௬');
  unicodeValue = unicodeValue.replace(/-7/g, '௭');
  unicodeValue = unicodeValue.replace(/-8/g, '௮');
  unicodeValue = unicodeValue.replace(/-9/g, '௯');

  return unicodeValue;
};

export default tamilUnicodeUtf8Replace;
