import React from 'react'
import Navbar from '../Components/Navbar'
import Start from '../Components/Start'
import Start2 from '../Components/Start2'
import link1 from '../assets/image1.jpg'
import link2 from '../assets/image2.jpg'
import link3 from '../assets/image3.jpg'
import link4 from '../assets/download.jpg'


function Home() {
  return (
    <div>
        <Navbar />

        <Start 
        h='Stay Organized, Every Day'
        text='Personal Task Manager empowers you to take control of your goals with simple planning and smart organization. It helps you break big tasks into manageable steps, set deadlines, and stay consistent. Whether you’re working on projects, assignments, or daily chores, this tool keeps your priorities clear and progress visible. Plan better, act smarter, and move forward with confidence every day.'
        link={link1}
        />

        <hr></hr>

        <Start2
        h='Productivity Made Easy'
        text='Personal Task Manager helps you organize your day with clarity and control. Whether you’re managing studies, work tasks, or personal goals, this tool keeps everything neatly in one place. You can create new tasks, set priorities, and mark them as complete — all within a smooth, distraction-free interface. Stay focused and achieve more with less stress every single day.'
        link={link2}
        />

        <hr></hr>

        <Start 
        h='Focus & Simplicity'
        text='Staying productive doesn’t have to be complicated. With the Task Manager, you can plan your schedule, set deadlines, and track your progress with ease. Each task you complete brings you closer to your goals and helps you build a consistent routine. Designed for simplicity and efficiency, it turns your to-do list into a powerful productivity system.'
        link={link3}
        />

        <hr></hr>

        <Start2
        h='Plan. Prioritize. Progress.'
        text='Life gets busy, but Personal Task Manager ensures you never lose track of what matters most. From daily reminders to long-term projects, it helps you balance work, studies, and personal growth in one place. Track your progress, celebrate small wins, and keep improving your time management — because every completed task is a step toward success.'
        link={link4}
        />
        
    </div>
  )
}

export default Home