import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className='flex flex-row gap-2'>
      <h2>Header</h2>
      <NavLink to="/">Logo</NavLink>
      <NavLink to="/dashboard"><img src="public/images/profil.svg" alt="profil" /></NavLink>
    </div>
  )
}
