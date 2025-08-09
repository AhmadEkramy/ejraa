// Global Variables
let currentLanguage = 'en';
let currentTheme = 'light';
let selectedPackage = null;

// Language and Theme Data
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'About': 'About',
        'Payment Methods': 'Payment Methods',
        'Questions': 'Questions',
        'Contact': 'Contact',
        
        // Hero Section
        'Ejraa — Your Trusted Partner in Medical Licensing & Taxes': 'Ejraa — Your Trusted Partner in Medical Licensing & Taxes',
        'Providing comprehensive legal services for doctors and clinics since 2015.': 'Providing comprehensive legal services for doctors and clinics since 2015.',
        'Choose Your Package': 'Choose Your Package',
        'Contact Us': 'Contact Us',
        
        // Packages
        'Our Services & Packages': 'Our Services & Packages',
        'Choose the perfect package for your medical practice': 'Choose the perfect package for your medical practice',
        
        // Sub-services
        'Sub-services': 'Sub-services',
        'Additional services to complement your medical practice': 'Additional services to complement your medical practice',
        'Contracts': 'Contracts',
        'Professional contract drafting and legal documentation services for medical practices and partnerships.': 'Professional contract drafting and legal documentation services for medical practices and partnerships.',
        'Contract Drafting': 'Contract Drafting',
        'Legal Review': 'Legal Review',
        'Partnership Agreements': 'Partnership Agreements',
        'Employment Contracts': 'Employment Contracts',
        'Extracting a Professional License': 'Extracting a Professional License',
        'Complete assistance in obtaining professional medical licenses and certifications from relevant authorities.': 'Complete assistance in obtaining professional medical licenses and certifications from relevant authorities.',
        'License Application': 'License Application',
        'Document Preparation': 'Document Preparation',
        'Authority Coordination': 'Authority Coordination',
        'Follow-up Services': 'Follow-up Services',
        'Learn More': 'Learn More',
        'Private Clinic': 'Private Clinic',
        'Polyclinic': 'Polyclinic',
        'Medical Center': 'Medical Center',
        'Tax File for Doctor': 'Tax File for Doctor',
        'Tax File for Company': 'Tax File for Company',
        'Laser Device License': 'Laser Device License',
        'Select Package': 'Select Package',
        'Popular': 'Popular',
        'Add-on': 'Add-on',
        
        // About
        'About Ejraa': 'About Ejraa',
        'We are Ejraa, specialized in the medical field for 8 years, working on legal procedures to regularize doctors\' statuses in licensing, taxes, insurance, contracts, and other dealings.': 'We are Ejraa, specialized in the medical field for 8 years, working on legal procedures to regularize doctors\' statuses in licensing, taxes, insurance, contracts, and other dealings.',
        'Years of Experience': 'Years of Experience',
        'Satisfied Clients': 'Satisfied Clients',
        'Success Rate': 'Success Rate',
        
        // Payment
        'Payment Methods': 'Payment Methods',
        'Flexible Payment Plan': 'Flexible Payment Plan',
        'of the total amount is paid upon document receipt': 'of the total amount is paid upon document receipt',
        'upon file completion and upload to the treatment system': 'upon file completion and upload to the treatment system',
        'after the treatment inspection is complete': 'after the treatment inspection is complete',
        
        // FAQ
        'Frequently Asked Questions': 'Frequently Asked Questions',
        
        // Contact
        'Get in touch with our experts today': 'Get in touch with our experts today',
        'Full Name': 'Full Name',
        'Phone Number': 'Phone Number',
        'Email Address': 'Email Address',
        'Service Type': 'Service Type',
        'Message': 'Message',
        'Send Message': 'Send Message',
        'Phone': 'Phone',
        'Email': 'Email',
        'Address': 'Address',
        'Cairo, Egypt': 'Cairo, Egypt',
        
        // Footer
        '© 2024 Ejraa. All rights reserved.': '© 2024 Ejraa. All rights reserved.',
        
        // Modal
        'Medical Specialty': 'Medical Specialty',
        'Number of Specialties': 'Number of Specialties',
        'Select number': 'Select number',
        '2 Specialties': '2 Specialties',
        '3 Specialties': '3 Specialties',
        '4 Specialties': '4 Specialties',
        '5 Specialties': '5 Specialties',
        'Number of Beds': 'Number of Beds',
        'Number of Operating Rooms': 'Number of Operating Rooms',
        'Number of Accommodation Rooms': 'Number of Accommodation Rooms',
        'Number of Intensive Care Rooms': 'Number of Intensive Care Rooms',
        'Company Type': 'Company Type',
        'Select company type': 'Select company type',
        'Limited Liability Company': 'Limited Liability Company',
        'Joint Stock Company': 'Joint Stock Company',
        'Partnership Company': 'Partnership Company',
        'Sole Proprietorship': 'Sole Proprietorship',
        'Capital': 'Capital',
        'Company Area': 'Company Area',
        'License Type': 'License Type',
        'Select license type': 'Select license type',
        'New License': 'New License',
        'License Renewal': 'License Renewal',
        'License Transfer': 'License Transfer',
        'Clinic/Center Address': 'Clinic/Center Address',
        'Additional Notes': 'Additional Notes',
        'Close': 'Close',
        'Send to WhatsApp': 'Send to WhatsApp',
        'Export as PDF': 'Export as PDF',
        
        // Package Features
        'Medical Practice License': 'Medical Practice License',
        'Professional ID Card': 'Professional ID Card',
        'Legal Documentation': 'Legal Documentation',
        '2-5 Specialties': '2-5 Specialties',
        'Advanced Licensing': 'Advanced Licensing',
        'Complete Documentation': 'Complete Documentation',
        'One Specialty': 'One Specialty',
        'Comprehensive Services': 'Comprehensive Services',
        'Full Legal Support': 'Full Legal Support',
        'Tax Registration': 'Tax Registration',
        'Compliance Documentation': 'Compliance Documentation',
        'Expert Guidance': 'Expert Guidance',
        'Corporate Tax Setup': 'Corporate Tax Setup',
        'Legal Compliance': 'Legal Compliance',
        'Professional Support': 'Professional Support',
        'Device Registration': 'Device Registration',
        'Safety Compliance': 'Safety Compliance',
        'Operation License': 'Operation License'
    },
    ar: {
        // Navigation
        'Home': 'الرئيسية',
        'About': 'عن الشركة',
        'Payment Methods': 'طرق الدفع',
        'Questions': 'الأسئلة',
        'Contact': 'تواصل معنا',
        
        // Hero Section
        'Ejraa — Your Trusted Partner in Medical Licensing & Taxes': 'إجراء – شريكك الموثوق في التراخيص الطبية والضرائب',
        'Providing comprehensive legal services for doctors and clinics since 2015.': 'نقدم خدمات قانونية شاملة للأطباء والعيادات منذ عام 2015.',
        'Choose Your Package': 'اختر باقتك',
        'Contact Us': 'تواصل معنا',
        
        // Packages
        'Our Services & Packages': 'خدماتنا وباقاتنا',
        'Choose the perfect package for your medical practice': 'اختر الباقة المثالية لممارستك الطبية',
        
        // Sub-services
        'Sub-services': 'خدمات تكميلية',
        'Additional services to complement your medical practice': 'خدمات إضافية لتكملة ممارستك الطبية',
        'Contracts': 'التعاقدات',
        'Professional contract drafting and legal documentation services for medical practices and partnerships.': 'خدمات صياغة العقود المهنية والوثائق القانونية للممارسات الطبية والشراكات.',
        'Contract Drafting': 'صياغة العقود',
        'Legal Review': 'المراجعة القانونية',
        'Partnership Agreements': 'اتفاقيات الشراكة',
        'Employment Contracts': 'عقود العمل',
        'Extracting a Professional License': 'استخراج الترخيص المهني',
        'Complete assistance in obtaining professional medical licenses and certifications from relevant authorities.': 'مساعدة كاملة في الحصول على التراخيص والشهادات الطبية المهنية من السلطات المختصة.',
        'License Application': 'طلب الترخيص',
        'Document Preparation': 'إعداد الوثائق',
        'Authority Coordination': 'التنسيق مع السلطات',
        'Follow-up Services': 'خدمات المتابعة',
        'Learn More': 'اعرف أكثر',
        'Private Clinic': 'العيادة الخاصة',
        'Polyclinic': 'العيادات المتخصصة',
        'Medical Center': 'المركز الطبي',
        'Tax File for Doctor': 'الملف الضريبي للطبيب',
        'Tax File for Company': 'الملف الضريبي للشركة',
        'Laser Device License': 'ترخيص جهاز الليزر',
        'Select Package': 'اختر الباقة',
        'Popular': 'الأكثر طلباً',
        'Add-on': 'إضافة',
        
        // About
        'About Ejraa': 'عن إجراء',
        'We are Ejraa, specialized in the medical field for 8 years, working on legal procedures to regularize doctors\' statuses in licensing, taxes, insurance, contracts, and other dealings.': 'نحن شركة إجراء، متخصصون في المجال الطبي منذ 8 سنوات، نعمل على الإجراءات القانونية لتنظيم أوضاع الأطباء في التراخيص والضرائب والتأمين والعقود والتعاملات الأخرى.',
        'Years of Experience': 'سنوات من الخبرة',
        'Satisfied Clients': 'عميل راضٍ',
        'Success Rate': 'معدل النجاح',
        
        // Payment
        'Payment Methods': 'طرق الدفع',
        'Flexible Payment Plan': 'خطة دفع مرنة',
        'of the total amount is paid upon document receipt': 'من إجمالي المبلغ يُدفع عند استلام الوثائق',
        'upon file completion and upload to the treatment system': 'عند اكتمال الملف ورفعه لنظام العلاج',
        'after the treatment inspection is complete': 'بعد اكتمال تفتيش العلاج',
        
        // FAQ
        'Frequently Asked Questions': 'الأسئلة الشائعة',
        
        // Contact
        'Get in touch with our experts today': 'تواصل مع خبرائنا اليوم',
        'Full Name': 'الاسم الكامل',
        'Phone Number': 'رقم الهاتف',
        'Email Address': 'البريد الإلكتروني',
        'Service Type': 'نوع الخدمة',
        'Message': 'الرسالة',
        'Send Message': 'أرسل الرسالة',
        'Phone': 'الهاتف',
        'Email': 'البريد الإلكتروني',
        'Address': 'العنوان',
        'Cairo, Egypt': 'القاهرة، مصر',
        
        // Footer
        '© 2024 Ejraa. All rights reserved.': '© 2024 إجراء. جميع الحقوق محفوظة.',
        
        // Modal
        'Medical Specialty': 'التخصص الطبي',
        'Number of Specialties': 'عدد التخصصات',
        'Select number': 'اختر العدد',
        '2 Specialties': 'تخصصان',
        '3 Specialties': '3 تخصصات',
        '4 Specialties': '4 تخصصات',
        '5 Specialties': '5 تخصصات',
        'Number of Beds': 'عدد الأسرة',
        'Number of Operating Rooms': 'عدد غرف العمليات',
        'Number of Accommodation Rooms': 'عدد غرف الإقامة',
        'Number of Intensive Care Rooms': 'عدد غرف العناية المركزة',
        'Company Type': 'نوع الشركة',
        'Select company type': 'اختر نوع الشركة',
        'Limited Liability Company': 'شركة ذات مسئولية محدودة',
        'Joint Stock Company': 'شركة مساهمة',
        'Partnership Company': 'شركة تضامن',
        'Sole Proprietorship': 'مؤسسة فردية',
        'Capital': 'رأس المال',
        'Company Area': 'المنطقة التابع ليها الشركة',
        'License Type': 'نوع الترخيص',
        'Select license type': 'اختر نوع الترخيص',
        'New License': 'ترخيص جديد',
        'License Renewal': 'تجديد ترخيص',
        'License Transfer': 'نقل ترخيص',
        'Clinic/Center Address': 'عنوان العيادة/المركز',
        'Additional Notes': 'ملاحظات إضافية',
        'Close': 'إغلاق',
        'Send to WhatsApp': 'أرسل للواتساب',
        'Export as PDF': 'تصدير كـ PDF',
        
        // Package Features
        'Medical Practice License': 'ترخيص مزاولة المهنة',
        'Professional ID Card': 'بطاقة الهوية المهنية',
        'Legal Documentation': 'الوثائق القانونية',
        '2-5 Specialties': '2-5 تخصصات',
        'Advanced Licensing': 'التراخيص المتقدمة',
        'Complete Documentation': 'الوثائق الكاملة',
        'One Specialty': 'تخصص واحد فقط',
        'Comprehensive Services': 'خدمات شاملة',
        'Full Legal Support': 'دعم قانوني كامل',
        'Tax Registration': 'التسجيل الضريبي',
        'Compliance Documentation': 'وثائق الامتثال',
        'Expert Guidance': 'الإرشاد المتخصص',
        'Corporate Tax Setup': 'إعداد ضرائب الشركات',
        'Legal Compliance': 'الامتثال القانوني',
        'Professional Support': 'الدعم المتخصص',
        'Device Registration': 'تسجيل الجهاز',
        'Safety Compliance': 'امتثال السلامة',
        'Operation License': 'ترخيص التشغيل'
    }
};

const packageDescriptions = {
    en: {
        'private-clinic': 'Complete licensing package for individual private clinics including medical practice license, professional ID card, and all necessary legal documentation.',
        'specialized-clinic': 'Comprehensive licensing for polyclinics covering 2-5 medical specialties (excluding dentistry, lab, and radiology) with advanced licensing procedures.',
        'medical-center': 'Full-service licensing for multi-specialty medical centers with comprehensive services and complete legal support.',
        'tax-doctor': 'Complete tax registration and compliance documentation for individual doctors with expert guidance.',
        'tax-company': 'Corporate tax setup and legal compliance services for medical companies with professional support.',
        'laser-addon': 'Additional licensing for laser devices including device registration, safety compliance, and operation permits.'
    },
    ar: {
        'private-clinic': 'باقة ترخيص كاملة للعيادات الخاصة الفردية تشمل ترخيص مزاولة المهنة وبطاقة الهوية المهنية وجميع الوثائق القانونية اللازمة.',
        'specialized-clinic': 'ترخيص شامل للعيادات المتخصصة يغطي 2-5 تخصصات طبية (باستثناء طب الأسنان ومعمل التحليل والأشعة) مع إجراءات ترخيص متقدمة.',
        'medical-center': 'ترخيص شامل للمراكز الطبية متعددة التخصصات مع خدمات شاملة ودعم قانوني كامل.',
        'tax-doctor': 'التسجيل الضريبي الكامل ووثائق الامتثال للأطباء الأفراد مع الإرشاد المتخصص.',
        'tax-company': 'إعداد الضرائب الشركات وخدمات الامتثال القانوني للشركات الطبية مع الدعم المتخصص.',
        'laser-addon': 'ترخيص إضافي لأجهزة الليزر يشمل تسجيل الجهاز وامتثال السلامة وتصاريح التشغيل.'
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    setupScrollAnimations();
    setupSmoothScrolling();
});

// Initialize Application
function initializeApp() {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    setTheme(savedTheme);
    setLanguage(savedLanguage);
    
    // Initialize animations
    setTimeout(addScrollAnimations, 100);
}

// Setup Event Listeners
function setupEventListeners() {
    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleTheme);
    }
    
    // Package Modal Setup
    const packageModal = document.getElementById('packageModal');
    if (packageModal) {
        packageModal.addEventListener('show.bs.modal', function(event) {
            setupPackageModal(event.relatedTarget);
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Window resize handler
    window.addEventListener('resize', debounce(handleWindowResize, 250));
}

// Language Functions
function toggleLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
}

function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('language', language);
    
    const html = document.documentElement;
    const langText = document.getElementById('langText');
    
    if (language === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        if (langText) langText.textContent = 'English';
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        if (langText) langText.textContent = 'عربي';
    }
    
    updateAllText();
}

function updateAllText() {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const key = element.getAttribute(`data-${currentLanguage}`);
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        } else {
            element.textContent = key;
        }
    });
    
    // Update select options
    const selectOptions = document.querySelectorAll('option[data-en][data-ar]');
    selectOptions.forEach(option => {
        const key = option.getAttribute(`data-${currentLanguage}`);
        option.textContent = translations[currentLanguage][key] || key;
    });
}

// Theme Functions
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    const body = document.body;
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        if (darkModeIcon) {
            darkModeIcon.className = 'fas fa-sun';
        }
    } else {
        body.removeAttribute('data-theme');
        if (darkModeIcon) {
            darkModeIcon.className = 'fas fa-moon';
        }
    }
}

// Package Modal Functions
function setupPackageModal(triggerElement) {
    const packageType = triggerElement.getAttribute('data-package');
    const titleKey = triggerElement.getAttribute(`data-title-${currentLanguage}`);
    const priceKey = triggerElement.getAttribute(`data-price-${currentLanguage}`);
    
    selectedPackage = {
        type: packageType,
        title: titleKey,
        price: priceKey
    };
    
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const specialtiesCountField = document.getElementById('specialtiesCountField');
    
    // Medical Center specific fields
    const medicalCenterFields = document.getElementById('medicalCenterFields');
    const operatingRoomsField = document.getElementById('operatingRoomsField');
    const accommodationRoomsField = document.getElementById('accommodationRoomsField');
    const intensiveCareRoomsField = document.getElementById('intensiveCareRoomsField');
    
    // Tax Company specific fields
    const companyTypeField = document.getElementById('companyTypeField');
    const capitalField = document.getElementById('capitalField');
    const companyAreaField = document.getElementById('companyAreaField');
    
    if (modalTitle) modalTitle.textContent = titleKey;
    if (modalPrice) modalPrice.textContent = priceKey;
    if (modalDescription) {
        modalDescription.textContent = packageDescriptions[currentLanguage][packageType] || '';
    }
    
    // Show/hide specialties count field based on package type
    if (specialtiesCountField) {
        if (packageType === 'specialized-clinic') {
            specialtiesCountField.style.display = 'block';
            // Make it required for polyclinic
            const specialtiesSelect = specialtiesCountField.querySelector('select');
            if (specialtiesSelect) {
                specialtiesSelect.setAttribute('required', 'required');
            }
        } else {
            specialtiesCountField.style.display = 'none';
            // Remove required attribute for other packages
            const specialtiesSelect = specialtiesCountField.querySelector('select');
            if (specialtiesSelect) {
                specialtiesSelect.removeAttribute('required');
                specialtiesSelect.value = ''; // Clear the value
            }
        }
    }
    
    // Show/hide medical center fields based on package type
    const medicalCenterFieldsList = [medicalCenterFields, operatingRoomsField, accommodationRoomsField, intensiveCareRoomsField];
    
    medicalCenterFieldsList.forEach(field => {
        if (field) {
            if (packageType === 'medical-center') {
                field.style.display = 'block';
            } else {
                field.style.display = 'none';
                // Clear the values when hiding
                const input = field.querySelector('input');
                if (input) {
                    input.value = '';
                }
            }
        }
    });
    
    // Show/hide tax company fields based on package type
    const taxCompanyFieldsList = [companyTypeField, capitalField, companyAreaField];
    
    taxCompanyFieldsList.forEach(field => {
        if (field) {
            if (packageType === 'tax-company') {
                field.style.display = 'block';
            } else {
                field.style.display = 'none';
                // Clear the values when hiding
                const input = field.querySelector('input');
                const select = field.querySelector('select');
                if (input) {
                    input.value = '';
                }
                if (select) {
                    select.value = '';
                }
            }
        }
    });
}

// WhatsApp Integration for Package Modal
function sendToWhatsApp() {
    const form = document.getElementById('packageForm');
    const formData = new FormData(form);
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const message = generateWhatsAppMessage(formData);
    console.log('Generated message:', message); // Debug log
    console.log('Selected package:', selectedPackage); // Debug log
    
    const whatsappNumber = '201094543689'; // Replace with actual number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
}

function generateWhatsAppMessage(formData) {
    const data = Object.fromEntries(formData.entries());
    
    // Get package title safely
    const packageTitle = selectedPackage && selectedPackage.title ? selectedPackage.title : 
                        (currentLanguage === 'ar' ? 'الخدمة المطلوبة' : 'Requested Service');
    
    let message = currentLanguage === 'ar' 
        ? `مرحباً، أود الاستفسار عن باقة ${packageTitle}\n\n`
        : `Hello, I would like to inquire about the ${packageTitle} package\n\n`;
    
    message += currentLanguage === 'ar' ? '📋 *بياناتي:*\n' : '📋 *My Details:*\n';
    message += `📝 ${currentLanguage === 'ar' ? 'الاسم' : 'Name'}: ${data.fullName || 'N/A'}\n`;
    message += `📞 ${currentLanguage === 'ar' ? 'الهاتف' : 'Phone'}: ${data.phone || 'N/A'}\n`;
    message += `📧 ${currentLanguage === 'ar' ? 'البريد الإلكتروني' : 'Email'}: ${data.email || 'N/A'}\n`;
    message += `🏥 ${currentLanguage === 'ar' ? 'التخصص' : 'Specialty'}: ${data.specialty || 'N/A'}\n`;
    
    // Add specialties count for polyclinic
    if (selectedPackage && selectedPackage.type === 'specialized-clinic' && data.specialtiesCount) {
        message += `🔢 ${currentLanguage === 'ar' ? 'عدد التخصصات' : 'Number of Specialties'}: ${data.specialtiesCount}\n`;
    }
    
    // Add medical center specific fields
    if (selectedPackage && selectedPackage.type === 'medical-center') {
        if (data.numberOfBeds) {
            message += `🛏️ ${currentLanguage === 'ar' ? 'عدد الأسرة' : 'Number of Beds'}: ${data.numberOfBeds}\n`;
        }
        if (data.operatingRooms) {
            message += `🏥 ${currentLanguage === 'ar' ? 'عدد غرف العمليات' : 'Number of Operating Rooms'}: ${data.operatingRooms}\n`;
        }
        if (data.accommodationRooms) {
            message += `🏨 ${currentLanguage === 'ar' ? 'عدد غرف الإقامة' : 'Number of Accommodation Rooms'}: ${data.accommodationRooms}\n`;
        }
        if (data.intensiveCareRooms) {
            message += `🚨 ${currentLanguage === 'ar' ? 'عدد غرف العناية المركزة' : 'Number of Intensive Care Rooms'}: ${data.intensiveCareRooms}\n`;
        }
    }
    
    // Add tax company specific fields
    if (selectedPackage && selectedPackage.type === 'tax-company') {
        if (data.companyType) {
            message += `🏢 ${currentLanguage === 'ar' ? 'نوع الشركة' : 'Company Type'}: ${getCompanyTypeLabel(data.companyType)}\n`;
        }
        if (data.capital) {
            message += `💰 ${currentLanguage === 'ar' ? 'رأس المال' : 'Capital'}: ${data.capital}\n`;
        }
        if (data.companyArea) {
            message += `📍 ${currentLanguage === 'ar' ? 'المنطقة التابع ليها الشركة' : 'Company Area'}: ${data.companyArea}\n`;
        }
    }
    
    message += `📋 ${currentLanguage === 'ar' ? 'نوع الترخيص' : 'License Type'}: ${data.licenseType || 'N/A'}\n`;
    message += `📍 ${currentLanguage === 'ar' ? 'العنوان' : 'Address'}: ${data.address || 'N/A'}\n`;
    
    if (data.notes && data.notes.trim()) {
        message += `\n💬 ${currentLanguage === 'ar' ? 'ملاحظات إضافية' : 'Additional Notes'}: ${data.notes}\n`;
    }
    
    message += `\n${currentLanguage === 'ar' ? 'شكراً لكم!' : 'Thank you!'}`;
    
    return message;
}

// PDF Export
function exportToPDF() {
    const form = document.getElementById('packageForm');
    const formData = new FormData(form);
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    if (currentLanguage === 'ar') {
        // For Arabic, use HTML to PDF approach
        exportArabicToPDF(formData);
    } else {
        // For English, use jsPDF
        exportEnglishToPDF(formData);
    }
}

function exportEnglishToPDF(formData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    let yPosition = 20;
    
    // Title
    doc.setFontSize(18);
    doc.text(selectedPackage.title || 'Package Details', 20, yPosition);
    yPosition += 15;
    
    // Package info
    doc.setFontSize(12);
    doc.text(`Price: ${selectedPackage.price || 'N/A'}`, 20, yPosition);
    yPosition += 10;
    
    // Form data
    const data = Object.fromEntries(formData.entries());
    const fields = [
        { key: 'fullName', label: 'Full Name' },
        { key: 'phone', label: 'Phone Number' },
        { key: 'email', label: 'Email Address' },
        { key: 'specialty', label: 'Medical Specialty' },
        { key: 'specialtiesCount', label: 'Number of Specialties', condition: () => selectedPackage && selectedPackage.type === 'specialized-clinic' },
        { key: 'numberOfBeds', label: 'Number of Beds', condition: () => selectedPackage && selectedPackage.type === 'medical-center' },
        { key: 'operatingRooms', label: 'Number of Operating Rooms', condition: () => selectedPackage && selectedPackage.type === 'medical-center' },
        { key: 'accommodationRooms', label: 'Number of Accommodation Rooms', condition: () => selectedPackage && selectedPackage.type === 'medical-center' },
        { key: 'intensiveCareRooms', label: 'Number of Intensive Care Rooms', condition: () => selectedPackage && selectedPackage.type === 'medical-center' },
        { key: 'companyType', label: 'Company Type', condition: () => selectedPackage && selectedPackage.type === 'tax-company' },
        { key: 'capital', label: 'Capital', condition: () => selectedPackage && selectedPackage.type === 'tax-company' },
        { key: 'companyArea', label: 'Company Area', condition: () => selectedPackage && selectedPackage.type === 'tax-company' },
        { key: 'licenseType', label: 'License Type' },
        { key: 'address', label: 'Address' }
    ];
    
    fields.forEach(field => {
        if (data[field.key]) {
            yPosition += 10;
            doc.text(`${field.label}: ${data[field.key]}`, 20, yPosition);
        }
    });
    
    if (data.notes) {
        yPosition += 15;
        doc.text('Additional Notes:', 20, yPosition);
        yPosition += 8;
        const splitNotes = doc.splitTextToSize(data.notes, 170);
        doc.text(splitNotes, 20, yPosition);
    }
    
    // Save PDF
    const filename = `Ejraa_${selectedPackage.type}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(filename);
}

function exportArabicToPDF(formData) {
    // Create a temporary HTML element with Arabic content
    const data = Object.fromEntries(formData.entries());
    
    const htmlContent = `
        <div style="font-family: Arial, sans-serif; direction: rtl; text-align: right; padding: 20px; max-width: 800px;">
            <h1 style="color: #2c5aa0; margin-bottom: 20px;">${selectedPackage.title || 'تفاصيل الباقة'}</h1>
            <p style="font-size: 16px; margin-bottom: 15px;"><strong>السعر:</strong> ${selectedPackage.price || 'غير محدد'}</p>
            
            <h2 style="color: #2c5aa0; margin: 20px 0 10px 0;">بيانات العميل:</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>الاسم الكامل:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.fullName || 'غير محدد'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>رقم الهاتف:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.phone || 'غير محدد'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>البريد الإلكتروني:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.email || 'غير محدد'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>التخصص الطبي:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.specialty || 'غير محدد'}</td></tr>
                ${selectedPackage && selectedPackage.type === 'specialized-clinic' && data.specialtiesCount ? 
                    `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>عدد التخصصات:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.specialtiesCount}</td></tr>` : ''}
                ${selectedPackage && selectedPackage.type === 'medical-center' && data.numberOfBeds ? 
                    `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>عدد الأسرة:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.numberOfBeds}</td></tr>` : ''}
                ${selectedPackage && selectedPackage.type === 'medical-center' && data.operatingRooms ? 
                    `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>عدد غرف العمليات:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.operatingRooms}</td></tr>` : ''}
                ${selectedPackage && selectedPackage.type === 'medical-center' && data.accommodationRooms ? 
                    `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>عدد غرف الإقامة:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.accommodationRooms}</td></tr>` : ''}
                ${selectedPackage && selectedPackage.type === 'medical-center' && data.intensiveCareRooms ? 
                    `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>عدد غرف العناية المركزة:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.intensiveCareRooms}</td></tr>` : ''}
                ${selectedPackage && selectedPackage.type === 'tax-company' && data.companyType ? 
                    `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>نوع الشركة:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${getCompanyTypeLabel(data.companyType)}</td></tr>` : ''}
                ${selectedPackage && selectedPackage.type === 'tax-company' && data.capital ? 
                    `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>رأس المال:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.capital}</td></tr>` : ''}
                ${selectedPackage && selectedPackage.type === 'tax-company' && data.companyArea ? 
                    `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>المنطقة التابع ليها الشركة:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.companyArea}</td></tr>` : ''}
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>نوع الترخيص:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${getLicenseTypeArabic(data.licenseType)}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>العنوان:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.address || 'غير محدد'}</td></tr>
            </table>
            
            ${data.notes ? `<h3 style="color: #2c5aa0;">ملاحظات إضافية:</h3><p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${data.notes}</p>` : ''}
            
            <div style="margin-top: 30px; text-align: center; color: #666;">
                <p>شركة إجراء للخدمات الطبية والقانونية</p>
                <p>تاريخ الإنشاء: ${new Date().toLocaleDateString('ar-EG')}</p>
            </div>
        </div>
    `;
    
    // Create a new window with the content
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <title>تفاصيل الباقة - إجراء</title>
            <style>
                @media print {
                    body { margin: 0; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            ${htmlContent}
            <div class="no-print" style="text-align: center; margin: 20px;">
                <button onclick="window.print()" style="background: #2c5aa0; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 5px;">طباعة</button>
                <button onclick="window.close()" style="background: #666; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 5px;">إغلاق</button>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
}

function getLicenseTypeArabic(licenseType) {
    const types = {
        'new': 'ترخيص جديد',
        'renewal': 'تجديد ترخيص',
        'transfer': 'نقل ترخيص'
    };
    return types[licenseType] || licenseType || 'غير محدد';
}

function getCompanyTypeLabel(companyType) {
    const types = {
        'limited-liability': currentLanguage === 'ar' ? 'شركة ذات مسئولية محدودة' : 'Limited Liability Company',
        'joint-stock': currentLanguage === 'ar' ? 'شركة مساهمة' : 'Joint Stock Company',
        'partnership': currentLanguage === 'ar' ? 'شركة تضامن' : 'Partnership Company',
        'sole-proprietorship': currentLanguage === 'ar' ? 'مؤسسة فردية' : 'Sole Proprietorship'
    };
    return types[companyType] || companyType || (currentLanguage === 'ar' ? 'غير محدد' : 'N/A');
}

// Sub-services WhatsApp Integration
function sendSubServiceToWhatsApp(serviceType) {
    const whatsappNumber = '201094543689'; // Replace with actual number
    
    const serviceMessages = {
        'contracts': {
            'en': `Hello, I would like to inquire about your Contracts service.

I'm interested in:
• Contract Drafting
• Legal Review
• Partnership Agreements
• Employment Contracts

Please provide more information about your services and pricing.

Thank you!`,
            'ar': `مرحباً، أود الاستفسار عن خدمة التعاقدات.

أنا مهتم بـ:
• صياغة العقود
• المراجعة القانونية
• اتفاقيات الشراكة
• عقود العمل

يرجى تقديم مزيد من المعلومات حول خدماتكم والأسعار.

شكراً لكم!`
        },
        'license': {
            'en': `Hello, I would like to inquire about your Professional License Extraction service.

I'm interested in:
• License Application
• Document Preparation
• Authority Coordination
• Follow-up Services

Please provide more information about your services and pricing.

Thank you!`,
            'ar': `مرحباً، أود الاستفسار عن خدمة استخراج الترخيص المهني.

أنا مهتم بـ:
• طلب الترخيص
• إعداد الوثائق
• التنسيق مع السلطات
• خدمات المتابعة

يرجى تقديم مزيد من المعلومات حول خدماتكم والأسعار.

شكراً لكم!`
        }
    };
    
    const message = serviceMessages[serviceType][currentLanguage] || serviceMessages[serviceType]['en'];
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
}

// WhatsApp Helper Functions
function createWhatsAppMessage(contactData) {
    const serviceTypeLabels = {
        'private-clinic': currentLanguage === 'ar' ? 'العيادة الخاصة' : 'Private Clinic',
        'specialized-clinic': currentLanguage === 'ar' ? 'العيادات المتخصصة' : 'Polyclinic',
        'medical-center': currentLanguage === 'ar' ? 'المركز الطبي' : 'Medical Center',
        'tax-doctor': currentLanguage === 'ar' ? 'الملف الضريبي للطبيب' : 'Tax File for Doctor',
        'tax-company': currentLanguage === 'ar' ? 'الملف الضريبي للشركة' : 'Tax File for Company'
    };
    
    if (currentLanguage === 'ar') {
        return `مرحباً، أود الاستفسار عن خدماتكم:

📝 *الاسم:* ${contactData.fullName}
📞 *رقم الهاتف:* ${contactData.phoneNumber}
📧 *البريد الإلكتروني:* ${contactData.email}
🏥 *نوع الخدمة:* ${serviceTypeLabels[contactData.serviceType] || contactData.serviceType}

💬 *الرسالة:*
${contactData.message}

شكراً لكم!`;
    } else {
        return `Hello, I would like to inquire about your services:

📝 *Name:* ${contactData.fullName}
📞 *Phone:* ${contactData.phoneNumber}
📧 *Email:* ${contactData.email}
🏥 *Service Type:* ${serviceTypeLabels[contactData.serviceType] || contactData.serviceType}

💬 *Message:*
${contactData.message}

Thank you!`;
    }
}

function sendContactToWhatsApp(message) {
    // WhatsApp phone number (you can change this to your business number)
    const phoneNumber = '201094543689'; // Using the phone number from the contact section
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappURL, '_blank');
}

// Contact Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Collect form data
    const formData = new FormData(form);
    const contactData = {
        fullName: formData.get('fullName'),
        phoneNumber: formData.get('phoneNumber'),
        email: formData.get('email'),
        serviceType: formData.get('serviceType'),
        message: formData.get('message')
    };
    
    // Show loading state
    submitButton.classList.add('btn-loading');
    submitButton.disabled = true;
    
    // Create WhatsApp message
    const whatsappMessage = createWhatsAppMessage(contactData);
    
    // Send to WhatsApp
    setTimeout(() => {
        submitButton.classList.remove('btn-loading');
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        
        // Open WhatsApp with the message
        sendContactToWhatsApp(whatsappMessage);
        
        // Show success message
        showAlert(
            currentLanguage === 'ar' 
                ? 'تم إعداد رسالتك! سيتم فتح واتساب لإرسالها.' 
                : 'Your message is ready! WhatsApp will open to send it.',
            'success'
        );
        
        // Reset form after a short delay
        setTimeout(() => {
            form.reset();
        }, 1000);
    }, 1500);
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = currentTheme === 'dark' 
                ? 'rgba(26, 26, 26, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = currentTheme === 'dark' 
                ? 'rgba(26, 26, 26, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.glow-card, .hero-content, .about-content, .section-title');
    animatedElements.forEach(el => observer.observe(el));
}

function addScrollAnimations() {
    const elements = document.querySelectorAll('.glow-card:not(.animated)');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in', 'animated');
        }, index * 100);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showAlert(message, type = 'info') {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alert.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.parentNode.removeChild(alert);
        }
    }, 5000);
}

function handleWindowResize() {
    // Handle any resize-specific logic here
    addScrollAnimations();
}

// Lazy Loading for Images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance Monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                
                if (loadTime > 3000) {
                    console.warn('Page load time is high:', loadTime + 'ms');
                }
            }, 0);
        });
    }
}

// Initialize performance monitoring
monitorPerformance();

// Export functions for global access
window.sendToWhatsApp = sendToWhatsApp;
window.exportToPDF = exportToPDF;