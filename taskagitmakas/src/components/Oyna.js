import React, { useState } from 'react'
import './oyun.css'
import rock from './rock.png'
import paper from './paper.png'
import scissors from './scissors.png'
function Game() {
    const gameArr = [rock, paper, scissors]
    const [srcPlayer, setSrcPlayer] = useState(rock)
    const [srcComputer, setSrcComputer] = useState(rock)
    const [status, setStatus] = useState('')
    const [playerCounter, setPlayerCounter] = useState(0)
    const [computerCounter, setcComputerCounter] = useState(0)
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
                <img src={srcComputer} alt='rock' className={`reflex hand `} />
                <img src={srcPlayer} alt='rock' className={`hand  `} />
            </div>
            <div className='bottom'>
                <img
                    width='250px'
                    className='rock'
                    src='tas.png'
                    alt='rock'
                    onClick={rockBtn}
                />
                <img
                    width='250px'
                    className='paper'
                    src='kagit.png'
                    alt='rock'
                    onClick={paperBtn}
                />
                <img
                    width='250px'
                    className='scissors'
                    src='makas.png'
                    alt='rock'
                    onClick={scissorsBtn}
                />
            </div>
        </div>
    )
}

export default Game
