import React from "react"

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://w.wallhaven.cc/full/po/wallhaven-polerm.jpg')`,
          filter: "blur(5px)",
        }}
      >

        <div className="fixed inset-0 bg-linear-to-br from-purple-900/40 via-pink-900/30 to-blue-900/40" />
      </div>


      {children}
    </div>
  )
}

export default Background
