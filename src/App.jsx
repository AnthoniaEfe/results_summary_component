import data from '../data.json';
import reaction from './assets/icon-reaction.svg'
import memory from './assets/icon-memory.svg'
import verbal from './assets/icon-verbal.svg'
import visual from './assets/icon-visual.svg'

const icon = [reaction, memory, verbal, visual];

function App() {
  return (
    <div className="font-Hanken-Grotesk bg-Pale-blue m-0 p-0 md:p-4 w-screen min-h-screen flex flex-col gap-0 md:justify-center md:items-center">
      <section className="w-full md:max-w-[750px] h-auto flex flex-col md:flex-row justify-center items-center gap-0 p-4 md:p-8 rounded-2xl">
        <div className="bg-linear-to-b from-Light-slate-blue-background to-Light-royal-blue-background text-white
            flex flex-col flex-1 gap-4 p-4 md:p-8 w-full h-full justify-evenly items-center rounded-2xl ">
          <p className="text-white">Your result</p>
          <div className="bg-linear-to-b from-Violet-blue-circle to-Persian-blue-circle rounded-full w-fit p-6 ">
            <h1 className="text-2xl font-extrabold text-center">76</h1>
            <p className='text-center'>of 100</p>
          </div>
          <h2>Great</h2>
          <p>You scored higher than 65% of the people who have taken these tests</p>
        </div>

        <div className="bg-White text-Dark-gray-blue flex flex-col flex-1 gap-4 p-6 md:p-10 w-full h-full justify-evenly ">
          <h3 className="text-left font-bold">Summary</h3>
          <ul className='w-full gap-4'>
            {data.map((item, index) => (
            <li key={item.id} className='w-full p-4'>
              <img src={icon[index]}/>
              <h4>{item.category}</h4>
              <p>{`${item.score}/100`}</p>
            </li>
              ))}
          </ul>
          <button className='bg-Dark-gray-blue text-white rounded-full p-4'>Continue</button>
        </div>
      </section>
    </div>
  )
}

export default App
