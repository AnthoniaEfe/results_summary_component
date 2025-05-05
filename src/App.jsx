import data from '../data.json';
import reaction from './assets/icon-reaction.svg'
import memory from './assets/icon-memory.svg'
import verbal from './assets/icon-verbal.svg'
import visual from './assets/icon-visual.svg'

const icons = [reaction, memory, verbal, visual];

function App() {
  return (
    <div className="font-Hanken-Grotesk min-h-screen flex items-center justify-center bg-blue-50 md:p-4 p-0 m-0 ">
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-none md:rounded-3xl overflow-hidden md:shadow-lg bg-white">
        <div className="bg-gradient-to-b to-Light-royal-blue-background from-Light-slate-blue-background text-white flex flex-col z-15
        items-center justify-center p-10 md:w-1/2 text-center space-y-4 shadow-xl md:shadow-none rounded-t-none rounded-b-3xl md:rounded-3xl">
          <h2 className="text-xl font-semibold">Your Result</h2>
          <div className="bg-gradient-to-b from-Violet-blue-circle to-Persian-blue-circle rounded-full h-36 w-36 flex items-center 
          justify-center flex-col text-4xl font-bold">
            <span>76</span>
            <span className="text-sm font-normal text-blue-200 mt-1">of 100</span>
          </div>
          <p className="text-2xl font-bold">Great</p>
          <p className="text-sm text-blue-100">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="p-10 md:w-1/2 bg-white space-y-6">
          <h3 className="text-gray-700 text-lg font-bold">Summary</h3>
          <div className="space-y-4">
            {data.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-4 rounded-xl ${item.color}`}
              >
                <div className="flex items-center gap-2">
                  <img src={icons[index]}/>
                  <span>{item.category}</span>
                </div>
                <div className="text-gray-600 font-semibold">
                  {item.score} <span className="text-gray-400">/ 100</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full bg-Dark-gray-blue text-white py-3 rounded-full 
          hover:bg-gradient-to-b to-Light-royal-blue-background from-Light-slate-blue-background">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
