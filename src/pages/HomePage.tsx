import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <p className="text-2xl">Bienvenu sur mon site :</p>
      <ul>
        <li><Link to={'/quotes'}>Citations</Link></li>
      </ul>
    </div>
  )
}

export default HomePage