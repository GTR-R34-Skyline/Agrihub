import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  common: {
    appName: 'AgriHub',
    tagline: 'Empowering Indian Farmers',
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    search: 'Search',
    filters: 'Filters',
    viewAll: 'View All',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    cancel: 'Cancel',
    save: 'Save',
    loading: 'Loading...',
    error: 'Something went wrong',
    success: 'Success!',
    organic: 'Organic',
    verified: 'Verified',
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    rupee: '₹',
  },
  nav: {
    home: 'Home',
    marketplace: 'Marketplace',
    advisory: 'Advisory',
    diagnostics: 'Diagnostics',
    community: 'Community',
    about: 'About Us',
    account: 'Account',
  },
  hero: {
    badge: "भारत की कृषि क्रांति",
    title: "India's Agri Revolution",
    subtitle: 'Connecting Farmers, Buyers & Experts',
    description: 'The trusted digital platform transforming Indian agriculture. Buy fresh produce, get expert advice, and join a community of 10 lakh+ farmers.',
    cta: 'Explore Marketplace',
    ctaSecondary: 'Join as Farmer',
    stats: {
      farmers: 'Active Farmers',
      products: 'Products Listed',
      states: 'States Covered',
      transactions: 'Monthly Transactions',
    },
  },
  auth: {
    welcomeBack: 'Welcome back',
    createAccount: 'Create your account',
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    phone: 'Phone Number',
    location: 'Location',
    role: 'I am a',
    farmer: 'Farmer',
    buyer: 'Buyer',
    agronomist: 'Agronomist',
    farmerDesc: 'Sell your produce and get expert advice',
    buyerDesc: 'Purchase fresh agricultural products',
    agronomistDesc: 'Provide expert advisory services',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    signIn: 'Sign In',
    createAccountBtn: 'Create Account',
    orContinueWith: 'or continue with',
    noAccount: "Don't have an account?",
    haveAccount: 'Already have an account?',
    signUpNow: 'Sign up',
    signInNow: 'Sign in',
    growWithUs: 'Grow with AgriHub',
    joinCommunity: 'Join our community of farmers, buyers, and agricultural experts. Together, we\'re building a more connected and sustainable farming future for India.',
  },
  marketplace: {
    title: 'Marketplace',
    subtitle: 'Discover premium agricultural products from verified Indian farmers — from Kashmir to Kanyakumari.',
    searchPlaceholder: 'Search for Darjeeling tea, Kashmiri saffron, Basmati rice...',
    allProducts: 'All Products',
    showing: 'Showing',
    products: 'products',
    fromIndia: 'from across India',
    perUnit: 'per',
    viewDetails: 'View Details',
  },
  categories: {
    grains: 'Grains & Cereals',
    vegetables: 'Vegetables',
    fruits: 'Fruits',
    dairy: 'Dairy Products',
    livestock: 'Livestock',
    poultry: 'Poultry',
    seeds: 'Seeds & Seedlings',
    equipment: 'Farm Equipment',
    fertilizers: 'Fertilizers',
    organic: 'Organic Products',
    spices: 'Spices',
    beverages: 'Beverages',
    pulses: 'Pulses',
    oils: 'Oils',
  },
  founders: {
    badge: 'About AgriHub',
    title: 'Building the Future of',
    titleHighlight: 'Indian Agriculture',
    subtitle: 'We started AgriHub with a simple belief: technology should empower farmers, not complicate their lives.',
    ourStory: 'Our Story',
    ourValues: 'Our Values',
    meetFounders: 'Meet the Founders',
    mentorship: 'Under the guidance of',
  },
};

// Hindi translations (partial - can be expanded)
const hiTranslations = {
  common: {
    appName: 'एग्रीहब',
    tagline: 'भारतीय किसानों को सशक्त बनाना',
    login: 'लॉग इन',
    signup: 'साइन अप',
    logout: 'लॉग आउट',
    search: 'खोजें',
    filters: 'फ़िल्टर',
    viewAll: 'सभी देखें',
    learnMore: 'और जानें',
    getStarted: 'शुरू करें',
    organic: 'जैविक',
    verified: 'सत्यापित',
    addToCart: 'कार्ट में डालें',
    buyNow: 'अभी खरीदें',
    rupee: '₹',
  },
  nav: {
    home: 'होम',
    marketplace: 'बाज़ार',
    advisory: 'सलाह',
    diagnostics: 'निदान',
    community: 'समुदाय',
    about: 'हमारे बारे में',
    account: 'खाता',
  },
  hero: {
    badge: "भारत की कृषि क्रांति",
    title: "भारत की कृषि क्रांति",
    subtitle: 'किसानों, खरीदारों और विशेषज्ञों को जोड़ना',
    description: 'भारतीय कृषि को बदलने वाला विश्वसनीय डिजिटल प्लेटफॉर्म। ताजा उत्पाद खरीदें, विशेषज्ञ सलाह लें।',
    cta: 'बाज़ार देखें',
    ctaSecondary: 'किसान के रूप में जुड़ें',
  },
};

// Tamil translations (partial - can be expanded)
const taTranslations = {
  common: {
    appName: 'அக்ரிஹப்',
    tagline: 'இந்திய விவசாயிகளை மேம்படுத்துதல்',
    login: 'உள்நுழை',
    signup: 'பதிவு செய்',
    search: 'தேடு',
  },
  nav: {
    home: 'முகப்பு',
    marketplace: 'சந்தை',
  },
};

// Telugu translations (partial - can be expanded)
const teTranslations = {
  common: {
    appName: 'అగ్రిహబ్',
    tagline: 'భారత రైతులను శక్తివంతం చేయడం',
    login: 'లాగిన్',
    signup: 'సైన్ అప్',
    search: 'వెతకండి',
  },
  nav: {
    home: 'హోమ్',
    marketplace: 'మార్కెట్',
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      hi: { translation: hiTranslations },
      ta: { translation: taTranslations },
      te: { translation: teTranslations },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
];
