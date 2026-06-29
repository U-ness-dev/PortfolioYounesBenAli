function SkillBadge({ name, icon }) {
  return (
    <span>
      {icon && <img src={icon} alt="" />}
      {name}
    </span>
  )
}

export default SkillBadge
