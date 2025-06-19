

 # Sabhav — Your Eternal Companion

Sabhav is a cross-platform emotional support app designed to provide emotional well-being support through interactive features.  
Built using **Expo + React Native + Web** for a fully responsive experience across mobile, tablet, and desktop.

---

## 📦 Tech Stack

- **Expo + React Native + Web**
- **Expo Router** for navigation
- **Tailwind CSS / NativeWind** for styling
- **OpenAI API**
- **EAS Build** for production builds
- **Git + GitHub** for version control

---

## ⚙ Setup Instructions

### 1️⃣ Clone the repository

git clone https://github.com/truegreenintrovert/sabhav.git
cd sabhav

2️⃣ Install dependencies
npm install
# or
yarn install


3️⃣ Create environment variables
Create a file named .env in the project root:

OPENAI_API_KEY=your-openai-api-key-here
✅ Make sure .env is in .gitignore.

If sharing with team:

cp .env .env.example
Edit .env.example to:

OPENAI_API_KEY=your-openai-api-key-here
4️⃣ Run the app locally

npx expo start
✅ Then:

Press w to open web

Press a to open Android emulator

Press i to open iOS simulator (macOS)

5️⃣ Build for production (EAS Build)
Set EAS secret for API key

eas secret:create --name OPENAI_API_KEY --value sk-your-prod-key

Build commands
bash
Copy
Edit
eas build --platform android
eas build --platform ios
eas build --platform web
6️⃣ Commit and push changes

First time setup

git init
git remote add origin https://github.com/truegreenintrovert/sabhav.git
git branch -M main
Commit changes

git add .
git commit -m "Initial Sabhav setup"
git push -u origin main
Regular push

git add .
git commit -m "Your message"
git push
7️⃣ Clean up Git history (if needed)
If you accidentally commit secrets:


git rm --cached path/to/file
git commit -m "Remove sensitive file"
git push
For full history clean (use git filter-repo or BFG Repo Cleaner — ask the team)

📁 Project Structure



/sabhav
 ├── src/
 │    ├── app/       
 │    ├── components/ 
 │    ├── assets/
 │    ├── api/   
 │    ├── hooks/
 │    ├── utils/
 │    └── app.config.js
 ├── .env
 ├── .gitignore
 ├── package.json
 └── README.md





📌 Notes
✅ .env is ignored (never commit your real keys)
✅ Use EAS Build secrets for production keys
✅ PRs preferred for updates
✅ Follow Expo + EAS best practices

❤️ Credits
Made with ❤️ by Fruitenium Technologies 

yaml

## ⚡ **Next steps**
👉 Save this as `README.md` in your project.  
👉 Commit:

git add README.md
git commit -m "Add complete README with setup commands"
git push