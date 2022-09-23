import React from 'react'
import isEqual from 'fast-deep-equal'

interface ProfileIconProps extends React.SVGProps<SVGSVGElement> {}

const ProfileIcon: React.FC<ProfileIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 258.75 258.75"
      xmlSpace="preserve"
      {...props}
    >
      <circle cx="129.375" cy="60" r="60" />
      <path d="M129.375 150c-60.061 0-108.75 48.689-108.75 108.75h217.5c0-60.061-48.689-108.75-108.75-108.75z" />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  )
}

export default React.memo(ProfileIcon, isEqual)
