import { FaYoutube, FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxNotionLogo,
  RxCalendar,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "N8N",
    image: "n8n.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "make",
    image: "make.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "slack",
    image: "slack.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "opal",
    image: "opal.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "zapier",
    image: "zapier.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "brevo",
    image: "brevo.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "claude",
    image: "claude.png",
    width: 100,
    height: 100,
  },
  {
    skill_name: "gpt",
    image: "gpt.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "celigo",
    image: "celigo.png",
    width: 95,
    height: 95,
  },


] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/_israil__khan/",
  },
  {
    name: "Facebook",
    icon: RxLinkedinLogo,
    link: "https://in.linkedin.com/in/md-akhtar-b86b79365",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/israil_davis",
  },
] as const;

export const FRONTEND_SKILL = [

  {
    skill_name: "Elevenlabs",
    image: "ElevenLabs.png",
    width: 95,
    height: 95,
  },

  {
    skill_name: "Twilio",
    image: "twilio.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "hubspot",
    image: "hubspot.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "mailchimp",
    image: "mailchimp.png",
    width: 80,
    height: 80,
  },


  {
    skill_name: "gemini",
    image: "gemini.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [


] as const;

export const FULLSTACK_SKILL = [
] as const;

export const OTHER_SKILL = [

] as const;

export const PROJECTS = [
  {
    title: "AI Research Agent: Chat for Instant Market & Competitor Analysis",
    slug: "tekisky-mart",
    image: "/projects/airesearch.png",
    description: "Stop wasting hours on manual research. This powerful AI agent turns simple chat messages into comprehensive reports on companies, markets, and social trends. Ask it anything, and get back summarized insights, scraped web data, and social media profiles in seconds. Subscribe to Astrawave Pro to deploy your personal AI analyst and make decisions 10x faster.",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
  {
    title: "AI Content Machine: 30 Days of Posts in 3 Minutes",
    slug: "tekisky",
    image: "/projects/aicontent.png",
    description: "Stop staring at a blank page. This workflow turns a single topic into a complete 30-day social media content calendar, written by AI and organized in Google Sheets. Reclaim 10+ hours per week and never miss a post again. Subscribe to Astrawave Pro to deploy this content engine and put your marketing on autopilot.",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
  {
    title: "Instant AI Image Generator (for Blog & Social Media)",
    slug: "speedline-auto-parts",
    image: "/projects/imagegenerator.png",
    description: "Stop searching for stock photos. This workflow turns a simple text prompt into a high-quality, royalty-free image in seconds, ready for your content. Perfect for marketers and creators who need visuals on-demand. **Download now** and generate your next 10 post images in under 5 minutes.",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
  {
    title: "AI Lead Research Agent for Telegram",
    slug: "israil_project", // unique, URL-friendly string
    image: "/projects/leadresearch.png", // place image in public/projects/
    description: "Turn your Telegram into a powerful lead research engine. Just type a company name, and this AI-powered workflow automatically scrapes their website, Google Maps reviews, and key LinkedIn profiles to deliver a complete, actionable sales dossier in seconds. Subscribe to Astrawave Pro to deploy your 24/7 research assistant and 10x your prospecting speed.",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
  {
    title: "AI Sales Agent: Instant Lead Qualification & Calendar Booking",
    slug: "israil_project", // unique, URL-friendly string
    image: "/projects/aisales.png", // place image in public/projects/
    description: "Never lose a hot lead again. This AI agent instantly qualifies inbound form submissions, enriches their data with a LinkedIn profile, summarizes the opportunity, and sends a calendar booking link—all before your coffee gets cold. Subscribe to Astrawave Pro to deploy this automated sales rep in under 5 minutes and 3x your speed-to-lead.",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
  {
    title: "Instant AI Proposal Generator (JotForm to Google Docs)",
    slug: "israil_project", // unique, URL-friendly string
    image: "/projects/proposalgenerator.png", // place image in public/projects/
    description: "Stop writing proposals and start closing deals. This workflow instantly turns a simple JotForm submission into a polished, AI-drafted proposal in Google Docs, then emails it for review. Subscribe to Astrawave Pro to unlock this workflow and win back 10+ hours a week. Your next winning bid is one click away.",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
  {
    title: "AI Invoice & Receipt Parser (Scan-to-Sheet)",
    slug: "israil_project", // unique, URL-friendly string
    image: "/projects/aiinvoice.jpg", // place image in public/projects/
    description: "Stop manually transcribing invoices and receipts. This workflow uses OpenAI's OCR to instantly read any document, extract key data like amounts and dates, and pipe it directly into your spreadsheet. Download now for free and turn that shoebox of receipts into a clean, searchable database in minutes.",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
  {
    title: "AI Prompt Optimizer: Transform Your Ideas into Masterpieces",
    slug: "israil_project", // unique, URL-friendly string
    image: "/projects/aiprompt.png", // place image in public/projects/
    description: "Struggling to get the perfect output from your AI tools? This AI Prompt Optimizer refines your text inputs, transforming simple ideas into detailed, high-quality prompts that generate masterpieces. Whether you're creating compelling blog posts, realistic images, or complex code, this tool unlocks the full potential of GPT-4, DALL-E, Midjourney, and other AI models. Say goodbye to vague results and bring your wildest concepts to life with precision and brilliance..",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
  {
    title: "AI-Powered LinkedIn Content Creation & Scheduling",
    slug: "israil_project", // unique, URL-friendly string
    image: "/projects/linkedinautopost.png", // place image in public/projects/
    description: "Boost your professional presence effortlessly! This AI agent leverages GPT-4 to craft engaging LinkedIn posts and DALL-E to generate captivating visuals. From compelling text to eye-catching images, create high-quality content that resonates with your audience. Integrate with your favorite scheduler for automated posting and maintain a consistent, impactful presence on LinkedIn without the manual grind.",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
  {
    title: "AI YouTube Video Summarizer: Learn More in Less Time",
    slug: "israil_project", // unique, URL-friendly string
    image: "/projects/youtubesummarizer.png", // place image in public/projects/
    description: "Drowning in long YouTube videos? This AI summarizer cuts through the noise, instantly condensing hours of content into key takeaways, bullet points, and actionable insights. Whether you're a student, researcher, or just short on time, this tool helps you absorb more information and focus on what matters most. Stop scrubbing and start learning smarter.",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
  {
    title: "AI Email Triage & Routing Agent (Gmail & OpenAI)",
    slug: "israil_project", // unique, URL-friendly string
    image: "/projects/aiemail.png", // place image in public/projects/
    description: "Is your inbox a bottleneck? This AI agent reads, classifies, and routes every new Gmail message to the right person or department—instantly. Stop manually forwarding emails and never miss a hot lead again. Subscribe to Astrawave Pro to deploy your automated inbox manager in under 5 minutes.",
    externalUrl: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "Notion",
        icon: RxNotionLogo,
        link: "https://www.notion.so/N8N-Automation-Projects-29de6ea19bc94613baba17202060d61c?source=copy_link",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://in.linkedin.com/in/md-akhtar-b86b79365",
      },
    ],
  },
  {
    title: "About",
    data: [

      {
        name: "Contact Me",
        icon: RxCalendar,
        link: "https://cal.com/israil-khan-k4xrld/book-a-call-with-akhtar",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "/#about-me",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
] as const;


