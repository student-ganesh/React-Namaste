# 🌟 Namaste React

A modern React project powered by Parcel, Redux Toolkit, and TailwindCSS. Built with best practices in mind for performance, structure, and maintainability.

---

## 🚀 Tech Stack

* ⚛️ React 19
* 🌐 React Router v6
* 🎯 Redux Toolkit
* 💨 TailwindCSS 4
* 📦 Parcel Bundler
* 🧪 Jest + React Testing Library

---

## 📁 Project Structure

```
/src
 ├ /components      # Shared/reusable UI components
 ├ /pages           # Route-based components
 ├ /redux           # Redux slices & store setup
 ├ /assets          # Images, fonts, etc.
 ├ /utils           # Helper functions
 └ App.js, index.js
```

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/student-ganesh/React-Namaste.git
cd React-Namaste
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

---

## 📜 Scripts

```json
"scripts": {
  "dev": "parcel src/index.html --open",
  "build": "parcel build src/index.html",
  "test": "jest",
  "watch-test": "jest --watch"
}
```

---

## ✨ Features

* 🚀 Fast builds with Parcel
* 🧩 Modular and scalable folder structure
* 🧠 Redux Toolkit integration
* 🧪 Testing ready (Jest + RTL)
* 📱 TailwindCSS for responsive UI
* 🧪 CI-ready architecture

---

## 🧪 Testing

Run unit tests:

```bash
npm test
```

---

## 🚀 Deployment

Build for production:

```bash
npm run build
```

Deploy using platforms like:

* Vercel
* Netlify
* GitHub Pages

---

## 📸 Screenshots

#Home Page
![image](https://github.com/user-attachments/assets/0a3add88-21b1-4319-a3c1-932a01ec7cb2)

#Menu Page
![image](https://github.com/user-attachments/assets/707c3fd7-319d-4aaa-b505-18d7f5d7516a)

#Contact Page
![image](https://github.com/user-attachments/assets/635dd671-47a0-4098-b725-89896788e4fe)

#About Us Page
![image](https://github.com/user-attachments/assets/e6849342-9ee7-4c04-9649-2e6d2076f7a8)

#Cart Page
![image](https://github.com/user-attachments/assets/ae2ba797-0599-46c4-9182-252f5753d5cf)


---

## 📚 Reference Notes

### 📦 Parcel Benefits

* Dev builds and production builds are super fast
* Code splitting, minification, hashing
* Compresses output and supports old browsers

### 📥 Export/Import in React

**Default Export**

```js
export default MyComponent;
import MyComponent from './MyComponent';
```

**Named Export**

```js
export const MyComponent = () => {}
import { MyComponent } from './MyComponent';
```

### 🔁 React Lifecycle

* Constructor → Render → `componentDidMount()`
* In functional components, handled using `useEffect()`

### 🪝 Common Hooks

* `useState`, `useEffect`, `useReducer`, `useRef`, `useContext`

### 🔧 Redux Toolkit Setup

1. Install dependencies
2. Create slice(s)
3. Create store
4. Provide to app via `<Provider>`
5. Use `useSelector` and `useDispatch`

---

## 📩 Contact

**Ganesh Vijay Kadam**
[GitHub](https://github.com/student-ganesh)
[LinkedIn](https://www.linkedin.com/in/ganesh-kadam-0694a126a)
[Email](ganukadam1978@gmail.com)

---

## ✅ License

[ISC](./LICENSE)

---

Need help with Tailwind, Redux slices, or automated testing? Let me know!
