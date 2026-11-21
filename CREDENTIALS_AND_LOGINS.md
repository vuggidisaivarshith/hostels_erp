# DEVI HOSTELS — PORTAL & DASHBOARD ACCESS CREDENTIALS

**Proprietor:** MARPINA PRADEEP  
**Business Name:** DEVI HOSTELS  
**Platform URL (Local):** http://localhost:3000  
**Platform URL (Live Vercel):** https://hostels-erp.vercel.app/  

This document contains all pre-configured login credentials for the **Staff Administration Portal** and the **Resident Self-Service Portal**.

---

## 1. Staff & Administration Dashboard

- **Login URL:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login) (or via the main [http://localhost:3000/login](http://localhost:3000/login) "Staff & Management" tab)
- **Authentication Method:** Email & Password (PBKDF2 SHA-512 cryptographic verification)
- **Session Duration:** 7 Days (Secured via HttpOnly, SameSite cookies)

| Role | Staff Member | Email | Password | Branch Access |
| :--- | :--- | :--- | :--- | :--- |
| **Owner (Super Admin)** | MARPINA PRADEEP | `pradeep@devihostels.com` | `DeviHostels@Pradeep2026!` | **All 5 Branches** (Global Authorization) |
| **Branch 1 Manager** | V. Ramesh Babu | `ramesh.branch1@devihostels.com` | `DeviRamesh@Branch1!` | **Branch 1 (Devi Mansion)** |
| **Branch 2 Manager** | M. Anand Kumar | `anand.branch2@devihostels.com` | `DeviAnand@Branch2!` | **Branch 2 (Airport Staff Enclave)** |
| **Senior Accountant** | K. Sridhar Rao | `accounts@devihostels.com` | `DeviAccounts@Sridhar2026!` | **All 5 Branches** (Financials, Invoices, Payments, P&L) |
| **Resident Lady Warden** | P. Sunitha Reddy | `sunitha.warden@devihostels.com` | `DeviGirls@Warden2026!` | **Branch 5 (Girls Hostel Branch 1)** |

### Role Permissions & Capabilities:
- **Owner (`pradeep@devihostels.com`):** Complete unrestricted control. Create/edit/deactivate staff, view all branches, approve admissions, manage all financial transactions, configure system integrations.
- **Branch Managers:** Manage admissions, floor/room inventory, allocate beds, process branch-specific complaints and checkouts. Forbidden from accessing unauthorized branches.
- **Accountant:** Issue monthly recurring invoices, record offline payments (cash, direct UPI, bank transfer), process non-destructive reversals, view cash reconciliations and income statements.
- **Warden:** View resident rosters, verify daily complaints, record maintenance requests and daily branch activity.

---

## 2. Resident Self-Service Portal

- **Login URL:** [http://localhost:3000/resident/login](http://localhost:3000/resident/login) (or via the main [http://localhost:3000/login](http://localhost:3000/login) "Resident Portal" tab)
- **Authentication Methods:**
  1. **Password Login:** Permanent Resident ID + Password
  2. **OTP Login:** Registered Mobile Number / Permanent Resident ID + 6-Digit OTP

| Resident Name | Permanent Resident ID | Registered Phone | Category | Branch & Room | Password |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Aditya Sai Krishna** | `DV1-1-00001` | `9849111222` | Student (Vardhaman College) | Branch 1 (Devi Mansion) — Room 102 (Bed 102-A) | `DeviResident@2026!` |
| **Sumanth Nair** | `DV2-2-00002` | `9876500111` | Airport Employee (IndiGo Ground Lead) | Branch 2 (Airport Staff) — Room 201 (Bed 201-A) | `DeviResident@2026!` |
| **Pooja Hegde** | `DV5-1-00003` | `9701234567` | Airport Employee (Air India Cabin Crew) | Branch 5 (Girls Hostel) — Room 101 (Bed 101-A) | `DeviResident@2026!` |

### Resident Portal Features:
- **My Hostel & Room Details:** View room allocation, floor, sharing type, bed number, and resident warden contact.
- **Billing & Invoices:** View itemized monthly rent invoices, download receipt PDFs, and track payment status.
- **Online Payments:** Instant UPI and Net Banking payments with automatic invoice reconciliation.
- **Support & Complaints:** Raise maintenance and Wi-Fi tickets directly with the hostel management desk.
- **Advance & Security Deposit:** Real-time visibility into advance balance and refundable security deposit ledger.

---

## 3. How to Test & Verify in Local Development

1. **Staff Dashboard:**
   - Open [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
   - Enter email: `pradeep@devihostels.com`
   - Enter password: `DeviHostels@Pradeep2026!`
   - Click **"Sign In to Admin Portal"**
   - You will be redirected to the full Owner Dashboard at `/admin`.

2. **Resident Portal:**
   - Open [http://localhost:3000/resident/login](http://localhost:3000/resident/login)
   - Enter Permanent Resident ID: `DV1-1-00001`
   - Enter password: `DeviResident@2026!`
   - Click **"Access Resident Portal"**
   - You will be redirected to the Resident Dashboard at `/resident/dashboard`.
