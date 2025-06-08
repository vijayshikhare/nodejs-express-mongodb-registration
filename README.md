# 📝 User Registration Form with Node.js, Express & MongoDB Atlas

**Secure & Stylish User Signup System**  
_Full-Stack Project | Node.js Backend | MongoDB Atlas Cloud Database_

---

## 📌 Overview

A **secure and user-friendly registration system** built with **Node.js**, **Express**, and **MongoDB Atlas**. Features include email uniqueness validation, animated Bootstrap 5 UI, and success/error feedback pages.

---

## 🎓 Project Info

- **Developer:** Vijay Shikhare  
- **Stack:** Node.js, Express.js, MongoDB Atlas, Mongoose, Bootstrap 5  
- **Purpose:** User registration with duplicate email detection and interactive UI

---

## 🚀 Key Features

- 🔒 Email uniqueness validation & secure data storage  
- 🌐 Backend connected to MongoDB Atlas (cloud NoSQL)  
- ✨ Responsive UI with Bootstrap 5 and CSS animations (bubbles, stars)  
- 📄 Clear success and error feedback pages  
- ⚙️ Environment configuration with dotenv

---

## 🛠️ Tech Stack

| Component    | Details                      |
|--------------|------------------------------|
| Node.js      | Backend runtime              |
| Express.js   | Web framework                |
| MongoDB Atlas| Cloud-hosted NoSQL database  |
| Mongoose     | ODM for MongoDB              |
| Bootstrap 5  | Frontend styling framework   |
| dotenv       | Environment variable management |

---

## 🔍 How It Works

1. User visits `/` — a styled registration form is served.  
2. On submission, data posts to `/register`.  
3. Server checks if email already exists in the database.  
4. If unique → user saved → redirected to `/success`.  
5. If duplicate → redirected to `/error`.

---

## 📂 Project Structure

```
registration-form/
├── pages/
│   ├── index.html        # Registration form UI
│   ├── success.html      # Registration success page
│   └── error.html        # Duplicate email/error page
├── server.js             # Backend logic
├── .env                  # MongoDB URI, PORT config
├── package.json          # Dependencies & scripts
└── README.md             # This documentation
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js installed (v18+)  
- MongoDB Atlas account and cluster ready  

### Steps

```bash
git clone https://github.com/yourusername/registration-form.git
cd registration-form
npm install
```

Create `.env` file:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/registrationFormDB
PORT=3000
```

> Replace `<username>`, `<password>`, and `<cluster>` with your MongoDB Atlas details.

Run server:

```bash
node server.js
```

Open your browser at:  
```
http://localhost:3000
```

---

## 👀 UI Preview

- **index.html:** Animated background with bubbles and falling stars  
- **success.html:** Confirms successful registration  
- **error.html:** Shows duplicate email warning  

---

## 🔭 Future Enhancements

- Password hashing with bcrypt for security  
- Client & server-side input validation  
- Email verification system  
- User login & session management  
- Cloud deployment (Render, Vercel, etc.)

---

## 👤 Author

Vijay Shikhare  
[LinkedIn](https://www.linkedin.com/in/vijayshikhare) | [GitHub](https://github.com/vijayshikhare)

---

## 📄 License

MIT License — See LICENSE file for details.

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/8b5eb85b-7515-46ae-97d7-dd6099b57487)
![image](https://github.com/user-attachments/assets/a26be9d5-e5a2-4c89-8765-5fe5cc798d41)
![image](https://github.com/user-attachments/assets/a70f971c-32ab-4d44-bb66-7d6451229df7)


---

## 🔑 Keywords

`Node.js registration form`, `Express MongoDB signup`, `Bootstrap 5 user form`,  
`MongoDB Atlas user auth`, `email uniqueness validation`, `full-stack registration system`

---

If you want me to help generate your `server.js` or HTML files next, just say the word!
