export type Locale = "en" | "hi" | "mr";

export type ModuleId =
  | "soil"
  | "irrigation"
  | "weather"
  | "pest"
  | "seed"
  | "fertilizer"
  | "practice"
  | "resources";

type ModuleTranslation = {
  title: string;
  short: string;
  action: string;
};

type Translation = {
  brand: string;
  brandTagline: string;
  greeting: string;
  farmerName: string;
  dateLabel: string;
  location: string;
  useLocation: string;
  locating: string;
  locationDenied: string;
  liveWeather: string;
  mockWeather: string;
  overview: string;
  overviewSubtitle: string;
  modules: string;
  quickActions: string;
  open: string;
  speak: string;
  stop: string;
  listen: string;
  listening: string;
  voiceGuide: string;
  voiceGuideTitle: string;
  voiceGuideBody: string;
  startListening: string;
  stopListening: string;
  voiceNotSupported: string;
  supportedLanguages: string;
  english: string;
  hindi: string;
  marathi: string;
  assistedMode: string;
  assistedModeBody: string;
  online: string;
  offlineReady: string;
  syncPending: string;
  fieldSnapshot: string;
  soilMoisture: string;
  rainfall: string;
  nextTask: string;
  today: string;
  source: string;
  lastUpdated: string;
  confidence: string;
  recommended: string;
  urgent: string;
  stable: string;
  prepare: string;
  savePlan: string;
  saved: string;
  back: string;
  continueLabel: string;
  crop: string;
  cropValue: string;
  acres: string;
  stage: string;
  stageValue: string;
  village: string;
  villageValue: string;
  askForHelp: string;
  callCentre: string;
  audioFallback: string;
  audioFallbackBody: string;
  useThisPlan: string;
  noLandTitle: string;
  offlineBanner: string;
  modulesCount: string;
  guideStep: string;
  guideStepBody: string;
  dataTrust: string;
  dataTrustBody: string;
  rainfallValue: string;
  soilValue: string;
  navLabel: string;
  module: Record<ModuleId, ModuleTranslation>;
};

export const translations: Record<Locale, Translation> = {
  en: {
    brand: "Kisan Saathi",
    brandTagline: "Decisions that grow with you",
    greeting: "Good morning",
    farmerName: "Ramesh",
    dateLabel: "Tuesday, 15 September 2026",
    location: "Nashik, Maharashtra",
    useLocation: "Use my location",
    locating: "Finding your location…",
    locationDenied: "Location unavailable; showing field location",
    liveWeather: "Live weather",
    mockWeather: "Demo weather",
    overview: "Your farm cockpit",
    overviewSubtitle: "Clear next steps for this week, grounded in field data.",
    modules: "Farm workflows",
    quickActions: "Quick actions",
    open: "Open workflow",
    speak: "Read aloud",
    stop: "Stop audio",
    listen: "Speak to fill",
    listening: "Listening…",
    voiceGuide: "Voice guide",
    voiceGuideTitle: "Talk to Kisan Saathi",
    voiceGuideBody: "Tap the microphone and say what you need. You can speak in English, Hindi, or Marathi.",
    startListening: "Start listening",
    stopListening: "Stop listening",
    voiceNotSupported: "Voice input is not available in this browser. You can still use the large, simple forms.",
    supportedLanguages: "Supported languages",
    english: "English",
    hindi: "हिंदी",
    marathi: "मराठी",
    assistedMode: "Assisted mode",
    assistedModeBody: "For CSC operators and family helpers",
    online: "Online",
    offlineReady: "Offline ready",
    syncPending: "Changes sync when you reconnect",
    fieldSnapshot: "Field snapshot",
    soilMoisture: "Soil moisture",
    rainfall: "Rain in next 48 hours",
    nextTask: "Next task",
    today: "Today",
    source: "Source",
    lastUpdated: "Updated 18 min ago",
    confidence: "confidence",
    recommended: "Recommended",
    urgent: "Action needed",
    stable: "On track",
    prepare: "Prepare my plan",
    savePlan: "Save this plan",
    saved: "Plan saved",
    back: "Back to overview",
    continueLabel: "Continue",
    crop: "Crop",
    cropValue: "Onion",
    acres: "Farm size",
    stage: "Growth stage",
    stageValue: "Vegetative · week 4",
    village: "Village",
    villageValue: "Niphad",
    askForHelp: "Need a human expert?",
    callCentre: "Call Kisan Call Centre · 1800-180-1551",
    audioFallback: "Phygital fallback",
    audioFallbackBody: "Save a short audio summary or send the key action by SMS for a family member.",
    useThisPlan: "Use this plan",
    noLandTitle: "Land ownership is optional",
    offlineBanner: "You are offline. Your saved plans are available and new changes will sync later.",
    modulesCount: "8 workflows",
    guideStep: "Step 1 of 3",
    guideStepBody: "Tell us your crop and what you are worried about today.",
    dataTrust: "Evidence-led advice",
    dataTrustBody: "Every recommendation shows its source, timestamp, and confidence so you can decide with trust.",
    rainfallValue: "18 mm expected",
    soilValue: "42% · needs irrigation",
    navLabel: "Main navigation",
    module: {
      soil: { title: "Soil health", short: "See what your soil needs now", action: "Check my soil" },
      irrigation: { title: "Irrigation manager", short: "Water at the right time, not more", action: "Plan watering" },
      weather: { title: "Weather & alerts", short: "Turn forecasts into field actions", action: "View alerts" },
      pest: { title: "Pest detection", short: "Spot crop risk before it spreads", action: "Check a crop photo" },
      seed: { title: "Seed quality", short: "Screen a batch before sowing", action: "Check my seeds" },
      fertilizer: { title: "Fertilizer advice", short: "Balance yield, cost, and runoff", action: "Build nutrient plan" },
      practice: { title: "Practice guide", short: "Follow a crop calendar that adapts", action: "Open crop calendar" },
      resources: { title: "Resource planner", short: "See the season's cash flow", action: "Plan my season" },
    },
  },
  hi: {
    brand: "किसान साथी",
    brandTagline: "आपके साथ बढ़ते फैसले",
    greeting: "सुप्रभात",
    farmerName: "रमेश",
    dateLabel: "मंगलवार, 15 सितंबर 2026",
    location: "नासिक, महाराष्ट्र",
    useLocation: "मेरी लोकेशन लें",
    locating: "आपकी लोकेशन खोज रहे हैं…",
    locationDenied: "लोकेशन नहीं मिली; खेत की लोकेशन दिखाई जा रही है",
    liveWeather: "लाइव मौसम",
    mockWeather: "डेमो मौसम",
    overview: "आपका खेत डैशबोर्ड",
    overviewSubtitle: "इस सप्ताह के स्पष्ट अगले कदम, खेत के डेटा पर आधारित।",
    modules: "खेती के काम",
    quickActions: "झटपट काम",
    open: "काम खोलें",
    speak: "आवाज़ में सुनें",
    stop: "आवाज़ रोकें",
    listen: "बोलकर भरें",
    listening: "सुन रहे हैं…",
    voiceGuide: "आवाज़ मार्गदर्शक",
    voiceGuideTitle: "किसान साथी से बात करें",
    voiceGuideBody: "माइक दबाकर बताइए कि आपको क्या चाहिए। आप हिंदी, मराठी या अंग्रेज़ी में बोल सकते हैं।",
    startListening: "सुनना शुरू करें",
    stopListening: "सुनना रोकें",
    voiceNotSupported: "इस ब्राउज़र में आवाज़ से लिखना उपलब्ध नहीं है। आप बड़े और आसान फॉर्म का उपयोग कर सकते हैं।",
    supportedLanguages: "उपलब्ध भाषाएँ",
    english: "English",
    hindi: "हिंदी",
    marathi: "मराठी",
    assistedMode: "सहायता मोड",
    assistedModeBody: "CSC संचालक और परिवार की मदद के लिए",
    online: "ऑनलाइन",
    offlineReady: "ऑफलाइन तैयार",
    syncPending: "कनेक्शन आते ही बदलाव सुरक्षित होंगे",
    fieldSnapshot: "खेत की स्थिति",
    soilMoisture: "मिट्टी की नमी",
    rainfall: "अगले 48 घंटे की बारिश",
    nextTask: "अगला काम",
    today: "आज",
    source: "स्रोत",
    lastUpdated: "18 मिनट पहले अपडेट",
    confidence: "विश्वास",
    recommended: "सुझाव",
    urgent: "तुरंत काम",
    stable: "ठीक चल रहा है",
    prepare: "मेरी योजना बनाएं",
    savePlan: "योजना सुरक्षित करें",
    saved: "योजना सुरक्षित है",
    back: "डैशबोर्ड पर लौटें",
    continueLabel: "आगे बढ़ें",
    crop: "फसल",
    cropValue: "प्याज़",
    acres: "खेत का आकार",
    stage: "फसल की अवस्था",
    stageValue: "वृद्धि अवस्था · चौथा सप्ताह",
    village: "गाँव",
    villageValue: "निफाड",
    askForHelp: "मानव विशेषज्ञ से बात करें?",
    callCentre: "किसान कॉल सेंटर · 1800-180-1551",
    audioFallback: "ऑडियो और SMS विकल्प",
    audioFallbackBody: "छोटा ऑडियो सारांश सेव करें या मुख्य काम परिवार के सदस्य को SMS करें।",
    useThisPlan: "यह योजना अपनाएं",
    noLandTitle: "ज़मीन का मालिक होना जरूरी नहीं",
    offlineBanner: "आप ऑफलाइन हैं। आपकी सुरक्षित योजनाएँ उपलब्ध हैं और नए बदलाव बाद में जुड़ जाएंगे।",
    modulesCount: "8 काम",
    guideStep: "चरण 1 / 3",
    guideStepBody: "अपनी फसल और आज की चिंता बताइए।",
    dataTrust: "सबूत पर आधारित सलाह",
    dataTrustBody: "हर सलाह के साथ स्रोत, समय और भरोसे का स्तर दिखता है।",
    rainfallValue: "18 मिमी संभावित",
    soilValue: "42% · सिंचाई चाहिए",
    navLabel: "मुख्य नेविगेशन",
    module: {
      soil: { title: "मिट्टी स्वास्थ्य", short: "अभी मिट्टी को क्या चाहिए देखें", action: "मिट्टी जांचें" },
      irrigation: { title: "सिंचाई प्रबंधक", short: "सही समय पर पानी दें, ज्यादा नहीं", action: "सिंचाई योजना" },
      weather: { title: "मौसम और चेतावनी", short: "मौसम को खेत के काम में बदलें", action: "चेतावनी देखें" },
      pest: { title: "कीट पहचान", short: "फैलने से पहले फसल का खतरा जानें", action: "फसल की फोटो जांचें" },
      seed: { title: "बीज गुणवत्ता", short: "बुवाई से पहले बीज की जांच", action: "बीज जांचें" },
      fertilizer: { title: "खाद सलाह", short: "उपज, लागत और बहाव का संतुलन", action: "पोषण योजना" },
      practice: { title: "खेती मार्गदर्शक", short: "बदलती फसल समय-सारणी अपनाएं", action: "फसल कैलेंडर" },
      resources: { title: "संसाधन योजना", short: "पूरे मौसम का खर्च देखें", action: "मौसम योजना" },
    },
  },
  mr: {
    brand: "किसान साथी",
    brandTagline: "तुमच्यासोबत वाढणारे निर्णय",
    greeting: "शुभ सकाळ",
    farmerName: "रमेश",
    dateLabel: "मंगळवार, १५ सप्टेंबर २०२६",
    location: "नाशिक, महाराष्ट्र",
    useLocation: "माझे लोकेशन वापरा",
    locating: "तुमचे लोकेशन शोधत आहे…",
    locationDenied: "लोकेशन उपलब्ध नाही; शेताचे लोकेशन दाखवत आहे",
    liveWeather: "थेट हवामान",
    mockWeather: "डेमो हवामान",
    overview: "तुमचा शेत डॅशबोर्ड",
    overviewSubtitle: "शेताच्या माहितीवर आधारित या आठवड्यातील पुढची स्पष्ट पावले.",
    modules: "शेतीची कामे",
    quickActions: "जलद कामे",
    open: "काम उघडा",
    speak: "मोठ्याने ऐका",
    stop: "आवाज थांबवा",
    listen: "बोलून भरा",
    listening: "ऐकत आहे…",
    voiceGuide: "आवाज मार्गदर्शक",
    voiceGuideTitle: "किसान साथीशी बोला",
    voiceGuideBody: "माइक दाबून तुम्हाला काय हवे ते सांगा. तुम्ही मराठी, हिंदी किंवा इंग्रजीत बोलू शकता.",
    startListening: "ऐकणे सुरू करा",
    stopListening: "ऐकणे थांबवा",
    voiceNotSupported: "या ब्राउझरमध्ये आवाजातून लिहिणे उपलब्ध नाही. मोठे आणि सोपे फॉर्म वापरू शकता.",
    supportedLanguages: "समर्थित भाषा",
    english: "English",
    hindi: "हिंदी",
    marathi: "मराठी",
    assistedMode: "मदत मोड",
    assistedModeBody: "CSC ऑपरेटर आणि कुटुंबाच्या मदतीसाठी",
    online: "ऑनलाइन",
    offlineReady: "ऑफलाइन तयार",
    syncPending: "कनेक्शन आल्यावर बदल जतन होतील",
    fieldSnapshot: "शेताची स्थिती",
    soilMoisture: "मातीतील ओलावा",
    rainfall: "पुढील ४८ तासांचा पाऊस",
    nextTask: "पुढचे काम",
    today: "आज",
    source: "स्रोत",
    lastUpdated: "१८ मिनिटांपूर्वी अपडेट",
    confidence: "विश्वास",
    recommended: "शिफारस",
    urgent: "तातडीचे काम",
    stable: "योग्य मार्गावर",
    prepare: "माझी योजना तयार करा",
    savePlan: "ही योजना जतन करा",
    saved: "योजना जतन झाली",
    back: "डॅशबोर्डवर परत",
    continueLabel: "पुढे चला",
    crop: "पीक",
    cropValue: "कांदा",
    acres: "शेताचा आकार",
    stage: "पिकाची अवस्था",
    stageValue: "वाढीची अवस्था · चौथा आठवडा",
    village: "गाव",
    villageValue: "निफाड",
    askForHelp: "मानवी तज्ज्ञाशी बोलायचे?",
    callCentre: "किसान कॉल सेंटर · 1800-180-1551",
    audioFallback: "ऑडिओ आणि SMS पर्याय",
    audioFallbackBody: "छोटा ऑडिओ सारांश जतन करा किंवा मुख्य काम कुटुंबातील सदस्याला SMS करा.",
    useThisPlan: "ही योजना वापरा",
    noLandTitle: "जमिनीची मालकी आवश्यक नाही",
    offlineBanner: "तुम्ही ऑफलाइन आहात. जतन केलेल्या योजना उपलब्ध आहेत आणि नवीन बदल नंतर जोडले जातील.",
    modulesCount: "८ कामे",
    guideStep: "पायरी १ / ३",
    guideStepBody: "तुमचे पीक आणि आजची चिंता सांगा.",
    dataTrust: "पुराव्यावर आधारित सल्ला",
    dataTrustBody: "प्रत्येक सल्ल्यासोबत स्रोत, वेळ आणि विश्वासाची पातळी दाखवली जाते.",
    rainfallValue: "१८ मिमी अपेक्षित",
    soilValue: "४२% · सिंचन आवश्यक",
    navLabel: "मुख्य नेव्हिगेशन",
    module: {
      soil: { title: "मातीचे आरोग्य", short: "आत्ता मातीला काय हवे ते पाहा", action: "माती तपासा" },
      irrigation: { title: "सिंचन व्यवस्थापक", short: "योग्य वेळी पाणी द्या, जास्त नाही", action: "सिंचन योजना" },
      weather: { title: "हवामान व इशारे", short: "हवामानाचे शेतातील कृतीत रूपांतर", action: "इशारे पाहा" },
      pest: { title: "कीड ओळख", short: "पसरायच्या आधी पिकाचा धोका जाणून घ्या", action: "पिकाचा फोटो तपासा" },
      seed: { title: "बियाणे गुणवत्ता", short: "पेरणीपूर्वी बियाणे तपासा", action: "बियाणे तपासा" },
      fertilizer: { title: "खत सल्ला", short: "उत्पन्न, खर्च आणि वाहून जाणे यांचा समतोल", action: "पोषण योजना" },
      practice: { title: "शेती मार्गदर्शक", short: "बदलणारे पीक कॅलेंडर वापरा", action: "पीक कॅलेंडर" },
      resources: { title: "संसाधन योजना", short: "हंगामाचा संपूर्ण खर्च पाहा", action: "हंगामाची योजना" },
    },
  },
};

export type TranslationKey = keyof Translation;

export function getTranslation(locale: Locale) {
  return translations[locale];
}

export const localeSpeechCodes: Record<Locale, string> = {
  en: "en-IN",
  hi: "hi-IN",
  mr: "mr-IN",
};

export const moduleIds: ModuleId[] = [
  "soil",
  "irrigation",
  "weather",
  "pest",
  "seed",
  "fertilizer",
  "practice",
  "resources",
];

export const moduleColors: Record<ModuleId, string> = {
  soil: "sage",
  irrigation: "blue",
  weather: "amber",
  pest: "rose",
  seed: "violet",
  fertilizer: "orange",
  practice: "teal",
  resources: "slate",
};
