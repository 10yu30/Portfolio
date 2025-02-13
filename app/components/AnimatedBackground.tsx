"use client"

import type React from "react"
import { useSpring, animated } from "@react-spring/web"

const AnimatedBackground: React.FC = () => {
  const props = useSpring({
    from: { background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)" },
    to: async (next) => {
      while (1) {
        await next({ background: "linear-gradient(120deg, #5ee7df 0%, #b490ca 100%)" })
        await next({ background: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)" })
        await next({ background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)" })
      }
    },
    config: { duration: 5000 },
  })

  return <animated.div style={props} className="fixed inset-0 z-0" />
}

export default AnimatedBackground

