export interface ProjectData {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  tech: string[];
  image: string;
  role: string;
  timeline: string;
  
  // Basic content
  challenge?: string;
  solution?: string;
  results?: string[];

  // Extended content
  overview?: string;
  companyLogo?: string;
  goal?: string;
  goalList?: string[];
  architectureImage?: string;
  architectureHighlights?: string[];
  screenshots?: { title: string; src: string; }[];
  challengesList?: { title: string; problem: string; solution: string }[];
  solutionDetails?: { title: string; description: string; points: string[] }[];
  contributions?: { category: string; points: string[] }[];
  impactDetails?: { title: string; description: string }[];
  beforeVsAfter?: { before: string[]; after: string[] };
  keyLearnings?: { title: string; description: string }[];
  keyResults?: string[];
}

export const projects: ProjectData[] = [
  {
    id: 'enterprise-crm-transformation',
    title: 'IBM Sales Cloud Transformation',
    category: 'Salesforce Development',
    shortDescription: 'Spearheaded the migration and customization of a legacy CRM to Salesforce Lightning, improving sales productivity by 40%. Implemented complex LWC and Apex integrations.',
    tech: [
      'Salesforce CRM', 'Sales Cloud', 'Service Cloud', 'Lightning Web Components', 
      'Apex', 'Salesforce Flow', 'SOQL', 'Kafka', 'REST APIs', 'Enterprise Integrations', 
      'Event-Driven Architecture', 'GitHub', 'VS Code', 'Jira', 'Workbench', 
      'IBM Cloud', 'Enterprise Applications'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    role: 'Sr. Developer',
    timeline: '7 months',
    overview: 'IBM Sales Cloud (ISC) is a global Salesforce-powered CRM platform used by IBM sellers, sales leaders, and business partners across the world. The platform enables opportunity management, deal registration, co-selling, partner collaboration, and customer engagement through a unified enterprise ecosystem.\n\nAs a Senior Salesforce Developer, I contributed to the design, development, and enhancement of key business processes that supported thousands of users globally while ensuring seamless integration with enterprise systems.',
    architectureImage: '/assets/kafka-architecture.png',
    architectureHighlights: [
      'Salesforce as the primary CRM platform',
      'LWC-based modern user interface',
      'Apex business logic layer',
      'Flow-based process automation',
      'Kafka-driven event processing',
      'Enterprise system integrations',
      'Real-time data synchronization'
    ],
    challengesList: [
      {
        title: 'Complex Opportunity Assignment Logic',
        problem: 'Different opportunity types required different ownership and routing rules.',
        solution: 'Implemented Salesforce Flow automation and Apex-based decision frameworks to dynamically assign opportunities.'
      },
      {
        title: 'Real-Time Data Synchronization',
        problem: 'Salesforce data needed to remain synchronized with external enterprise systems.',
        solution: 'Implemented Kafka-based event processing architecture for real-time updates.'
      },
      {
        title: 'Partner Collaboration Process',
        problem: 'Partner interactions required multiple manual steps and email communications.',
        solution: 'Automated collaboration workflows and notification mechanisms within Salesforce.'
      },
      {
        title: 'Legacy Data Migration',
        problem: 'Historical CRM data needed to be migrated without impacting ongoing operations.',
        solution: 'Created migration processes and validation mechanisms ensuring data integrity and consistency.'
      }
    ],
    beforeVsAfter: {
      before: [
        'Manual opportunity management',
        'Multiple approval bottlenecks',
        'Limited partner visibility',
        'Repetitive business processes',
        'Delayed system synchronization',
        'Time-consuming manual tasks'
      ],
      after: [
        'Automated workflows',
        'Faster opportunity processing',
        'Improved partner engagement',
        'Real-time integrations',
        'Enhanced user experience',
        'Increased operational efficiency'
      ]
    },
    keyLearnings: [
      {
        title: 'Enterprise Scale Matters',
        description: 'Working on a globally used CRM platform reinforced the importance of scalability, maintainability, and performance optimization.'
      },
      {
        title: 'Automation Creates Business Value',
        description: 'Well-designed Salesforce automation significantly reduces operational overhead and improves business productivity.'
      },
      {
        title: 'Integration Is Critical',
        description: 'Enterprise applications rarely operate in isolation. Successful solutions require seamless integration across multiple systems.'
      },
      {
        title: 'User Experience Drives Adoption',
        description: 'Modern Lightning Web Components and intuitive workflows improve adoption and overall business efficiency.'
      }
    ]
  },
  {
    id: 'digital-loan-origination',
    title: 'Digital Loan Management Platform',
    category: 'BANKING & FINANCIAL SERVICES',
    shortDescription: 'Transforming traditional loan processing into a streamlined digital experience through Salesforce-powered automation, customer onboarding, document verification, and end-to-end loan lifecycle management.',
    tech: ['Salesforce', 'Apex', 'LWC', 'Sales Cloud', 'REST APIs', 'Data Loader', 'JavaScript', 'Git', 'SOQL', 'Visualforce'],
    image: '/assets/digital_loan_hero.png',
    role: 'Salesforce Developer',
    timeline: '1 year',
    overview: 'IndusInd Loan Management Platform is a Salesforce-based banking solution designed to simplify and digitize the end-to-end loan origination process.\n\nThe application enables sales representatives across India to process vehicle loans, two-wheeler loans, tractor loans, and consumer finance applications through a unified platform.\n\nThe system supports customer onboarding, Aadhaar verification, PAN validation, CIBIL verification, field investigation workflows, document management, and loan approval processes while integrating with multiple external banking systems.',
    architectureImage: '/assets/Indusind%20flow.png',
    goal: 'The primary objective was to digitize the traditional loan application process and create a centralized platform that could improve customer onboarding efficiency while reducing manual processing time.',
    goalList: [
      'Faster loan application processing',
      'Improved customer onboarding experience',
      'Real-time verification workflows',
      'Secure document management',
      'Reduced operational overhead',
      'Better visibility into loan application status',
      'Scalable nationwide deployment'
    ],
    challengesList: [
      {
        title: 'Complex Customer Verification Process',
        problem: 'Loan approval required multiple verification steps including Aadhaar verification, PAN validation, CIBIL score checks, bank account validation, and field investigations.',
        solution: 'Built an integrated Verification Framework automating these checks.'
      },
      {
        title: 'Manual Data Collection',
        problem: 'Sales representatives were spending significant time collecting customer information manually, leading to delays and inconsistent data quality.',
        solution: 'Developed Mobile-Enabled Loan Processing interfaces.'
      },
      {
        title: 'Multiple External Integrations',
        problem: 'The platform needed to communicate with various third-party verification services and banking applications while maintaining security and compliance standards.',
        solution: 'Leveraged REST APIs and secure integrations.'
      },
      {
        title: 'Document Management',
        problem: 'Customer documents and images captured through mobile devices needed to be securely stored and linked to loan applications.',
        solution: 'Centralized document capture processes on Salesforce.'
      },
      {
        title: 'Scalability',
        problem: 'The application had to support a large number of loan applications across different regions and loan categories nationwide.',
        solution: 'Optimized Apex workflows and business logic for high concurrency.'
      }
    ],
    solutionDetails: [
      {
        title: 'Customer Onboarding Automation',
        description: 'Built customized Salesforce workflows to automate:',
        points: ['Customer registration', 'Lead qualification', 'Loan application creation', 'Verification initiation', 'Approval routing']
      },
      {
        title: 'Verification Integration Framework',
        description: 'Implemented integrations ensuring real-time validation and improved data accuracy for:',
        points: ['Aadhaar verification', 'PAN validation', 'Bank account verification', 'CIBIL score checks', 'Field investigation processing']
      },
      {
        title: 'Mobile-Enabled Loan Processing',
        description: 'Created responsive Salesforce interfaces allowing field sales teams to:',
        points: ['Capture customer details', 'Upload supporting documents', 'Capture images directly from mobile devices', 'Track application progress']
      },
      {
        title: 'Business Process Automation',
        description: 'Leveraged Apex and Salesforce automation tools to:',
        points: ['Automate application routing', 'Trigger notifications', 'Validate customer data', 'Manage approval workflows']
      },
      {
        title: 'Data Synchronization',
        description: 'Implemented secure integrations to synchronize approved loan data with downstream banking systems.',
        points: []
      }
    ],
    contributions: [
      {
        category: 'Salesforce Development',
        points: ['Developed Apex Classes and Triggers', 'Built custom loan management modules', 'Created Lightning components', 'Developed validation frameworks']
      },
      {
        category: 'Business Process Automation',
        points: ['Automated customer onboarding', 'Designed approval workflows', 'Built notification mechanisms', 'Reduced manual processing steps']
      },
      {
        category: 'Integration Development',
        points: ['Worked on third-party verification integrations', 'Implemented data synchronization processes', 'Supported secure information exchange']
      },
      {
        category: 'Security & Compliance',
        points: ['Configured Salesforce security model', 'Implemented sharing rules', 'Managed role-based access controls']
      }
    ],
    impactDetails: [
      {
        title: 'Faster Loan Processing',
        description: 'Reduced manual intervention by automating critical stages of the loan lifecycle.'
      },
      {
        title: 'Improved Customer Experience',
        description: 'Enabled quicker onboarding and faster verification processes.'
      },
      {
        title: 'Better Data Accuracy',
        description: 'Automated validations significantly reduced human errors and duplicate entries.'
      },
      {
        title: 'Enhanced Operational Efficiency',
        description: 'Sales representatives could process more applications with less effort.'
      },
      {
        title: 'Secure Digital Workflow',
        description: 'Provided a centralized and compliant platform for customer information management.'
      }
    ],
    keyResults: [
      'Digitized end-to-end loan origination process',
      'Improved customer onboarding efficiency',
      'Automated verification workflows',
      'Enhanced document management capabilities',
      'Increased operational productivity',
      'Enabled nationwide scalability',
      'Improved application tracking and visibility'
    ]
  },
  {
    id: 'pharmacovigilance-safety',
    title: 'Pharmacovigilance Safety Platform',
    category: 'HEALTHCARE & LIFE SCIENCES',
    shortDescription: 'Improving drug safety monitoring, adverse event reporting, and healthcare compliance through intelligent Salesforce solutions.',
    tech: ['Salesforce', 'Apex', 'LWC', 'Visualforce', 'Service Cloud', 'SOQL', 'Git', 'Azure Integration', 'Data Loader', 'Salesforce Flow'],
    image: '/assets/pharma_hero_1782146202198.png',
    role: 'Senior Developer',
    timeline: '1.9 years',
    overview: 'The Pharmacovigilance Safety Platform (IVP) is an enterprise healthcare application designed to monitor, manage, and analyze adverse drug reactions and patient safety events. The platform helps pharmaceutical organizations ensure compliance with global regulatory standards while improving patient safety through efficient case management and reporting.\n\nAs a Salesforce Developer, I contributed to the development and enhancement of core platform functionalities, including case management workflows, configurable user interfaces, business automation, and integrations with external healthcare systems.',
    architectureImage: '/assets/pharma_flow.png',
    goal: 'To provide pharmaceutical organizations with a centralized safety monitoring platform that improves adverse event reporting, accelerates case investigations, enhances regulatory compliance, and reduces manual operational effort.',
    goalList: [
      'Faster Case Processing',
      'Improved Compliance',
      'Better Patient Safety Monitoring',
      'Increased Operational Efficiency'
    ],
    challengesList: [
      {
        title: 'Manual Safety Reporting',
        problem: 'Healthcare teams relied heavily on spreadsheets and disconnected systems.',
        solution: 'Centralized reporting into a unified Salesforce system.'
      },
      {
        title: 'Regulatory Compliance',
        problem: 'Strict reporting requirements across global healthcare regulations.',
        solution: 'Automated compliance checks and audit trails.'
      },
      {
        title: 'Complex Case Management',
        problem: 'Thousands of safety cases requiring structured workflows.',
        solution: 'Implemented intelligent case routing and lifecycle automation.'
      },
      {
        title: 'Data Accuracy',
        problem: 'Critical need for accurate adverse event tracking.',
        solution: 'Introduced deep validation rules and data governance.'
      },
      {
        title: 'Cross-Team Collaboration',
        problem: 'Safety reviewers, medical teams, and compliance teams required centralized collaboration.',
        solution: 'Configured role-based security and collaborative workspaces.'
      }
    ],
    solutionDetails: [
      {
        title: 'Safety Case Management',
        description: 'Developed a Salesforce-based Pharmacovigilance platform that automated safety case management and reporting processes.',
        points: ['Adverse Event Tracking', 'Workflow Automation', 'Regulatory Reporting', 'Role-Based Security', 'Analytics & Monitoring', 'Configurable Forms', 'Case Lifecycle Automation']
      }
    ],
    contributions: [
      {
        category: 'Salesforce Development',
        points: ['Developed Apex classes and business logic', 'Created Lightning Web Components', 'Built configurable user interfaces']
      },
      {
        category: 'Automation Development',
        points: ['Designed workflow automations', 'Automated case routing and assignment', 'Reduced manual intervention']
      },
      {
        category: 'Data Management',
        points: ['Supported data migration activities', 'Improved data quality controls', 'Implemented validation frameworks']
      },
      {
        category: 'Security & Compliance',
        points: ['Configured role-based access', 'Implemented sharing rules', 'Ensured compliance requirements']
      }
    ],
    impactDetails: [
      { title: '50% Faster Case Processing', description: 'Streamlined case investigation and closure timelines.' },
      { title: '70% Reduction in Manual Tracking', description: 'Replaced manual spreadsheets with automated queues.' },
      { title: 'Improved Regulatory Compliance', description: 'Ensured all cases met global regulatory timelines.' },
      { title: 'Enhanced Patient Safety Monitoring', description: 'Real-time dashboards for active safety cases.' },
      { title: 'Centralized Safety Operations', description: 'One unified platform for all safety teams.' },
      { title: 'Improved Data Accuracy', description: 'Significantly fewer errors in safety case intake.' },
      { title: 'Modern Analytics & Reporting', description: 'Real-time visibility into adverse event trends.' }
    ],
    keyLearnings: [
      { title: 'Healthcare Compliance', description: 'Deep understanding of regulatory requirements.' },
      { title: 'Salesforce Scalability', description: 'Building systems that handle thousands of cases.' },
      { title: 'Enterprise Security', description: 'Protecting highly sensitive medical data.' },
      { title: 'Workflow Automation', description: 'Streamlining complex, multi-stage approval processes.' },
      { title: 'Case Management Best Practices', description: 'Optimizing the entire case lifecycle.' },
      { title: 'Data Governance', description: 'Ensuring data integrity across systems.' }
    ],
    screenshots: [
      { title: 'Safety Case Dashboard', src: '/assets/pharma_hero_1782146202198.png' },
      { title: 'Adverse Event Management', src: '/assets/pharma_dashboard1_1782146214771.png' },
      { title: 'Case Investigation Workflow', src: '/assets/pharma_dashboard2_1782146226763.png' },
      { title: 'Compliance Analytics Dashboard', src: '/assets/pharma_dashboard3_1782146256276.png' },
      { title: 'Regulatory Reporting Module', src: '/assets/pharma_dashboard4_1782146269571.png' }
    ]
  },
  {
    id: 'b2b-saas-portal',
    title: 'B2B SaaS Portal',
    category: 'Full Stack Development',
    shortDescription: 'Built a responsive, high-performance customer portal allowing B2B clients to manage subscriptions, view analytics, and generate reports.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    role: 'Full Stack Developer',
    timeline: '6 Months',
    challenge: 'The client required a modern, highly interactive dashboard for their B2B customers to manage subscriptions and view complex analytics. The previous portal was built on an aging PHP stack, resulting in poor user experience and extremely slow data visualization rendering.',
    solution: 'I rebuilt the entire portal from the ground up using Next.js and React. I integrated GraphQL to fetch precisely the required data, drastically reducing payload sizes. I utilized Tailwind CSS for a scalable, responsive design system and Framer Motion to provide a premium, smooth user experience during page transitions.',
    results: [
      'Increased user engagement on the portal by 65%.',
      'Cut initial page load times by 70% leveraging Next.js server-side rendering.',
      'Reduced customer support tickets related to portal navigation by over 50%.',
      'Delivered a highly modular component library that accelerated future feature development.'
    ]
  }
];
