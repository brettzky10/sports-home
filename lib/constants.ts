import client1 from '../public/client1.png';
import client2 from '../public/client2.png';
import client3 from "../public/client3.png";
import client4 from '../public/client4.png';
import client5 from '../public/client5.png';

import card1 from "../public/card1.png";
import card2 from '../public/card2.png';
import card3 from '../public/card3.png';

export const CLIENTS = [
  { alt: 'client1', logo: client1 },
  { alt: 'client2', logo: client2 },
  { alt: 'client3', logo: client3 },
  { alt: 'client4', logo: client4 },
  { alt: 'client5', logo: client5 },
];

export const USERS = [
  {
    name: 'Alice',
    message:
      'Rover has been a game-changer for our team. With its reliable end-to-end testing, we catch bugs early, leading to faster development cycles and improved collaboration.',
  },
  {
    name: 'Bob',
    message:
      "I used to spend hours debugging frontend issues, but Rover simplified everything. Now, I'm more productive, and my colleagues can trust our code thanks to Rover.",
  },
  {
    name: 'Charlie',
    message:
      "Rover has transformed the way we work. Our QA and development teams are on the same page, and our productivity has skyrocketed. It's a must-have tool.",
  },
  {
    name: 'David',
    message:
      'I was skeptical at first, but Rover exceeded my expectations. Our project timelines have improved, and collaboration between teams is seamless.',
  },
  {
    name: 'Ella',
    message:
      "Rover made writing and running tests a breeze. Our team's productivity has never been higher, and we're delivering more reliable software.",
  },
  {
    name: 'Frank',
    message:
      "Thanks to Rover, we've eliminated testing bottlenecks. Our developers and testers collaborate effortlessly, resulting in quicker releases.",
  },
  {
    name: 'Grace',
    message:
      'Rover has improved our development process significantly. We now have more time for innovation, and our products are of higher quality.',
  },
  {
    name: 'Hank',
    message:
      "Rover's user-friendly interface made it easy for our non-technical team members to contribute to testing. Our workflow is much more efficient now.",
  },
  {
    name: 'Ivy',
    message:
      "Our team's collaboration improved immensely with Rover. We catch issues early, leading to less friction and quicker feature deployments.",
  },
  {
    name: 'Jack',
    message:
      "Rover's robust testing capabilities have elevated our development standards. We work more harmoniously, and our releases are more reliable.",
  },
  {
    name: 'Katherine',
    message:
      "Rover is a lifesaver for our cross-functional teams. We're more productive, and there's a shared sense of responsibility for product quality.",
  },
  {
    name: 'Liam',
    message:
      "Rover has helped us maintain high standards of quality. Our team's collaboration has improved, resulting in faster development cycles.",
  },
  {
    name: 'Mia',
    message:
      "Rover is a powerful tool that improved our productivity and collaboration. It's now an integral part of our development process.",
  },
  {
    name: 'Nathan',
    message:
      "Rover's user-friendly interface and detailed reporting have made testing a breeze. Our team's productivity is at an all-time high.",
  },
  {
    name: 'Olivia',
    message:
      "We saw immediate benefits in terms of productivity and collaboration after adopting Rover. It's an essential tool for our development workflow.",
  },
  {
    name: 'Paul',
    message:
      "Rover has streamlined our testing process and brought our teams closer. We're more efficient and deliver better results.",
  },
  {
    name: 'Quinn',
    message:
      'Rover has been a game-changer for us. Our productivity and collaboration have improved significantly, leading to better software.',
  },
  {
    name: 'Rachel',
    message:
      'Thanks to Rover, our testing process is now a seamless part of our development cycle. Our teams collaborate effortlessly.',
  },
  {
    name: 'Sam',
    message:
      'Rover is a fantastic tool that has revolutionized our workflow. Our productivity and collaboration have reached new heights.',
  },
];

export const CASE_CARDS = [
   {
    image: '/thumb2.jpg',
    title: 'Atlanta Falcons Mobile App Onboarding',
    link: '/blog',
  }, 
  {
    image: '/thumb2.jpg',
    title: 'Denver Broncos Mobile Predictive Gaming',
    link: '/blog',
  },
 {
    image: '/thumb2.jpg',
    title: 'How Team Canada Enhanced their Fan Experience During the Olympics with Rover',
    link: '/blog',
  }, 
  {
    image: '/thumb2.jpg',
    title: 'Houston Texans Mobile Arcade Experience',
    link: '/blog',
  },
];

export const featureData = [
  {
    description:
      "Rover is a fan-first mobile marketing solution that empowers your team to deliver brilliant experiences to the right fan at the right time.",
      color: "[#004083]",
    imageUrl: card1,
    link: "/cases"
  },
  {
    description:
      "Leverage ticketing and other integrations to drive better conversions for your most important marketing campaigns",
      color: "green-300",
    imageUrl: card2,
    link: "/cases"
  },
  {
    description:
      "Effortlessly create personalized experiences for your fans with no developer time or app updates required",
    color: "[#004083]",
    imageUrl: card3,
    link: "/cases"
  },
] as const;


