import Image from "next/image";
import styles from "./page.module.css";
import { Profile } from '@/components/Profile';
import { TodoList } from '@/components/Todolist';
import { Avatar } from '@/components/Avatar';
 
export default function Home() {
  return ( 
    <div> 
      <h1>Olá Turma!</h1>
      <Profile/>
      <Profile/>
      <Profile/>
      <hr />
      <TodoList />
      <hr />
      <Avatar />
      </div>
    
  )
}