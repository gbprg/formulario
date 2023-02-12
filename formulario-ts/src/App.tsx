import Header from "./components/Header"
import Post from "./components/Post"
import Sidebar from "./components/Sidebar"

import styles from "./App.module.css"

import "./styles.css"

const posts = [
  { 
    id: 1,
    author: {
      avatarUrl: "http://github.com/gbprg.png",
      name: "Gabriel Duarte",
      role: "Zé ruela qualquer @8888888"
    },
    content: [
      { type: "paragraph", content:"Fala galeraa"},
      { type: "paragraph", content:"Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é My App"},
      { type: "link", content:"gabriel.dev/doctorcare" },
    ],
    publishedAt: new Date("2023-02-06 11:55:38"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "data:image/jpeg;base64,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",
      name: "Ja Morant",
      role: "Player Basketball"
    },
    content: [
      { type: "paragraph", content:"Fala galeraa"},
      { type: "paragraph", content:"Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é My App" },
      { type: "link", content:"gabriel.dev/doctorcare" },
    ],
    publishedAt: new Date("2023-02-06 11:55:38"),
  },
]

export default function App() {

  return (
    <div>
      <Header/>
      <div className={styles.sectionContent}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  
  )
}


