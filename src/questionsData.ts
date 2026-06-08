import { Question } from './types';

export const SHEET_1_MCQ: Question[] = [
  {
    id: 's1-mcq-1',
    number: 1,
    sheet: 1,
    section: 'MCQ',
    text: 'Software is defined as ___________',
    options: [
      'set of programs, documentation & configuration of data',
      'set of programs',
      'documentation and configuration of data',
      'None of the mentioned'
    ],
    correctAnswer: 'a',
    explanation: 'Software = programs + documentation + configuration data'
  },
  {
    id: 's1-mcq-2',
    number: 2,
    sheet: 1,
    section: 'MCQ',
    text: 'What is Software Engineering?',
    options: [
      'Designing a software',
      'Testing a software',
      'Application of engineering principles to the design a software',
      'None of the above'
    ],
    correctAnswer: 'c',
    explanation: 'SE applies systematic engineering principles to software'
  },
  {
    id: 's1-mcq-3',
    number: 3,
    sheet: 1,
    section: 'MCQ',
    text: 'Who is the father of Software Engineering?',
    options: [
      'Margaret Hamilton',
      'Watts S. Humphrey',
      'Alan Turing',
      'Boris Beizer'
    ],
    correctAnswer: 'b',
    explanation: 'Watts S. Humphrey is widely known as the father of SE'
  },
  {
    id: 's1-mcq-4',
    number: 4,
    sheet: 1,
    section: 'MCQ',
    text: 'What are the features of Software Code?',
    options: [
      'Simplicity',
      'Accessibility',
      'Modularity',
      'All of the above'
    ],
    correctAnswer: 'd',
    explanation: 'Good software code is simple, accessible, and modular'
  },
  {
    id: 's1-mcq-5',
    number: 5,
    sheet: 1,
    section: 'MCQ',
    text: '____________ is a software development activity that is not a part of software processes.',
    options: [
      'Validation',
      'Specification',
      'Development',
      'Dependence'
    ],
    correctAnswer: 'd',
    explanation: 'Dependence is not a recognized software process activity'
  },
  {
    id: 's1-mcq-6',
    number: 6,
    sheet: 1,
    section: 'MCQ',
    text: 'Define Agile scrum methodology.',
    options: [
      'project management that emphasizes incremental progress',
      'project management that emphasizes decremental progress',
      'project management that emphasizes neutral progress',
      'project management that emphasizes no progress'
    ],
    correctAnswer: 'a',
    explanation: 'Scrum is an Agile framework based on iterative, incremental progress'
  },
  {
    id: 's1-mcq-7',
    number: 7,
    sheet: 1,
    section: 'MCQ',
    text: 'CASE stands for',
    options: [
      'Computer-Aided Software Engineering',
      'Control Aided Science and Engineering',
      'Cost Aided System Experiments',
      'None of the mentioned'
    ],
    correctAnswer: 'a',
    explanation: 'CASE = Computer-Aided Software Engineering'
  },
  {
    id: 's1-mcq-8',
    number: 8,
    sheet: 1,
    section: 'MCQ',
    text: '________ is defined as the process of generating analysis and designing documents?',
    options: [
      'Re-engineering',
      'Reverse engineering',
      'Software re-engineering',
      'Science and engineering'
    ],
    correctAnswer: 'b',
    explanation: 'Reverse engineering analyzes existing systems to create design documents'
  },
  {
    id: 's1-mcq-9',
    number: 9,
    sheet: 1,
    section: 'MCQ',
    text: 'The activity that distributes estimated effort across the planned project duration by allocating the effort to specific software developing tasks is ____________',
    options: [
      'Project scheduling',
      'Detailed schedule',
      'Macroscopic schedule',
      'None of the mentioned'
    ],
    correctAnswer: 'a',
    explanation: 'Project scheduling allocates effort to tasks over the project timeline'
  },
  {
    id: 's1-mcq-10',
    number: 10,
    sheet: 1,
    section: 'MCQ',
    text: 'What is a Functional Requirement?',
    options: [
      'specifies the tasks the program must complete',
      'specifies the tasks the program should not complete',
      'specifies the tasks the program must not work',
      'All of the mentioned'
    ],
    correctAnswer: 'a',
    explanation: 'Functional requirements define what the system must do'
  }
];

export const SHEET_1_TF: Question[] = [
  {
    id: 's1-tf-1',
    number: 1,
    sheet: 1,
    section: 'TF',
    text: 'Software is a product and can be manufactured using the same technologies used for other engineering artifacts.',
    correctAnswer: 'FALSE',
    explanation: 'Software is engineered/custom-built, not manufactured in the traditional sense like hardware.'
  },
  {
    id: 's1-tf-2',
    number: 2,
    sheet: 1,
    section: 'TF',
    text: 'WebApps are a mixture of print publishing and software development, making their development outside the realm of software engineering practice.',
    correctAnswer: 'FALSE',
    explanation: 'Modern WebApps are full software systems and are built utilizing rigorous web engineering frameworks and methodologies.'
  },
  {
    id: 's1-tf-3',
    number: 3,
    sheet: 1,
    section: 'TF',
    text: 'There are no real differences between creating WebApps and MobileApps.',
    correctAnswer: 'FALSE',
    explanation: 'They possess fundamentally different architecture, caching strategy, touch paradigms, and user interface constraints.'
  },
  {
    id: 's1-tf-4',
    number: 4,
    sheet: 1,
    section: 'TF',
    text: 'In its simplest form an external computing device may access cloud data services using a web browser.',
    correctAnswer: 'TRUE',
    explanation: 'A web browser translates standard HTTP requests to query backend cloud API databases easily.'
  },
  {
    id: 's1-tf-5',
    number: 5,
    sheet: 1,
    section: 'TF',
    text: 'Product line software development depends the reuse of existing software components to provide software engineering leverage.',
    correctAnswer: 'TRUE',
    explanation: 'Reusing components decreases verification cycles and allows building product lines very efficiently.'
  },
  {
    id: 's1-tf-6',
    number: 6,
    sheet: 1,
    section: 'TF',
    text: 'Software engineering umbrella activities are only applied during the initial phases of software development projects.',
    correctAnswer: 'FALSE',
    explanation: 'Umbrella activities (like Risk Management and Quality Assurance) run throughout the entire project lifecycle.'
  },
  {
    id: 's1-tf-7',
    number: 7,
    sheet: 1,
    section: 'TF',
    text: 'Planning ahead for software reuse reduces the cost and increases the value of the systems into which they are incorporated.',
    correctAnswer: 'TRUE',
    explanation: 'Planned modular design patterns create robust reusable assets that reduce downstream maintenance costs.'
  },
  {
    id: 's1-tf-8',
    number: 8,
    sheet: 1,
    section: 'TF',
    text: 'The essence of software engineering practice might be described as understand the problem, plan a solution, carry out the plan, and examine the result for accuracy.',
    correctAnswer: 'TRUE',
    explanation: 'This models the classic systematic feedback loop that defines the engineering process.'
  },
  {
    id: 's1-tf-9',
    number: 9,
    sheet: 1,
    section: 'TF',
    text: 'In agile process models the only deliverable work product is the working program.',
    correctAnswer: 'FALSE',
    explanation: 'Agile also delivers tests, configurations, user guides, and retrospective knowledge structures.'
  },
  {
    id: 's1-tf-10',
    number: 10,
    sheet: 1,
    section: 'TF',
    text: 'Most software development projects are initiated to try to meet some business need.',
    correctAnswer: 'TRUE',
    explanation: 'Software exists primarily to generate value, solve problems, and achieve concrete business tasks.'
  }
];

export const SHEET_2_MCQ: Question[] = [
  {
    id: 's2-mcq-1',
    number: 1,
    sheet: 2,
    section: 'MCQ',
    text: 'Choose the correct option in terms of Issues related to professional responsibility',
    options: [
      'Confidentiality',
      'Intellectual property rights',
      'Both Confidentiality & Intellectual property rights',
      'Managing Client Relationships'
    ],
    correctAnswer: 'c',
    explanation: 'Professional responsibility covers core values including both confidentiality and intellectual property rights.'
  },
  {
    id: 's2-mcq-2',
    number: 2,
    sheet: 2,
    section: 'MCQ',
    text: "Software engineers should not use their technical skills to misuse other people's computers. Here the term misuse refers to:",
    options: [
      'Unauthorized access to computer material',
      'Unauthorized modification of computer material',
      'Dissemination of viruses or other malware',
      'All of the mentioned'
    ],
    correctAnswer: 'd',
    explanation: 'Misuse incorporates all spectrums: unauthorized intrusion, modification, and spreading malicious code.'
  },
  {
    id: 's2-mcq-3',
    number: 3,
    sheet: 2,
    section: 'MCQ',
    text: 'Explain what is meant by PRODUCT with reference to one of the eight principles as per the ACM/IEEE Code of Ethics?',
    options: [
      'The product should be easy to use',
      'Software engineers shall ensure that their products and related modifications meet the highest professional standards possible',
      'Software engineers shall ensure that their products and related modifications satisfy the client',
      'It means that the product designed/created should be easily available'
    ],
    correctAnswer: 'b',
    explanation: 'The PRODUCT principle mandates that software engineering outputs meet the highest standards of professional craft possible.'
  },
  {
    id: 's2-mcq-4',
    number: 4,
    sheet: 2,
    section: 'MCQ',
    text: 'Identify an ethical dilemma from the situations mentioned below:',
    options: [
      'Your employer releases a safety-critical system without finishing the testing of the system',
      'Refusing to undertake a project',
      'Agreement in principle with the policies of senior management',
      'All of the mentioned'
    ],
    correctAnswer: 'a',
    explanation: 'Deploying untested safety software compromises human safety and directly violates ethical standards, presenting a true ethical dilemma.'
  },
  {
    id: 's2-mcq-5',
    number: 5,
    sheet: 2,
    section: 'MCQ',
    text: 'Identify the correct statement: "Software engineers shall',
    options: [
      'act in a manner that is in the best interests of his expertise and favour.',
      'act consistently with the public interest.',
      'ensure that their products only meet the SRS.',
      'all of the mentioned'
    ],
    correctAnswer: 'b',
    explanation: 'ACM/IEEE Code of Ethics Principle 1 states that software engineers shall act consistently with the PUBLIC INTEREST.'
  },
  {
    id: 's2-mcq-6',
    number: 6,
    sheet: 2,
    section: 'MCQ',
    text: 'Select the incorrect statement: "Software engineers should',
    options: [
      'not knowingly accept work that is outside your competence.',
      'not use your technical skills to misuse other people\'s computers.',
      'be dependent on their colleagues.',
      'maintain integrity and independence in their professional judgment.'
    ],
    correctAnswer: 'c',
    explanation: 'Professional guidelines state software engineers should maintain professional independence and self-governance rather than reliance.'
  },
  {
    id: 's2-mcq-7',
    number: 7,
    sheet: 2,
    section: 'MCQ',
    text: 'Efficiency in a software product does not include ________',
    options: [
      'responsiveness',
      'licensing',
      'memory utilization',
      'processing time'
    ],
    correctAnswer: 'b',
    explanation: 'Licensing represents a legal/business concern, whereas the others are raw technical resource features.'
  },
  {
    id: 's2-mcq-8',
    number: 8,
    sheet: 2,
    section: 'MCQ',
    text: 'As per an IBM report, project cancellations and overruns are caused by:',
    options: [
      'Lack of adequate training in software engineering',
      'Lack of software ethics and understanding',
      'Management issues in the company',
      'All of the mentioned'
    ],
    correctAnswer: 'd',
    explanation: 'Comprehensive metrics list training gaps, poor ethical structures, and administration bottlenecks as primary cancellation triggers.'
  },
  {
    id: 's2-mcq-9',
    number: 9,
    sheet: 2,
    section: 'MCQ',
    text: 'The reason for software bugs and failures is due to',
    options: [
      'Software companies',
      'Software Developers',
      'Both Software companies and Developers',
      'All of the mentioned'
    ],
    correctAnswer: 'c',
    explanation: 'Bugs are a byproduct of organizational process failures combined with individual developer cognitive errors.'
  },
  {
    id: 's2-mcq-10',
    number: 10,
    sheet: 2,
    section: 'MCQ',
    text: 'Software deteriorates rather than wears out because',
    options: [
      'Software suffers from exposure to hostile environment.',
      'Defects are more likely to arise after software has been used often.',
      'Multiple change requests introduce errors in component interactions.',
      'Software spare parts become harder to order.'
    ],
    correctAnswer: 'c',
    explanation: 'Repeated modifications and custom patches upset internal boundaries, introducing bugs and leading to system rot.'
  }
];

export const SHEET_2_TF: Question[] = [
  {
    id: 's2-tf-1',
    number: 1,
    sheet: 2,
    section: 'TF',
    text: 'Company has latest computers and state-of-the-art software tools, so we shouldn\'t worry about the quality of the product.',
    correctAnswer: 'FALSE',
    explanation: 'Excellent tools cannot compensate for poor system processes or lack of formal engineering discipline.'
  },
  {
    id: 's2-tf-2',
    number: 2,
    sheet: 2,
    section: 'TF',
    text: 'Software is a product and can be manufactured using the same technologies used for other engineering artifacts.',
    correctAnswer: 'FALSE',
    explanation: 'Software has distinct properties like replication costlessness and zero hardware-wear decline.'
  },
  {
    id: 's2-tf-3',
    number: 3,
    sheet: 2,
    section: 'TF',
    text: 'There are no real differences between creating Web Apps and Mobile-apps.',
    correctAnswer: 'FALSE',
    explanation: 'Differences span memory profiles, connection instability, store distribution procedures, and UI view lifecycles.'
  },
  {
    id: 's2-tf-4',
    number: 4,
    sheet: 2,
    section: 'TF',
    text: 'WebApps are a mixture of print publishing and software development, making their development outside the realm of software engineering practice.',
    correctAnswer: 'FALSE',
    explanation: 'Complex interactive backend components require rigorous software engineering principles.'
  },
  {
    id: 's2-tf-5',
    number: 5,
    sheet: 2,
    section: 'TF',
    text: 'Product line software development depends the reuse of existing software components to provide software engineering leverage.',
    correctAnswer: 'TRUE',
    explanation: 'Standardized baseline components act as modular foundations for variant production.'
  },
  {
    id: 's2-tf-6',
    number: 6,
    sheet: 2,
    section: 'TF',
    text: 'In its simplest form an external computing device may access cloud data services using a web browser.',
    correctAnswer: 'TRUE',
    explanation: 'Browsers are universal endpoints configured to parse and communicate structured database streams.'
  },
  {
    id: 's2-tf-7',
    number: 7,
    sheet: 2,
    section: 'TF',
    text: 'There are software engineering fundamentals that apply to all of software systems.',
    correctAnswer: 'TRUE',
    explanation: 'Universals like security, clear verification, accurate blueprints, and structured implementation apply to all code.'
  },
  {
    id: 's2-tf-8',
    number: 8,
    sheet: 2,
    section: 'TF',
    text: 'Different processes are used for same types of software.',
    correctAnswer: 'FALSE',
    explanation: 'While customization exists, similar software products are created using matching processes and frameworks.'
  },
  {
    id: 's2-tf-9',
    number: 9,
    sheet: 2,
    section: 'TF',
    text: 'The system should perform efficiently and should not waste resources.',
    correctAnswer: 'TRUE',
    explanation: 'Algorithmic performance and host resources (memory, space) optimization is an engineering duty.'
  },
  {
    id: 's2-tf-10',
    number: 10,
    sheet: 2,
    section: 'TF',
    text: 'The development of the World Wide Web has had a profound effect on all of our lives.',
    correctAnswer: 'TRUE',
    explanation: 'The web converted standalone computing into connected global ecosystems, altering commerce, media, and knowledge systems.'
  }
];

export const SHEET_3_MCQ: Question[] = [
  {
    id: 's3-mcq-1',
    number: 1,
    sheet: 3,
    section: 'MCQ',
    text: 'The Unified Modeling Language (UML) has become an effective standard for software modeling. How many different notations does it have?',
    options: [
      'Three',
      'Four',
      'Six',
      'Nine'
    ],
    correctAnswer: 'd',
    explanation: 'UML defines 9 major diagram types representing various behavioral, architectural, and interaction aspects.'
  },
  {
    id: 's3-mcq-2',
    number: 2,
    sheet: 3,
    section: 'MCQ',
    text: 'Which model in system modelling depicts the dynamic behaviour of the system?',
    options: [
      'Context Model',
      'Behavioral Model',
      'Data Model',
      'Object Model'
    ],
    correctAnswer: 'b',
    explanation: 'Behavioral models map how systems respond to external impulses or internal state triggers.'
  },
  {
    id: 's3-mcq-3',
    number: 3,
    sheet: 3,
    section: 'MCQ',
    text: 'Which model in system modelling depicts the static nature of the system?',
    options: [
      'Behavioral Model',
      'Context Model',
      'Data Model',
      'Structural Model'
    ],
    correctAnswer: 'd',
    explanation: 'Structural models depict the static anatomy of classes, attributes, operations, and objects.'
  },
  {
    id: 's3-mcq-4',
    number: 4,
    sheet: 3,
    section: 'MCQ',
    text: 'Which perspective in system modelling shows the system or data architecture.',
    options: [
      'Structural perspective',
      'Behavioral perspective',
      'External perspective',
      'All of the mentioned'
    ],
    correctAnswer: 'a',
    explanation: 'A structural perspective designs the physical architecture map, classes, attributes, and dependencies.'
  },
  {
    id: 's3-mcq-5',
    number: 5,
    sheet: 3,
    section: 'MCQ',
    text: 'The UML supports event-based modeling using ____________ diagrams.',
    options: [
      'Deployment',
      'Collaboration',
      'State chart',
      'All of the mentioned'
    ],
    correctAnswer: 'c',
    explanation: 'State charts model reactive systems that move from state to state in response to discrete triggers.'
  },
  {
    id: 's3-mcq-6',
    number: 6,
    sheet: 3,
    section: 'MCQ',
    text: 'Which of the following diagram is not supported by UML considering Data-driven modeling?',
    options: [
      'Activity',
      'Data Flow Diagram (DFD)',
      'State Chart',
      'Component'
    ],
    correctAnswer: 'b',
    explanation: 'Data Flow Diagrams (DFDs) belong to older structured analysis methodologies rather than object-oriented UML.'
  },
  {
    id: 's3-mcq-7',
    number: 7,
    sheet: 3,
    section: 'MCQ',
    text: '______________ & ______________ diagrams of UML represent Interaction modeling.',
    options: [
      'Use Case, Sequence',
      'Class, Object',
      'Activity, State Chart',
      'All of the mentioned'
    ],
    correctAnswer: 'a',
    explanation: 'Use Cases show users & services, while Sequence diagrams model temporal message transmission.'
  },
  {
    id: 's3-mcq-8',
    number: 8,
    sheet: 3,
    section: 'MCQ',
    text: 'Which level of Entity Relationship Diagram (ERD) models all entities and relationships?',
    options: [
      'Level 1',
      'Level 2',
      'Level 3',
      'Level 4'
    ],
    correctAnswer: 'b',
    explanation: 'Level 2 ERD models entities, their attributes, and the relational mapping connections clearly.'
  },
  {
    id: 's3-mcq-9',
    number: 9,
    sheet: 3,
    section: 'MCQ',
    text: '___________ classes are used to create the interface that the user sees and interacts with as the software is used.',
    options: [
      'Controller',
      'Entity',
      'Boundary',
      'Business'
    ],
    correctAnswer: 'c',
    explanation: 'Boundary classes describe components placed of system edges, bridging human users and inside model systems.'
  },
  {
    id: 's3-mcq-10',
    number: 10,
    sheet: 3,
    section: 'MCQ',
    text: 'Which of the following statement is incorrect regarding the Class-responsibility collaborator (CRC) modeling?',
    options: [
      'All use-case scenarios and corresponding use-case diagrams are organized into categories in CRC modelling',
      'The review leader reads the use-case deliberately',
      'Only developers in the review of the CRC model are given a subset of the CRC model index cards',
      'All of the mentioned'
    ],
    correctAnswer: 'c',
    explanation: 'All evaluation participants (e.g., domain specialists, testers, coordinators) recieve card allocations, not just programmers.'
  }
];

export const SHEET_3_TF: Question[] = [
  {
    id: 's3-tf-1',
    number: 1,
    sheet: 3,
    section: 'TF',
    text: 'Activity diagrams are used to model the processing of data.',
    correctAnswer: 'TRUE',
    explanation: 'Activity diagrams model the detailed operational workflows and data flow processing.'
  },
  {
    id: 's3-tf-2',
    number: 2,
    sheet: 3,
    section: 'TF',
    text: 'WebApps are a mixture of print publishing and software development, making their development outside the realm of software engineering practice.',
    correctAnswer: 'FALSE',
    explanation: 'Interactive server-side and client-side web software conforms to systematic software engineering.'
  },
  {
    id: 's3-tf-3',
    number: 3,
    sheet: 3,
    section: 'TF',
    text: 'Product line software development depends the reuse of existing software components to provide software engineering leverage.',
    correctAnswer: 'TRUE',
    explanation: 'Systemic reuse is fundamental to optimizing product variant design spaces.'
  },
  {
    id: 's3-tf-4',
    number: 4,
    sheet: 3,
    section: 'TF',
    text: 'There are no real differences between creating WebApps and Mobile-Apps.',
    correctAnswer: 'FALSE',
    explanation: 'They diverge in lifecycle speeds, local resource caps, client store audits, and event response setups.'
  },
  {
    id: 's3-tf-5',
    number: 5,
    sheet: 3,
    section: 'TF',
    text: 'In its simplest form an external computing device may access cloud data services using a web browser.',
    correctAnswer: 'TRUE',
    explanation: 'Universal standard browsers allow any connected hardware terminal to pull remote cloud store endpoints.'
  },
  {
    id: 's3-tf-6',
    number: 6,
    sheet: 3,
    section: 'TF',
    text: 'Model-driven engineering is just a theoretical concept. It cannot be converted into a working/executable code.',
    correctAnswer: 'FALSE',
    explanation: 'Code generator modules successfully translate verified architectural models into fully working code packages.'
  },
  {
    id: 's3-tf-7',
    number: 7,
    sheet: 3,
    section: 'TF',
    text: 'Software processes can be constructed out of pre-existing software patterns to best meet the needs of a software project.',
    correctAnswer: 'TRUE',
    explanation: 'Process tailoring uses structured reusable process patterns matching the business team context.'
  },
  {
    id: 's3-tf-8',
    number: 8,
    sheet: 3,
    section: 'TF',
    text: 'A good software development team always uses the same task set for every project to insure high quality work products.',
    correctAnswer: 'FALSE',
    explanation: 'Different projects warrant distinct task flows depending on timeline pace, risk targets, and architecture complexity.'
  },
  {
    id: 's3-tf-9',
    number: 9,
    sheet: 3,
    section: 'TF',
    text: 'Planning ahead for software reuse reduces the cost and increases the value of the systems into which they are incorporated.',
    correctAnswer: 'TRUE',
    explanation: 'Anticipatory code reuse practices lower development costs and reduce defect density systematically.'
  },
  {
    id: 's3-tf-10',
    number: 10,
    sheet: 3,
    section: 'TF',
    text: 'Software engineering umbrella activities are only applied during the initial phases of software development projects.',
    correctAnswer: 'FALSE',
    explanation: 'Umbrella activities (like configurations management, reviews, and monitoring) occur side-by-side with all active phases.'
  }
];

export const ALL_QUESTIONS: Question[] = [
  ...SHEET_1_MCQ,
  ...SHEET_1_TF,
  ...SHEET_2_MCQ,
  ...SHEET_2_TF,
  ...SHEET_3_MCQ,
  ...SHEET_3_TF
];
