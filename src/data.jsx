import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { profile2, profile3,profile4,profile5,
         panel,turbine,batteries, member1, member2, member3, member4} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Clients",id:'testimonial'},
    {name:"FAQ",id:'faq'},
    {name:"Contact",id:'contact'},
];

export const services = [
  {
    name:"Solar Panels",
    image:panel,
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                 Magni debitis expedita dolor`,
  },
  {
    name:"Wind Turbines",
    image:turbine,
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                 Magni debitis expedita dolor`,
  },
  {
    name:"Battery Storage Solutions",
    image:batteries,
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                 Magni debitis expedita dolor`,
  },
]

export const teams = [
  {
    name:"Oluoma James",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Joy Eze",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Solar system massive installation",
    image:"https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg",
    category:"Solar Panel",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Empowering Communities: Solar Solutions for a Sustainable Future",
    image:"https://www.solarpowerworldonline.com/wp-content/uploads/2019/07/ips1.jpg",
    category:"Solar Panel",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Harvesting Sunshine: The Green Energy Initiative Project",
    image:"https://www.biscaynetimes.com/downloads/2317/download/6.jpg",
    category:"Solar Panel",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Wind and Solar Synergy: Hybrid Power Solutions for Tomorrow",
    image:"https://cdn.britannica.com/75/114975-159-38AE7632/Wind-turbines-Tehachapi-Calif.jpg",
    category:"Wind Turbine",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Power Vault: Solar Battery Storage Solutions",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd_ThhlfShBjbodGPZOKZR2v_IvCIMc1FRu8t9VFNAmGZttNxdVlMX87FUZ4Rk7m6eGS3OLKep06Fbr_IGpdN4zVJR1pPUKH5z2fiC9J3ThLwWotIn5PPBW3H_ezvr3xlPpDD30lD8JyGSFyDzkOEbgXHUEhXgiY1_hR93mwHQCzhKXPkyOWJ-FRbBHg/s1000/mumti%20power.jpg",
    category:"Solar Battery",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
  {
    title:"Eclipse Reserve: Innovative Solar Battery Integration",
    image:"https://energymall.ng/wp-content/uploads/2020/12/sunfit-solar-scaled.jpg",
    category:"Solar Battery",
    description:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni debitis expedita dolor`,
  },
];

export const faq = [
  {
    title:"How do solar panels work?",
    description:`
       Solar panels convert sunlight into electricity 
       using photovoltaic (PV) cells. When sunlight hits the cells, 
       it creates an electric field that generates direct current (DC) 
       electricity. This DC electricity is then converted to 
       alternating current (AC) electricity using an inverter, making 
       it usable for your home or business.
    `,
  },
  {
    title:"What are the benefits of installing solar panels?",
    description:`
       Installing solar panels can reduce or eliminate your 
       electricity bills, increase the value of your property, 
       decrease your carbon footprint, and provide a renewable 
       source of energy. Additionally, many regions offer incentives 
       and rebates for solar installations.
    `,
  },
  {
    title:"How much does a solar power system cost?",
    description:`
      The cost of a solar power system varies depending on the size of
       the system, the type of equipment used, and your location. On 
       average, a residential solar panel system can range from $15,000 
       to $25,000 before incentives and rebates.
    `,
  },
  {
    title:"How long will it take for my solar panels to pay for themselves?",
    description:`
    The payback period for solar panels typically ranges from 6 to 10 years, 
    depending on factors such as your energy usage, the cost of electricity 
    in your area, and the available financial incentives.
    `,
  },
  {
    title:"Will my solar panels work during a power outage?",
    description:`
      Most grid-tied solar power systems will not function during a power 
      outage for safety reasons unless they are paired with a battery
       storage system or a solar generator that allows for off-grid 
       operation.
    `,
  },
  {
    title:"How much maintenance do solar panels require?",
    description:`
    Solar panels require minimal maintenance. Regular cleaning to remove dust, 
    dirt, and debris, as well as periodic inspections to ensure everything is 
    functioning properly, is generally sufficient. Most panels come with a 
    25-year warranty.
    `,
  },
  {
    title:"Do I need a battery storage system?",
    description:`
      While a battery storage system is not required, it can be beneficial 
      for storing excess energy generated during the day for use at night or 
      during power outages. Batteries can also help you become more energy
      independent.
    `,
  },
]

export const testimonial = [
  {
    image:profile2,
    name:'Samuel Eze',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:profile3,
    name:'Emmanuel Joseph',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:profile4,
    name:'Gloria Chiwendu',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:profile5,
    name:'Precious Stone',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  }

];

export const contacts = [
  {
    name:"Email",
    value:"mradinuba@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+2348149121918",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"Gwarinpa, Abuja, Nigeria",
    icon:<IoLocationOutline/>,
  },
]

export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Home",id:'header'},
        {name:"About Us",id:'about'},
        {name:"Services",id:'services'},
        {name:"Team",id:'team'},
        {name:"Project",id:'project'},
        {name:"Clients",id:'testimonial'},
        {name:"FAQ",id:'faq'},
        {name:"Contact",id:'contact'},
      ]
    },
    {
        name:"Gallery",
        routes:[
          {name:"Privacy Policy"},
          {name:"Terms and Conditions"},
          {name:"Cookie Policy"},
        ]
      },
]


