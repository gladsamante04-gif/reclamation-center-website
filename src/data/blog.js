// The current reclamationcntr.com site does not yet have a blog, so these
// three posts are ORIGINAL educational resource articles written for this
// rebuild (general wellness education, no claims about specific clients,
// staff, or outcomes). Replace or expand freely when real articles exist.

export const blogPosts = [
  {
    slug: 'five-signs-its-time-to-talk-to-someone',
    title: "5 Signs It Might Be Time to Talk to Someone",
    category: 'Mental Health',
    excerpt:
      'Everyone has hard days — but how do you know when stress, sadness, or worry has grown into something worth getting support for? Here are five gentle signs.',
    readTime: '4 min read',
    image: 'therapy',
    body: [
      'Everyone goes through difficult seasons. Stress at work, changes at home, grief, and uncertainty are part of being human. But sometimes the weight we carry stops lifting on its own — and reaching out for support is one of the healthiest, bravest things a person can do.',
      'Here are five signs it may be time to talk with a mental health professional:',
      '1. Your feelings are lasting longer than usual. Sadness, worry, irritability, or numbness that lingers for weeks — rather than days — can be a sign that something deeper deserves attention.',
      '2. Sleep, appetite, or energy have changed. Our minds and bodies are connected. Trouble sleeping (or sleeping far more than usual), changes in appetite, and constant exhaustion are common ways emotional strain shows up physically.',
      '3. Things you used to enjoy no longer feel enjoyable. When hobbies, friendships, or activities that once brought joy start to feel flat or exhausting, it can signal depression or burnout.',
      '4. Coping is starting to look like avoiding. Withdrawing from loved ones, leaning harder on alcohol or other substances, or numbing out for hours can be signs that current coping strategies need reinforcement.',
      "5. People who care about you have noticed. Sometimes the people around us see our struggle before we do. If someone you trust has gently expressed concern, it's worth pausing to listen.",
      "Reaching out doesn't mean something is 'wrong' with you — it means you're taking your wellbeing seriously. A caring professional can help you understand what you're experiencing and build a plan that fits your life. If any of these signs feel familiar, our team is here to listen, without judgment, whenever you're ready.",
    ],
  },
  {
    slug: 'supporting-a-loved-one-in-recovery',
    title: 'How to Support a Loved One in Recovery',
    category: 'Recovery',
    excerpt:
      'When someone you love is working toward recovery from substance use, your support matters more than you know. Here’s how to help in ways that truly help.',
    readTime: '5 min read',
    image: 'support',
    body: [
      "Watching someone you love work through recovery can bring up many emotions — hope, worry, pride, and sometimes frustration. The good news: research consistently shows that supportive relationships are one of the most powerful factors in lasting recovery. Here's how to be that support.",
      'Learn about addiction as a health condition. Substance use disorder is a treatable medical condition, not a moral failing or a lack of willpower. Understanding this helps replace blame with compassion — for your loved one and for yourself.',
      "Listen more than you lecture. People in recovery often already carry deep shame. What helps most is feeling heard. Ask open questions, listen without rushing to fix, and let them know you're glad they're trying.",
      "Celebrate progress, not perfection. Recovery is rarely a straight line. Acknowledge the small wins — a hard conversation handled well, a milestone reached, a support meeting attended — and avoid treating setbacks as proof of failure.",
      'Keep healthy boundaries. Supporting someone does not mean sacrificing your own wellbeing. Boundaries — like not covering up consequences or keeping substances out of shared spaces — protect both of you and are an act of love, not punishment.',
      "Take care of yourself, too. Family members and friends need support as well. Counseling, family therapy, and community support groups can give you tools, perspective, and a place to process your own feelings.",
      "Finally, remember you don't have to navigate this alone. Family involvement is often a meaningful part of treatment, and our team welcomes the people who love our clients. If someone you care about is struggling, we're happy to talk through how you can help — and how we can help you both.",
    ],
  },
  {
    slug: 'what-is-whole-person-care',
    title: 'What "Whole-Person Care" Really Means',
    category: 'Integrated Care',
    excerpt:
      'Mind and body aren’t separate — so why is healthcare so often split in two? Here’s why integrated care makes such a difference, and what it looks like in practice.',
    readTime: '4 min read',
    image: 'wholecare',
    body: [
      "For a long time, healthcare treated the mind and the body as if they lived in different buildings — often literally. You saw one office for your physical health and another, across town, for your mental health, and the two rarely spoke to each other.",
      "But mental and physical health are deeply connected. Depression can affect sleep, appetite, and chronic pain. Anxiety can raise blood pressure and strain the heart. Chronic illness can, in turn, take a real toll on mood and motivation. Treating one side while ignoring the other means only treating half the person.",
      'Whole-person (or "integrated") care brings these pieces together. In an integrated setting, your therapist, psychiatric provider, and medical provider can work as one team — sharing insight (with your consent), coordinating medications, and building a single plan around your goals rather than around separate diagnoses.',
      'What does that look like in practice? It means your primary care visit can flag concerns your therapist should know about. It means medication for your mental health is managed alongside medication for your physical health, reducing interactions and side effects. It means you spend less time repeating your story to new providers — and more time actually moving forward.',
      "Perhaps most importantly, integrated care treats you as a whole human being: your history, your relationships, your community, and your hopes — not just a chart of symptoms.",
      "That's the model Reclamation Center was built around: mental health care, psychiatric services, substance use treatment, and primary medical care under one compassionate roof. If juggling separate providers has ever made getting help feel harder, whole-person care may be exactly the fresh start you deserve.",
    ],
  },
]

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug)
