/**
 * PROGRAMS DATA
 * -------------
 * Single source of truth for all 9 activity/program pages.
 * Each program automatically gets its own page at:
 *      /programs/<slug>
 * via src/pages/ProgramDetail.jsx, and a card on the /programs overview page.
 *
 * TO EDIT CONTENT: change the text below — no need to touch component code.
 * TO ADD A NEW PROGRAM: copy an object, give it a unique slug, add it to the array.
 */

export const PROGRAMS = [
  {
    slug: 'empowerher-initiative',
    shortName: 'EmpowerHer',
    name: 'EmpowerHer Initiative',
    category: 'Gender & Empowerment',
    tagline: 'Building confident, skilled and self-reliant young women.',
    summary:
      'EmpowerHer creates safe spaces for young women and girls in Bamenda to build practical skills, confidence and leadership experience, and to access mentorship that helps them shape their own futures.',
    goals: [
      'Close the skills and confidence gap facing young women in the community',
      'Provide safe spaces for mentorship, dialogue and leadership practice',
      'Connect participants to vocational and entrepreneurial opportunities',
    ],
    activities: [
      'Skills-training workshops (tailoring, soap-making, small business basics)',
      'Girls\u2019 leadership circles and mentorship pairing',
      'Menstrual health and wellbeing sessions',
      'Confidence-building and public speaking workshops',
    ],
    whoItsFor: 'Young women and girls aged 13\u201330 across Bamenda communities.',
    heroImageLabel: 'EmpowerHer hero photo',
    heroImageNote: 'Group photo of participants at a workshop or training session',
    galleryLabels: [
      { label: 'Skills training session', note: 'Hands-on workshop in progress' },
      { label: 'Mentorship circle', note: 'Small group discussion or mentoring moment' },
      { label: 'Graduation / certificate day', note: 'Participants receiving certificates' },
    ],
  },
  {
    slug: 'greenfuture-initiative',
    shortName: 'GreenFuture',
    name: 'GreenFuture Initiative',
    category: 'Environment & Sustainability',
    tagline: 'Young people protecting the Grassfields for the next generation.',
    summary:
      'GreenFuture mobilizes youth around environmental responsibility \u2014 from tree planting and clean-up campaigns to awareness on climate resilience \u2014 protecting the hills and streams that Bamenda calls home.',
    goals: [
      'Increase youth participation in local environmental protection',
      'Reduce waste and promote clean, sustainable neighborhoods',
      'Build awareness of climate change and sustainable practices',
    ],
    activities: [
      'Community tree-planting drives',
      'Neighborhood and market clean-up campaigns',
      'Environmental awareness talks in schools',
      'Waste-sorting and recycling pilot projects',
    ],
    whoItsFor: 'Youth volunteers, schools and community groups across Bamenda.',
    heroImageLabel: 'GreenFuture hero photo',
    heroImageNote: 'Tree planting or clean-up campaign in action',
    galleryLabels: [
      { label: 'Tree planting day', note: 'Volunteers planting seedlings' },
      { label: 'Clean-up campaign', note: 'Group clearing waste in a public space' },
      { label: 'School awareness talk', note: 'Presentation to students' },
    ],
  },
  {
    slug: 'mentorship-career-guidance',
    shortName: 'Mentorship & Career Guidance',
    name: 'Mentorship and Career Guidance Program',
    category: 'Education & Career',
    tagline: 'Pairing young people with mentors who help them find direction.',
    summary:
      'This program connects secondary school and university-age youth with mentors and career guidance sessions, helping them make informed decisions about further education, vocational paths and career options.',
    goals: [
      'Give youth access to mentors working in fields they aspire to',
      'Reduce uncertainty around subject, career and further-study choices',
      'Build practical skills like CV writing and interview preparation',
    ],
    activities: [
      'One-on-one and group mentorship pairing',
      'Career guidance talks and Q&A panels with professionals',
      'CV writing and interview preparation workshops',
      'Campus and career-fair visits',
    ],
    whoItsFor: 'Secondary school leavers and university-age youth.',
    heroImageLabel: 'Mentorship program hero photo',
    heroImageNote: 'Mentor and mentee, or a career guidance session',
    galleryLabels: [
      { label: 'Mentorship pairing session', note: 'One-on-one conversation' },
      { label: 'Career panel', note: 'Panel discussion with professionals' },
      { label: 'CV workshop', note: 'Participants working on documents' },
    ],
  },
  {
    slug: 'community-support-outreach',
    shortName: 'Community Support & Outreach',
    name: 'Community Support and Social Outreach',
    category: 'Community Welfare',
    tagline: 'Standing with the most vulnerable members of our community.',
    summary:
      'Through regular outreach visits, welfare support and donation drives, this program supports vulnerable families, the elderly, and community members facing hardship across Bamenda.',
    goals: [
      'Provide direct support to vulnerable households and individuals',
      'Strengthen a culture of solidarity among young people',
      'Respond quickly to urgent community welfare needs',
    ],
    activities: [
      'Welfare visits to elderly and vulnerable households',
      'Food and essential-items donation drives',
      'Support for families facing emergencies',
      'Volunteer outreach days in underserved neighborhoods',
    ],
    whoItsFor: 'Vulnerable families, the elderly, and underserved communities in and around Bamenda.',
    heroImageLabel: 'Community outreach hero photo',
    heroImageNote: 'Volunteers during an outreach or donation visit',
    galleryLabels: [
      { label: 'Welfare visit', note: 'Volunteers visiting a household' },
      { label: 'Donation drive', note: 'Items being packed or handed out' },
      { label: 'Outreach team', note: 'Group photo of volunteers on outreach day' },
    ],
  },
  {
    slug: 'youth-innovation-hub',
    shortName: 'Innovation Hub',
    name: 'Youth Innovation Hub',
    category: 'Innovation & Enterprise',
    tagline: 'A space where young ideas become real projects.',
    summary:
      'The Youth Innovation Hub gives young innovators, entrepreneurs and creatives in Bamenda a space to develop ideas, learn from each other, and get support turning concepts into working projects and small businesses.',
    goals: [
      'Give youth-led ideas a structured space to develop',
      'Build entrepreneurial and problem-solving skills',
      'Connect promising ideas to mentorship and small-scale support',
    ],
    activities: [
      'Idea incubation meet-ups and pitch sessions',
      'Basic entrepreneurship and business-planning workshops',
      'Hackathons and youth innovation challenges',
      'Peer-to-peer project support groups',
    ],
    whoItsFor: 'Young entrepreneurs, innovators and creatives with ideas worth building.',
    heroImageLabel: 'Innovation Hub hero photo',
    heroImageNote: 'Group brainstorming, pitch session, or hub workspace',
    galleryLabels: [
      { label: 'Pitch session', note: 'Young innovator presenting an idea' },
      { label: 'Workshop in progress', note: 'Group working together at the hub' },
      { label: 'Hackathon day', note: 'Teams working on projects' },
    ],
  },
  {
    slug: 'back-to-school-campaign',
    shortName: 'Back-to-School',
    name: 'Back-to-School Campaign',
    category: 'Education',
    tagline: 'Making sure every child starts the school year ready.',
    summary:
      'Every new school year, this campaign provides school supplies, uniforms and enrollment support to children from families who would otherwise struggle to send their kids back to school.',
    goals: [
      'Reduce the number of children who miss the start of the school year',
      'Ease the financial burden on struggling families at re-entry',
      'Encourage full school enrollment across target communities',
    ],
    activities: [
      'Distribution of school supplies and materials',
      'Support with uniforms and basic school needs',
      'Enrollment awareness and support drives',
      'Partnerships with local schools for at-risk pupils',
    ],
    whoItsFor: 'School-age children from low-income families in Bamenda.',
    heroImageLabel: 'Back-to-School campaign hero photo',
    heroImageNote: 'Children receiving school supplies or uniforms',
    galleryLabels: [
      { label: 'Supplies distribution', note: 'Handing out books, bags or uniforms' },
      { label: 'Campaign team', note: 'Volunteers at a distribution point' },
      { label: 'Partner school visit', note: 'Photo at a supported school' },
    ],
  },
  {
    slug: 'digital-safety-scam-awareness',
    shortName: 'Digital Safety',
    name: 'Digital Safety and Scam Awareness Program',
    category: 'Digital Literacy',
    tagline: 'Helping youth navigate the internet safely and confidently.',
    summary:
      'As more young people go online, this program teaches practical digital safety habits and how to recognize and avoid common online scams \u2014 protecting both personal information and hard-earned money.',
    goals: [
      'Reduce youth vulnerability to online scams and fraud',
      'Build awareness of safe social media and internet habits',
      'Equip parents and youth leaders to spot warning signs',
    ],
    activities: [
      'Community workshops on recognizing common scams',
      'Social media privacy and safety sessions',
      'School talks on responsible internet use',
      'Simple guides and awareness materials for wider distribution',
    ],
    whoItsFor: 'Youth, students, and community members new to digital platforms.',
    heroImageLabel: 'Digital Safety program hero photo',
    heroImageNote: 'Workshop session or awareness talk in progress',
    galleryLabels: [
      { label: 'Awareness workshop', note: 'Facilitator leading a session' },
      { label: 'School talk', note: 'Presentation to students' },
      { label: 'Materials handout', note: 'Participants receiving safety guides' },
    ],
  },
  {
    slug: 'computer-basic-it-skills',
    shortName: 'IT Skills Training',
    name: 'Computer and Basic IT Skills Training',
    category: 'Digital Literacy',
    tagline: 'Building foundational computer skills for today\u2019s job market.',
    summary:
      'This program offers hands-on training in basic computer literacy \u2014 from typing and file management to essential office software \u2014 equipping young people with skills increasingly required for work and further study.',
    goals: [
      'Improve basic computer literacy among youth in Bamenda',
      'Prepare participants for entry-level digital job requirements',
      'Reduce the digital skills gap between urban and underserved youth',
    ],
    activities: [
      'Beginner computer literacy classes',
      'Basic office software training (word processing, spreadsheets)',
      'Typing and file-management practice sessions',
      'Introduction to internet research and email use',
    ],
    whoItsFor: 'Youth with little to no prior computer experience.',
    heroImageLabel: 'IT Skills Training hero photo',
    heroImageNote: 'Participants at computers during a training session',
    galleryLabels: [
      { label: 'Computer lab session', note: 'Trainees working at computers' },
      { label: 'Instructor-led class', note: 'Facilitator teaching a lesson' },
      { label: 'Certificate day', note: 'Participants completing the program' },
    ],
  },
  {
    slug: 'community-problem-identification',
    shortName: 'Problem ID Platform',
    name: 'Community Problem Identification Platform',
    category: 'Civic Participation',
    tagline: 'Giving every community member a way to be heard.',
    summary:
      'This platform gives residents a simple, structured way to report local problems \u2014 from broken infrastructure to public safety concerns \u2014 so that issues reach the people and organizations who can act on them.',
    goals: [
      'Create a clear channel for residents to report community issues',
      'Improve follow-through on local problems that affect daily life',
      'Encourage youth participation in local civic life',
    ],
    activities: [
      'Community reporting sessions and issue-mapping meetings',
      'Collating and forwarding reports to relevant local bodies',
      'Follow-up tracking on reported issues',
      'Awareness campaigns encouraging civic participation',
    ],
    whoItsFor: 'Residents and community members across Bamenda neighborhoods.',
    heroImageLabel: 'Community Problem Platform hero photo',
    heroImageNote: 'Community meeting or issue-mapping session',
    galleryLabels: [
      { label: 'Community meeting', note: 'Residents discussing local issues' },
      { label: 'Issue mapping', note: 'Team reviewing reported problems' },
      { label: 'Follow-up visit', note: 'Team following up on a reported issue' },
    ],
  },
]

export function getProgramBySlug(slug) {
  return PROGRAMS.find((p) => p.slug === slug)
}
