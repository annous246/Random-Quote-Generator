import { useRef, useState } from 'react'
import './App.css'

function App() {
  const container=useRef('null')
  const [index, setIndex] = useState(0)
  const [quotes,setQuotes]=useState([
    {q:"Against logic there is no armor like ignorance.",a:"Laurence J. Peter"},
    {q:"A mind set in its ways is wasted. Don't do it.",a:"Eric Schmidt,"},
    {q:"Disappearing can be quite the coping mechanism for those of us who fear abandonment the very most of all. If we disappear, you have to find us. You're the one who worries. We know where we are, but you can't leave me. I'm in charge and doing the leaving. Not the other way around.",a:"Jennifer Neal,"},
    {q:"Ultimately, the only power to which man should aspire is that which he exercises over himself.",a:"Elie Wiesel"},
    {q:"He who builds a better mousetrap these days runs into material shortages, patent-infringement suits, work stoppages, collusive bidding, discount discrimination--and taxes.",a:"H. E. Martz"}
  ])
  
  function random(){
    const randomNum=parseInt(Math.random()*10)%5;
    setTimeout(()=>{setIndex(randomNum)},200)
    
    


  }

  return (
  <div id='quote-box' ref={container}>
    <div id='text'>'{quotes[index].q}'</div>
    <div id='author'>{quotes[index].a}</div>
    <button id='new-quote' onClick={random}>New Quote</button>
    <a href='twitter.com/intent/tweet' id='tweet-quote'>Twitter</a>
    <span id='builder'>By Anas Rabhi</span>
  </div>
  )
}

export default App
