// Photography: freely licensed images hot-linked from Unsplash
// (https://unsplash.com/license). Every image has a graceful branded
// fallback (see <SmartImage />), so the site still looks polished offline
// or if a photo is ever removed. To use your own photography, drop files
// into /src/assets and swap the URLs below.

const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: {
    src: u('photo-1576091160550-2173dba999ef', 1800),
    alt: 'A caring healthcare professional smiling and talking with a patient in a bright, welcoming clinic',
  },
  about: {
    src: u('photo-1582750433449-648ed127bb54', 1200),
    alt: 'A compassionate care team member listening attentively in a warm office setting',
  },
  aboutPage: {
    src: u('photo-1527613426441-4da17471b66d', 1200),
    alt: 'A diverse group of people supporting one another during a group session',
  },
  insurance: {
    src: u('photo-1556742049-0cfed4f6a45d', 1200),
    alt: 'A friendly front-desk team member helping a visitor with scheduling and coverage questions',
  },
  contact: {
    src: u('photo-1521791136064-7986c2920216', 1200),
    alt: 'Two people shaking hands warmly across a desk',
  },
  therapy: {
    src: u('photo-1573497620053-ea5300f94f21', 900),
    alt: 'A supportive one-on-one conversation between two people',
  },
  support: {
    src: u('photo-1529156069898-49953e39b3ac', 900),
    alt: 'Friends standing together outdoors, arms around each other',
  },
  wholecare: {
    src: u('photo-1505751172876-fa1923c5c528', 900),
    alt: 'A stethoscope resting on a table, representing integrated medical care',
  },
}

export const getBlogImage = (key) => images[key] ?? images.therapy
