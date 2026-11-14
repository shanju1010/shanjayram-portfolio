import { useState } from 'react';
import { ArrowUpRight, Award, BookOpen } from 'lucide-react';
const credentials = [
  {
    "id": "nptel-programming-java",
    "title": "Programming in Java — Elite",
    "issuer": "NPTEL · IIT Kharagpur",
    "kind": "Course completion",
    "date": "July–October 2026",
    "description": "Completed the 12-week course with a consolidated score of 79%.",
    "featured": true,
    "document": "nptel-programming-java.pdf"
  },
  {
    "id": "unbound-orbit-first-prize",
    "title": "First Prize — Problem Statement Brainstorming",
    "issuer": "Ramco Institute of Technology",
    "kind": "Award",
    "date": "25 July 2026",
    "description": "Recognized in the brainstorming session on problem statements at Unbound Orbit.",
    "featured": true,
    "document": "unbound-orbit-first-prize.webp"
  },
  {
    "id": "google-introduction-ai",
    "title": "Introduction to AI",
    "issuer": "Google · Coursera",
    "kind": "Course completion",
    "date": "17 June 2026",
    "description": "Completed the Google introductory course on artificial intelligence.",
    "featured": true,
    "document": "google-introduction-ai.webp"
  },
  {
    "id": "mongodb-basics",
    "title": "MongoDB Basics for Students",
    "issuer": "MongoDB",
    "kind": "Course completion",
    "date": "07-08-2026",
    "description": "Completed the student course in MongoDB basics.",
    "featured": true,
    "document": "mongodb-basics.webp"
  },
  {
    "id": "ibm-large-language-models",
    "title": "Introduction to Large Language Models",
    "issuer": "IBM SkillsBuild",
    "kind": "Course completion",
    "date": "",
    "description": "Completed the introductory large language models course.",
    "featured": true,
    "document": "ibm-large-language-models.webp"
  },
  {
    "id": "pals-think-like-engineer",
    "title": "Think Like an Engineer",
    "issuer": "PALS",
    "kind": "Workshop participation",
    "date": "26 September 2026",
    "description": "Hands-on engineering workshop conducted by Prof. Sivakumar M. Srinivasan, IIT Madras, hosted by Vivekanandha College of Engineering for Women.",
    "featured": true,
    "document": "pals-think-like-engineer.webp"
  },
  {
    "id": "gemini-certified-student",
    "title": "Gemini Certified Student — University",
    "issuer": "Google for Education",
    "kind": "Student credential",
    "date": "13 November 2025",
    "description": "Awarded for basic knowledge and competencies in using Google AI. Valid through 13 November 2028.",
    "featured": false,
    "document": "gemini-certified-student.webp"
  },
  {
    "id": "google-ai-productivity",
    "title": "Maximize Productivity With AI Tools",
    "issuer": "Google · Coursera",
    "kind": "Course completion",
    "date": "22 June 2026",
    "description": "Completed the Google course on productivity with AI tools.",
    "featured": false,
    "document": "google-ai-productivity.webp"
  },
  {
    "id": "ibm-first-chatbot",
    "title": "Build Your First Chatbot",
    "issuer": "IBM SkillsBuild",
    "kind": "Course completion",
    "date": "",
    "description": "Completed the introductory chatbot-building course.",
    "featured": false,
    "document": "ibm-first-chatbot.webp"
  },
  {
    "id": "c-for-beginners",
    "title": "C for Beginners",
    "issuer": "Great Learning",
    "kind": "Course completion",
    "date": "16 November 2025",
    "description": "Completed the beginner course in C programming.",
    "featured": false,
    "document": "c-for-beginners.webp"
  },
  {
    "id": "gdg-ai-digital-intelligence",
    "title": "AI & Digital Intelligence",
    "issuer": "GDG On Campus · Ramco Institute of Technology",
    "kind": "Workshop participation",
    "date": "24 January 2026",
    "description": "Participated in a hands-on session covering AI fundamentals, AI agents and modern AI tools.",
    "featured": false,
    "document": "gdg-ai-digital-intelligence.webp"
  },
  {
    "id": "pals-autonomous-mobile-robots",
    "title": "Autonomous Mobile Robots (AMRs)",
    "issuer": "PALS",
    "kind": "Event participation",
    "date": "31 July 2026",
    "description": "Attended a virtual session by Sai Nithin Krishna Jonnalagadda, COO and Co-Founder, Robotspace.",
    "featured": false,
    "document": "pals-autonomous-mobile-robots.webp"
  },
  {
    "id": "hack-to-future",
    "title": "HackToFuture4.0",
    "issuer": "St. Joseph Engineering College, Vamanjoor",
    "kind": "Event participation",
    "date": "",
    "description": "Participated in HackToFuture4.0.",
    "featured": false,
    "document": "hack-to-future.webp"
  },
  {
    "id": "science-day-project-exhibition",
    "title": "National Science Day — Project Exhibition",
    "issuer": "Ramco Institute of Technology · CSE Department",
    "kind": "Event participation",
    "date": "25 February 2026",
    "description": "Participated in the National Science Day project exhibition.",
    "featured": false,
    "document": "science-day-project-exhibition.webp"
  },
  {
    "id": "ai-research-software-quiz",
    "title": "Research Software for AI-Enabled Research and Development",
    "issuer": "Student Research Council · Ramco Institute of Technology",
    "kind": "Event participation",
    "date": "25–27 September 2026",
    "description": "Participated in the online research software quiz.",
    "featured": false,
    "document": "ai-research-software-quiz.webp"
  },
  {
    "id": "quizoff-ai",
    "title": "QuizOff 2026 — AI Quiz",
    "issuer": "CampusCrew · Hosted on Unstop",
    "kind": "Event participation",
    "date": "19 July 2026",
    "description": "Participated in the AI quiz competition.",
    "featured": false,
    "document": "quizoff-ai.webp"
  },
  {
    "id": "intellexa-brain-blitz",
    "title": "Brain Blitz Quiz — INTELLEXA’26",
    "issuer": "Ramco Institute of Technology · CSE Department",
    "kind": "Event participation",
    "date": "2 April 2026",
    "description": "Participated in the quiz at the national-level technical symposium.",
    "featured": false,
    "document": "intellexa-brain-blitz.webp"
  },
  {
    "id": "tata-crucible",
    "title": "TATA Crucible Campus Quiz 2025",
    "issuer": "Tata Group",
    "kind": "Event participation",
    "date": "2025",
    "description": "Participated in the campus quiz.",
    "featured": false,
    "document": "tata-crucible.webp"
  },
  {
    "id": "online-technical-quiz",
    "title": "Online Technical Quiz",
    "issuer": "Ramco Institute of Technology",
    "kind": "Event participation",
    "date": "",
    "description": "Participated in the online technical quiz hosted on Unstop.",
    "featured": false,
    "document": "online-technical-quiz.webp"
  },
  {
    "id": "quantitative-aptitude",
    "title": "Quantitative Aptitude Test",
    "issuer": "Ramco Institute of Technology · EEE Department / IE(I) EE Student Chapter",
    "kind": "Event participation",
    "date": "26 February 2026",
    "description": "Participated in the quantitative aptitude test.",
    "featured": false,
    "document": "quantitative-aptitude.webp"
  },
  {
    "id": "dsa-deeptech",
    "title": "DSA for DeepTech — International Bootcamp",
    "issuer": "Brainovision Solutions India · Hosted by Anjuman Institute of Technology and Management",
    "kind": "Workshop participation",
    "date": "1–30 May 2026",
    "description": "Participated in a one-month virtual bootcamp on data structures and algorithms for DeepTech applications.",
    "featured": false,
    "document": "dsa-deeptech.webp"
  },
  {
    "id": "brainstorming-participation",
    "title": "Brainstorming Session on Problem Statement",
    "issuer": "Ramco Institute of Technology · CSE (AI & ML) Department",
    "kind": "Event participation",
    "date": "25 July 2026",
    "description": "Participation recognition for the problem statement brainstorming session; the separate first-prize certificate is featured above.",
    "featured": false,
    "document": "brainstorming-participation.webp"
  },
  {
    "id": "infinix-hackathon",
    "title": "INFINIX’26 — National Level Technical Hackathon",
    "issuer": "Ramco Institute of Technology · Information Technology Department",
    "kind": "Event participation",
    "date": "10 September 2026",
    "description": "Participated in the national-level technical hackathon.",
    "featured": false,
    "document": "infinix-hackathon.webp"
  }
];

export default function Credentials(){
 const [expanded,setExpanded]=useState(false);
 const categories=['All','Course completion','Student credential','Award','Workshop participation','Event participation'];
 const [category,setCategory]=useState('All');
 const visible=credentials.filter(c=>(expanded||c.featured)&&(category==='All'||c.kind===category));
 return <section className="credentials" id="credentials" aria-labelledby="credentials-title">
  <div className="section-heading"><div><p className="eyebrow">02 / LEARNING & RECOGNITION</p><h2 id="credentials-title">Learning with <em>purpose.</em></h2></div><p>Selected course completions, an award,<br/>and hands-on learning experiences.</p></div>
  <div className="credentials-intro"><span>{credentials.filter(c=>c.featured).length} HIGHLIGHTS / {credentials.length} CREDENTIALS</span><p>Exploring AI, software and practical engineering through courses, workshops and competitions.</p></div>
  {expanded&&<div className="credential-filters" role="group" aria-label="Filter credentials">{categories.map(kind=><button key={kind} type="button" aria-pressed={category===kind} onClick={()=>setCategory(kind)}>{kind==='All'?'All credentials':kind}</button>)}</div>}
  <p className="credential-count" role="status">Showing {visible.length} {expanded?(visible.length===1?'credential':'credentials'):'highlights'}</p>
  <div className="credentials-grid" id="credential-collection">{visible.map(c=><article className="credential-card" key={c.id}>
   <a className="credential-image" href={`/certificates/${c.document}`} target="_blank" rel="noreferrer" aria-label={`View ${c.title} certificate in a new tab`}><img src={`/certificates/${c.id}-thumb.webp`} alt={`${c.title} certificate issued to Shanjayram M`} loading="lazy" decoding="async" width="640" height="480"/></a>
   <div className="credential-copy"><span className={`credential-kind ${c.kind==='Award'?'credential-award':''}`}>{c.kind==='Award'?<Award size={16} aria-hidden="true"/>:<BookOpen size={16} aria-hidden="true"/>}{c.kind}</span><h3>{c.title}</h3><p className="credential-issuer">{c.issuer}</p>{c.date&&<p className="credential-date">{c.date}</p>}<p className="credential-description">{c.description}</p><a className="credential-link" href={`/certificates/${c.document}`} target="_blank" rel="noreferrer" aria-label={`View ${c.title} certificate in a new tab`}>View certificate <ArrowUpRight size={18} aria-hidden="true"/></a></div>
  </article>)}</div>
  <div className="credentials-footer"><p>Course completions, awards and participation are labelled separately. Certificates open in a new tab.</p><button className="button button-outline" type="button" aria-expanded={expanded} aria-controls="credential-collection" onClick={()=>{setExpanded(!expanded);setCategory('All');if(expanded)document.getElementById('credentials')?.scrollIntoView({block:'start',behavior:'instant'})}}>{expanded?'Show highlights only':`View all ${credentials.length} credentials`} <ArrowUpRight size={18} aria-hidden="true"/></button></div>
 </section>
}
