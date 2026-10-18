// CLIENT SUCCESS STORIES
//
// `featured` is a REAL, verified client review — quoted verbatim from the
// published testimonial on reclamationcntr.com (homepage, retrieved
// 2026-10-18), lightly shortened with ellipses only.
//
// `supporting` are still SAMPLE placeholders (clearly labeled in the UI).
// As soon as more genuine, permission-approved reviews are supplied
// (e.g. from Google reviews), paste them here with verified: true and the
// sample labeling disappears automatically. Never present fictional
// testimonials as authentic patient reviews.

export const featuredTestimonial = {
  id: 'abigail',
  verified: true,
  label: 'Verified Client Review',
  quote:
    "The staff's at reclamation center are doing a good job and my case manger Tania Nelson is super excellent \u{1F4AF}\u{1F44D}\u{1F44F} … my psychologist helps me with my medicine and the side affects from the meds. And Ms. Muriel the teacher for PSR group therapy help you with understanding the topics and she asked how are you doing and checking to see if you are okay for the day.",
  name: 'Abigail Beckford',
  role: 'Client — review published on reclamationcntr.com',
}

export const supportingTestimonials = [
  {
    id: 'anxiety',
    verified: false,
    label: 'Anxiety Support',
    quote:
      'Anxiety ruled my days for years. My therapist here truly listened, and together we built tools that work. I finally feel calm and capable again.',
    name: 'Sample Story',
    role: 'Illustrative example — not a real client review',
  },
  {
    id: 'recovery',
    verified: false,
    label: 'Recovery Journey',
    quote:
      'I struggled with substance use for a decade. Counseling and steady support helped me rebuild trust with my family. I am now proudly in recovery.',
    name: 'Sample Story',
    role: 'Illustrative example — not a real client review',
  },
  {
    id: 'family',
    verified: false,
    label: 'Family & Youth',
    quote:
      'Our son was struggling at school and at home. The family sessions taught us how to communicate, and he is thriving, smiling, and connecting again.',
    name: 'Sample Story',
    role: 'Illustrative example — not a real client review',
  },
]

export const hasUnverified = () => supportingTestimonials.some((t) => !t.verified)
