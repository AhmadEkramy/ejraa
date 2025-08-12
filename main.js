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
        'Operation License': 'Operation License',
        
        // Package Pages
        'Packages': 'Packages',
        'Private Clinic License': 'Private Clinic License',
        'Specialized Clinic License': 'Specialized Clinic License',
        'Medical Center License': 'Medical Center License',
        'Complete licensing solution for individual medical practitioners': 'Complete licensing solution for individual medical practitioners',
        'Multi-specialty medical facility licensing for comprehensive healthcare services': 'Multi-specialty medical facility licensing for comprehensive healthcare services',
        'Comprehensive medical facility with inpatient services, surgery, and intensive care': 'Comprehensive medical facility with inpatient services, surgery, and intensive care',
        'Starting from': 'Starting from',
        'Most Popular': 'Most Popular',
        'License Conditions and Required Papers': 'License Conditions and Required Papers',
        'License Conditions': 'License Conditions',
        'Required Papers': 'Required Papers',
        'Licensing Process Timeline': 'Licensing Process Timeline',
        'Apply for Private Clinic License': 'Apply for Private Clinic License',
        'Apply for Specialized Clinic License': 'Apply for Specialized Clinic License',
        'Apply for Medical Center License': 'Apply for Medical Center License',
        'Fill out the form below and we\'ll contact you within 24 hours': 'Fill out the form below and we\'ll contact you within 24 hours',
        'Submit Application': 'Submit Application',
        
        // Form Fields
        'Full Name *': 'Full Name *',
        'Phone Number *': 'Phone Number *',
        'Email Address *': 'Email Address *',
        'Medical Specialty *': 'Medical Specialty *',
        'Select specialty': 'Select specialty',
        'General Medicine': 'General Medicine',
        'Internal Medicine': 'Internal Medicine',
        'Pediatrics': 'Pediatrics',
        'Dermatology': 'Dermatology',
        'Cardiology': 'Cardiology',
        'Orthopedics': 'Orthopedics',
        'Gynecology': 'Gynecology',
        'Ophthalmology': 'Ophthalmology',
        'ENT': 'ENT',
        'Other': 'Other',
        'Years of Experience': 'Years of Experience',
        'Select experience': 'Select experience',
        '1-3 years': '1-3 years',
        '4-7 years': '4-7 years',
        '8-15 years': '8-15 years',
        '15+ years': '15+ years',
        'Clinic Location (City/Area)': 'Clinic Location (City/Area)',
        'Do you have a clinic location?': 'Do you have a clinic location?',
        'Select option': 'Select option',
        'Yes, I have a location': 'Yes, I have a location',
        'No, I need help finding one': 'No, I need help finding one',
        'Preferred Contact Time': 'Preferred Contact Time',
        'Select time': 'Select time',
        'Morning (9 AM - 12 PM)': 'Morning (9 AM - 12 PM)',
        'Afternoon (12 PM - 6 PM)': 'Afternoon (12 PM - 6 PM)',
        'Evening (6 PM - 9 PM)': 'Evening (6 PM - 9 PM)',
        'Additional Notes or Questions': 'Additional Notes or Questions',
        
        // License Conditions
        'Must be a licensed medical doctor': 'Must be a licensed medical doctor',
        'Valid medical syndicate membership': 'Valid medical syndicate membership',
        'Suitable clinic location with proper facilities': 'Suitable clinic location with proper facilities',
        'Compliance with health ministry regulations': 'Compliance with health ministry regulations',
        'Room with desk for medical consultations': 'Room with desk for medical consultations',
        'Designated area for hazardous medical waste': 'Designated area for hazardous medical waste',
        'Sterilization area': 'Sterilization area',
        
        // Required Papers
        'Medical degree certificate (certified copy)': 'Medical degree certificate (certified copy)',
        'Medical syndicate membership certificate': 'Medical syndicate membership certificate',
        'National ID copy': 'National ID copy',
        'Clinic rental contract or ownership deed': 'Clinic rental contract or ownership deed',
        'Building permit and safety certificate': 'Building permit and safety certificate',
        'Fire safety certificate': 'Fire safety certificate',
        'Environmental compliance certificate': 'Environmental compliance certificate',
        'Recent personal photos (4x6)': 'Recent personal photos (4x6)',
        
        // Timeline
        'Document Preparation': 'Document Preparation',
        'Gather and prepare all required documents': 'Gather and prepare all required documents',
        '1-2 days': '1-2 days',
        'Application Submission': 'Application Submission',
        'Submit application to health ministry': 'Submit application to health ministry',
        '1 day': '1 day',
        'Inspection & Review': 'Inspection & Review',
        'Ministry inspection and document review': 'Ministry inspection and document review',
        '7-14 days': '7-14 days',
        'License Issuance': 'License Issuance',
        'Receive your clinic license': 'Receive your clinic license',
        '2-3 days': '2-3 days',
        
        // Specialized Clinic specific
        'Number of Specialties *': 'Number of Specialties *',
        'Select number': 'Select number',
        '2 Specialties': '2 Specialties',
        '3 Specialties': '3 Specialties',
        '4 Specialties': '4 Specialties',
        '5 Specialties': '5 Specialties',
        '6+ Specialties': '6+ Specialties',
        'Primary Specialty *': 'Primary Specialty *',
        'General Surgery': 'General Surgery',
        'Gynecology & Obstetrics': 'Gynecology & Obstetrics',
        'Radiology': 'Radiology',
        'Additional Specialties': 'Additional Specialties',
        'Facility Size (sq meters)': 'Facility Size (sq meters)',
        'Select size': 'Select size',
        '200-300 sq meters': '200-300 sq meters',
        '300-500 sq meters': '300-500 sq meters',
        '500-800 sq meters': '500-800 sq meters',
        '800+ sq meters': '800+ sq meters',
        'Do you have a facility location?': 'Do you have a facility location?',
        'Currently planning/searching': 'Currently planning/searching',
        'Preferred Location (City/Area)': 'Preferred Location (City/Area)',
        'Estimated Budget': 'Estimated Budget',
        'Select budget range': 'Select budget range',
        '25,000 - 35,000 EGP': '25,000 - 35,000 EGP',
        '35,000 - 50,000 EGP': '35,000 - 50,000 EGP',
        '50,000+ EGP': '50,000+ EGP',
        
        // Medical Center specific
        'Role/Position *': 'Role/Position *',
        'Select role': 'Select role',
        'Medical Director': 'Medical Director',
        'Investor/Owner': 'Investor/Owner',
        'Healthcare Administrator': 'Healthcare Administrator',
        'Healthcare Consultant': 'Healthcare Consultant',
        'Number of Beds *': 'Number of Beds *',
        '10-20 beds': '10-20 beds',
        '20-30 beds': '20-30 beds',
        '30-50 beds': '30-50 beds',
        '50-100 beds': '50-100 beds',
        '100+ beds': '100+ beds',
        'Number of Operating Rooms': 'Number of Operating Rooms',
        '1 Operating Room': '1 Operating Room',
        '2 Operating Rooms': '2 Operating Rooms',
        '3 Operating Rooms': '3 Operating Rooms',
        '4+ Operating Rooms': '4+ Operating Rooms',
        'ICU Beds': 'ICU Beds',
        '2-5 ICU beds': '2-5 ICU beds',
        '6-10 ICU beds': '6-10 ICU beds',
        '10-15 ICU beds': '10-15 ICU beds',
        '15+ ICU beds': '15+ ICU beds',
        'Planned Specialties': 'Planned Specialties',
        '1,000-2,000 sq meters': '1,000-2,000 sq meters',
        '2,000-3,000 sq meters': '2,000-3,000 sq meters',
        '3,000-5,000 sq meters': '3,000-5,000 sq meters',
        '5,000+ sq meters': '5,000+ sq meters',
        '40,000 - 60,000 EGP': '40,000 - 60,000 EGP',
        '60,000 - 100,000 EGP': '60,000 - 100,000 EGP',
        '100,000+ EGP': '100,000+ EGP',
        
        // Additional missing translations
        'Specialized Clinic': 'Specialized Clinic',
        'Inpatient Services': 'Inpatient Services',
        'Surgery & ICU': 'Surgery & ICU',
        'Full Medical Facility': 'Full Medical Facility'
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
        'Operation License': 'ترخيص التشغيل',
        
        // Package Pages
        'Packages': 'الباقات',
        'Private Clinic License': 'ترخيص العيادة الخاصة',
        'Specialized Clinic License': 'ترخيص العيادة المتخصصة',
        'Medical Center License': 'ترخيص المركز الطبي',
        'Complete licensing solution for individual medical practitioners': 'حل ترخيص شامل للممارسين الطبيين الأفراد',
        'Multi-specialty medical facility licensing for comprehensive healthcare services': 'ترخيص المنشئات الطبية متعددة التخصصات للخدمات الصحية الشاملة',
        'Comprehensive medical facility with inpatient services, surgery, and intensive care': 'مرفق طبي شامل مع خدمات المرضى الداخليين والجراحة والعناية المركزة',
        'Starting from': 'يبدأ من',
        'Most Popular': 'الأكثر طلباً',
        'License Conditions and Required Papers': 'شروط الترخيص والأوراق المطلوبة',
        'License Conditions': 'شروط الترخيص',
        'Required Papers': 'الأوراق المطلوبة',
        'Licensing Process Timeline': 'الجدول الزمني لعملية الترخيص',
        'Apply for Private Clinic License': 'تقدم بطلب ترخيص العيادة الخاصة',
        'Apply for Specialized Clinic License': 'تقدم بطلب ترخيص العيادة المتخصصة',
        'Apply for Medical Center License': 'تقدم بطلب ترخيص المركز الطبي',
        'Fill out the form below and we\'ll contact you within 24 hours': 'املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة',
        'Submit Application': 'تقديم الطلب',
        
        // Form Fields
        'Full Name *': 'الاسم الكامل *',
        'Phone Number *': 'رقم الهاتف *',
        'Email Address *': 'البريد الإلكتروني *',
        'Medical Specialty *': 'التخصص الطبي *',
        'Select specialty': 'اختر التخصص',
        'General Medicine': 'طب عام',
        'Internal Medicine': 'باطنة',
        'Pediatrics': 'أطفال',
        'Dermatology': 'جلدية',
        'Cardiology': 'قلب',
        'Orthopedics': 'عظام',
        'Gynecology': 'نساء وتوليد',
        'Ophthalmology': 'عيون',
        'ENT': 'أنف وأذن وحنجرة',
        'Other': 'أخرى',
        'Years of Experience': 'سنوات الخبرة',
        'Select experience': 'اختر الخبرة',
        '1-3 years': '1-3 سنوات',
        '4-7 years': '4-7 سنوات',
        '8-15 years': '8-15 سنة',
        '15+ years': 'أكثر من 15 سنة',
        'Clinic Location (City/Area)': 'موقع العيادة (المدينة/المنطقة)',
        'Do you have a clinic location?': 'هل لديك موقع للعيادة؟',
        'Select option': 'اختر الخيار',
        'Yes, I have a location': 'نعم، لدي موقع',
        'No, I need help finding one': 'لا، أحتاج مساعدة في العثور على موقع',
        'Preferred Contact Time': 'الوقت المفضل للتواصل',
        'Select time': 'اختر الوقت',
        'Morning (9 AM - 12 PM)': 'صباحاً (9 ص - 12 ظ)',
        'Afternoon (12 PM - 6 PM)': 'بعد الظهر (12 ظ - 6 م)',
        'Evening (6 PM - 9 PM)': 'مساءً (6 م - 9 م)',
        'Additional Notes or Questions': 'ملاحظات أو أسئلة إضافية',
        
        // License Conditions
        'Must be a licensed medical doctor': 'يجب أن يكون طبيباً مرخصاً',
        'Valid medical syndicate membership': 'عضوية سارية في نقابة الأطباء',
        'Suitable clinic location with proper facilities': 'موقع عيادة مناسب بالتجهيزات المطلوبة',
        'Compliance with health ministry regulations': 'الامتثال لقوانين وزارة الصحة',
        'Room with desk for medical consultations': 'غرفة بها مكتب للكشف الطبي',
        'Designated area for hazardous medical waste': 'منطقة مخصصة للنفايات الطبية الخطرة',
        'Sterilization area': 'منطقة التعقيم',
        
        // Required Papers
        'Medical degree certificate (certified copy)': 'شهادة التخرج الطبية (صورة معتمدة)',
        'Medical syndicate membership certificate': 'شهادة عضوية نقابة الأطباء',
        'National ID copy': 'صورة البطاقة الشخصية',
        'Clinic rental contract or ownership deed': 'عقد إيجار العيادة أو سند الملكية',
        'Building permit and safety certificate': 'رخصة البناء وشهادة الأمان',
        'Fire safety certificate': 'شهادة الدفاع المدني',
        'Environmental compliance certificate': 'شهادة الامتثال البيئي',
        'Recent personal photos (4x6)': 'صور شخصية حديثة (4×6)',
        
        // Timeline
        'Document Preparation': 'إعداد المستندات',
        'Gather and prepare all required documents': 'جمع وإعداد جميع المستندات المطلوبة',
        '1-2 days': '1-2 أيام',
        'Application Submission': 'تقديم الطلب',
        'Submit application to health ministry': 'تقديم الطلب لوزارة الصحة',
        '1 day': 'يوم واحد',
        'Inspection & Review': 'التفتيش والمراجعة',
        'Ministry inspection and document review': 'تفتيش الوزارة ومراجعة المستندات',
        '7-14 days': '7-14 يوم',
        'License Issuance': 'إصدار الترخيص',
        'Receive your clinic license': 'استلام ترخيص العيادة',
        '2-3 days': '2-3 أيام',
        
        // Specialized Clinic specific
        'Number of Specialties *': 'عدد التخصصات *',
        'Select number': 'اختر العدد',
        '2 Specialties': 'تخصصان',
        '3 Specialties': '3 تخصصات',
        '4 Specialties': '4 تخصصات',
        '5 Specialties': '5 تخصصات',
        '6+ Specialties': '6+ تخصصات',
        'Primary Specialty *': 'التخصص الأساسي *',
        'General Surgery': 'جراحة عامة',
        'Gynecology & Obstetrics': 'نساء وتوليد',
        'Radiology': 'أشعة',
        'Additional Specialties': 'التخصصات الإضافية',
        'Facility Size (sq meters)': 'حجم المرفق (متر مربع)',
        'Select size': 'اختر الحجم',
        '200-300 sq meters': '200-300 متر مربع',
        '300-500 sq meters': '300-500 متر مربع',
        '500-800 sq meters': '500-800 متر مربع',
        '800+ sq meters': 'أكثر من 800 متر مربع',
        'Do you have a facility location?': 'هل لديك موقع للمرفق؟',
        'Currently planning/searching': 'أخطط/أبحث حالياً',
        'Preferred Location (City/Area)': 'الموقع المفضل (المدينة/المنطقة)',
        'Estimated Budget': 'الميزانية المقدرة',
        'Select budget range': 'اختر نطاق الميزانية',
        '25,000 - 35,000 EGP': '25,000 - 35,000 جنيه',
        '35,000 - 50,000 EGP': '35,000 - 50,000 جنيه',
        '50,000+ EGP': 'أكثر من 50,000 جنيه',
        
        // Medical Center specific
        'Role/Position *': 'الدور/المنصب *',
        'Select role': 'اختر الدور',
        'Medical Director': 'مدير طبي',
        'Investor/Owner': 'مستثمر/مالك',
        'Healthcare Administrator': 'مدير رعاية صحية',
        'Healthcare Consultant': 'استشاري رعاية صحية',
        'Number of Beds *': 'عدد الأسرة *',
        '10-20 beds': '10-20 سرير',
        '20-30 beds': '20-30 سرير',
        '30-50 beds': '30-50 سرير',
        '50-100 beds': '50-100 سرير',
        '100+ beds': 'أكثر من 100 سرير',
        'Number of Operating Rooms': 'عدد غرف العمليات',
        '1 Operating Room': 'غرفة عمليات واحدة',
        '2 Operating Rooms': 'غرفتا عمليات',
        '3 Operating Rooms': '3 غرف عمليات',
        '4+ Operating Rooms': '4+ غرف عمليات',
        'ICU Beds': 'أسرة العناية المركزة',
        '2-5 ICU beds': '2-5 أسرة عناية مركزة',
        '6-10 ICU beds': '6-10 أسرة عناية مركزة',
        '10-15 ICU beds': '10-15 سرير عناية مركزة',
        '15+ ICU beds': 'أكثر من 15 سرير عناية مركزة',
        'Planned Specialties': 'التخصصات المخططة',
        '1,000-2,000 sq meters': '1,000-2,000 متر مربع',
        '2,000-3,000 sq meters': '2,000-3,000 متر مربع',
        '3,000-5,000 sq meters': '3,000-5,000 متر مربع',
        '5,000+ sq meters': 'أكثر من 5,000 متر مربع',
        '40,000 - 60,000 EGP': '40,000 - 60,000 جنيه',
        '60,000 - 100,000 EGP': '60,000 - 100,000 جنيه',
        '100,000+ EGP': 'أكثر من 100,000 جنيه',
        
        // Additional missing translations
        'Specialized Clinic': 'العيادات المتخصصة',
        'Inpatient Services': 'خدمات المرضى الداخليين',
        'Surgery & ICU': 'جراحة وعناية مركزة',
        'Full Medical Facility': 'مرفق طبي كامل'
    }
};

const packageDescriptions = {
    en: {
        'private-clinic': 'Complete licensing package for individual private clinics including medical practice license, professional ID card, and all necessary legal documentation.',
        'specialized-clinic': 'Comprehensive licensing for polyclinics covering 2-5 medical specialties (excluding dentistry, lab, and radiology) with advanced licensing procedures.',
        'medical-center': 'Full-service licensing for multi-specialty medical centers with comprehensive services and complete legal support.'
    },
    ar: {
        'private-clinic': 'باقة ترخيص كاملة للعيادات الخاصة الفردية تشمل ترخيص مزاولة المهنة وبطاقة الهوية المهنية وجميع الوثائق القانونية اللازمة.',
        'specialized-clinic': 'ترخيص شامل للعيادات المتخصصة يغطي 2-5 تخصصات طبية (باستثناء طب الأسنان ومعمل التحليل والأشعة) مع إجراءات ترخيص متقدمة.',
        'medical-center': 'ترخيص شامل للمراكز الطبية متعددة التخصصات مع خدمات شاملة ودعم قانوني كامل.'
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
    
    // Package Forms
    const privateClinicForm = document.getElementById('privateClinicForm');
    if (privateClinicForm) {
        privateClinicForm.addEventListener('submit', handlePackageFormSubmit);
    }
    
    const specializedClinicForm = document.getElementById('specializedClinicForm');
    if (specializedClinicForm) {
        specializedClinicForm.addEventListener('submit', handlePackageFormSubmit);
    }
    
    const medicalCenterForm = document.getElementById('medicalCenterForm');
    if (medicalCenterForm) {
        medicalCenterForm.addEventListener('submit', handlePackageFormSubmit);
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
        if (langText) langText.textContent = 'العربية';
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
    
    const whatsappNumber = '201044273608'; // Replace with actual number
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
    const whatsappNumber = '201044273608'; // Replace with actual number
    
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
        'tax-company': currentLanguage === 'ar' ? 'الملف الضريبي للشركة' : 'Tax File for Company',
        'laser-device': currentLanguage === 'ar' ? 'ترخيص جهاز الليزر' : 'Laser Device License',
        'contracts': currentLanguage === 'ar' ? 'التعاقدات' : 'Contracts',
        'professional-license': currentLanguage === 'ar' ? 'الترخيص المهني' : 'Professional License'
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
    const phoneNumber = '201044273608'; // Using the phone number from the contact section
    
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

// Package Form Handler
function handlePackageFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Collect form data
    const formData = new FormData(form);
    const packageData = {};
    
    // Get all form fields
    for (let [key, value] of formData.entries()) {
        if (value.trim() !== '') {
            packageData[key] = value;
        }
    }
    
    // Determine package type from form ID
    let packageType = 'Package Application';
    if (form.id === 'privateClinicForm') {
        packageType = currentLanguage === 'ar' ? 'طلب ترخيص العيادة الخاصة' : 'Private Clinic License Application';
    } else if (form.id === 'specializedClinicForm') {
        packageType = currentLanguage === 'ar' ? 'طلب ترخيص العيادة المتخصصة' : 'Specialized Clinic License Application';
    } else if (form.id === 'medicalCenterForm') {
        packageType = currentLanguage === 'ar' ? 'طلب ترخيص المركز الطبي' : 'Medical Center License Application';
    }
    
    // Show loading state
    submitButton.classList.add('btn-loading');
    submitButton.disabled = true;
    
    // Create WhatsApp message
    const whatsappMessage = createPackageWhatsAppMessage(packageData, packageType);
    
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
                ? 'تم إعداد طلبك! سيتم فتح واتساب لإرسال التفاصيل.' 
                : 'Your application is ready! WhatsApp will open to send the details.',
            'success'
        );
        
        // Reset form after a short delay
        setTimeout(() => {
            form.reset();
        }, 1000);
    }, 1500);
}

// Create Package WhatsApp Message
function createPackageWhatsAppMessage(data, packageType) {
    const isArabic = currentLanguage === 'ar';
    
    let message = `${packageType}\n`;
    message += isArabic ? '========================\n' : '========================\n';
    
    // Add form data to message
    Object.entries(data).forEach(([key, value]) => {
        const fieldName = getFieldDisplayName(key, isArabic);
        message += `${fieldName}: ${value}\n`;
    });
    
    message += isArabic ? '\n📞 يرجى التواصل معي لمناقشة التفاصيل' : '\n📞 Please contact me to discuss the details';
    
    return message;
}

// Get Field Display Name
function getFieldDisplayName(fieldKey, isArabic) {
    const fieldNames = {
        fullName: isArabic ? 'الاسم الكامل' : 'Full Name',
        phone: isArabic ? 'رقم الهاتف' : 'Phone Number',
        email: isArabic ? 'البريد الإلكتروني' : 'Email',
        specialty: isArabic ? 'التخصص الطبي' : 'Medical Specialty',
        experience: isArabic ? 'سنوات الخبرة' : 'Years of Experience',
        location: isArabic ? 'الموقع' : 'Location',
        hasLocation: isArabic ? 'يملك موقع' : 'Has Location',
        contactTime: isArabic ? 'وقت التواصل المفضل' : 'Preferred Contact Time',
        notes: isArabic ? 'ملاحظات' : 'Notes',
        specialtiesCount: isArabic ? 'عدد التخصصات' : 'Number of Specialties',
        primarySpecialty: isArabic ? 'التخصص الأساسي' : 'Primary Specialty',
        additionalSpecialties: isArabic ? 'التخصصات الإضافية' : 'Additional Specialties',
        facilitySize: isArabic ? 'حجم المرفق' : 'Facility Size',
        budget: isArabic ? 'الميزانية' : 'Budget',
        role: isArabic ? 'الدور' : 'Role',
        numberOfBeds: isArabic ? 'عدد الأسرة' : 'Number of Beds',
        operatingRooms: isArabic ? 'غرف العمليات' : 'Operating Rooms',
        icuBeds: isArabic ? 'أسرة العناية المركزة' : 'ICU Beds',
        specialties: isArabic ? 'التخصصات المخططة' : 'Planned Specialties'
    };
    
    return fieldNames[fieldKey] || fieldKey;
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