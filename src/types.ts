export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: 'document' | 'lightbulb' | 'users' | 'laptop';
  color: string;
  items: string[];
}

export interface StepItem {
  step: string;
  badgeColor: string;
  title: string;
  description: string;
  icon: string;
}

export interface GuaranteeItem {
  id: number;
  text: string;
  highlight?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  course: string;
  university?: string;
  image: string;
  rating: number;
  text: string;
  linkUrl: string;
  verified: boolean;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  linkUrl: string;
  altText: string;
}

export interface QuoteFormData {
  workType: string;
  course: string;
  deadline: string;
  notes: string;
}
