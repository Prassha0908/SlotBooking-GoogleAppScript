<div align="center">

# Slot Booking System using Google Apps Script 📅
**Automated Slot Reservation System**

</div>

## Overview  
This project is a **Slot Booking System** developed using **Google Apps Script** and **Google Sheets** to manage time slot reservations efficiently. It allows users to select a unit, pick a day (Saturday/Sunday), choose a project, and book an available time slot. The booked slots are stored in a **Google Spreadsheet** dynamically.


## 🔗 Live Demo  
[Click here to access the Slot Booking System](https://script.google.com/macros/s/AKfycbwuK9h1SlG3tEuYWez6f3cV4FoptmXGPnrD1ZnUoTlpCmpD30d2IQf-sY_ciOSeTKOk/exec) 


## Table of Contents  
1. Features
2. Technology Stack  
3. Setup Instructions 
4. How It Works  
5. Usage  
6. Contact  
7. License  


## ✨ Features  
✅ **Dynamic Slot Selection** – Users can choose from available time slots.  
✅ **Real-Time Updates** – Slot availability is fetched dynamically.  
✅ **Google Sheets Integration** – Bookings are stored in a Google Spreadsheet.  
✅ **Google Apps Script Backend** – Manages slot bookings automatically.  
✅ **User-Friendly Interface** – Simple HTML & JavaScript-powered frontend.  

<br>

## 🛠 Technology Stack  
- **Google Apps Script** (Backend)  
- **Google Sheets** (Database)  
- **HTML, CSS, JavaScript** (Frontend)  

<br>

## 📌 Setup Instructions  
Follow these steps to deploy the Slot Booking System:

### 1️⃣ Google Sheets Setup  
1. Create a **Google Sheet** and structure it as follows:  
   - **Column A**: Timestamp  
   - **Column B**: Flat Number  
   - **Column C**: Project Name  
   - **Column D**: Time Slot  
   - **Column E**: Day  

2. Note the **Sheet ID** from the URL (`https://docs.google.com/spreadsheets/d/SHEET_ID/edit`).  

### 2️⃣ Google Apps Script Setup  
1. Open the **Google Sheet**, go to `Extensions` → `Apps Script`.  
2. Delete any existing code and rewrite the `script.gs` file as per your need.  
3. Replace `"SHEET_ID"` with your actual **Google Sheet ID**.  
4. Save and **Deploy as a Web App** (`Deploy` → `New Deployment`).  
5. Set **"Anyone with the link"** as the access level.  

### 3️⃣ HTML Setup  
1. In the Apps Script Editor, create a new file named `Index.html`.  
2. Write the HTML code. 
3. Save and deploy the script.  

## 🎯 How It Works  
1. The user selects a **flat number, day, project, and available time slot**.  
2. The script validates and books the slot if available.  
3. The booking details are **stored in Google Sheets** dynamically.  
4. Users receive **real-time slot availability updates**.  

## 📊 Spreadsheet Data Storage:
<img width="460" alt="image" src="https://github.com/user-attachments/assets/5e456445-e04d-4181-9fee-332fa4d9ca47" />

## 📝 Booking Form Interface:
<img width="850" alt="image" src="https://github.com/user-attachments/assets/c0002257-7e9a-455b-bc08-8ee589c6ac12" />


## 🌐 Usage
Users visit the Web App link and book a slot.
Admin can track bookings via the linked Google Spreadsheet.
The system ensures a real-time slot booking process.

## 📞 Contact
For any inquiries, feel free to reach out:

PRASSHANTHINI R

Email: prasshanthinir.21aid@kongu.edu


## 📜 License
This project is licensed under the MIT License.

