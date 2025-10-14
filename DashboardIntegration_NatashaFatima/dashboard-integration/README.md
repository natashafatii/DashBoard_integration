# Power BI Dashboard Integration – Next.js Project

## 🧾 Overview
This project integrates a **Power BI dashboard** into a **Next.js web application** using an `<iframe>`.  
It demonstrates data visualization, responsiveness, and dynamic embedding of Power BI reports for project management analytics.

---

## 🧰 Tools & Setup
- **Node.js v22.20.0**
- **Next.js 15.5.4**
- **Power BI Desktop**
- **VS Code**
- **Tailwind CSS** (for basic UI styling)

---

## ⚙️ How to Run Locally
1. Open **VS Code**
2. Open the project folder:
dashboard-integration
3. Open a new terminal in VS Code and run:
```bash
npm install
npm run dev
```
Open your browser and go to:
http://localhost:3000/dashboard
The embedded Power BI dashboard will appear with a loading animation
## 📊 Dashboard Details

The Power BI dashboard is created from two data sources:

- **task.csv** – project tasks and timelines  
- **team_workload.csv** – team members, workload, and capacity  

**Relationship:**
task[Assignee] → team_workload[Assignee]


---

### 📈 Visuals Included
1. **Project Timeline (Bar/Gantt Chart)** – shows project progress  
2. **Task Status Pie Chart** – displays task completion status  
3. **Team Workload Chart** – compares workload vs capacity  

**Interactive Slicers:**
- Project  
- Assignee  
- Priority  

---

## 🔗 Embedding the Power BI Dashboard

The dashboard is embedded using an `<iframe>` in:

src/app/dashboard/page.js

arduino
Copy code

To update the dashboard:

1. Generate a new embed URL from **Power BI Service**.  
2. Replace the existing link in the `<iframe src="...">`.

**Example:**
```jsx
<iframe
  src="https://app.powerbi.com/view?r=YOUR_NEW_EMBED_URL"
  width="100%"
  height="600px"
  allowFullScreen
></iframe>

🧠 Features

Responsive design that adjusts to window size.

Loading spinner while dashboard loads.

Automatic resizing using React hooks (useEffect).

Power BI report refreshes without modifying code.

🎬 Demonstration

A short demo video Final_Dashboard_Demo.mp4 is included in the ZIP file, showing:

Dashboard filters in action.

Next.js page loading and responsiveness.

👩‍💻 Author

Natasha Fatima
Course: Data Science
Assignment: Power BI + Next.js Integration
Institution: Bahria University
