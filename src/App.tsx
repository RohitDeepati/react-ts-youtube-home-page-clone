// react imports
import { useState } from "react"
// components imports
import { CategoryPills } from "./components/CategoryPills"
import { VideoGrid } from "./components/VideoGrid"

// layout componets import
import { PageHeader } from "./layouts/PageHeader"
import { Sidebar } from "./layouts/Sidebar"

// json data imports
import { categories, videos } from "./data/home"
// context component imports
import { SidebarProvide } from "./context/SidebarContext"

function App() {
  // state for horizontal selected categories
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <SidebarProvide>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <div>
            <Sidebar />
          </div>
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {videos.map((video) => (
                <VideoGrid key={video.id} {...video} />
              ))}

            </div>
          </div>
        </div>
      </div>
    </SidebarProvide>
  )
}

export default App
