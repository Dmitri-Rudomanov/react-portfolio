import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/DD.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 1,
        duration: 14,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 7,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="227.05625px"
        height="300.4px"
        version="1.0"
        viewBox="157.228125 -73 185.54375 296"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(203.13500499725342, 121.8649959564209)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M108.68-89.53L108.68-76.08L108.68-76.08Q108.68-51.33 87.55-47.86L87.55-47.86L109.83 0L91.10 0L69.15-47.28L32.10-47.28L32.10 0L15.18 0L15.18-118.33L79.96-118.33L79.96-118.33Q108.68-118.33 108.68-89.53L108.68-89.53ZM32.10-101.42L32.10-64.20L79.05-64.20L79.05-64.20Q85.82-64.20 88.79-67.17L88.79-67.17L88.79-67.17Q91.76-70.14 91.76-76.91L91.76-76.91L91.76-88.71L91.76-88.71Q91.76-95.48 88.79-98.45L88.79-98.45L88.79-98.45Q85.82-101.42 79.05-101.42L79.05-101.42L32.10-101.42Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
