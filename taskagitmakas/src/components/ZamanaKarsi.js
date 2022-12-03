import React, { useState } from 'react'
import './oyun.css'
import rock from './rock.png'
import paper from './paper.png'
import scissors from './scissors.png'
import { useEffect, useRef } from "react"
import Alert from "react-bootstrap/Alert";

function Game() {
    const gameArr = [rock, paper, scissors]
    const [srcPlayer, setSrcPlayer] = useState(rock)
    const [srcComputer, setSrcComputer] = useState(rock)
    const [status, setStatus] = useState('')
    const [playerCounter, setPlayerCounter] = useState(0)
    const [computerCounter, setcComputerCounter] = useState(0)
    let deger=0
    const rockBtn = () => {
        setSrcPlayer(rock)
        let i = Math.floor(Math.random() * 3)
        setSrcComputer(gameArr[i])
        if (gameArr[i] === rock) {
            setStatus('Berabere')
        }
        if (gameArr[i] === paper) {
            setStatus('Kaybettin')
            setcComputerCounter(computerCounter + 1)
        }
        if (gameArr[i] === scissors) {
            setStatus('Kazandın')
            setPlayerCounter(playerCounter + 1)
        }
    }
    const paperBtn = () => {
        setSrcPlayer(paper)
        let i = Math.floor(Math.random() * 3)
        setSrcComputer(gameArr[i])
        if (gameArr[i] === rock) {
            setStatus('Kazandın ')
            setPlayerCounter(playerCounter + 1)
        }
        if (gameArr[i] === paper) {
            setStatus('Berabere')
        }
        if (gameArr[i] === scissors) {
            setStatus('Kaybettin')
            setcComputerCounter(computerCounter + 1)
        }
    }
    const scissorsBtn = () => {
        setSrcPlayer(scissors)
        let i = Math.floor(Math.random() * 3)
        setSrcComputer(gameArr[i])
        if (gameArr[i] === rock) {
            setStatus('Kaybettin')
            setcComputerCounter(computerCounter + 1)
        }
        if (gameArr[i] === paper) {
            setStatus('Kazandın')
            setPlayerCounter(playerCounter + 1)
        }
        if (gameArr[i] === scissors) {
            setStatus('Berabere')
        }
    }

    function refreshPage() {
            window.location.reload();
        }

    const formatTime =(time) => {
        let minutes = Math.floor(time/60)
        let seconds = Math.floor(time - minutes * 60)

        if (minutes <= 10) minutes = '0' + minutes;
        if (seconds <= 10) seconds = '0' + seconds;
        return minutes + ':' + seconds
    }
    const [countdown, setCountdown] = useState(10)
    const timerId = useRef()

    useEffect(() => {
        timerId.current = setInterval(()=> {
            setCountdown(prev => prev - 1)
        },1000)
        return () => clearInterval(timerId.current)
    },[])
    useEffect(() => {
        if(countdown <= 0){
            clearInterval(timerId.current)
        }
    }, [countdown])
    if(countdown <= 0) {
        if (playerCounter>computerCounter){
            deger=playerCounter-computerCounter
            return (
                <Alert className="popupbtn" variant="success" onClose={() => refreshPage()} dismissible>
                    <Alert.Heading>ZAMAN DOLDU!</Alert.Heading>
                    <p>
                        Zamanın doldu. Senin Skorun:{playerCounter} ve Bilgisayarın skoru:{computerCounter}
                        <br/>
                        <br/>
                        <br/>

                                            TEBRİKLER KAZANDIN!
                    </p>
                    <button onClick={refreshPage} className="popupbtn">TEKRAR OYNA</button>
                </Alert>
            );
        }else {
            deger=computerCounter-playerCounter

            return (
                <Alert className="popupbtn" variant="danger" onClose={() => refreshPage()} dismissible>
                    <Alert.Heading>ZAMAN DOLDU!</Alert.Heading>
                    <h1>
                        Zamanın doldu. Senin Skorun:{playerCounter} ve Bilgisayarın skoru:{computerCounter}
                        <br/>
                        <br/>
                        <br/>
                                            KAYBETTİN!!!!!
                    </h1>
                    <button onClick={refreshPage} className="popupbtn">TEKRAR OYNA</button>
                </Alert>
            );
        }

    }

    return (
        <div className='game'>
            <h1 class='header'>
                {' '}
                <strong>{status}</strong>{' '}
            </h1>
            <div className='top'>
                <div className='computer'>
                    <p>Bilgisayar</p>
                    <p className='score'>
                        <strong className='red'>{computerCounter}</strong>
                    </p>
                </div>
                <div className='player'>
                    <p>Oyuncu</p>
                    <p className='score'>
                        <strong className='red'> {playerCounter}</strong>
                    </p>
                </div>
            </div>
            <div className='middle'>
                <img src={srcComputer} alt='rock' className={`el`} />
                <h2>Kalan Zaman: {formatTime(countdown)}</h2>
                <img src={srcPlayer} alt='rock' className={`el2`} />
            </div>
            <div className='bottom'>
                <img
                    width='200px'
                    className='tas'
                    src='tas.png'
                    alt='rock'
                    onClick={rockBtn}
                />
                <img
                    width='200px'
                    className='kagit'
                    src='kagit.png'
                    alt='rock'
                    onClick={paperBtn}
                />
                <img
                    width='200px'
                    className='makas'
                    src='makas.png'
                    alt='rock'
                    onClick={scissorsBtn}
                />
            </div>
        </div>
    )
}

export default Game
