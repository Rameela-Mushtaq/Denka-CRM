import Invoice from "../components/sales/Invoice";
import Lead from "../components/sales/Lead";
import Oppertunity from "../components/sales/Oppertunity";
import Pipeline from "../components/sales/Pipeline";
import Task from "../components/activity/Task.jsx";
import Reminder from "../components/activity/Reminder.jsx";
import BoradView from "../components/activity/BoradView.jsx";
import CalenderView from "../components/activity/CalenderView.jsx";
import Automated from "../components/reports/Automated.jsx";
import Customize from "../components/reports/Customize.jsx";
import Board from "../components/meeting/Board.jsx";
import Calender from "../components/meeting/Calender.jsx";
import Account from "../components/role/Account.jsx";
import Permission from "../components/role/Permission.jsx";

export const SideBarLinks = [
  {
    id: 1,
    name: "Dashboard",
    icon: require("../assets/images/dashboard.png"),
    category: "Core CRM Functions",
    path: "/",
  },
  {
    id: 2,
    name: "Contact Management",
    icon: require("../assets/images/contact.png"),
    path: "/contact",
  },
  {
    id: 3,
    name: "Sales Management",
    icon: require("../assets/images/sales.png"),
    path: "/sales",
  },
  {
    id: 4,
    name: "Activity Management",
    icon: require("../assets/images/activity.png"),
    path: "/activity",
  },
  {
    id: 5,
    name: "Reports and Analytics",
    icon: require("../assets/images/reports.png"),
    category: "Analytics and Reporting",
    path: "/reports",
  },
  {
    id: 6,
    name: "Prefs and Goals",
    icon: require("../assets/images/goals.png"),
    path: "/goals",
  },
  {
    id: 7,
    name: "E-com Integration",
    icon: require("../assets/images/ecom.png"),
    category: "Integrations and Support Functions",
    path: "/e-com",
  },
  {
    id: 8,
    name: "Meeting Scheduling",
    icon: require("../assets/images/meeting.png"),
    path: "/meeting",
  },
  {
    id: 9,
    name: "Role-based Access",
    icon: require("../assets/images/role.png"),
    path: "/roles",
  },
  {
    id: 10,
    name: "Chat",
    icon: require("../assets/images/chat.png"),
    path: "/chat",
  },
];

export const CardData = [
  {
    title: "Total Sales",
    price: "$23,00.00",
    icon: require("../assets/images/card1.png"),
    desc: "Last Period",
    icon2: require("../assets/images/low.png"),
    per: "16.5%",
  },
  {
    title: "Total Leads",
    price: "1000",
    icon: require("../assets/images/card2.png"),
    desc: "Last Period",
    icon2: require("../assets/images/high.png"),
    per: "16.5%",
  },
  {
    title: "Conversion Rate",
    price: "55%",
    icon: require("../assets/images/card3.png"),
    desc: "Last Period",
    icon2: require("../assets/images/high.png"),
    per: "16.5%",
  },
  {
    title: "Sales Target Progress",
    price: "700",
    icon: require("../assets/images/card4.png"),
    desc: "Last Period",
    icon2: require("../assets/images/high.png"),
    per: "16.5%",
  },
];

export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const PageTitles = {
  "/": "Dashboard",
  "/contact": "Contact Management",
  "/sales": "Sales Management",
  "/activity": "Activity Management",
  "/reports": "Reports & Analytics",
  "/goals": "Preferences & Goals",
  "/e-com": "E-commerce Integrations",
  "/meeting": "Meeting  Schedule",
  "/roles": "Role based Access",
  "/chat": "Chat ",
  "/profile": "Profile",
};

export const ContactCards = [
  {
    title: "Total Contacts",
    price: "1697",
    icon: require("../assets/images/card1.png"),
    desc: "Last Period",
    icon2: require("../assets/images/low.png"),
    per: "16.5%",
  },
  {
    title: "New Leads This Month",
    price: "1000",
    icon: require("../assets/images/card2.png"),
    desc: "Last Period",
    icon2: require("../assets/images/high.png"),
    per: "16.5%",
  },
  {
    title: "ContactedLeads",
    price: "7878",
    icon: require("../assets/images/card3.png"),
    desc: "Last Period",
    icon2: require("../assets/images/high.png"),
    per: "16.5%",
  },
  {
    title: "Qualified Leads",
    price: "700",
    icon: require("../assets/images/card4.png"),
    desc: "Last Period",
    icon2: require("../assets/images/high.png"),
    per: "16.5%",
  },
];

export const TableData = [
  {
    id: 1,
    name: "Jane Cooper",
    email: "nevaeh.simmons@ee.com",
    company: "Gillette",
    phone: "(308) 555-0121",
    address: "2464 Royal Ln. Mesa, New",
    status: "B2B",
    icon: require("../assets/icons/user1.png"),
    icon2: require("../assets/icons/comp1.png"),
  },
  {
    id: 2,
    name: "Wade Warren",
    email: "georgia.young@ee.com",
    company: "Ferrari",
    phone: "(308) 555-0121",
    address: "4140 Parker Rd. Allentown",
    status: "B2B",
    icon: require("../assets/icons/user2.png"),
    icon2: require("../assets/icons/comp2.png"),
  },
  {
    id: 3,
    name: "Ester Howard",
    email: "tim.jennings@example.com",
    company: "Louis Vuitton",
    phone: "(603) 555-0123",
    address: "4140 Parker Rd. Allentown",
    status: "B2B",
    icon: require("../assets/icons/user3.png"),
    icon2: require("../assets/icons/comp3.png"),
  },
  {
    id: 4,
    name: "Jenny Wilson",
    email: "michelle.rivera@exle.com",
    company: "Starbucks",
    phone: "(270) 555-0117",
    address: "8502 Preston Rd. 380",
    status: "B2C",
    icon: require("../assets/icons/user4.png"),
    icon2: require("../assets/icons/comp4.png"),
  },
  {
    id: 5,
    name: "Guy Hawkins",
    email: "bill.sanders@example.com",
    company: "Starbucks",
    phone: "(219) 555-0114",
    address: "2715 Ash Dr. San Dakota",
    status: "B2C",
    icon: require("../assets/icons/user5.png"),
    icon2: require("../assets/icons/comp5.png"),
  },
  {
    id: 6,
    name: "Robert Fox",
    email: "sara.cruz@example.com",
    company: "Apple",
    phone: "(907) 555-0101",
    address: "3891 Ranchview Dr. 62639",
    status: "B2C",
    icon: require("../assets/icons/user6.png"),
    icon2: require("../assets/icons/comp6.png"),
  },
  {
    id: 7,
    name: "Jacob Jones",
    email: "felicia.reid@example.com",
    company: "Gillette",
    phone: "(629) 555-0129",
    address: "4517 Washington Ave. 5",
    status: "B2B",
    icon: require("../assets/icons/user7.png"),
    icon2: require("../assets/icons/comp7.png"),
  },
  {
    id: 8,
    name: "Ralph Edward",
    email: "jessica.hanson@e.com",
    company: "Pizza Hut",
    phone: "(405) 555-0128",
    address: "3517 W. Gray St. Utica",
    status: "B2B",
    icon: require("../assets/icons/user8.png"),
    icon2: require("../assets/icons/comp1.png"),
  },
];

export const TabsData = [
  {
    title: "Lead Management",
    content: <Lead />,
  },
  {
    title: "Manage Opputunities",
    content: <Oppertunity />,
  },
  {
    title: "Quoting and Invoicing",
    content: <Invoice />,
  },
  {
    title: "Sales Pipeline",
    content: <Pipeline />,
  },
];

export const LeadData = [
  {
    id: 1,
    name: "Jane Cooper",
    company: "Gillette",
    phone: "(308) 555-0121",
    date: "01/03/2024",
    status: "New",
    icon: require("../assets/icons/user1.png"),
    icon2: require("../assets/icons/comp1.png"),
  },
  {
    id: 2,
    name: "Wade Warren",
    company: "Ferrari",
    phone: "(308) 555-0121",
    date: "01/03/2024",
    status: "New",
    icon: require("../assets/icons/user2.png"),
    icon2: require("../assets/icons/comp2.png"),
  },
  {
    id: 3,
    name: "Ester Howard",
    company: "Louis Vuitton",
    phone: "(603) 555-0123",
    date: "01/03/2024",
    status: "New",
    icon: require("../assets/icons/user3.png"),
    icon2: require("../assets/icons/comp3.png"),
  },
  {
    id: 4,
    name: "Jenny Wilson",
    company: "Starbucks",
    phone: "(270) 555-0117",
    date: "01/03/2024",
    status: "Contacted",
    icon: require("../assets/icons/user4.png"),
    icon2: require("../assets/icons/comp4.png"),
  },
  {
    id: 5,
    name: "Guy Hawkins",
    company: "Starbucks",
    phone: "(219) 555-0114",
    date: "01/03/2024",
    status: "Contacted",
    icon: require("../assets/icons/user5.png"),
    icon2: require("../assets/icons/comp5.png"),
  },
  {
    id: 6,
    name: "Robert Fox",
    company: "Apple",
    phone: "(907) 555-0101",
    date: "01/03/2024",
    status: "Contacted",
    icon: require("../assets/icons/user6.png"),
    icon2: require("../assets/icons/comp6.png"),
  },
  {
    id: 7,
    name: "Jacob Jones",
    company: "Gillette",
    phone: "(629) 555-0129",
    date: "01/03/2024",
    status: "New",
    icon: require("../assets/icons/user7.png"),
    icon2: require("../assets/icons/comp7.png"),
  },
  {
    id: 8,
    name: "Ralph Edward",
    company: "Pizza Hut",
    phone: "(405) 555-0128",
    date: "01/03/2024",
    status: "New",
    icon: require("../assets/icons/user8.png"),
    icon2: require("../assets/icons/comp1.png"),
  },
];

export const Statuses = [
  { label: "New", bgColor: "bg-[#ECF2EA]", textColor: "text-[#4BB817]" },
  {
    label: "In Progress",
    bgColor: "bg-[#DFF0FA]",
    textColor: "text-[#09659B]",
  },
  {
    label: "Proposal Sent",
    bgColor: "bg-[#E3FFFC]",
    textColor: "text-[#009182]",
  },
  {
    label: "Negotiation",
    bgColor: "bg-[#FFBA861F]",
    textColor: "text-[#B55D1B]",
  },
  { label: "Closed", bgColor: "bg-[#F8E7E7]", textColor: "text-[#CD1A1A]" },
];

export const OppertunityData = [
  // New Column
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#335EEA]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#FF272D]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#9646A3]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#B1D2FC]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#335EEA]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#FF272D]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#9646A3]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#B1D2FC]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#335EEA]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#FF272D]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#9646A3]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#B1D2FC]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "New",
    avatarColor: "bg-[#335EEA]",
  },

  // In Progress Column
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "In Progress",
    avatarColor: "bg-[#4BB817]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "In Progress",
    avatarColor: "bg-[#FFC107]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "In Progress",
    avatarColor: "bg-[#9646A3]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "In Progress",
    avatarColor: "bg-[#335EEA]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "In Progress",
    avatarColor: "bg-[#4BB817]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "In Progress",
    avatarColor: "bg-[#FFC107]",
  },

  // Proposal Sent Column
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Proposal Sent",
    avatarColor: "bg-[#FF272D]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Proposal Sent",
    avatarColor: "bg-[#B1D2FC]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Proposal Sent",
    avatarColor: "bg-[#FFC107]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Proposal Sent",
    avatarColor: "bg-[#9646A3]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Proposal Sent",
    avatarColor: "bg-[#B1D2FC]",
  },

  // Negotiation Column
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Negotiation",
    avatarColor: "bg-[#335EEA]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Negotiation",
    avatarColor: "bg-[#FF272D]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Negotiation",
    avatarColor: "bg-[#B1D2FC]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Negotiation",
    avatarColor: "bg-[#9646A3]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Negotiation",
    avatarColor: "bg-[#335EEA]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Negotiation",
    avatarColor: "bg-[#FF272D]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Negotiation",
    avatarColor: "bg-[#B1D2FC]",
  },

  // Closed Column
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Closed",
    avatarColor: "bg-[#335EEA]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Closed",
    avatarColor: "bg-[#9646A3]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Closed",
    avatarColor: "bg-[#FF272D]",
  },
  {
    name: "James Williams",
    email: "jondro789@email.com",
    opportunityName: "Website Redesign",
    company: "ABC Corp",
    value: "$10,000",
    date: "12/31/2024",
    status: "Closed",
    avatarColor: "bg-[#FFC107]",
  },
];

export const InvoiceData = [
  {
    invoice: "Q-87786",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    amount: "$12000",
    status: "Send",
    date: "01/03/2024",
    dueDate: "01/12/2025",
  },
  {
    invoice: "Q-87786",
    name: "James Williams",
    icon: require("../assets/icons/user2.png"),
    amount: "$12000",
    status: "Send",
    date: "01/03/2024",
    dueDate: "01/12/2025",
  },
  {
    invoice: "Q-87786",
    name: "James Williams",
    icon: require("../assets/icons/user3.png"),
    amount: "$12000",
    status: "Paid",
    date: "01/03/2024",
    dueDate: "01/12/2025",
  },
  {
    invoice: "Q-87786",
    name: "James Williams",
    icon: require("../assets/icons/user4.png"),
    amount: "$12000",
    status: "Send",
    date: "01/03/2024",
    dueDate: "01/12/2025",
  },
  {
    invoice: "Q-87786",
    name: "James Williams",
    icon: require("../assets/icons/user5.png"),
    amount: "$12000",
    status: "Send",
    date: "01/03/2024",
    dueDate: "01/12/2025",
  },
  {
    invoice: "Q-87786",
    name: "James Williams",
    icon: require("../assets/icons/user6.png"),
    amount: "$12000",
    status: "Paid",
    date: "01/03/2024",
    dueDate: "01/12/2025",
  },
  {
    invoice: "Q-87786",
    name: "James Williams",
    icon: require("../assets/icons/user7.png"),
    amount: "$12000",
    status: "Send",
    date: "01/03/2024",
    dueDate: "01/12/2025",
  },
  {
    invoice: "Q-87786",
    name: "James Williams",
    icon: require("../assets/icons/user8.png"),
    amount: "$12000",
    status: "Send",
    date: "01/03/2024",
    dueDate: "01/12/2025",
  },
  {
    invoice: "Q-87786",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    amount: "$12000",
    status: "Paid",
    date: "01/03/2024",
    dueDate: "01/12/2025",
  },
];

export const ActivityData = [
  {
    task: "Sales Marketing Strategy",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    date: "09/05/2025",
    status: "Pending",
  },
  {
    task: "Sales Marketing Strategy",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    date: "09/05/2025",
    status: "Pending",
  },
  {
    task: "Sales Marketing Strategy",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    date: "09/05/2025",
    status: "Completed",
  },
  {
    task: "Sales Marketing Strategy",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    date: "09/05/2025",
    status: "Pending",
  },
  {
    task: "Sales Marketing Strategy",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    date: "09/05/2025",
    status: "Pending",
  },
  {
    task: "Sales Marketing Strategy",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    date: "09/05/2025",
    status: "Completed",
  },
  {
    task: "Sales Marketing Strategy",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    date: "09/05/2025",
    status: "Pending",
  },
  {
    task: "Sales Marketing Strategy",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    date: "09/05/2025",
    status: "Pending",
  },
  {
    task: "Sales Marketing Strategy",
    name: "James Williams",
    icon: require("../assets/icons/user1.png"),
    date: "09/05/2025",
    status: "Completed",
  },
];

export const ActivityTabData = [
  {
    title: "Task Management",
    content: <Task />,
  },
  {
    title: "Reminders",
    content: <Reminder />,
  },
];

export const ReminderTabData = [
  {
    icon: require("../assets/images/board.png"),
    title: "Board View",
    content: <BoradView />,
  },
  {
    icon: require("../assets/images/chat.png"),
    title: "Calender View",
    content: <CalenderView />,
  },
];

export const BoardData = [
  {
    id: 1,
    date: "20 July",
    day: "Thu",
    time: "12:00 pm",
    title: "Increase Lead Generation",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
      require("../assets/icons/user3.png"),
    ],
  },
  {
    id: 2,
    date: "20 July",
    day: "Thu",
    time: "12:00 pm",
    title: "Increase Lead Generation",
    members: [
      require("../assets/icons/user5.png"),
      require("../assets/icons/user6.png"),
      require("../assets/icons/user7.png"),
      require("../assets/icons/user8.png"),
      require("../assets/icons/user3.png"),
    ],
  },
  {
    id: 3,
    date: "20 July",
    day: "Thu",
    time: "12:00 pm",
    title: "Increase Lead Generation",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
  {
    id: 4,
    date: "20 July",
    day: "Thu",
    time: "12:00 pm",
    title: "Increase Lead Generation",
    members: [
      require("../assets/icons/user5.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user6.png"),
      require("../assets/icons/user7.png"),
      require("../assets/icons/user8.png"),
    ],
  },
  {
    id: 5,
    date: "20 July",
    day: "Thu",
    time: "12:00 pm",
    title: "Increase Lead Generation",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
  {
    id: 6,
    date: "20 July",
    day: "Thu",
    time: "12:00 pm",
    title: "Increase Lead Generation",
    members: [
      require("../assets/icons/user5.png"),
      require("../assets/icons/user6.png"),
      require("../assets/icons/user7.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user8.png"),
    ],
  },
  {
    id: 7,
    date: "20 July",
    day: "Thu",
    time: "12:00 pm",
    title: "Increase Lead Generation",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
  {
    id: 8,
    date: "20 July",
    day: "Thu",
    time: "12:00 pm",
    title: "Increase Lead Generation",
    members: [
      require("../assets/icons/user5.png"),
      require("../assets/icons/user6.png"),
      require("../assets/icons/user7.png"),
      require("../assets/icons/user8.png"),
      require("../assets/icons/user3.png"),
    ],
  },
  {
    id: 9,
    date: "20 July",
    day: "Thu",
    time: "12:00 pm",
    title: "Increase Lead Generation",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
];

export const CalendarData = [
  {
    day: "Sunday",
    cards: [
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
    ],
  },
  {
    day: "Monday",
    cards: [
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
    ],
  },
  {
    day: "Tuesday",
    cards: [
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
    ],
  },
  {
    day: "Wednesday",
    cards: [
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
    ],
  },
  {
    day: "Thursday",
    cards: [
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
    ],
  },
  {
    day: "Friday",
    cards: [
      {
        time: "12:00 pm",
        title: "Increase Lead Generation",
        members: [
          require("../assets/icons/user1.png"),
          require("../assets/icons/user2.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user3.png"),
          require("../assets/icons/user4.png"),
        ],
      },
    ],
  },
];

export const ReportTabData = [
  {
    title: "Automated Report",
    content: <Automated />,
  },
  {
    title: "Customized Report",
    content: <Customize />,
  },
];

export const AutomatedData = [
  {
    name: "Sales Performance Report",
    description: "Overview of Sales",
    date: "09/05/2024",
  },
  {
    name: "KPI Report",
    description: "Detailed metrics of KPIs",
    date: "09/05/2024",
  },
  {
    name: "Sales Forecast Report",
    description: "Predictions of future Sales",
    date: "09/05/2024",
  },
];

export const KpiData = [
  {
    title: "Sales Revenue",
    value: "$450,000",
    target: "$500,000",
    progress: 90,
    description:
      "Revenue for the current quarter is $450,000, aiming for $500,000.",
    color: "bg-[#FF8E8F]",
  },
  {
    title: "Satisfaction Score",
    value: "85%",
    target: "90%",
    progress: 60,
    description:
      "name satisfaction is currently at 85%, slightly below the target.",
    color: "bg-[#8979FF]",
  },
  {
    title: "Training Comp Rate",
    value: "85%",
    target: "90%",
    progress: 90,
    description:
      "90% of the training is completed, with a target of 100% by the end of the quarter.",
    color: "bg-[#E178C5]",
  },
  {
    title: "Quarterly Revenue",
    value: "$450,000",
    target: "$500,000",
    progress: 30,
    description:
      "Revenue for the current quarter is $450,000, aiming for $500,000.",
    color: "bg-[#FFB38E]",
  },
];

export const GoalsData = [
  {
    type: "Individual",
    description: "Increase sales by 20%",
    name: "John Doe",
    target: "20%",
    status: "15%",
    progress: "75%",
    deadline: "09/05/2024",
  },
  {
    type: "Team",
    description: "Increase sales by 20%",
    name: "John Doe",
    target: "20%",
    status: "15%",
    progress: "75%",
    deadline: "09/05/2024",
  },
  {
    type: "Individual",
    description: "Increase sales by 20%",
    name: "John Doe",
    target: "20%",
    status: "15%",
    progress: "75%",
    deadline: "09/05/2024",
  },
  {
    type: "Team",
    description: "Increase sales by 20%",
    name: "John Doe",
    target: "20%",
    status: "15%",
    progress: "75%",
    deadline: "09/05/2024",
  },
  {
    type: "Individual",
    description: "Increase sales by 20%",
    name: "John Doe",
    target: "20%",
    status: "15%",
    progress: "75%",
    deadline: "09/05/2024",
  },
  {
    type: "Team",
    description: "Increase sales by 20%",
    name: "John Doe",
    target: "20%",
    status: "15%",
    progress: "75%",
    deadline: "09/05/2024",
  },
];

export const EcomData = [
  {
    orderId: "675675",
    date: "09/05/2024",
    amount: "$560",
    name: "John Doe",
    emailSent: "09/05/2024",
    status: "Paid",
    bgColor: "bg-[#4BB8171C] px-9",
  },
  {
    orderId: "675675",
    date: "09/05/2024",
    amount: "$560",
    name: "John Doe",
    emailSent: "09/05/2024",
    status: "UnPaid",
    bgColor: "bg-[#CFCFCF26] px-6",
  },
  {
    orderId: "675675",
    date: "09/05/2024",
    amount: "$560",
    name: "John Doe",
    emailSent: "09/05/2024",
    status: "Left Card",
    bgColor: "bg-[#FF4C4C1A] px-4",
  },
  {
    orderId: "675675",
    date: "09/05/2024",
    amount: "$560",
    name: "John Doe",
    emailSent: "09/05/2024",
    status: "Arrived",
    bgColor: "bg-[#8979FF0A] px-6",
  },
  {
    orderId: "675675",
    date: "09/05/2024",
    amount: "$560",
    name: "John Doe",
    emailSent: "09/05/2024",
    status: "Paid",
    bgColor: "bg-[#4BB8171C] px-9",
  },
  {
    orderId: "675675",
    date: "09/05/2024",
    amount: "$560",
    name: "John Doe",
    emailSent: "09/05/2024",
    status: "UnPaid",
    bgColor: "bg-[#CFCFCF26] px-6",
  },
  {
    orderId: "675675",
    date: "09/05/2024",
    amount: "$560",
    name: "John Doe",
    emailSent: "09/05/2024",
    status: "Left Card",
    bgColor: "bg-[#FF4C4C1A] px-4",
  },
  {
    orderId: "675675",
    date: "09/05/2024",
    amount: "$560",
    name: "John Doe",
    emailSent: "09/05/2024",
    status: "Arrived",
    bgColor: "bg-[#8979FF0A] px-6",
  },
];

export const MeetingTabData = [
  {
    icon: require("../assets/images/board.png"),
    content: <Board />,
  },
  {
    icon: require("../assets/images/chat.png"),
    content: <Calender />,
  },
];

export const MeetingData = [
  {
    icon: require("../assets/icons/zoom.png"),
    title: "Sales Leads Meeting",
    time: "10 am to 12 pm",
    description:
      "Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
  {
    icon: require("../assets/icons/zoom.png"),
    title: "Sales Leads Meeting",
    time: "10 am to 12 pm",
    description:
      "Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
  {
    icon: require("../assets/icons/zoom.png"),
    title: "Sales Leads Meeting",
    time: "10 am to 12 pm",
    description:
      "Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
  {
    icon: require("../assets/icons/zoom.png"),
    title: "Sales Leads Meeting",
    time: "10 am to 12 pm",
    description:
      "Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
  {
    icon: require("../assets/icons/zoom.png"),
    title: "Sales Leads Meeting",
    time: "10 am to 12 pm",
    description:
      "Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
  {
    icon: require("../assets/icons/zoom.png"),
    title: "Sales Leads Meeting",
    time: "10 am to 12 pm",
    description:
      "Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
  {
    icon: require("../assets/icons/zoom.png"),
    title: "Sales Leads Meeting",
    time: "10 am to 12 pm",
    description:
      "Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
  {
    icon: require("../assets/icons/zoom.png"),
    title: "Sales Leads Meeting",
    time: "10 am to 12 pm",
    description:
      "Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet",
    members: [
      require("../assets/icons/user1.png"),
      require("../assets/icons/user2.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user3.png"),
      require("../assets/icons/user4.png"),
    ],
  },
];

export const RoleTabData = [
  {
    title: "Accounts and Contacts",
    content: <Account />,
  },
  {
    title: "Roles and Permission",
    content: <Permission />,
  },
];

export const AccountData = [
  {
    accountId: "675674",
    name: "Delta Inc",
    contactName: "John Doe",
    number: "+097 55544 3",
  },
  {
    accountId: "675674",
    name: "Delta Inc",
    contactName: "John Doe",
    number: "+097 55544 3",
  },
  {
    accountId: "675674",
    name: "Delta Inc",
    contactName: "John Doe",
    number: "+097 55544 3",
  },
  {
    accountId: "675674",
    name: "Delta Inc",
    contactName: "John Doe",
    number: "+097 55544 3",
  },
  {
    accountId: "675674",
    name: "Delta Inc",
    contactName: "John Doe",
    number: "+097 55544 3",
  },
  {
    accountId: "675674",
    name: "Delta Inc",
    contactName: "John Doe",
    number: "+097 55544 3",
  },
  {
    accountId: "675674",
    name: "Delta Inc",
    contactName: "John Doe",
    number: "+097 55544 3",
  },
  {
    accountId: "675674",
    name: "Delta Inc",
    contactName: "John Doe",
    number: "+097 55544 3",
  },
  {
    accountId: "675674",
    name: "Delta Inc",
    contactName: "John Doe",
    number: "+097 55544 3",
  },
];

export const PermissionData = [
  {
    role: 'Admin',
    account: 'Yes',
    contact: 'Yes',
    number: 'Yes'
  },
  {
    role: 'Sales',
    account: 'Own',
    contact: 'Own',
    number: 'limited'
  },
  {
    role: 'Pre-Sales',
    account: 'limited',
    contact: 'limited',
    number: 'No'
  },
]

export const Groups = [
  {
    icon: require('../assets/icons/user1.png'),
    name: 'Friends Forever',
    message: 'Hahahaha!',
    time: 'Today, 9.52pm',
    number: '4'
  },
  {
    icon: require('../assets/icons/user2.png'),
    name: 'Mera Gang',
    message: 'Kyuuuuuu???',
    time: 'yesterday, 12.22pm',
  },
  {
    icon: require('../assets/icons/user3.png'),
    name: 'Hiking',
    message: 'Its not going to happen',
    time: 'Wed, 9.52pm',
  },
]

export const PeopleData = [
  {
    icon: require('../assets/icons/user4.png'),
    name: 'Friends Forever',
    message: 'Hahahaha!',
    time: 'Today, 9.52pm',
    number: '4'
  },
  {
    icon: require('../assets/icons/user5.png'),
    name: 'Mera Gang',
    message: 'Kyuuuuuu???',
    time: 'yesterday, 12.22pm',
  },
  {
    icon: require('../assets/icons/user6.png'),
    name: 'Hiking',
    message: 'Its not going to happen',
    time: 'Wed, 9.52pm',
  },
  {
    icon: require('../assets/icons/user7.png'),
    name: 'Friends Forever',
    message: 'Hahahaha!',
    time: 'Today, 9.52pm',
    number: '4'
  },
  {
    icon: require('../assets/icons/user8.png'),
    name: 'Mera Gang',
    message: 'Kyuuuuuu???',
    time: 'yesterday, 12.22pm',
  },
]
