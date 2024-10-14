import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AboutUs from "./pages/AboutUs/AboutUs";
import Aim from "./pages/AboutUs/Aim";
import OurVision from "./pages/AboutUs/OurVision";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import EventsTwo from "./pages/Events/EventsTwo";
import EventsThree from "./pages/Events/EventsThree";
import Service from "./pages/Services/Services";
import ServiceOne from "./pages/Services/ServicesOne";
import ServiceTwo from "./pages/Services/ServicesTwo";
import ServiceThree from "./pages/Services/ServicesThree";
import Support from "./pages/Support/Support";
import ExportExcel from './pages/ExportExcel/ExportExcel';
import Home from './pages/Home/Home';

function App() {

    let transactionData = [
        {
            did: 46235679,
            coco: "Vaishali Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-135",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [VSL]",
            items: 18,
            qty: 86.00,
            insdt: "2024-07-06 17:13:45.69",
            kyi: 46235679
        },
        {
            did: 46235654,
            coco: "Gufa Mandir Road",
            docDate: "2024-07-06",
            docNo: "STG-20240706-134",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [GFM]",
            items: 28,
            qty: 180.00,
            insdt: "2024-07-06 17:09:04.34",
            kyi: 46235654
        },
        {
            did: 46235643,
            coco: "Nehru Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-133",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [NHNGR]",
            items: 9,
            qty: 53.00,
            insdt: "2024-07-06 17:05:59.253",
            kyi: 46235643
        },
        {
            did: 46235638,
            coco: "Rajendra Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-132",
            narrations: "InterCity Indent transfer :  From HBRPKG ToDispatch Vehicle For [RJN]",
            items: 19,
            qty: 78.00,
            insdt: "2024-07-06 17:05:16.737",
            kyi: 46235638
        },
        {
            did: 46235586,
            coco: "Kolar 5",
            docDate: "2024-07-06",
            docNo: "STG-20240706-131",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KLR5]",
            items: 23,
            qty: 135.00,
            insdt: "2024-07-06 16:58:57.26",
            kyi: 46235586
        },
        {
            did: 46235575,
            coco: "RTO Road",
            docDate: "2024-07-06",
            docNo: "STG-20240706-130",
            narrations: "InterCity Indent transfer :  From HBRPKG ToDispatch Vehicle For [RTO]",
            items: 23,
            qty: 109.00,
            insdt: "2024-07-06 16:55:49.25",
            kyi: 46235575
        },
        {
            did: 46235546,
            coco: "Nehru Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-129",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [NHNGR]",
            items: 20,
            qty: 142.00,
            insdt: "2024-07-06 16:50:54.027",
            kyi: 46235546
        },
        {
            did: 46235541,
            coco: "Kolar 5",
            docDate: "2024-07-06",
            docNo: "STG-20240706-128",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KLR5]",
            items: 17,
            qty: 48.00,
            insdt: "2024-07-06 16:49:34.023",
            kyi: 46235541
        },
        {
            did: 46235525,
            coco: "Gufa Mandir Road",
            docDate: "2024-07-06",
            docNo: "STG-20240706-127",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [GFM]",
            items: 25,
            qty: 164.00,
            insdt: "2024-07-06 16:46:22.98",
            kyi: 46235525
        },
        {
            did: 46235463,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-4249-20240706-3",
            narrations: "Indent transfer :  From VSL ToDispatch Vehicle For [12No]",
            items: 1,
            qty: 9.00,
            insdt: "2024-07-06 16:42:13.337",
            kyi: 46235463
        },
        {
            did: 46235449,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-4249-20240706-2",
            narrations: "Indent transfer :  From VSL ToDispatch Vehicle For [12No]",
            items: 9,
            qty: 13.00,
            insdt: "2024-07-06 16:39:41.5",
            kyi: 46235449
        },
        {
            did: 46235369,
            coco: "Kolar 5",
            docDate: "2024-07-06",
            docNo: "STG-20240706-126",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KLR5]",
            items: 22,
            qty: 192.00,
            insdt: "2024-07-06 16:28:31.897",
            kyi: 46235369
        },
        {
            did: 46235367,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-2304-20240706-2",
            narrations: "Indent transfer :  From KTR ToDispatch Vehicle For [12No]",
            items: 18,
            qty: 37.00,
            insdt: "2024-07-06 16:27:54.05",
            kyi: 46235367
        },
        {
            did: 46235364,
            coco: "Nehru Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-125",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [NHNGR]",
            items: 8,
            qty: 71.00,
            insdt: "2024-07-06 16:26:53.907",
            kyi: 46235364
        },
        {
            did: 46235356,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-4249-20240706-1",
            narrations: "Indent transfer :  From VSL ToDispatch Vehicle For [12No]",
            items: 24,
            qty: 56.00,
            insdt: "2024-07-06 16:25:11.227",
            kyi: 46235356
        },
        {
            did: 46235330,
            coco: "Saket Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-124",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [SKN]",
            items: 23,
            qty: 138.00,
            insdt: "2024-07-06 16:18:44.42",
            kyi: 46235330
        },
        {
            did: 46235324,
            coco: "Kohefiza",
            docDate: "2024-07-06",
            docNo: "STG-20240706-123",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KFZ]",
            items: 22,
            qty: 108.00,
            insdt: "2024-07-06 16:17:47.523",
            kyi: 46235324
        },
        {
            did: 46235270,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-2304-20240706-1",
            narrations: "Indent transfer :  From KTR ToDispatch Vehicle For [ARR]",
            items: 43,
            qty: 81.00,
            insdt: "2024-07-06 16:13:37.683",
            kyi: 46235270
        },
        {
            did: 46235251,
            coco: "Rohit Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-122",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [RHTNGR]",
            items: 13,
            qty: 127.00,
            insdt: "2024-07-06 16:05:00.747",
            kyi: 46235251
        },
        {
            did: 46235241,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-6478-20240706-2",
            narrations: "Indent transfer :  From KLR5 ToDispatch Vehicle For [ARR]",
            items: 33,
            qty: 50.00,
            insdt: "2024-07-06 16:03:00.503",
            kyi: 46235241
        },
        {
            did: 46235174,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-15482-20240706-4",
            narrations: "Indent transfer :  From BHLSGM ToDispatch Vehicle For [ARR]",
            items: 62,
            qty: 202.00,
            insdt: "2024-07-06 15:56:56.337",
            kyi: 46235174
        },
        {
            did: 46235171,
            coco: "Airport Road Bhopal",
            docDate: "2024-07-06",
            docNo: "STG-20240706-121",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [AIR]",
            items: 26,
            qty: 183.00,
            insdt: "2024-07-06 15:56:37.07",
            kyi: 46235171
        },
        {
            did: 46235113,
            coco: "Vaishali Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-120",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [VSL]",
            items: 19,
            qty: 53.00,
            insdt: "2024-07-06 15:45:45.12",
            kyi: 46235113
        },
        {
            did: 46235101,
            coco: "Vaishali Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-119",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [VSL]",
            items: 19,
            qty: 172.00,
            insdt: "2024-07-06 15:45:00.4",
            kyi: 46235101
        },
        {
            did: 46235081,
            coco: "Bhel Sangam",
            docDate: "2024-07-06",
            docNo: "STG-20240706-118",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [BHLSGM]",
            items: 9,
            qty: 18.00,
            insdt: "2024-07-06 15:39:46.083",
            kyi: 46235081
        },
        {
            did: 46235073,
            coco: "Shakti Nagar Bpl",
            docDate: "2024-07-06",
            docNo: "STG-20240706-117",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [ShkNgr]",
            items: 21,
            qty: 134.00,
            insdt: "2024-07-06 15:38:25.19",
            kyi: 46235073
        },
        {
            did: 46235015,
            coco: "Saket Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-116",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [SKN]",
            items: 21,
            qty: 121.00,
            insdt: "2024-07-06 15:30:22.317",
            kyi: 46235015
        },
        {
            did: 46235010,
            coco: "Ayodhya",
            docDate: "2024-07-06",
            docNo: "STG-20240706-115",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [ADH]",
            items: 16,
            qty: 90.00,
            insdt: "2024-07-06 15:27:58.957",
            kyi: 46235010
        },
        {
            did: 46235002,
            coco: "Prabhat Franchisee Store",
            docDate: "2024-07-06",
            docNo: "STG-20240706-114",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [fPCH]",
            items: 21,
            qty: 137.00,
            insdt: "2024-07-06 15:25:02.617",
            kyi: 46235002
        },
        {
            did: 46234959,
            coco: "Ayodhya",
            docDate: "2024-07-06",
            docNo: "STG-20240706-113",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [ADH]",
            items: 15,
            qty: 120.00,
            insdt: "2024-07-06 15:17:00.047",
            kyi: 46234959
        },
        {
            did: 46234917,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-20240706-112",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [ARR]",
            items: 33,
            qty: 237.00,
            insdt: "2024-07-06 15:15:04.023",
            kyi: 46234917
        },
        {
            did: 46234916,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-19032-20240706-3",
            narrations: "Indent transfer :  From JTKHD ToDispatch Vehicle For [ARR]",
            items: 3,
            qty: 4.00,
            insdt: "2024-07-06 15:14:57.96",
            kyi: 46234916
        },
        {
            did: 46234907,
            coco: "Katara Hills",
            docDate: "2024-07-06",
            docNo: "STG-20240706-111",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [KTR]",
            items: 21,
            qty: 156.00,
            insdt: "2024-07-06 15:12:58.84",
            kyi: 46234907
        },
        {
            did: 46234873,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-20240706-110",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [ARR]",
            items: 18,
            qty: 126.00,
            insdt: "2024-07-06 15:03:21.08",
            kyi: 46234873
        },
        {
            did: 46234814,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-6478-20240706-1",
            narrations: "Indent transfer :  From KLR5 ToDispatch Vehicle For [12No]",
            items: 24,
            qty: 40.00,
            insdt: "2024-07-06 14:58:42.207",
            kyi: 46234814
        },
        {
            did: 46234806,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-20240706-109",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [ARR]",
            items: 13,
            qty: 114.00,
            insdt: "2024-07-06 14:56:42.947",
            kyi: 46234806
        },
        {
            did: 46234803,
            coco: "Kolar 5",
            docDate: "2024-07-06",
            docNo: "STG-20240706-108",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [KLR5]",
            items: 16,
            qty: 114.00,
            insdt: "2024-07-06 14:56:17.99",
            kyi: 46234803
        },
        {
            did: 46234790,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-17226-20240706-1",
            narrations: "Indent transfer :  From fPCH ToDispatch Vehicle For [12No]",
            items: 25,
            qty: 48.00,
            insdt: "2024-07-06 14:52:44.41",
            kyi: 46234790
        },
        {
            did: 46234783,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-20240706-107",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [12No]",
            items: 18,
            qty: 192.00,
            insdt: "2024-07-06 14:50:51.783",
            kyi: 46234783
        },
        {
            did: 46234759,
            coco: "Prabhat Franchisee Store",
            docDate: "2024-07-06",
            docNo: "STG-20240706-105",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [fPCH]",
            items: 15,
            qty: 119.00,
            insdt: "2024-07-06 14:46:59.48",
            kyi: 46234759
        },
        {
            did: 46234722,
            coco: "Gufa Mandir Road",
            docDate: "2024-07-06",
            docNo: "STG-20240706-103",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [GFM]",
            items: 31,
            qty: 203.00,
            insdt: "2024-07-06 14:43:35.91",
            kyi: 46234722
        },
        {
            did: 46234710,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-19032-20240706-2",
            narrations: "Indent transfer :  From JTKHD ToDispatch Vehicle For [ARR]",
            items: 64,
            qty: 149.00,
            insdt: "2024-07-06 14:41:38.637",
            kyi: 46234710
        },
        {
            did: 46234696,
            coco: "Kolar 7",
            docDate: "2024-07-06",
            docNo: "STG-20240706-100",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [KLR7]",
            items: 16,
            qty: 114.00,
            insdt: "2024-07-06 14:37:46.03",
            kyi: 46234696
        },
        {
            did: 46234688,
            coco: "Gufa Mandir Road",
            docDate: "2024-07-06",
            docNo: "STG-20240706-99",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [GFM]",
            items: 22,
            qty: 254.00,
            insdt: "2024-07-06 14:34:22.82",
            kyi: 46234688
        },
        {
            did: 46234669,
            coco: "Airport Road Bhopal",
            docDate: "2024-07-06",
            docNo: "STG-20240706-96",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [AIR]",
            items: 26,
            qty: 204.00,
            insdt: "2024-07-06 14:31:45.567",
            kyi: 46234669
        },
        {
            did: 46234603,
            coco: "Kohefiza",
            docDate: "2024-07-06",
            docNo: "STG-20240706-93",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KFZ]",
            items: 24,
            qty: 171.00,
            insdt: "2024-07-06 14:26:03.947",
            kyi: 46234603
        },
        {
            did: 46234597,
            coco: "Jatkhedi",
            docDate: "2024-07-06",
            docNo: "STG-20240706-92",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [JTKHD]",
            items: 15,
            qty: 130.00,
            insdt: "2024-07-06 14:24:30.643",
            kyi: 46234597
        },
        {
            did: 46234543,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-2238-20240706-2",
            narrations: "Indent transfer :  From CHB ToDispatch Vehicle For [ARR]",
            items: 43,
            qty: 106.00,
            insdt: "2024-07-06 14:22:02.14",
            kyi: 46234543
        },
        {
            did: 46234526,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-3436-20240706-3",
            narrations: "Indent transfer :  From SKN ToDispatch Vehicle For [ARR]",
            items: 32,
            qty: 66.00,
            insdt: "2024-07-06 14:19:24.917",
            kyi: 46234526
        },
        {
            did: 46234503,
            coco: "Saket Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-88",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [SKN]",
            items: 23,
            qty: 124.00,
            insdt: "2024-07-06 14:16:17.673",
            kyi: 46234503
        },
        {
            did: 46234450,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-15482-20240706-3",
            narrations: "Indent transfer :  From BHLSGM ToDispatch Vehicle For [12No]",
            items: 31,
            qty: 106.00,
            insdt: "2024-07-06 14:12:16.453",
            kyi: 46234450
        },
        {
            did: 46234449,
            coco: "Chunabhatti",
            docDate: "2024-07-06",
            docNo: "STG-20240706-85",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [CHB]",
            items: 1,
            qty: 10.00,
            insdt: "2024-07-06 14:12:12.14",
            kyi: 46234449
        },
        {
            did: 46234445,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-2788-20240706-2",
            narrations: "Indent transfer :  From AIR ToDispatch Vehicle For [12No]",
            items: 31,
            qty: 92.00,
            insdt: "2024-07-06 14:12:04.203",
            kyi: 46234445
        },
        {
            did: 46234443,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-20240706-84",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [12No]",
            items: 13,
            qty: 97.00,
            insdt: "2024-07-06 14:10:17.247",
            kyi: 46234443
        },
        {
            did: 46234361,
            coco: "Kohefiza",
            docDate: "2024-07-06",
            docNo: "STG-20240706-82",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [KFZ]",
            items: 16,
            qty: 93.00,
            insdt: "2024-07-06 13:58:19.557",
            kyi: 46234361
        },
        {
            did: 46234351,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-3987-20240706-2",
            narrations: "Indent transfer :  From ARR ToDispatch Vehicle For [12No]",
            items: 1,
            qty: 1.00,
            insdt: "2024-07-06 13:56:52.887",
            kyi: 46234351
        },
        {
            did: 46234345,
            coco: "Airport Road Bhopal",
            docDate: "2024-07-06",
            docNo: "STG-20240706-81",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [AIR]",
            items: 22,
            qty: 125.00,
            insdt: "2024-07-06 13:55:12.323",
            kyi: 46234345
        },
        {
            did: 46234344,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-2238-20240706-1",
            narrations: "Indent transfer :  From CHB ToDispatch Vehicle For [12No]",
            items: 26,
            qty: 56.00,
            insdt: "2024-07-06 13:54:32.51",
            kyi: 46234344
        },
        {
            did: 46234330,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-3987-20240706-1",
            narrations: "Indent transfer :  From ARR ToDispatch Vehicle For [12No]",
            items: 23,
            qty: 56.00,
            insdt: "2024-07-06 13:51:15.08",
            kyi: 46234330
        },
        {
            did: 46234253,
            coco: "Katara Hills",
            docDate: "2024-07-06",
            docNo: "STG-20240706-80",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KTR]",
            items: 21,
            qty: 96.00,
            insdt: "2024-07-06 13:40:09.587",
            kyi: 46234253
        },
        {
            did: 46234153,
            coco: "Chunabhatti",
            docDate: "2024-07-06",
            docNo: "STG-20240706-79",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [CHB]",
            items: 20,
            qty: 149.00,
            insdt: "2024-07-06 13:26:58.25",
            kyi: 46234153
        },
        {
            did: 46234140,
            coco: "Shakti Nagar Bpl",
            docDate: "2024-07-06",
            docNo: "STG-20240706-78",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [ShkNgr]",
            items: 25,
            qty: 189.00,
            insdt: "2024-07-06 13:24:37.313",
            kyi: 46234140
        },
        {
            did: 46234098,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-3436-20240706-2",
            narrations: "Indent transfer :  From SKN ToDispatch Vehicle For [12No]",
            items: 22,
            qty: 43.00,
            insdt: "2024-07-06 13:16:26.567",
            kyi: 46234098
        },
        {
            did: 46233940,
            coco: "Kohefiza",
            docDate: "2024-07-06",
            docNo: "STG-20240706-73",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KFZ]",
            items: 19,
            qty: 341.00,
            insdt: "2024-07-06 12:58:01.083",
            kyi: 46233940
        },
        {
            did: 46233930,
            coco: "Chunabhatti",
            docDate: "2024-07-06",
            docNo: "STG-20240706-72",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [CHB]",
            items: 22,
            qty: 178.00,
            insdt: "2024-07-06 12:55:57.343",
            kyi: 46233930
        },
        {
            did: 46233927,
            coco: "Katara Hills",
            docDate: "2024-07-06",
            docNo: "STG-20240706-71",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KTR]",
            items: 20,
            qty: 140.00,
            insdt: "2024-07-06 12:55:34.153",
            kyi: 46233927
        },
        {
            did: 46233925,
            coco: "Kolar 7",
            docDate: "2024-07-06",
            docNo: "STG-20240706-70",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KLR7]",
            items: 12,
            qty: 86.00,
            insdt: "2024-07-06 12:55:05.17",
            kyi: 46233925
        },
        {
            did: 46233799,
            coco: "Jatkhedi",
            docDate: "2024-07-06",
            docNo: "STG-20240706-69",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [JTKHD]",
            items: 8,
            qty: 32,
            insdt: "2024-07-06 12:43:25.94",
            kyi: 46233799
        },
        {
            did: 46233783,
            coco: "Nasrullaganj Store",
            docDate: "2024-07-06",
            docNo: "STG-20240706-68",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [NRSLGNJ]",
            items: 7,
            qty: 53.00,
            insdt: "2024-07-06 12:39:48.957",
            kyi: 46233783
        },
        {
            did: 46233768,
            coco: "Karond Bhopal",
            docDate: "2024-07-06",
            docNo: "STG-20240706-67",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KROD]",
            items: 2,
            qty: 45.00,
            insdt: "2024-07-06 12:33:21.98",
            kyi: 46233768
        },
        {
            did: 46233765,
            coco: "Jatkhedi",
            docDate: "2024-07-06",
            docNo: "STG-20240706-66",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [JTKHD]",
            items: 2,
            qty: 50.00,
            insdt: "2024-07-06 12:32:33.463",
            kyi: 46233765
        },
        {
            did: 46233761,
            coco: "Saket Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-65",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [SKN]",
            items: 21,
            qty: 358.00,
            insdt: "2024-07-06 12:31:45.397",
            kyi: 46233761
        },
        {
            did: 46233752,
            coco: "Chunabhatti",
            docDate: "2024-07-06",
            docNo: "STG-20240706-64",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [CHB]",
            items: 1,
            qty: 25.00,
            insdt: "2024-07-06 12:31:10.13",
            kyi: 46233752
        },
        {
            did: 46233748,
            coco: "Silwani Franchisee Store",
            docDate: "2024-07-06",
            docNo: "STG-20240706-63",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [fSLWNI]",
            items: 6,
            qty: 14.00,
            insdt: "2024-07-06 12:31:04.91",
            kyi: 46233748
        },
        {
            did: 46233727,
            coco: "Bhel Sangam",
            docDate: "2024-07-06",
            docNo: "STG-20240706-62",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [BHLSGM]",
            items: 9,
            qty: 52.00,
            insdt: "2024-07-06 12:30:33.94",
            kyi: 46233727
        },
        {
            did: 46233722,
            coco: "Gufa Mandir Road",
            docDate: "2024-07-06",
            docNo: "STG-20240706-61",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [GFM]",
            items: 2,
            qty: 35.00,
            insdt: "2024-07-06 12:30:26.33",
            kyi: 46233722
        },
        {
            did: 46233711,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-20240706-59",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [ARR]",
            items: 3,
            qty: 75.00,
            insdt: "2024-07-06 12:29:38.17",
            kyi: 46233711
        },
        {
            did: 46233708,
            coco: "Ayodhya",
            docDate: "2024-07-06",
            docNo: "STG-20240706-58",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [ADH]",
            items: 2,
            qty: 45.00,
            insdt: "2024-07-06 12:28:34.21",
            kyi: 46233708
        },
        {
            did: 46233700,
            coco: "Kohefiza",
            docDate: "2024-07-06",
            docNo: "STG-20240706-56",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KFZ]",
            items: 1,
            qty: 25.00,
            insdt: "2024-07-06 12:27:43.8",
            kyi: 46233700
        },
        {
            did: 46233698,
            coco: "Katara Hills",
            docDate: "2024-07-06",
            docNo: "STG-20240706-55",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KTR]",
            items: 1,
            qty: 25.00,
            insdt: "2024-07-06 12:27:01.03",
            kyi: 46233698
        },
        {
            did: 46233697,
            coco: "Karond Bhopal",
            docDate: "2024-07-06",
            docNo: "STG-20240706-54",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KROD]",
            items: 18,
            qty: 48.00,
            insdt: "2024-07-06 12:26:52.343",
            kyi: 46233697
        },
        {
            did: 46233696,
            coco: "Ayodhya",
            docDate: "2024-07-06",
            docNo: "STG-20240706-53",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [ADH]",
            items: 13,
            qty: 103.00,
            insdt: "2024-07-06 12:26:50.467",
            kyi: 46233696
        },
        {
            did: 46233685,
            coco: "Chunabhatti",
            docDate: "2024-07-06",
            docNo: "STG-20240706-52",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [CHB]",
            items: 20,
            qty: 68.00,
            insdt: "2024-07-06 12:24:05.173",
            kyi: 46233685
        },
        {
            did: 46233682,
            coco: "Prabhat Franchisee Store",
            docDate: "2024-07-06",
            docNo: "STG-20240706-51",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [fPCH]",
            items: 3,
            qty: 32.00,
            insdt: "2024-07-06 12:23:36.03",
            kyi: 46233682
        },
        {
            did: 46233676,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-3780-20240706-2",
            narrations: "Indent transfer :  From KFZ ToDispatch Vehicle For [ARR]",
            items: 49,
            qty: 106.00,
            insdt: "2024-07-06 12:22:37.073",
            kyi: 46233676
        },
        {
            did: 46233668,
            coco: "Panna Franchisee Store",
            docDate: "2024-07-06",
            docNo: "STG-20240706-49",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [fPANNA]",
            items: 2,
            qty: 4.00,
            insdt: "2024-07-06 12:20:55.35",
            kyi: 46233668
        },
        {
            did: 46233603,
            coco: "Bhel Sangam",
            docDate: "2024-07-06",
            docNo: "STG-20240706-46",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [BHLSGM]",
            items: 4,
            qty: 127.00,
            insdt: "2024-07-06 12:15:13.797",
            kyi: 46233603
        },
        {
            did: 46233591,
            coco: "Vaishali Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-44",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [VSL]",
            items: 14,
            qty: 90.00,
            insdt: "2024-07-06 12:12:35.58",
            kyi: 46233591
        },
        {
            did: 46233590,
            coco: "Rohit Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-43",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [RHTNGR]",
            items: 5,
            qty: 76.00,
            insdt: "2024-07-06 12:12:30.067",
            kyi: 46233590
        },
        {
            did: 46233567,
            coco: "Nehru Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-41",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [NHNGR]",
            items: 3,
            qty: 119,
            insdt: "2024-07-06 12:06:39.31",
            kyi: 46233567
        },
        {
            did: 46233554,
            coco: "Kolar 5",
            docDate: "2024-07-06",
            docNo: "STG-20240706-38",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KLR5]",
            items: 2,
            qty: 50.00,
            insdt: "2024-07-06 12:04:05.973",
            kyi: 46233554
        },
        {
            did: 46233547,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-2788-20240706-1",
            narrations: "Indent transfer :  From AIR ToDispatch Vehicle For [ARR]",
            items: 29,
            qty: 67.00,
            insdt: "2024-07-06 12:02:51.813",
            kyi: 46233547
        },
        {
            did: 46233533,
            coco: "Vaishali Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-37",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [VSL]",
            items: 2,
            qty: 2.00,
            insdt: "2024-07-06 12:01:45.293",
            kyi: 46233533
        },
        {
            did: 46233495,
            coco: "Airport Road Bhopal",
            docDate: "2024-07-06",
            docNo: "STG-20240706-36",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [AIR]",
            items: 14,
            qty: 113.00,
            insdt: "2024-07-06 11:59:54.52",
            kyi: 46233495
        },
        {
            did: 46233491,
            coco: "Ayodhya",
            docDate: "2024-07-06",
            docNo: "STG-20240706-35",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [ADH]",
            items: 3,
            qty: 110.00,
            insdt: "2024-07-06 11:58:38.313",
            kyi: 46233491
        },
        {
            did: 46233476,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-20240706-33",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [ARR]",
            items: 3,
            qty: 7.00,
            insdt: "2024-07-06 11:54:55.253",
            kyi: 46233476
        },
        {
            did: 46233462,
            coco: "Gufa Mandir Road",
            docDate: "2024-07-06",
            docNo: "STG-20240706-32",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [GFM]",
            items: 5,
            qty: 123.00,
            insdt: "2024-07-06 11:50:54.723",
            kyi: 46233462
        },
        {
            did: 46233439,
            coco: "Kohefiza",
            docDate: "2024-07-06",
            docNo: "STG-20240706-30",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KFZ]",
            items: 3,
            qty: 13.00,
            insdt: "2024-07-06 11:46:36.863",
            kyi: 46233439
        },
        {
            did: 46233401,
            coco: "Katara Hills",
            docDate: "2024-07-06",
            docNo: "STG-20240706-29",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KTR]",
            items: 12,
            qty: 149.00,
            insdt: "2024-07-06 11:44:49.39",
            kyi: 46233401
        },
        {
            did: 46233391,
            coco: "Saket Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-27",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [SKN]",
            items: 7,
            qty: 57.00,
            insdt: "2024-07-06 11:42:49.63",
            kyi: 46233391
        },
        {
            did: 46233384,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-19023-20240706-2",
            narrations: "Indent transfer :  From KLR7 ToDispatch Vehicle For [12No]",
            items: 27,
            qty: 45.00,
            insdt: "2024-07-06 11:41:15.25",
            kyi: 46233384
        },
        {
            did: 46233356,
            coco: "Airport Road Bhopal",
            docDate: "2024-07-06",
            docNo: "STG-20240706-25",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [AIR]",
            items: 3,
            qty: 145.00,
            insdt: "2024-07-06 11:34:26.063",
            kyi: 46233356
        },
        {
            did: 46233350,
            coco: "Katara Hills",
            docDate: "2024-07-06",
            docNo: "STG-20240706-24",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [KTR]",
            items: 3,
            qty: 20.00,
            insdt: "2024-07-06 11:32:49.37",
            kyi: 46233350
        },
        {
            did: 46233296,
            coco: "Chunabhatti",
            docDate: "2024-07-06",
            docNo: "STG-20240706-22",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [CHB]",
            items: 4,
            qty: 27.00,
            insdt: "2024-07-06 11:29:35.327",
            kyi: 46233296
        },
        {
            did: 46233247,
            coco: "Chunabhatti",
            docDate: "2024-07-06",
            docNo: "STG-20240706-18",
            narrations: "Indent transfer :  From HBRWH ToDispatch Vehicle For [CHB]",
            items: 15,
            qty: 149.00,
            insdt: "2024-07-06 11:20:25.843",
            kyi: 46233247
        },
        {
            did: 46233240,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-19023-20240706-1",
            narrations: "Indent transfer :  From KLR7 ToDispatch Vehicle For [ARR]",
            items: 51,
            qty: 66.00,
            insdt: "2024-07-06 11:18:55.65",
            kyi: 46233240
        },
        {
            did: 46233097,
            coco: "Shakti Nagar Bpl",
            docDate: "2024-07-06",
            docNo: "STG-3436-20240706-1",
            narrations: "Open Transfer :  From SKN ToDispatch Vehicle For [ShkNgr]",
            items: 1,
            qty: 6.00,
            insdt: "2024-07-06 10:59:01.963",
            kyi: 46233097
        },
        {
            did: 46233095,
            coco: "LIG",
            docDate: "STG-20240706-11",
            docNo: "2024-07-06",
            narrations: "InterCity Indent transfer :  From HBRPKG ToDispatch Vehicle For [LIGC]",
            items: 10,
            qty: 29.00,
            insdt: "2024-07-06 10:58:03.913",
            kyi: 46233095
        },
        {
            did: 46233076,
            coco: "Silwani  Franchisee Store",
            docDate: "2024-07-06",
            docNo: "STG-20240706-7",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [fSLWNI]",
            items: 3,
            qty: 9.00,
            insdt: "2024-07-06 10:52:25.987",
            kyi: 46233076
        },
        {
            did: 46233065,
            coco: "Mahidpur Franchisee Store",
            docDate: "2024-07-06",
            docNo: "STG-20240706-5",
            narrations: "InterCity Indent transfer :  From HBRPKG ToDispatch Vehicle For [fMHDPR]",
            items: 8,
            qty: 24.00,
            insdt: "2024-07-06 10:49:59.46",
            kyi: 46233065
        },
        {
            did: 46233029,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-3781-20240706-3",
            narrations: "Indent transfer :  From GFM ToDispatch Vehicle For [ARR]",
            items: 1,
            qty: 1.00,
            insdt: "2024-07-06 10:45:44.853",
            kyi: 46233029
        },
        {
            did: 46233007,
            coco: "Dewas Naka",
            docDate: "2024-07-06",
            docNo: "STG-20240706-2",
            narrations: "InterCity Indent transfer :  From HBRPKG ToDispatch Vehicle For [fDWSNKA]",
            items: 6,
            qty: 18.00,
            insdt: "2024-07-06 10:44:58.74",
            kyi: 46233007
        },
        {
            did: 46233004,
            coco: "Arera Colony",
            docDate: "2024-07-06",
            docNo: "STG-3781-20240706-2",
            narrations: "Indent transfer :  From GFM ToDispatch Vehicle For [ARR]",
            items: 26,
            qty: 42.00,
            insdt: "2024-07-06 10:44:05.597",
            kyi: 46233004
        },
        {
            did: 46232978,
            coco: "Nehru Nagar",
            docDate: "2024-07-06",
            docNo: "STG-20240706-1",
            narrations: "Indent transfer :  From HBRPKG ToDispatch Vehicle For [NHNGR]",
            items: 7,
            qty: 42.00,
            insdt: "2024-07-06 10:33:58.047",
            kyi: 46232978
        },
        {
            did: 46232923,
            coco: "12 No. Stop",
            docDate: "2024-07-06",
            docNo: "STG-3780-20240706-1",
            narrations: "Indent transfer :  From KFZ ToDispatch Vehicle For [12No]",
            items: 42,
            qty: 93.00,
            insdt: "2024-07-06 10:29:06.807",
            kyi: 46232923
        },
    ]
    return (
        <BrowserRouter>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='about-us/aim' element={<Aim />} />
                <Route path="about-us/vision" element={<OurVision />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/events' ellement={<Events />} />
                <Route path='events/event1' element={<EventsTwo />} />
                <Route path='events/event2' element={<EventsThree />} />
                <Route path='/service' element={<Service />} />
                <Route path='services/service1' element={<ServiceOne />} />
                <Route path='services/service2' elemnt={<ServiceTwo />} />
                <Route path='services/service3' element={<ServiceThree />} />
                <Route path='/support' elemeent={<Support />} />
                <Route path="/excel-export" element={< ExportExcel data={transactionData} fileName={"excel-report"}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
